-- 풍산고 기말 시험 대비: Supabase 초기 설정
-- Supabase 대시보드 > SQL Editor 에 전체를 붙여 넣고 Run 하세요. 여러 번 실행해도 안전합니다.

create extension if not exists pgcrypto with schema extensions;

-- 학생 기록 (닉네임 + 비밀번호 4자리 해시 + 풀이 기록)
create table if not exists public.players (
  nick        text primary key check (char_length(nick) between 1 and 12),
  pin_hash    text not null,
  data        jsonb not null default '{}'::jsonb,
  fail_count  int  not null default 0,
  locked_until timestamptz,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- 의견함
create table if not exists public.feedback (
  id         bigint generated always as identity primary key,
  nick       text check (char_length(nick) <= 12),
  body       text not null check (char_length(body) between 1 and 1000),
  created_at timestamptz not null default now()
);

alter table public.players  enable row level security;
alter table public.feedback enable row level security;

-- 관리자: 이 이메일로 로그인한 계정만 전체 기록과 의견을 읽을 수 있음
create or replace function public.is_admin() returns boolean
language sql stable as $$
  select coalesce(auth.jwt() ->> 'email', '') = 'leekmoon09@gmail.com'
$$;

drop policy if exists players_admin_read on public.players;
create policy players_admin_read on public.players for select to authenticated using (public.is_admin());

drop policy if exists feedback_insert on public.feedback;
create policy feedback_insert on public.feedback for insert to anon, authenticated
  with check (char_length(body) between 1 and 1000);

drop policy if exists feedback_admin_read on public.feedback;
create policy feedback_admin_read on public.feedback for select to authenticated using (public.is_admin());

-- 학생은 표를 직접 못 건드리고, 아래 두 함수로만 로그인/저장
-- 비밀번호 5번 틀리면 10분 잠금
create or replace function public.player_login(p_nick text, p_pin text)
returns jsonb language plpgsql security definer set search_path = public, extensions as $$
declare r public.players;
begin
  p_nick := btrim(p_nick);
  if p_nick is null or char_length(p_nick) not between 1 and 12 then return jsonb_build_object('status','bad_nick'); end if;
  if p_pin !~ '^[0-9]{4}$' then return jsonb_build_object('status','bad_pin'); end if;
  select * into r from public.players where nick = p_nick for update;
  if not found then
    insert into public.players(nick, pin_hash) values (p_nick, crypt(p_pin, gen_salt('bf')));
    return jsonb_build_object('status','new','data','{}'::jsonb);
  end if;
  if r.locked_until is not null and r.locked_until > now() then
    return jsonb_build_object('status','locked');
  end if;
  if r.pin_hash = crypt(p_pin, r.pin_hash) then
    update public.players set fail_count = 0, locked_until = null where nick = p_nick;
    return jsonb_build_object('status','ok','data', r.data);
  end if;
  update public.players
     set fail_count = r.fail_count + 1,
         locked_until = case when r.fail_count + 1 >= 5 then now() + interval '10 minutes' else null end
   where nick = p_nick;
  return jsonb_build_object('status','wrong');
end $$;

create or replace function public.player_save(p_nick text, p_pin text, p_data jsonb)
returns boolean language plpgsql security definer set search_path = public, extensions as $$
declare r public.players;
begin
  if octet_length(p_data::text) > 200000 then return false; end if;
  select * into r from public.players where nick = btrim(p_nick);
  if not found or (r.locked_until is not null and r.locked_until > now())
     or r.pin_hash <> crypt(p_pin, r.pin_hash) then return false; end if;
  update public.players set data = p_data, updated_at = now() where nick = r.nick;
  return true;
end $$;

revoke all on function public.player_login(text, text) from public;
revoke all on function public.player_save(text, text, jsonb) from public;
grant execute on function public.player_login(text, text) to anon, authenticated;
grant execute on function public.player_save(text, text, jsonb) to anon, authenticated;

-- ===== 프로필: 닉네임 확인·변경, 비밀번호 변경 (2026-11-03 추가) =====
create or replace function public.nick_available(p_nick text)
returns boolean language sql security definer set search_path = public as $$
  select char_length(btrim(p_nick)) between 1 and 12
     and not exists (select 1 from public.players where nick = btrim(p_nick))
$$;

create or replace function public.player_rename(p_nick text, p_pin text, p_new text)
returns text language plpgsql security definer set search_path = public, extensions as $$
declare r public.players;
begin
  p_new := btrim(p_new);
  if p_new is null or char_length(p_new) not between 1 and 12 then return 'bad'; end if;
  select * into r from public.players where nick = btrim(p_nick) for update;
  if not found or r.pin_hash <> crypt(p_pin, r.pin_hash) then return 'auth'; end if;
  if exists (select 1 from public.players where nick = p_new) then return 'taken'; end if;
  update public.players set nick = p_new, updated_at = now() where nick = r.nick;
  return 'ok';
end $$;

create or replace function public.player_repin(p_nick text, p_pin text, p_new text)
returns boolean language plpgsql security definer set search_path = public, extensions as $$
declare r public.players;
begin
  if p_new !~ '^[0-9]{4}$' then return false; end if;
  select * into r from public.players where nick = btrim(p_nick) for update;
  if not found or r.pin_hash <> crypt(p_pin, r.pin_hash) then return false; end if;
  update public.players set pin_hash = crypt(p_new, gen_salt('bf')), fail_count = 0, locked_until = null where nick = r.nick;
  return true;
end $$;

revoke all on function public.nick_available(text) from public;
revoke all on function public.player_rename(text, text, text) from public;
revoke all on function public.player_repin(text, text, text) from public;
grant execute on function public.nick_available(text) to anon, authenticated;
grant execute on function public.player_rename(text, text, text) to anon, authenticated;
grant execute on function public.player_repin(text, text, text) to anon, authenticated;

-- ===== 관리자 고정 계정 (2026-11-03 추가) =====
-- '비밀번호4자리' 부분을 실제 비밀번호로 바꿔서 실행 (저장소가 공개라 실제 값은 여기 적지 않음)
-- 관리자로 로그인한 기기에서는 닉네임/비밀번호 입력 없이 이 계정으로 자동 접속
insert into public.players(nick, pin_hash) values ('풍산동신라면', crypt('비밀번호4자리', gen_salt('bf')))
  on conflict (nick) do update set pin_hash = excluded.pin_hash, fail_count = 0, locked_until = null;

create or replace function public.admin_me()
returns jsonb language plpgsql security definer set search_path = public, extensions as $$
declare r public.players;
begin
  if not public.is_admin() then return null; end if;
  select * into r from public.players where nick = '풍산동신라면';
  if not found then
    insert into public.players(nick, pin_hash) values ('풍산동신라면', crypt('비밀번호4자리', gen_salt('bf'))) returning * into r;
  end if;
  return jsonb_build_object('nick', r.nick, 'data', r.data);
end $$;

create or replace function public.admin_save(p_data jsonb)
returns boolean language plpgsql security definer set search_path = public as $$
begin
  if not public.is_admin() or octet_length(p_data::text) > 200000 then return false; end if;
  update public.players set data = p_data, updated_at = now() where nick = '풍산동신라면';
  return found;
end $$;

revoke all on function public.admin_me() from public;
revoke all on function public.admin_save(jsonb) from public;
grant execute on function public.admin_me() to authenticated;
grant execute on function public.admin_save(jsonb) to authenticated;

-- ===== 관리자 비밀 링크 방식 (2026-11-03 변경) =====
-- '관리자키' 부분은 실제 키로 바꿔서 실행 (저장소가 공개라 실제 값은 적지 않음)
create table if not exists public.admin_keys (key_hash text primary key);
alter table public.admin_keys enable row level security;
insert into public.admin_keys values (encode(extensions.digest('관리자키', 'sha256'), 'hex')) on conflict do nothing;
create or replace function public.admin_ok(p_key text) returns boolean
language sql stable security definer set search_path = public, extensions as $$
  select exists (select 1 from public.admin_keys where key_hash = encode(digest(coalesce(p_key, ''), 'sha256'), 'hex'))
$$;
revoke all on function public.admin_ok(text) from public, anon, authenticated;
-- 관리자 계정은 일반 로그인으로는 못 들어오게 비밀번호를 무작위로
update public.players set pin_hash = crypt(gen_random_uuid()::text, gen_salt('bf')) where nick = '풍산동신라면';
drop function if exists public.admin_me();
drop function if exists public.admin_save(jsonb);
create or replace function public.admin_me(p_key text) returns jsonb
language plpgsql security definer set search_path = public, extensions as $$
declare r public.players;
begin
  if not public.admin_ok(p_key) then return null; end if;
  select * into r from public.players where nick = '풍산동신라면';
  if not found then
    insert into public.players(nick, pin_hash) values ('풍산동신라면', crypt(gen_random_uuid()::text, gen_salt('bf'))) returning * into r;
  end if;
  return jsonb_build_object('nick', r.nick, 'data', r.data);
end $$;
create or replace function public.admin_save(p_key text, p_data jsonb) returns boolean
language plpgsql security definer set search_path = public as $$
begin
  if not public.admin_ok(p_key) or octet_length(p_data::text) > 200000 then return false; end if;
  update public.players set data = p_data, updated_at = now() where nick = '풍산동신라면';
  return found;
end $$;
create or replace function public.admin_players(p_key text) returns setof jsonb
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.admin_ok(p_key) then return; end if;
  return query select jsonb_build_object('nick', nick, 'data', data, 'updated_at', updated_at) from public.players order by updated_at desc;
end $$;
create or replace function public.admin_feedback(p_key text) returns setof jsonb
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.admin_ok(p_key) then return; end if;
  return query select jsonb_build_object('nick', nick, 'body', body, 'created_at', created_at) from public.feedback order by created_at desc limit 500;
end $$;
grant execute on function public.admin_me(text) to anon, authenticated;
grant execute on function public.admin_save(text, jsonb) to anon, authenticated;
grant execute on function public.admin_players(text) to anon, authenticated;
grant execute on function public.admin_feedback(text) to anon, authenticated;

-- ===== 메시지함 · 폰 알림 · 피드백 답장 (2026-11-03 추가) =====
-- 'PUSH_URL', 'PUSH_SECRET' 부분은 실제 값으로 바꿔서 실행 (저장소가 공개라 실제 값은 적지 않음)
create extension if not exists pg_net with schema extensions;

create table if not exists public.messages (
  id         bigint generated always as identity primary key,
  to_nick    text not null,
  title      text not null check (char_length(title) <= 120),
  body       text not null default '' check (char_length(body) <= 4000),
  meta       jsonb not null default '{}'::jsonb,
  read_at    timestamptz,
  created_at timestamptz not null default now()
);
create index if not exists messages_to on public.messages(to_nick, created_at desc);
create table if not exists public.push_subs (
  endpoint   text primary key,
  nick       text not null,
  sub        jsonb not null,
  created_at timestamptz not null default now()
);
create table if not exists public.app_secrets (name text primary key, value text not null);
create table if not exists public.replies_sent (rid text primary key, fid bigint, sent_at timestamptz not null default now());
alter table public.feedback add column if not exists status text not null default 'new';
alter table public.messages     enable row level security;
alter table public.push_subs    enable row level security;
alter table public.app_secrets  enable row level security;
alter table public.replies_sent enable row level security;

insert into public.app_secrets values ('push_url', 'PUSH_URL'), ('push_secret', 'PUSH_SECRET')
  on conflict (name) do update set value = excluded.value;

-- 누가 요청했는지: 관리자 키면 관리자 계정, 아니면 닉네임+비밀번호 확인
create or replace function public.who(p_nick text, p_pin text, p_key text) returns text
language plpgsql stable security definer set search_path = public, extensions as $$
declare r public.players;
begin
  if p_key is not null and public.admin_ok(p_key) then return '풍산동신라면'; end if;
  select * into r from public.players where nick = btrim(coalesce(p_nick, ''));
  if not found or (r.locked_until is not null and r.locked_until > now())
     or coalesce(p_pin, '') !~ '^[0-9]{4}$' or r.pin_hash <> crypt(p_pin, r.pin_hash) then return null; end if;
  return r.nick;
end $$;
revoke all on function public.who(text, text, text) from public, anon, authenticated;

create or replace function public.msg_list(p_nick text, p_pin text, p_key text default null) returns setof jsonb
language plpgsql stable security definer set search_path = public as $$
declare me text := public.who(p_nick, p_pin, p_key);
begin
  if me is null then return; end if;
  return query select jsonb_build_object('id', id, 'title', title, 'body', body, 'meta', meta, 'read', read_at is not null, 'created_at', created_at)
    from public.messages where to_nick = me order by created_at desc limit 200;
end $$;
create or replace function public.msg_read(p_nick text, p_pin text, p_key text, p_id bigint) returns boolean
language plpgsql security definer set search_path = public as $$
declare me text := public.who(p_nick, p_pin, p_key);
begin
  if me is null then return false; end if;
  update public.messages set read_at = coalesce(read_at, now()) where id = p_id and to_nick = me;
  return found;
end $$;
create or replace function public.msg_delete(p_nick text, p_pin text, p_key text, p_id bigint) returns boolean
language plpgsql security definer set search_path = public as $$
declare me text := public.who(p_nick, p_pin, p_key);
begin
  if me is null then return false; end if;
  delete from public.messages where id = p_id and to_nick = me and read_at is not null;
  return found;
end $$;
create or replace function public.push_subscribe(p_nick text, p_pin text, p_key text, p_sub jsonb) returns boolean
language plpgsql security definer set search_path = public as $$
declare me text := public.who(p_nick, p_pin, p_key);
begin
  if me is null or coalesce(p_sub->>'endpoint', '') !~ '^https://' or octet_length(p_sub::text) > 4000 then return false; end if;
  insert into public.push_subs(endpoint, nick, sub) values (p_sub->>'endpoint', me, p_sub)
    on conflict (endpoint) do update set nick = excluded.nick, sub = excluded.sub;
  return true;
end $$;
create or replace function public.push_unsubscribe(p_endpoint text) returns boolean
language sql security definer set search_path = public as $$
  delete from public.push_subs where endpoint = p_endpoint returning true
$$;

-- 피드백이 들어오면 관리자 메시지함으로
create or replace function public.fb_to_admin() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.messages(to_nick, title, body, meta)
  values ('풍산동신라면', '새 피드백이 도착했어요', coalesce(new.nick, '익명') || ': ' || left(new.body, 3000),
          jsonb_build_object('kind', 'fb_new', 'fid', new.id, 'from', coalesce(new.nick, '익명'), 'q', new.body));
  return new;
end $$;
drop trigger if exists fb_to_admin on public.feedback;
create trigger fb_to_admin after insert on public.feedback for each row execute function public.fb_to_admin();

-- 메시지가 생기면 폰 알림 보내기 (Edge Function 호출)
create or replace function public.msg_push() returns trigger
language plpgsql security definer set search_path = public, extensions as $$
declare u text; s text;
begin
  select value into u from public.app_secrets where name = 'push_url';
  select value into s from public.app_secrets where name = 'push_secret';
  if u is null or u !~ '^https://' then return new; end if;
  perform net.http_post(url := u,
    body := jsonb_build_object('nick', new.to_nick, 'title', new.title, 'body', left(new.body, 140), 'id', new.id),
    headers := jsonb_build_object('Content-Type', 'application/json', 'x-push-secret', s));
  return new;
exception when others then return new;
end $$;
drop trigger if exists msg_push on public.messages;
create trigger msg_push after insert on public.messages for each row execute function public.msg_push();

-- 닉네임을 바꾸면 메시지·알림·피드백도 따라가게
create or replace function public.nick_follow() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if new.nick <> old.nick then
    update public.messages  set to_nick = new.nick where to_nick = old.nick;
    update public.push_subs set nick = new.nick where nick = old.nick;
    update public.feedback  set nick = new.nick where nick = old.nick;
  end if;
  return new;
end $$;
drop trigger if exists nick_follow on public.players;
create trigger nick_follow after update of nick on public.players for each row execute function public.nick_follow();

-- 관리자: 피드백 목록(번호·처리 상태 포함), 답장 보내기, 공지 보내기
drop function if exists public.admin_feedback(text);
create or replace function public.admin_feedback(p_key text) returns setof jsonb
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.admin_ok(p_key) then return; end if;
  return query select jsonb_build_object('id', id, 'nick', nick, 'body', body, 'status', status, 'created_at', created_at)
    from public.feedback order by created_at desc limit 500;
end $$;
create or replace function public.admin_reply(p_key text, p_rid text, p_fid bigint, p_changes text, p_howto text) returns text
language plpgsql security definer set search_path = public as $$
declare f public.feedback;
begin
  if not public.admin_ok(p_key) then return 'auth'; end if;
  if exists (select 1 from public.replies_sent where rid = p_rid) then return 'dup'; end if;
  select * into f from public.feedback where id = p_fid;
  if not found then return 'nofb'; end if;
  insert into public.replies_sent(rid, fid) values (p_rid, p_fid);
  update public.feedback set status = 'done' where id = p_fid;
  if f.nick is null or not exists (select 1 from public.players where nick = f.nick) then return 'anon'; end if;
  insert into public.messages(to_nick, title, body, meta)
  values (f.nick, '피드백에 대한 수정사항이 전달되었습니다', left(p_changes, 2000),
          jsonb_build_object('kind', 'fb_reply', 'fid', p_fid, 'q', f.body, 'changes', left(p_changes, 2000), 'howto', left(coalesce(p_howto, ''), 1000)));
  return 'sent';
end $$;
create or replace function public.admin_notice(p_key text, p_title text, p_body text) returns int
language plpgsql security definer set search_path = public as $$
declare n int;
begin
  if not public.admin_ok(p_key) or char_length(btrim(coalesce(p_title, ''))) = 0 then return -1; end if;
  insert into public.messages(to_nick, title, body, meta)
    select nick, left(btrim(p_title), 120), left(coalesce(p_body, ''), 4000), jsonb_build_object('kind', 'notice') from public.players;
  get diagnostics n = row_count;
  return n;
end $$;

grant execute on function public.msg_list(text, text, text) to anon, authenticated;
grant execute on function public.msg_read(text, text, text, bigint) to anon, authenticated;
grant execute on function public.msg_delete(text, text, text, bigint) to anon, authenticated;
grant execute on function public.push_subscribe(text, text, text, jsonb) to anon, authenticated;
grant execute on function public.push_unsubscribe(text) to anon, authenticated;
grant execute on function public.admin_feedback(text) to anon, authenticated;
grant execute on function public.admin_reply(text, text, bigint, text, text) to anon, authenticated;
grant execute on function public.admin_notice(text, text, text) to anon, authenticated;

-- ===== 보조 관리자 5명 (2026-11-03 추가) =====
-- '보조키1'~'보조키5' 부분은 실제 키로 바꿔서 실행 (저장소가 공개라 실제 값은 적지 않음)
create table if not exists public.sub_keys (
  key_hash   text primary key,
  slot       int,
  nick       text unique,
  created_at timestamptz not null default now()
);
alter table public.sub_keys enable row level security;
insert into public.sub_keys(key_hash, slot) values
  (encode(extensions.digest('보조키1', 'sha256'), 'hex'), 1),
  (encode(extensions.digest('보조키2', 'sha256'), 'hex'), 2),
  (encode(extensions.digest('보조키3', 'sha256'), 'hex'), 3),
  (encode(extensions.digest('보조키4', 'sha256'), 'hex'), 4),
  (encode(extensions.digest('보조키5', 'sha256'), 'hex'), 5)
on conflict do nothing;

create or replace function public.sub_ok(p_key text) returns boolean
language sql stable security definer set search_path = public, extensions as $$
  select exists (select 1 from public.sub_keys where key_hash = encode(digest(coalesce(p_key, ''), 'sha256'), 'hex'))
$$;
create or replace function public.sub_nick(p_key text) returns text
language sql stable security definer set search_path = public, extensions as $$
  select nick from public.sub_keys where key_hash = encode(digest(coalesce(p_key, ''), 'sha256'), 'hex')
$$;
revoke all on function public.sub_ok(text) from public, anon, authenticated;
revoke all on function public.sub_nick(text) from public, anon, authenticated;

create or replace function public.sub_me(p_key text) returns jsonb
language plpgsql security definer set search_path = public as $$
declare n text; d jsonb;
begin
  if not public.sub_ok(p_key) then return null; end if;
  n := public.sub_nick(p_key);
  if n is null then return jsonb_build_object('need_nick', true); end if;
  select data into d from public.players where nick = n;
  return jsonb_build_object('nick', n, 'data', coalesce(d, '{}'::jsonb));
end $$;
create or replace function public.sub_setnick(p_key text, p_nick text) returns text
language plpgsql security definer set search_path = public, extensions as $$
begin
  if not public.sub_ok(p_key) then return 'auth'; end if;
  if public.sub_nick(p_key) is not null then return 'already'; end if;
  p_nick := btrim(p_nick);
  if p_nick is null or char_length(p_nick) not between 1 and 12 then return 'bad'; end if;
  if exists (select 1 from public.players where nick = p_nick) then return 'taken'; end if;
  insert into public.players(nick, pin_hash) values (p_nick, crypt(gen_random_uuid()::text, gen_salt('bf')));
  update public.sub_keys set nick = p_nick where key_hash = encode(digest(p_key, 'sha256'), 'hex');
  return 'ok';
end $$;
create or replace function public.sub_save(p_key text, p_data jsonb) returns boolean
language plpgsql security definer set search_path = public as $$
declare n text := public.sub_nick(p_key);
begin
  if n is null or octet_length(p_data::text) > 200000 then return false; end if;
  update public.players set data = p_data, updated_at = now() where nick = n;
  return found;
end $$;
-- 보조 관리자는 닉네임 없이 풀이 기록만 (오답 분석용), 피드백은 번호·처리 상태 없이
create or replace function public.sub_players(p_key text) returns setof jsonb
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.sub_ok(p_key) then return; end if;
  return query select data from public.players;
end $$;
create or replace function public.sub_feedback(p_key text) returns setof jsonb
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.sub_ok(p_key) then return; end if;
  return query select jsonb_build_object('nick', nick, 'body', body, 'created_at', created_at) from public.feedback order by created_at desc limit 500;
end $$;

-- 메시지함·알림도 보조 관리자 계정으로 받게
create or replace function public.who(p_nick text, p_pin text, p_key text) returns text
language plpgsql stable security definer set search_path = public, extensions as $$
declare r public.players; s text;
begin
  if p_key is not null and public.admin_ok(p_key) then return '풍산동신라면'; end if;
  if p_key is not null then s := public.sub_nick(p_key); if s is not null then return s; end if; end if;
  select * into r from public.players where nick = btrim(coalesce(p_nick, ''));
  if not found or (r.locked_until is not null and r.locked_until > now())
     or coalesce(p_pin, '') !~ '^[0-9]{4}$' or r.pin_hash <> crypt(p_pin, r.pin_hash) then return null; end if;
  return r.nick;
end $$;
revoke all on function public.who(text, text, text) from public, anon, authenticated;

grant execute on function public.sub_me(text) to anon, authenticated;
grant execute on function public.sub_setnick(text, text) to anon, authenticated;
grant execute on function public.sub_save(text, jsonb) to anon, authenticated;
grant execute on function public.sub_players(text) to anon, authenticated;
grant execute on function public.sub_feedback(text) to anon, authenticated;

-- ===== 시험 2주 전 모의고사 특별 공개 알림 (2026-11-03 추가) =====
-- 2026-11-23(월) 오전 7시 30분(한국 시간)에 모든 사용자에게 공지 + 폰 알림이 한 번 가요.
-- (모의고사 잠금 해제 자체는 앱에서 11월 23일 0시에 자동으로 풀려요)
create extension if not exists pg_cron;

create or replace function public.mock_open_notice() returns int
language plpgsql security definer set search_path = public as $$
declare n int;
begin
  if now() < timestamptz '2026-11-23 00:00:00+09' then return 0; end if;
  if exists (select 1 from public.messages where meta->>'ev' = 'mock-open') then return 0; end if;
  insert into public.messages(to_nick, title, body, meta)
    select nick,
      '[시험 2주 전 특별 이벤트] 모든 과목 모의고사가 열렸어요!',
      E'시험이 딱 2주 남았어요.\n\n아직 모의고사를 풀어 보지 못한 친구들을 위해, 오늘부터 문제 풀이를 다 끝내지 않았어도 모든 과목 모의고사를 특별히 열어 두었어요.\n\n실제 시험처럼 25문제를 끝까지 풀어 보고, 모의고사 통계에서 내 취약 유형과 시험 직전에 할 일을 확인해 보세요. 틀린 문제는 모의고사 오답에서 다시 풀 수 있어요.\n\n남은 2주, 지금 바로 와서 체험해 보고 끝까지 같이 달려 봐요!',
      jsonb_build_object('kind', 'notice', 'ev', 'mock-open')
    from public.players;
  get diagnostics n = row_count;
  begin perform cron.unschedule('mock-open-notice'); exception when others then null; end;
  return n;
end $$;

select cron.schedule('mock-open-notice', '30 22 22 11 *', $$select public.mock_open_notice()$$);
-- ===== 공지 대상 선택 (2026-11-04 추가) =====
-- p_to: 'all' 전체 / 'staff' 관리자(본인 + 보조 관리자) / 'some' 선택한 사람(p_nicks)
create or replace function public.admin_notice_to(p_key text, p_title text, p_body text, p_to text, p_nicks text[] default null) returns int
language plpgsql security definer set search_path = public as $$
declare n int;
begin
  if not public.admin_ok(p_key) or char_length(btrim(coalesce(p_title, ''))) = 0 then return -1; end if;
  insert into public.messages(to_nick, title, body, meta)
    select p.nick, left(btrim(p_title), 120), left(coalesce(p_body, ''), 4000),
           jsonb_build_object('kind', 'notice', 'to', p_to)
    from public.players p
    where case p_to
      when 'all' then true
      when 'staff' then p.nick = '풍산동신라면' or p.nick in (select nick from public.sub_keys where nick is not null)
      when 'some' then p.nick = any(coalesce(p_nicks, '{}'::text[]))
      else false end;
  get diagnostics n = row_count;
  return n;
end $$;
grant execute on function public.admin_notice_to(text, text, text, text, text[]) to anon, authenticated;
-- ===== 초기화 메뉴 분리 (2026-11-06 추가) =====
-- 공지 정보 초기화: 모든 사람의 메시지함에서 공지를 지움
create or replace function public.admin_clear_notices(p_key text) returns int
language plpgsql security definer set search_path = public as $$
declare n int;
begin
  if not public.admin_ok(p_key) then return -1; end if;
  delete from public.messages where meta->>'kind' = 'notice';
  get diagnostics n = row_count;
  return n;
end $$;
-- 피드백 정보 초기화: 받은 피드백과 답장 기록을 모두 지움
create or replace function public.admin_clear_feedback(p_key text) returns int
language plpgsql security definer set search_path = public as $$
declare n int;
begin
  if not public.admin_ok(p_key) then return -1; end if;
  delete from public.feedback where true;
  get diagnostics n = row_count;
  delete from public.replies_sent where true;
  return n;
end $$;
-- 개인별 계정 삭제: 계정, 메시지함, 폰 알림 구독을 지움 (본인 관리자 계정은 삭제 불가)
create or replace function public.admin_delete_player(p_key text, p_nick text) returns int
language plpgsql security definer set search_path = public as $$
declare n int;
begin
  if not public.admin_ok(p_key) then return -1; end if;
  if p_nick = '풍산동신라면' then return -2; end if;
  delete from public.push_subs where nick = p_nick;
  delete from public.messages where to_nick = p_nick;
  update public.sub_keys set nick = null where nick = p_nick;
  delete from public.players where nick = p_nick;
  get diagnostics n = row_count;
  return n;
end $$;
grant execute on function public.admin_clear_notices(text) to anon, authenticated;
grant execute on function public.admin_clear_feedback(text) to anon, authenticated;
grant execute on function public.admin_delete_player(text, text) to anon, authenticated;
-- ===== 공지 사진 첨부 (2026-11-06 추가) =====
create table if not exists public.notice_imgs (
  id         uuid primary key default gen_random_uuid(),
  data       text not null check (char_length(data) <= 1500000),
  created_at timestamptz not null default now()
);
alter table public.notice_imgs enable row level security;
-- 관리자만 사진 올리기 (압축된 이미지 data URL)
create or replace function public.admin_notice_img(p_key text, p_data text) returns uuid
language plpgsql security definer set search_path = public as $$
declare i uuid;
begin
  if not public.admin_ok(p_key) or p_data not like 'data:image/%' then return null; end if;
  insert into public.notice_imgs(data) values (p_data) returning id into i;
  return i;
end $$;
-- 공지 사진 보기 (추측할 수 없는 무작위 id로만 열람)
create or replace function public.notice_img(p_id uuid) returns text
language sql stable security definer set search_path = public as $$
  select data from public.notice_imgs where id = p_id
$$;
-- 공지 보내기에 사진 목록(p_imgs) 추가
drop function if exists public.admin_notice_to(text, text, text, text, text[]);
create or replace function public.admin_notice_to(p_key text, p_title text, p_body text, p_to text, p_nicks text[] default null, p_imgs uuid[] default null) returns int
language plpgsql security definer set search_path = public as $$
declare n int;
begin
  if not public.admin_ok(p_key) or char_length(btrim(coalesce(p_title, ''))) = 0 then return -1; end if;
  insert into public.messages(to_nick, title, body, meta)
    select p.nick, left(btrim(p_title), 120), left(coalesce(p_body, ''), 4000),
           jsonb_build_object('kind', 'notice', 'to', p_to, 'imgs', to_jsonb(coalesce(p_imgs, '{}'::uuid[])))
    from public.players p
    where case p_to
      when 'all' then true
      when 'staff' then p.nick = '풍산동신라면' or p.nick in (select nick from public.sub_keys where nick is not null)
      when 'some' then p.nick = any(coalesce(p_nicks, '{}'::text[]))
      else false end;
  get diagnostics n = row_count;
  return n;
end $$;
grant execute on function public.admin_notice_img(text, text) to anon, authenticated;
grant execute on function public.notice_img(uuid) to anon, authenticated;
grant execute on function public.admin_notice_to(text, text, text, text, text[], uuid[]) to anon, authenticated;

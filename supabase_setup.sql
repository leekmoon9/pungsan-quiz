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

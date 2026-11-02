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

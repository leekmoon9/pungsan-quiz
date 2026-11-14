-- v155: 공지·업데이트 하트(좋아요)
-- Supabase SQL Editor에서 한 번 실행하세요. 여러 번 실행해도 안전해요.
create table if not exists public.post_likes (
  post_id bigint not null,
  nick text not null,
  created_at timestamptz not null default now(),
  primary key (post_id, nick)
);
alter table public.post_likes enable row level security;
revoke all on public.post_likes from anon, authenticated;

-- 하트 누르기/취소 (본인 확인: 닉네임+비밀번호, 또는 관리자·보조 관리자 키)
create or replace function public.post_like(p_nick text, p_pin text, p_key text, p_id bigint, p_on boolean) returns jsonb
language plpgsql security definer set search_path = public as $$
declare me text := public.who(p_nick, p_pin, p_key);
begin
  if me is null or p_id is null then return null; end if;
  if p_on then
    insert into public.post_likes(post_id, nick) values (p_id, me) on conflict do nothing;
  else
    delete from public.post_likes where post_id = p_id and nick = me;
  end if;
  return jsonb_build_object('id', p_id, 'n', (select count(*) from public.post_likes where post_id = p_id), 'me', p_on);
end $$;

-- 글별 하트 수 + 내가 누른 글 목록
create or replace function public.post_like_info(p_nick text, p_pin text, p_key text) returns jsonb
language plpgsql stable security definer set search_path = public as $$
declare me text := public.who(p_nick, p_pin, p_key);
begin
  return jsonb_build_object(
    'c', coalesce((select jsonb_object_agg(post_id::text, n) from (select post_id, count(*) n from public.post_likes group by post_id) t), '{}'::jsonb),
    'm', coalesce((select jsonb_agg(post_id) from public.post_likes where nick = me), '[]'::jsonb));
end $$;

-- 관리자: 글마다 하트 누른 사람 목록
create or replace function public.admin_post_likes(p_key text, p_id bigint) returns setof jsonb
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.admin_ok(p_key) then return; end if;
  return query select jsonb_build_object('nick', nick, 'at', created_at)
    from public.post_likes where post_id = p_id order by created_at desc;
end $$;

grant execute on function public.post_like(text, text, text, bigint, boolean) to anon, authenticated;
grant execute on function public.post_like_info(text, text, text) to anon, authenticated;
grant execute on function public.admin_post_likes(text, bigint) to anon, authenticated;

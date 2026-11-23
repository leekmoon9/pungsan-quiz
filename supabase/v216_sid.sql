-- v216: 학번은 관리자만 볼 수 있게 — 보조 관리자용 목록에서 학번(_sid)을 뺀다
-- (이미 Supabase에 적용됨. 다시 실행해도 안전)
create or replace function public.sub_players(p_key text) returns setof jsonb
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.sub_ok(p_key) then return; end if;
  return query select data - '_sid' from public.players;
end $$;

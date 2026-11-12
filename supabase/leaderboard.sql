-- 리더보드 (Supabase > SQL Editor 에서 한 번 실행)
-- 학생 데이터(players.data)의 _lbq = { "2026-11-12": 푼 문제 수, ... } 를 기간별로 합산해 순위를 돌려줍니다.
-- 본인 인증이 되어야(who) 볼 수 있고, 닉네임과 문제 수만 보입니다.
create or replace function public.lb_top(p_nick text, p_pin text, p_key text, p_w0 text, p_w1 text)
returns jsonb
language plpgsql stable security definer set search_path = public as $$
declare me text := public.who(p_nick, p_pin, p_key); res jsonb;
begin
  if me is null then return '[]'::jsonb; end if;
  select coalesce(jsonb_agg(jsonb_build_object('nick', nick, 'n', n) order by n desc, nick), '[]'::jsonb) into res
  from (
    select p.nick, sum(case when e.value ~ '^[0-9]+$' then e.value::int else 0 end) as n
    from public.players p
    cross join lateral jsonb_each_text(case when jsonb_typeof(p.data->'_lbq') = 'object' then p.data->'_lbq' else '{}'::jsonb end) e
    where e.key >= coalesce(p_w0, '0000-00-00') and e.key <= coalesce(p_w1, '9999-99-99')
    group by p.nick
    having sum(case when e.value ~ '^[0-9]+$' then e.value::int else 0 end) > 0
    order by n desc, p.nick
    limit 50
  ) t;
  return res;
end $$;
revoke all on function public.lb_top(text, text, text, text, text) from public;
grant execute on function public.lb_top(text, text, text, text, text) to anon, authenticated;

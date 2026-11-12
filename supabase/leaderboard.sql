-- 리더보드 (Supabase > SQL Editor 에서 한 번 실행)
-- 종류(p_kind): 'q' 푼 문제 수, 'time' 공부 시간(초), 'streak' 현재 연속 학습일
-- 학생 데이터(players.data)의 _lbq(날짜별 푼 문제 수), _t(날짜별 공부 초), _lbs/_lbsd(연속 일수/기준일)를 사용합니다.
-- 본인 인증(who)이 되어야 볼 수 있고, 닉네임과 숫자만 보입니다.
drop function if exists public.lb_top(text, text, text, text, text);
create or replace function public.lb_rank(p_nick text, p_pin text, p_key text, p_w0 text, p_w1 text, p_kind text default 'q')
returns jsonb
language plpgsql stable security definer set search_path = public as $$
declare me text := public.who(p_nick, p_pin, p_key); res jsonb; today date := (now() at time zone 'Asia/Seoul')::date;
begin
  if me is null then return '[]'::jsonb; end if;
  if p_kind = 'streak' then
    select coalesce(jsonb_agg(jsonb_build_object('nick', nick, 'n', n) order by n desc, nick), '[]'::jsonb) into res
    from (
      select p.nick, (p.data->>'_lbs')::int as n from public.players p
      where coalesce(p.data->>'_lbs', '') ~ '^[0-9]+$' and (p.data->>'_lbs')::int > 0
        and coalesce(p.data->>'_lbsd', '') >= to_char(today - 1, 'YYYY-MM-DD')
      order by n desc, p.nick limit 50
    ) t;
    return res;
  end if;
  select coalesce(jsonb_agg(jsonb_build_object('nick', nick, 'n', n) order by n desc, nick), '[]'::jsonb) into res
  from (
    select p.nick, round(sum(case when e.value ~ '^[0-9.]+$' then e.value::numeric else 0 end))::int as n
    from public.players p
    cross join lateral jsonb_each_text(case when jsonb_typeof(p.data->(case when p_kind = 'time' then '_t' else '_lbq' end)) = 'object'
                                            then p.data->(case when p_kind = 'time' then '_t' else '_lbq' end) else '{}'::jsonb end) e
    where e.key >= coalesce(p_w0, '0000-00-00') and e.key <= coalesce(p_w1, '9999-99-99')
    group by p.nick
    having sum(case when e.value ~ '^[0-9.]+$' then e.value::numeric else 0 end) >= 1
    order by n desc, p.nick limit 50
  ) t;
  return res;
end $$;
revoke all on function public.lb_rank(text, text, text, text, text, text) from public;
grant execute on function public.lb_rank(text, text, text, text, text, text) to anon, authenticated;

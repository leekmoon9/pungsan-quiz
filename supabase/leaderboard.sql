-- 리더보드 (Supabase > SQL Editor 에서 한 번 실행)
-- 종류(p_kind): 'q' 푼 문제 수, 'time' 공부 시간(초), 'streak' 최고 연속 학습일
-- 학생 데이터(players.data)의 _lbq(날짜별 푼 문제 수), _t(날짜별 공부 초), _lbs/_lbsd(연속 일수/기준일)를 사용합니다.
-- 본인 인증(who)이 되어야 볼 수 있고, 닉네임과 숫자만 보입니다.
create or replace function public.lb_rank(p_nick text, p_pin text, p_key text, p_w0 text, p_w1 text, p_kind text default 'q')
returns jsonb
language plpgsql stable security definer set search_path = public as $$
declare me text := public.who(p_nick, p_pin, p_key); res jsonb; today date := (now() at time zone 'Asia/Seoul')::date;
begin
  if me is null then return '[]'::jsonb; end if;
  if p_kind = 'streak' then
    -- 최고 연속 학습일: 공부 시간 5분(300초) 이상이거나 문제를 1개 이상 푼 날이 며칠 연속됐는지 중 가장 긴 기록
    with days as (
      select p.nick, e.key::date as d
      from public.players p
      cross join lateral jsonb_each_text(case when jsonb_typeof(p.data->'_t') = 'object' then p.data->'_t' else '{}'::jsonb end) e
      where e.key ~ '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' and e.value ~ '^[0-9.]+$' and e.value::numeric >= 300
      union
      select p.nick, e.key::date
      from public.players p
      cross join lateral jsonb_each_text(case when jsonb_typeof(p.data->'_lbq') = 'object' then p.data->'_lbq' else '{}'::jsonb end) e
      where e.key ~ '^[0-9]{4}-[0-9]{2}-[0-9]{2}$' and e.value ~ '^[0-9.]+$' and e.value::numeric > 0
    ), grp as (
      select nick, d - (row_number() over (partition by nick order by d))::int as g from days
    ), runs as (
      select nick, max(cnt)::int as n from (select nick, g, count(*) as cnt from grp group by nick, g) r group by nick
    )
    select coalesce(jsonb_agg(jsonb_build_object('nick', nick, 'n', n) order by n desc, nick), '[]'::jsonb) into res
    from (select nick, n from runs where n > 0 order by n desc, nick limit 50) t;
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

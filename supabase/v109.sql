-- v109 설정 (Supabase > SQL Editor 에서 한 번 실행): 공부 알림 + 친구들과 비교
-- 그날 공부를 안 한 사람에게 하루 두 번(오후 6시, 오후 9시 30분) 폰 알림을 보냅니다.
-- 공부한 날 기준은 앱과 같아요: 그날 공부 시간 5분 이상 또는 문제를 1개 이상 풀었으면 공부한 날.
-- 폰 알림을 켠 사람만 받고, 프로필에서 '공부 알림'을 끈 사람(_nagoff)은 받지 않아요.
-- 문구는 아래 목록에서 무작위로 골라요. 연속 학습이 끊기기 직전이면 연속 일수를 넣은 문구가 자주 나와요.
create extension if not exists pg_cron;

create or replace function public.study_nag(p_slot int) returns int
language plpgsql security definer set search_path = public, extensions as $$
declare
  u text; s text; r record; n int := 0; stk int; dd int; msg text; L text[];
  today date := (now() at time zone 'Asia/Seoul')::date;
  td text := to_char(today, 'YYYY-MM-DD');
  yd text := to_char(today - 1, 'YYYY-MM-DD');
  A text[] := array[
    '📚 오늘 공부 아직이에요! 10분만 해 볼까요?',
    '✏️ 오늘의 첫 문제가 기다리고 있어요',
    '⏰ 지금 딱 한 파트만 풀어 봐요',
    '🧠 오늘 복습 안 하면 내일의 내가 힘들어요',
    '📖 필기 한 장만 읽어도 시작이에요!',
    '🍀 가볍게 5분, 지금 시작해요',
    '🙋 풍산 학습이 기다리는 중이에요',
    '💪 오늘의 나에게 지지 말아요!'];
  B text[] := array[
    '🌙 오늘 아직 공부 안 했어요! 자기 전에 5분만',
    '⏳ 오늘이 끝나기 전에 한 문제만 풀어요',
    '😢 오늘 공부 기록이 아직 비어 있어요',
    '🚨 지금 안 하면 오늘은 0문제예요!',
    '🛏️ 눕기 전에 딱 10문제만!',
    '🏆 친구들은 오늘도 리더보드를 올리는 중…',
    '📵 폰 보는 김에 한 문제만 풀고 가요'];
begin
  select value into u from public.app_secrets where name = 'push_url';
  select value into s from public.app_secrets where name = 'push_secret';
  if u is null or u !~ '^https://' then return 0; end if;
  dd := date '2026-12-07' - today;
  for r in
    select p.nick, p.data from public.players p
    where exists (select 1 from public.push_subs ps where ps.nick = p.nick)
      and coalesce(p.data->>'_nagoff', '') not in ('1', 'true')
      and not (
        (case when coalesce(p.data->'_t'->>td, '') ~ '^[0-9.]+$' then (p.data->'_t'->>td)::numeric else 0 end) >= 300
        or (case when coalesce(p.data->'_lbq'->>td, '') ~ '^[0-9.]+$' then (p.data->'_lbq'->>td)::numeric else 0 end) > 0)
  loop
    stk := case when coalesce(r.data->>'_lbs', '') ~ '^[0-9]+$' and coalesce(r.data->>'_lbsd', '') >= yd
                then (r.data->>'_lbs')::int else 0 end;
    L := case when p_slot = 2 then B else A end;
    if dd between 1 and 30 then L := L || ('📅 기말고사 D-' || dd || '! 오늘도 조금씩 해요'); end if;
    if stk >= 2 and random() < (case when p_slot = 2 then 0.7 else 0.5 end) then
      msg := (array['🔥 ' || stk || '일 연속 기록이 오늘 끊겨요! 한 문제만 풀어요',
                    '🔥 ' || stk || '일 불꽃이 꺼지기 직전이에요!',
                    '🔥 ' || stk || '일 연속, 오늘도 이어 갈까요?'])[1 + floor(random() * 3)::int];
    else
      msg := L[1 + floor(random() * array_length(L, 1))::int];
    end if;
    perform net.http_post(url := u,
      body := jsonb_build_object('nick', r.nick, 'title', msg, 'body', '', 'id', 'nag', 'tag', 'nag', 'url', './'),
      headers := jsonb_build_object('Content-Type', 'application/json', 'x-push-secret', s));
    n := n + 1;
  end loop;
  return n;
end $$;
revoke all on function public.study_nag(int) from public, anon, authenticated;

-- 시간은 UTC 기준: 09:00 UTC = 한국 오후 6시, 12:30 UTC = 한국 오후 9시 30분
do $$ begin
  begin perform cron.unschedule('study-nag-1'); exception when others then null; end;
  begin perform cron.unschedule('study-nag-2'); exception when others then null; end;
end $$;
select cron.schedule('study-nag-1', '0 9 * * *', $$select public.study_nag(1)$$);
select cron.schedule('study-nag-2', '30 12 * * *', $$select public.study_nag(2)$$);

-- 친구들과 비교: 기간(p_w0~p_w1) 동안 공부한 사람들의 평균 공부 시간(초)·푼 문제 수
-- 본인 인증(who)이 되어야 볼 수 있고, 평균 숫자와 인원수만 돌려줘요 (이름은 안 보여요).
create or replace function public.lb_avg(p_nick text, p_pin text, p_key text, p_w0 text, p_w1 text)
returns jsonb
language plpgsql stable security definer set search_path = public as $$
declare me text := public.who(p_nick, p_pin, p_key); res jsonb;
begin
  if me is null then return jsonb_build_object('n', 0, 't', 0, 'q', 0); end if;
  select jsonb_build_object('n', count(*), 't', coalesce(round(avg(t)), 0), 'q', coalesce(round(avg(q), 1), 0)) into res
  from (
    select p.nick,
      (select coalesce(sum(case when e.value ~ '^[0-9.]+$' then e.value::numeric else 0 end), 0)
         from jsonb_each_text(case when jsonb_typeof(p.data->'_t') = 'object' then p.data->'_t' else '{}'::jsonb end) e
         where e.key between p_w0 and p_w1) as t,
      (select coalesce(sum(case when e.value ~ '^[0-9.]+$' then e.value::numeric else 0 end), 0)
         from jsonb_each_text(case when jsonb_typeof(p.data->'_lbq') = 'object' then p.data->'_lbq' else '{}'::jsonb end) e
         where e.key between p_w0 and p_w1) as q
    from public.players p where p.nick <> '풍산동신라면'
  ) x where t >= 300 or q > 0;
  return res;
end $$;
grant execute on function public.lb_avg(text, text, text, text, text) to anon, authenticated;

// 메시지가 새로 생기면(데이터베이스 트리거가 호출) 그 사람 폰으로 알림을 보냄
// 필요한 비밀 값(Edge Functions > Secrets): VAPID_PUBLIC, VAPID_PRIVATE, PUSH_SECRET
// 함수 설정에서 "Verify JWT"는 끔 (대신 x-push-secret 으로 확인)
import webpush from "npm:web-push@3.6.7";
import { createClient } from "npm:@supabase/supabase-js@2";

const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
webpush.setVapidDetails(
  "https://leekmoon9.github.io/pungsan-quiz/",
  Deno.env.get("VAPID_PUBLIC")!,
  Deno.env.get("VAPID_PRIVATE")!,
);

Deno.serve(async (req) => {
  if (req.headers.get("x-push-secret") !== Deno.env.get("PUSH_SECRET")) {
    return new Response("unauthorized", { status: 401 });
  }
  const { nick, title, body, id } = await req.json();
  const { data } = await sb.from("push_subs").select("endpoint,sub").eq("nick", nick);
  let sent = 0;
  for (const r of data ?? []) {
    try {
      await webpush.sendNotification(
        r.sub,
        JSON.stringify({ title, body, tag: "msg-" + id, url: "./#/inbox" }),
        { TTL: 60 * 60 * 24 * 3 },
      );
      sent++;
    } catch (e) {
      const code = (e as { statusCode?: number }).statusCode;
      if (code === 404 || code === 410) await sb.from("push_subs").delete().eq("endpoint", r.endpoint);
    }
  }
  return Response.json({ sent });
});

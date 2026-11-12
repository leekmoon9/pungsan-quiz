// 항상 서버에서 최신 버전을 확인하고(no-cache), 인터넷이 안 될 때만 저장된 화면을 보여 줌
const C='pungsan-v137';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(['./','./index.html','./css/style.css','./js/data-passes.js','./js/covers.js','./js/app.js','./js/capture-guard.js','./logo-192.png'])).catch(()=>{}))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin||/\.pdf$/i.test(new URL(r.url).pathname))return;
 e.respondWith(fetch(r,{cache:'no-cache'}).then(res=>{const cp=res.clone();caches.open(C).then(c=>c.put(r,cp)).catch(()=>{});return res}).catch(()=>caches.match(r).then(m=>m||caches.match('./'))))});
// 폰 알림
self.addEventListener('push',e=>{let d={};try{d=e.data?e.data.json():{}}catch(x){d={title:'풍산 학습',body:e.data?e.data.text():''}}
 e.waitUntil(self.registration.showNotification(d.title||'풍산 학습',{body:'',icon:'logo-192.png',badge:'badge-96.png?v=2',tag:d.tag,data:{url:d.url||'./#/inbox'}}))});
self.addEventListener('notificationclick',e=>{e.notification.close();const url=new URL((e.notification.data&&e.notification.data.url)||'./#/inbox',self.registration.scope).href;
 e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{for(const c of cs){if('focus' in c){c.navigate?c.navigate(url).catch(()=>{}):0;return c.focus()}}return self.clients.openWindow(url)}))});

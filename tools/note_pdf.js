const {chromium}=require('playwright');
const F=`@font-face{font-family:'Jua';src:url(http://localhost:8767/Jua-Regular.ttf)}`;
const subj=process.argv[2],out=process.argv[3];
(async()=>{const b=await chromium.launch();const c=await b.newContext({viewport:{width:794,height:1123}});const p=await c.newPage();
await p.route('**/supabase-js**',r=>r.fulfill({contentType:'text/javascript',body:'window.supabase={createClient:()=>({rpc:async(f)=>({data:{status:"ok",data:{}}})})}'}));
await p.route('https://fonts.googleapis.com/**',r=>r.fulfill({contentType:'text/css',body:F}));
await p.route('http://localhost:8767/**',r=>{const f=r.request().url().split('/').pop();r.fulfill({path:require('path').join(__dirname,'fontsrv',f),headers:{'Access-Control-Allow-Origin':'*'}})});
await p.route('**/pretendard**',r=>r.fulfill({contentType:'text/css',body:`@font-face{font-family:'Pretendard Variable';font-weight:45 920;src:url(http://localhost:8767/PretendardVariable.woff2)}`}));
await p.addInitScript(()=>{localStorage.setItem('pungsan-web2:last','민수');localStorage.setItem('pungsan-web2:pin','1234');sessionStorage.setItem('pungsan-web2:webok','1')});
await p.goto('http://localhost:8765/');await p.waitForTimeout(1200);
await p.evaluate(subj=>{const n=subj,col=sCol(n),nm=n.split('|').join(' ');let h=`<section class="pcv"><div class="pcvi"><small>풍산 학습 · 필기 노트</small><h1>${nm}</h1><ol>${CUR[n].map(U=>`<li><b>${esc(U.n)}</b><span>${U.m.map(M=>esc(M.n)).join('<br>')}</span></li>`).join('')}</ol></div></section>`;
 CUR[n].forEach((U,u)=>U.m.forEach((M,k)=>{const o=noteOf(n,u,k);if(!o)return;h+=`<section class="pmid"><div class="phd" style="--hlc:${col}"><span>${esc(nm)} · ${esc(U.n)}</span><h2>${esc(M.n)}</h2></div><article class="nt" style="--nc:${col}">${o.b.map(ntBlock).join('')}</article></section>`}));
 for(const ss of document.styleSheets){try{for(let i=ss.cssRules.length-1;i>=0;i--){const r=ss.cssRules[i];if(r.media&&/print/.test(r.media.mediaText))ss.deleteRule(i)}}catch(e){}}
 document.querySelectorAll('#bk,#rf,#toast,.mdw,#inst').forEach(e=>e.remove());
 document.body.className='';document.body.innerHTML=`<main class="pdoc">${h}</main>`;
 const st=document.createElement('style');st.textContent=`@page{size:A4;margin:14mm 13mm 16mm}
 html,body{background:#fff!important;padding:0!important;margin:0!important}body::before,body::after{display:none!important}
 .pdoc{max-width:none!important;width:auto;padding:0!important;margin:0!important;font-size:13.2px}
 .pcv{height:250mm;display:flex;align-items:center;justify-content:center;break-after:page}
 .pcvi{width:100%;border:2px solid ${col};border-radius:16px;padding:28px 30px}.pcvi small{color:#7a7264;font-size:16px}.pcvi h1{font-size:60px;margin:8px 0 26px;font-family:Jua,sans-serif}
 .pcvi ol{list-style:none;padding:0;margin:0}.pcvi li{display:flex;gap:18px;padding:14px 0;border-top:1px solid #e0d8c7;font-size:16px}.pcvi li b{width:200px;flex:none}.pcvi li span{color:#4a443a;line-height:1.7}
 .pmid{break-before:page}.pmid:first-of-type{break-before:auto}
 .phd{border-bottom:2.5px solid ${col};padding-bottom:6px;margin-bottom:12px}.phd span{font-size:11.5px;color:#7a7264}.phd h2{margin:2px 0 0;font-size:22px;font-family:Jua,sans-serif}
 .nt{box-shadow:none!important;border:none!important;padding:0!important;background:none!important;margin:0!important}
 .nt h3,.nt .nkey,.nt .ntip,.nt .nvs,.nt .ntw,.nt .ndef,.nt .nfl,.nt figure{break-inside:avoid}.nt h3{break-after:avoid}
 .capm{display:none!important}.nt::before,.nt::after{display:none!important}.nt{background-image:none!important}body.cap>*{filter:none!important}.ntw{overflow:visible!important}.ntb{width:100%!important}`;document.head.appendChild(st)},subj);
await p.emulateMedia({media:'print'});await p.waitForTimeout(600);
await p.pdf({path:out,format:'A4',printBackground:true,preferCSSPageSize:true});await b.close()})();

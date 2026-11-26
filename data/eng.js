// ===== 영어 : 지문별 필기 + 문제(기본·실전·어휘) + 단어장 + 모의고사 — 지문 파일들을 앱에 연결 =====
(()=>{
const EN='영어',L=ENG.L,UN=ENG.UN,NN=['','','','',''],CI='①②③④⑤';
NOTE[EN]={};

// ---------- 단어 짝짓기 문제 자동 생성 ----------
const kot=s=>{const r=new Set(),t=s.replace(/[^가-힣]/g,'');for(let i=0;i+1<t.length;i++)r.add(t.slice(i,i+2));return r};
function pairQs(W){const out=[];
 [['w','영어 단어 뜻','단어'],['p','영어 숙어 뜻','숙어']].forEach(([ty,g,nm])=>{
  const L0=W.filter(w=>w[2]==ty);if(L0.length<5)return;
  const wrong=(w,G)=>{const cand=L0.filter(x=>x!==w&&!G.includes(x)),a=kot(w[1]);let best=cand[0];
   for(let t=0;t<cand.length;t++){const c=cand[(L0.indexOf(w)*5+t)%cand.length],b=kot(c[1]);let ov=false;a.forEach(x=>{if(b.has(x))ov=true});if(!ov){best=c;break}}return best};
  const mk=(list,bad)=>{const k=Math.min(5,list.length),G=Array.from({length:k},()=>[]);list.forEach((w,i)=>G[i%k].push(w));
   const txt=(gi,wi)=>G[gi].map((w,i)=>w[0]+' – '+(wi===i?wrong(w,G[gi])[1]:w[1])).join(' · ');
   const wi=gi=>(gi*2+1)%G[gi].length;
   const o=G.map((_,gi)=>bad?(gi==k-1?txt(gi,wi(gi)):txt(gi,-1)):(gi==0?txt(0,-1):txt(gi,wi(gi))));
   return {t:'mc',g,q:bad?`다음 중 영어 ${nm}와 윗글에서의 뜻이 잘못 짝지어진 것은?`:`다음 중 영어 ${nm}와 윗글에서의 뜻이 모두 바르게 짝지어진 것은?`,o,a:bad?k-1:0,e:'윗글에서의 뜻 — '+list.map(w=>w[0]+'='+w[1]).join(', ')+'.'}};
  let i=0,m=0;while(i<L0.length){let n=Math.min(15,L0.length-i);if(L0.length-i-n>0&&L0.length-i-n<5)n=L0.length-i-5>=5?L0.length-i-5:L0.length-i;
   let ch=L0.slice(i,i+n);if(ch.length<5)ch=L0.slice(-8);out.push(mk(ch,m%2==1));i+=n;m++}
 });return out};

// ---------- 문제 생성기 ----------
const gT={gr:'어법성 판단',vo:'어휘 쓰임 판단',ins:'문장 삽입',ord:'글의 순서',bl:'빈칸 추론',sm:'요약문 완성'};
const esc2=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
function marks(S,mk){const t=S.join(' ');let pos=0,out='',bad=[];
 mk.forEach(([o,s],i)=>{const re=new RegExp('(^|[^A-Za-z’\\-])('+esc2(o)+')(?![A-Za-z’\\-])','g');re.lastIndex=pos;const m=re.exec(t);if(!m)throw new Error('mark? '+o);const st=m.index+m[1].length;out+=t.slice(pos,st)+CI[i]+'__'+s+'__';pos=st+o.length;if(o!==s)bad.push(i)});
 if(bad.length!=1)throw new Error('틀린 표시는 1개여야 해요: '+bad);return [out+t.slice(pos),bad[0]]}
const GEN={
 gr(S,d){const [t,a]=marks(S,d.marks);return {t:'mc',ns:1,q:'다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?\n\n'+t,o:NN,a,e:d.e}},
 vo(S,d){const [t,a]=marks(S,d.marks);return {t:'mc',ns:1,q:'다음 글의 밑줄 친 부분 중, 문맥상 낱말의 쓰임이 적절하지 않은 것은?\n\n'+t,o:NN,a,e:d.e}},
 ins(S,d){const R=S.filter((_,i)=>i!=d.s),at=[...d.at].sort((a,b)=>a-b);let t='';R.forEach((x,i)=>{const k=at.indexOf(i);if(k>=0)t+=CI[k]+' ';t+=x+' '});const k2=at.indexOf(R.length);if(k2>=0)t+=CI[k2];const a=at.indexOf(d.s);if(a<0)throw new Error('ins 정답 위치 없음');
  return {t:'mc',ns:1,q:'글의 흐름으로 보아, 주어진 문장이 들어가기에 가장 적절한 곳은?\n\n'+S[d.s]+'\n\n'+t.trim(),o:NN,a,e:d.e}},
 ord(S,d){const [g,a,b]=d.cut,ch=[S.slice(g,g+a),S.slice(g+a,g+a+b),S.slice(g+a+b)],lab=d.lab;
  const blocks=['A','B','C'].map(L=>'('+L+') '+ch[lab.indexOf(L)].join(' '));
  const ans=lab.map(x=>'('+x+')').join(' – ');const O=['(A) – (C) – (B)','(B) – (A) – (C)','(B) – (C) – (A)','(C) – (A) – (B)','(C) – (B) – (A)'];const a2=O.indexOf(ans);if(a2<0)throw new Error('ord 정답이 보기에 없음 '+ans);
  return {t:'mc',q:'주어진 글 다음에 이어질 글의 순서로 가장 적절한 것은?\n\n'+S.slice(0,g).join(' ')+'\n\n'+blocks.join('\n\n'),o:O,a:a2,e:d.e,ns:1}},
 bl(S,d){const t=S.join(' ');const i=t.indexOf(d.ph);if(i<0)throw new Error('bl? '+d.ph);return {t:'mc',q:(d.st||'윗글의 빈칸에 들어갈 말로 가장 적절한 것은?')+'\n\n'+t.slice(0,i)+'[빈칸]'+t.slice(i+d.ph.length),o:d.o,a:0,e:d.e}},
 sm(S,d){return {t:'mc',q:'윗글의 내용을 한 문장으로 요약하고자 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?\n\n'+S.join(' ')+'\n\n↓\n\n'+d.s,o:d.o,a:0,e:d.e}},
 mc(S,d){return {t:'mc',q:d.q+'\n\n'+S.join(' '),o:d.o,a:0,e:d.e}}};
const build=(S,L0,gdef)=>L0.map(d=>{let q=d.k?GEN[d.k](S,d):Object.assign({},d);if(d.k&&!q.g)q.g=d.g||gT[d.k]||gdef;if(!q.t)q.t=q.o?'mc':typeof q.a=='boolean'?'ox':'sh';if(q.t=='sh'&&!q.m)q.m=q.a[0];if(d.ns&&!q.ns)q.ns=1;if(d.g&&!q.g)q.g=d.g;return q});

// ---------- 공통 해설 모음 (TIPS) ----------
Object.assign(TIPS,{'어법성 판단':'밑줄마다 수 일치·태·분사·관계사·접속사를 차례로 확인해요.','어휘 쓰임 판단':'반대말 함정(더/덜, 증가/감소)이 많아요. 글 전체 흐름에 맞는지 확인!','문장 삽입':'주어진 문장의 대명사·연결어(However, This)와 앞뒤 문장의 단서를 찾아요.','글의 순서':'주어진 글의 마지막 단서 → 지시어(This, These)와 연결어(However, As a result)로 이어요.','빈칸 추론':'빈칸 앞뒤의 연결어와 반복되는 핵심어를 단서로 써요.','요약문 완성':'본문의 핵심 어휘를 요약문 빈칸에 옮겨요.','영어 단어 뜻':'지문에서 쓰인 뜻으로 외워요. 단어장에서 뜻을 가리고 확인해 보세요.','영어 숙어 뜻':'숙어는 통째로! 단어장에서 숙어만 모아 볼 수 있어요.','영어 어휘 활용':'비슷한 말·다의어·구문 속 쓰임까지 확인해요.'});

// ---------- 지문 → 앱 데이터 ----------
const CI9='①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮';
const PL=[];UN.forEach((_,u)=>{});
const byU=UN.map(()=>[]);L.forEach(p=>byU[p.u].push(p));
byU.forEach((A,u)=>A.forEach((p,k)=>{p.k=k;p.S=ENG.T[p.id];if(!p.S)throw new Error('원문 없음 '+p.id);Object.assign(TIPS,p.tips||{});
 const W=p.W;
 NOTE[EN][u+'-'+k]={b:[
  ['case','출처',p.src,'영어Ⅱ · '+UN[u]+' '+p.no,p.sum1||''],
  ['h','01 한 줄 요약'],['p',p.sum],
  ['h','02 글의 구조'],['tbl',['단계','문장','내용'],p.st],
  ['h','03 문장별 해석'],['tbl',['번호','영어 · 해석'],p.S.map((s,i)=>[CI9[i]||String(i+1),s+'\n→ '+p.KO[i]])],
  ['h','04 구문 포인트'],...p.syn.map(x=>['def',x[0],x[1]]),
  ...(p.tip?[['tip',p.tip]]:[]),
  ['h','05 시험 포인트'],['ul',[...p.pts,'단어·숙어는 ==단어장==에서 가려 가며 외우고, 어휘 문제로 확인해요']]]};
 const pre='eng'+(u+1)+String(k+1).padStart(2,'0'),W2={v:0,b:1,x:2};
 const qB=build(p.S,p.B||[],'글의 내용'),qX=build(p.S,p.X||[],'영작').map(q=>Object.assign({lv:'x'},q)),
  qV=pairQs(W).concat(build(p.S,p.V||[],'영어 어휘 활용')).map(q=>Object.assign({lv:'v'},q));
 p.q=[].concat(qB,qX,qV).sort((a,b)=>W2[a.lv||'b']-W2[b.lv||'b']).map((q,i)=>Object.assign({id:pre+(q.lv||'b')+String(i+1).padStart(2,'0')},q));
 p.mq=build(p.S,p.M||[],'글의 내용');
 {const n=p.S.length,gv=Math.max(2,Math.round(n*0.25)),rem=n-gv,c1=Math.ceil(rem/3),c2=Math.ceil((rem-c1)/2);
  const ordQ=build(p.S,[{k:'ord',cut:[gv,c1,c2],lab:['B','C','A'],e:'연결어와 지시어로 글의 흐름을 따라가면 (B)-(C)-(A) 순서예요.'}],'글의 순서')[0];
  const f=re=>qX.find(q=>re.test(q.g||''));
  p.mp=[p.mq[0],p.mq[1],p.mq[2],ordQ,f(/요지/),f(/제목/),f(/요약/)].filter(Boolean)}
}));
CUR[EN]=UN.map((n,u)=>({n,m:byU[u].map(p=>({n:p.n,no:p.no,src:p.src,q:p.q}))})).filter(U=>U.m.length);

// 지문 팁에 없는 g는 공통 해설로 채움
{const FB={'요지 파악':'글 전체를 한 문장으로 — 반복되는 핵심어와 결론 문장을 찾아요.','내용 불일치':'선택지를 지문과 하나씩 대조하고, 과장·반대 표현을 골라요.','관계사':'선행사와 뒤 문장 구조(주어/목적어 빠짐)를 확인해요.','do 강조':'do + 동사원형은 동사를 강조해요(정말로 ~하다).','be full of':'be full of = ~로 가득하다 (= be filled with).','miss out on':'miss out on = (좋은 것을) 놓치다.','on the other hand':'on the other hand = 반면에(대조의 연결어).','to부정사 보어':'be동사 뒤 to부정사는 보어(명사적 용법)예요.','대명사 the ones':'the ones는 앞에 나온 복수 명사를 대신해요.'};
Object.keys(FB).forEach(g=>{if(!TIPS[g])TIPS[g]=FB[g]});
CUR[EN].forEach(U=>U.m.forEach(m=>m.q.forEach(q=>{if(q.g&&!TIPS[q.g])TIPS[q.g]='지문의 핵심 표현과 문장 구조를 다시 확인해요.'})))}
// 비어 있는 교재가 중간에 있으면 인덱스가 어긋나므로 막기
if(byU.some((A,u)=>!A.length&&byU.slice(u+1).some(x=>x.length)))throw new Error('빈 교재');

// ---------- 모의고사 : 지문마다 1문제씩, 3회 ----------
const MKN=24;
if(L.length>=MKN&&L.every(p=>p.mq&&p.mq.length>=3)){MOCK[EN]=[0,1,2].map(r=>({n:(r+1)+'회',lb:'영어 '+(r+1)+'회',q:L.map((p,i)=>Object.assign({id:'engm'+(r+1)+String(i+1).padStart(2,'0'),mk:1},p.mp[(i+3*r)%p.mp.length],{lv:undefined}))}));MOCK[EN].qn=L.length}

// ===== 단어장 : 지문 목록 → 지문마다 단어·숙어 학습 (단어 가리기 / 뜻 가리기) =====
const EP=[];byU.forEach(A=>A.forEach(p=>EP.push(p)));
const EV={h:{w:0,m:0},t:'all'};try{const o=JSON.parse(localStorage.getItem('pungsan-evoc')||'{}');if(o.h)EV.h=o.h;if(o.t)EV.t=o.t}catch(e){}
const evSave=()=>{try{localStorage.setItem('pungsan-evoc',JSON.stringify(EV))}catch(e){}};
const EYE2='<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
const hl=(s,f)=>{const i=s.toLowerCase().indexOf(f.toLowerCase());if(i<0)return esc(s);return esc(s.slice(0,i))+'<mark>'+esc(s.slice(i,i+f.length))+'</mark>'+esc(s.slice(i+f.length))};
const cnt=p=>({w:p.W.filter(x=>x[2]=='w').length,p:p.W.filter(x=>x[2]=='p').length});
function evPage(n,i){const col=sCol(n);
 if(i==null||!EP[i]){const tot=EP.reduce((a,p)=>a+p.W.length,0);
  let h=`<div class="shd"><h2 style="--hlc:${col}">단어장</h2><p class="tag">영어 · 지문 ${EP.length}개 · 단어·숙어 ${tot}개</p></div><div class="ev">`;
  let last=-1;EP.forEach((p,k)=>{if(p.u!=last){last=p.u;h+=`<h3 class="evh">${esc(UN[p.u])}</h3>`}const c=cnt(p);h+=`<button class="evp" onclick="vocabPage('${n}',${k})"><span class="evn${p.no.length>3?' l2':''}">${esc(p.no)}</span><span class="evt"><b>${esc(p.n)}</b><small>단어 ${c.w}개 · 숙어 ${c.p}개</small></span><span class="chev">›</span></button>`});
  return h+`<p class="evf">지문을 누르면 단어·숙어를 가려 가며 외울 수 있어요. 뜻은 모두 지문에서 쓰인 뜻이에요.</p></div>`}
 const p=EP[i],c=cnt(p),LS=p.W.filter(x=>EV.t=='all'||x[2]==EV.t);
 let h=`<div class="shd"><h2 style="--hlc:${col}">${esc(p.no)} 단어장</h2><p class="tag">${esc(p.n)} · 단어 ${c.w} · 숙어 ${c.p}</p></div><div class="ev">`;
 h+=`<div class="evtab">${[['all','전체',p.W.length],['w','단어',c.w],['p','숙어',c.p]].map(([k,t,m])=>`<button class="${EV.t==k?'on':''}" onclick="evTab('${n}',${i},'${k}')">${t} <small>${m}</small></button>`).join('')}</div>`;
 h+=`<div class="evstk"><span class="evsl">가리고<br>외우기</span><div class="evhb">${[['w','단어'],['m','뜻']].map(([k,t])=>`<button class="${EV.h[k]?'on':''}" onclick="evHide('${n}',${i},'${k}')">${EYE2}${t}</button>`).join('')}</div></div>`;
 h+=`<div class="evtb">`+LS.map(x=>`<div class="evw"><div class="evk${EV.h.w?' cov':''}" onclick="evPeek(this)"><b>${esc(x[0])}</b>${x[2]=='p'?'<i>숙어</i>':''}</div><div class="evm${EV.h.m?' cov':''}" onclick="evPeek(this)">${esc(x[1])}</div><div class="evs${EV.h.w?' cov':''}" onclick="evPeek(this)">${hl(p.S[x[3]-1],x[4])}</div></div>`).join('')+`</div>`;
 h+=`<button class="evgo" onclick="partPick('${n}',${p.u},${p.k})">이 지문 문제 풀기</button><p class="evf">칸을 누르면 그 칸만 잠깐 볼 수 있어요. 파란 글씨는 지문 속 문장이에요.</p></div>`;return h}
window.evPeek=el=>{if(el.classList.contains('cov')){el.classList.remove('cov');el.dataset.pk=1}else if(el.dataset.pk){el.classList.add('cov');delete el.dataset.pk}};
window.evTab=(n,i,t)=>{EV.t=t;evSave();vocabPage(n,i)};
window.evHide=(n,i,k)=>{EV.h[k]=EV.h[k]?0:1;evSave();const y=scrollY;vocabPage(n,i);scrollTo(0,y)};
VOCAB[EN]={lb:'단어장',sub:'지문 '+EP.length+'개 · 단어·숙어 '+EP.reduce((a,p)=>a+p.W.length,0)+'개 · 가려서 외우기',page:evPage};

const st=document.createElement('style');st.textContent=`
.ev{--eu:#f1a9a9;--ed:#c25a5a}
.ev .evh{font:17px Jua;margin:18px 2px 8px;color:#7a3a3a}
.ev .evp{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:12px 14px;margin-bottom:9px;border:none;border-radius:16px;background:var(--card);box-shadow:0 2px 10px rgba(90,70,40,.1);font:inherit;color:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent}
.ev .evn{flex:none;min-width:50px;height:44px;padding:0 8px;border-radius:12px;background:var(--eu);display:flex;align-items:center;justify-content:center;font:18px Jua;color:#5b2323}
.ev .evn.l2{font-size:15px}
.ev .evt{flex:1;min-width:0}.ev .evt b{display:block;font-size:16px;word-break:keep-all}.ev .evt small{display:block;color:var(--mut);font-size:12.5px;margin-top:2px}
.ev .chev{color:var(--mut);font-size:22px}
.ev .evtab{display:flex;gap:6px;margin:0 0 4px}
.ev .evtab button{flex:1;padding:10px 4px;border-radius:12px;border:none;background:var(--card);font:inherit;font-size:14.5px;font-weight:700;box-shadow:inset 0 0 0 1.5px var(--bd);color:var(--mut);cursor:pointer}
.ev .evtab button.on{background:color-mix(in srgb,var(--eu) 45%,var(--card));box-shadow:inset 0 0 0 2px var(--ed);color:var(--tx)}
.ev .evtab small{font-weight:600;opacity:.75}
.ev .evstk{position:sticky;top:0;z-index:30;margin:8px -16px 10px;padding:10px 16px;display:flex;align-items:center;gap:10px;background:rgba(243,237,225,.95);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}
.ev .evsl{font:14px/1.15 Jua;color:#7a3a3a;flex:none}
.ev .evhb{flex:1;display:grid;grid-template-columns:repeat(2,1fr);gap:6px}
.ev .evhb button{display:flex;align-items:center;justify-content:center;gap:4px;padding:10px 0;border-radius:12px;border:none;background:#fff;box-shadow:inset 0 0 0 2px var(--ed);color:#7a3a3a;font:inherit;font-size:15px;font-weight:800;cursor:pointer;-webkit-tap-highlight-color:transparent}
.ev .evhb button.on{background:var(--ed);color:#fff}
.ev .evtb{background:var(--card);border-radius:16px;box-shadow:0 2px 10px rgba(90,70,40,.1);overflow:hidden}
.ev .evw{display:grid;grid-template-columns:1fr 1fr;gap:6px 10px;padding:12px 14px;border-top:1.5px dashed var(--bd);align-items:center}
.ev .evw:first-child{border-top:none}
.ev .evk{font-size:17px;line-height:1.35;word-break:break-word;border-radius:8px;padding:2px 4px;cursor:pointer}
.ev .evk i{font-style:normal;font-size:11px;font-weight:800;margin-left:6px;padding:2px 6px;border-radius:99px;background:color-mix(in srgb,var(--eu) 50%,#fff);color:#7a3a3a;vertical-align:2px}
.ev .evm{font-size:15px;color:#3b352c;word-break:keep-all;border-radius:8px;padding:2px 4px;cursor:pointer}
.ev .evs{grid-column:1/-1;font-size:13px;line-height:1.5;color:#5a5245;border-radius:8px;padding:4px 6px;background:#faf6ec;cursor:pointer}
.ev .evs mark{background:none;color:#2f6aa8;font-weight:800}
.ev .cov{background:repeating-linear-gradient(135deg,#e6dcc8 0 6px,#efe7d6 6px 12px)!important;color:transparent!important;box-shadow:none!important}
.ev .cov *{color:transparent!important;background:none!important}
.ev .evgo{display:block;width:100%;margin:16px 0 4px;padding:13px;border:none;border-radius:14px;background:var(--ed);color:#fff;font:inherit;font-size:16px;font-weight:800;cursor:pointer}
.ev .evf{color:var(--mut);font-size:12.5px;margin:10px 4px}
`;document.head.appendChild(st);
})();

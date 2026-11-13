const KEY='pungsan-web2:';let CANW=true,R={},NICK='',PIN='',DB=null,OWNER=false,tm=null,ADM=[];
const SB_URL='https://tlpfpwhoehoryhjomwbt.supabase.co',SB_KEY='sb_publishable_qOsqLo7hHlhg8rLmWk96zw_RiR2_9DK';
try{DB=window.supabase.createClient(SB_URL,SB_KEY)}catch(e){DB=null}
const AK=()=>ls('ak');
async function chkAdmin(){OWNER=!!AK()}
const ls=(k,v)=>{try{if(v===undefined)return localStorage.getItem(KEY+k)||'';if(v===null)localStorage.removeItem(KEY+k);else localStorage.setItem(KEY+k,v)}catch(e){return''}};
const DV='v3';
// 국어(독서와 작문) 풀이 기록 1회 초기화 (문제 자체는 그대로)
const KN='독서와|작문';
function korClr(d){const ch=[];Object.keys(d).forEach(k=>{if(/^(etc|str)\d+$/.test(k)){delete d[k]}});
 if(d._fx)Object.keys(d._fx).forEach(k=>{if(/^(etc|str)\d+$/.test(k))delete d._fx[k]});
 if(d._nv)delete d._nv[KN];if(d._ln)delete d._ln[KN];if(d._nd)Object.keys(d._nd).forEach(k=>{if(k.indexOf(KN+'|')==0)delete d._nd[k]});d._k1=1}
const okDV=d=>{if(!(d&&d._dv===DV))return {};if(!d._k1){korClr(d);setTimeout(()=>{try{if(NICK&&R&&R._dv===DV)save()}catch(e){}},1500)}return d};
function save(){KV++;try{R._lbs=streakN();R._lbsd=dkey()}catch(e){}R._dv=DV;ls('rec:'+NICK,JSON.stringify(R));clearTimeout(tm);tm=setTimeout(sync,700)}
async function sync(){if(SUBMODE){if(DB&&NICK)try{await DB.rpc('sub_save',{p_key:SK(),p_data:R})}catch(e){}return}if(ADMINMODE){if(DB)try{await DB.rpc('admin_save',{p_key:AK(),p_data:R})}catch(e){}return}if(!DB||!NICK||!PIN)return;try{const {data,error}=await DB.rpc('player_save',{p_nick:NICK,p_pin:PIN,p_data:R});if(error||data!==true)throw 0}catch(e){}}
const lastNick=()=>ls('last');
const ADM_NICK='풍산동신라면',ADM_RV='r1';let ADMINMODE=false,SUBMODE=false;const SK=()=>ls('sk');const STAFF=()=>OWNER||SUBMODE;

// ---- 보조 관리자: 비밀 링크(#s=키)로 들어오고, 처음 한 번 닉네임만 정함 ----
async function subLoad(){if(!DB)return 'off';try{const {data,error}=await DB.rpc('sub_me',{p_key:SK()});if(error)return 'off';
  if(!data){ls('sk',null);ls('subnick',null);ls('last',null);SUBMODE=false;NICK='';home();soonMsg('보조 관리자 링크가 맞지 않아요.');return 'bad'}
  if(data.need_nick)return 'nick';
  NICK=data.nick;ls('subnick',NICK);ls('last',NICK);const srv=okDV(data.data||{});R=(R._dv===DV)?mrg(srv,R):srv;R._dv=DV;ls('rec:'+NICK,JSON.stringify(R));sync();return 'ok'}catch(e){return 'off'}}
function subNickPage(){show(`<div class="fbw"><h2>보조 관리자</h2><p class="tag fbd">처음 한 번만 닉네임을 정하면<br>다음부터는 바로 들어와요.</p><div class="card" style="max-width:340px;margin:10px auto"><input type="text" id="snk" maxlength="12" placeholder="닉네임 (최대 12자)" style="text-align:center" oninput="document.getElementById('sgo').disabled=!this.value.trim()"></div><div class="row" style="max-width:340px;margin:0 auto"><button class="b" id="sgo" disabled onclick="subSetNick()">시작하기</button></div><p class="mut" id="sst" style="text-align:center;min-height:20px"></p></div>`)}
async function subSetNick(){const v=document.getElementById('snk').value.trim(),b=document.getElementById('sgo'),st=document.getElementById('sst');if(!v)return;b.disabled=true;b.textContent='확인 중…';
 try{const {data,error}=await DB.rpc('sub_setnick',{p_key:SK(),p_nick:v});if(error)throw 0;
  if(data=='ok'||data=='already'){R={_dv:DV};await subLoad();REPL=true;soonMsg(`${NICK}님, 보조 관리자로 들어왔어요.`);return subjects()}
  st.innerHTML=`<span class="no-t">${data=='taken'?'이미 있는 닉네임이에요. 다른 닉네임을 써 주세요.':data=='bad'?'닉네임은 1~12자로 써 주세요.':'링크를 다시 확인해 주세요.'}</span>`}catch(e){st.innerHTML='<span class="no-t">서버에 연결되지 않았어요. 잠시 후 다시 해 주세요.</span>'}
 b.disabled=false;b.textContent='시작하기'}
async function subBoot(FRESH){SUBMODE=true;PIN='';NICK=ls('subnick')||'';
 if(NICK){try{R=okDV(JSON.parse(ls('rec:'+NICK)))}catch(e){R={}}if(!selOK())pickSel();else if(FRESH&&!/^inbox/.test(curR()))splash();else goR(curR());subLoad().then(selRe);return}
 const r=await subLoad();if(r=='nick')return subNickPage();if(r=='ok')return selOK()?splash():pickSel();if(r=='off'){show('<div class="fbw"><h2>보조 관리자</h2><p class="tag fbd">서버에 연결되지 않았어요.<br>인터넷을 확인하고 다시 열어 주세요.</p></div>')}}
async function adminLoad(){if(!DB)return;try{const {data,error}=await DB.rpc('admin_me',{p_key:AK()});if(error)return;if(!data){ls('ak',null);OWNER=false;ADMINMODE=false;NICK='';ls('last',null);home();soonMsg('관리자 링크가 맞지 않아요.');return}const srv=okDV(data.data);R=(R._dv===DV)?mrg(srv,R):srv;R._dv=DV;ls('rec:'+NICK,JSON.stringify(R));sync();selRe()}catch(e){};sendReplies()}
function adminOn(){ADMINMODE=true;NICK=ADM_NICK;PIN='';ls('last',ADM_NICK);ls('pin',null);try{R=JSON.parse(ls('rec:'+NICK))||{}}catch(e){R={}}if(R._dv!==DV)R={}}
async function enter(){if(SUBMODE){const go=document.getElementById('go');if(go){go.disabled=true;go.textContent='확인 중…'}await subLoad();REPL=true;return subjects()}if(ADMINMODE){const go=document.getElementById('go');if(go){go.disabled=true;go.textContent='확인 중…'}await adminLoad();REPL=true;return subjects()}const lk=lastNick(),el=document.getElementById('nk'),pe=document.getElementById('pn');
 const v=(lk||(el?el.value:'')).trim(),p=lk?ls('pin'):(pe?pe.value.trim():'');if(!v)return;
 if(!/^\d{4}$/.test(p)){soonMsg('비밀번호는 숫자 4자리예요.');return}
 const go=document.getElementById('go');if(go){go.disabled=true;go.textContent='확인 중…'}
 let loc={};try{loc=okDV(JSON.parse(ls('rec:'+v)))}catch(e){}
 let srv=null,st='offline';
 if(DB){try{const {data,error}=await DB.rpc('player_login',{p_nick:v,p_pin:p});if(!error&&data){st=data.status;srv=data.data||{}}}catch(e){}}
 if(st=='wrong'||st=='locked'||st=='bad_nick'||st=='bad_pin'){if(go){go.disabled=false;go.textContent='시작하기'}
  if(lk&&st=='wrong'){ls('last',null);ls('pin',null);home()}
  soonMsg(st=='locked'?'비밀번호를 여러 번 틀렸어요. 10분 뒤에 다시 해 주세요.':st=='wrong'?'비밀번호가 틀렸어요. 처음이면 다른 닉네임을 써 주세요.':'닉네임이나 비밀번호를 확인해 주세요.');return}
 NICK=v;PIN=p;ls('last',v);ls('pin',p);
 R=mrg(okDV(srv),loc);R._dv=DV;if(st=='new')R._tour=1;ls('rec:'+NICK,JSON.stringify(R));
 if(st=='offline')soonMsg('서버에 연결되지 않아 이 기기에만 저장돼요.');else if(Object.keys(loc).length)sync();
 if(st=='new')soonMsg('새 닉네임으로 시작해요!');
 await chkAdmin();REPL=true;subjects()}
const A=document.getElementById('app'),P=id=>PASS.find(p=>p.id==id)||{name:'',Q:[]};
const esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const norm=s=>s.replace(/[\s.,·]/g,'').toLowerCase();
const grade=(q,v)=>{const n=norm(v);return n&&q.a.some(k=>q.ex?n===norm(k):k.split('&').every(p=>n.includes(norm(p))))};
function st(qs,X){X=X||R;const d=qs.filter(q=>X[q.id]),c=d.filter(q=>X[q.id].ok).length;return{n:d.length,c,t:qs.length,r:d.length?Math.round(c/d.length*100):null}}
const stTxt=s=>s.n?`${s.n}/${s.t}문제 풀이 · 정답률 ${s.r}%`:`${s.t}문제 · 아직 풀지 않음`;
let LK=null,TBSW=0;const show=(h,k)=>{try{if(typeof kWarmSoon=='function')kWarmSoon()}catch(e){}document.body.classList.remove('pdw','pfx');const nw=k===undefined||k!==LK;LK=k===undefined?null:k;{const sd=document.getElementById('sides');if(sd)sd.remove();const so=document.getElementById('sporb');if(so)so.remove()}document.querySelectorAll('.tbv,#czi,body>.ctab').forEach(e=>e.remove());A.innerHTML=h;if(nw){window.scrollTo(0,0);A.classList.remove('in');if(Date.now()-TBSW>900){void A.offsetWidth;A.classList.add('in')}}};
let SS=null,draft=null;
const WIDE=()=>{try{return matchMedia('(min-width:860px) and (min-height:600px) and (min-aspect-ratio:1/1)').matches}catch(e){return false}};
function stk(side){const col={};SUBJ.flat().forEach(([n,c])=>col[n]=c);
 // 폰: 과목마다 한 번씩만 (표지 또는 이름표), 위아래 6개씩
 const T=[['c','독서와|작문',5,6,-8,44],['p','영어',32,16,5],...(AKB()?[['c','기하',60,40,7,42,1],['e','⭐',52,6,15]]:[['c','기하',64,4,7,42],['e','⭐',88,12,15]]),
 ['p','중국어|회화',3,66,-5,1],['c','미적분',43,52,-6,42,1],['p','일본어|회화',62,68,6,1]];
 const B=[['p','정치',5,12,-6],['c','경제',29,2,7,42],['p','현대사회와|윤리',50,16,-4],
 ['c','한국지리|탐구',6,52,-7,42,1],['p','세포와|물질대사',27,68,5,1],['c','행성우주|과학',73,52,8,42,1]];
 // PC: 가운데 위·아래와 양옆에 나눠서, 15과목 모두 한 번씩
 const PT=[['c','독서와|작문',8,16,-8,54],['p','영어',27,52,5],['c','미적분',58,10,7,54],['p','기하',76,48,-5]];
 const PB=[['p','정치',10,34,-6],['c','경제',33,16,7,54],['p','한국지리|탐구',54,50,-4],['e','⭐',84,24,15]];
 // 폰 가로: 양옆 좁은 칸에 3개씩만
 const LT=[['c','독서와|작문',12,6,-8,48],['p','영어',40,44,5],['c','미적분',46,64,7,48]];
 const LB=[['c','기하',46,6,7,48],['p','정치',18,44,-5],['c','행성우주|과학',12,64,-7,48]];
 const LAND=(()=>{try{return matchMedia('(orientation:landscape) and (max-height:520px)').matches}catch(e){return false}})();
 const W=WIDE();return (LAND?(side?LB:LT):W?(side?PB:PT):(side?B:T)).map((x,i)=>{const d=`left:${x[2]}%;top:${x[3]}%;--r:${x[4]}deg;animation-delay:${i*25}ms`;
  if(x[0]=='c')return`<img class="st${x[6]?' r1':''}" src="${COVER[x[1]]}" alt="" style="${d};width:${x[5]}px">`;
  if(x[0]=='p')return`<span class="st pl${x[5]?' r1':''}" style="${d};--pc:${SC[col[x[1]]]}">${x[1].split('|').join(' ')}</span>`;
  return`<span class="st" style="${d};font-size:26px">${x[1]}</span>`}).join('')}
// 관리자·보조 관리자: 홈 화면 앱에서도 관리자로 열리게
function setMan(){try{if(isApp())return;const k=AK(),q=k?'#k='+k:SK()?'#s='+SK():'';if(!q)return;const b=location.origin+location.pathname.replace(/[^/]*$/,''),m={name:'풍산 학습',short_name:'풍산 학습',id:b,start_url:b+q,scope:b,display:'standalone',background_color:'#f3ede1',theme_color:'#f3ede1',icons:[{src:b+'logo-192.png',sizes:'192x192',type:'image/png',purpose:'any maskable'},{src:b+'logo-512.png',sizes:'512x512',type:'image/png',purpose:'any maskable'}]};
 const l=document.querySelector('link[rel=manifest]');if(l)l.href='data:application/manifest+json,'+encodeURIComponent(JSON.stringify(m))}catch(e){}}
const AKB=()=>isApp()&&!lastNick()&&!AK()&&!SK();
const ICN_KEY='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14.5" r="4.2"/><path d="M11 11.5l8.5-8.5M16 6.5l2.5 2.5M13.8 8.7l2 2"/></svg>';
function keyLink(){const w=document.createElement('div');w.className='mdw';
 w.innerHTML=`<div class="mdc"><h3>관리자 링크로 들어오기</h3><p>받은 관리자 링크를 통째로 붙여 넣어 주세요.<br>홈 화면 앱은 사파리와 저장 공간이 따로라서 한 번만 해 주면 돼요.</p><textarea id="akin" rows="3" placeholder="https://…#k=…" style="width:100%;box-sizing:border-box;font-size:14px;min-height:0;height:84px"></textarea><div class="row" style="margin:10px 0 0"><button class="b g" data-v="0">취소</button><button class="b" data-v="1">들어가기</button></div></div>`;
 w.onclick=e=>{const v=e.target.dataset&&e.target.dataset.v;if(v===undefined&&e.target!==w)return;if(v!=='1'){w.remove();return}
  const t=(document.getElementById('akin').value||'').trim(),m=t.match(/#([ks])=([A-Za-z0-9]{16,64})/);if(!m){soonMsg('관리자 링크가 아니에요. 링크 전체를 붙여 넣어 주세요.');return}
  if(m[1]=='k')ls('ak',m[2]);else{if(ls('sk')!==m[2])ls('subnick',null);ls('sk',m[2])}ls('pin',null);try{sessionStorage.removeItem(KEY+'alive')}catch(e){}w.remove();location.replace(location.pathname+location.search)};
 document.body.appendChild(w);setTimeout(()=>{const a=document.getElementById('akin');if(a)a.focus()},50)}
function ckGo(){const n=document.getElementById('nk'),p=document.getElementById('pn');document.getElementById('go').disabled=!(n&&n.value.trim()&&p&&/^\d{4}$/.test(p.value))}

function stkSide(){const col={};SUBJ.flat().forEach(([n,c])=>col[n]=c);
 const L=[['c','중국어|회화'],['p','일본어|회화'],['c','동아시아|역사기행'],['p','현대사회와|윤리']],R=[['c','세포와|물질대사'],['p','물질과|에너지'],['c','역학과|에너지'],['p','행성우주|과학']];
 const mk=(A,seed)=>A.map(([t,n],i)=>{const x=(i+seed)%2?54:16,top=9+i*22,rot=((i*37+seed*13)%17)-8,d=`left:${x}%;top:${top}%;--r:${rot}deg;animation-delay:${(i+4)*45}ms`;
  return t=='c'?`<img class="st" src="${COVER[n]}" alt="" style="${d};width:66px">`:`<span class="st pl" style="${d};--pc:${SC[col[n]]};font-size:15px">${n.split('|').join(' ')}</span>`}).join('');
 return `<div class="sd sdl">${mk(L,0)}</div><div class="sd sdr">${mk(R,1)}</div>`}
function home(){const lk=lastNick(),cu=document.getElementById('nk'),nv=cu?cu.value:'';show(`<div class="hero">${AKB()?`<button class="akb" onclick="keyLink()" aria-label="관리자 링크로 로그인">${ICN_KEY}<span>관리자</span></button>`:''}<div class="sa">${stk(0)}</div><div class="hc"><img class="hlogo" src="logo-192.png" alt=""><h1 class="htit" aria-label="풍산 학습">${HW_TITLE}</h1><p class="hsub">풍산고 기말 시험 대비</p>${lk?`<p style="font-size:17px;margin:10px 0 0;color:#2a2620"><b>${esc(lk)}</b>님 환영합니다.</p>`:''}<div class="row" style="justify-content:center;margin-top:20px;flex-direction:column;align-items:center;gap:10px">${lk?'':`<input type="text" id="nk" maxlength="12" placeholder="닉네임 (최대 12자)" value="${esc(nv)}" style="max-width:260px;text-align:center" oninput="ckGo()"><input type="text" class="pw" autocomplete="off" id="pn" inputmode="numeric" pattern="[0-9]*" maxlength="4" placeholder="비밀번호 숫자 4자리" style="max-width:260px;text-align:center;letter-spacing:4px" oninput="this.value=this.value.replace(/\D/g,'');ckGo()" onkeydown="if(event.key=='Enter'&&!document.getElementById('go').disabled)enter()"><div class="mut" style="font-size:12px;margin-top:-6px;max-width:260px;line-height:1.5">처음 쓰는 닉네임이면 새로 만들어져요.<br>다른 기기에서도 같은 닉네임·비밀번호로<br>이어서 풀 수 있어요.</div>`}<button class="b" id="go" style="max-width:260px" ${lk?'':'disabled'} onclick="enter()">시작하기</button></div></div><div class="sa">${stk(1)}</div></div>`);setTimeout(()=>{if(document.querySelector('.hero'))instPrompt()},450);const sd=document.createElement('div');sd.id='sides';sd.innerHTML=stkSide();document.body.appendChild(sd);requestAnimationFrame(fitSt)}
// 앱 열 때 잠깐: 로고와 손글씨 제목 → 홈 (로그인한 사람만). 스티커는 로고·제목 둘레에 같은 간격으로
// 탭 첫 화면 머리: 제목 줄(오른쪽 아이콘) + 칩 줄. 모든 탭에서 같은 높이
const KI=p=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const KIC={sel:KI('<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>'),plus:KI('<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M12 8v8M8 12h8"/>'),
 trash:KI('<path d="M4 7h16M9 7V4.5h6V7M6.5 7l.9 12.2c.1.9.8 1.6 1.7 1.6h5.8c.9 0 1.6-.7 1.7-1.6L17.5 7"/>'),cal:KI('<rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4"/>'),
 fb:KI('<path d="M12 4.3c4.7 0 8.5 3.1 8.5 7s-3.8 7-8.5 7c-1.1 0-2.1-.2-3.1-.5L4.6 19.6l1.2-3.8c-1.4-1.3-2.3-2.8-2.3-4.5 0-3.9 3.8-7 8.5-7z"/><path d="M8.6 10.3h6.8M8.6 13.2h4.2"/>'),book:KI('<path d="M4 5.5c2.7-1 5.3-1 8 .8 2.7-1.8 5.3-1.8 8-.8V19c-2.7-1-5.3-1-8 .8-2.7-1.8-5.3-1.8-8-.8z"/><path d="M12 6.3v13.5"/>')};
// ===== 탭·칩 화면: 칩마다 따로 된 화면. 옆으로 밀면 칩 순서대로, 마지막 칩 다음은 옆 탭 =====
const KCH={home:0,noti:0,lb:0,st:0,pf:0};
function kChips(t){return t=='home'?['내 과목','다른 과목','전체']:t=='noti'?['전체','공지','업데이트','메시지']:t=='lb'?['공부 시간','연속 학습','문제 수']:t=='st'?['요약','기록','성적','과목별','달력']:['내 정보',...(STAFF()&&DB?['관리자']:[]),...(OWNER?['초기화']:[])]}
const kIdx=(t,n)=>kChips(t).indexOf(n);
function kSeq(){const s=[];TBK.forEach(t=>{if(t=='st'&&!isApp())return;kChips(t).forEach((_,c)=>s.push(t+':'+c))});return s}
// title: 제목 HTML, icons: [[아이콘,이름,onclick]], t: 탭, bd: 칩별 배지 숫자
const KTX={'피드백':['kfb','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20.5l1.5-4.6A8 8 0 1 1 21 12z"/></svg>'],'사용법':['kgd','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 6.5C10.5 5 8 4.5 4 4.5v13c4 0 6.5.5 8 2 1.5-1.5 4-2 8-2v-13c-4 0-6.5.5-8 2zM12 6.5v13"/></svg>']};
function kHead(title,icons,t,bd){const c=KCH[t]||0;return `<div class="kh">${title}<div class="ki">${(icons||[]).map(([i,l,on])=>i.startsWith('txt:')?`<button class="kt${KTX[i.slice(4)]?' '+KTX[i.slice(4)][0]:''}" aria-label="${l}" onclick="${on}">${KTX[i.slice(4)]?KTX[i.slice(4)][1]+'<span>'+i.slice(4)+'</span>':i.slice(4)}</button>`:`<button aria-label="${l}" onclick="${on}">${KIC[i]}</button>`).join('')}</div></div>`
 +`<div class="kc" role="tablist">${kChips(t).map((x,i)=>`<button role="tab" aria-selected="${i==c}" class="${i==c?'on':''}" onclick="kTap('${t}',${i})">${x}${bd&&bd[i]?`<i>${bd[i]}</i>`:''}</button>`).join('')}</div>`}
const kPage=(t,head,body)=>head+`<div class="kb">${body}</div>`;
const kKey=t=>'k:'+t+':'+KCH[t];
function kChipOn(c){document.querySelectorAll('#app .kc button').forEach((b,i)=>{b.classList.toggle('on',i==c);b.setAttribute('aria-selected',i==c)})}
function kTap(t,i){if(KNV)return;if(i==KCH[t]){scrollTo({top:0,behavior:RDM()?'auto':'smooth'});return}kNav(t,i)}
let BDF=0,MGF=0,KNV=null;
const TABF={home:()=>subjects(),noti:()=>board(),lb:()=>leader(),st:()=>allStats(),pf:()=>profile()};
const KHTML={home:()=>homeHTML(),noti:()=>boardHTML(),lb:()=>leaderHTML(),st:()=>statsHTML(),pf:()=>pfHTML()};
// 넘어갈 화면을 미리 그려 둠 (전환 중에도 다음 화면이 보이게)
let KV=0;const KC={};
function kHtml(t,c){const k=t+c+(MSEL?'m':''),e=KC[k];if(e&&e.v==KV)return e.h;const k0=KCH[t];KCH[t]=c;let h='';try{h=KHTML[t]()}catch(x){}KCH[t]=k0;KC[k]={v:KV,h};return h}
function kWarm(){if(!NICK||!TBR.includes(CURR)||!document.body.classList.contains('tbon'))return;const seq=kSeq(),cur=tbKey(),i=seq.indexOf(cur+':'+KCH[cur]);if(i<0)return;
 [seq[i+1],seq[i-1]].filter(Boolean).forEach((nb,n)=>{const [t,c]=nb.split(':');const f=()=>{try{kHtml(t,+c)}catch(e){}};window.requestIdleCallback?requestIdleCallback(f,{timeout:1500+n*400}):setTimeout(f,400+n*300)})}
const kWarmSoon=()=>{clearTimeout(kWarmSoon.t);kWarmSoon.t=setTimeout(kWarm,500)};
function kPv(t,c,intra,tgt){const h=kHtml(t,c);
 const o=document.createElement('div');o.className='tbsl';const m=document.createElement('main');m.id='app';m.className='kpv'+(intra?' kin':'');m.innerHTML=h;
 if(tgt)m.style.transform=`translateY(${-tgt}px)`;o.appendChild(m);document.body.appendChild(o);
 m.querySelectorAll('[data-w]').forEach(e=>{e.style.width=e.dataset.w+'%'});return o}
// 이번 칩/탭 → (t,c) 로 옆으로 밀어서 넘어감. st: 손가락으로 끌던 중이면 {off,o}
function kNav(t,c,st){st=st||{};if(KNV){if(st.o)st.o.remove();return}
 if(t=='st'&&!isApp()){if(st.o)st.o.remove();return webSt()}
 const cur=tbKey(),cc=KCH[cur],onRoot=TBR.includes(CURR),seq=kSeq(),i0=seq.indexOf(cur+':'+cc),i1=seq.indexOf(t+':'+c),A=document.getElementById('app');
 const intra=onRoot&&t==cur,dir=onRoot&&i0>=0&&i1>=0?(i1>i0?1:-1):0;
 if(!dir||RDM()){if(st.o)st.o.remove();KCH[t]=c;TABF[t]();return}
 const tok={};KNV=tok;TBSW=Date.now();document.body.classList.add('tbsw');clearTimeout(kNav.t);
 const kb=A.querySelector('.kb'),mv=intra&&kb?kb:A,kbTop=kb?kb.getBoundingClientRect().top+scrollY:0,tgt=intra?Math.min(scrollY,kbTop):0,W=innerWidth,off=st.off||0;
 const o=st.o||kPv(t,c,intra,tgt);
 if(intra)kChipOn(c);else{tbSetIcons(t);tbPill()}
 const D=Math.max(150,Math.round(300*(1-Math.min(.85,Math.abs(off)/W)))),E='cubic-bezier(.25,.8,.25,1)';
 mv.animate([{transform:`translateX(${off}px)`},{transform:`translateX(${-dir*W}px)`}],{duration:D,easing:E,fill:'forwards'});
 const an=o.animate([{transform:`translateX(${dir*W+off}px)`},{transform:'translateX(0)'}],{duration:D,easing:E,fill:'forwards'});
 const fin=()=>{if(KNV!==tok){o.remove();return}mv.getAnimations().forEach(a=>a.cancel());mv.style.transform='';KCH[t]=c;try{TABF[t]()}catch(e){}scrollTo(0,tgt);o.remove();KNV=null;kNav.t=setTimeout(()=>document.body.classList.remove('tbsw'),400)};
 an.onfinish=fin;setTimeout(fin,D+400)}
// 남아 있는 미리보기·밀린 화면 정리
function kClean(){document.querySelectorAll('.tbsl').forEach(o=>o.remove());const A=document.getElementById('app');if(A){A.getAnimations().forEach(a=>a.cancel());A.style.transform='';const kb=A.querySelector('.kb');if(kb){kb.getAnimations().forEach(a=>a.cancel());kb.style.transform=''}}}
// 웹에서 전체 통계: 알약은 끝까지 가고, 안내 창을 닫으면 원래 탭으로
function webSt(){tbSetIcons('st');tbPill();lockMsg().then(()=>{tbSetIcons(tbKey());tbPill()})}
// 로딩 스켈레톤:// 로딩 스켈레톤: 기다리는 동안 화면 모양을 미리 보여 줌
const SKL=(w,h,m)=>`<span class="skl" style="width:${w};height:${h}px;${m||''}"></span>`;
const skMsgs=(n=5)=>Array.from({length:n},(_,i)=>`<div class="mgc skc" aria-hidden="true"><span class="skl" style="width:10px;height:10px;border-radius:50%;flex:none"></span><span style="flex:1">${SKL(['72%','58%','80%','64%','50%'][i%5],15)}${SKL('34%',11,'margin-top:9px')}</span></div>`).join('');
const skPosts=()=>Array.from({length:3},(_,i)=>`<div class="pst skc" aria-hidden="true">${SKL('26%',11)}${SKL(['76%','62%','70%'][i],17,'margin-top:4px')}</div>`).join('');
const skAdmin=t=>`${t===0?'':`<h2>${t||'관리자'}</h2>`}<div aria-label="불러오는 중"><div class="skr" style="margin:6px 0 14px">${[0,1,2].map(()=>`<div class="skt skc">${SKL('46%',24)}${SKL('64%',11)}</div>`).join('')}</div>${SKL('30%',18,'margin:18px 2px 10px')}${Array.from({length:3},()=>`<div class="mgc skc"><span style="flex:1">${SKL('40%',14)}${SKL('86%',12,'margin-top:9px')}</span></div>`).join('')}${SKL('30%',18,'margin:18px 2px 10px')}<div class="skr">${[0,1].map(()=>`<div class="skt skc" style="height:64px"></div>`).join('')}</div></div>`;
function splash(go){show(`<div class="hero spl"><div class="sa"></div><div class="hc"><img class="hlogo" src="logo-192.png" alt=""><h1 class="htit" aria-label="풍산 학습">${HW_TITLE}</h1></div><div class="sa"></div></div>`);{const o=document.createElement('div');o.id='sporb';o.className='orb';document.body.appendChild(o)}
 requestAnimationFrame(splOrb);
 setTimeout(()=>{if(!document.querySelector('.spl'))return;REPL=true;TBSW=Date.now();(go||subjects)();const a=document.getElementById('app');if(a&&!RDM())a.animate([{opacity:0},{opacity:1}],{duration:320,easing:'ease-out'})},1100)}
function splOrb(){const hero=document.querySelector('.spl'),orb=document.getElementById('sporb'),hc=hero&&hero.querySelector('.hc');if(!orb||!hc)return;
 const col={};SUBJ.flat().forEach(([n,c])=>col[n]=c);const W=WIDE(),hr={left:0,top:0,width:innerWidth,height:innerHeight,bottom:innerHeight},br=hc.getBoundingClientRect(),cx=br.left-hr.left+br.width/2,cy=br.top-hr.top+br.height/2;
 const n=W?0:hr.width<600?3:4;
 const L=W?[['p','영어'],['c','미적분'],['p','기하'],['c','독서와|작문'],['p','정치'],['c','한국지리|탐구'],['p','현대사회와|윤리'],['c','세포와|물질대사'],['p','중국어|회화'],['c','행성우주|과학']]
  :n==3?[['c','독서와|작문'],['p','영어'],['c','미적분'],['c','한국지리|탐구'],['p','정치'],['c','행성우주|과학']]
  :[['c','독서와|작문'],['p','영어'],['c','미적분'],['p','중국어|회화'],['p','정치'],['c','한국지리|탐구'],['p','현대사회와|윤리'],['c','행성우주|과학']];
 const O=W?[[-90,'p','물질과|에너지'],[90,'e','⭐'],[145,'p','일본어|회화'],[180,'c','경제'],[215,'e','⭐'],[-35,'c','동아시아|역사기행'],[0,'e','⭐'],[35,'c','역학과|에너지']]
  :[['tc','p',n==4?'일본어|회화':'중국어|회화'],['bc','p',n==4?'물질과|에너지':'현대사회와|윤리'],['ml','c','경제'],['mr','c','세포와|물질대사'],['tl','e','⭐'],['br','e','⭐']];
 const cw=W?62:hr.width<600?46:56;
 orb.innerHTML=L.map((x,i)=>{const r=(i%2?6:-6);
  return x[0]=='c'?`<img class="st os" src="${COVER[x[1]]}" alt="" style="--r:${r}deg;width:${cw}px">`:`<span class="st pl os" style="--r:${r}deg;--pc:${SC[col[x[1]]]}">${x[1].split('|').join(' ')}</span>`}).join('')
  +O.map((x,i)=>{const r=(i%2?-7:7);return x[1]=='c'?`<img class="st oo" data-t="${x[0]}" src="${COVER[x[2]]}" alt="" style="--r:${r}deg;width:${cw}px">`:x[1]=='e'?`<span class="st oo" data-t="${x[0]}" style="--r:${r}deg;font-size:26px">${x[2]}</span>`:`<span class="st pl oo" data-t="${x[0]}" style="--r:${r}deg;--pc:${SC[col[x[2]]]}">${x[2].split('|').join(' ')}</span>`}).join('');
 const place=()=>{const els=[...orb.querySelectorAll('.os')],sz=els.map(e=>[e.offsetWidth||60,e.offsetHeight||40]);
  if(!W){// 폰·세로 태블릿: 로고 위 한 줄, 제목 아래 한 줄. 로고·제목과의 간격은 모두 같게
   const GAP=hr.width<600?40:56,mh=Math.max(...sz.map(z=>z[1])),yt=br.top-hr.top-GAP-mh/2,yb=br.bottom-hr.top+GAP+mh/2;
   els.forEach((e,i)=>{const row=i<n?0:1,j=i%n,x=hr.width*(2*j+1)/(2*n),y=row?yb:yt;e.style.left=(x-sz[i][0]/2)+'px';e.style.top=(y-sz[i][1]/2)+'px'});
   // 바깥: 위·아래 줄 바깥쪽과 로고 양옆에 드문드문
   const lg=hc.querySelector('.hlogo').getBoundingClientRect(),ly=lg.top+lg.height/2,F=hr.width<600?48:70;
   orb.querySelectorAll('.oo').forEach(e=>{const w=e.offsetWidth||50,h=e.offsetHeight||40,k=e.dataset.t,top=Math.max(h/2+18,yt-mh/2-F-h/2),bot=Math.min(hr.height-h/2-18,yb+mh/2+F+h/2);
    const [x,y]={tc:[.5,top],bc:[.5,bot],tl:[.14,top],br:[.86,bot],ml:[.12,ly],mr:[.88,ly]}[k];e.style.left=(hr.width*x-w/2)+'px';e.style.top=(y-h/2)+'px'});return}
  // 큰 화면: 로고·제목 둘레 타원 위에 같은 간격으로 한 바퀴
  const GAP=90;els.forEach((e,i)=>{const [w,h]=sz[i],t=(-90+18+i*360/els.length)*Math.PI/180,A=br.width/2+GAP+w/2,B=br.height/2+GAP*.7+h/2;
   e.style.left=(cx+A*Math.cos(t)-w/2)+'px';e.style.top=(cy+B*Math.sin(t)-h/2)+'px'});
  // 바깥 줄: 화면 가장자리 쪽 큰 타원 위
  orb.querySelectorAll('.oo').forEach(e=>{const w=e.offsetWidth||60,h=e.offsetHeight||40,t=(+e.dataset.t)*Math.PI/180,A2=hr.width/2-Math.max(70,w/2+40),B2=hr.height/2-Math.max(56,h/2+30);
   e.style.left=(hr.width/2+A2*Math.cos(t)-w/2)+'px';e.style.top=(cy+B2*Math.sin(t)-h/2)+'px'})};
 place();if(document.fonts&&document.fonts.ready)document.fonts.ready.then(place)}
addEventListener('resize',()=>{if(document.querySelector('.spl'))splOrb()});
function fitSt(){document.querySelectorAll('.sa').forEach(a=>{const h=a.getBoundingClientRect().height;a.classList.toggle('lo',h<135);a.classList.toggle('no',h<64)})}
window.addEventListener('resize',()=>{if(document.querySelector('.hero'))fitSt()});

function ach(n,o){const qs=isSoc(n)?socQ(n):[];return qs.length?Math.round(st(qs).c/qs.length*100):0}
const LOCKED=['독서와|작문'];
const hasC=n=>!LOCKED.includes(n)&&!!(CUR[n]&&(socQ(n).length||Object.keys(NOTE[n]||{}).length));
function bk(n,c,o){const a=ach(n,o),rd=hasC(n);return `<div class="card pc bk${rd?'':' bkx'}${sDone(n)?' cpl':''}" style="--sc:${SC[c]}" onclick="${rd||STAFF()?`subj('${n}')`:'soon()'}"><div class="tp"><img src="${COVER[n]}" alt=""><div class="nm">${n.split('|').join('<br>')}</div></div>${rd?`<div><div class="al"><span>${sDone(n)?'<span class="cplb"><i class="cki"></i>모두 완료</span>':'진행도'}</span><b>${a}%</b></div><div class="bar"><i data-w="${a}" style="width:0;background:${SC[c]}"></i></div></div>`:`<div class="bkr">${LOCK}<span>준비 중</span></div>`}</div>`}
function animBars(){if(Date.now()-TBSW<900){document.querySelectorAll('#app [data-w]').forEach(e=>{e.style.transition='none';e.style.width=e.dataset.w+'%'});return}setTimeout(()=>document.querySelectorAll('[data-w]').forEach(e=>{e.style.width=e.dataset.w+'%'}),90)}
const SUBJ=[[['독서와|작문','b',1],['영어','r'],['중국어|회화','t'],['일본어|회화','j']],[['미적분','y'],['기하','y']],[['정치','g'],['경제','g'],['동아시아|역사기행','g'],['현대사회와|윤리','g'],['한국지리|탐구','g']],[['세포와|물질대사','p'],['물질과|에너지','p'],['역학과|에너지','p'],['행성우주|과학','p']]];
const SECN=['언어 영역','수리 영역','사회 영역','과학 영역'];
const COMMON=['독서와|작문','영어','미적분'];
const selOK=()=>Array.isArray(R._sel);
let SELF=false;
function selRe(){if(SELF&&CURR=='sel'&&selOK()){SELF=false;SELT=null;document.body.classList.remove('selg');subjects()}}
let SELT=null;
function pickSel(){if(R._tour===1&&!Array.isArray(R._sel))return tourOpen();if(!SELT)SELT=new Set(Array.isArray(R._sel)?R._sel:[]);const first=!Array.isArray(R._sel);SELF=first;document.body.classList.toggle('selg',first);
 let h=`<h2>선택과목 고르기</h2><p class="tag">${first?'처음 한 번만 하면 돼요. ':''}지금 듣고 있는 선택과목을 모두 골라 주세요.<br>공통과목(독서와 작문 · 영어 · 미적분)은 자동으로 들어가요.</p>`;
 SUBJ.forEach((row,ri)=>{const L=row.filter(([n])=>!COMMON.includes(n));if(!L.length)return;h+=`<h3 class="sec">${SECN[ri]}</h3><div class="slg">`+L.map(([n,c])=>`<button class="slc${SELT.has(n)?' on':''}" style="--sc:${SC[c]}" data-n="${encodeURIComponent(n)}" onclick="selTog(this)"><i>${ICN_OK2}</i><b>${n.split('|').join(' ')}</b></button>`).join('')+`</div>`});
 h+=`<div class="slbar"><button class="b" id="sls" ${SELT.size?'':'disabled'} onclick="selSave()">${SELT.size?`선택 완료 · ${SELT.size}과목`:'선택과목을 골라 주세요'}</button></div>`;show(h)}
function selTog(el){const n=decodeURIComponent(el.dataset.n);SELT.has(n)?SELT.delete(n):SELT.add(n);el.classList.toggle('on',SELT.has(n));const b=document.getElementById('sls');if(b){b.disabled=!SELT.size;b.textContent=SELT.size?`선택 완료 · ${SELT.size}과목`:'선택과목을 골라 주세요'}}
function selSave(){if(!SELT||!SELT.size)return;const first=!Array.isArray(R._sel);R._sel=SUBJ.flat().map(x=>x[0]).filter(n=>SELT.has(n));SELT=null;document.body.classList.remove('selg');save();soonMsg(first?'선택과목을 저장했어요.':'선택과목을 바꿨어요.');subjects()}
function sgCard(n,c,o){if(COVER[n])return bk(n,c,o);return `<div class="card pc" style="margin:0;padding:0;overflow:hidden;text-align:center;background:var(--bg);aspect-ratio:6/5;display:flex;flex-direction:column" onclick="subj('${n}')"><div style="position:absolute;top:0;left:0;right:0;pointer-events:none;height:34px;background:linear-gradient(to bottom,${SC[c]} 0,${SC[c]} 18%,transparent 100%)"></div><div style="flex:1;display:flex;align-items:center;justify-content:center;padding:4px;line-height:1.3;font-weight:600;white-space:nowrap" class="sl">${n.split('|').join('<br>')}</div></div>`}
const SC={y:'#f2cf6b',b:'#8fb8ec',r:'#ee9a9a',t:'#93d3d8',j:'#c9b6ec',g:'#9bd3ae',p:'#f1a9c8'};
// 풍산 학습 전용 손글씨 제목 (한 획씩 그린 모노라인)
const HW_TITLE='<svg viewBox="-12 -8 484 116" fill="none" stroke="currentColor" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path transform="translate(0 0)" d="M24 12H76 M38 13C37.5 20 37 26 36 33 M62 13C62.5 20 63 26 64 33 M18 33H82 M10 49H90 M50 49V62 M32 81 A18 13 0 1 0 68 81 A18 13 0 1 0 32 81Z"/><path transform="translate(108 0)" d="M36 8C36 26 26 40 12 50 M31 27C38 36 46 42 55 47 M74 4V62 M74 32H90 M22 64V80Q22 89 31 89H86"/><path transform="translate(246 0)" d="M28 5.5L40 8.5 M12 20H54 M19 40 A14 11 0 1 0 47 40 A14 11 0 1 0 19 40Z M74 2V60 M74 30H90 M16 70H70Q79 70 79 80C79 88 75 95 69 100"/><path transform="translate(354 0)" d="M50 4C50 18 38 30 22 37 M49 18C56 27 64 32 78 37 M6 50H94 M26 62V88Q26 95 33 95H67Q74 95 74 88V62 M26 77H74"/></svg>';
// 홈: 내 과목(공통+선택) · 다른 과목 · 전체
const FLP='M12 3.2C13.2 6.4 20 8.6 20 14.6A8 8 0 0 1 4 14.6C4 11.4 5.7 9.3 7.6 8.1 7.8 9.9 8.7 10.9 9.9 11 9.5 8.2 10.4 5.4 12 3.2z',FLI='M12 8.6C14.3 10.6 17.6 12 17.6 15.7A5.6 5.6 0 0 1 6.4 15.7C6.4 12.8 9 11 12 8.6z';
function flameSVG(n,on){const t=n>99?'99+':String(n),L=t.length,fs=L>2?6.6:L>1?8.6:10,y=15.9+fs*.36,c=on?['#ef5a3c','#ff8a5c','#fff','']:['#d8d0c2','#e4ddd0','#fff',' stroke="#b3a896" stroke-width="1.3" paint-order="stroke" stroke-linejoin="round"'];
 return `<svg viewBox="2.6 2.2 18.8 21.4" aria-hidden="true"><path d="${FLP}" fill="${c[0]}" stroke="${c[0]}" stroke-width="1.4" stroke-linejoin="round"/><path d="${FLI}" fill="${c[1]}"/>${on?'<circle cx="18.8" cy="5.4" r="1" fill="#f9df99"/><circle cx="4.4" cy="7.2" r=".7" fill="#f9df99"/>':''}<text x="12" y="${y}" text-anchor="middle" font-size="${fs}" font-family="'Jua',sans-serif" fill="${c[2]}"${c[3]}>${t}</text></svg>`}
const dayOK=k=>((R._t||{})[k]||0)>=300||((R._lbq||{})[k]||0)>0;
function streakN(){let n=0;const d=new Date();if(!dayOK(dkey(d)))d.setDate(d.getDate()-1);while(dayOK(dkey(d))){n++;d.setDate(d.getDate()-1);if(n>999)break}return n}
function lastRun(){const d=new Date();let g=0;while(!dayOK(dkey(d))&&g<400){d.setDate(d.getDate()-1);g++}if(g>=400)return {n:0};const e=new Date(d);let n=0;while(dayOK(dkey(d))&&n<999){n++;d.setDate(d.getDate()-1)}return {n,e}}
const STK_GO=['학습을 시작하세요!','오늘의 첫 문제를 풀어 볼까요?','지금 5분만 공부해 볼까요?','불꽃을 다시 켜 봐요!','작은 한 걸음이 큰 차이를 만들어요.','오늘도 한 파트만 풀어 봐요.','시작이 반이에요. 지금 시작해요!','새 불꽃을 피울 시간이에요.','오늘의 나에게 도전해 봐요!','가볍게 한 문제부터 시작해요.','공부할 준비 됐나요?','오늘 하루도 힘내 봐요!'];
const STK_KEEP=['연속 학습을 이어가세요!','불꽃이 꺼지기 전에 공부해 봐요!','오늘만 하면 연속이 이어져요!','어제의 기록을 오늘도 이어가요!','조금만 하면 연속 기록 유지!','여기서 멈추면 아까워요. 이어가요!','오늘의 한 파트로 불꽃을 지켜요!','꾸준함이 실력이에요. 계속 가요!','불꽃이 기다리고 있어요!','연속 기록, 오늘도 지켜 볼까요?','한 문제만 풀어도 이어져요!','자정 전에 불꽃을 지켜요!'];
let STKI=Math.random();
const stkMsg=L=>L[Math.floor(STKI*L.length)%L.length];
function streakHTML(){const lr=lastRun(),now=new Date(),td=dayOK(dkey(now)),yd=new Date(now);yd.setDate(now.getDate()-1);const pend=!td&&dayOK(dkey(yd)),mo=new Date(now);mo.setDate(now.getDate()-((now.getDay()+6)%7));
 const wk=['월','화','수','목','금','토','일'].map((l,i)=>{const d=new Date(mo);d.setDate(mo.getDate()+i);const k=dkey(d);return `<span class="${dayOK(k)?'on':''}${k==dkey()?' td':''}"><i></i>${l}</span>`}).join('');
 const head=td?`<em>${lr.n}</em><span>일 연속 학습 중</span>`:esc(stkMsg(pend?STK_KEEP:STK_GO)),sub='';
 return `<div class="card stk"><div class="fl${td?' on':''}">${flameSVG(lr.n,td)}</div><div class="stw"><b>${head}</b>${sub}<div class="sdw">${wk}</div></div></div>`}
const GLY={'D':['M1.500 1.500V12.500h2.500a5.500 5.500 0 0 0 5.500-5.500 5.500 5.500 0 0 0-5.500-5.500z',10.500],'-':['M1 7h5',7],'A':['M1 12.500 5.200 1.500 9.400 12.500M2.700 8.700h5',10.500],'Y':['M1 1.500 5.200 7.300 9.400 1.500M5.200 7.300v5.200',10.500],
'0':['M4.200 1.300a3.100 3.100 0 0 1 3.100 3.100v5.400a3.100 3.100 0 0 1-6.200 0V4.400a3.100 3.100 0 0 1 3.100-3.100z',8.600],
'1':['M2.200 3.800 4.800 1.400V12.500',7],
'2':['M1.300 4.300a3 3 0 0 1 6 0c0 2.600-3 4.800-6 8.200h6.200',8.600],
'3':['M1.400 3A3 3 0 0 1 7 4.300C7 5.900 5.600 6.800 3.900 6.800 5.700 6.800 7.200 7.900 7.200 9.700A3.200 3.200 0 0 1 1.200 11.300',8.600],
'4':['M5.700 12.500V1.400L1 9.200h7.400',8.600],
'5':['M7 1.500H2.300L1.800 6a3.500 3.500 0 1 1-.2 5.300',8.600],
'6':['M6.800 2.400A3.200 3.200 0 0 0 1.200 4.600V9.300a3.100 3.100 0 1 0 .3-4.600',8.600],
'7':['M1.200 1.500h6.400L3.600 12.500',8.600],
'8':['M4.200 6.700a2.600 2.600 0 1 1 0-5.300 2.600 2.600 0 0 1 0 5.300 3.200 3.200 0 1 1 0 6.200 3.200 3.200 0 0 1 0-6.200z',8.600],
'9':['M1.600 11.600A3.200 3.200 0 0 0 7.200 9.400V4.700a3.100 3.100 0 1 0-.3 4.600',8.600]};
const GTXT=(t,sw)=>{let x=0,out='';for(const c of t){const g=GLY[c];if(!g)continue;out+=`<path transform="translate(${x} 0)" d="${g[0]}"/>`;x+=g[1]+1.2}x-=1.2;return `<svg viewBox="0 0 ${x+1} 14" height="${14*1.4}" style="display:block;overflow:visible" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${out}</svg>`};

const DD_EX='2026-12-07',DD_END='2026-12-11',DD_NAME='기말고사';
function ddayHTML(t=dkey()){const u=k=>{const [y,m,d]=k.split('-').map(Number);return Date.UTC(y,m-1,d)/864e5};
 if(t>DD_END)return '';const n=u(DD_EX)-u(t),day=n<=0;
 return `<div class="dd${day?' dy':''}" role="img" aria-label="${DD_NAME} ${day?'당일':n+'일 남음'}">${GTXT(day?'D-DAY':'D-'+n,1.5)}</div>`}
function homeHTML(){const ALL=SUBJ.flat(),SEL=Array.isArray(R._sel)?R._sel:[],mine=ALL.filter(([n])=>COMMON.includes(n)||SEL.includes(n)),c=KCH.home,grid=L=>`<div class="sg c2">${L.map(x=>sgCard(...x)).join('')}</div>`;
 let b=c==0?streakHTML():'';
 if(c==0){b+=`<h3 class="sec">공통과목</h3>`+grid(ALL.filter(([n])=>COMMON.includes(n)));b+=`<h3 class="sec">선택과목</h3>`+(SEL.length?grid(ALL.filter(([n])=>SEL.includes(n))):`<div class="card kmt">고른 선택과목이 없어요.</div>`)}
 else{const rows=c==1?SUBJ.map(row=>row.filter(([n])=>!mine.some(m=>m[0]==n))):SUBJ;let any=0;
  rows.forEach((row,ri)=>{if(!row.length)return;any=1;b+=`<h3 class="sec">${SECN[ri]}</h3>`+grid(row)});if(!any)b+=`<div class="card kmt">다른 과목이 없어요.</div>`}
 return kPage('home',kHead(`<h2 class="hwt" aria-label="풍산 학습">${HW_TITLE}</h2>${ddayHTML()}`,[['sel','선택과목 바꾸기','pickSel()']],'home'),b)}
function subjects(){if(NICK&&!selOK())return pickSel();document.body.classList.remove('selg');SELF=false;show(homeHTML(),kKey('home'));animBars();mailBadge();afterHome()}
let FBF=0;
let FBK='';
function fbForm(f){FBF=f;FBK='';show(`<div class="fbw"><h2>피드백</h2><div class="ntg fbk" role="radiogroup" aria-label="피드백 유형">${FBT.map(t=>`<button role="radio" aria-checked="false" data-k="${t[0]}" style="--fc:${t[2]}" onclick="fbPick('${t[0]}')"><i>${FBI[t[0]]||''}</i><span>${t[1]}</span></button>`).join('')}</div><div class="card"><textarea id="fbt" maxlength="1000" placeholder="예) ETC 응용 2번 해설이 헷갈려요&#10;예) 영어도 빨리 열어 주세요" oninput="fbOK()"></textarea></div>${DB&&CANW!==false?'':'<p class="no-t" style="font-size:14px">서버에 연결되지 않았어요. 아래 버튼으로 내용을 복사해서 관리자에게 직접 보내 주세요.</p>'}<div class="row"><button class="b" id="fbs" disabled onclick="fbSend()">${DB&&CANW!==false?'보내기':'내용 복사하기'}</button></div></div>`)}
function fbPick(k){FBK=k;document.querySelectorAll('.fbk button').forEach(b=>{const on=b.dataset.k==k;b.classList.toggle('on',on);b.setAttribute('aria-checked',on)});fbOK()}
function fbOK(){const b=document.getElementById('fbs'),t=document.getElementById('fbt');if(b&&t)b.disabled=!t.value.trim()||!FBK}
function soonMsg(m){const o=document.getElementById('toast');if(o)o.remove();const t=document.createElement('div');t.id='toast';t.className='toast';t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),1850)}
async function fbSend(){const t=document.getElementById('fbt').value.trim(),b=document.getElementById('fbs');if(!t)return;if(!DB||CANW===false){const ok=()=>soonMsg('복사했어요. 카톡으로 보내 주세요.');try{navigator.clipboard.writeText(t).then(ok,()=>{document.getElementById('fbt').select();soonMsg('길게 눌러서 복사해 주세요.')})}catch(e){document.getElementById('fbt').select();soonMsg('길게 눌러서 복사해 주세요.')}return}b.disabled=true;b.textContent='보내는 중…';
 try{const {error}=await DB.from('feedback').insert({nick:(NICK||lastNick()||'익명').slice(0,12),body:(FBK?`[[k:${FBK}]]`:'')+t});if(error)throw error;soonMsg('피드백이 전달됐어요. 고마워요!');FBF?goUp():home()}catch(e){b.disabled=false;b.textContent='보내기';soonMsg('보내지 못했어요. 다시 시도해 주세요.')}}

// ================= 메시지함 · 폰 알림 =================
const VAPID='BEhEZYHO8qnRmgu6SvZxzNoFhJRO0wWwewnNUIgckZ4Hry8KYsR6iovr2KvH0F9f4UKbKTaTEo8Lk-IU5RGi5rk';
const whoP=()=>ADMINMODE?{p_nick:null,p_pin:null,p_key:AK()}:SUBMODE?{p_nick:null,p_pin:null,p_key:SK()}:{p_nick:NICK,p_pin:PIN,p_key:null};
let MSGS=null;
async function msgLoad(){if(!DB||!NICK)return MSGS=MSGS||[];try{const {data,error}=await DB.rpc('msg_list',whoP());if(error)throw error;MSGS=data||[]}catch(e){MSGS=MSGS||[]}KV++;mailBadge();return MSGS}
const mMsgs=()=>(MSGS||[]).filter(m=>mKind(m)!='post');
const unread=()=>mMsgs().filter(m=>!m.read).length;
function mailBadge(){const n=unread()+(POSTS||[]).filter(pNew).length;document.querySelectorAll('.mlb .mlc').forEach(c=>{c.textContent=n>9?'9+':n;c.hidden=!n})}
const MAIL='<svg class="mli" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5.5" width="18" height="13" rx="2.2"/><path d="M3.6 6.8 12 13l8.4-6.2"/></svg>';
const mailBtn=()=>`<button class="mlb" aria-label="메시지함" onclick="inbox()">${MAIL}<span class="mlc" hidden></span></button>`;
const fdt=t=>{const d=new Date(t);return (d.getMonth()+1)+'/'+d.getDate()+' '+String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')};
const nl=t=>esc(t||'').replace(/\n/g,'<br>');
// 메시지 제목: 「새」 빼고, 피드백 관련은 짧게
const mKind=m=>m.meta&&m.meta.kind,mIsR=m=>mKind(m)=='fb_reply';
function mTitle(m){const k=mKind(m);if(k=='fb_reply')return '답장 도착';if(k=='fb_new')return '피드백 도착';let t=(m.title||'').replace(/^새\s+/,'');
 if(k=='post'){const x=(POSTS||[]).find(y=>y.id==+m.meta.post);if(x&&pKind(x))t=t.replace(/^공지(?=\s*:)/,'업데이트')}return t}
let MSEL=null;
const msDraw=()=>show(boardHTML(),kKey('noti'));
function msOn(){MSEL=MSEL?null:new Set();msDraw()}
function msOff(){MSEL=null;msDraw()}
function msTog(id){MSEL.has(id)?MSEL.delete(id):MSEL.add(id);msDraw()}
function msAll(){const L=mMsgs(),on=!L.every(m=>MSEL.has(m.id));L.forEach(m=>on?MSEL.add(m.id):MSEL.delete(m.id));msDraw()}
async function msDel(){const ids=[...MSEL];if(!ids.length)return;if(!(await askBox(`메시지 ${ids.length}개를 지울까요?`,'지운 메시지는 다시 볼 수 없어요.','삭제')))return;
 let n=0;for(const id of ids){try{if(DB){const {data}=await DB.rpc('msg_delete',Object.assign(whoP(),{p_id:id}));if(data!==true)continue}n++;MSGS=(MSGS||[]).filter(x=>x.id!=id)}catch(e){}}
 MSEL=null;mailBadge();soonMsg(`${n}개를 지웠어요.`);msDraw()}
const ICN_OK2='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',ICN_EYE='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12s-3.5 6.5-9.5 6.5S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/></svg>';
const mgK=(c,ic,lab,t,q)=>`<div class="mgk${q?' q':''}" style="--hc:${c}"><div class="mgkh"><span class="hbi">${ic}</span><b>${lab}</b></div><p>${nl(t||'')}</p></div>`;
async function msgOpen(id){if(!MSGS)await msgLoad();const m=(MSGS||[]).find(x=>x.id==id);if(!m){soonMsg('지워진 메시지예요.');return inbox()}
 if(!m.read){m.read=true;mailBadge();if(DB)DB.rpc('msg_read',Object.assign(whoP(),{p_id:id})).then(()=>{},()=>{})}
 const k=m.meta&&m.meta.kind;let b='';
 if(k=='fb_reply')b=mgK('#c9bfae',HB_FB,'보내신 피드백',fbStrip(m.meta.q),1)+mgK('#9bd3ae',ICN_OK2,m.meta.answer?'답장':'수정한 내용',m.meta.answer||m.meta.changes)+(m.meta.howto?mgK('#8fb8ec',ICN_EYE,'확인하는 방법',m.meta.howto):'');
 else if(k=='fb_new')b=`<div class="mgs"><span>보낸 사람</span><p><b>${esc(m.meta.from||'익명')}</b></p></div><div class="mgs"><span>내용</span><blockquote>${nl(fbStrip(m.meta.q))}</blockquote></div>${OWNER?`<button class="lk" onclick="admin(1)">관리자 화면에서 보기 ›</button>`:''}`;
 else if(k=='post')b=`<button class="b pgo" onclick="postView(${+m.meta.post||0})">공지 보러 가기 ›</button>`;
 else b=`<div class="mgs"><p>${nl(m.body)}</p></div>${(m.meta&&m.meta.imgs||[]).map(i=>`<figure class="mgi skl" data-i="${esc(i)}" aria-label="사진 불러오는 중"></figure>`).join('')}`;
 show(`<div class="card mgv"><h2>${esc(mTitle(m))}</h2><div class="mgt">${k=='notice'?'<span class="chp" style="background:#8fb8ec">알림</span>':k=='post'?'<span class="chp" style="background:#f3c969">공지</span>':k=='fb_reply'?'<span class="chp" style="background:#9bd3ae">답장</span>':k=='fb_new'?'<span class="chp" style="background:#f0a35e">피드백</span>':''}<small>${fdt(m.created_at)}</small></div>${b}</div><div class="row"><button class="b g mgdel" onclick="msgDel(${id})">메시지 삭제</button></div>`);mgImgs()}
const NIMC=new Map();
async function mgImgs(){for(const f of document.querySelectorAll('.mgi[data-i]')){const i=f.dataset.i;try{let d=NIMC.get(i);if(!d){const r=await DB.rpc('notice_img',{p_id:i});if(r.error||!r.data)throw 0;d=r.data;NIMC.set(i,d)}if(!document.body.contains(f))return;f.classList.remove('skl');f.innerHTML=`<img src="${d}" alt="공지 사진" onclick="imgBig(this.src)">`}catch(e){f.classList.remove('skl');f.innerHTML='<span class="mgl">사진을 불러오지 못했어요.</span>'}}}
function imgBig(src){const w=document.createElement('div');w.className='imz';w.innerHTML=`<img src="${src}" alt=""><button aria-label="닫기">×</button>`;w.onclick=()=>w.remove();document.body.appendChild(w)}
async function msgDel(id){if(!(await askBox('메시지를 지울까요?','지운 메시지는 다시 볼 수 없어요.','삭제')))return;
 try{if(DB){const {data,error}=await DB.rpc('msg_delete',Object.assign(whoP(),{p_id:id}));if(error||data!==true)throw 0}MSGS=(MSGS||[]).filter(x=>x.id!=id);mailBadge();soonMsg('메시지를 지웠어요.');inbox()}catch(e){soonMsg('지우지 못했어요. 다시 시도해 주세요.')}}
async function msgDelRead(){const L=(MSGS||[]).filter(m=>m.read);if(!L.length)return;if(!(await askBox('읽은 메시지를 모두 지울까요?',`${L.length}개를 지워요. 지운 메시지는 다시 볼 수 없어요.`,'삭제')))return;
 let n=0;for(const m of L){try{const {data}=await DB.rpc('msg_delete',Object.assign(whoP(),{p_id:m.id}));if(data===true){n++;MSGS=MSGS.filter(x=>x.id!=m.id)}}catch(e){}}soonMsg(`${n}개를 지웠어요.`);inbox()}

const canPush=()=>'serviceWorker' in navigator&&'PushManager' in window&&'Notification' in window;
const BELL='<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 6c-7 0-12 5.4-12 12.5v7.2L8.6 31.4c-.8 1.3.1 3 1.7 3h27.4c1.6 0 2.5-1.7 1.7-3L36 25.7v-7.2C36 11.4 31 6 24 6z" fill="#f9df99" stroke="#6e5236" stroke-width="2.4" stroke-linejoin="round"/><path d="M19 38.5a5 5 0 0 0 10 0" fill="none" stroke="#6e5236" stroke-width="2.4" stroke-linecap="round"/><circle cx="36" cy="11" r="5.5" fill="#e05a4f" stroke="#fff" stroke-width="2"/></svg>';
function b64u(s){const p='='.repeat((4-s.length%4)%4),b=atob((s+p).replace(/-/g,'+').replace(/_/g,'/'));return Uint8Array.from(b,c=>c.charCodeAt(0))}
async function pushSub(){if(!canPush()||Notification.permission!=='granted'||!DB||!NICK)return false;
 try{const reg=await navigator.serviceWorker.ready;let sb=await reg.pushManager.getSubscription();if(!sb)sb=await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:b64u(VAPID)});
  const {data,error}=await DB.rpc('push_subscribe',Object.assign(whoP(),{p_sub:sb.toJSON()}));return !error&&data===true}catch(e){return false}}
let PUSHED=false;
function notiPrompt(){if(!isApp()||!canPush()||Notification.permission!=='default'||ls('np2')||document.getElementById('inst')||document.querySelector('.mdw'))return;
 instBox(`<div class="nti">${BELL}</div><h3>알림을 허용해 주세요</h3><p>새 공지와 피드백 답장을 폰 알림으로 받을 수 있어요.</p><button class="b inb" onclick="notiAsk()">알림 허용하기</button><button class="inw" onclick="notiLater()">나중에 할게요</button>`)}
async function notiAsk(){ls('np2','1');closeInst();let r='default';try{r=await Notification.requestPermission()}catch(e){}
 if(r==='granted'){const ok=await pushSub();soonMsg(ok?'알림이 켜졌어요.':'알림은 허용됐어요. 등록은 다음에 열 때 다시 시도할게요.')}else notiWarn();if(CURR=='profile')profile()}
function notiLater(){ls('np2','1');closeInst();notiWarn()}
function notiWarn(){askBox('알림이 꺼져 있어요','알림을 허용하지 않으면 새 공지와 답장을 폰으로 받을 수 없어요.<small class="mdn">나중에 프로필에서 다시 켤 수 있어요.</small>','확인')}
function notiState(){if(!canPush())return isApp()?'불가':'앱 전용';return {granted:'켜짐',denied:'차단됨',default:'꺼짐'}[Notification.permission]||'꺼짐'}
async function notiFromProfile(){if(!isApp()){setTimeout(lockMsg,50);return}if(!canPush())return soonMsg('이 폰에서는 알림을 쓸 수 없어요. 운영체제를 최신으로 업데이트해 주세요.');
 if(Notification.permission==='denied')return askBox('알림이 차단돼 있어요','휴대폰 설정에서 풍산 학습 앱의 알림을 허용해 주세요.','확인');
 if(Notification.permission==='granted'){const ok=await pushSub();return soonMsg(ok?'알림이 켜져 있어요.':'등록하지 못했어요. 잠시 후 다시 시도해 주세요.')}
 return notiAsk()}
function afterHome(){postLoad();if(!PUSHED&&canPush()&&Notification.permission==='granted'){PUSHED=true;pushSub()}
 msgLoad();setTimeout(()=>{if(CURR=='subjects')notiPrompt()},700);setTimeout(goalGate,1000)}

// ---- 피드백 답장: 클로드가 저장소의 replies.json 에 적어 두면 관리자 기기가 열릴 때 보냄 ----
async function sendReplies(){if(!ADMINMODE||!DB||!AK())return;let L=[];try{const r=await fetch('replies.json',{cache:'no-store'});if(!r.ok)return;L=await r.json()}catch(e){return}
 let done={};try{done=JSON.parse(ls('rps'))||{}}catch(e){}let n=0;
 for(const x of L){if(!x||!x.rid||done[x.rid])continue;try{const {data,error}=await DB.rpc('admin_reply',{p_key:AK(),p_rid:x.rid,p_fid:x.fid,p_changes:x.changes||'',p_howto:x.howto||''});if(error)continue;if(['sent','dup','anon','nofb'].includes(data)){done[x.rid]=1;if(data=='sent')n++}}catch(e){}}
 ls('rps',JSON.stringify(done));if(n){admLoad.ok=false;soonMsg(`피드백 답장 ${n}개를 보냈어요.`)}}

// ================= 풀이판 (수리 과목) =================
const PADS=new Set(SUBJ[1].map(x=>x[0]));const isPad=n=>PADS.has(n);
const PS=4000;let PD=null,PST={mode:'sheet',tool:'p',col:1,wid:2.8,bg:0,pen:false,full:false},PACT=null,PTM=0;const PCACHE={};
const pKey=id=>'pad:'+NICK+':'+id;
function pGet(id){if(PCACHE[id])return PCACHE[id];let d=null;try{d=JSON.parse(ls(pKey(id))||'null')}catch(e){}return PCACHE[id]=d&&d.s?d:{s:[],o:[],h:420,t:0}}
function pPut(id){const d=PCACHE[id];if(!d)return;d.t=Date.now();const j=JSON.stringify({s:d.s,o:d.o,h:d.h,t:d.t});try{ls(pKey(id),j)}catch(e){}
 clearTimeout(PTM);PTM=setTimeout(()=>{if(DB&&NICK)DB.rpc('pad_save',Object.assign(whoP(),{p_qid:id,p_data:(d.s.length||d.o.length)?JSON.parse(j):null})).then(()=>{},()=>{})},1500)}
async function pPull(id){if(!DB||!NICK)return;try{const {data,error}=await DB.rpc('pad_get',Object.assign(whoP(),{p_qid:id}));if(error||!data||!data.s)return;const l=pGet(id);if((data.t||0)>(l.t||0)){PCACHE[id]={s:data.s,o:data.o||[],h:data.h||420,t:data.t};try{ls(pKey(id),JSON.stringify(PCACHE[id]))}catch(e){}if(PD&&PD.id==id){PD.d=PCACHE[id];padSize();padDraw('s');padDraw('o')}}}catch(e){}}
const PIC={p:'<path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19z"/><path d="M14.5 6.5l3 3"/>',h:'<path d="M9 15l-3 3H3v-3l9-9 4 4z"/><path d="M14 4l6 6"/><path d="M13 20h8" stroke-width="3.5" opacity=".55"/>',e:'<path d="M8 20h12"/><path d="M5.5 15.5l9-9a2 2 0 0 1 2.8 0l2.2 2.2a2 2 0 0 1 0 2.8L13 18H8z"/><path d="M10 11l5 5"/>',
 un:'<path d="M9 14L4 9l5-5"/><path d="M4 9h10a6 6 0 0 1 0 12h-3"/>',re:'<path d="M15 14l5-5-5-5"/><path d="M20 9H10a6 6 0 0 0 0 12h3"/>',cl:'<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/>',
 bg:'<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 10h16M4 15h16M10 4v16M15 4v16" opacity=".6"/>',pen:'<path d="M12 19l7-7-4-4-7 7-1 5z"/><path d="M3 21l3-1"/>',fu:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',sw:'<path d="M7 7h13l-4-4M17 17H4l4 4"/>',fo:'<path d="M6 9l6 6 6-6"/>'};
const pI=k=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${PIC[k]}</svg>`;
function padHTML(){const op=ls('padopen')!=='0';return `<section class="card pad${op?'':' pcl'}" id="pad"><div class="padh"><b>풀이판</b><div class="seg"><button id="pmS" class="${PST.mode=='sheet'?'on':''}" onclick="padMode('sheet')">연습장</button><button id="pmO" class="${PST.mode=='over'?'on':''}" onclick="padMode('over')">문제 위에</button></div><button class="pib pswp" onclick="padSwap()" title="문제와 풀이판 자리 바꾸기" aria-label="좌우 바꾸기">${pI('sw')}</button><button class="pib pfo" onclick="padFold()" title="${op?'접기':'펼치기'}" aria-label="풀이판 접기">${pI('fo')}</button></div>
<div class="pmini" id="pmini"></div><div class="ptb"><span class="pg">${['p','h','e'].map(k=>`<button class="pib${PST.tool==k?' on':''}" data-t="${k}" onclick="padTool('${k}')" aria-label="${{p:'펜',h:'형광펜',e:'지우개'}[k]}">${pI(k)}</button>`).join('')}</span><span class="psep"></span><span class="pg">${[1,2,3].map(c=>`<button class="pib${PST.col==c?' on':''}" data-c="${c}" onclick="padCol(${c})" aria-label="색 ${c}"><i class="psw" style="background:var(--pk${c})"></i></button>`).join('')}</span><span class="psep"></span><span class="pg">${[[1.6,5],[2.8,8],[4.6,12]].map(([w,z])=>`<button class="pib${PST.wid==w?' on':''}" data-w="${w}" onclick="padWid(${w})" aria-label="굵기"><i class="pdt" style="width:${z}px;height:${z}px"></i></button>`).join('')}</span><span class="psep"></span><span class="pg"><button class="pib" id="pUn" onclick="padUndo()" aria-label="되돌리기">${pI('un')}</button><button class="pib" id="pRe" onclick="padRedo()" aria-label="다시 하기">${pI('re')}</button><button class="pib" id="pCl" onclick="padClear()" aria-label="모두 지우기">${pI('cl')}</button></span><span class="pg ppush"><button class="pib" onclick="padBg()" aria-label="배경 바꾸기">${pI('bg')}</button><button class="pib${PST.pen?' on':''}" id="pPen" onclick="padPen()" aria-label="펜으로만 쓰기">${pI('pen')}</button><button class="pib" onclick="padFull()" aria-label="크게 보기">${pI('fu')}</button></span></div>
<div class="psw2${PST.pen?' pen':''}" id="psw"><canvas id="pcS"></canvas><div class="phint" id="phint">여기에 풀이를 써 보세요</div></div><button class="pgrow" onclick="padGrow()">↓ 연습장 아래로 늘리기</button></section>`}
function padMount(q){if(!ls('padhint')){ls('padhint','1');setTimeout(()=>soonMsg('두 손가락으로 밀면 풀이판을 위아래로 움직일 수 있어요.'),600)}const qz=document.querySelector('#app .qz');if(!qz)return;PD={id:q.id,d:pGet(q.id),redo:{s:[],o:[]}};
 const card=qz.querySelector(':scope>.card');card.classList.add('pqc');const ov=document.createElement('canvas');ov.id='pcO';card.appendChild(ov);
 qz.classList.add('pz');if(ls('padlh')==='1')qz.classList.add('plh');document.body.classList.add('pdw');
 const m=document.getElementById('pmini');if(m)m.innerHTML=qtx(q.q,q);
 ['s','o'].forEach(L=>{const c=document.getElementById(L=='s'?'pcS':'pcO');c.addEventListener('pointerdown',e=>padDown(e,L));c.addEventListener('pointermove',padMove);c.addEventListener('pointerup',padUp);c.addEventListener('pointercancel',padUp)});
 card.classList.toggle('pwr',PST.mode=='over');card.classList.toggle('pen',PST.pen);
 requestAnimationFrame(()=>{padSize();padDraw('s');padDraw('o')});pPull(q.id)}
const pC=L=>document.getElementById(L=='s'?'pcS':'pcO');
function padSize(){if(!PD)return;const dpr=Math.min(devicePixelRatio||1,3),s=pC('s'),o=pC('o');if(!s||!o)return;const w=document.getElementById('psw').clientWidth;
 const ph=matchMedia('(min-width:900px) and (orientation:landscape)').matches?Math.max(PD.d.h,innerHeight-200):PD.d.h;PD.ph=ph;s.style.height=ph+'px';s.width=w*dpr;s.height=ph*dpr;const c=o.parentNode;o.width=c.clientWidth*dpr;o.height=c.clientHeight*dpr}
const cssv=k=>getComputedStyle(document.documentElement).getPropertyValue(k).trim();
function pBg(x,W,H){x.fillStyle=cssv('--pbg');x.fillRect(0,0,W,H);if(PST.bg==2)return;x.strokeStyle=cssv('--pln');x.lineWidth=1;x.beginPath();const g=24;if(PST.bg==0)for(let i=g;i<W;i+=g){x.moveTo(i+.5,0);x.lineTo(i+.5,H)}for(let y=g;y<H;y+=g*(PST.bg==1?1.4:1)){x.moveTo(0,Math.round(y)+.5);x.lineTo(W,Math.round(y)+.5)}x.stroke()}
function pStroke(x,st,W){const p=st.p,n=p.length/2;if(!n)return;x.save();if(st.k=='h'){x.globalAlpha=.32;x.strokeStyle=cssv('--phi');x.lineWidth=st.w*4.2*W/360}else{x.strokeStyle=cssv('--pk'+st.c);x.lineWidth=st.w*W/360}
 x.lineCap='round';x.lineJoin='round';x.beginPath();const X=i=>p[2*i]/PS*W,Y=i=>p[2*i+1]/PS*W;x.moveTo(X(0),Y(0));
 if(n<3)x.lineTo(X(n-1)+.01,Y(n-1));else{for(let i=1;i<n-1;i++)x.quadraticCurveTo(X(i),Y(i),(X(i)+X(i+1))/2,(Y(i)+Y(i+1))/2);x.lineTo(X(n-1),Y(n-1))}x.stroke();x.restore()}
function padDraw(L){const c=pC(L);if(!c||!PD)return;const x=c.getContext('2d'),W=c.clientWidth||1,dpr=c.width/W;x.setTransform(dpr,0,0,dpr,0,0);const H=c.height/dpr;x.clearRect(0,0,W,H);if(L=='s')pBg(x,W,H);
 PD.d[L].forEach(st=>pStroke(x,st,W));if(L=='s'){const h=document.getElementById('phint');if(h)h.style.opacity=PD.d.s.length?0:1}padBtns()}
function padBtns(){if(!PD)return;const L=PST.mode=='over'?'o':'s',u=document.getElementById('pUn'),r=document.getElementById('pRe'),c=document.getElementById('pCl');if(u)u.disabled=!PD.d[L].length;if(r)r.disabled=!PD.redo[L].length;if(c)c.disabled=!PD.d[L].length}
function pPos(e,L){const r=pC(L).getBoundingClientRect();return [Math.round((e.clientX-r.left)/r.width*PS),Math.round((e.clientY-r.top)/r.width*PS)]}
// 두 손가락: 그리지 않고 화면(풀이판)을 위아래·좌우로 움직이기
const PTS=new Map();let PAN=null;
function pScr(el){for(let e=el;e&&e!==document.body;e=e.parentElement){const cs=getComputedStyle(e);if(/(auto|scroll)/.test(cs.overflowY+cs.overflowX)&&(e.scrollHeight>e.clientHeight+1||e.scrollWidth>e.clientWidth+1))return e}return document.scrollingElement||document.documentElement}
function pMid(){let x=0,y=0;PTS.forEach(v=>{x+=v.x;y+=v.y});return {x:x/PTS.size,y:y/PTS.size}}
function padDown(e,L){if(e.pointerType=='touch'&&!PST.pen){PTS.set(e.pointerId,{x:e.clientX,y:e.clientY});if(PTS.size>=2){e.preventDefault();if(PACT&&!PACT.er&&PACT.st){const a=PD.d[PACT.L],i=a.lastIndexOf(PACT.st);if(i>=0)a.splice(i,1);padDraw(PACT.L)}PACT=null;try{pC(L).setPointerCapture(e.pointerId)}catch(_){}PAN={m:pMid(),el:pScr(pC(L))};return}}
 if(!PD||(L=='o'&&PST.mode!='over'))return;if(e.pointerType=='touch'&&PST.pen)return;
 if(e.pointerType=='pen'&&!PST.pen){PST.pen=true;padPenApply();soonMsg('펜이 감지됐어요. 손가락으로는 화면을 넘길 수 있어요.')}
 e.preventDefault();try{pC(L).setPointerCapture(e.pointerId)}catch(_){}const p=pPos(e,L);
 if(PST.tool=='e'){PACT={L,er:1};padErase(L,p);return}
 PACT={L,st:{k:PST.tool,c:PST.col,w:PST.wid,p:p.slice()},t:Date.now(),x:e.clientX,y:e.clientY,mv:0};PD.d[L].push(PACT.st);PD.redo[L]=[];padDraw(L)}
function padMove(e){if(e.pointerType=='touch'&&!PST.pen&&PTS.has(e.pointerId)){PTS.set(e.pointerId,{x:e.clientX,y:e.clientY});if(PAN&&PTS.size>=2){e.preventDefault();const m=pMid(),dx=m.x-PAN.m.x,dy=m.y-PAN.m.y;PAN.m=m;PAN.el.scrollBy(-dx,-dy);if(PAN.el!==document.scrollingElement&&PAN.el!==document.documentElement&&((dy>0&&PAN.el.scrollTop<=0)||(dy<0&&PAN.el.scrollTop+PAN.el.clientHeight>=PAN.el.scrollHeight-1)))scrollBy(0,-dy);return}}
 if(!PACT)return;const L=PACT.L,p=pPos(e,L);if(PACT.er)return padErase(L,p);PACT.mv=Math.max(PACT.mv,Math.hypot(e.clientX-PACT.x,e.clientY-PACT.y));
 (e.getCoalescedEvents?e.getCoalescedEvents():[e]).forEach(v=>{const q=pPos(v,L),a=PACT.st.p,n=a.length;if(Math.abs(a[n-2]-q[0])+Math.abs(a[n-1]-q[1])>=6)a.push(q[0],q[1])});
 if(L=='s'){const y=p[1]/PS*pC('s').getBoundingClientRect().width;if(y>(PD.ph||PD.d.h)-60){PD.d.h=(PD.ph||PD.d.h)+240;padSize()}}padDraw(L)}
function padUp(e){if(e&&e.pointerType=='touch'){PTS.delete(e.pointerId);if(PAN){if(PTS.size<2)PAN=null;return}}
 if(!PACT)return;const a=PACT;PACT=null;
 if(a.L=='o'&&!a.er&&a.mv<6&&Date.now()-a.t<300&&e&&e.clientX!=null){const o=pC('o');o.style.pointerEvents='none';const el=document.elementFromPoint(e.clientX,e.clientY);o.style.pointerEvents='';const t=el&&el.closest('button,input,textarea,a,label');if(t){PD.d.o.pop();padDraw('o');if(/INPUT|TEXTAREA/.test(t.tagName))t.focus();else t.click();return}}
 pPut(PD.id);padBtns()}
function padErase(L,p){const r=Math.round(14/pC(L).getBoundingClientRect().width*PS),a=PD.d[L],b=a.filter(st=>{for(let i=0;i<st.p.length;i+=2)if(Math.hypot(st.p[i]-p[0],st.p[i+1]-p[1])<r)return false;return true});if(b.length!=a.length){PD.d[L]=b;PD.redo[L]=[];padDraw(L);pPut(PD.id)}}
function padTool(k){PST.tool=k;document.querySelectorAll('#pad [data-t]').forEach(b=>b.classList.toggle('on',b.dataset.t==k))}
function padCol(c){PST.col=c;if(PST.tool!='p')padTool('p');document.querySelectorAll('#pad [data-c]').forEach(b=>b.classList.toggle('on',+b.dataset.c==c))}
function padWid(w){PST.wid=w;document.querySelectorAll('#pad [data-w]').forEach(b=>b.classList.toggle('on',+b.dataset.w==w))}
function padUndo(){const L=PST.mode=='over'?'o':'s';if(PD.d[L].length){PD.redo[L].push(PD.d[L].pop());padDraw(L);pPut(PD.id)}}
function padRedo(){const L=PST.mode=='over'?'o':'s';if(PD.redo[L].length){PD.d[L].push(PD.redo[L].pop());padDraw(L);pPut(PD.id)}}
let PCLR=0;function padClear(){const L=PST.mode=='over'?'o':'s';if(Date.now()-PCLR>2500){PCLR=Date.now();return soonMsg(`한 번 더 누르면 ${L=='s'?'연습장':'문제 위 필기'}를 모두 지워요.`)}PCLR=0;PD.redo[L]=[];PD.d[L]=[];if(L=='s')PD.d.h=420;padSize();padDraw('s');padDraw('o');pPut(PD.id)}
function padBg(){PST.bg=(PST.bg+1)%3;padDraw('s');soonMsg('배경: '+['모눈','줄 노트','무지'][PST.bg])}
function padPenApply(){const b=document.getElementById('pPen');if(b)b.classList.toggle('on',PST.pen);const w=document.getElementById('psw');if(w)w.classList.toggle('pen',PST.pen);const c=document.querySelector('.pqc');if(c)c.classList.toggle('pen',PST.pen)}
function padPen(){PST.pen=!PST.pen;padPenApply();soonMsg(PST.pen?'펜으로만 써요. 손가락은 화면 넘기기예요.':'손가락으로도 쓸 수 있어요.')}
function padFull(){PST.full=!PST.full;const p=document.getElementById('pad');if(!p)return;p.classList.toggle('pfull',PST.full);document.body.classList.toggle('pfx',PST.full);if(PST.full&&PST.mode=='over')padMode('sheet');requestAnimationFrame(()=>{padSize();padDraw('s')})}
function padGrow(){PD.d.h+=300;padSize();padDraw('s');pPut(PD.id)}
function padMode(m){PST.mode=m;const s=document.getElementById('pmS'),o=document.getElementById('pmO');if(s)s.classList.toggle('on',m=='sheet');if(o)o.classList.toggle('on',m=='over');const c=document.querySelector('.pqc');if(c)c.classList.toggle('pwr',m=='over');padBtns();
 if(m=='over'){if(PST.full)padFull();soonMsg('문제 카드 위에 바로 쓸 수 있어요. 보기는 톡 누르면 골라져요.')}}
function padFold(){const p=document.getElementById('pad'),cl=p.classList.toggle('pcl');ls('padopen',cl?'0':'1');if(cl&&PST.mode=='over')padMode('sheet');requestAnimationFrame(()=>{padSize();padDraw('s');padDraw('o')})}
function padSwap(){const qz=document.querySelector('#app .qz'),on=qz.classList.toggle('plh');ls('padlh',on?'1':'0');soonMsg(on?'풀이판을 왼쪽에 둘게요.':'풀이판을 오른쪽에 둘게요.');requestAnimationFrame(()=>{padSize();padDraw('s');padDraw('o')})}
addEventListener('resize',()=>{if(PD&&document.getElementById('pcS')){padSize();padDraw('s');padDraw('o')}});
function padThumb(id){const d=pGet(id);if(!d.s.length&&!d.o.length)return '';if(!d.s.length)return '<div class="pth"><small>내 풀이</small><span class="mut">문제 위에 쓴 필기만 있어요.</span></div>';
 const W=360;let my=0;d.s.forEach(st=>{for(let i=1;i<st.p.length;i+=2)my=Math.max(my,st.p[i])});const H=Math.min(d.h,my/PS*W+30),c=document.createElement('canvas');c.width=W*2;c.height=H*2;const x=c.getContext('2d');x.scale(2,2);const b=PST.bg;PST.bg=0;pBg(x,W,H);PST.bg=b;d.s.forEach(st=>pStroke(x,st,W));
 return `<div class="pth"><small>내 풀이</small><img src="${c.toDataURL('image/png')}" alt="내 풀이"></div>`}

// ================= 공지 게시판 =================
let POSTS=null,PIMG=[],PEDIT=null;const PMAX=6;
const ICN_MEGA='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1z"/><path d="M16.5 8.8a4.6 4.6 0 0 1 0 6.4M19.2 6.3a8.2 8.2 0 0 1 0 11.4"/></svg>';
const ICN_BELL2='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M12 4a5.5 5.5 0 0 0-5.5 5.5v3.6L5 16h14l-1.5-2.9V9.5A5.5 5.5 0 0 0 12 4z"/><path d="M10 19a2 2 0 0 0 4 0"/></svg>';
const escA=t=>esc(t||'').replace(/"/g,'&quot;');
const pT=x=>Date.parse(x.created_at)||0,pSeen=()=>+ls('pseen')||0;
async function postLoad(){if(!DB)return POSTS||(POSTS=[]);try{const {data,error}=await DB.rpc('post_list');if(error)throw 0;POSTS=Array.isArray(data)?data:[]}catch(e){if(!POSTS)POSTS=[]}KV++;postBadge();return POSTS}
// 공지 종류: 내용 맨 앞 표시 [[u]] 업데이트 / [[n]] 공지 (표시가 없는 예전 글은 제목으로 판단)
const pKind=x=>{const b=x.body||'';if(b.startsWith('[[u]]'))return 1;if(b.startsWith('[[n]]'))return 0;return /업데이트/.test(x.title||'')?1:0};
const pBody=x=>(x.body||'').replace(/^\[\[[un]\]\]\n?/,'');
// 새 글: 이번 업데이트 전에 이미 본 글은 빼고, 글을 직접 열어 봐야 읽은 것으로
const pBase=()=>{let b=ls('pbase');if(!b){b=String(pSeen()||Date.now());ls('pbase',b)}return +b};
const pRd=()=>{try{return JSON.parse(ls('pread'))||[]}catch(e){return []}};
const pNew=x=>pT(x)>pBase()&&!pRd().includes(x.id);
function pMark(id){const a=pRd();if(!a.includes(id)){a.push(id);ls('pread',JSON.stringify(a.slice(-300)))}postBadge()}
function postBadge(){try{mailBadge()}catch(e){}}
const nsItems=()=>{const a=[];(POSTS||[]).forEach(x=>a.push({t:pKind(x)?2:1,x,at:x.created_at,nw:pNew(x),title:x.title,on:`postView(${x.id})`}));
 mMsgs().forEach(m=>a.push({t:3,m,at:m.created_at,nw:!m.read,title:mTitle(m),on:MSEL?`msTog(${m.id})`:`msgOpen(${m.id})`}));return a.sort((p,q)=>new Date(q.at)-new Date(p.at))};
const NTG=['','공지','업데이트','메시지'],NTC=['','n','u','m'];
const nsList=c=>nsItems().filter(i=>!c||i.t==c);
function boardHTML(){const c=KCH.noti,L=nsList(c),A=nsItems(),nn=[0,1,2,3].map(k=>A.filter(i=>(!k||i.t==k)&&i.nw).length);let b='';
 if(MSEL&&c==3)b+=`<div class="msb msx"><button class="msa${L.length&&L.every(i=>MSEL.has(i.m.id))?' on':''}" onclick="msAll()"><span class="msc"></span>전체 선택</button><button class="lk" onclick="msOff()">취소</button><button class="b msd"${MSEL.size?'':' disabled'} onclick="msDel()">삭제${MSEL.size?' '+MSEL.size:''}</button></div>`;
 if(POSTS==null&&MSGS===null)b+=skMsgs(4);
 else if(!L.length)b+=`<div class="card kmt">${['받은 소식이 없어요.','올라온 공지가 없어요.','올라온 업데이트가 없어요.','받은 메시지가 없어요.'][c]}</div>`;
 else b+=L.map(i=>{const sel=MSEL&&i.m;return `<button class="mgc${i.nw?'':' rd'}${sel?' msk':''}${sel&&MSEL.has(i.m.id)?' sel':''}" onclick="${i.on}">${sel?'<span class="msc"></span>':'<span class="mgd"></span>'}<span class="mgb"><b>${esc(i.title)}</b><small><i class="tg ${NTC[i.t]}">${NTG[i.t]}</i>${fdt(i.at)}</small></span>${sel?'':'<span class="chev">›</span>'}</button>`}).join('');
 const ic=[];if(c==3&&mMsgs().length)ic.push(['trash','메시지 골라서 지우기','msOn()']);if(OWNER&&DB&&c!=3)ic.push(['plus','공지 올리기','postForm()']);
 return kPage('noti',kHead('<h2>소식</h2>',ic,'noti',nn),b)}
const nsAt=()=>/^(board|inbox)/.test(CURR||'');
async function boardRaw(){MSEL=null;show(boardHTML(),kKey('noti'));await Promise.all([postLoad(),DB&&NICK?msgLoad():0]);if(!nsAt()||KNV)return;show(boardHTML(),kKey('noti'));postBadge()}
function board(){return boardRaw()}
function inbox(){KCH.noti=3;return boardRaw()}
let LBC={},LBP=0;
const wkR=(off)=>{const n=new Date(),m=new Date(n);m.setDate(n.getDate()-((n.getDay()+6)%7)+off*7);const e=new Date(m);e.setDate(m.getDate()+6);return [dkey(m),dkey(e)]};
const lbRange=p=>p==0?wkR(0):p==1?wkR(-1):['0000-00-00','9999-99-99'];
const LBK=['time','streak','q'],lbKey=()=>KCH.lb+'_'+(KCH.lb==1?0:LBP);
const lbFmt=(c,n)=>{if(c==0){const h=Math.floor(n/3600),m=Math.round(n%3600/60);return `<span class="lbv">${h?`<b>${h}</b><i>시간</i>`:''}${m||!h?`<b>${m}</b><i>분</i>`:''}</span>`}return `<span class="lbv"><b>${n}</b><i>${c==1?'일':'문제'}</i></span>`};
const MEDAL=['#e8b923','#aeb4bd','#c98a4b'];
const CROWN='<svg class="lcr" viewBox="0 0 24 16" aria-hidden="true"><path d="M2 14 1 4l6 5 5-8 5 8 6-5-1 10z" fill="#e8b923" stroke="#8a6a00" stroke-width="1.200" stroke-linejoin="round"/></svg>';
function leaderHTML(){const c=KCH.lb,L=LBC[lbKey()];let b='';
 if(!DB||!NICK)b+=`<div class="card kmt">서버에 연결되면 순위를 볼 수 있어요.</div>`;
 else if(L===undefined)b+=skMsgs(5);
 else{const my=L.findIndex(x=>x.nick==NICK),mx=(L[0]&&L[0].n)||1,NB='<span class="lbv"><b class="nb">-</b></span>';
  b+=`<div class="lbm"><span>내 순위</span><b>${my>=0?my+1+'위':'-'}</b><em>${my>=0?lbFmt(c,L[my].n):NB}</em></div>`;
  b+=`<div class="lbp">${[1,0,2].map(i=>{const x=L[i];if(!x)return `<div class="p${i+1} emp"><u style="background:${MEDAL[i]}">${i+1}</u><i class="lav" style="--avc:#d9d1c3;box-shadow:0 0 0 3px ${MEDAL[i]}"></i><b>-</b><strong>${NB}</strong></div>`;return `<div class="p${i+1}${x.nick==NICK?' me':''}"><u style="background:${MEDAL[i]}">${i+1}</u><i class="lav" style="--avc:${avc(x.nick)};box-shadow:0 0 0 3px ${MEDAL[i]}">${esc([...x.nick][0]||'?')}</i><b>${esc(x.nick)}</b><strong>${lbFmt(c,x.n)}</strong></div>`}).join('')}</div>`;
  const R4=L.slice(3);while(R4.length<2)R4.push(null);
  b+=R4.map((x,i)=>x?`<div class="lbr${x.nick==NICK?' me':''}"><i>${i+4}</i><i class="lav sm" style="--avc:${avc(x.nick)}">${esc([...x.nick][0]||'?')}</i><div class="lbb"><b>${esc(x.nick)}</b><s><u style="width:${Math.max(4,Math.round(x.n/mx*100))}%"></u></s></div><span>${lbFmt(c,x.n)}</span></div>`:`<div class="lbr emp"><i>${i+4}</i><i class="lav sm" style="--avc:#d9d1c3"></i><div class="lbb"><b>-</b><s></s></div>${NB}</div>`).join('');
  if(!OWNER&&my<0)b+=`<div class="mut" style="text-align:center;font-size:13px;margin:8px 0">공부하면 순위에 올라요.</div>`}
 b+=`<p class="mut" style="font-size:12px;text-align:center;margin:12px 0 0">${['문제를 푼 시간만 모아요.','어제나 오늘 공부했을 때의 연속 일수만 보여요.','파트를 끝까지 풀면 문제 수가 반영돼요. 너무 빠르게 푼 파트는 제외돼요.'][c]}</p>`;
 let hd=kHead('<h2>리더보드</h2>',[],'lb');
 if(c!=1)hd=hd.replace('<div class="ki"></div>',`<div class="ki"><button class="lbsel" onclick="lbMenu(this)" aria-haspopup="menu">${['이번 주','지난주','전체'][LBP]}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.600" stroke-linecap="round" stroke-linejoin="round"/></svg></button></div>`);
 return kPage('lb',hd,b)}
function lbMenu(b){const w=b.parentElement,o=w.querySelector('.lbdd');if(o){o.remove();return}
 w.insertAdjacentHTML('beforeend',`<div class="lbdd" role="menu">${['이번 주','지난주','전체'].map((x,i)=>`<button role="menuitem" class="${i==LBP?'on':''}" onclick="lbPer(${i})">${x}</button>`).join('')}</div>`);
 setTimeout(()=>document.addEventListener('click',function f(e){if(!e.target.closest('.lbdd,.lbsel')){const d=document.querySelector('.lbdd');if(d)d.remove()}document.removeEventListener('click',f,true)},true))}
function lbPer(i){if(i==LBP)return;LBP=i;KV++;leader()}
async function lbLoad(){const k=lbKey(),c=KCH.lb,[a,b]=lbRange(c==1?2:LBP);if(!DB||!NICK)return;try{const {data,error}=await DB.rpc('lb_rank',Object.assign(whoP(),{p_w0:a,p_w1:b,p_kind:LBK[c]}));if(error)throw 0;LBC[k]=Array.isArray(data)?data:[]}catch(e){if(LBC[k]===undefined)LBC[k]=[]}KV++}
async function leader(){show(leaderHTML(),kKey('lb'));const k=lbKey();await lbLoad();if(CURR!='leader'||KNV||lbKey()!=k)return;show(leaderHTML(),kKey('lb'))}
const ICN_MORE='<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><circle cx="5.5" cy="12" r="1.9"/><circle cx="12" cy="12" r="1.9"/><circle cx="18.5" cy="12" r="1.9"/></svg>';
function pvMenu(b,id){const w=b.parentElement,o=w.querySelector('.pvdd');if(o){o.remove();return}
 w.insertAdjacentHTML('beforeend',`<div class="pvdd" role="menu"><button role="menuitem" onclick="postForm(${id})">고치기</button><button role="menuitem" class="dng" onclick="this.parentElement.remove();postDel(${id})">지우기</button></div>`);
 setTimeout(()=>document.addEventListener('click',function f(e){if(!e.target.closest('.pvdd,.pvm')){const d=document.querySelector('.pvdd');if(d)d.remove()}document.removeEventListener('click',f,true)},true))}
async function postView(id){if(!POSTS)await postLoad();const x=(POSTS||[]).find(y=>y.id==id);if(!x){soonMsg('지워진 공지예요.');return board()}
 pMark(x.id);const pb=pBody(x),im=(x.imgs||[]).map(i=>`<figure class="mgi skl" data-i="${escA(i)}" aria-label="사진 불러오는 중"></figure>`).join('');
 show(`<div class="pvh"><h2>${esc(x.title)}</h2>${OWNER&&DB?`<button class="pvm" aria-label="더보기" onclick="pvMenu(this,${x.id})">${ICN_MORE}</button>`:''}</div>${pb||im?`<div class="card mgv pvw">${pb?`<div class="mgs"><p>${pHtml(pb)}</p></div>`:''}${im}</div>`:''}<p class="pvd">${pKind(x)?'업데이트':'공지'} · ${fdt(x.created_at)}${x.updated_at?' · 수정됨':''}</p>`);mgImgs()}
let PKIND=0;
// ===== 공지 서식: 글자 크기·굵게·기울임·밑줄·글자색·형광펜 =====
// 저장 형식: [b][/b] [i][/i] [u][/u] [c=#hex][/c] [h=#hex][/h] [s=NN][/s] (예전 글은 그냥 글자라 그대로 보여요)
const RTC=['#2a2620','#e8493d','#e08a1e','#2f8a57','#3f6fb5','#8a5cc2','#8a8070'],RTH=['#ffe48a','#ffc9d6','#cfe6ff','#d6f0c2','#ffd8b0'];
let RTS=16,RTR=null,RTL=0;
function pHtml(t){let h=esc(t||'');
 h=h.replace(/\[(\/?)(b|i|u)\]/g,(m,c,k)=>`<${c}${k=='b'?'b':k=='i'?'i':'u'}>`)
  .replace(/\[c=(#[0-9a-fA-F]{6})\]/g,'<span style="color:$1">').replace(/\[h=(#[0-9a-fA-F]{6})\]/g,'<span class="phl" style="--ph:$1">')
  .replace(/\[s=(\d{2})\]/g,(m,n)=>`<span style="font-size:${Math.max(10,Math.min(32,+n))}px">`).replace(/\[\/(c|h|s)\]/g,'</span>');
 return h.replace(/\n/g,'<br>')}
const RTI={b:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"><path d="M7 4.8h6a3.6 3.6 0 0 1 0 7.2H7zM7 12h7a3.6 3.6 0 0 1 0 7.2H7z"/></svg>',
 i:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M10.5 4.8H18M6 19.2h7.5M14.6 4.8l-5.2 14.4"/></svg>',
 u:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M7.5 4.5v6.5a4.5 4.5 0 0 0 9 0V4.5M6 20h12"/></svg>',
 c:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M7.2 16.5 12 4.5l4.8 12M9 12h6"/></svg>',
 h:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14.5 4.5 5 5-8.2 8.2-5-5zM6.3 12.7l-2.3 5.3 1.9 1.9 5.3-2.3"/></svg>'};
function rteHTML(v){const B=(k,lab,x)=>`<button type="button" class="rtb" data-k="${k}" aria-label="${lab}" onpointerdown="event.preventDefault()" onclick="rteDo('${k}',this)">${RTI[k]}${x||''}</button>`;
 return `<div class="rte"><div class="rtt" role="toolbar" aria-label="글자 꾸미기"><button type="button" class="rtb rtz" aria-label="글자 작게" onpointerdown="event.preventDefault()" onclick="rteSize(-1)">−</button><span class="rts" id="rts">${RTS}</span><button type="button" class="rtb rtz" aria-label="글자 크게" onpointerdown="event.preventDefault()" onclick="rteSize(1)">+</button><i class="rtd"></i>${B('b','굵게')}${B('i','기울임')}${B('u','밑줄')}${B('c','글자색','<b class="rtcb" id="rtcb"></b>')}${B('h','형광펜','<b class="rtcb rthb" id="rthb"></b>')}</div><div class="rtp" id="rtp" hidden></div>
 <div class="rtx" id="pb" contenteditable="true" role="textbox" aria-multiline="true" data-ph="내용">${v}</div></div>`}
let RTCC=RTC[1],RTHC=RTH[0];
function rteMount(){const e=document.getElementById('pb');if(!e)return;try{document.execCommand('styleWithCSS',false,true)}catch(x){}
 e.addEventListener('paste',ev=>{ev.preventDefault();const t=(ev.clipboardData||window.clipboardData).getData('text/plain');document.execCommand('insertText',false,t)});
 const up=()=>{rteSave();rteSync()};['keyup','mouseup','touchend','input','focus'].forEach(k=>e.addEventListener(k,up));document.addEventListener('selectionchange',rteSel);
 const cb=document.getElementById('rtcb'),hb=document.getElementById('rthb');if(cb)cb.style.background=RTCC;if(hb)hb.style.background=RTHC}
function rteSel(){const e=document.getElementById('pb');if(!e){document.removeEventListener('selectionchange',rteSel);return}const s=getSelection();if(s.rangeCount&&e.contains(s.anchorNode)){rteSave();rteSync()}}
function rteSave(){const e=document.getElementById('pb'),s=getSelection();if(e&&s.rangeCount&&e.contains(s.getRangeAt(0).commonAncestorContainer))RTR=s.getRangeAt(0).cloneRange()}
function rteBack(){const e=document.getElementById('pb');if(!e)return;e.focus();if(RTR){const s=getSelection();s.removeAllRanges();s.addRange(RTR)}}
function rteSync(){if(RTL)return;const s=getSelection();let n=s.anchorNode;if(!n)return;if(n.nodeType==3)n=n.parentElement;const e=document.getElementById('pb');if(!e||!e.contains(n))return;
 const z=Math.round(parseFloat(getComputedStyle(n).fontSize));const t=document.getElementById('rts');if(t&&z)t.textContent=z;
 [['b','bold'],['i','italic'],['u','underline']].forEach(([k,c])=>{const b=document.querySelector(`.rtb[data-k="${k}"]`);let on=false;try{on=document.queryCommandState(c)}catch(x){}if(b)b.classList.toggle('on',on)})}
function rteDo(k,btn){rteBack();if(k=='b'||k=='i'||k=='u'){document.execCommand({b:'bold',i:'italic',u:'underline'}[k]);rteSave();rteSync();return}
 const p=document.getElementById('rtp');if(!p.hidden&&p.dataset.k==k){p.hidden=true;return}const L=k=='c'?RTC:RTH;p.dataset.k=k;
 p.innerHTML=`<span>${k=='c'?'글자색':'형광펜'}</span>`+L.map(c=>`<button type="button" class="rtw" style="background:${c}" aria-label="${c}" onpointerdown="event.preventDefault()" onclick="rteCol('${k}','${c}')"></button>`).join('')+(k=='h'?`<button type="button" class="rtw rtn" aria-label="형광펜 지우기" onpointerdown="event.preventDefault()" onclick="rteCol('h','')">×</button>`:'');p.hidden=false}
function rteCol(k,c){rteBack();document.getElementById('rtp').hidden=true;
 if(k=='c'){RTCC=c;document.execCommand('foreColor',false,c);document.getElementById('rtcb').style.background=c}
 else{const s=getSelection();if(c){RTHC=c;document.execCommand('hiliteColor',false,c)||document.execCommand('backColor',false,c);document.getElementById('rthb').style.background=c}else{document.execCommand('hiliteColor',false,'transparent')||document.execCommand('backColor',false,'transparent')}}rteSave()}
function rteSize(d){RTL=1;rteBack();const s=getSelection(),t=document.getElementById('rts'),cur=+(t&&t.textContent)||RTS,nz=Math.max(11,Math.min(30,cur+d));RTS=nz;if(t)t.textContent=nz;
 const col=s.rangeCount&&s.isCollapsed;
 if(col){let a=s.anchorNode;if(a&&a.nodeType==3)a=a.parentElement;const sp=a&&a.closest&&a.closest('#pb span[style*="font-size"]');if(sp&&!sp.textContent.replace(/\u200b/g,'')){sp.style.fontSize=nz+'px';if(t)t.textContent=nz;rteSave();setTimeout(()=>{RTL=0;rteSync()},80);return}}
 document.execCommand('fontSize',false,7);
 const tg=[...document.querySelectorAll('#pb font[size="7"],#pb [style*="xxx-large"]')].map(f=>{let el=f;if(f.tagName=='FONT'){el=document.createElement('span');while(f.firstChild)el.appendChild(f.firstChild);f.replaceWith(el)}el.style.fontSize=nz+'px';el.querySelectorAll('[style*="font-size"]').forEach(x=>x.style.fontSize='');return el});
 if(col&&!tg.length){const sp=document.createElement('span');sp.style.fontSize=nz+'px';sp.textContent='\u200b';const r=s.getRangeAt(0);r.insertNode(sp);tg.push(sp)}
 if(tg.length){const r=document.createRange(),a=tg[0],z=tg[tg.length-1];if(col){if(!a.textContent)a.textContent='\u200b';r.selectNodeContents(a);r.collapse(false)}else{r.setStart(a,0);r.setEnd(z,z.childNodes.length)}s.removeAllRanges();s.addRange(r)}
 rteSave();if(t)t.textContent=nz;setTimeout(()=>{RTL=0;rteSync()},80)}
// 편집기 내용 → 저장 형식
function rteGet(){const e=document.getElementById('pb');if(!e)return '';const hex=c=>{if(!c)return '';const m=c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);if(m){if(m[4]!==undefined&&+m[4]==0)return '';return '#'+[m[1],m[2],m[3]].map(v=>(+v).toString(16).padStart(2,'0')).join('')}return /^#[0-9a-f]{6}$/i.test(c)?c.toLowerCase():/^#[0-9a-f]{3}$/i.test(c)?'#'+c.slice(1).split('').map(x=>x+x).join('').toLowerCase():''};
 const walk=n=>{if(n.nodeType==3)return n.nodeValue.replace(/[\u200b\u00a0]/g,m=>m=='\u00a0'?' ':'').replace(/\[(?=\/?[biuchs][\]=])/g,'［');if(n.nodeType!=1)return '';const t=n.tagName;if(t=='BR')return '\n';
  let inner=[...n.childNodes].map(walk).join(''),o='',c='';const st=n.style||{};
  const blk=(t=='DIV'||t=='P')&&n!==e;
  if(t=='B'||t=='STRONG'||+st.fontWeight>=600||st.fontWeight=='bold'){o+='[b]';c='[/b]'+c}
  if(t=='I'||t=='EM'||st.fontStyle=='italic'){o+='[i]';c='[/i]'+c}
  if(t=='U'||/underline/.test(st.textDecoration||st.textDecorationLine||'')){o+='[u]';c='[/u]'+c}
  const fc=hex(st.color||(t=='FONT'?n.getAttribute('color'):''));if(fc&&fc!='#2a2620'){o+=`[c=${fc}]`;c='[/c]'+c}
  const bc=hex(st.backgroundColor||(n.classList&&n.classList.contains('phl')?n.style.getPropertyValue('--ph'):''));if(bc&&bc!='#ffffff'){o+=`[h=${bc}]`;c='[/h]'+c}
  const fz=parseFloat(st.fontSize);if(fz&&Math.round(fz)!=16){o+=`[s=${Math.max(10,Math.min(32,Math.round(fz)))}]`;c='[/s]'+c}
  if(!inner.replace(/\n/g,''))return blk?'\n':inner;return (blk?'\n':'')+o+inner+c};
 let r=[...e.childNodes].map(walk).join('');return r.replace(/^\n+/,'').replace(/\n{3,}/g,'\n\n').replace(/\s+$/,'')}
function pkTo(k){PKIND=k;document.querySelectorAll('.pkg button').forEach(b=>b.classList.toggle('on',+b.dataset.k==k))}
function postForm(id){const x=id?(POSTS||[]).find(y=>y.id==id):null;PEDIT=x?x.id:null;PIMG=x?(x.imgs||[]).map(i=>({id:i})):[];PKIND=x?pKind(x):KCH.noti;
 RTS=16;show(`<h2>${x?'공지 고치기':'공지 올리기'}</h2><div class="ntg pkg" role="tablist">${[[0,'공지'],[1,'업데이트']].map(([k,l])=>`<button data-k="${k}" class="${k==PKIND?'on':''}" onclick="pkTo(${k})">${l}</button>`).join('')}</div><div class="card"><input type="text" id="pt" maxlength="80" placeholder="제목" value="${x?escA(x.title):''}">${rteHTML(x?pHtml(pBody(x)):'')}<div class="nim2" id="pimg"></div><label class="nadd" for="pti">${ICN_PIC}<span>사진 추가</span><small>최대 ${PMAX}장</small></label><input type="file" id="pti" accept="image/*" multiple hidden onchange="pImgAdd(this)"></div><label class="pnt"><input type="checkbox" id="pnf"${x?'':' checked'}><span><b>모두에게 알림 보내기</b></span></label><div class="row"><button class="b" id="pts" onclick="postSave()">${x?'고친 내용 저장':'공지 올리기'}</button></div>`);pImgDraw();rteMount()}
async function pImgAdd(inp){const fs=[...inp.files];inp.value='';for(const f of fs){if(PIMG.length>=PMAX){soonMsg(`사진은 ${PMAX}장까지 올릴 수 있어요.`);break}try{PIMG.push({d:await nImgShrink(f)})}catch(e){soonMsg('이 사진은 열 수 없어요.')}}pImgDraw()}
function pImgDraw(){const w=document.getElementById('pimg');if(!w)return;w.innerHTML=PIMG.map((x,i)=>`<div><img ${x.d?`src="${x.d}"`:`data-pi="${escA(x.id)}"`} alt=""><button aria-label="사진 빼기" onclick="PIMG.splice(${i},1);pImgDraw()">×</button></div>`).join('');const a=document.querySelector('label[for=pti]');if(a)a.style.display=PIMG.length>=PMAX?'none':'';
 w.querySelectorAll('img[data-pi]').forEach(async im=>{const i=im.dataset.pi;try{let d=NIMC.get(i);if(!d){const r=await DB.rpc('notice_img',{p_id:i});if(r.error||!r.data)throw 0;d=r.data;NIMC.set(i,d)}im.src=d}catch(e){}})}
async function postSave(){const t=document.getElementById('pt').value.trim(),b=rteGet(),nf=document.getElementById('pnf').checked;if(!t)return soonMsg('제목을 써 주세요.');if(b.length>6000)return soonMsg('내용이 너무 길어요. 조금 줄여 주세요.');
 if(!(await askBox(PEDIT?'고친 내용을 저장할까요?':(PKIND?'업데이트를':'공지를')+' 올릴까요?',`<b>${esc(t)}</b>${PIMG.length?` · 사진 ${PIMG.length}장`:''}<br>${nf?'모두에게 알림도 보내요.':'알림은 보내지 않아요.'}`,PEDIT?'저장':'올리기')))return;
 const sb=document.getElementById('pts'),lb=sb?sb.textContent:'',re=()=>{if(sb){sb.disabled=false;sb.textContent=lb}};if(sb){sb.disabled=true;sb.textContent=PIMG.some(x=>x.d)?'사진 올리는 중…':'올리는 중…'}
 const ids=[];try{for(const x of PIMG){if(x.id){ids.push(x.id);continue}const q=await DB.rpc('admin_notice_img',{p_key:AK(),p_data:x.d});if(q.error||!q.data)throw 0;x.id=q.data;NIMC.set(q.data,x.d);delete x.d;ids.push(q.data)}}catch(e){re();return soonMsg('사진을 올리지 못했어요. 「공지게시판.sql」을 먼저 실행해 주세요.')}
 try{const r=await DB.rpc('admin_post_save',{p_key:AK(),p_id:PEDIT,p_title:t,p_body:(PKIND?'[[u]]':'[[n]]')+b,p_imgs:ids,p_notify:nf});if(r.error||!r.data)throw 0;
  soonMsg(PEDIT?'고친 내용을 저장했어요.':'공지를 올렸어요.');await postLoad();if(PEDIT||nf)pMark(r.data);KCH.noti=PKIND;if(PEDIT)postView(r.data);else board()}catch(e){re();soonMsg('올리지 못했어요. 「공지게시판.sql」을 먼저 실행해 주세요.')}}
async function postDel(id){if(!(await askBox('공지를 지울까요?','지운 공지는 되돌릴 수 없어요. 사진도 함께 지워져요.','삭제')))return;
 try{const r=await DB.rpc('admin_post_del',{p_key:AK(),p_id:id});if(r.error||r.data!==true)throw 0;POSTS=(POSTS||[]).filter(x=>x.id!=id);soonMsg('공지를 지웠어요.');board()}catch(e){soonMsg('지우지 못했어요. 다시 시도해 주세요.')}}

// ================= 사용법 =================
function guide(){const S=(n,t,body,img)=>`<section class="gds" id="gd${n}"><div class="gdh"><span class="gdn">${n}</span><h3>${t}</h3></div><div class="gdb">${body}</div>${img?`<div class="gdi${Array.isArray(img)?' two':''}">${[].concat(img).map(x=>`<img src="guide/${x}.jpg" alt="" loading="lazy">`).join('')}</div>`:''}</section>`;
 let h=`<h2>사용법</h2><p class="tag">처음이라면 위에서부터 차례로 읽어 보세요.</p>`;
 h+=`<nav class="gdx">${['시작하기','앱 설치','과목 고르기','공부하기','문제 풀기','모의고사','오답노트','통계·달력','공지','메시지함·알림','피드백','프로필'].map((t,i)=>`<a href="#gd${i+1}" onclick="event.preventDefault();document.getElementById('gd${i+1}').scrollIntoView({behavior:'smooth',block:'start'})">${i+1}. ${t}</a>`).join('')}</nav>`;
 h+=S(1,'닉네임으로 시작하기','<p>닉네임과 <b>숫자 4자리 비밀번호</b>를 정해요. 다른 폰에서도 같은 닉네임·비밀번호로 들어오면 기록이 그대로 이어져요.</p><p class="gdw">비밀번호를 잊으면 기록을 찾을 수 없어요.</p>','g_start');
 h+=S(2,'앱으로 설치하기',`<p>홈 화면에 추가하면 앱처럼 쓸 수 있어요. <b>전체 통계, 공부 달력, 폰 알림</b>은 앱에서만 돼요.</p><ul><li>아이폰: 사파리 <b>공유</b> → <b>홈 화면에 추가</b></li><li>안드로이드: 크롬 메뉴 <b>⋮</b> → <b>앱 설치</b></li></ul>${isApp()?'<p class="gdok">지금 앱으로 쓰고 있어요 👍</p>':'<button class="b gdbt" onclick="installApp()">앱으로 설치하기</button>'}`);
 h+=S(3,'과목 고르기','<p>풍산 학습 첫 화면에서 과목을 눌러요. 진행도 막대가 있는 과목이 열린 과목이고, <b>준비 중</b> 과목은 곧 열려요.</p><p>화면 맨 아래 탭바: <b>집</b>(학습) · <b>확성기</b>(공지) · <b>편지봉투</b>(메시지함) · <b>막대</b>(전체 통계) · <b>사람</b>(프로필)</p><p>탭마다 위에 칩(내 과목·다른 과목·전체 등)이 있어요. 칩을 누르거나 화면을 옆으로 밀면 다음 칩으로, 마지막 칩에서 더 밀면 옆 탭으로 넘어가요.</p>','g_subj');
 h+=S(4,'공부하기 (필기)','<p>과목에 들어가 <b>공부하기</b>를 누르면 교과서 핵심을 정리한 필기가 나와요. <b>형광펜</b>은 꼭 외울 내용, 그림·지도·표는 교과서 자료를 다시 정리한 거예요.</p><ul><li><b>교과서 원문 보기</b>: 그 단원의 교과서 쪽을 바로 볼 수 있어요.</li><li>필기 맨 아래 버튼으로 <b>그 단원 문제</b>를 바로 풀 수 있어요.</li><li>맨 위 <b>처음부터 공부하기</b> 카드는 이어서 볼 단원을 알려 줘요.</li></ul>',['g_learn','g_note']);
 h+=S(5,'문제 풀기','<p><b>문제 풀기</b>에서 대단원을 펼쳐 중단원을 골라요. 중단원마다 <b>기본 문제</b>와 자료를 읽고 푸는 <b>실전 문제</b>가 있어요.</p><p>다 풀고 <b>제출</b>하면 정답과 해설이 나와요. <b>처음 푼 결과만</b> 진행도와 통계에 들어가요.</p>','g_quiz');
 h+=S(6,'모의고사','<p>과목마다 <b>5회분</b>이 있어요. 회차당 <b>25문항 내외 · 50분 · 100점 만점</b>이고, 학력평가처럼 자료·사례·&lt;보기&gt;를 분석하는 문제예요.</p><ul><li>그 과목 <b>문제를 모두 풀면</b> 열려요. (11월 23일부터는 모두 열려요.)</li><li>위쪽에 <b>남은 시간</b>이 나오고, 50분을 넘기면 초과 시간이 표시돼요. 제출하면 점수와 오답이 바로 나와요.</li><li><b>모의고사 통계</b>에서 회차별 점수를 볼 수 있어요.</li></ul>','g_mock');
 h+=S(7,'오답노트','<p>틀린 문제는 과목 화면의 <b>오답노트</b>에 단원별로 모여요. 다시 풀어서 맞히면 <b>고친 오답</b>으로 바뀌어요. <b>취약</b> 표시가 붙은 유형은 오답부터 고치는 게 좋아요.</p>','g_wrong');
 h+=S(8,'전체 통계 · 공부 달력','<p>아래 탭바의 <b>막대</b>(전체 통계)는 칩으로 나뉘어 있어요. <b>요약</b>은 오늘의 목표·기말 진도·이번 주 공부, <b>기록</b>은 친구들과 비교·요일별 패턴·나의 기록, <b>성적</b>은 정답률·모의고사 점수·약점 유형, <b>과목별</b>은 과목마다 자세히, <b>달력</b>은 날짜별 공부 시간이에요. (앱 전용)</p><p><b>오늘의 목표</b>는 하루 첫 접속 때 정해요. 정하면 그날은 바꿀 수 없고, 안 정했으면 다시 들어올 때마다 물어봐요.</p>','g_stats');
 h+=S(9,'공지','<p>아래 탭바의 <b>확성기</b>(공지)에서 시험 안내는 <b>공지</b> 칩, 앱 소식은 <b>업데이트</b> 칩에 모여 있어요. 아직 안 열어 본 글이 있으면 <b class="gdr">빨간 점</b>이 생겨요.</p>','g_board');
 h+=S(10,'메시지함 · 알림','<p><b>편지봉투</b>를 누르면 메시지함이에요. 새 공지 알림, 피드백 답장, 관리자가 보낸 알림이 와요. 숫자는 읽지 않은 메시지 수예요. 휴지통을 누르면 골라서 지울 수 있어요.</p><p>프로필에서 <b>폰 알림</b>을 켜 두면 메시지가 올 때 폰으로도 알려 줘요.</p>','g_inbox');
 h+=S(11,'피드백 보내기','<p>정답이 이상하거나 불편한 점, 추가했으면 하는 과목이 있으면 프로필 오른쪽 위 <b>피드백</b> 글자를 눌러 유형을 골라 보내 주세요. 고쳐지면 메시지함으로 답장이 와요.</p>');
 h+=S(12,'프로필','<p>아래 탭바의 <b>사람</b>(프로필)에서 닉네임·비밀번호를 바꾸고 폰 알림을 켤 수 있어요. 그날 공부를 안 하면 저녁에 오는 <b>공부 알림</b>도 여기서 끄고 켤 수 있어요. 오른쪽 위 <b>피드백</b> 버튼을 누르면 피드백을 보낼 수 있어요.</p>','g_profile');
 h+=`<div class="row"><button class="b" onclick="subjects()">학습하러 가기</button></div>`;show(h)}

// ================= 관리자 =================
let FB=[];
const FBI=(()=>{const W=d=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;return {
bug:W('<rect x="8" y="7.5" width="8" height="11.5" rx="4"/><path d="M12 7.5V11M9.3 4.6l1.4 1.6M14.7 4.6l-1.4 1.6M4.5 11.5H8M16 11.5h3.5M5.5 17l2.6-1M18.5 17l-2.6-1"/>'),
qerr:W('<circle cx="12" cy="12" r="8.3"/><path d="M12 7.6v5.2M12 16.3v.2"/>'),
ui:W('<rect x="7" y="3.6" width="10" height="16.8" rx="2.6"/><path d="M10.8 17.4h2.4"/>'),
req:W('<path d="M12 5.8v12.4M5.8 12h12.4"/>'),
good:W('<path d="M12 19.2s-7-4.3-7-9.1A3.8 3.8 0 0 1 12 7.9a3.8 3.8 0 0 1 7 2.2c0 4.8-7 9.1-7 9.1z"/>'),
etc:W('<path d="M6.8 12h.01M12 12h.01M17.2 12h.01" stroke-width="3.2"/>')}})();
const FBT=[['bug','사이트 오류·버그','#e57c72',4],['qerr','문제·정답 오류','#f0a35e',3],['ui','디자인·사용 불편','#f1cf6b',2],['req','과목·기능 추가 요청','#8fb8ec',1],['good','칭찬·응원','#9bd3ae',0],['etc','기타','#c9c2b3',0]];
const FBR=[['qerr',/정답|오답|해설|답이|답을|채점|틀렸|틀린|오타|선지|선택지|번\s?문제|문제\s?(가|에|오류|이상)/],
 ['bug',/안\s?(돼|되|됨|열|나와|나오|보여|들어가|눌)|오류|에러|버그|멈|튕|깨져|로딩|렉|느려|작동|먹통|저장|사라졌|초기화|로그인/],
 ['ui',/디자인|색|글씨|글자|폰트|버튼|화면|불편|크기|작아|커서|안\s?보|보기\s?힘|레이아웃|배치|스크롤|다크|눈/],
 ['req',/추가|열어|만들어|생겼으면|있었으면|원해|해\s?주세요|해줘|늘려|더\s?많|과목|단원|기능|넣어/],
 ['good',/좋|최고|감사|고마|도움|짱|굿|편해|유용|재밌|재미|👍|❤|ㄱㅅ|잘\s?쓰/]];
const fbStrip=t=>(t||'').replace(/^\[\[k:\w+\]\]/,'');
const fbCls=t=>{const m=/^\[\[k:(\w+)\]\]/.exec(t||'');if(m&&FBT.some(x=>x[0]==m[1]))return m[1];for(const [k,r] of FBR)if(r.test(t||''))return k;return 'etc'};
const FT=k=>FBT.find(x=>x[0]==k);
const allQ=()=>{const m=new Map();[].concat(...PASS.map(p=>p.Q)).concat(...Object.keys(CUR).map(n=>socQ(n))).forEach(q=>m.set(q.id,q));return [...m.values()]};
function achX(n,X){const o=SUBJ.flat().find(x=>x[0]==n)[2];const qs=isSoc(n)?socQ(n):[];return qs.length?Math.round(st(qs,X).c/qs.length*100):0}
async function admLoad(force){if(!force&&ADM.length+FB.length&&admLoad.ok)return true;
 if(SUBMODE){try{const [a,b]=await Promise.all([DB.rpc('sub_players',{p_key:SK()}),DB.rpc('sub_feedback',{p_key:SK()})]);if(a.error||!a.data)throw 0;ADM=a.data.map(x=>({nick:'',R:okDV(x),t:0}));FB=(b.data||[]).map(x=>({nick:x.nick||'익명',text:fbStrip(x.body),t:Date.parse(x.created_at),k:fbCls(x.body)}));admLoad.ok=true;return true}catch(e){return false}}
 try{const [a,b]=await Promise.all([DB.rpc('admin_players',{p_key:AK()}),DB.rpc('admin_feedback',{p_key:AK()})]);if(a.error||!a.data)throw 0;
  ADM=a.data.filter(x=>x.nick!==ADM_NICK).map(x=>({nick:x.nick,R:okDV(x.data),t:Date.parse(x.updated_at)}));FB=(b.data||[]).map(x=>({id:x.id,st:x.status||'new',nick:x.nick||'익명',text:fbStrip(x.body),t:Date.parse(x.created_at),k:fbCls(x.body)}));admLoad.ok=true;return true}catch(e){return false}}
const chip=k=>{const t=FT(k);return `<span class="chp" style="background:${t[2]}">${t[1]}</span>`};
const fbCard=x=>`<div class="card fbc${x.st=='done'?' fdn':''}"><div class="fbh">${chip(x.k)}<b>${esc(x.nick)}</b>${x.id?`<span class="fid">#${x.id}</span>`:''}${x.st=='done'?'<span class="chp" style="background:#9bd3ae">답장 완료</span>':''}<span class="mut">${fd(x.t)}</span>${x.id&&OWNER?`<button class="fbrb" onclick="event.stopPropagation();fbReply(${x.id})">${x.st=='done'?'다시 답장':'답장'}</button>`:''}</div><div class="fbt">${esc(x.text||'')}</div></div>`;
async function fbReply(id){if(!(await admLoad()))return admin();const x=FB.find(f=>f.id==id);if(!x)return admin();
 show(`<h2>피드백 답장</h2><div class="card fbc"><div class="fbh">${chip(x.k)}<b>${esc(x.nick)}</b><span class="fid">#${x.id}</span><span class="mut">${fd(x.t)}</span></div><div class="fbt">${esc(x.text||'')}</div></div><div class="card"><textarea id="frt" maxlength="2000" placeholder="답장 내용" style="min-height:150px"></textarea></div><div class="row"><button class="b" id="frs" onclick="fbReplySend(${x.id})">답장 보내기</button></div>`)}
async function fbReplySend(id){const x=FB.find(f=>f.id==id),t=(document.getElementById('frt').value||'').trim();if(!x)return;if(!t)return soonMsg('답장 내용을 써 주세요.');
 if(x.nick=='익명')return soonMsg('익명 피드백이라 답장을 보낼 수 없어요.');
 if(!(await askBox('답장을 보낼까요?',`<b>${esc(x.nick)}</b> 님에게 보내져요.`,'보내기')))return;
 const sb=document.getElementById('frs');if(sb){sb.disabled=true;sb.textContent='보내는 중…'}
 try{let r=await DB.rpc('admin_fb_answer',{p_key:AK(),p_fid:id,p_text:t});
  if(r.error)r=await DB.rpc('admin_reply',{p_key:AK(),p_rid:'m'+id+'-'+Date.now(),p_fid:id,p_changes:t,p_howto:''});
  if(r.error||!['sent','anon'].includes(r.data))throw 0;x.st='done';soonMsg(r.data=='anon'?'가입하지 않은 사람이라 메시지함에는 못 보냈어요. 답장 완료로 표시했어요.':'답장을 보냈어요.');goUp()}catch(e){if(sb){sb.disabled=false;sb.textContent='답장 보내기'}soonMsg('보내지 못했어요. 다시 시도해 주세요.')}}

function fbCopy(){const L=FB.filter(x=>x.st!='done').slice().sort((a,b)=>a.t-b.t);if(!L.length)return soonMsg('답장하지 않은 피드백이 없어요.');
 const t=`[풍산 학습 피드백] 답장 전 ${L.length}개\n\n`+L.map(x=>`#${x.id} · ${x.nick} · ${fd(x.t)} · ${FT(x.k)[1]}\n${x.text}`).join('\n\n')+`\n\n위 피드백을 보고 수정할 내용을 적어 줄게.`;
 const ok=()=>soonMsg('복사했어요. 클로드 채팅창에 붙여 넣어 주세요.');
 try{navigator.clipboard.writeText(t).then(ok,()=>fbCopyShow(t))}catch(e){fbCopyShow(t)}}
function fbCopyShow(t){show(`<h2>피드백 복사</h2><p class="tag">아래 내용을 길게 눌러 모두 선택한 뒤 복사해 주세요.</p><div class="card"><textarea readonly style="min-height:50vh">${esc(t)}</textarea></div>`)}
let NTO='all',NTS=new Set();
const ICN_PIC='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2.5"/><circle cx="9" cy="10" r="1.8"/><path d="M4 17l5-4.5 3.5 3 3-2.5 4.5 4" stroke-linecap="round"/></svg>';
function nImgShrink(f){return new Promise((ok,no)=>{const u=URL.createObjectURL(f),im=new Image();im.onload=()=>{const M=1280,r=Math.min(1,M/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*r);c.height=Math.round(im.height*r);const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.drawImage(im,0,0,c.width,c.height);URL.revokeObjectURL(u);let q=.82,d=c.toDataURL('image/jpeg',q);while(d.length>900000&&q>.4){q-=.12;d=c.toDataURL('image/jpeg',q)}ok(d)};im.onerror=()=>{URL.revokeObjectURL(u);no()};im.src=u})}
function noticeForm(pre){if(pre){NTO='some';NTS=new Set([pre])}else{NTO='all';NTS=new Set()}
 show(`<h2>알림 보내기</h2><div class="ntg" role="tablist">${[['all','전체'],['staff','관리자'],['some','개인']].map(([k,l])=>`<button data-k="${k}" onclick="ntTo('${k}')">${l}</button>`).join('')}</div><div id="ntw"></div><div class="card"><input type="text" id="ntt" maxlength="60" placeholder="제목"><textarea id="ntb" maxlength="2000" placeholder="내용" style="margin-top:8px"></textarea></div><div class="row"><button class="b" id="nts" onclick="noticeSend()">보내기</button></div>`);ntTo(NTO)}
function ntTo(k){NTO=k;document.querySelectorAll('.ntg button').forEach(b=>b.classList.toggle('on',b.dataset.k==k));const w=document.getElementById('ntw');
 if(k=='all')w.innerHTML=`<p class="ntm">참여자 <b>${ADM.length}명</b> 모두에게 보내요.</p>`;
 else if(k=='staff')w.innerHTML=`<p class="ntm"><b>나와 보조 관리자</b>에게만 보내요.</p>`;
 else{w.innerHTML=`<div class="card ntp"><input type="search" id="ntq" placeholder="닉네임 검색" oninput="ntList()"><div class="ntline" id="ntl"></div></div><p class="ntm" id="ntn"></p>`;ntList()}
 ntBtn()}
function ntList(){const q=(document.getElementById('ntq')||{}).value||'',L=ADM.map(r=>r.nick).filter(n=>n.includes(q.trim())).sort((a,b)=>NTS.has(b)-NTS.has(a)||a.localeCompare(b));
 document.getElementById('ntl').innerHTML=L.length?L.map(n=>`<button class="${NTS.has(n)?'on':''}" onclick="ntPick(decodeURIComponent('${encodeURIComponent(n)}'))">${esc(n)}</button>`).join(''):'<p class="mut" style="font-size:14px;margin:6px 2px">찾는 사람이 없어요.</p>';ntBtn()}
function ntPick(n){NTS.has(n)?NTS.delete(n):NTS.add(n);ntList()}
function ntBtn(){const b=document.getElementById('nts'),m=document.getElementById('ntn');if(!b)return;
 if(m)m.innerHTML=NTS.size?`<b>${NTS.size}명</b> 선택했어요.`:'받을 사람을 눌러서 골라 주세요.';b.disabled=NTO=='some'&&!NTS.size;b.textContent=NTO=='some'&&NTS.size?`${NTS.size}명에게 보내기`:NTO=='staff'?'관리자에게 보내기':'전체에게 보내기'}
async function noticeSend(){const t=document.getElementById('ntt').value.trim(),b=document.getElementById('ntb').value.trim();if(!t)return soonMsg('제목을 써 주세요.');
 const who=NTO=='all'?'모든 사용자에게':NTO=='staff'?'관리자에게만':(NTS.size==1?`<b>${esc([...NTS][0])}</b> 님에게`:`선택한 ${NTS.size}명에게`);
 if(!(await askBox('알림을 보낼까요?',`<b>${esc(t)}</b><br>${who} 보내져요.`,'보내기')))return;
 const sb=document.getElementById('nts');if(sb){sb.disabled=true;sb.textContent='보내는 중…'}
 try{let r=await DB.rpc('admin_notice_to',Object.assign({p_key:AK(),p_title:t,p_body:b,p_to:NTO,p_nicks:NTO=='some'?[...NTS]:null}));
  if(r.error&&NTO=='all')r=await DB.rpc('admin_notice',{p_key:AK(),p_title:t,p_body:b});
  if(r.error||r.data<0)throw 0;soonMsg(`${r.data}명에게 보냈어요.`);goUp()}catch(e){if(sb)ntBtn();soonMsg('보내지 못했어요. 서버 설정을 확인해 주세요.')}}
function wrongAna(){let h='';
 // ---- 오답 분석 ----
 const Q=allQ(),tg={};Q.forEach(q=>ADM.forEach(r=>{const x=(r.R||{})[q.id];if(x){const t=tg[q.g]=tg[q.g]||{n:0,w:0};t.n++;if(!x.ok)t.w++}}));
 const ar=Object.keys(tg).filter(k=>tg[k].w).sort((a,b)=>tg[b].w/tg[b].n-tg[a].w/tg[a].n||tg[b].w-tg[a].w).slice(0,4);
 h+=`<h3 class="sec">오답 분석</h3><div class="sbt">많이 틀리는 영역</div>`;
 h+=ar.length?`<div class="card">${ar.map(k=>{const r=Math.round(tg[k].w/tg[k].n*100);return `<div class="arw"><div class="al"><span>${esc(k)}</span><b class="no-t">${r}%</b></div><div class="bar"><i data-w="${r}" style="width:0;background:#e9978f"></i></div><div class="mut" style="font-size:12px">${tg[k].w}/${tg[k].n}번 틀림</div></div>`}).join('')}</div>`:'<div class="card mut">아직 틀린 기록이 없어요.</div>';
 const ms=Q.map(q=>{let n=0,w=0;ADM.forEach(r=>{const x=(r.R||{})[q.id];if(x){n++;if(!x.ok)w++}});return{q,n,w}}).filter(x=>x.w).sort((a,b)=>b.w/b.n-a.w/a.n||b.w-a.w).slice(0,4);
 if(ms.length){h+=`<div class="sbt">많이 틀린 문제</div>`;ms.forEach(x=>{h+=`<div class="card"><div class="tag">${esc(x.q.g||'')}</div><div style="white-space:pre-line;font-size:15px">${esc(x.q.q.slice(0,90))}${x.q.q.length>90?'…':''}</div><div class="no-t" style="margin-top:4px">오답률 ${Math.round(x.w/x.n*100)}% <span class="mut">(${x.w}/${x.n}명)</span></div></div>`})}
 return h}
function subAdminBody(){return `<h3 class="sec">피드백 보기</h3><div class="hub">${hbBtn('#c9a7e8',ICN_GRID,'유형별 보기','','fbTypes()')}${hbBtn('#9bd3ae',ICN_PPL,'개인별 보기','','fbPeople()')}</div>`+wrongAna()}
// 프로필 「관리자」 칩 화면: 처음엔 스켈레톤, 불러오면 다시 그림
function admBody(){if(!DB)return '<div class="card kmt">서버에 연결되지 않았어요.</div>';
 if(!admLoad.ok){if(!admBody.ld){admBody.ld=1;admLoad(admBody.f).then(ok=>{admBody.f=0;if(!ok)admBody.ld=2;if(CURR=='profile'&&!KNV&&kChips('pf')[KCH.pf]=='관리자'){show(pfHTML(),kKey('pf'));animBars()}})}
  return admBody.ld==2?'<div class="card kmt">불러오지 못했어요.</div>':skAdmin(0)}
 return SUBMODE?subAdminBody():ownAdminBody()}
const ICN_GRID='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><rect x="4" y="4" width="7" height="7" rx="1.6"/><rect x="13" y="4" width="7" height="7" rx="1.6"/><rect x="4" y="13" width="7" height="7" rx="1.6"/><rect x="13" y="13" width="7" height="7" rx="1.6"/></svg>',
 ICN_PPL='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8.5" r="3.2"/><path d="M3.5 19c.6-3.2 2.8-5 5.5-5s4.9 1.8 5.5 5"/><circle cx="17" cy="9.5" r="2.5"/><path d="M15.8 14.3c2.4-.2 4.2 1.4 4.7 4.2"/></svg>',
 ICN_CLIP='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><rect x="6" y="5" width="12" height="15.5" rx="2"/><path d="M9.5 3.5h5v3h-5z"/><path d="M9 11h6M9 14.5h4"/></svg>';
const AVC=['#8fb8ec','#9bd3ae','#f3c969','#f0a35e','#c9a7e8','#e9978f','#7fcfc6'];
const avc=n=>AVC[[...n].reduce((a,c)=>a+c.charCodeAt(0),0)%AVC.length];
const hbBtn=(c,ic,t,sm,on)=>`<button class="hb" style="--hc:${c}" onclick="${on}"><i class="hbi">${ic}</i><span><b>${t}</b>${sm?`<small>${sm}</small>`:''}</span><span class="chev">›</span></button>`;
let SUBS=null;
async function subList(){let ok=true;try{const {data,error}=await DB.rpc('admin_subs',{p_key:AK()});if(error||!Array.isArray(data))throw 0;const m={};data.forEach(x=>{if(x.nick)m[x.nick]=x.slot});SUBS=m}catch(e){ok=false}const w=document.getElementById('ppl');if(w){w.innerHTML=pplHTML();}}
function pplHTML(){const sb=SUBS||{};return ADM.filter(r=>r.nick!==ADM_NICK).sort((a,b)=>((b.nick in sb)-(a.nick in sb))||(b.t-a.t)).map(r=>`<button onclick="adminOne(decodeURIComponent('${encodeURIComponent(r.nick)}'))"><i class="av" style="--avc:${avc(r.nick)}">${esc([...r.nick][0]||'?')}</i><span><b>${esc(r.nick)}${r.nick in sb?`<em class="rol">관리자·${sb[r.nick]}</em>`:''}</b><small>${r.t?fd(r.t):'기록 없음'}</small></span></button>`).join('')}
function admin(force){const i=kIdx('pf','관리자');if(i>=0)KCH.pf=i;if(force){admLoad.ok=false;admBody.ld=0;admBody.f=1}return profile()}
function ownAdminBody(){if(!POSTS&&!ownAdminBody.pl){ownAdminBody.pl=1;postLoad()}
 const pend=FB.filter(x=>x.st!='done').length,AP=ADM.filter(r=>r.nick!==ADM_NICK),act=AP.filter(r=>Date.now()-r.t<7*864e5).length;
 let h=`<div class="ast"><div><b>${AP.length}</b><span>참여자</span></div><div><b>${act}</b><span>이번 주 활동</span></div><div class="${pend?'hot':''}"><b>${pend}</b><span>답장 대기</span></div></div>`;
 h+=`<h3 class="sec">소식 전하기</h3><div class="hub">${hbBtn('#8fb8ec',ICN_BELL2,'알림 보내기','','noticeForm()')}${hbBtn('#e3b55a',ICN_MEGA,'공지 올리기','','postForm()')}</div>`;
 const now=Date.now(),rec=FB.filter(x=>now-x.t<14*864e5),base=rec.length?rec:FB,cnt={};FBT.forEach(t=>cnt[t[0]]=0);base.forEach(x=>cnt[x.k]++);
 const urg=cnt.bug+cnt.qerr,imp=cnt.ui+cnt.req;
 const [sl,sc]=!base.length?['의견 없음','#c9c2b3']:urg>=3?['수정 시급','#e05a4f']:urg>=1?['수정 의견 있음','#f0a35e']:imp>=3?['개선 요청 많음','#e6b93f']:['양호','#5fb27c'];
 h+=`<h3 class="sec">피드백 보기</h3><div class="card"><div class="evh"><span class="evd" style="background:${sc}"></span><b style="color:${sc}">${sl}</b><span class="mut" style="margin-left:auto;font-size:13px">${rec.length?'최근 2주':'전체'} ${base.length}건</span></div>
  <div class="seg" style="margin-top:10px">${base.length?FBT.filter(t=>cnt[t[0]]).map(t=>`<i style="flex:${cnt[t[0]]};background:${t[2]}"></i>`).join(''):'<i style="flex:1;background:var(--bd)"></i>'}</div>
  <div class="lgd">${FBT.filter(t=>cnt[t[0]]).map(t=>`<span><i style="background:${t[2]}"></i>${t[1]} ${cnt[t[0]]}</span>`).join('')}</div></div>`;
 const top=FB.filter(x=>FT(x.k)[3]>=2).sort((a,b)=>FT(b.k)[3]-FT(a.k)[3]||b.t-a.t).slice(0,3);
 h+=`<div class="sbt">가장 시급한 것</div>`+(top.length?top.map(fbCard).join(''):'<div class="card mut">지금 급하게 고칠 의견은 없어요.</div>');
 h+=`<div class="hub">${hbBtn('#c9a7e8',ICN_GRID,'유형별 보기','','fbTypes()')}${hbBtn('#9bd3ae',ICN_PPL,'개인별 보기','','fbPeople()')}</div><div class="hub hub1">${hbBtn('#f0a35e',ICN_CLIP,'클로드에게 보낼 피드백 복사','','fbCopy()')}</div>`;
 h+=`<h3 class="sec">개인별 관리</h3>`+(ADM.length?`<div class="ppl" id="ppl">${pplHTML()}</div>`:'<div class="card mut">아직 참여한 사람이 없어요.</div>');if(!SUBS&&!ownAdminBody.sl){ownAdminBody.sl=1;setTimeout(subList)}
 return h+wrongAna()}
async function fbTypes(){if(!(await admLoad()))return admin();const cnt={};FBT.forEach(t=>cnt[t[0]]=0);FB.forEach(x=>cnt[x.k]++);const mx=Math.max(1,...Object.values(cnt));
 let h=`<h2>유형별 의견</h2><p class="tag">전체 ${FB.length}개</p>`;
 FBT.forEach(t=>{h+=`<div class="card pc tyc" onclick="fbType('${t[0]}')"><div class="al"><span>${chip(t[0])}</span><b>${cnt[t[0]]}개</b></div><div class="bar"><i data-w="${Math.round(cnt[t[0]]/mx*100)}" style="width:0;background:${t[2]}"></i></div></div>`});
 h+=``;show(h);animBars()}
async function fbType(k){if(!(await admLoad()))return admin();const t=FT(k)||FBT[5],L=FB.filter(x=>x.k==t[0]);
 show(`<h2>${t[1]}</h2><p class="tag">${L.length}개 · 최신순</p>`+(L.length?L.map(fbCard).join(''):'<div class="card mut">이 유형의 의견은 없어요.</div>')+``)}
async function fbPeople(){if(!(await admLoad()))return admin();const g={};FB.forEach(x=>{(g[x.nick]=g[x.nick]||[]).push(x)});const ns=Object.keys(g).sort((a,b)=>g[b].length-g[a].length);
 let h=`<h2>개인별 의견</h2><p class="tag">${ns.length}명이 의견을 남겼어요.</p>`;
 h+=ns.length?ns.map(n=>`<div class="card pc" onclick="fbPerson(decodeURIComponent('${encodeURIComponent(n)}'))"><div class="al"><b>${esc(n)}</b><span class="mut">${g[n].length}개 · 최근 ${fd(g[n][0].t)}</span></div><div style="margin-top:6px;display:flex;gap:4px;flex-wrap:wrap">${[...new Set(g[n].map(x=>x.k))].map(chip).join('')}</div></div>`).join(''):'<div class="card mut">아직 의견이 없어요.</div>';
 h+=``;show(h)}
async function fbPerson(n){if(!(await admLoad()))return admin();const L=FB.filter(x=>x.nick==n);
 show(`<h2>${esc(n)}</h2><p class="tag">의견 ${L.length}개 · 최신순</p>`+L.map(fbCard).join('')+``)}
async function adminOne(n){if(!(await admLoad()))return admin();const r=ADM.find(x=>x.nick==n);if(!r)return admin();const X=r.R||{},TT=X._t||{},TD=Object.keys(TT).filter(k=>TT[k]>=1),tot=TD.reduce((a,k)=>a+TT[k],0);
 let h=`<h2>${esc(r.nick)}</h2><p class="tag">최근 활동 ${fd(r.t)}</p>${SUBMODE?'':`<div class="qk q1" style="margin-bottom:12px"><button onclick="noticeForm(decodeURIComponent('${encodeURIComponent(r.nick)}'))">${esc(r.nick)} 님에게 알림 보내기</button></div>`}`;
 h+=`<div class="pg2"><div class="card st2"><span>총 공부 시간</span><b>${fmtT(tot)}</b><small>오늘 ${fmtT(TT[dkey()]||0)}</small></div><div class="card st2"><span>공부한 날</span><b>${TD.length}일</b><small>${TD.length?'마지막 '+TD.sort().slice(-1)[0].slice(5).replace('-','/'):'기록 없음'}</small></div></div>`;
 let strip='';for(let i=13;i>=0;i--){const d=new Date(Date.now()-i*864e5),k=dkey(d),v=TT[k]||0,a=v>=1?Math.min(1,.25+v/3600):0;strip+=`<div class="sd2" title="${k}"><i style="background:${v>=1?`rgba(91,127,168,${a})`:'var(--bd)'}"></i><small>${d.getDate()}</small></div>`}
 h+=`<div class="card"><div class="mut" style="font-size:13px;margin-bottom:6px">최근 2주 공부</div><div class="strip">${strip}</div></div>`;
 h+=`<h3 class="sec">과목별 진행도</h3><div class="card">${SUBJ.flat().map(([n,c,o])=>{const a=achX(n,X);return `<div class="arw"><div class="al"><span>${n.split('|').join(' ')}</span><b>${a}%</b></div><div class="bar"><i data-w="${a}" style="width:0;background:${SC[c]}"></i></div></div>`}).join('')}</div>`;
 const tg={};allQ().forEach(q=>{const x=X[q.id];if(x){const t=tg[q.g]=tg[q.g]||{n:0,w:0};t.n++;if(!x.ok)t.w++}});const wk=Object.keys(tg).filter(k=>tg[k].w).sort((a,b)=>tg[b].w/tg[b].n-tg[a].w/tg[a].n);
 h+=`<h3 class="sec">오답 유형 분석</h3>`+(wk.length?wk.map(k=>{const rr=Math.round(tg[k].w/tg[k].n*100);return `<div class="card"><div class="al"><b>${esc(k)}</b><span class="no-t">${tg[k].w}/${tg[k].n} 틀림</span></div><div class="bar"><i data-w="${rr}" style="width:0;background:#e9978f"></i></div>${TIPS[k]?`<div class="mut" style="font-size:13px;margin-top:6px">${MX(esc(TIPS[k]))}</div>`:''}</div>`}).join(''):`<div class="card mut">${Object.keys(tg).length?'틀린 영역이 없어요.':'아직 푼 문제가 없어요.'}</div>`);
 h+=``;show(h);animBars()}

const SOCN=['정치','경제','동아시아|역사기행','현대사회와|윤리','한국지리|탐구'];
const isSoc=n=>!!CUR[n];
// 단원 구성: 이름을 받으면 여기만 바꾸면 됨. q: 문제 배열
const CUR={};SOCN.concat(['중국어|회화','일본어|회화','미적분','기하','세포와|물질대사','물질과|에너지','역학과|에너지','행성우주|과학']).forEach(n=>{CUR[n]=[1,2,3,4].map(u=>({n:u+'단원',m:[1,2,3].map(k=>({n:u+'-'+k+' 중단원',q:[]}))}))});
CUR['독서와|작문']=PASS.map(p=>({n:p.name,m:CATS.map(([k,l])=>({n:l,q:p.Q.filter(q=>q.cat==k)}))}));CUR['영어']=[];
const KIND={'독서와|작문':['지문','유형'],'영어':['지문','유형']};const kd=n=>KIND[n]||['대단원','중단원'];
const bigQ=(n,u)=>[].concat(...CUR[n][u].m.map(x=>x.q));
const socQ=n=>[].concat(...CUR[n].map((_,u)=>bigQ(n,u)));
const pct=qs=>qs.length?Math.round(st(qs).c/qs.length*100):0;
let OPEN=-1;
function socPage(n){if(!PASSG(n)&&CUR[n].length)return socPage2(n);const c=SUBJ.flat().find(x=>x[0]==n)[1],col=SC[c],nm=n.split('|').join(' ');
 const [K1,K2]=kd(n);let h=`<div class="shd"><h2 style="--hlc:${col}">${nm}</h2>${NEWS(n)?'<p class="tag">문제 풀기</p>':''}${COVER[n]?`<img class="cvs" src="${COVER[n]}" alt="">`:''}</div>`;
 if(!PASSG(n))h+=`<h3 class="sec sec1">복습</h3>`;
 {const wq=socQ(n).filter(q=>R[q.id]&&!R[q.id].ok),uq=wq.filter(isUnf);h+=`<button class="wnb" onclick="wrongPage('${n}')"><span><b>오답노트</b><small>${wq.length?(uq.length?`남은 오답 ${uq.length}문제`:'오답을 모두 고쳤어요'):'아직 틀린 문제가 없어요'}</small></span>${uq.length?`<span class="wnc">${uq.length}</span>`:''}<span class="chev">›</span></button>`}
 {const sn=starSegs(n).reduce((a,x)=>a+x.qs.length,0);h+=`<button class="wnb snb" onclick="starPage('${n}')"><span><b>별표 문제</b><small>${sn?`담아 둔 문제 ${sn}개`:'헷갈리는 문제에 별표를 눌러 모아요'}</small></span>${sn?`<span class="wnc">${sn}</span>`:''}<span class="chev">›</span></button>`}
 if(!CUR[n].length)h+=`<div class="card mut" style="text-align:center;padding:26px 16px">아직 ${K1}이 준비 중이에요.<br>곧 추가할게요!</div>`;
 if(PASSG(n)&&CUR[n].length)h+=`<p class="tag" style="margin:4px 2px 8px">풀 지문을 골라 주세요.</p>`;
 if(!PASSG(n)&&CUR[n].length)h+=`<h3 class="sec">단원별 문제</h3>`;
 const UNX=PASSG(n)?-1:CUR[n].findIndex((U,u)=>bigQ(n,u).length&&bigQ(n,u).some(q=>!R[q.id]||isUnf(q)));
 CUR[n].forEach((U,u)=>{const a=pct(bigQ(n,u));
  if(PASSG(n)){const qn=bigQ(n,u).length;h+=`<div class="ub" style="--uc:${col}"><div class="uh" onclick="socGo('${n}',${u})"><div class="ut"><b>${esc(U.n)}</b>${wkBadge(gInfo(bigQ(n,u)))}<div class="al"><span>진행도 · ${qn}문제</span><b>${a}%</b></div><div class="bar"><i data-w="${a}" style="width:0;background:${col}"></i></div></div><span class="chev">›</span></div></div>`;return}
  const dn=NEWS(n)&&uDone(n,u),nx=u==UNX;h+=`<div class="ub${OPEN==u?' op':''}${dn?' udn':''}${nx?' unx':''}" id="ub${u}" style="--uc:${col}"><div class="uh" onclick="tgl(${u})"><div class="ut"><b>${esc(U.n)}</b>${nx?'<span class="unxb">이어서</span>':''}${dn?DNB:''}${wkBadge(gInfo(bigQ(n,u)))}<div class="al"><span>진행도</span><b>${a}%</b></div><div class="bar"><i data-w="${a}" style="width:0;background:${col}"></i></div></div><span class="chev">›</span></div><div class="um"><div class="umi"><button class="mb mball" onclick="socGo('${n}',${u})"><span><b>이 단원 전체 풀기</b></span><span class="mut">${bigQ(n,u).length}문제</span></button>`;
  U.m.forEach((M,k)=>{const b=pct(M.q);h+=`<button class="mb" onclick="${NEWS(n)?`partPick('${n}',${u},${k})`:`socGo('${n}',${u},${k})`}"><span>${esc(M.n)}${wkBadge(gInfo(M.q))}</span><span class="mut">${M.q.length?M.q.length+'문제 · '+b+'%':'준비 중'}</span></button>`});
  h+=`</div></div></div>`});
 if(CUR[n].length&&!PASSG(n))h+=`<h3 class="sec">한 번에 풀기</h3>`;
 if(CUR[n].length)h+=`<div class="ub ua" style="--uc:${col}" onclick="socGo('${n}')"><div class="uh"><div class="ut"><b>전체 풀기</b><div class="al"><span>전체 진행도 · ${socQ(n).length}문제</span><b>${pct(socQ(n))}%</b></div><div class="bar"><i data-w="${pct(socQ(n))}" style="width:0;background:${col}"></i></div></div><span class="chev">›</span></div></div>`;h+=``;
 SOCCUR=n;show(h);animBars()}
function socPage2(n){const col=sCol(n),nm=n.split('|').join(' '),D=lhData(n),[K1]=kd(n);
 let h=`<div class="shd"><h2 style="--hlc:${col}">${NEWS(n)?'문제 풀기':nm}</h2>${NEWS(n)?`<p class="tag">${esc(nm)}</p>`:''}${COVER[n]?`<img class="cvs" src="${COVER[n]}" alt="">`:''}</div>`;
 const qp=pct(D.qs);
 h+=`<div class="lh1" style="--uc:${col}"><div class="lh1r">${ring(qp,col)}<div class="lh1p"><b>${qp}<small>%</small></b><span>문제 진행도</span></div></div><div class="lh1s"><div><small>푼 문제</small><b>${D.sol}<i>/${D.qs.length}</i></b></div><div><small>정답률</small><b>${D.acc==null?'-':D.acc+'<i>%</i>'}</b></div><div><small>남은 오답</small><b>${D.uq}<i>개</i></b></div></div></div>`;
 const bar=p=>`<div class="lbar"><i style="width:${p}%"></i></div>`;
 h+=`<h3 class="sec">복습</h3><div class="lrows" style="--uc:${col}"><button class="lrow lrw" onclick="wrongPage('${n}')"><span class="lic">${ICN_WR}</span><span class="lrt"><b>오답노트</b><small>${D.uq?`남은 오답 ${D.uq}문제`:'남은 오답이 없어요'}</small></span>${D.uq?`<span class="wnc">${D.uq}</span>`:''}<span class="chev">›</span></button><button class="lrow lrs" onclick="starPage('${n}')"><span class="lic">${ICN_ST}</span><span class="lrt"><b>별표 문제</b><small>${D.stn?`담아 둔 문제 ${D.stn}개`:'헷갈리는 문제에 별표를 눌러요'}</small></span>${D.stn?`<span class="wnc wst">${D.stn}</span>`:''}<span class="chev">›</span></button></div>`;
 const UNX=CUR[n].findIndex((U,u)=>bigQ(n,u).length&&bigQ(n,u).some(q=>!R[q.id]||isUnf(q)));
 h+=`<h3 class="sec">단원별 문제</h3>`;
 const RN=['Ⅰ','Ⅱ','Ⅲ','Ⅳ','Ⅴ','Ⅵ','Ⅶ','Ⅷ'];
 CUR[n].forEach((U,u)=>{const qs=bigQ(n,u),a=pct(qs),so=qs.filter(q=>R[q.id]),ac=so.length?Math.round(so.filter(q=>R[q.id].ok).length/so.length*100):null,wr=qs.filter(isUnf).length,nx=u==UNX,dn=NEWS(n)&&uDone(n,u);
  h+=`<div class="ub2${OPEN==u?' op':''}${nx?' unx':''}${dn?' udn':''}" id="ub${u}" style="--uc:${col}"><button class="lrow" onclick="tgl2(${u})"><span class="lic lnu">${RN[u]||u+1}</span><span class="lrt"><b>${esc(U.n.replace(/^[ⅠⅡⅢⅣⅤⅥ]+\.\s*/,''))}${nx?'<span class="unxb">이어서</span>':''}${dn?DNB:''}</b><small>${so.length}/${qs.length}문제${ac!=null?' · 정답률 '+ac+'%':''}${wr?' · 오답 '+wr:''}</small>${bar(a)}</span><span class="chev">›</span></button><div class="um"><div class="umi">`;
  h+=`<button class="mb mball" onclick="socGo('${n}',${u})"><span><b>이 단원 전체 풀기</b></span><span class="mut">${qs.length}문제</span></button>`;
  U.m.forEach((M,k)=>{const b=pct(M.q),w=M.q.filter(isUnf).length;h+=`<button class="mb" onclick="${NEWS(n)?`partPick('${n}',${u},${k})`:`socGo('${n}',${u},${k})`}"><span>${esc(M.n)}${wkBadge(gInfo(M.q))}</span><span class="mut">${M.q.length?M.q.length+'문제 · '+b+'%'+(w?' · 오답 '+w:''):'준비 중'}</span></button>`});
  h+=`</div></div></div>`});
 h+=`<h3 class="sec">한 번에 풀기</h3><div class="lrows" style="--uc:${col}"><button class="lrow" onclick="socGo('${n}')"><span class="lic">${ICN_PN}</span><span class="lrt"><b>전체 풀기</b><small>${D.qs.length}문제 · 진행도 ${qp}%</small>${bar(qp)}</span><span class="chev">›</span></button></div>`;
 if(UNX>=0){const U=CUR[n][UNX],so=bigQ(n,UNX).filter(q=>R[q.id]).length;h+=ctaB(col,so?'이어서 문제 풀기':'문제 풀기 시작',U.n,`socGo('${n}',${UNX})`)}
 SOCCUR=n;show(h);ctaMv()}
function tgl2(u){document.querySelectorAll('.ub2').forEach(e=>{if(e.id=='ub'+u)e.classList.toggle('op');else e.classList.remove('op')});const e=document.getElementById('ub'+u);OPEN=e&&e.classList.contains('op')?u:-1}
let SOCCUR='';
function tgl(u){document.querySelectorAll('.ub').forEach((e,i)=>{if(i==u)e.classList.toggle('op');else e.classList.remove('op')});const e=document.getElementById('ub'+u);OPEN=e&&e.classList.contains('op')?u:-1}

// ================= 학습하기: 공부하기(필기) / 문제 풀기 =================
// 국어(독서와 작문)·영어는 그대로, 나머지 과목은 과목 → [공부하기 | 문제 풀기]
const NEWS=n=>!!CUR[n];const PASSG=n=>!!KIND[n];
// 필기: NOTE[과목]['대단원번호-중단원번호'(0부터)] = {pg:['tb/과목/쪽.jpg',...], b:[블록...]}
// 블록: ['h',제목] ['h2',소제목] ['p',글] ['ul',[항목]] ['key',이름,글] ['def',용어,뜻] ['vs',[제목,글],[제목,글]] ['flow',[단계]] ['tbl',[머리],[[행]]] ['tip',글] ['img',주소,설명]
// 글 안에서: ==형광펜== **빨간펜** __밑줄__
// 문제: CUR[과목][대단원].m[중단원].q 에서 lv:'x' 는 실전 문제, 나머지는 기본 개념 문제
const NOTE={},MOCK={};
const noteOf=(n,u,k)=>(NOTE[n]||{})[u+'-'+k]||null;
const NOTE_DEMO={demo:1,pg:[],b:[
 ['h','1. 정치의 의미'],
 ['vs',['좁은 의미','==국가 기관==이 정치권력을 획득·유지·행사하는 활동'],['넓은 의미','사회 집단 안에서 생기는 ==이해관계의 대립과 갈등==을 조정·해결하는 활동']],
 ['ul',['학급 회의에서 체육대회 종목을 정하는 것 → **넓은 의미**의 정치','국회가 법률을 만드는 것 → **좁은 의미**·넓은 의미 모두 해당']],
 ['tbl',['구분','좁은 의미','넓은 의미'],[['주체','국가 기관','모든 사회 집단'],['장점','국가만의 고유한 활동을 설명하기 쉬움','다원화된 현대 사회의 정치 현상 설명에 적합'],['한계','다양한 집단의 정치 현상을 설명하기 어려움','국가 정치의 특수성을 간과할 수 있음']]],
 ['key','핵심 정리','정치는 결국 __갈등을 평화적으로 해결__하는 과정이에요.'],
 ['flow',['갈등 발생','대화와 타협','합의','사회 통합']],
 ['def','정치권력','국가 기관이 사회 구성원에게 행사하는 강제력'],
 ['tip','좁은 의미와 넓은 의미를 구분하는 문제가 자주 나와요. 활동의 **주체가 국가 기관인지**부터 확인하세요.']]};
const ntIn=t=>{const M=[];const x=ntIn0(String(t||'').replace(/\$([^$]+)\$/g,(_,m)=>{M.push(m);return '\u0001'+(M.length-1)+'\u0001'}));return x.replace(/\u0001(\d+)\u0001/g,(_,k)=>'<span class="mth">'+mxp(esc(M[+k]))+'</span>')};
const ntIn0=t=>esc(t||'').replace(/==(.+?)==/g,'<mark>$1</mark>').replace(/\*\*(.+?)\*\*/g,'<b class="ntr">$1</b>').replace(/__(.+?)__/g,'<u>$1</u>').replace(/(^|\n)(예|연습|참고)\s*[:)]\s*/g,'$1<em class="nex">$2</em>').replace(/ ?(→|⇒) ?/g,'<i class="nar">$1</i>').replace(/(\d) (?=(?:mm|mL|L|g|kg|K|°C|Pa|atm|kJ|J|mol|M|m|s|h|%|원|명|개|배|기압|N)(?![A-Za-z가-힣]))/g,'$1\u00a0').replace(/ (=|≈|∝)(?= )/g,'\u00a0$1').replace(/\n/g,'<br>');
const ntL=l=>{const m=l.match(/^\s*(예|연습|참고)\s*[:)]\s*/);if(m)return `<span class="nl nlx"><em class="nex">${m[1]}</em><span>${ntIn(l.slice(m[0].length))}</span></span>`;const a=l.match(/^\s*([→⇒])\s*/);if(a)return `<span class="nl nla"><i class="nar">${a[1]}</i><span>${ntIn(l.slice(a[0].length))}</span></span>`;return `<span class="nl">${ntIn(l)}</span>`};
const ntP=t=>String(t||'').split('\n').map(ntL).join('');
function ntSnap(){const a=document.querySelector('.nt');if(!a)return;const G=28,cs=getComputedStyle(a),o=a.getBoundingClientRect().top+parseFloat(cs.paddingTop)+parseFloat(cs.borderTopWidth);
 [...a.children].forEach((el,i)=>{el.style.marginTop='';if(!i)return;const mt=parseFloat(getComputedStyle(el).marginTop)||0,r=((el.getBoundingClientRect().top-o)%G+G)%G;if(r>.5&&G-r>.5)el.style.marginTop=(mt+G-r)+'px'})}
window.addEventListener('resize',()=>{clearTimeout(window._nst);window._nst=setTimeout(ntSnap,120)});
function ntBlock(b){const [t,...a]=b;
 if(t=='h')return `<h3 class="nh"><span>${ntIn(a[0])}</span></h3>`;
 if(t=='h2')return `<h4 class="nh2">${ntIn(a[0])}</h4>`;
 if(t=='p')return `<p>${ntP(a[0])}</p>`;
 if(t=='fig')return `<figure class="nfg">${GR(a[0])}${a[1]?`<figcaption>${ntIn(a[1])}</figcaption>`:''}</figure>`;
 if(t=='figs')return `<div class="nfgs">${a[0].map(([o,c])=>`<figure class="nfg">${GR(o)}${c?`<figcaption>${ntIn(c)}</figcaption>`:''}</figure>`).join('')}</div>`;
 if(t=='ul')return `<ul>${a[0].map(x=>`<li>${ntIn(x)}</li>`).join('')}</ul>`;
 if(t=='key')return `<div class="nkey"><span>${ntIn(a[0])}</span><p>${ntP(a[1])}</p></div>`;
 if(t=='def')return `<div class="ndef"><b>${ntIn(a[0])}</b><span>${ntIn(a[1])}</span></div>`;
 if(t=='vs')return `<div class="nvs">${a.map(([h,x])=>`<div><b>${ntIn(h)}</b><p>${ntP(x)}</p></div>`).join('<i>vs</i>')}</div>`;
 if(t=='flow')return `<div class="nfl">${a[0].map(x=>`<span>${ntIn(x)}</span>`).join('<i>→</i>')}</div>`;
 if(t=='tbl')return `<div class="ntw"><table class="ntb"><tr>${a[0].map(x=>`<th>${ntIn(x)}</th>`).join('')}</tr>${a[1].map(r=>`<tr>${r.map((x,i)=>i?`<td>${ntIn(x)}</td>`:`<th>${ntIn(x)}</th>`).join('')}</tr>`).join('')}</table></div>`;
 if(t=='tip')return `<div class="ntip"><span>★ 시험 포인트</span><p>${ntP(a[0])}</p></div>`;
 if(t=='tl')return `<div class="ntline">${a[0].map(([y,h,d])=>`<div class="tli"><div class="tly">${ntIn(y)}</div><div class="tlt"><b>${ntIn(h)}</b>${d?`<small>${ntIn(d)}</small>`:''}</div></div>`).join('')}</div>`;
 if(t=='gal')return `<div class="ngl">${a[0].map(([src,nm,d,pl])=>`<div class="ngc"><img src="${esc(src)}" alt="" loading="lazy"><div><b>${ntIn(nm)}</b>${pl?`<em>${ntIn(pl)}</em>`:''}${d?`<small>${ntIn(d)}</small>`:''}</div></div>`).join('')}</div>`;
 if(t=='img')return `<figure class="nim"><img src="${esc(a[0])}" alt="" loading="lazy">${a[1]?`<figcaption>${ntIn(a[1])}</figcaption>`:''}</figure>`;
 return ''}
const ICN_NOTE='<svg class="lci" viewBox="0 0 48 48" fill="none" stroke="#1f1a15" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M24 13c-5-3.4-11-4-17-2.4v25c6-1.6 12-1 17 2.4 5-3.4 11-4 17-2.4v-25c-6-1.6-12-1-17 2.4z"/><path d="M24 13v25"/></svg>';
const ICN_PEN='<svg class="lci" viewBox="0 0 48 48" fill="none" stroke="#1f1a15" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><g transform="translate(24 24) scale(1.04) translate(-25.3 -29)"><rect x="4" y="16" width="26" height="26" rx="3.5"/><path d="M11.8 26.6l3.8 3.8 6.6-7.2" stroke-linecap="square" stroke-linejoin="miter"/><path d="M11.8 35.2h10.4"/><path d="M34.5 42l4.4-2.9 7.5-13a2.8 2.8 0 0 0-4.8-2.8l-7.5 13z"/><path d="M38.9 39.1 34.1 36.3"/></g></svg>';
const ICN_BOOK='<svg class="tbi" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5C5.5 4.3 8.6 4.3 12 6c3.4-1.7 6.5-1.7 9-.5V19c-2.5-1.2-5.6-1.2-9 .5-3.4-1.7-6.5-1.7-9-.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 6v13.5" stroke="currentColor" stroke-width="1.8"/></svg>';
const sCol=n=>SC[SUBJ.flat().find(x=>x[0]==n)[1]];
function midSegs(n,u,k){const M=CUR[n][u].m[k],g=u+'-'+k;return [[M.q.filter(q=>q.lv!='x'),'기본 개념'],[M.q.filter(q=>q.lv=='x'),'실전 문제']].filter(a=>a[0].length).map(([qs,l])=>({label:M.n+' · '+l,qs,grp:g}))}
function nextNote(n,u,k){let x=[u,k];while((x=nextMid(n,x[0],x[1])))if(noteOf(n,x[0],x[1])||STAFF())return x;return null}
function nextMid(n,u,k){if(k+1<CUR[n][u].m.length)return [u,k+1];if(u+1<CUR[n].length)return [u+1,0];return null}
function lhSum(n,col,mids,qs){const nv=(R._nv&&R._nv[n])||{},has=mids.filter(([u,k])=>noteOf(n,u,k)),ln=R._ln&&R._ln[n],go=ln&&noteOf(n,ln[0],ln[1])?ln:has[0];
 const M=go&&CUR[n][go[0]].m[go[1]];
 // 다음에 할 일 하나만 고르기 (폰 레스토프·피츠: 아래 큰 버튼 하나)
 let cta;
 if(!nDone(n)&&go)cta=[ln?'이어서 공부하기':'처음부터 공부하기',M.n,`noteView('${n}',${go[0]},${go[1]})`];
 else if(!qDone(n)&&qs.length){const l=mkLeft(n);cta=[l.un?'이어서 문제 풀기':'오답 고치기',l.un?`안 푼 문제 ${l.un}개`:`남은 오답 ${l.wr}개`,`socPage('${n}')`]}
 else if(MOCK[n]&&mkOpen(n)&&mkCnt(n)<mkN(n))cta=['모의고사 보기',`${mkCnt(n)+1}회 · ${(MOCK[n].spec||mkSpec(n)).min}분`,`mockGo('${n}')`];
 else if(go)cta=['다시 훑어보기',M.n,`noteView('${n}',${go[0]},${go[1]})`];
 const st=`<div class="sumc sumc2" style="--uc:${col}"><div class="sumst"><div><b>${qs.filter(isUnf).length}개</b><small>남은 오답</small></div><div><b>${pct(qs)}%</b><small>문제 진행도</small></div><div><b>${mkCnt(n)}/${mkN(n)}</b><small>모의고사</small></div></div></div>`;
 const bt=cta?`<div class="ctab" style="--uc:${col}"><button onclick="${cta[2]}"><span><small>${cta[0]}</small><b>${esc(cta[1])}</b></span><span class="chev">›</span></button></div><div class="ctasp"></div>`:'';
 return [st,bt]}
// ===== 과목 홈 · 공부하기 · 문제 풀기 (진도 링 + 구역별 목록) =====
const ICN_WR='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h11l3 3v13H5z"/><path d="M9 10l6 6M15 10l-6 6"/></svg>';
const ICN_ST='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M12 3.5l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.8l-5.2 2.7 1-5.8-4.2-4.1 5.8-.8z"/></svg>';
const ICN_BK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 5.5C5.5 4.3 8.6 4.3 12 6c3.4-1.7 6.5-1.7 9-.5V19c-2.5-1.2-5.6-1.2-9 .5-3.4-1.7-6.5-1.7-9-.5z"/><path d="M12 6v13.5"/></svg>';
const ICN_PN='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="13" height="15" rx="2"/><path d="M6.5 11l2 2 3.5-4"/><path d="M14 19l6.5-11a1.4 1.4 0 0 0-2.4-1.4L11.6 17.6"/></svg>';
const ICN_TM='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9.5 2.5h5"/></svg>';
const ICN_LK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>';
const ctaB=(col,lab,t,on)=>`<div class="ctab" style="--uc:${col}"><button onclick="${on}"><span><small>${lab}</small><b>${esc(t)}</b></span><span class="chev">›</span></button></div><div class="ctasp"></div>`;
const ctaMv=()=>{const c=A.querySelector('.ctab');if(c)document.body.appendChild(c)};
function lhData(n){const mids=[].concat(...CUR[n].map((U,u)=>U.m.map((M,k)=>[u,k]))),has=mids.filter(([u,k])=>noteOf(n,u,k)),nv=(R._nv&&R._nv[n])||{},seen=has.filter(([u,k])=>nv[u+'-'+k]).length,qs=socQ(n),sol=qs.filter(q=>R[q.id]),ok=sol.filter(q=>R[q.id].ok).length,uq=qs.filter(isUnf).length,stn=starSegs(n).reduce((a,x)=>a+x.qs.length,0),l=mkLeft(n);
 return {mids,has,nv,seen,nn:has.length,qs,sol:sol.length,acc:sol.length?Math.round(ok/sol.length*100):null,uq,stn,mk:mkCnt(n),mN:mkN(n),op:!!MOCK[n]&&mkOpen(n),hasMk:!!MOCK[n],rt:MOCK[n]?mkRate(n):null,left:l,
  prog:Math.round(((has.length?seen/has.length:0)+(qs.length?sol.length/qs.length:0))/2*100)}}
const ring=(p,col,sz=86,sw=9)=>{const r=(sz-sw)/2,c=2*Math.PI*r;return `<svg class="rng" viewBox="0 0 ${sz} ${sz}" width="${sz}" height="${sz}"><circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="var(--ln)" stroke-width="${sw}"/><circle cx="${sz/2}" cy="${sz/2}" r="${r}" fill="none" stroke="${col}" stroke-width="${sw}" stroke-linecap="round" stroke-dasharray="${c*p/100} ${c}" transform="rotate(-90 ${sz/2} ${sz/2})"/></svg>`};
function lhMockSub(n,D){return !D.hasMk?'준비 중':D.op?`${D.mk}/${D.mN}회 완료${D.rt!=null?' · 평균 '+D.rt+'%':''}`:`문제를 다 풀면 열려요 · ${D.left.un?'안 푼 문제 '+D.left.un+'개':'남은 오답 '+D.left.wr+'개'}`}
function learnHome(n){
 const col=sCol(n),nm=n.split('|').join(' '),D=lhData(n),[,lbt]=lhSum(n,col,D.mids,D.qs);
 let h=`<div class="shd"><h2 style="--hlc:${col}">${nm}</h2>${COVER[n]?`<img class="cvs" src="${COVER[n]}" alt="">`:''}</div>`;
 const bar=p=>`<div class="lbar"><i style="width:${p}%"></i></div>`;
 const row=(ic,t,sub,on,right,p,cls='')=>`<button class="lrow${cls}" onclick="${on}"><span class="lic">${ic}</span><span class="lrt"><b>${t}</b><small>${sub}</small>${p!=null?bar(p):''}</span>${right||''}<span class="chev">›</span></button>`;
 h+=`<div class="lh1" style="--uc:${col}"><div class="lh1r">${ring(D.prog,col)}<div class="lh1p"><b>${D.prog}<small>%</small></b><span>학습 진도</span></div></div><div class="lh1s"><div><small>필기</small><b>${D.seen}<i>/${D.nn}</i></b></div><div><small>푼 문제</small><b>${D.sol}<i>/${D.qs.length}</i></b></div><div><small>정답률</small><b>${D.acc==null?'-':D.acc+'<i>%</i>'}</b></div></div></div>`;
 // 모의고사: 열리면 학습 진도 바로 아래(제목 없이), 잠겨 있으면 맨 아래
 const mkb=D.hasMk?`<button class="lmock${D.op?'':' off'}" style="--uc:${col}" onclick="${D.op?`mockPage('${n}')`:`mockGo('${n}')`}"><span class="lic">${D.op?ICN_TM:ICN_LK}</span><span class="lrt"><b>${D.op?(D.mk>=D.mN?'모의고사 완료':'모의고사'):'모의고사'}</b><small>${D.op?`${D.mk}/${D.mN}회 완료`:lhMockSub(n,D)}</small>${D.op?`<span class="lmkd">${Array.from({length:D.mN},(_,r)=>`<i class="${MOCK[n][r]&&mkDone(n,r)?'on':''}"></i>`).join('')}</span>`:''}</span>${D.op&&D.rt!=null?`<span class="lmkr"><b>${D.rt}<small>%</small></b><small>평균</small></span>`:''}<span class="chev">›</span></button>`:'';
 if(D.op)h+=mkb;
 h+=`<h3 class="sec">학습</h3><div class="lrows" style="--uc:${col}">`+row(ICN_BK,'공부하기',`필기 ${D.seen}/${D.nn} 읽음`,`noteList('${n}')`,'',D.nn?Math.round(D.seen/D.nn*100):0)
  +row(ICN_PN,'문제 풀기',`${D.sol}/${D.qs.length}문제${D.acc!=null?' · 정답률 '+D.acc+'%':''}`,`socPage('${n}')`,'',pct(D.qs))+`</div>`;
 h+=`<h3 class="sec">복습</h3><div class="lrows lr2" style="--uc:${col}">`+row(ICN_WR,'오답노트',D.uq?`남은 오답 ${D.uq}문제`:'남은 오답이 없어요',`wrongPage('${n}')`,D.uq?`<span class="wnc">${D.uq}</span>`:'',null,' lrw')
  +row(ICN_ST,'별표 문제',D.stn?`담아 둔 문제 ${D.stn}개`:'헷갈리는 문제에 별표를 눌러요',`starPage('${n}')`,D.stn?`<span class="wnc wst">${D.stn}</span>`:'',null,' lrs')+`</div>`;
 if(!D.op&&mkb)h+=`<h3 class="sec">모의고사</h3>`+mkb;
 h+=lbt;show(h);{const c=A.querySelector('.ctab');if(c)document.body.appendChild(c)}}
function noteList0(n){if(!NEWS(n))return subj(n);const col=sCol(n),nm=n.split('|').join(' ');
 let h=`<div class="shd"><h2 style="--hlc:${col}">공부하기</h2><p class="tag">${esc(nm)}</p></div>`;
 if(PASSG(n)){h+=CUR[n].length?`<p class="tag" style="margin:4px 2px 8px">공부할 지문을 골라 주세요.</p><div class="nlg" style="--uc:${col}">${CUR[n].map((U,u)=>{const o=noteOf(n,u,0),ok=o||STAFF();return `<button class="nlb${o?'':' nlx'}"${ok?` onclick="noteView('${n}',${u},0)"`:' disabled'}><span>${esc(U.n)}</span><span class="mut">${o?'필기 보기':'준비 중'}</span>${ok?'<span class="chev">›</span>':''}</button>`}).join('')}</div>`:`<div class="card mut" style="text-align:center;padding:26px 16px">아직 지문이 준비 중이에요.<br>곧 추가할게요!</div>`;return show(h)}
 CUR[n].forEach((U,u)=>{const dn=uDone(n,u);h+=`<div class="nlg${dn?' dn':''}" style="--uc:${col}"><div class="nlh">${esc(U.n)}${dn?DNB:''}</div>${U.m.map((M,k)=>{const o=noteOf(n,u,k);const ok=o||STAFF();return `<button class="nlb${o?'':' nlx'}"${ok?` onclick="noteView('${n}',${u},${k})"`:' disabled'}><span>${esc(M.n)}</span><span class="mut">${o?'필기 보기':'준비 중'}</span>${ok?'<span class="chev">›</span>':''}</button>`}).join('')}</div>`});
 show(h)}
function noteList(n){if(!NEWS(n))return subj(n);if(PASSG(n))return noteList0(n);const col=sCol(n),nm=n.split('|').join(' '),D=lhData(n),ln=R._ln&&R._ln[n];
 let h=`<div class="shd"><h2 style="--hlc:${col}">공부하기</h2><p class="tag">${esc(nm)}</p></div>`;
 const rp=D.nn?Math.round(D.seen/D.nn*100):0;
 h+=`<div class="lh1" style="--uc:${col}"><div class="lh1r">${ring(rp,col)}<div class="lh1p"><b>${D.seen}<small>/${D.nn}</small></b><span>필기 읽음</span></div></div><div class="lh1s"><div><small>대단원</small><b>${CUR[n].length}<i>개</i></b></div><div><small>남은 필기</small><b>${D.nn-D.seen}<i>개</i></b></div><div><small>완료 단원</small><b>${CUR[n].filter((U,u)=>uDone(n,u)).length}<i>개</i></b></div></div></div>`;
 let i=0;
 CUR[n].forEach((U,u)=>{const ms=U.m.map((M,k)=>[M,k]),sn=ms.filter(([M,k])=>D.nv[u+'-'+k]).length,dn=uDone(n,u);
  h+=`<div class="lsec" style="--uc:${col}"><div class="lsh"><b>${esc(U.n)}</b>${dn?DNB:''}<span>${sn}/${U.m.length} 읽음</span></div></div><div class="lrows" style="--uc:${col}">`;
  ms.forEach(([M,k])=>{i++;const o=noteOf(n,u,k),ok=o||STAFF(),sn1=D.nv[u+'-'+k],cu=ln&&ln[0]==u&&ln[1]==k,qp=pct(M.q),wr=M.q.filter(isUnf).length;
   h+=`<button class="lrow lnr${sn1?' sn':''}${cu?' cu':''}${o?'':' lrl'}"${ok?` onclick="noteView('${n}',${u},${k})"`:' disabled'}><span class="lnum">${u+1}-${k+1}</span><span class="lrt"><b>${esc(M.n.replace(/^\d+(-\d+)?\s*/,''))}</b>${o?'':'<small>준비 중</small>'}</span>${cu?'<span class="lmnow">지금</span>':''}${ok?'<span class="chev">›</span>':''}</button>`});
  h+=`</div>`});
 const go=ln&&noteOf(n,ln[0],ln[1])?ln:D.has[0];
 if(go)h+=ctaB(col,ln?'이어서 공부하기':'처음부터 공부하기',CUR[n][go[0]].m[go[1]].n,`noteView('${n}',${go[0]},${go[1]})`);
 show(h);ctaMv()}
function noteView(n,u,k){u=+u;k=+k;const U=CUR[n]&&CUR[n][u],M=U&&U.m[k];if(!M||!NEWS(n))return subjects();
 if(noteOf(n,u,k)){R._ln=R._ln||{};R._ln[n]=[u,k];save()}
 const col=sCol(n),nm=n.split('|').join(' '),o=noteOf(n,u,k)||(STAFF()?NOTE_DEMO:null);if(!o)return noteList(n);const nx=nextNote(n,u,k),pg=o&&o.pg&&o.pg.length;
 let h=PASSG(n)?`<div class="nth"><h2 style="--hlc:${col}">${esc(U.n)}</h2><p class="tag">${esc(nm)} · 지문</p></div>`:`<div class="nth"><h2 style="--hlc:${col}">${esc(M.n)}</h2><p class="tag">${esc(nm)} · ${esc(U.n)}</p></div>`;
 const czN=o&&!o.demo?(o.b.map(ntBlock).join('').match(/<mark>|<b class="ntr">/g)||[]).length:0;
 h+=`<div class="ntbr">${pg?`<button class="tbb" onclick="tbOpen('${n}',${u},${k})">${ICN_BOOK}<span>교과서 원문 보기</span></button>`:''}${czN?`<button class="tbb czb${NCZ?' on':''}" id="czb" onclick="czTog()">${ICN_CZ}<span>${NCZ?'빈칸 암기 끄기':'빈칸 암기'}</span></button>`:''}</div>`;
 if(o&&o.demo)h+=`<div class="prn">디자인 미리보기예요. 관리자에게만 보이고, 교과서를 받으면 실제 필기로 바뀌어요.</div>`;
 h+=o?`<article class="nt${NCZ&&czN?' cz':''}" style="--nc:${col}" onclick="czTap(event)">${o.b.map(ntBlock).join('')}</article>`:`<div class="card ntx">${ICN_NOTE}<p>이 단원 필기는 준비 중이에요.<br>곧 채워질 예정이에요.</p></div>`;
 h+=PASSG(n)?`<div class="ntf"><button class="b ntq" onclick="socGo('${n}',${u},undefined,{note:1})">이 지문 문제 풀기</button>${nx?`<button class="ntn" onclick="noteView('${n}',${nx[0]},${nx[1]})">다음 지문 공부하기<span>→</span></button>`:''}</div>`:`<div class="ntf"><button class="b ntq" onclick="socGo('${n}',${u},${k},{note:1})">문제 풀기</button>${k==U.m.length-1&&!o.demo?`<button class="ntn" onclick="endUnit('${n}',${u})">${uLab(U,u)} 학습 끝내기<span><i class="cki"></i></span></button>`:nx?`<button class="ntn" onclick="noteView('${n}',${nx[0]},${nx[1]})">다음 단원 학습하기<span>→</span></button>`:''}</div>`;
 show(h,'nt|'+n+'|'+u+'|'+k);ntSnap();requestAnimationFrame(ntSnap);try{document.fonts.ready.then(ntSnap)}catch(e){}document.querySelectorAll('.nt img').forEach(im=>im.addEventListener('load',ntSnap));ntEnd(n,u,k);czBar()}
// ===== 빈칸 암기: 형광펜·빨간 글씨를 가리고 눌러서 확인 =====
let NCZ=false;
const ICN_CZ='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12c2.300-3.900 5.300-5.800 9-5.800s6.700 1.900 9 5.800c-2.300 3.900-5.300 5.800-9 5.800S5.300 15.900 3 12z"/><circle cx="12" cy="12" r="2.700"/><path d="M4.500 4.500l15 15" stroke-width="2.300"/></svg>';
const czEls=()=>[...document.querySelectorAll('.nt mark,.nt .ntr')].filter(e=>!e.parentElement.closest('mark,.ntr'));
function czBar(){const old=document.getElementById('czi');if(old)old.remove();const a=document.querySelector('.nt.cz');if(!a)return;const L=czEls(),d=L.filter(e=>e.classList.contains('rv')).length;
 const w=document.createElement('div');w.id='czi';w.className='czi';w.innerHTML=`<b>${d} / ${L.length}</b><span>확인</span><button onclick="czAll(${d<L.length?1:0})">${d<L.length?'모두 보기':'다시 가리기'}</button>`;document.body.appendChild(w)}
function czTog(){NCZ=!NCZ;const a=document.querySelector('.nt'),b=document.getElementById('czb');if(!a)return;a.classList.toggle('cz',NCZ);a.querySelectorAll('.rv').forEach(e=>e.classList.remove('rv'));
 if(b){b.classList.toggle('on',NCZ);b.querySelector('span').textContent=NCZ?'빈칸 암기 끄기':'빈칸 암기'}czBar();if(NCZ)soonMsg('가려진 곳을 눌러서 확인해 보세요.')}
function czTap(ev){const a=ev.currentTarget;if(!a.classList.contains('cz'))return;let e=ev.target.closest('mark,.ntr');if(!e||!a.contains(e))return;while(e.parentElement.closest('mark,.ntr'))e=e.parentElement.closest('mark,.ntr');
 const on=!e.classList.contains('rv');e.classList.toggle('rv',on);e.querySelectorAll('mark,.ntr').forEach(x=>x.classList.toggle('rv',on));czBar()}
function czAll(on){document.querySelectorAll('.nt.cz mark,.nt.cz .ntr').forEach(e=>e.classList.toggle('rv',!!on));czBar()}
// 필기를 끝까지 내려 봤을 때만 '본 필기'로 셈
function ntEnd(n,u,k){if(!noteOf(n,u,k)||(R._nv&&R._nv[n]&&R._nv[n][u+'-'+k]))return;const f=document.querySelector('.ntf');if(!f||!('IntersectionObserver' in window))return;
 const io=new IntersectionObserver(es=>{if(!es.some(e=>e.isIntersecting))return;io.disconnect();if(!document.body.contains(f))return;R._nv=R._nv||{};R._nv[n]=R._nv[n]||{};R._nv[n][u+'-'+k]=1;save()},{threshold:.6});setTimeout(()=>io.observe(f),400)}
const uLab=(U,u)=>{const r=(U.n||'').split('.')[0].trim();return (/^[ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ]+$/.test(r)?r:(u+1))+'단원'};
const uDone=(n,u)=>{const qs=bigQ(n,u);return !!(R._nd&&R._nd[n+'|'+u])&&qs.length>0&&qs.every(q=>R[q.id])};
const DNB='<span class="dnb"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.5 12.5l4.7 4.7L19.5 6.8" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="miter"/></svg>학습 완료</span>';
function endUnit(n,u){R._nd=R._nd||{};R._nd[n+'|'+u]=1;save();const U=CUR[n][u],dn=uDone(n,u);
 const w=document.createElement('div');w.className='mdw';
 w.innerHTML=`<div class="mdc"><h3>모두 공부하셨네요!</h3><p>${dn?`${esc(uLab(U,u))} 문제도 이미 다 풀었어요.<small class="mdn">한 번 더 풀면 통계에는 반영되지 않아요.</small>`:`바로 복습을 진행해 볼까요?<small class="mdn">${esc(uLab(U,u))} 문제를 풀어요. 다 풀면 &lsquo;학습 완료&rsquo; 표시가 붙어요.</small>`}</p><div class="row" style="margin:0"><button class="b g" data-v="0">나가기</button><button class="b" data-v="1">문제 풀기</button></div></div>`;
 w.onclick=e=>{const v=e.target.dataset&&e.target.dataset.v;if(v===undefined)return;w.remove();if(v==='1')socGo(n,u,undefined,{nl:1});else noteList(n)};document.body.appendChild(w)}
// ---- 모의고사 ----
const ICN_EXAM='<svg class="lci" viewBox="0 0 48 48" fill="none" stroke="#1f1a15" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="24" cy="26.5" r="12.5"/><path d="M24 20v6.5l4.5 2.7M20 9.5h8M24 9.5V14M34.6 16.4l2.4-2.4"/></svg>';
const mkR=(n,r)=>MOCK[n][r].q,mkDone=(n,r)=>mkR(n,r).every(q=>R[q.id]),mkCnt=n=>MOCK[n]?MOCK[n].filter((M,r)=>!M.hd&&mkDone(n,r)).length:0,mkHx=n=>MOCK[n]?MOCK[n].map((M,r)=>M.hd?r:-1).filter(r=>r>=0):[];
const mkAll=n=>MOCK[n]?[].concat(...MOCK[n].map(x=>x.q)):[],mkAns=n=>mkAll(n).filter(q=>R[q.id]);
const qDone=n=>{const qs=socQ(n);return qs.length>0&&qs.every(q=>R[q.id])&&!qs.some(isUnf)};
const MK_OPEN_AT=Date.parse('2026-11-23T00:00:00+09:00'),mkEvent=()=>Date.now()>=MK_OPEN_AT;
function mkOpen(n){return STAFF()||qDone(n)||mkEvent()}
function mkLeft(n){const qs=socQ(n);return {un:qs.filter(q=>!R[q.id]).length,wr:qs.filter(isUnf).length}}
const mkRate=n=>{const a=mkAns(n);return a.length?Math.round(a.filter(q=>R[q.id].ok).length/a.length*100):null};
const mkN=n=>MOCK[n]&&MOCK[n].length?MOCK[n].filter(M=>!M.hd).length:5;
const sDone=n=>!!MOCK[n]&&MOCK[n].length>0&&mkCnt(n)>=mkN(n);
// ---- 모의고사 형식: 문제 스타일은 고2 전국연합학력평가(자료 분석형), 분량은 학교 시험 기준 ----
// 모든 과목 회차당 25문항 내외·50분·100점(3/4/5점 배점)
function mkSpec(n){return {qn:25,min:50,pts:100}}
const MKHS={qn:20,min:80,pts:100};
// 자료(표·그래프·사례·보기)가 복잡한 문항일수록 높은 배점
function mkSc(q){const t=q.q||'',bl=t.split(/\n\s*\n/);let v=q.hd?20:0;if(q.tb)v+=3;if(q.fig)v+=3;
 if(bl.some(x=>!/\?(\s*\(단[^)]*\))?\s*$/.test(x)&&!/^<보기>/.test(x)&&!/^\[(표|그림)\]$/.test(x)))v+=2;if(/<보기>/.test(t))v+=1;
 if(/\(가\)|갑:|갑국|을국|A국|사례/.test(t))v+=1;if(t.length>160)v+=1;return v}
function mkReform(){for(const n in MOCK){const sp=mkSpec(n);if(!MOCK[n].length){delete MOCK[n];continue}
 MOCK[n].forEach(r=>{const qs=r.q,N=qs.length,k=Math.round(N/5),o=qs.map((q,i)=>[q,i]).sort((a,b)=>mkSc(b[0])-mkSc(a[0])||a[1]-b[1]);
  const pt=new Map();o.forEach(([q],i)=>pt.set(q,N==25&&sp.pts==100?(i<k?5:i>=N-k?3:4):Math.floor(sp.pts/N)+(i<sp.pts-Math.floor(sp.pts/N)*N?1:0)));
  r.q=qs.map(q=>Object.assign({},q,{pt:pt.get(q)}))});
 MOCK[n].spec=sp}}
const mkPts=(n,r)=>Math.round(mkR(n,r).reduce((a,q)=>a+(R[q.id]&&R[q.id].ok?(q.pt||0):0),0)*10)/10;
const nDone=n=>{const nv=(R._nv&&R._nv[n])||{},has=[];CUR[n].forEach((U,u)=>U.m.forEach((M,k)=>{if(noteOf(n,u,k))has.push(u+'-'+k)}));return has.length>0&&has.every(x=>nv[x])};
const ICN_MST='<svg class="lci" viewBox="0 0 48 48" fill="none" stroke="#1f1a15" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="30" height="30" rx="3.5"/><path d="M17.5 31.5v-6M24 31.5V17M30.5 31.5v-10"/></svg>';
const ICN_RE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M19.5 4.5v4.2h-4.2"/></svg>';
const mkTot=n=>MOCK[n]?MOCK[n].filter((_,r)=>mkDone(n,r)).length:0;
const mkNudge=n=>{const t=mkTot(n);return t>=3&&+(ls('mkseen:'+n)||0)<t};
function mockGoH(n){const HX=mkHx(n),r=HX.find(i=>!mkDone(n,i));if(r===undefined)return mockPage(n);mockGo(n,r)}
function mockCard(n,col){const has=!!MOCK[n],op=has&&mkOpen(n),c=mkCnt(n),N=mkN(n),HX=mkHx(n),hc=HX.filter(r=>mkDone(n,r)).length,rt=has?mkRate(n):null,wr=has?mkAll(n).filter(q=>R[q.id]&&!R[q.id].ok&&isUnf(q)).length:0,nd=has&&mkNudge(n);
 let h=`<div class="mkw${op?'':' mklk'}" style="--uc:${col}"><button class="lcb mkc${sDone(n)?' cpl':''}" onclick="mockGo('${n}')"${op?'':' tabindex="-1"'}>${ICN_EXAM}<span><b>${c>=N?'모의고사 완료':`모의고사 · ${c+1}회`}</b><span class="mkd">${Array.from({length:N},(_,r)=>`<i class="${has&&MOCK[n][r]&&mkDone(n,r)?'on':''}"></i>`).join('')}</span></span></button>`;
 if(HX.length)h+=`<button class="lcb mkc mkch${hc>=HX.length?' cpl':''}" onclick="mockGoH('${n}')"${op?'':' tabindex="-1"'}>${ICN_EXAM}<span><b>${hc>=HX.length?'고난도 모의고사 완료':`고난도 모의고사 · ${hc+1}회`}</b><span class="mkd">${HX.map(r=>`<i class="${mkDone(n,r)?'on':''}"></i>`).join('')}</span></span></button>`;
 h+=`<button class="mks${nd?' nud':''}" onclick="mockPage('${n}')">${ICN_MST}<span><b>모의고사 통계${nd?'<i class="mkdot">약점 분석 도착</i>':''}</b></span></button>`;
 h+=op?'':`<div class="mkov" onclick="mockGo('${n}')"><span class="mklc">${LOCK.replace('lki','')}</span><span><b>${has?'문제를 다 풀면 열려요':'모의고사 준비 중'}</b>${has?(()=>{const l=mkLeft(n);return `<small>${l.un?`안 푼 문제 ${l.un}개`:''}${l.un&&l.wr?' · ':''}${l.wr?`남은 오답 ${l.wr}개`:''}</small>`})():''}</span></div>`;
 return h+`</div>`}
function mockGo(n,r){if(!MOCK[n]){soonMsg('이 과목 모의고사는 아직 준비 중이에요.');return}if(!mkOpen(n)){const l=mkLeft(n);askBox('아직 잠겨 있어요',`모든 문제를 풀고 오답까지 끝내면 모의고사가 열려요.<small class="mdn">${l.un?`안 푼 문제 ${l.un}개`:''}${l.un&&l.wr?', ':''}${l.wr?`남은 오답 ${l.wr}개`:''}가 남았어요.</small>`,'문제 풀러 가기').then(ok=>{if(ok)socPage(n)});return}
 if(r===undefined){r=MOCK[n].findIndex((M,i)=>!M.hd&&!mkDone(n,i));if(r<0)return mockPage(n)}
 const HD=!!MOCK[n][r].hd,rn=HD?MOCK[n][r].n:(r+1)+'회',nm=n.split('|').join(' '),qs=mkR(n,r),seg=[{label:`모의고사 ${rn}`,qs}],sp=HD?MKHS:(MOCK[n].spec||mkSpec(n)),m={title:nm+' 모의고사',mock:r+1,kind:'모의고사',mp:1,min:sp.min,back:"mockPage('"+n+"')"};
 if(mkDone(n,r)){askBox(`${rn}를 다시 풀까요?`,'다시 푼 결과는 통계에 반영되지 않아요.','다시 풀기').then(ok=>{if(ok)startRun(n,seg,Object.assign(m,{practice:true,t0:Date.now()}))});return}
 askBox(`모의고사 ${rn}`,`${qs.length}문항 · ${sp.min}분 · ${sp.pts}점 만점<small class="mdn">${HD?'학평·수능 4점급 문제 위주로 구성된 어려운 모의고사예요. 연습장이나 노트를 준비하고 풀어 보세요. 문항마다 5점이고, 끝까지 다 푼 뒤에 한 번에 채점돼요. 중간에 나가면 기록되지 않아요.':'문제는 고2 전국연합학력평가 스타일이고, 분량과 시간은 학교 시험 기준이에요. 문항마다 배점이 다르고, 끝까지 다 푼 뒤에 한 번에 채점돼요. 중간에 나가면 기록되지 않아요.'}</small>`,'시작').then(ok=>{if(ok)startRun(n,seg,Object.assign(m,{t0:Date.now()}))})}
function mkWeak(n){const tg={};mkAns(n).forEach(q=>{const t=tg[q.g]=tg[q.g]||{n:0,c:0};t.n++;if(R[q.id].ok)t.c++});return Object.keys(tg).map(k=>({k,...tg[k],r:Math.round(tg[k].c/tg[k].n*100)})).sort((a,b)=>a.r-b.r||b.n-a.n)}
function gMid(n,g){for(let u=0;u<CUR[n].length;u++)for(let k=0;k<CUR[n][u].m.length;k++)if(CUR[n][u].m[k].q.some(q=>q.g==g))return [u,k];return null}
function mockPage(n){if(!MOCK[n]){soonMsg('이 과목 모의고사는 아직 준비 중이에요.');return}if(mkTot(n)>=3)ls('mkseen:'+n,String(mkTot(n)));const col=sCol(n),nm=n.split('|').join(' '),c=mkCnt(n),op=mkOpen(n),rt=mkRate(n),wq=mkAll(n).filter(q=>R[q.id]&&!R[q.id].ok),uq=wq.filter(isUnf);
 let h=`<div class="shd"><h2 style="--hlc:${col}">모의고사</h2></div>`;{const sp=MOCK[n].spec||mkSpec(n);h+=`<p class="tag" style="margin:-4px 2px 10px">학평 스타일 문제 · 회차당 ${sp.qn}문항 · ${sp.min}분 · ${sp.pts}점 만점</p>`}
 {const dn=MOCK[n].map((M,r)=>!M.hd&&mkDone(n,r)?r:-1).filter(r=>r>=0),pts=dn.map(r=>MOCK[n][r].q.some(q=>q.pt)?mkPts(n,r):null).filter(x=>x!=null),best=pts.length?Math.max(...pts):null,N=mkN(n),rp=Math.round(c/N*100);
  h+=`<div class="lh1" style="--uc:${col}"><div class="lh1r">${ring(rp,col)}<div class="lh1p"><b>${c}<small>/${N}</small></b><span>회 완료</span></div></div><div class="lh1s"><div><small>평균 정답률</small><b>${rt==null?'-':rt+'<i>%</i>'}</b></div><div><small>최고 점수</small><b>${best==null?'-':best+'<i>점</i>'}</b></div><div><small>남은 오답</small><b>${uq.length}<i>개</i></b></div></div></div>`}
 const mkRow=(M,r,nx,lab)=>{const d=mkDone(n,r),qs=M.q,cc=qs.filter(q=>R[q.id]&&R[q.id].ok).length,p=Math.round(cc/qs.length*100),pt=qs.some(q=>q.pt)?mkPts(n,r):null,go=d||nx&&op;
  return `<button class="lrow mkrw${d?' dn':nx&&op?' nx':' lk'}" ${go?`onclick="mockGo('${n}',${r})"`:'disabled'}><span class="lic lnu">${lab.replace('회','')}</span><span class="lrt"><b>${lab}${nx&&op?'<span class="unxb">다음</span>':''}</b><small>${d?`${cc}/${qs.length} 정답 · ${p}%`:nx&&op?`${qs.length}문항 · 풀러 가기`:'앞 회차를 먼저 풀어요'}</small>${d?`<div class="lbar"><i style="width:${p}%"></i></div>`:''}</span>${d&&pt!=null?`<span class="lmkr"><b>${pt}<small>점</small></b></span>`:''}${d?`<span class="mkre" title="다시 풀기">${ICN_RE}</span>`:go?'<span class="chev">›</span>':''}</button>`};
 const nxN=MOCK[n].findIndex((M,i)=>!M.hd&&!mkDone(n,i)),HX=mkHx(n),nxH=HX.find(i=>!mkDone(n,i));
 if(!op)h+=`<div class="card mut mkopn">모든 문제를 풀고 오답까지 끝내면 모의고사가 열려요.</div>`;
 h+=`<h3 class="sec">회차</h3><div class="lrows" style="--uc:${col}">`+MOCK[n].map((M,r)=>M.hd?'':mkRow(M,r,r==nxN,(r+1)+'회')).join('')+`</div>`;
 if(HX.length)h+=`<h3 class="sec">고난도 모의고사</h3><p class="tag" style="margin:-4px 2px 10px">학평·수능 4점급 위주 · 회차당 ${MKHS.qn}문항 · ${MKHS.min}분 · ${MKHS.pts}점 만점</p><div class="lrows" style="--uc:color-mix(in srgb,${col} 55%,#d9534a)">`+HX.map(r=>mkRow(MOCK[n][r],r,r===nxH,MOCK[n][r].n.replace('고난도 ',''))).join('')+`</div>`;
 {const st=wq.length?(uq.length?`남은 오답 ${uq.length}문제`:'오답을 모두 고쳤어요'):'아직 틀린 문제가 없어요',go=wq.length;h+=`<h3 class="sec">복습</h3><button class="lrow lrw" style="--uc:${col}"${go?` onclick="mkWrong('${n}')"`:' style="cursor:default"'}><span class="lic">${ICN_WR}</span><span class="lrt"><b>모의고사 오답노트</b><small>${st}</small></span>${uq.length?`<span class="wnc">${uq.length}</span>`:''}${go?'<span class="chev">›</span>':''}</button>`}
 const wk=mkWeak(n);
 if(wk.length){h+=`<h3 class="sec">유형별 정답률</h3><div class="card">`+wk.slice(0,6).map(t=>`<div class="arw"><div class="al"><span>${esc(t.k)}${t.r<70?'<span class="wkb">취약</span>':''}</span><b>${t.c}/${t.n}</b></div><div class="bar"><i data-w="${t.r}" style="width:0;background:${t.r<70?'#d98b80':col}"></i></div></div>`).join('')+`</div>`}
 h+=`<h3 class="sec">시험 직전에 할 일</h3><div class="card mkt">`+mkTodo(n,wk,uq.length)+`</div>`;
 if(op&&nxN>=0)h+=ctaB(col,c?'이어서 모의고사':'모의고사 시작',`${nxN+1}회 · ${(MOCK[n].spec||mkSpec(n)).qn}문항 · ${(MOCK[n].spec||mkSpec(n)).min}분`,`mockGo('${n}',${nxN})`);
 show(h);animBars();ctaMv()}
function mkTodo(n,wk,un){const L=[];if(!mkCnt(n))return '<p class="mut" style="margin:0">모의고사를 한 회 이상 풀면 나에게 맞는 체크리스트가 만들어져요.</p>';
 if(un)L.push([`모의고사 오답 ${un}문제 다시 풀기`,'틀린 문제는 시험에서 또 틀리기 쉬워요. 해설까지 읽으며 고쳐요.',`mkWrong('${n}')`]);
 wk.filter(t=>t.r<70).slice(0,3).forEach(t=>{const m=gMid(n,t.k),M=m&&CUR[n][m[0]].m[m[1]];L.push([`‘${t.k}’ 다시 보기`,(TIPS[t.k]||'')+(M?` (${M.n})`:''),m?`noteView('${n}',${m[0]},${m[1]})`:''])});
 if(mkCnt(n)<mkN(n))L.push([`남은 모의고사 ${mkN(n)-mkCnt(n)}회 풀기`,'시간을 재고 실제 시험처럼 끝까지 풀어 보세요.',`mockGo('${n}')`]);
 L.push(['필기의 ‘시험 포인트’ 훑어보기','각 중단원 필기 맨 아래 빨간 상자만 빠르게 다시 읽어요.',`noteList('${n}')`]);
 if(!wk.some(t=>t.r<70)&&!un)L.unshift(['지금처럼만 유지하기','모든 유형 정답률이 70% 이상이에요. 컨디션 관리가 가장 중요해요!','']);
 return L.map(([t,d,f],i)=>`<${f?`button onclick="${f}"`:'div'} class="mkti"><span class="mkn">${i+1}</span><span><b>${esc(t)}</b><small>${esc(d)}</small></span>${f?'<span class="chev">›</span>':''}</${f?'button':'div'}>`).join('')}
function mkWrong(n){startWrong(n,[{label:'모의고사 오답',qs:mkAll(n).filter(q=>R[q.id]&&!R[q.id].ok)}],{mp:1,back:"mockPage('"+n+"')",title:n.split('|').join(' ')+' 모의고사 오답'})}
const WARN='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 21h20L12 3z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M12 10v5M12 17.6v.4" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>';
function tbOpen(n,u,k){const o=noteOf(n,u,k);if(!o||!o.pg||!o.pg.length)return soonMsg('교과서 원문은 아직 준비 중이에요.');
 const w=document.createElement('div');w.className='tbv';w.oncontextmenu=e=>{e.preventDefault()};
 w.innerHTML=`<div class="tbh"><b>교과서 원문</b><span class="tbc">${o.pg.length}쪽</span><button class="tbz" onclick="const v=this.closest('.tbv');v.classList.toggle('zm');this.textContent=v.classList.contains('zm')?'원래대로':'크게 보기'">크게 보기</button><button class="tbx" aria-label="닫기" onclick="this.closest('.tbv').remove()">✕</button></div>
 <div class="tbw" role="note">${WARN}<p><b>학습용으로만 보여 드리는 교과서 원문이에요.</b> 이 화면을 캡처하거나 복제해서 무단으로 배포하면 저작권법에 따라 처벌받을 수 있어요.</p></div>
 <div class="tbs">${o.pg.map((x,i)=>`<figure><img src="${esc(x)}" alt="교과서 원문 ${i+1}쪽" loading="lazy" draggable="false"></figure>`).join('')}</div>`;document.body.appendChild(w)}

// ---- 오답노트 · 취약 유형 ----
const WEAK=0.4;
const isUnf=q=>R[q.id]&&!R[q.id].ok&&!(R._fx&&R._fx[q.id]);
function gInfo(qs){let a=0,w=0,u=0;qs.forEach(q=>{const x=R[q.id];if(x){a++;if(!x.ok){w++;if(isUnf(q))u++}}});return {a,w,u,weak:a>0&&w/a>=WEAK,fixed:w>0&&u==0}}
const wkBadge=g=>(g.weak?'<span class="wkb">취약</span>':'')+(g.weak&&g.fixed?'<span class="okb">오답 완료</span>':'');
function allSegs(n,u,k){const segs=[];CUR[n].forEach((U,ui)=>{if(u!==undefined&&ui!==u)return;U.m.forEach((M,ki)=>{if(k!==undefined&&ki<k)return;if(M.q.length)segs.push({label:(u===undefined||CUR[n].length>1&&KIND[n]?U.n+' · ':'')+M.n,qs:M.q})})});return segs}
// ===== 별표 문제: 헷갈리는 문제를 모아 두고 다시 풀기 =====
const ICN_STAR='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.600l2.500 5.300 5.700.7-4.200 4 1.100 5.700L12 16.500l-5.100 2.800 1.100-5.700-4.200-4 5.700-.7z" stroke="currentColor" stroke-width="1.900" stroke-linejoin="round"/></svg>';
const isStar=id=>!!(R._star&&R._star[id]);
const starBtn=id=>`<button class="stb${isStar(id)?' on':''}" aria-label="별표" aria-pressed="${isStar(id)}" onclick="starTog('${id}',this)">${ICN_STAR}</button>`;
function starTog(id,el){R._star=R._star||{};const on=!R._star[id];if(on)R._star[id]=1;else delete R._star[id];save();if(el){el.classList.toggle('on',on);el.setAttribute('aria-pressed',on)}soonMsg(on?'별표 문제에 담았어요.':'별표를 뺐어요.')}
function starSegs(n,u,k){const segs=[];CUR[n].forEach((U,ui)=>U.m.forEach((M,ki)=>{if(u!==undefined&&(ui!==u||ki!==k))return;const qs=M.q.filter(q=>isStar(q.id));if(qs.length)segs.push({label:(KIND[n]?U.n+' · ':'')+M.n,qs})}));
 if(u===undefined&&MOCK[n]){const qs=mkAll(n).filter(q=>isStar(q.id));if(qs.length)segs.push({label:'모의고사',qs})}return segs}
function starGo(n,u,k){const segs=starSegs(n,u,k);if(!segs.length){soonMsg('별표한 문제가 없어요.');return}startRun(n,segs,{title:n.split('|').join(' ')+' 별표 문제',practice:true,star:1})}
function starPage(n){const nm=n.split('|').join(' '),c=SUBJ.flat().find(x=>x[0]==n)[1],col=SC[c],segs=starSegs(n),tot=segs.reduce((a,x)=>a+x.qs.length,0);
 let h=`<div class="shd"><h2 style="--hlc:#f9df99">별표 문제</h2><p class="tag">${esc(nm)}</p></div>`;
 h+=`<div class="card stg"><span class="sti">${ICN_STAR}</span><span>문제를 풀 때 오른쪽 위 <b>별</b>을 누르면 여기에 모여요. 맞혔지만 헷갈렸던 문제를 담아 두세요.</span></div>`;
 if(!tot)h+=`<div class="card mut" style="text-align:center;padding:24px">아직 별표한 문제가 없어요.</div>`;
 CUR[n].forEach((U,u)=>U.m.forEach((M,k)=>{const qs=M.q.filter(q=>isStar(q.id));if(!qs.length)return;
  h+=`<div class="ub" style="--uc:${col}"><div class="uh" onclick="starGo('${n}',${u},${k})"><div class="ut"><b>${esc((KIND[n]?U.n+' · ':'')+M.n)}</b><div class="al"><span>별표</span><b>${qs.length}문제</b></div></div><span class="chev">›</span></div></div>`}));
 {const mq=MOCK[n]?mkAll(n).filter(q=>isStar(q.id)):[];if(mq.length)h+=`<div class="ub" style="--uc:${col}"><div class="uh" onclick="startRun('${n}',[{label:'모의고사',qs:mkAll('${n}').filter(q=>isStar(q.id))}],{title:'${nm} 별표 문제',practice:true,star:1})"><div class="ut"><b>모의고사</b><div class="al"><span>별표</span><b>${mq.length}문제</b></div></div><span class="chev">›</span></div></div>`}
 if(tot)h+=`<div class="row" style="margin-top:14px"><button class="b" onclick="starGo('${n}')">별표 전체 풀기 (${tot}문제)</button></div>`;
 show(h)}
function startWrong(n,segs,extra){const ws=segs.map(x=>({label:x.label,qs:x.qs.filter(isUnf)})).filter(x=>x.qs.length);if(!ws.length){soonMsg('고칠 오답이 없어요.');return}
 startRun(n,ws,Object.assign({title:n.split('|').join(' ')+' 오답노트',mode:'wrong',practice:true},extra||{}))}
function RSP(){const it=[['nt','알림 정보 초기화','모든 사람의 메시지함 속 알림'],['fb','피드백 정보 초기화','받은 피드백과 답장 기록'],['del','개인별 계정 삭제','계정을 골라서 삭제']];
 return `<div class="rsm" id="rsp" role="menu" aria-hidden="true">${it.map(([k,t,d],i)=>`${k=='del'?'<hr>':''}<button class="rso${k=='del'?' rsd':''}" role="menuitem" onclick="rsDo('${k}')"><span><b>${t}</b></span>${k=='del'?'<i>›</i>':''}</button>`).join('')}</div>`}
function rsToggle(f){const p=document.getElementById('rsp'),b=document.getElementById('rsbt');if(!p)return;const o=f===undefined?!p.classList.contains('on'):f;p.classList.toggle('on',o);p.setAttribute('aria-hidden',!o);if(b){b.setAttribute('aria-expanded',o);b.classList.toggle('on',o)}
 document.removeEventListener('pointerdown',rsOut,true);if(o)setTimeout(()=>document.addEventListener('pointerdown',rsOut,true),0)}
function rsOut(e){if(e.target.closest&&e.target.closest('.rsw'))return;rsToggle(false)}
async function rsDo(k){if(!OWNER)return;rsToggle(false);
 if(k=='me')return myReset();
 if(k=='all')return myFill();
 if(k=='del')return delPage();
 const [t,m,f]=k=='nt'?['알림 정보를 초기화할까요?','모든 사람의 메시지함에서 <b>보낸 알림</b>이 지워져요. 공지 탭의 글은 그대로예요. 되돌릴 수 없어요.','admin_clear_notices']:['피드백 정보를 초기화할까요?','받은 <b>피드백</b>과 답장 기록이 모두 지워져요. 되돌릴 수 없어요.','admin_clear_feedback'];
 if(!(await askBox(t,m,'초기화')))return;
 try{const r=await DB.rpc(f,{p_key:AK()});if(r.error||r.data<0)throw 0;if(k=='fb'){FB=[];admLoad.ok=false}soonMsg(`${r.data}개를 지웠어요.`);rsToggle(false)}catch(e){soonMsg('초기화하지 못했어요. 서버 설정을 확인해 주세요.')}}
let DLS=new Set();
async function delPage(){if(!OWNER)return;show('<h2>개인별 계정 삭제</h2>'+skMsgs(6));if(!(await admLoad(true)))return show('<h2>개인별 계정 삭제</h2><p>불러오지 못했어요.</p>');DLS=new Set();
 show(`<h2>개인별 계정 삭제</h2><div class="card ntp"><input type="search" id="dlq" placeholder="닉네임 검색" oninput="delList()"><div class="dlt"><span id="dln">0명 선택</span><button onclick="delAll()" id="dla">보이는 계정 모두 선택</button></div><div class="dll" id="dll"></div></div><div class="row dlr"><button class="b g" onclick="goBack()">취소</button><button class="b dlb" id="dlb" disabled onclick="delGo()">계정을 골라 주세요</button></div>`);delList()}
function delVis(){const q=((document.getElementById('dlq')||{}).value||'').trim();return ADM.filter(r=>r.nick&&r.nick!=ADM_NICK&&r.nick.includes(q)).sort((a,b)=>b.t-a.t)}
function delList(){const L=delVis();
 document.getElementById('dll').innerHTML=L.length?L.map(r=>`<button class="${DLS.has(r.nick)?'on':''}" aria-pressed="${DLS.has(r.nick)}" onclick="delPick(decodeURIComponent('${encodeURIComponent(r.nick)}'))"><i class="dck"></i><b>${esc(r.nick)}</b><small>최근 활동 ${r.t?fd(r.t):'-'}</small></button>`).join(''):'<p class="mut" style="font-size:14px;margin:8px 2px">계정이 없어요.</p>';
 const n=DLS.size,b=document.getElementById('dlb');b.disabled=!n;b.textContent=n?`${n}명 계정 삭제`:'계정을 골라 주세요';document.getElementById('dln').textContent=`${n}명 선택`;
 const a=document.getElementById('dla');const all=L.length&&L.every(r=>DLS.has(r.nick));a.textContent=all?'모두 선택 해제':'보이는 계정 모두 선택';a.disabled=!L.length}
function delPick(n){DLS.has(n)?DLS.delete(n):DLS.add(n);delList()}
function delAll(){const L=delVis(),all=L.every(r=>DLS.has(r.nick));L.forEach(r=>all?DLS.delete(r.nick):DLS.add(r.nick));delList()}
async function delGo(){const L=[...DLS];if(!L.length)return;const nm=L.length==1?`<b>${esc(L[0])}</b> 님의`:`<b>${L.slice(0,3).map(esc).join(', ')}</b>${L.length>3?` 외 ${L.length-3}명`:''}, 모두 ${L.length}명의`;
 if(!(await askBox(`${L.length}명의 계정을 삭제할까요?`,`${nm} 계정, 풀이 기록, 메시지함이 모두 지워져요. 되돌릴 수 없어요.`,'삭제')))return;
 const b=document.getElementById('dlb');if(b){b.disabled=true;b.textContent='삭제하는 중…'}let ok=0,fail=0;
 for(const n of L){try{const r=await DB.rpc('admin_delete_player',{p_key:AK(),p_nick:n});if(r.error||r.data<0)throw 0;ok++;ADM=ADM.filter(x=>x.nick!=n);DLS.delete(n);accForget(n)}catch(e){fail++}}
 soonMsg(fail?(ok?`${ok}명은 삭제했고 ${fail}명은 실패했어요.`:'삭제하지 못했어요. 서버 설정을 확인해 주세요.'):`${ok}명의 계정을 삭제했어요.`);if(document.getElementById('dll'))delList()}
async function myFill(){if(!OWNER)return;if(!(await askBox('내 진행도를 모두 완료할까요?','모든 과목의 <b>필기 읽음, 문제, 모의고사</b>가 전부 맞힌 것으로 처리돼요.<br>공부 시간은 그대로예요. 되돌리려면 「내 계정 전체 초기화」를 쓰세요.','완료 처리')))return;
 let c=0;R._nv=R._nv||{};R._nd=R._nd||{};SUBJ.flat().forEach(([n])=>{if(!CUR[n])return;socQ(n).concat(mkAll(n)).forEach(q=>{R[q.id]={ok:1};c++});R._nv[n]=R._nv[n]||{};CUR[n].forEach((U,u)=>{R._nd[n+'|'+u]=1;U.m.forEach((_,k)=>{R._nv[n][u+'-'+k]=1})})});
 R._fx={};try{sessionStorage.removeItem(KEY+'ss')}catch(e){}save();await sync();soonMsg(`${c}문제를 완료 처리했어요.`);profile()}
async function myReset(){if(!OWNER)return;if(!(await askBox('내 기록을 초기화할까요?','풀이 기록, 오답노트, 공부 시간이 모두 지워집니다.','초기화')))return;
 R={_dv:DV,_t:{},_fx:{}};ls('rec:'+NICK,JSON.stringify(R));try{sessionStorage.removeItem(KEY+'ss')}catch(e){}await sync();SELT=null;soonMsg('초기화했어요. 선택과목을 다시 골라 주세요.');pickSel()}

// ---- 앱 설치 유도 ----
let DP=null;
const isApp=()=>{try{return matchMedia('(display-mode: standalone)').matches||matchMedia('(display-mode: fullscreen)').matches||navigator.standalone===true}catch(e){return false}};
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();DP=e});
window.addEventListener('appinstalled',()=>{DP=null;closeInst();soonMsg('앱이 설치됐어요! 홈 화면의 풍산 학습를 열어 주세요.')});
const UA=navigator.userAgent||'',isIOS=/iPhone|iPad|iPod/i.test(UA)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1),isAnd=/Android/i.test(UA),isKakao=/KAKAOTALK/i.test(UA),isInApp=/KAKAOTALK|Instagram|FBAN|FBAV|NAVER\(|Line\/|everytimeApp|DaumApps/i.test(UA);
const HB_ST='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linejoin="miter" stroke-linecap="square"><path d="M4 20h16M7 16v-5M12 16V6M17 16v-8"/></svg>',HB_FB='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"><path d="M7 4.5h10a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-6l-4 3.2v-3.2h0A2.5 2.5 0 0 1 4.5 14V7A2.5 2.5 0 0 1 7 4.5z"/><path d="M8.5 9h7M8.5 12h4.5" stroke-linecap="round"/></svg>';
const LOCK='<svg class="lki" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a5 5 0 0 0-5 5v3H6.5A1.5 1.5 0 0 0 5 11.5v9A1.5 1.5 0 0 0 6.5 22h11a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5H17V7a5 5 0 0 0-5-5zm-3 8V7a3 3 0 0 1 6 0v3H9z" fill="currentColor"/></svg>';
function closeInst(){const w=document.getElementById('inst');if(w)w.remove()}
function instBox(inner){closeInst();const w=document.createElement('div');w.id='inst';w.className='mdw';w.innerHTML=`<div class="mdc inc">${inner}</div>`;w.onclick=e=>{if(e.target===w)closeInst()};document.body.appendChild(w)}
function instPrompt(force){if(isApp())return;if(!force){try{if(sessionStorage.getItem(KEY+'webok'))return}catch(e){}}
 instBox(`<img class="inic" src="logo-192.png" alt=""><h3>앱으로 다운받으시겠습니까?</h3><p>웹으로만 볼 시 제한사항이 적용될 수 있습니다.</p><button class="b inb" onclick="installApp()">앱으로 다운받기</button><button class="inw" onclick="webOK()">웹으로 볼래요</button>`)}
function webOK(){try{sessionStorage.setItem(KEY+'webok','1')}catch(e){}closeInst()}
async function installApp(){if(isApp())return closeInst();
 if(DP){const d=DP;DP=null;try{d.prompt();const r=await d.userChoice;if(r&&r.outcome==='accepted'){closeInst();return}}catch(e){}return}
 const url=location.origin+location.pathname;
 if(isInApp&&isKakao){location.href='kakaotalk://web/openExternal?url='+encodeURIComponent(url);return}
 if(isInApp&&isAnd){location.href='intent://'+url.replace(/^https?:\/\//,'')+'#Intent;scheme=https;package=com.android.chrome;end';return}
 const steps=isInApp?['오른쪽 위(또는 아래) 메뉴를 눌러요.','<b>다른 브라우저로 열기</b>를 눌러요.','열린 브라우저에서 다시 <b>앱으로 다운받기</b>를 눌러요.']
  :isIOS?['화면 아래(또는 위)의 <b>공유 버튼</b>을 눌러요.','<b>홈 화면에 추가</b>를 눌러요.','오른쪽 위 <b>추가</b>를 누르면 끝이에요.']
  :['주소창 오른쪽의 <b>설치 아이콘</b>이나 메뉴(⋮)를 눌러요.','<b>앱 설치</b> 또는 <b>홈 화면에 추가</b>를 눌러요.','이미 설치했다면 홈 화면의 <b>풍산 학습</b> 앱으로 열어 주세요.'];
 instBox(`<img class="inic" src="logo-192.png" alt=""><h3>${isIOS&&!isInApp?'홈 화면에 추가해 주세요':'이렇게 설치해 주세요'}</h3><ol class="ins">${steps.map(x=>`<li>${x}</li>`).join('')}</ol><button class="b inb" onclick="closeInst()">확인</button>`)}
function lockMsg(){return askBox(`${LOCK} 앱 전용 기능이에요`,'앱으로 다운받으면 전체 통계가 활성화됩니다.','앱으로 다운받기').then(ok=>{if(ok)installApp()})}

function wrongPage(n){const nm=n.split('|').join(' '),c=SUBJ.flat().find(x=>x[0]==n)[1],col=SC[c];
 const all=socQ(n),wr=all.filter(q=>R[q.id]&&!R[q.id].ok),un=wr.filter(isUnf);
 let h=`<div class="shd"><h2 style="--hlc:#f3b8b1">오답노트</h2></div>`;
 h+=`<div class="pg2"><div class="card st2"><span>남은 오답</span><b class="${un.length?'no-t':''}">${un.length}문제</b></div><div class="card st2"><span>고친 오답</span><b class="ok-t">${wr.length-un.length}문제</b></div></div>`;
 if(!wr.length)h+=`<div class="card mut" style="text-align:center;padding:24px">아직 틀린 문제가 없어요.</div>`;
 else if(!un.length)h+=`<div class="card" style="text-align:center;padding:20px">오답을 모두 고쳤어요! 🎉</div>`;
 CUR[n].forEach((U,u)=>{U.m.forEach((M,k)=>{const qs=M.q.filter(isUnf);if(!qs.length)return;
  h+=`<div class="ub" style="--uc:${col}"><div class="uh" onclick="startWrong('${n}',allSegs('${n}',${u}).slice(${k},${k+1}),{wp:1})"><div class="ut"><b>${esc((KIND[n]?U.n+' · ':'')+M.n)}</b><div class="al"><span>남은 오답</span><b class="no-t">${qs.length}문제</b></div></div><span class="chev">›</span></div></div>`})});
 if(un.length)h+=`<div class="row" style="margin-top:14px"><button class="b" onclick="startWrong('${n}',allSegs('${n}'),{wp:1})">오답 전체 풀기 (${un.length}문제)</button></div>`;
 h+=``;show(h)}

function socGo(n,u,k,opt){const segs=[];const nm=n.split('|').join(' ');opt=opt||{};
 if(NEWS(n))CUR[n].forEach((U,ui)=>{if(u!==undefined&&(k===undefined||opt.note?ui!==u:ui<u))return;U.m.forEach((M,ki)=>{if(k!==undefined&&ui==u&&(opt.note?ki!==k:ki<k))return;segs.push(...midSegs(n,ui,ki))})});
 else CUR[n].forEach((U,ui)=>{if(u!==undefined&&ui!==u)return;U.m.forEach((M,ki)=>{if(k!==undefined&&ki<k)return;if(M.q.length)segs.push({label:(u===undefined||CUR[n].length>1&&KIND[n]?U.n+' · ':'')+M.n,qs:M.q})})});
 if(opt.part=='x'&&NEWS(n)&&segs.length>1&&/기본 개념$/.test(segs[0].label))segs.shift();
 if(!segs.length){soonMsg(opt.note?'이 단원 문제는 아직 준비 중이에요.':'아직 문제가 준비 중이에요.');return}
 const xm=opt.note?{note:[n,u,k]}:opt.nl?{nl:1}:{};
 const tsg=k!==undefined?(NEWS(n)?segs.filter(x=>x.grp==segs[0].grp):segs.slice(0,1)):segs,all=[].concat(...tsg.map(x=>x.qs)),done=all.every(q=>R[q.id]);
 const wseg=tsg.filter(x=>{const g=gInfo(x.qs);return g.weak&&g.u>0}),unN=[].concat(...wseg.map(x=>x.qs)).filter(isUnf).length;
 if(unN){askBox('취약한 유형이에요',`틀린 문제가 많아요. 먼저 오답부터 고쳐 보세요.<small class="mdn">오답 ${unN}문제를 다시 풀어요. 다 고치면 &lsquo;오답 완료&rsquo; 표시가 붙어요.</small>`,'오답 풀기').then(ok=>{if(ok)startWrong(n,wseg,xm)});return}
 if(done){askBox('다시 푸시겠습니까?','2회차부터는 통계에 반영되지 않습니다.','다음').then(ok=>{if(ok)startRun(n,segs,Object.assign({title:nm,practice:true},xm))});return}
 let run=segs;if(NEWS(n)){const rest=segs.map(x=>Object.assign({},x,{qs:x.qs.filter(q=>!R[q.id])})).filter(x=>x.qs.length);const tot=a=>a.reduce((t,x)=>t+x.qs.length,0);if(rest.length&&tot(rest)<tot(segs)){run=rest;const sk=tsg.filter(x=>x.qs.every(q=>R[q.id])).map(x=>x.label.split(' · ').pop());setTimeout(()=>soonMsg(sk.length?`${sk.join('·')}은 이미 풀었어요. 이어서 풀게요.`:'이미 푼 문제는 건너뛰고 이어서 풀게요.'),300)}}
 startRun(n,run,Object.assign({title:nm},xm))}

function subj(n){if(!hasC(n)&&!STAFF()&&CUR[n]){soon();return subjects()}if(NEWS(n))return learnHome(n);if(isSoc(n))return socPage(n);return subjects()}
function sd2Strip(TT){let strip='';for(let i=13;i>=0;i--){const d=new Date(Date.now()-i*864e5),k=dkey(d),v=TT[k]||0,a=v>=1?Math.min(1,.25+v/3600):0;strip+=`<div class="sd2" title="${k}"><i style="background:${v>=1?`rgba(91,127,168,${a})`:'var(--bd)'}"></i><small>${d.getDate()}</small></div>`}return `<div class="card"><div class="mut" style="font-size:13px;margin-bottom:6px">최근 2주 공부</div><div class="strip">${strip}</div></div>`}
// 전체 통계: 요약 · 과목별 · 달력
let SVMORE=false;
function allWeak(){const out=[];SUBJ.flat().forEach(([n,c])=>{if(!CUR[n])return;const tg={};CUR[n].forEach(U=>U.m.forEach(M=>M.q.forEach(q=>{const x=R[q.id];if(!x)return;const k=q.g||((CUR[n].length>1?U.n+' · ':'')+M.n);const t=tg[k]=tg[k]||{n:0,c:0};t.n++;if(x.ok)t.c++})));
 Object.keys(tg).forEach(k=>{if(tg[k].c<tg[k].n)out.push({s:n,col:SC[c],k,...tg[k]})})});
 return out.sort((a,b)=>a.c/a.n-b.c/b.n||b.n-a.n).slice(0,6)}
function svRow(n,c,o,ix){const col=SC[c],qs=CUR[n]?socQ(n):[],x=st(qs),a=ach(n,o),un=qs.filter(q=>R[q.id]&&!R[q.id].ok).filter(isUnf).length;
 return `<button class="svt sv1" id="svt${ix}" style="--sc:${col}" onclick="svTog(${ix})" aria-expanded="false"><span class="svn">${esc(n.split('|').join(' '))}</span><span class="svr"><b>${a}%</b><span class="chev">›</span></span><span class="bar"><i style="width:${a}%;background:${col}"></i></span><small class="svq">${!qs.length?'문제 준비 중':x.n?`정답률 ${x.r}% · ${x.n}문제 풀이${un?` · 남은 오답 ${un}`:''}`:'아직 푼 문제가 없어요'}</small></button><div class="svp" id="svp${ix}"><div class="svi">${svBody(n,col)}</div></div>`}
function svMore(b){SVMORE=!SVMORE;const w=document.getElementById('svm');if(w)w.hidden=!SVMORE;b.classList.toggle('on',SVMORE)}
let CALH=0;
function calHTML(dir){if(!CALM){const d=new Date();CALM=[d.getFullYear(),d.getMonth()]}const [y,mo]=CALM,t=R._t||{};
 const first=new Date(y,mo,1).getDay(),n=new Date(y,mo+1,0).getDate(),tk=dkey(),rows=Math.ceil((first+n)/7);
 const avail=CALH||Math.max(320,innerHeight-250),ch=Math.max(52,Math.floor((avail-74)/rows-4));
 let g='';['일','월','화','수','목','금','토'].forEach((w,i)=>g+=`<div class="cw${i==0?' su':i==6?' sa2':''}">${w}</div>`);
 for(let i=0;i<first;i++)g+='<div></div>';
 for(let d=1;d<=n;d++){const k=y+'-'+String(mo+1).padStart(2,'0')+'-'+String(d).padStart(2,'0'),v=t[k]||0;
  g+=`<div class="cd${v>=1?' on':''}${k==tk?' td':''}" style="min-height:${ch}px"><b>${d}</b>${v>=1?`<small>${fmtT(v,1)}</small>`:''}</div>`}
 return `<div class="cal card kcal"><div class="ch"><button class="lk" aria-label="이전 달" onclick="calSlide(-1)">‹</button><b>${y}년 ${mo+1}월</b><button class="lk" aria-label="다음 달" onclick="calSlide(1)">›</button></div><div class="cgw"><div class="cg${dir>0?' pgn':dir<0?' pgp':''}" id="cg">${g}</div></div></div>`}
// 전체 통계 요약: 기말 진도 · 이번 주 · 요일 패턴 · 나의 기록
const dAdd=(k,n)=>{const [y,m,d]=k.split('-').map(Number);return dkey(new Date(y,m-1,d+n))};
const dDiff=(a,b)=>{const u=k=>{const [y,m,d]=k.split('-').map(Number);return Date.UTC(y,m-1,d)/864e5};return u(b)-u(a)};
const WDN=['일','월','화','수','목','금','토'];
function dltH(a,b,f){const d=a-b;if(!b&&!a)return '';if(Math.abs(d)<(f?60:1))return '<em class="dlt">지난주와 같아요</em>';return `<em class="dlt ${d>0?'up':'dn'}">${d>0?'▲':'▼'} ${f?f(Math.abs(d)):Math.abs(d)}</em> <small>지난주보다</small>`}
function examHTML(){const td=dkey();if(td>DD_END)return '';const SEL=Array.isArray(R._sel)?R._sel:[];let tot=0,dn=0;
 SUBJ.flat().forEach(([n])=>{if(!CUR[n]||!(COMMON.includes(n)||SEL.includes(n)))return;const qs=socQ(n);tot+=qs.length;dn+=qs.filter(q=>R[q.id]).length});
 if(!tot)return '';const left=tot-dn,days=dDiff(td,DD_EX),pc=Math.round(dn/tot*100);
 const g=left<=0?'내 과목 문제를 <b>모두 풀었어요!</b> 오답노트로 마무리해요.':days<=0?`오늘 시험이에요. 남은 <b>${left}문제</b>는 약점 위주로 봐요.`:`남은 <b>${left}문제</b> · 하루 <b>${Math.ceil(left/days)}문제</b>씩 풀면 시험 전에 끝나요.`;
 return `<div class="card xcd"><div class="xh"><span>${DD_NAME}까지 · 내 과목 진도</span><b>${days>0?'D-'+days:'D-DAY'}</b></div><div class="xp">${pc}%<small>${dn} / ${tot}문제</small></div><div class="xb"><i style="width:${pc}%"></i></div><div class="xg">${g}</div></div>`}
function weekHTML(){const t=R._t||{},q=R._lbq||{},td=dkey(),wd=(new Date().getDay()+6)%7,mon=dAdd(td,-wd),pm=dAdd(mon,-7);
 let tw=0,lw=0,tq=0,lq=0,dd=0;for(let i=0;i<=wd;i++){const a=dAdd(mon,i),b=dAdd(pm,i);tw+=t[a]||0;lw+=t[b]||0;tq+=q[a]||0;lq+=q[b]||0;if(dayOK(a))dd++}
 const cur=streakN(),best=bestRun();
 return `<h3 class="sec">이번 주</h3><div class="wk4"><div class="card"><span>공부 시간</span><b>${fmtT(tw)}</b><small>${dltH(tw,lw,fmtT)}</small></div><div class="card"><span>푼 문제</span><b>${tq}문제</b><small>${dltH(tq,lq,x=>x+'문제')}</small></div><div class="card"><span>공부한 날</span><b>${dd} / ${wd+1}일</b><small>월요일부터 오늘까지</small></div><div class="card"><span>연속 학습</span><b>🔥 ${cur}일</b><small>최고 기록 ${best}일</small></div></div>`}
function bestRun(){const ks=Object.keys(Object.assign({},R._t||{},R._lbq||{})).filter(dayOK).sort();let b=0,c=0,pv=null;ks.forEach(k=>{c=pv&&dDiff(pv,k)==1?c+1:1;b=Math.max(b,c);pv=k});return b}
function wdayHTML(){const t=R._t||{},td=dkey(),sum=[0,0,0,0,0,0,0];let any=0;
 for(let i=1;i<=28;i++){const k=dAdd(td,-i),[y,m,d]=k.split('-').map(Number),w=new Date(y,m-1,d).getDay();sum[w]+=t[k]||0;if(t[k])any=1}
 if(!any)return '';const av=sum.map(x=>x/4),mx=Math.max(...av,1),top=av.indexOf(Math.max(...av)),ord=[1,2,3,4,5,6,0];
 const we=(av[0]+av[6])/2,wk=(av[1]+av[2]+av[3]+av[4]+av[5])/5;
 return `<h3 class="sec">요일별 공부 패턴</h3><div class="card"><div class="mut" style="font-size:13px">최근 4주 평균 · <b style="color:var(--tx)">${WDN[top]}요일</b>에 가장 많이 공부해요${we<wk*.5?' · 주말엔 쉬는 편이에요':''}</div><div class="wdc">${ord.map(w=>`<div class="${w==top?'top':''}"><em>${av[w]>=60?Math.round(av[w]/60)+'분':''}</em><i style="height:${Math.max(3,Math.round(av[w]/mx*100))}%"></i><small>${WDN[w]}</small></div>`).join('')}</div></div>`}
function recHTML(){const t=R._t||{},q=R._lbq||{};const bt=Object.keys(t).sort((a,b)=>t[b]-t[a])[0],bq=Object.keys(q).sort((a,b)=>q[b]-q[a])[0];
 const md=k=>{const [,m,d]=k.split('-').map(Number);return m+'월 '+d+'일'};
 return `<h3 class="sec">나의 기록</h3><div class="card rcd"><div><i>🔥</i><b>${bestRun()}일</b><small>최장 연속 학습</small></div><div><i>⏱️</i><b>${bt&&t[bt]>=60?fmtT(t[bt]):'-'}</b><small>${bt&&t[bt]>=60?md(bt)+' 최고 공부':'하루 최고 공부'}</small></div><div><i>✏️</i><b>${bq&&q[bq]?q[bq]+'문제':'-'}</b><small>${bq&&q[bq]?md(bq)+' 최다 풀이':'하루 최다 풀이'}</small></div></div>`}
// ===== 처음 시작 안내: 새 계정으로 처음 들어오면 한 번, 한 장씩 넘겨 보고 '시작하기'를 누르면 선택과목 고르기로 =====
const TIC=k=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${TBI[k][0]}</svg>`;
const TST=(ic,b,sm)=>`<div class="tst">${ic}<span><b>${b}</b><small>${sm}</small></span></div>`;
const TCAP=t=>`<div class="tcap">${t}</div>`;
// 앱 화면에 쓰는 CSS(#app 안에서만 먹는 규칙)를 안내 화면에서도 그대로 쓰도록 복사해 둠
function tourCss(){if(tourCss.d)return;tourCss.d=1;try{[...document.styleSheets].forEach(sh=>{if(sh.href)return;const rs=[...sh.cssRules].filter(r=>r.cssText.includes('#app ')&&!/#app h[1-6]/.test(r.cssText));let i=0;rs.forEach(r=>{try{sh.insertRule(r.cssText.replace(/#app /g,'.tour '),i++)}catch(e){}})})}catch(e){}}
function tourGoal(){const R0=R,k=dkey();R=Object.assign({},R0,{_goals:{[k]:{q:20,m:60}},_lbq:{[k]:12},_t:{[k]:1500}});try{return goalHTML()}finally{R=R0}}
const TOUR=[
 {t:'이 순서로 공부해요',v:()=>{const c=sCol('정치');return `<div class="lch two" style="--uc:${c}"><button class="lcb">${ICN_NOTE}<span><b>공부하기</b></span><span class="chev">›</span></button><button class="lcb">${ICN_PEN}<span><b>문제 풀기</b></span><span class="chev">›</span></button></div><div class="mkw" style="--uc:${c}"><button class="lcb mkc">${ICN_EXAM}<span><b>모의고사 · 1회</b><span class="mkd"><i></i><i></i><i></i><i></i><i></i></span></span></button></div>`},p:'필기를 읽고, 문제를 풀고, 모의고사로 마무리해요.'},
 {t:'틀린 문제는 오답노트로',v:()=>`<div>${TCAP('틀린 문제가 있으면')}<button class="wnb"><span><b>오답노트</b><small>남은 오답 3문제</small></span><span class="wnc">3</span><span class="chev">›</span></button></div><div class="tar">↓ 다시 풀어서 맞히면</div><button class="wnb"><span><b>오답노트</b><small>오답을 모두 고쳤어요</small></span><span class="chev">›</span></button>`,p:'과목 화면에서 오답노트를 열 수 있어요.'},
 {t:'아래 탭으로 이동해요',v:()=>`<div class="tpill">${TBK.map((k,i)=>`<span class="${i==0?'on':''}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true">${TBI[k][i==0?1:0]}</svg></span>`).join('')}</div><div class="tsl">${[['home','학습','과목을 고르고 공부해요'],['noti','소식','공지·업데이트·메시지'],['lb','리더보드','친구들과 순위를 비교해요'],['st','전체 통계','내 공부 기록 (앱 전용)'],['pf','프로필','닉네임·알림·피드백']].map(([k,a,b])=>TST(TIC(k),a,b)).join('')}</div>`,p:''},
 {t:'목표와 통계, 알림',v:()=>`<div>${TCAP('앱을 켜면 오늘의 목표를 정해요')}${tourGoal()}</div><div>${TCAP('전체 통계에서 내 공부를 확인해요')}<div class="kc" role="tablist">${kChips('st').map((x,i)=>`<button class="${i==0?'on':''}">${x}</button>`).join('')}</div></div><div>${TCAP('공부를 안 한 날엔 저녁에 알림이 와요')}<div class="card" style="margin:0"><div class="pr" style="border:0"><span>공부 알림</span><b>켜짐</b><button class="lk">끄기</button></div></div></div>`,p:''},
 {t:'앱 설치와 비밀번호',v:()=>`<div>${TCAP('홈 화면에 추가해야 통계·알림을 쓸 수 있어요')}<div class="tin"><div class="card"><h4>아이폰 · 사파리</h4><ol><li><i>1</i><span>아래 <b class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 15V4M8 8l4-4 4 4M6 12v7a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7"/></svg></b> 공유 버튼 누르기</span></li><li><i>2</i><span><b>홈 화면에 추가</b> 누르기</span></li></ol></div><div class="card"><h4>안드로이드 · 크롬</h4><ol><li><i>1</i><span>오른쪽 위 <b class="ic dots">⋮</b> 메뉴 누르기</span></li><li><i>2</i><span><b>앱 설치</b> 누르기</span></li></ol></div></div></div><div>${TCAP('닉네임과 비밀번호 4자리로 들어와요')}<div class="card" style="margin:0"><div class="pr" style="border:0"><span>비밀번호</span><b>••••</b><button class="lk">보기</button><button class="lk">변경하기</button></div></div><div class="tcap" style="margin-top:8px">잊으면 기록을 찾을 수 없어요. 꼭 기억해 두세요</div></div>`,p:''},
 {t:'불편하면 피드백으로',v:()=>`<div class="tfb"><div class="ki"><button class="kt kfb">${KTX['피드백'][1]}<span>피드백</span></button></div><div class="tcap" style="text-align:center;margin-top:16px">프로필 오른쪽 위에 있어요</div></div><div class="ntg fbk" role="radiogroup">${FBT.map(t=>`<button role="radio" aria-checked="false" style="--fc:${t[2]};pointer-events:none"><i></i>${t[1]}</button>`).join('')}</div>`,p:'불편한 점이나 바라는 점을 보내면<br>고쳐진 뒤 메시지함으로 답장이 와요.'}];
let TIX=0;
function tourOpen(){if(document.getElementById('tour'))return;tourCss();TIX=0;const w=document.createElement('div');w.id='tour';w.className='mdw tour';
 let x0=null;w.addEventListener('touchstart',e=>{x0=e.touches.length==1?e.touches[0].clientX:null},{passive:true});
 w.addEventListener('touchend',e=>{if(x0==null)return;const dx=e.changedTouches[0].clientX-x0;x0=null;if(Math.abs(dx)>60)tourGo(dx<0?1:-1)},{passive:true});
 w.onclick=e=>{const a=e.target.dataset&&e.target.dataset.a;if(a=='n')tourGo(1);else if(a=='p')tourGo(-1)};
 document.body.appendChild(w);tourDraw(0)}
function tourDraw(dir){const w=document.getElementById('tour');if(!w)return;const T=TOUR[TIX],last=TIX==TOUR.length-1;
 w.innerHTML=`<div class="tdots">${TOUR.map((_,i)=>`<i class="${i==TIX?'on':''}"></i>`).join('')}</div><div class="tbd${dir>0?' r':dir<0?' l':''}"><h2>${T.t}</h2>${T.v()}${T.p?`<p class="tp">${T.p}</p>`:''}</div><div class="trow"><button class="b g" data-a="p" data-v="0"${TIX?'':' style="visibility:hidden"'}>이전</button><button class="b" data-a="n">${last?'시작하기':'다음'}</button></div>`}
function tourGo(d){if(!document.getElementById('tour'))return;const n=TIX+d;if(n<0)return;if(n>=TOUR.length)return tourDone();TIX=n;tourDraw(d)}
function tourDone(){const w=document.getElementById('tour');if(w)w.remove();R._tour=2;save();if(CURR=='sel'||!Array.isArray(R._sel))pickSel();else subjects()}
// 하루 목표: 날짜마다 따로 저장(R._goals). 그날 정하면 잠겨서 바꿀 수 없고, 안 정했으면 접속할 때마다 물어봄
const GQ=[10,20,30,50],GM=[30,60,90,120];let GTMP=null;
const goalToday=()=>{const g=(R._goals||{})[dkey()];return g&&(g.q||g.m)?g:null};
function ringSVG(p){const r=26,c=2*Math.PI*r,v=Math.min(1,p);return `<svg viewBox="0 0 62 62" aria-hidden="true"><circle cx="31" cy="31" r="${r}" fill="none" stroke="var(--bd)" stroke-width="7"/><circle cx="31" cy="31" r="${r}" fill="none" stroke="${p>=1?'var(--ok)':'var(--ink)'}" stroke-width="7" stroke-linecap="round" stroke-dasharray="${(c*v).toFixed(1)} ${c.toFixed(1)}" transform="rotate(-90 31 31)"/><text x="31" y="36" text-anchor="middle" font-size="14" font-weight="800" fill="var(--tx)">${p>=1?'✓':Math.round(v*100)+'%'}</text></svg>`}
function goalHTML(){const g=goalToday(),k=dkey(),tq=(R._lbq||{})[k]||0,tm=Math.floor(((R._t||{})[k]||0)/60);
 if(!g)return `<div class="card"><div class="ghd"><span>오늘의 목표</span></div><div class="mut" style="font-size:14px;margin-bottom:12px">아직 오늘 목표를 안 정했어요. 하루에 한 번만 정할 수 있고, 정하면 오늘은 바꿀 수 없어요.</div><button class="b" onclick="goalAsk()">오늘 목표 정하기</button></div>`;
 const it=[];if(g.q)it.push([tq/g.q,'푼 문제',`${tq} / ${g.q}문제`,tq>=g.q?'달성!':`${g.q-tq}문제 남았어요`]);if(g.m)it.push([tm/g.m,'공부 시간',`${tm} / ${g.m}분`,tm>=g.m?'달성!':`${g.m-tm}분 남았어요`]);
 const all=it.every(x=>x[0]>=1);
 return `<div class="card"><div class="ghd"><span>오늘의 목표${all?' · <b class="ok">모두 달성 🎉</b>':''}</span></div><div class="gl"${it.length==1?' style="grid-template-columns:1fr"':''}>${it.map(([p,a,b,c])=>`<div class="gr">${ringSVG(p)}<div class="gt"><span>${a}</span><b>${b}</b><small>${c}</small></div></div>`).join('')}</div></div>`}
function goalAsk(){if(!NICK||goalToday()||document.querySelector('.mdw'))return;GTMP={q:0,m:0};
 const row=(t,L,u)=>`<span class="gcl">${t=='q'?'하루에 풀 문제':'하루 공부 시간'}</span><div class="gch" data-t="${t}">${[0,...L].map(v=>`<button data-g="${v}" class="${v?'':'on'}">${v?v+u:'안 정함'}</button>`).join('')}</div>`;
 const w=document.createElement('div');w.className='mdw';
 w.innerHTML=`<div class="mdc"><h3>오늘의 목표를 정해 볼까요?</h3>${row('q',GQ,'문제')}${row('m',GM,'분')}<div class="row" style="margin:0"><button class="b g" data-a="x" data-v="0">나중에</button><button class="b" data-a="ok" disabled>정하기</button></div></div>`;
 w.onclick=e=>{const t=e.target;if(t===w||t.dataset.a==='x'){GASK=true;w.remove();return}
  if(t.dataset.a==='ok'){if(!(GTMP.q||GTMP.m)||goalToday())return;const td=dkey(),G=Object.assign({},R._goals||{}),old=dAdd(td,-90);for(const k in G)if(k<old)delete G[k];G[td]={q:GTMP.q,m:GTMP.m};R._goals=G;delete R._goal;save();w.remove();soonMsg('오늘 목표를 정했어요. 힘내요!');if(CURR=='stats')allStats();return}
  const bt=t.closest&&t.closest('.gch button');if(bt){const k=bt.parentNode.dataset.t;GTMP[k]=+bt.dataset.g;bt.parentNode.querySelectorAll('button').forEach(x=>x.classList.toggle('on',x===bt));w.querySelector('[data-a=ok]').disabled=!(GTMP.q||GTMP.m)}};
 document.body.appendChild(w)}
// 앱에 들어올 때(처음 켤 때·다시 돌아올 때) 오늘 목표가 없으면 한 번 물어봄. 문제 푸는 중에는 안 물어봄
let GASK=false;
function goalGate(){if(GASK||document.hidden||!NICK||!isApp()||goalToday())return;
 if(document.querySelector('.mdw,.spl,#sporb,.bsw')||!TBR.includes(CURR))return;goalAsk()}
setInterval(goalGate,2000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden){GASK=false;setTimeout(goalGate,700)}});
// 친구 평균과 비교 (서버: lb_avg)
let AVGC=null,AVGT=0;
function avgHTML(){const t=R._t||{},q=R._lbq||{},td=dkey(),wd=(new Date().getDay()+6)%7,mon=dAdd(td,-wd);let mt=0,mq=0;for(let i=0;i<=wd;i++){const a=dAdd(mon,i);mt+=t[a]||0;mq+=q[a]||0}
 const A=AVGC;let body;
 if(!A)body=`<div class="mut" style="font-size:13px">${DB?'불러오는 중…':'인터넷에 연결되면 보여요.'}</div>`;
 else if(A.n<3)body=`<div class="mut" style="font-size:13px">이번 주 공부한 친구가 3명 이상이면 보여요.</div>`;
 else{const row=(l,v,mx,f,cls)=>`<div class="avr${cls}"><span>${l}</span><div class="ab"><i style="width:${mx?Math.max(2,Math.round(v/mx*100)):0}%"></i></div><b>${f(v)}</b></div>`;
  const xt=Math.max(mt,A.t,1),xq=Math.max(mq,A.q,1),rt=A.t?mt/A.t:0;
  body=`<div class="mut" style="font-size:13px;margin-bottom:8px">이번 주 공부한 친구 ${A.n}명 평균 · ${mt>=A.t?`<b style="color:var(--ok)">평균보다 ${rt>=1.05?rt.toFixed(1)+'배 ':''}많이 했어요</b>`:`<b style="color:var(--no)">평균까지 ${fmtT(A.t-mt)} 남았어요</b>`}</div>`
   +`<div class="avh">공부 시간</div>`+row('나',mt,xt,fmtT,'')+row('평균',A.t,xt,fmtT,' av')
   +`<div class="avh">푼 문제</div>`+row('나',mq,xq,x=>x+'문제','')+row('평균',Math.round(A.q),xq,x=>Math.round(x)+'문제',' av')}
 return `<h3 class="sec">친구들과 비교</h3><div class="card" id="avgc">${body}</div>`}
async function avgLoad(){if(!DB||!NICK||Date.now()-AVGT<60000)return;AVGT=Date.now();const [a,b]=wkR(0);
 try{const {data,error}=await DB.rpc('lb_avg',Object.assign(whoP(),{p_w0:a,p_w1:b}));if(error)throw 0;AVGC=data||{n:0,t:0,q:0}}catch(e){AVGC={n:0,t:0,q:0};AVGT=0}
 const el=document.getElementById('avgc');if(el&&kChips('st')[KCH.st]=='기록'){const w=document.createElement('div');w.innerHTML=avgHTML();el.replaceWith(w.querySelector('#avgc'))}}
// 모의고사 점수 그래프
function mkPct(n,r){const qs=mkR(n,r),pt=qs.some(q=>q.pt);if(pt){const T=qs.reduce((a,q)=>a+(q.pt||0),0);return T?Math.round(mkPts(n,r)/T*100):0}return Math.round(qs.filter(q=>R[q.id]&&R[q.id].ok).length/qs.length*100)}
function mkGraphHTML(){const out=[];SUBJ.flat().forEach(([n,c])=>{if(!MOCK[n])return;const rs=MOCK[n].map((M,r)=>M.hd?null:r).filter(r=>r!=null);const pts=rs.map(r=>mkDone(n,r)?mkPct(n,r):null);if(!pts.some(v=>v!=null))return;
  const W=300,H=74,N=rs.length,x=i=>N>1?12+i*(W-24)/(N-1):W/2,y=v=>20+(100-v)/100*(H-26),dn=pts.map((v,i)=>[v,i]).filter(a=>a[0]!=null),last=dn[dn.length-1][0],first=dn[0][0],d=last-first;
  const path=dn.map(([v,i],j)=>(j?'L':'M')+x(i).toFixed(1)+' '+y(v).toFixed(1)).join(' ');
  out.push(`<div class="mksl"><div class="mh"><b>${esc(n.split('|').join(' '))}</b><span>최근 ${last}점${dn.length>1&&d?` · <em class="dlt ${d>0?'up':'dn'}">${d>0?'▲':'▼'} ${Math.abs(d)}</em>`:''}</span></div><svg viewBox="0 0 ${W} ${H+16}"><line x1="0" x2="${W}" y1="${y(100)}" y2="${y(100)}" stroke="var(--ln)" stroke-dasharray="3 4"/><line x1="0" x2="${W}" y1="${y(50)}" y2="${y(50)}" stroke="var(--ln)" stroke-dasharray="3 4"/><line x1="0" x2="${W}" y1="${y(0)}" y2="${y(0)}" stroke="var(--ln)"/><path d="${path}" fill="none" stroke="var(--ink)" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round"/>${pts.map((v,i)=>`${v!=null?`<circle cx="${x(i)}" cy="${y(v)}" r="4" fill="var(--ink)"/><text x="${x(i)}" y="${y(v)-9}" text-anchor="middle" font-size="10.5" font-weight="700" fill="var(--tx)">${v}</text>`:`<circle cx="${x(i)}" cy="${y(0)}" r="3" fill="none" stroke="var(--bd)"/>`}<text x="${x(i)}" y="${H+12}" text-anchor="middle" font-size="10" fill="var(--mut)">${i+1}회</text>`).join('')}</svg></div>`)});
 if(!out.length)return '';return `<h3 class="sec">모의고사 점수</h3><div class="card mkg2">${out.join('')}</div>`}
function statsHTML(dir){const c=KCH.st,nm=kChips('st')[c];let b='';
 if(nm=='요약'){b+=goalHTML()+examHTML()+weekHTML()}
 else if(nm=='기록'){setTimeout(avgLoad,30);const t=R._t||{},days=Object.keys(t).filter(k=>t[k]>=1),tot=days.reduce((a,k)=>a+t[k],0),td=t[dkey()]||0;
  b+=avgHTML();
  b+=`<h3 class="sec">전체 공부</h3><div class="pg2"><div class="card st2"><span>총 공부 시간</span><b>${fmtT(tot)}</b><small>오늘 ${fmtT(td)}</small></div><div class="card st2"><span>공부한 날</span><b>${days.length}일</b><small>이번 달 ${Object.keys(t).filter(k=>t[k]>=1&&k.slice(0,7)==dkey().slice(0,7)).length}일</small></div></div>`;
  b+=wdayHTML()+recHTML()}
 else if(nm=='성적'){const qs=allQ(),s=st(qs),wk=allWeak();
  b+=`<h3 class="sec">정답률</h3><div class="card"><div class="tag">전체 정답률</div><div class="big" style="color:var(--ink)">${s.r==null?'-':s.r+'%'}</div><div class="mut">${s.n}문제 풀이 · ${s.c}문제 정답</div></div>`+mkGraphHTML();
  b+=`<h3 class="sec">전체 약점 유형</h3><div class="card awk">${!wk.length?`<div class="mut svx">${s.n?'틀린 유형이 없어요.':'문제를 풀면 여기에 보여요.'}</div>`:wk.map(w=>`<div class="svk"><div class="awh"><span class="aws" style="--sc:${w.col}">${esc(w.s.split('|').join(' '))}</span><b class="no-t">${esc(w.k)}</b><span class="mut">${w.c}/${w.n} 정답</span></div>${TIPS[w.k]?`<div class="mut">${MX(esc(TIPS[w.k]))}</div>`:''}</div>`).join('')}</div></div>`}
 else if(nm=='과목별'){const ALL=SUBJ.flat(),SEL=Array.isArray(R._sel)?R._sel:[],my=x=>COMMON.includes(x[0])||SEL.includes(x[0]),M=ALL.filter(my),O=ALL.filter(x=>!my(x));
  b+=`<div class="svg sv1g">`+M.map((x,i)=>svRow(x[0],x[1],x[2],i)).join('')+`</div>`;
  if(O.length){b+=`<button class="sgmore${SVMORE?' on':''}" onclick="svMore(this)"><span>다른 과목 보기</span><small>${O.length}과목</small><span class="chev">›</span></button><div id="svm"${SVMORE?'':' hidden'}><div class="svg">`;
   O.forEach(([n,cc,o],j)=>{const ix=M.length+j,a=ach(n,o),col=SC[cc];
    b+=`<button class="svt" id="svt${ix}" style="--sc:${col}" onclick="svTog(${ix})" aria-expanded="false"><span class="svn">${esc(n.split('|').join(' '))}</span><span class="svr"><b>${a}%</b><span class="chev">›</span></span><span class="bar"><i style="width:${a}%;background:${col}"></i></span></button>`;
    if(j%2==1||j==O.length-1)for(let k=j-(j%2);k<=j;k++)b+=`<div class="svp" id="svp${M.length+k}"><div class="svi">${svBody(O[k][0],SC[O[k][1]])}</div></div>`});
   b+=`</div></div>`}}
 else b+=calHTML(dir);
 return kPage('st',kHead('<h2>전체 통계</h2>',[],'st'),b)}
function allStats(dir){if(!isApp()){setTimeout(webSt,50);return subjects()}show(statsHTML(dir),kKey('st'));const nm=kChips('st')[KCH.st];if(nm=='달력')calBind();if(nm=='기록')avgLoad()}
function calBind(){const el=document.getElementById('cg');if(!el)return;
 {const top=el.getBoundingClientRect().top+scrollY,tb=document.getElementById('tbr'),bot=tb&&tb.offsetParent!==null?innerHeight-tb.getBoundingClientRect().top:20,av=Math.round(innerHeight-top-bot-14);if(Math.abs(av-CALH)>8&&av>200){CALH=av;const rows=Math.ceil(el.querySelectorAll('.cd,.cg>div:not(.cw)').length/7)||5,ch=Math.max(52,Math.floor((CALH-74)/rows-4));el.querySelectorAll('.cd').forEach(d=>d.style.minHeight=ch+'px')}}
 let sx=null,sy=0,dx=0,hz=null,busy=false;const W=()=>el.offsetWidth||300;
 const out=d=>{busy=true;el.style.transition='transform .2s cubic-bezier(.4,0,.8,.6)';el.style.transform=`translateX(${d>0?-100:100}%)`;setTimeout(()=>calGo(d),190)};
 window.calSlide=out;
 el.addEventListener('touchstart',e=>{if(busy)return;sx=e.touches[0].clientX;sy=e.touches[0].clientY;dx=0;hz=null;el.style.transition='none'},{passive:true});
 el.addEventListener('touchmove',e=>{if(sx==null)return;dx=e.touches[0].clientX-sx;const dy=e.touches[0].clientY-sy;if(hz===null&&(Math.abs(dx)>8||Math.abs(dy)>8))hz=Math.abs(dx)>Math.abs(dy);if(hz){e.preventDefault();el.style.transform=`translateX(${dx}px)`}},{passive:false});
 el.addEventListener('touchend',()=>{if(sx==null)return;sx=null;if(!hz)return;if(Math.abs(dx)>Math.min(70,W()*.22))out(dx<0?1:-1);else{el.style.transition='transform .25s cubic-bezier(.22,.8,.3,1)';el.style.transform=''}});
 el.addEventListener('touchcancel',()=>{sx=null;el.style.transition='transform .25s';el.style.transform=''})}
function svWeak(n){const tg={},lab={};CUR[n].forEach(U=>U.m.forEach(M=>M.q.forEach(q=>{const x=R[q.id];if(!x)return;const k=q.g||((CUR[n].length>1?U.n+' · ':'')+M.n);const t=tg[k]=tg[k]||{n:0,c:0};t.n++;if(x.ok)t.c++})));
 return Object.keys(tg).filter(k=>tg[k].c<tg[k].n).sort((a,b)=>tg[a].c/tg[a].n-tg[b].c/tg[b].n).slice(0,3).map(k=>({k,...tg[k]}))}
function svBody(n,col){const qs=CUR[n]?socQ(n):[];if(!qs.length)return `<div class="mut svx">아직 문제가 준비되지 않았어요.</div>`;
 const x=st(qs),wr=qs.filter(q=>R[q.id]&&!R[q.id].ok),un=wr.filter(isUnf),wk=svWeak(n);
 let h=`<div class="svs"><span>정답률</span><b style="color:${col}">${x.r==null?'-':x.r+'%'}</b><small>${x.n?`${x.n}문제 풀이 · ${x.c}문제 정답`:'아직 푼 문제가 없어요'}</small></div>`;
 h+=`<button class="svw" onclick="wrongPage('${n}')"><span><b>오답노트</b><small>${wr.length?(un.length?`남은 오답 ${un.length}문제`:'오답을 모두 고쳤어요'):'아직 틀린 문제가 없어요'}</small></span>${un.length?`<span class="wnc">${un.length}</span>`:''}<span class="chev">›</span></button>`;
 if(NEWS(n)){const mc=mkCnt(n),mr=MOCK[n]?mkRate(n):null;h+=`<div class="svm" style="--uc:${col}"><span>모의고사</span><b>${mc}/${mkN(n)}회</b><small>${!MOCK[n]?'준비 중':mr==null?(mkOpen(n)?'아직 안 풀었어요':'아직 잠겨 있어요'):`정답률 ${mr}%`}</small></div>`}
 h+=`<div class="svh">보완할 영역</div>`;
 h+=!x.n?`<div class="mut svx">문제를 풀면 여기에 보여요.</div>`:!wk.length?`<div class="mut svx">틀린 영역이 없어요.</div>`:wk.map(w=>`<div class="svk"><div><b class="no-t">${esc(w.k)}</b> <span class="mut">${w.c}/${w.n} 정답</span></div>${TIPS[w.k]?`<div class="mut">${MX(esc(TIPS[w.k]))}</div>`:''}</div>`).join('');
 return h}
function svTog(ix){document.querySelectorAll('.svt').forEach(b=>{const on=b.id=='svt'+ix&&b.getAttribute('aria-expanded')!='true';b.setAttribute('aria-expanded',on);b.classList.toggle('on',on);document.getElementById('svp'+b.id.slice(3)).classList.toggle('on',on)})}

function soon(){const o=document.getElementById('toast');if(o)o.remove();const t=document.createElement('div');t.id='toast';t.className='toast tl';t.innerHTML=LOCK+'<span>아직 개설 전입니다.</span>';document.body.appendChild(t);setTimeout(()=>t.remove(),2250)}
// ---- 객관식 보기 섞기: 사용자·문제 묶음마다 다르게, 정답 위치가 한쪽에 몰리지 않게 ----
function hstr(t){let h=1779033703^t.length;for(let i=0;i<t.length;i++){h=Math.imul(h^t.charCodeAt(i),3432918353);h=h<<13|h>>>19}return ()=>{h=Math.imul(h^h>>>16,2246822507);h=Math.imul(h^h>>>13,3266489909);return ((h^=h>>>16)>>>0)/4294967296}}
function mkPerm(qs){const out={},mc=qs.filter(q=>q.t=='mc');if(!mc.length)return out;const rnd=hstr((NICK||'?')+'|'+mc.map(q=>q.id).join(','));
 const sh=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(rnd()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};const bags={};let prev=-1;
 mc.forEach(q=>{const n=q.o.length;if(q.ns||q.o.every(x=>/^[ㄱ-ㅎ](, [ㄱ-ㅎ])*$/.test(x))){out[q.id]=[...Array(n).keys()];return}let b=bags[n];if(!b||!b.length)b=bags[n]=sh([...Array(n).keys()]);let k=0;if(b[0]===prev&&b.length>1)k=1+Math.floor(rnd()*(b.length-1));const pos=b.splice(k,1)[0];prev=pos;
  const rest=sh([...Array(n).keys()].filter(x=>x!==q.a));rest.splice(pos,0,q.a);out[q.id]=rest});return out}
const CIRC='①②③④⑤⑥⑦⑧';
const pmOf=q=>(SS&&SS.perm&&SS.perm[q.id])||q.o.map((_,i)=>i);
const posOf=(q,idx)=>pmOf(q).indexOf(idx);
const exT=q=>MX(esc(q.e||'')).replace(/⟦(\d)⟧/g,(_,d)=>CIRC[q.t=='mc'?posOf(q,+d-1):+d-1]||d);

function startRun(n,segs,meta){OPEN=-1;SS={pid:'run',cat:'all',meta:Object.assign({subj:n,back:"socPage('"+n+"')",backLabel:kd(n)[1]+' 선택으로',kind:kd(n)[1]},meta||{}),segs,si:0,qs:segs[0].qs,i:0,resp:{},graded:[]};SS.base={};Object.keys(R).forEach(k=>{if(k[0]!='_')SS.base[k]=1});SS.perm={};segs.forEach(x=>Object.assign(SS.perm,mkPerm(x.qs)));draft=null;QS0=Date.now();SS.sg0=Date.now();quiz()}
const ttl=()=>SS.meta?SS.meta.title:P(SS.pid).name;
function goBack(){if(HI>1){LEAVE=1;history.back();return}if(SS&&SS.meta&&SS.meta.mock&&SS.meta.subj)return subj(SS.meta.subj);if(SS&&SS.meta&&SS.meta.mp)return mockPage(SS.meta.subj);if(SS&&SS.meta&&SS.meta.note)return noteView(...SS.meta.note);if(SS&&SS.meta&&SS.meta.nl)return noteList(SS.meta.subj);if(SS&&SS.meta&&SS.meta.star)return starPage(SS.meta.subj);if(SS&&SS.meta&&SS.meta.wp)return wrongPage(SS.meta.subj);if(SS&&SS.meta&&SS.meta.subj)return NEWS(SS.meta.subj)?socPage(SS.meta.subj):subj(SS.meta.subj);subjects()}
const qbl=t=>esc(t).replace(/\[빈칸\]/g,'<span class="blk"></span>').replace(/&lt;(보기|자료|표|그림)&gt;/g,'<span style="white-space:nowrap">&lt;$1&gt;</span>');
function qln(b){return b.split('\n').map(l=>{const m=l.match(/^((?:[ㄱㄴㄷㄹㅁ]\.)|(?:\([가-하A-Z0-9]\))|(?:[•])|(?:사례 ?\d+:))\s*(.*)$/);return m?`<div class="qli"><b>${esc(m[1])}</b><span>${qbl(m[2])}</span></div>`:`<div>${qbl(l)}</div>`}).join('')}
function tbH(t){return `<div class="qtw"><table class="qtb">${t.h?`<tr>${t.h.map(x=>`<th>${qbl(x)}</th>`).join('')}</tr>`:''}${t.r.map(r=>`<tr>${r.map((x,i)=>i==0&&t.h?`<th>${qbl(x)}</th>`:`<td>${qbl(x)}</td>`).join('')}</tr>`).join('')}</table></div>`}
// ---- 수학 그래프: 좌표 범위 xr·yr 안에 곡선 fs, 칠하기 fill, 점 pts, 선 ln ----
function FG(o){const W=o.w||260,H=o.h||200,P=16,[x0,x1]=o.xr||[-3,3],[y0,y1]=o.yr||[-3,3],X=x=>P+(x-x0)/(x1-x0)*(W-2*P),Y=y=>H-P-(y-y0)/(y1-y0)*(H-2*P);
 const it=t=>esc(t).replace(/([a-zA-Z]+)/g,'<tspan font-style="italic" font-family="Times New Roman,serif">$1</tspan>');
 let g=`<defs><marker id="fa" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#2a2620"/></marker></defs>`;
 const path=(f,a,b,n)=>{let d='',pen=false;n=n||160;for(let i=0;i<=n;i++){const x=a+(b-a)*i/n,y=f(x);if(!isFinite(y)||y<y0-(y1-y0)*.6||y>y1+(y1-y0)*.6){pen=false;continue}d+=(pen?'L':'M')+X(x).toFixed(1)+' '+Y(Math.max(y0-(y1-y0)*.05,Math.min(y1+(y1-y0)*.05,y))).toFixed(1);pen=true}return d};
 g+=`<clipPath id="fc${FG.n=(FG.n||0)+1}"><rect x="${P-2}" y="${P-6}" width="${W-2*P+6}" height="${H-2*P+10}"/></clipPath>`;const cid='fc'+FG.n;
 (o.fill||[]).forEach(F=>{const n=120,lo=F.g||(()=>0);let d='';for(let i=0;i<=n;i++){const x=F.a+(F.b-F.a)*i/n;d+=(i?'L':'M')+X(x).toFixed(1)+' '+Y(F.f(x)).toFixed(1)}for(let i=n;i>=0;i--){const x=F.a+(F.b-F.a)*i/n;d+='L'+X(x).toFixed(1)+' '+Y(lo(x)).toFixed(1)}g+=`<path d="${d}Z" fill="${F.c||'#f3c969'}" fill-opacity="${F.op||.45}" stroke="none" clip-path="url(#${cid})"/>`;if(F.t)g+=`<text x="${X(F.tx??(F.a+F.b)/2)}" y="${Y(F.ty??(F.f((F.a+F.b)/2)+lo((F.a+F.b)/2))/2)+4}" text-anchor="middle" font-weight="700">${it(F.t)}</text>`});
 if(o.ax!==0){const ay=y0<=0&&y1>=0?Y(0):Y(y0),ax=x0<=0&&x1>=0?X(0):X(x0);g+=`<path d="M${P-6} ${ay}H${W-4}" stroke="#2a2620" stroke-width="1.3" marker-end="url(#fa)"/><path d="M${ax} ${H-P+6}V4" stroke="#2a2620" stroke-width="1.3" marker-end="url(#fa)"/>`;
  g+=`<text x="${W-6}" y="${ay+14}" text-anchor="end">${it(o.xl||'x')}</text><text x="${ax+7}" y="12">${it(o.yl||'y')}</text>`;if(x0<=0&&x1>=0&&y0<=0&&y1>=0&&o.o!==0)g+=`<text x="${ax-4}" y="${ay+13}" text-anchor="end">O</text>`}
 (o.ln||[]).forEach(l=>{const [a,b,c,d]=l.p;g+=`<path d="M${X(a)} ${Y(b)}L${X(c)} ${Y(d)}" stroke="${l.c||'#8a8170'}" stroke-width="${l.w||1.4}" ${l.d!==0?'stroke-dasharray="4 3"':''} fill="none" clip-path="url(#${cid})"/>`;if(l.t)g+=`<text x="${X(l.tx??c)+(l.dx||4)}" y="${Y(l.ty??d)+(l.dy||-4)}" font-weight="700" fill="${l.c||'#5a5246'}">${it(l.t)}</text>`});
 (o.fs||[]).forEach(F=>{g+=`<path d="${path(F.f,F.a??x0,F.b??x1)}" stroke="${F.c||'#5b7fa8'}" stroke-width="${F.w||2.3}" ${F.d?'stroke-dasharray="6 4"':''} fill="none" clip-path="url(#${cid})"/>`;if(F.t){const tx=F.tx??(F.b??x1);g+=`<text x="${X(tx)+(F.dx||4)}" y="${Y(F.ty??F.f(tx))+(F.dy||-6)}" font-weight="700" fill="${F.c||'#46668c'}" text-anchor="${F.an||'start'}">${it(F.t)}</text>`}});
 (o.pts||[]).forEach(q=>{if(q.g){g+=`<path d="M${X(q.x)} ${Y(q.y)}V${Y(0)}M${X(q.x)} ${Y(q.y)}H${X(0)}" stroke="#9a8f7c" stroke-width="1" stroke-dasharray="3 3" fill="none"/>`}g+=q.o?`<circle cx="${X(q.x)}" cy="${Y(q.y)}" r="3.4" fill="#fff" stroke="#2a2620" stroke-width="1.5"/>`:q.n?'':`<circle cx="${X(q.x)}" cy="${Y(q.y)}" r="3.4" fill="#2a2620"/>`;if(q.t)g+=`<text x="${X(q.x)+(q.dx??6)}" y="${Y(q.y)+(q.dy??-6)}" font-weight="700">${it(q.t)}</text>`});
 const ay=y0<=0&&y1>=0?Y(0):Y(y0),ax=x0<=0&&x1>=0?X(0):X(x0);
 (o.xt||[]).forEach(([x,t])=>{g+=`<text x="${X(x)}" y="${ay+14}" text-anchor="middle">${it(t)}</text>`});
 (o.yt||[]).forEach(([y,t])=>{g+=`<text x="${ax-5}" y="${Y(y)+4}" text-anchor="end">${it(t)}</text>`});
 (o.tx||[]).forEach(([x,y,t])=>{g+=`<text x="${X(x)}" y="${Y(y)}" text-anchor="middle" font-weight="700">${it(t)}</text>`});
 return `<svg class="qgr" viewBox="0 0 ${W} ${H}" font-size="12.5" fill="#2a2620" font-family="inherit">${g}</svg>`}
function GR(o){if(o&&o.m)return FG(o);const W=250,H=196,X0=34,Y0=168,sx=x=>X0+x*19.5,sy=y=>Y0-y*15;let g='';
 g+=`<defs><marker id="ga" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#5b7fa8"/></marker><marker id="gx" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#2a2620"/></marker></defs>`;
 if(o.ax!==0){g+=`<path d="M${X0} ${Y0}H${W-10}M${X0} ${Y0}V10" stroke="#2a2620" stroke-width="1.6" fill="none" marker-end="url(#gx)"/><path d="M${X0} ${Y0}V10" stroke="#2a2620" stroke-width="1.6" marker-end="url(#gx)"/>`;
 g+=`<text x="${W-8}" y="${Y0+15}" text-anchor="end">${esc(o.x||'수량')}</text><text x="${X0+8}" y="13">${esc(o.y||'가격')}</text>${o.nz?'':`<text x="${X0-6}" y="${Y0+14}" text-anchor="end">0</text>`}`}
 (o.bx||[]).forEach(([x,y,w,h,t,c])=>{const L=String(t).split('\n');g+=`<rect x="${sx(x-w/2)}" y="${sy(y+h/2)}" width="${w*19.5}" height="${h*15}" rx="7" fill="${c||'#fff8e6'}" stroke="#8a7a60" stroke-width="1.3"/>`+L.map((l,i)=>`<text x="${sx(x)}" y="${sy(y)+4+(i-(L.length-1)/2)*14}" text-anchor="middle" font-weight="700">${esc(l)}</text>`).join('')});
 (o.pt||[]).forEach(p=>{if(p.g)g+=`<path d="M${X0} ${sy(p.y)}H${sx(p.x)}V${Y0}" stroke="#9a8f7c" stroke-width="1.1" stroke-dasharray="3 3" fill="none"/>`});
 (o.l||[]).forEach(l=>{const [a,b,c,d]=l.p;g+=`<path d="M${sx(a)} ${sy(b)}L${sx(c)} ${sy(d)}" stroke="${l.c||'#2a2620'}" stroke-width="2.2" ${l.d?'stroke-dasharray="6 4"':''} fill="none"/>`;if(l.t){const tw=[...l.t].reduce((w,ch)=>w+(/[가-힣]/.test(ch)?11:6.8),0);g+=sx(c)+4+tw>W?`<text x="${Math.min(W-tw/2-2,(sx(a)+sx(c))/2)}" y="${Math.min(sy(b),sy(d))-6}" text-anchor="middle" font-weight="700">${esc(l.t)}</text>`:`<text x="${sx(c)+4}" y="${sy(d)+(d>b?-2:5)}" font-weight="700">${esc(l.t)}</text>`}});
 (o.ar||[]).forEach(([a,b,c,d])=>{g+=`<path d="M${sx(a)} ${sy(b)}L${sx(c)} ${sy(d)}" stroke="#5b7fa8" stroke-width="2" marker-end="url(#ga)"/>`});
 (o.pt||[]).forEach(p=>{if(!p.n)g+=`<circle cx="${sx(p.x)}" cy="${sy(p.y)}" r="3.6" fill="#2a2620"/>`;if(p.t)g+=`<text x="${sx(p.x)+(p.dx||6)}" y="${sy(p.y)+(p.dy||-6)}" font-weight="700">${esc(p.t)}</text>`});
 (o.xt||[]).forEach(([x,t])=>{g+=`<text x="${sx(x)}" y="${Y0+15}" text-anchor="middle">${esc(t)}</text>`});
 (o.yt||[]).forEach(([y,t])=>{g+=`<text x="${X0-5}" y="${sy(y)+4}" text-anchor="end">${esc(t)}</text>`});
 (o.tx||[]).forEach(([x,y,t])=>{g+=`<text x="${sx(x)}" y="${sy(y)}" text-anchor="middle">${esc(t)}</text>`});
 return `<svg class="qgr" viewBox="0 0 ${W} ${H}" font-size="12.5" fill="#2a2620" font-family="inherit">${g}</svg>`}
// ---- 수식 표기: 문장 속 $...$ 를 간단한 TeX 문법으로 그려 줌 (수리 과목) ----
const MSYM={to:'→',infty:'∞',le:'≤',ge:'≥',leq:'≤',geq:'≥',ne:'≠',neq:'≠',pi:'π',cdot:'·',times:'×',div:'÷',pm:'±',prime:'′',alpha:'α',beta:'β',gamma:'γ',theta:'θ',lt:'&lt;',gt:'&gt;',dots:'…',ldots:'…',cdots:'⋯',therefore:'∴',because:'∵',Rightarrow:'⇒',Leftrightarrow:'⇔',quad:' ',in:'∈',mid:'|'};
function mxp(s){let i=0,o='';
 const ent=()=>{const m=/^&[a-z#0-9]+;/.exec(s.slice(i));if(m){i+=m[0].length;return m[0]}return null};
 const grp=()=>{while(s[i]==' ')i++;if(s[i]=='{'){let d=1,j=i+1;while(j<s.length&&d){if(s[j]=='{')d++;else if(s[j]=='}')d--;j++}const t=s.slice(i+1,j-1);i=j;return mxp(t)}
  if(s[i]=='\\'){const m=/^\\([a-zA-Z]+)/.exec(s.slice(i));if(m){i+=m[0].length;return MSYM[m[1]]||m[1]}}
  if(s[i]=='&'){const e=ent();if(e)return e}const c=s[i++]||'';return /[a-zA-Z]/.test(c)?'<i>'+c+'</i>':c};
 while(i<s.length){const c=s[i];
  if(c=='\\'){const m=/^\\([a-zA-Z]+|.)/.exec(s.slice(i));i+=m[0].length;const k=m[1];
   if(k=='frac'||k=='dfrac'){const a=grp(),b=grp();o+=`<span class="mf"><span>${a}</span><span>${b}</span></span>`}
   else if(k=='sqrt'){o+=`<span class="msq">√<span>${grp()}</span></span>`}
   else if(k=='int'){let lo='',hi='',has=0;for(let t=0;t<2;t++){if(s[i]=='_'){i++;lo=grp();has=1}else if(s[i]=='^'){i++;hi=grp();has=1}}o+=has?`<span class="mint">∫<span class="mlm2"><span>${hi}</span><span>${lo}</span></span></span>`:'<span class="mint">∫</span>'}
   else if(k=='lim'){let sb='';if(s[i]=='_'){i++;sb=grp()}o+=`<span class="mlim">lim<span>${sb}</span></span>`}
   else if(k=='Big'||k=='big'||k=='left'||k=='right'){}
   else if(k==','){o+=' '}else if(k==' '){o+=' '}else if(k=='{'||k=='}'||k=='|'){o+=k}
   else if(k=='text'){o+=grp().replace(/<\/?i>/g,'')}
   else if(['sin','cos','tan','log','ln','max','min'].includes(k)){o+=k}
   else o+=MSYM[k]??k;continue}
  if(c=='^'){i++;o+='<sup>'+grp()+'</sup>';continue}
  if(c=='_'){i++;o+='<sub>'+grp()+'</sub>';continue}
  if(c=='{'){o+=grp();continue}
  if(c=="'"){i++;o+='′';continue}
  if(c=='&'){const e=ent();if(e){o+=e;continue}}
  if(c=='-'){i++;o+='−';continue}
  if(/[a-zA-Z]/.test(c)){i++;o+='<i>'+c+'</i>';continue}
  i++;o+=c}
 return o}
const MX=t=>String(t).indexOf('$')<0?t:String(t).replace(/\$([^$]+)\$/g,(_,m)=>'<span class="mth">'+mxp(m)+'</span>');
function qtx(t,q){q=q||{};const bl=String(t).replace(/\n(?=<보기>)/g,'\n\n').split(/\n\s*\n/).map(b=>b.replace(/^\n+|\n+$/g,'')).filter(b=>b);let o='';
 const isQ=b=>/\?(\s*\(단[^)]*\))?\s*$/.test(b)&&b.split('\n').length<=3;
 bl.forEach((b,i)=>{
  if(b=='[그림]'){if(q.fig)o+=`<div class="qfg">${GR(q.fig)}</div>`;return}
  if(b=='[지도]'){if(q.img)o+=`<figure class="qim"><img src="${esc(q.img)}" alt="" loading="lazy"></figure>`;return}
  if(b=='[표]'){if(q.tb)o+=tbH(q.tb);return}
  if(/^<보기>/.test(b)){o+=`<div class="qbk"><i>보기</i>${qln(b.replace(/^<보기>\s*\n?/,''))}</div>`;return}
  if(bl.length==1||isQ(b))o+=`<div class="qst">${qln(b)}</div>`;else if(i==0&&!b.includes('\n')&&!/^(\(|[ㄱ-ㅎ]\.|[•]|사례)/.test(b))o+=`<div class="qin">${qln(b)}</div>`;else o+=`<div class="qdt">${qln(b)}</div>`});
 if(q.img&&!bl.includes('[지도]'))o=`<figure class="qim"><img src="${esc(q.img)}" alt="" loading="lazy"></figure>`+o; if(q.fig&&!bl.includes('[그림]'))o=`<div class="qfg">${GR(q.fig)}</div>`+o;if(q.tb&&!bl.includes('[표]'))o=tbH(q.tb)+o;
 return MX(`<div class="qbox">${o}</div>`)}
function quiz(){const q=SS.qs[SS.i],N=SS.qs.length,seg=SS.segs[SS.si],r=SS.resp[q.id]||{};QID=q.id;if(!QS0)QS0=Date.now();
 const MS=SS.meta&&isPad(SS.meta.subj),tn={mc:'객관식',ox:'O/X',sh:MS?'단답형':'빈칸 채우기',es:'서술형'}[q.t];
 let h=`<div class="qz"><div class="tag">${SS.meta&&SS.meta.star?'<span class="prc">별표 문제</span> ':SS.meta&&SS.meta.mode=='wrong'?'<span class="prc" style="background:#f3c9c4;color:#7a2e26">오답노트</span> ':SS.meta&&SS.meta.practice?'<span class="prc">다시 풀기</span> ':''}${esc(ttl())} · ${esc(seg.label)}${SS.segs.length>1?` <span class="sgn">${SS.si+1}/${SS.segs.length}</span>`:''}</div><div class="qpr"><b>${SS.i+1}</b><span>/ ${N}</span><div class="bar"><i style="width:${(SS.i+1)/N*100}%"></i></div></div><div class="card qcd">${starBtn(q.id)}<div class="tag" style="margin-bottom:2px">${tn}${q.pt?` · <b class="qpt">${q.pt}점</b>`:''}</div>${SS.meta&&SS.meta.t0?`<div class="mkt" id="mkt">${mkTime()}</div>`:''}${q.hd?'<div class="hdn"><b>고난도 문제</b>노트처럼 넓은 곳에 풀어 보는 걸 추천해요.</div>':''}<div class="q${q.q.length>70||q.q.includes('\n')?' ql':''}">${qtx(q.q,q)}</div>`;
 if(q.t=='mc')pmOf(q).forEach((k,pos)=>{h+=`<button class="opt${r.v===k?' sel':''}" onclick="pk(${k})"><span class="on">${pos+1}</span>${MX(esc(q.o[k]))}</button>`});
 else if(q.t=='ox')h+=`<div class="oxr">${[true,false].map(k=>`<button class="opt ox${r.v===k?' sel':''}" onclick="pk(${k})">${k?'O':'X'}</button>`).join('')}</div>`;
 else if(q.t=='sh')h+=`<input type="text" id="in" placeholder="${MS?'답 (숫자로)':'빈칸에 들어갈 말'}" value="${esc(r.v||'')}" autocomplete="off" onkeydown="if(event.key=='Enter'){event.preventDefault();${SS.i<N-1?'nav(1)':'submitSeg()'}}">`;
 else h+=`<textarea id="in" placeholder="답안을 직접 써 보세요">${esc(r.v||'')}</textarea>`;
 h+=`<div class="row"><button class="b g" ${SS.i?'':'disabled'} onclick="nav(-1)">이전</button>${SS.i<N-1?'<button class="b" onclick="nav(1)">다음</button>':'<button class="b sbm" onclick="submitSeg()">제출</button>'}</div></div>`;
 
 const pd=SS.meta&&isPad(SS.meta.subj);show(h+(pd?padHTML():'')+'</div>','q'+q.id);if(pd)padMount(q);const e=document.getElementById('in');if(e&&q.t=='sh'&&!('ontouchstart' in window))e.focus()}
const hasAns=q=>{const r=SS.resp[q.id];return r&&r.v!==undefined&&r.v!==null&&String(r.v).trim()!==''};
function keep(){const q=SS.qs[SS.i],e=document.getElementById('in');if(e&&(q.t=='sh'||q.t=='es'))SS.resp[q.id]={v:e.value}}
function tick(){if(QS0){const sec=Math.min((Date.now()-QS0)/1000,300);if(sec>=1){R._t=R._t||{};const k=dkey();R._t[k]=(R._t[k]||0)+sec;save()}QS0=Date.now()}}
function pk(v){const q=SS.qs[SS.i];SS.resp[q.id]={v};quiz()}
function nav(d){keep();tick();SS.i=Math.max(0,Math.min(SS.qs.length-1,SS.i+d));quiz()}
async function submitSeg(){keep();tick();const left=SS.qs.filter(x=>!hasAns(x)).length;
 if(left&&!(await askBox('아직 안 푼 문제가 있어요',`${left}문제가 비어 있어요.<br>빈 문제는 틀린 것으로 처리돼요.`,'제출')))return;
 QS0=0;const es=[];SS.qs.forEach(q=>{const r=SS.resp[q.id]||{},v=r.v;if(!hasAns(q)){SS.resp[q.id]={v:'',ok:false,done:true,blank:true};return}
  if(q.t=='es'){SS.resp[q.id]={v,chk:q.pts.map(()=>false)};es.push(q);return}
  SS.resp[q.id]={v,ok:q.t=='sh'?!!grade(q,v):v===q.a,done:true}});
 if(es.length)return esCheck(es);finishSeg()}
function esCheck(es){let h=`<h2>서술형 채점</h2><p class="tag">모범 답안과 비교해서, 내 답안에 들어간 요소를 체크하세요.</p>`;
 es.forEach(q=>{const r=SS.resp[q.id];h+=`<div class="card"><div class="q" style="font-weight:600">${qtx(q.q,q)}</div><div class="mut" style="font-size:13px">내 답안</div><div class="mya">${esc(r.v)}</div><div class="fb" style="border-color:var(--ac)"><b>모범 답안</b>\n${esc(q.m)}</div>${q.pts.map((p,k)=>`<label class="ck"><input type="checkbox" onchange="SS.resp['${q.id}'].chk[${k}]=this.checked"> ${esc(p)}</label>`).join('')}</div>`});
 h+=`<div class="row"><button class="b" onclick="esDone()">채점 완료</button></div>`;SS.esq=es.map(q=>q.id);show(h)}
function esDone(){(SS.esq||[]).forEach(id=>{const q=findQ(id),r=SS.resp[id],c=r.chk.filter(Boolean).length;r.ok=c>=Math.ceil(q.pts.length*0.6);r.done=true});SS.esq=null;finishSeg()}
const recOK=id=>!(SS.meta&&SS.meta.practice)&&!(SS.base&&SS.base[id]);
const FASTS=4;
async function finishSeg(){const dn=SS.qs.filter(q=>SS.resp[q.id]&&SS.resp[q.id].done),wr=SS.meta&&SS.meta.mode=='wrong',fast=!wr&&dn.length>=3&&SS.sg0&&(Date.now()-SS.sg0)/1000/dn.length<FASTS;let nw=0;
 dn.forEach(q=>{const r=SS.resp[q.id];if(wr){if(r.ok){R._fx=R._fx||{};R._fx[q.id]=1}}else if(!fast&&recOK(q.id)){R[q.id]={ok:r.ok?1:0};nw++}});
 if(nw&&dn.length==SS.qs.length){R._lbq=R._lbq||{};const k=dkey();R._lbq[k]=(R._lbq[k]||0)+nw}
 if(fast)setTimeout(()=>soonMsg('너무 빨리 풀어서 이번 파트는 집계하지 않았어요.'),400);
 save();SS.graded=SS.graded.concat(SS.qs);
 const nx=SS.segs[SS.si+1],cg=SS.segs[SS.si].grp;
 if(nx&&(await askBox(nx.grp?(nx.grp==cg?'실전 문제도 풀까요?':'다음 단원도 풀까요?'):`다음 ${SS.meta.kind}도 풀까요?`,`<b>${esc(nx.label)}</b><br>${nx.qs.length}문제를 이어서 풀 수 있어요.<br>취소하면 지금까지 푼 결과를 보여 드려요.`,'다음'))){SS.si++;SS.qs=nx.qs;SS.i=0;QS0=Date.now();SS.sg0=Date.now();return quiz()}
 result()}
let EXITING=false;
async function exitQuiz(){if(EXITING)return;EXITING=true;keep();tick();
 const fresh=!(SS.meta&&(SS.meta.practice||SS.meta.mode=='wrong'))&&SS.qs.some(q=>!(SS.base&&SS.base[q.id]));
 const ok=fresh?await askBox('나가시겠습니까?','진행 상황이 저장되지 않습니다.','다음'):await askBox('나가시겠습니까?','','다음');
 EXITING=false;if(!ok){QS0=Date.now();return}QS0=0;try{sessionStorage.removeItem(KEY+'ss')}catch(e){}goBack()}

function go(d){if(SS.i+d>=SS.qs.length)return result();SS.i=Math.max(0,SS.i+d);draft=null;quiz()}
function ans(q,r,k){if(q.t=='mc'){const i=k?q.a:r.v;return CIRC[posOf(q,i)]+' '+q.o[i]}if(q.t=='ox')return (k?q.a:r.v)?'O':'X';if(q.t=='sh')return k?q.m:r.v;return k?q.m:r.v}
function mkTime(){const m=SS&&SS.meta;if(!m||!m.t0)return '';const left=Math.round(m.min*60-(Date.now()-m.t0)/1000),a=Math.abs(left),t=Math.floor(a/60)+':'+String(a%60).padStart(2,'0');return left>=0?`남은 시간 ${t} / ${m.min}분`:`<span class="no-t">시간 초과 +${t}</span>`}
setInterval(()=>{const e=document.getElementById('mkt');if(e&&CURR=='quiz')e.innerHTML=mkTime()},1000);
function result(){QS0=0;const rs=(SS.graded||[]).filter(q=>SS.resp[q.id]&&SS.resp[q.id].done);if(!rs.length)return goBack();
 const c=rs.filter(q=>SS.resp[q.id].ok).length,wr=rs.filter(q=>!SS.resp[q.id].ok),labs=SS.segs.slice(0,SS.si+1).map(x=>x.label);
 const tg={};rs.forEach(q=>{const t=tg[q.g]=tg[q.g]||{n:0,c:0};t.n++;if(SS.resp[q.id].ok)t.c++});
 const weak=Object.keys(tg).filter(k=>tg[k].c<tg[k].n).sort((a,b)=>tg[a].c/tg[a].n-tg[b].c/tg[b].n),pc=Math.round(c/rs.length*100);
 let h=`<div class="card"><div class="tag">${esc(ttl())} · ${labs.map(esc).join(', ')}</div><h2 style="margin:4px 0">결과</h2>${SS.meta.mock&&rs.some(q=>q.pt)?`<div class="big">${Math.round(rs.filter(q=>SS.resp[q.id].ok).reduce((a,q)=>a+(q.pt||0),0)*10)/10}<small style="font-size:.45em"> / ${Math.round(rs.reduce((a,q)=>a+(q.pt||0),0)*10)/10}점</small></div><div class="mut">${c} / ${rs.length}문항 정답${SS.meta.t0?` · ${Math.round((Date.now()-SS.meta.t0)/60000)}분 걸림`:''}</div>`:`<div class="big">${c} / ${rs.length}</div>`}<div class="mut">정답률 ${pc}%</div>${SS.meta.mode=='wrong'?`<div class="prn" style="background:#e3f0e6;color:#2f6a43">맞힌 ${c}문제는 오답 완료로 표시됐어요. 진행 상황(통계)에는 반영되지 않아요.</div>`:''}${SS.meta.mode!='wrong'&&(SS.meta.practice||rs.every(q=>SS.base&&SS.base[q.id]))?'<div class="prn">다시 푼 결과라서 진행 상황(통계)에는 반영되지 않았어요.</div>':rs.some(q=>SS.base&&SS.base[q.id])?'<div class="prn">전에 풀었던 문제는 처음 결과가 그대로 유지돼요.</div>':''}<div class="bar" style="height:9px;margin-top:10px"><i data-w="${pc}" style="width:0"></i></div></div>`;
 h+=`<h3 class="sec">영역별 정답률</h3><div class="card">${Object.keys(tg).map(k=>{const t=tg[k],r=Math.round(t.c/t.n*100);return `<div class="arw"><div class="al"><span>${esc(k)}</span><b>${t.c}/${t.n}</b></div><div class="bar"><i data-w="${r}" style="width:0"></i></div></div>`}).join('')}</div>`;
 h+=`<h3 class="sec">보완해야 할 약점</h3>`+(weak.length?weak.map(k=>`<div class="card"><b class="no-t">${esc(k)}</b> <span class="mut">(${tg[k].n-tg[k].c}문제 틀림)</span>${TIPS[k]?`<div class="mut" style="margin-top:6px;font-size:14px">${MX(esc(TIPS[k]))}</div>`:''}</div>`).join(''):'<div class="card">약점이 없어요. 이 범위는 완벽해요! 🎉</div>');
 if(wr.length){h+=`<h3 class="sec">틀린 문제 해설</h3>`;wr.forEach(q=>{const r=SS.resp[q.id];
  h+=`<div class="card qcd">${starBtn(q.id)}<div class="tag">${esc(q.g||'')}</div><div class="q" style="font-weight:500;margin:4px 0 10px">${qtx(q.q,q)}</div><div>내 답: <span class="no-t">${r.blank?'(안 풂)':MX(esc(ans(q,r,0)))}</span></div><div>정답: <span class="ok-t">${MX(esc(ans(q,r,1)))}</span></div>`;
  if(q.t=='es'){const miss=q.pts.filter((p,k)=>!(r.chk||[])[k]);h+=`<div class="fb no">빠진 요소:\n${miss.map(x=>'· '+esc(x)).join('\n')}</div>`}else h+=`<div class="fb ok">${exT(q)}</div>`;if(isPad(SS.meta.subj))h+=padThumb(q.id);
  if(q.t=='sh'&&!r.blank)h+=`<button class="lk" style="margin-top:6px" onclick="ovr2('${q.id}')">내 답도 맞는 표현이에요 (정답 처리)</button>`;h+=`</div>`})}
 h+=wr.length?`<div class="row"><button class="b" onclick="retryWrong()">틀린 문제만 다시</button></div>`:'';
 if(SS.meta.mp)h+=`<div class="row"><button class="b${wr.length?' g':''}" onclick="mockPage('${SS.meta.subj}')">모의고사 통계로</button></div>`;else if(SS.meta.note)h+=`<div class="row"><button class="b${wr.length?' g':''}" onclick="noteView(...SS.meta.note)">필기로 돌아가기</button></div>`;else if(SS.meta.nl)h+=`<div class="row"><button class="b${wr.length?' g':''}" onclick="noteList('${SS.meta.subj}')">공부하기로 돌아가기</button></div>`;else if(SS.meta.star)h+=`<div class="row"><button class="b g" onclick="starPage('${SS.meta.subj}')">별표 문제로</button></div>`;else if(NEWS(SS.meta.subj)&&!SS.meta.wp)h+=`<div class="row"><button class="b g" onclick="socPage('${SS.meta.subj}')">단원 선택으로</button></div>`;
 show(h);animBars()}
function ovr2(id){SS.resp[id].ok=true;if(SS.meta&&SS.meta.mode=='wrong'){R._fx=R._fx||{};R._fx[id]=1;save()}else if(recOK(id)){R[id]={ok:1};save()}result()}
function retryWrong(){const wr=(SS.graded||[]).filter(q=>SS.resp[q.id]&&!SS.resp[q.id].ok);startRun(SS.meta.subj,[{label:'틀린 문제 다시 풀기',qs:wr}],{title:SS.meta.title,mode:SS.meta.mode=='wrong'||wr.every(q=>R[q.id])?'wrong':undefined,practice:true,wp:SS.meta.wp,note:SS.meta.note})}

const fd=t=>new Date(t).toLocaleString('ko-KR',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'});

// ---------- 공부 시간 ----------
const dkey=(d=new Date())=>d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
function mrg(srv,loc){if(srv&&srv._force){const o=Object.assign({},srv);delete o._force;setTimeout(()=>{try{sync()}catch(e){}},800);return o}return mergeR(srv,loc)}
function mergeR(a,b){const o=Object.assign({},a,b);o._fx=Object.assign({},a._fx||{},b._fx||{});const t={},A=a._t||{},B=b._t||{};for(const k in A)t[k]=A[k];for(const k in B)t[k]=Math.max(t[k]||0,B[k]);o._t=t;o._goals=Object.assign({},b._goals||{},a._goals||{});return o}
function fmtT(sec,short){sec=Math.round(sec||0);if(sec<60)return sec>0?'1분 미만':'0분';const h=Math.floor(sec/3600),m=Math.round(sec%3600/60);return h?(short?h+'시간'+(m?'<br>'+m+'분':''):h+'시간'+(m?' '+m+'분':'')):m+'분'}
let QID=null,QS0=0;
document.addEventListener('visibilitychange',()=>{if(document.hidden){if(SS&&document.getElementById('in')!==undefined&&QID)tick();QS0=0}else if(QID&&SS){const r=SS.resp[QID];if(!(r&&(r.done||r.rev)))QS0=Date.now()}});

// ---------- 프로필 ----------
document.addEventListener('gesturestart',e=>e.preventDefault());document.addEventListener('dblclick',e=>e.preventDefault(),{passive:false});

const PSVG='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8.2" r="3.9"/><path d="M4.6 20.2c.9-3.9 3.9-6 7.4-6s6.5 2.1 7.4 6"/></svg>';
(function(){const b=document.createElement('button');b.id='rf';b.setAttribute('aria-label','내 프로필');
 b.innerHTML=PSVG;
 b.onclick=()=>{if(NICK)profile()};document.body.appendChild(b)})();
function askBox(title,msg,ok){return new Promise(res=>{const w=document.createElement('div');w.className='mdw';
 w.innerHTML=`<div class="mdc"><h3>${title}</h3>${msg?`<p>${msg}</p>`:'<div style="height:10px"></div>'}<div class="row" style="margin:0"><button class="b g" data-v="0">취소</button><button class="b" data-v="1">${ok||'확인'}</button></div></div>`;
 w.onclick=e=>{const v=e.target.dataset&&e.target.dataset.v;if(v===undefined&&e.target!==w)return;w.remove();res(v==='1')};document.body.appendChild(w)})}
let PFOK=false,PFSHOW=false,CALM=null;
function pfGate(next){show(`<div class="fbw"><h2>비밀번호 확인</h2><p class="tag">${next=='nick'?'닉네임을 바꾸려면':next=='pin'?'비밀번호를 바꾸려면':'비밀번호를 보려면'} 지금 비밀번호 4자리를 입력해 주세요.</p><div class="card" style="max-width:320px;margin:10px auto"><input type="text" class="pw" autocomplete="off" id="gp" inputmode="numeric" pattern="[0-9]*" maxlength="4" placeholder="비밀번호" style="text-align:center;letter-spacing:6px" oninput="this.value=this.value.replace(/\D/g,'');if(this.value.length==4)pfChk('${next||''}')"></div></div>`);setTimeout(()=>{const e=document.getElementById('gp');if(e)e.focus()},50)}
function pfChk(next){const e=document.getElementById('gp');if(e.value===PIN){PFOK=true;if(next=='cal')return cal();if(next=='nick')return pfNick();if(next=='pin')return pfPin();if(next=='show'){PFSHOW=true;return goUp()}return profile()}e.value='';soonMsg('비밀번호가 틀렸어요.')}
const APPV='v146';
function nagTog(){if(R._nagoff)delete R._nagoff;else R._nagoff=1;save();show(pfHTML(),kKey('pf'));soonMsg(R._nagoff?'공부 알림을 껐어요.':'공부를 안 한 날 저녁에 알림이 와요.')}
function pfHTML(){const ch=kChips('pf');if(KCH.pf>=ch.length)KCH.pf=0;const nm=ch[KCH.pf],pend=STAFF()&&admLoad.ok?(FB||[]).filter(x=>x.st!='done').length:0;let b='';
 if(nm=='관리자')b=admBody();
 else if(nm=='초기화')b=rsList();
 else b=`<div class="card pf"><div class="pr"><span>닉네임</span><b>${esc(NICK)}</b>${ADMINMODE||SUBMODE?`<span class="mut" style="font-size:13px;white-space:nowrap">${SUBMODE?'':'관리자 '}고정</span>`:'<button class="lk" onclick="pfNick()">변경하기</button>'}</div>
 ${ADMINMODE||SUBMODE?'':`<div class="pr"><span>비밀번호</span><b id="pv">${PFSHOW?(PFSHOW=false,esc(PIN)):'••••'}</b><button class="lk" onclick="if(!PFOK)return pfShow();const e=document.getElementById('pv');e.textContent=e.textContent=='••••'?PIN:'••••'">보기</button><button class="lk" onclick="pfPin()">변경하기</button></div>`}<div class="pr"><span>폰 알림</span><b>${notiState()}</b>${notiState()=='켜짐'?'':'<button class="lk" onclick="notiFromProfile()">켜기</button>'}</div>${ADMINMODE?'':`<div class="pr"><span>공부 알림</span><b>${R._nagoff?'꺼짐':'켜짐'}</b><button class="lk" onclick="nagTog()">${R._nagoff?'켜기':'끄기'}</button></div>`}</div>
 <div class="card pf" id="pfsel"><div class="pr"><span>선택과목</span><b class="pfsl">${Array.isArray(R._sel)?R._sel.map(n=>`<span>${n.split('|').join(' ')}</span>`).join('')||'없음':'아직 안 골랐어요'}</b><button class="lk" onclick="pickSel()">바꾸기</button></div></div>
 
 <p class="mut" style="text-align:center;font-size:12px;margin-top:18px">앱 버전 ${APPV}</p>`;
 return kPage('pf',kHead(`<h2>${esc(NICK)}</h2>`,[['txt:피드백','피드백 보내기','fbForm(1)']],'pf',ch.map(x=>x=='관리자'?pend:0)),b)}
function profile(){if(NICK&&!selOK())return pickSel();if(ADMINMODE||SUBMODE)PFOK=true;show(pfHTML(),kKey('pf'));animBars()}
const ICN_SH='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8.2 7.5 9.5 4.3-1.3 7.5-4.9 7.5-9.5V6z"/><path d="m9 12 2.2 2.2L15.5 10"/></svg>';
const RSI={chk:'<path d="M5 12.5 10 17l9-10"/>',re:'<path d="M4 12a8 8 0 1 0 2.4-5.7"/><path d="M4 4v4.5h4.5"/>',bell:'<path d="M6 16V11a6 6 0 0 1 12 0v5l1.5 2h-15z"/><path d="M10 20.5a2.2 2.2 0 0 0 4 0"/>',msg:'<path d="M4 5.5h16v10.5H9l-5 3.5z"/>',usr:'<circle cx="10" cy="8" r="3.6"/><path d="M3.5 19.5c.8-3.4 3.4-5.3 6.5-5.3 1.6 0 3 .5 4.1 1.3"/><path d="m16 15 5 5m0-5-5 5"/>'};
// 프로필 아래 초기화 모음 (관리자만)
function rsList(){const r=(ic,t,d,on,ch)=>`<button class="rsr" onclick="${on}"><span class="rsi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${RSI[ic]}</svg></span><span class="rst"><b>${t}</b></span>${ch?'<span class="chev">›</span>':''}</button>`;
 let h=`<div class="rsh">내 기록</div><div class="rsl">${r('chk','모두 완료로 채우기','테스트용 · 모든 과목을 맞힌 것으로','myFill()')}${r('re','내 기록 초기화','풀이·오답·공부 시간 삭제 후 선택과목부터 다시','myReset()')}</div>`;
 if(DB)h+=`<div class="rsh dz"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 4 2.5 20h19z"/><path d="M12 10v4.5M12 17.5v.1"/></svg>모든 사람에게 적용</div><div class="rsl dz">${r('bell','알림 정보 초기화','모든 사람의 메시지함 속 알림',"rsDo('nt')")}${r('msg','피드백 정보 초기화','받은 피드백과 답장 기록',"rsDo('fb')")}${r('usr','개인별 계정 삭제','계정을 골라서 삭제',"rsDo('del')",1)}</div>`;
 return h}
function myProg(){const L=SUBJ.flat().filter(([n])=>CUR[n]&&socQ(n).length),qs=[].concat(...L.map(([n])=>socQ(n).concat(mkAll(n)))),d=qs.filter(q=>R[q.id]).length,pc=qs.length?Math.round(d/qs.length*100):0;
 return `<h3 class="sec">내 진행도</h3><div class="card"><div class="al"><span>열린 과목 ${L.length}개 · ${d} / ${qs.length}문제</span><b>${pc}%</b></div><div class="bar" style="height:9px;margin:6px 0 4px"><i style="width:${pc}%"></i></div></div>${rsList()}`}
function calGo(d){const [y,mo]=CALM;let ny=y,nm=mo+d;if(nm<0){nm=11;ny--}if(nm>11){nm=0;ny++}cal([ny,nm],d)}
function cal(m,dir){if(m)CALM=m;KCH.st=kIdx('st','달력');return allStats(dir)}
let NKT=null,NKOK=false;
function pfShow(){pfGate('show')}
function pfNick(){if(!PFOK)return pfGate('nick');NKOK=false;show(`<div class="fbw"><h2>닉네임 변경</h2><p class="tag">지금 닉네임: <b>${esc(NICK)}</b></p><div class="card" style="max-width:340px;margin:10px auto;width:100%;box-sizing:border-box"><input type="text" id="nn" maxlength="12" placeholder="새 닉네임 (최대 12자)" style="text-align:center" oninput="nkChk()"><div id="ns" class="mut" style="margin-top:8px;min-height:20px;font-size:14px"></div></div><div class="row" style="max-width:340px;margin:0 auto;width:100%"><button class="b" id="nb" disabled onclick="nkSave()">변경하기</button></div></div>`)}
function nkChk(){const v=document.getElementById('nn').value.trim(),st=document.getElementById('ns'),b=document.getElementById('nb');NKOK=false;b.disabled=true;clearTimeout(NKT);
 if(!v){st.textContent='';return}if(v===NICK){st.innerHTML='<span class="no-t">지금 쓰는 닉네임이에요.</span>';return}
 if(!DB){st.innerHTML='<span class="no-t">서버에 연결되지 않아 바꿀 수 없어요.</span>';return}
 st.textContent='확인 중…';NKT=setTimeout(async()=>{try{const {data,error}=await DB.rpc('nick_available',{p_nick:v});if(document.getElementById('nn').value.trim()!==v)return;if(error)throw error;
  if(data===true){NKOK=true;b.disabled=false;st.innerHTML='<span class="ok-t">사용할 수 있는 닉네임이에요.</span>'}else st.innerHTML='<span class="no-t">이미 사용 중인 닉네임이에요.</span>'}catch(e){st.innerHTML='<span class="no-t">확인하지 못했어요. 잠시 뒤 다시 해 주세요.</span>'}},350)}
async function nkSave(){const v=document.getElementById('nn').value.trim(),b=document.getElementById('nb');if(!NKOK)return;if(!(await askBox('닉네임을 바꿀까요?',`<b>${esc(NICK)}</b> → <b>${esc(v)}</b><br>다른 기기에서도 새 닉네임으로 들어와야 해요.`,'바꾸기')))return;b.disabled=true;b.textContent='바꾸는 중…';
 try{const {data,error}=await DB.rpc('player_rename',{p_nick:NICK,p_pin:PIN,p_new:v});if(error)throw error;
  if(data==='ok'){const old=NICK;NICK=v;ls('last',v);ls('rec:'+v,JSON.stringify(R));ls('rec:'+old,null);soonMsg('닉네임을 바꿨어요.');return profile()}
  if(data==='taken'){soonMsg('방금 다른 사람이 쓰기 시작한 닉네임이에요.');return nkChk()}soonMsg('바꾸지 못했어요. 다시 해 주세요.')}catch(e){soonMsg('바꾸지 못했어요. 다시 해 주세요.')}b.disabled=false;b.textContent='변경하기'}
function pfPin(){if(!PFOK)return pfGate('pin');show(`<div class="fbw"><h2>비밀번호 변경</h2><p class="tag">새 비밀번호를 두 번 입력해 주세요.</p><div class="card" style="max-width:340px;margin:10px auto;width:100%;box-sizing:border-box"><input type="text" class="pw" autocomplete="off" id="p1" inputmode="numeric" pattern="[0-9]*" maxlength="4" placeholder="새 비밀번호 4자리" style="text-align:center;letter-spacing:4px" oninput="this.value=this.value.replace(/\D/g,'');pnChk()"><div style="height:8px"></div><input type="text" class="pw" autocomplete="off" id="p2" inputmode="numeric" pattern="[0-9]*" maxlength="4" placeholder="한 번 더 입력" style="text-align:center;letter-spacing:4px" oninput="this.value=this.value.replace(/\D/g,'');pnChk()"><div id="ps" class="mut" style="margin-top:8px;min-height:20px;font-size:14px"></div></div><div class="row" style="max-width:340px;margin:0 auto;width:100%"><button class="b" id="pb" disabled onclick="pnSave()">변경하기</button></div></div>`)}
function pnChk(){const a=document.getElementById('p1').value,b=document.getElementById('p2').value,st=document.getElementById('ps'),bt=document.getElementById('pb');bt.disabled=true;
 if(a.length<4){st.textContent='';return}if(b.length<4){st.textContent='확인을 위해 한 번 더 입력해 주세요.';return}
 if(a!==b){st.innerHTML='<span class="no-t">두 비밀번호가 달라요.</span>';return}if(a===PIN){st.innerHTML='<span class="no-t">지금 비밀번호와 같아요.</span>';return}
 st.innerHTML='<span class="ok-t">두 비밀번호가 같아요.</span>';bt.disabled=!DB}
async function pnSave(){const a=document.getElementById('p1').value,bt=document.getElementById('pb');if(!(await askBox('비밀번호를 바꿀까요?','다음부터는 새 비밀번호로 들어와야 해요.<br>다른 기기에서도 새 비밀번호를 써 주세요.','바꾸기')))return;bt.disabled=true;bt.textContent='바꾸는 중…';
 try{const {data,error}=await DB.rpc('player_repin',{p_nick:NICK,p_pin:PIN,p_new:a});if(error)throw error;if(data===true){PIN=a;ls('pin',a);soonMsg('비밀번호를 바꿨어요.');return profile()}}catch(e){}
 soonMsg('바꾸지 못했어요. 다시 해 주세요.');bt.disabled=false;bt.textContent='변경하기'}

let ROUTING=false,REPL=false;
const encR=r=>r.split('/').map(encodeURIComponent).join('/');
let CURR='',GUARD=false;
const TBI={home:['<path d="M3.5 10.5 12 3.8l8.5 6.7V20a.9.9 0 0 1-.9.9h-5v-6.2h-5.2v6.2h-5a.9.9 0 0 1-.9-.9z"/>','<path fill="currentColor" stroke="none" d="M12 3.2 2.9 10.4c-.3.2-.4.5-.4.8V20c0 .8.6 1.4 1.4 1.4H9.3v-6.5h5.4v6.5h5.4c.8 0 1.4-.6 1.4-1.4v-8.8c0-.3-.1-.6-.4-.8z"/>'],
 noti:['<path d="M6 9.5a6 6 0 0 1 12 0c0 5.500 2 7 2 7H4s2-1.500 2-7z"/><path d="M10 20a2 2 0 0 0 4 0"/>','<path fill="currentColor" d="M6 9.5a6 6 0 0 1 12 0c0 5.500 2 7 2 7H4s2-1.500 2-7z"/><path d="M10 20a2 2 0 0 0 4 0"/>'],
 lb:['<path d="M6 3h12v7a6 6 0 0 1-12 0z"/><path d="M6 5H3.800a1 1 0 0 0-1 1c0 3 1.800 4.800 3.300 5.300M18 5h2.200a1 1 0 0 1 1 1c0 3-1.800 4.800-3.300 5.300"/><path d="M12 16.200v3M7.500 21h9"/>','<path fill="currentColor" d="M6 3h12v7a6 6 0 0 1-12 0z"/><path d="M6 5H3.800a1 1 0 0 0-1 1c0 3 1.800 4.800 3.300 5.300M18 5h2.200a1 1 0 0 1 1 1c0 3-1.800 4.800-3.300 5.300"/><path d="M12 16.200v3M7.500 21h9"/>'],
 mail:['<rect x="3" y="5.5" width="18" height="13" rx="2.2"/><path d="m3.6 7 8.4 6.2L20.4 7"/>','<path fill="currentColor" stroke="none" d="M5.2 4.8h13.6c1.5 0 2.7 1.2 2.7 2.7v.3L12 14.3 2.5 7.8v-.3c0-1.5 1.2-2.7 2.7-2.7zM2.5 9.6l9 6.2c.3.2.7.2 1 0l9-6.2v6.9c0 1.5-1.2 2.7-2.7 2.7H5.2c-1.5 0-2.7-1.2-2.7-2.7z"/>'],
 st:['<rect x="3.6" y="3.6" width="16.8" height="16.8" rx="3.6"/><path d="M8.4 16v-3M12 16V8M15.6 16v-5"/>','<rect x="2.8" y="2.8" width="18.4" height="18.4" rx="4.2" fill="currentColor" stroke="none"/><path d="M8.4 16.2v-3.2M12 16.2V7.8M15.6 16.2v-5.2" stroke="#fffdf8" stroke-width="2.2"/>'],
 pf:['<circle cx="12" cy="8.3" r="4.1"/><path d="M4.6 20.3c.9-4 3.9-6.3 7.4-6.3s6.5 2.3 7.4 6.3"/>','<circle cx="12" cy="8.3" r="4.7" fill="currentColor" stroke="none"/><path fill="currentColor" stroke="none" d="M3.7 20.2c.9-4.6 4.2-7.2 8.3-7.2s7.4 2.6 8.3 7.2c.1.7-.4 1.3-1.1 1.3H4.8c-.7 0-1.2-.6-1.1-1.3z"/>'],
 guide:['<path d="M4 5.5c2.7-1 5.3-1 8 .8 2.7-1.8 5.3-1.8 8-.8V19c-2.7-1-5.3-1-8 .8-2.7-1.8-5.3-1.8-8-.8z"/><path d="M12 6.3v13.5"/>','<path fill="currentColor" stroke="none" d="M11.2 5.7C8.6 4 6 4 3.4 4.9c-.5.2-.9.6-.9 1.1V19c0 .7.7 1.2 1.4 1 2.4-.8 4.8-.6 7.3.9zM12.8 5.7c2.6-1.7 5.2-1.7 7.8-.8.5.2.9.6.9 1.1V19c0 .7-.7 1.2-1.4 1-2.4-.8-4.8-.6-7.3.9z"/>']};
const TBG='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"><path d="M4 5.5c2.7-1 5.3-1 8 .8 2.7-1.8 5.3-1.8 8-.8V19c-2.7-1-5.3-1-8 .8-2.7-1.8-5.3-1.8-8-.8z"/><path d="M12 6.3v13.5"/></svg>';
const TBR=['subjects','board','leader','stats','profile'];
function tbKey(){const r=CURR||'';if(/^(board|inbox)/.test(r))return 'noti';if(/^leader/.test(r))return 'lb';if(/^stats/.test(r))return 'st';if(/^(profile|admin|guide|fb)/.test(r))return 'pf';return 'home'}
const TBK=['home','noti','lb','st','pf'],TBL={home:'학습',noti:'소식',lb:'리더보드',st:'전체 통계',pf:'프로필'};
const RDM=()=>{try{return matchMedia('(prefers-reduced-motion: reduce)').matches}catch(e){return false}};
let TBDIR=0,TBDRAG=null,TBNOCLK=0;
// 탭 누르기: 그 탭의 첫 칩으로
function tbGo(k){if(KNV)return;const cur=tbKey();if(k==cur&&TBR.includes(CURR)){scrollTo({top:0,behavior:RDM()?'auto':'smooth'});return}kNav(k,0)}
// 탭 첫 화면에서 화면을 옆으로 밀면: 칩 순서대로, 마지막 칩 다음은 옆 탭 (과목·글 안에서는 안 됨). 끝에서는 더 안 밀림
{let S=null;const hsc=el=>{for(;el&&el!==document.body;el=el.parentElement){if(el.matches&&el.matches('input,textarea,select,canvas,.mdw,#tbr,.tbsl,.cgw,.bsh'))return true;const cs=getComputedStyle(el);if(/(auto|scroll)/.test(cs.overflowX)&&el.scrollWidth>el.clientWidth+2)return true}return false};
 const mvEl=()=>{const A=document.getElementById('app');return S&&S.intra?(A.querySelector('.kb')||A):A};
 const drop=()=>{if(S&&S.o){S.o.remove();S.o=null}};
 document.addEventListener('touchstart',e=>{if(S&&S.o&&!KNV)S.o.remove();S=null;if(!KNV)kClean();if(KNV||e.touches.length!==1||!NICK||!TBR.includes(CURR)||!document.body.classList.contains('tbon')||document.querySelector('.mdw,.bsw,.msx'))return;
  const t=e.touches[0];if(t.clientX<14||t.clientX>innerWidth-14||hsc(e.target))return;S={x:t.clientX,y:t.clientY,t:Date.now(),ax:0,dx:0,dir:0,o:null}},{passive:true});
 document.addEventListener('touchmove',e=>{if(!S)return;const t=e.touches[0],dx=t.clientX-S.x,dy=t.clientY-S.y;
  if(!S.ax){if(Math.abs(dx)<10&&Math.abs(dy)<10)return;if(Math.abs(dx)>Math.abs(dy)*1.2)S.ax=1;else{S=null;return}}
  e.preventDefault();if(!S.seq){S.seq=kSeq();S.cur=tbKey();S.i=S.seq.indexOf(S.cur+':'+KCH[S.cur])}const seq=S.seq,cur=S.cur,i=S.i,dir=dx<0?1:-1,nb=i<0?null:seq[i+dir];
  if(!nb){if(S.o)drop();S.dir=0;S.dx=0;mvEl().style.transform='';return}
  if(S.dir!==dir){drop();const [tt,cc]=nb.split(':');const A=document.getElementById('app'),kb=A.querySelector('.kb');S.t=tt;S.c=+cc;S.intra=tt==cur;
   const kbTop=kb?kb.getBoundingClientRect().top+scrollY:0;S.tgt=S.intra?Math.min(scrollY,kbTop):0;document.getElementById('app').style.transform='';if(kb)kb.style.transform='';S.o=kPv(tt,+cc,S.intra,S.tgt);S.dir=dir}
  S.dx=dx;if(!S.raf){S.raf=requestAnimationFrame(()=>{const z=S;if(!z)return;z.raf=0;if(!z.o)return;mvEl().style.transform=`translateX(${z.dx}px)`;z.o.style.transform=`translateX(${z.dir*innerWidth+z.dx}px)`})}},{passive:false});
 const back=()=>{if(!S)return;const el=mvEl(),o=S.o,d=S.dir,dx=S.dx;S=null;if(!o){el.style.transform='';return}
  const E='cubic-bezier(.25,.8,.25,1)';el.animate([{transform:`translateX(${dx}px)`},{transform:'translateX(0)'}],{duration:220,easing:E}).onfinish=()=>{el.style.transform=''};el.style.transform='';
  o.animate([{transform:`translateX(${d*innerWidth+dx}px)`},{transform:`translateX(${d*innerWidth}px)`}],{duration:220,easing:E,fill:'forwards'}).onfinish=()=>o.remove()};
 const end=()=>{if(!S||!S.ax){S=null;return}const {dx,dir,o}=S,v=Math.abs(dx)/(Date.now()-S.t);
  if(o&&dir&&(Math.abs(dx)>innerWidth*.22||(Math.abs(dx)>40&&v>.45))){const z=S;S=null;kNav(z.t,z.c,{off:dx,o})}else back()};
 document.addEventListener('touchend',end);document.addEventListener('touchcancel',back)}

// 5개 탭 첫 화면에서 맨 위에서 아래로 당겨 새로고침
let PTRB=0;const PT_TH=84;
function ptrHTML(st,d){const p=Math.min(1,d/PT_TH),C=2*Math.PI*14,sp=st=='sp',arc=sp?C*.72:C*(.12+.76*p),
 ring=`<svg width="36" height="36" viewBox="0 0 40 40"><circle class="rg" cx="20" cy="20" r="14" stroke-dasharray="${arc} ${C}" style="transform:rotate(${sp?-90:-110+p*50}deg)"/></svg>`,
 arw=`<svg width="24" height="24" viewBox="0 0 24 24"><path class="ar" d="M12 3.5v16M5 12.5l7 7 7-7"/></svg>`;
 return `<div class="pi">${ring}</div>`}
function ptrSet(d,st){let e=document.getElementById('ptr');if(!e){e=document.createElement('div');e.id='ptr';e.setAttribute('aria-hidden','true');document.body.appendChild(e)}
 const sig=st+(st=='pu'?Math.round(Math.min(1,d/PT_TH)*12):'');
 if(e._s!==sig){e._s=sig;e.className=st;e.innerHTML=ptrHTML(st,d)}
 e.style.height=d+'px';e.style.setProperty('--po',Math.min(1,d/36));document.getElementById('app').style.transform=d?`translateY(${d}px)`:'';return e}
function ptrEnd(){const e=document.getElementById('ptr');if(e)e.remove();const A=document.getElementById('app');if(A)A.style.transform='';PTRB=0}
function ptrBack(from){const A=document.getElementById('app'),e=document.getElementById('ptr');if(!e){PTRB=0;return}if(RDM()||!from){ptrEnd();return}
 const t0=performance.now();const f=t=>{const k=Math.min(1,(t-t0)/220),d=from*(1-(1-Math.pow(1-k,3)));e.style.height=d+'px';A.style.transform=`translateY(${d}px)`;e.style.setProperty('--po',Math.min(1,d/36));if(k<1)requestAnimationFrame(f);else ptrEnd()};requestAnimationFrame(f)}
async function ptrDo(){const c=CURR;const t0=Date.now();
 try{if(c=='subjects')await Promise.all([DB&&NICK?msgLoad():0,postLoad()]);else if(c=='stats'||c=='profile')await sync()}catch(e){}
 const w=700-(Date.now()-t0);if(w>0)await new Promise(r=>setTimeout(r,w));
 if(CURR!==c)return;try{if(c=='leader')delete LBC[lbKey()];if(c=='subjects')STKI=Math.random();KV++;const F={subjects,board,inbox,stats:allStats,profile,leader}[c];if(F)await F()}catch(e){}}
{let P=null;const okEl=el=>{for(;el&&el!==document.body;el=el.parentElement){if(el.matches&&el.matches('input,textarea,select,canvas,.mdw,#tbr,.tbsl,.cgw,.bsh'))return false;const cs=getComputedStyle(el);if(/(auto|scroll)/.test(cs.overflowY)&&el.scrollHeight>el.clientHeight+2)return false}return true};
 document.addEventListener('touchstart',e=>{P=null;if(PTRB||KNV||e.touches.length!==1||!NICK||!TBR.includes(CURR)||!document.body.classList.contains('tbon')||document.querySelector('.mdw,.bsw,.msx,.tbsl'))return;
  if(scrollY>1||!okEl(e.target))return;const t=e.touches[0];P={x:t.clientX,y:t.clientY,on:0,d:0}},{passive:true});
 document.addEventListener('touchmove',e=>{if(!P)return;const t=e.touches[0],dx=t.clientX-P.x,dy=t.clientY-P.y;
  if(!P.on){if(Math.abs(dx)<10&&Math.abs(dy)<10)return;if(dy>0&&Math.abs(dy)>Math.abs(dx)*1.2&&scrollY<=1)P.on=1;else{P=null;return}}
  e.preventDefault();const d=Math.min(120,dy*.5);P.d=Math.max(0,d);ptrSet(P.d,P.d>=PT_TH?'rd':'pu')},{passive:false});
 const fin=async()=>{if(!P)return;const z=P;P=null;if(!z.on)return;
  if(z.d>=PT_TH){PTRB=1;ptrSet(78,'sp');try{await ptrDo()}catch(e){}ptrBack(78)}else ptrBack(z.d)};
 document.addEventListener('touchend',fin);document.addEventListener('touchcancel',()=>{if(P&&P.on){const d=P.d;P=null;ptrBack(d)}else P=null})}
// 흰 알약을 지금 탭(또는 손가락) 위치로 옮김
function tbPill(x,lift){const t=document.getElementById('tbr');if(!t)return;const p=t.querySelector('.tbp'),on=t.querySelector('button.on');if(!p||!on)return;
 const tr=t.getBoundingClientRect(),bs=[...t.querySelectorAll('button')],G=2,P=6,cw=t.clientWidth,av=cw-P*2-G*(bs.length-1),fs=bs.map(b=>b.classList.contains('on')?1.45:1),sm=fs.reduce((x,y)=>x+y,0);
 const W=av*1.45/sm;let L;
 if(x==null){const i=bs.indexOf(on);L=P;for(let j=0;j<i;j++)L+=av*fs[j]/sm+G}else{const raw=x-tr.left-t.clientLeft-W/2,mn=P,mx=cw-P-W,rb=d=>24*(1-Math.exp(-d/38));L=raw<mn?mn-rb(mn-raw):raw>mx?mx+rb(raw-mx):raw}
 p.style.translate=`${L}px 0`;p.style.width=W+'px';p.classList.toggle('lift',!!lift)}
function tbNear(x){const bs=[...document.querySelectorAll('#tbr button')];let bi=0,bd=1e9;bs.forEach((b,i)=>{const r=b.getBoundingClientRect(),dd=Math.abs(r.left+r.width/2-x);if(dd<bd){bd=dd;bi=i}});return TBK[bi]}
function tbSetIcons(a){const t=document.getElementById('tbr');if(!t)return;t.querySelectorAll('button').forEach(b=>{const k=b.dataset.k,on=k==a;
  b.classList.toggle('on',on);b.setAttribute('aria-selected',on);const g=b.querySelector(':scope>svg');if(g&&TBI[k])g.innerHTML=TBI[k][on?1:0]})}
function tabBar(){let t=document.getElementById('tbr');const on=!!NICK&&TBR.includes(CURR);document.body.classList.toggle('tbon',on);document.body.classList.toggle('tbuser',!!NICK);if(!on){if(t)t.hidden=true;return}
 const a=tbKey();
 if(!t){t=document.createElement('div');t.id='tbr';t.setAttribute('role','tablist');document.body.appendChild(t);
  t.innerHTML='<span class="tbp" aria-hidden="true"></span>'+TBK.map(k=>`<button role="tab" data-k="${k}" aria-label="${TBL[k]}" class="${k=='noti'?'mlb':''}">${`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" stroke-linecap="round" aria-hidden="true"></svg>`}${k=='noti'?'<span class="mlc" hidden></span>':''}</button>`).join('');
  t.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(Date.now()-TBNOCLK<400)return;tbGo(b.dataset.k)});
  // 탭바 위에서 손가락을 끌면 알약이 따라오고, 뗀 곳의 탭으로 이동
  t.addEventListener('pointerdown',e=>{TBDRAG={x0:e.clientX,id:e.pointerId,mv:false}});
  t.addEventListener('pointermove',e=>{const D=TBDRAG;if(!D||D.id!==e.pointerId)return;if(!D.mv&&Math.abs(e.clientX-D.x0)<10)return;
   if(!D.mv){D.mv=true;try{t.setPointerCapture(e.pointerId)}catch(_){}}tbSetIcons(tbNear(e.clientX));tbPill(e.clientX,true)});
  const end=e=>{const D=TBDRAG;TBDRAG=null;if(!D||!D.mv)return;TBNOCLK=Date.now();const k=tbNear(e.clientX);const cur=tbKey();tbSetIcons(cur);
   requestAnimationFrame(()=>{if(k!=cur)tbGo(k);else tbPill()})};
  t.addEventListener('pointerup',end);t.addEventListener('pointercancel',e=>{TBDRAG=null;tbSetIcons(tbKey());tbPill()});
  addEventListener('resize',()=>tbPill());
  t.hidden=false;tbSetIcons(a);t.querySelector('.tbp').classList.add('noa');requestAnimationFrame(()=>{tbPill();requestAnimationFrame(()=>t.querySelector('.tbp').classList.remove('noa'))})}
 else{const was=t.hidden;t.hidden=false;const prev=(t.querySelector('button.on')||{}).dataset;tbSetIcons(a);
  if(was){const p=t.querySelector('.tbp');p.classList.add('noa');tbPill();requestAnimationFrame(()=>p.classList.remove('noa'))}
  else if(!prev||prev.k!==a){requestAnimationFrame(()=>tbPill())}
  else tbPill()}
 {const f=t.querySelector('button[data-k="pf"]');let sd=f.querySelector('.tbad');if(STAFF()&&!sd){f.insertAdjacentHTML('beforeend','<span class="tbad" aria-hidden="true">'+ICN_SH+'</span>')}else if(!STAFF()&&sd)sd.remove()}
 try{postBadge()}catch(e){}try{mailBadge()}catch(e){}}
function updBk(){let b=document.getElementById('bk');if(!b){b=document.createElement('button');b.id='bk';b.className='qback';b.setAttribute('aria-label','뒤로');
  b.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>';b.onclick=goUp;document.body.appendChild(b)}
 const show=CURR=='quiz'||(CURR!==''&&!TBR.includes(CURR)&&parentOf(CURR)!==null);b.hidden=!show;tabBar();document.body.classList.toggle('hasbk',show);document.body.classList.toggle('onpf',/^profile/.test(CURR))}
// ---- 뒤로가기: 실제 브라우저 기록을 경로 스택으로 사용 (사용자 동작 없이 pushState 하지 않음) ----
let HST=(()=>{try{return JSON.parse(sessionStorage.getItem('pq_hst'))||[]}catch(e){return []}})(),HI=-1,IGN=0,LEAVE=0,NAVT=0,EXQ=false;
{const s=history.state;if(s&&typeof s.i=='number'&&HST[s.i]!==undefined)HI=s.i;else HST=[]}
const svH=()=>{try{sessionStorage.setItem('pq_hst',JSON.stringify(HST))}catch(e){}};
const curU=r=>r?'#/'+encR(r):location.pathname+location.search;
const actOK=()=>!(navigator.userActivation&&!navigator.userActivation.isActive);
// 안드로이드 크롬(CloseWatcher 지원): 기록을 쌓지 않고 뒤로 가기를 직접 받아서, 「종료」 한 번에 앱이 꺼지게 함
const CWM=(()=>{try{return 'CloseWatcher' in window&&history.length<=1&&!/iPhone|iPad|iPod/.test(navigator.userAgent)}catch(e){return false}})();
let CWO=null;
function cwArm(){if(!CWM||CWO)return;try{CWO=new CloseWatcher();CWO.onclose=()=>{CWO=null;setTimeout(cwArm,0);cwBack()}}catch(e){}}
function cwBack(){const md=document.querySelector('.mdw');if(md){const c=md.querySelector('[data-v="0"]');if(c)c.click();else md.remove();return}
 const tv=document.querySelector('.tbv');if(tv){tv.remove();return}
 if(CURR=='quiz'&&SS&&document.querySelector('.qz,.qpr'))return exitQuiz();
 if(!NICK||CURR==''||CURR=='subjects')return askExit();const par=parentOf(CURR);if(par===null)return askExit();goR(par)}
function armH(){if(CWM){cwArm();return}if(HST[0]==='__x')return;try{history.replaceState({r:'__x',i:0},'',location.pathname+location.search);HST=['__x',CURR];HI=1;history.pushState({r:CURR,i:1},'',curU(CURR));svH()}catch(e){}}
document.addEventListener('pointerdown',()=>{if(NICK)armH()},true);document.addEventListener('keydown',()=>{if(NICK)armH()},true);
async function askExit(){if(EXQ)return;EXQ=true;const ok=await askBox('앱을 종료할까요?','','종료');EXQ=false;
 if(ok){try{window.close()}catch(e){}setTimeout(()=>soonMsg('뒤로 가기를 한 번 더 누르면 종료돼요.'),300)}else if(CWM){}else{IGN++;window._igt=setTimeout(()=>IGN=0,700);history.forward()}}
function goUp(){if(CURR=='quiz'&&SS&&document.querySelector('.qz,.qpr'))return exitQuiz();
 if(HI>1){history.back();return}const par=parentOf(CURR);if(par===null)return;goR(par)}
function setR(r){const prev=CURR;if(prev!==r){SCRS[pgKey(prev)]=scrollY;const m=r.match(/^admin\/([wnd])/);if(m&&!/^admin\/[wnd]/.test(prev)&&!ROUTING)BKO[m[1]]=prev}CURR=r;updBk();const t=curU(r);
 try{if(ROUTING||r===prev||HI<0||NAVT){if(HI>=0)HST[HI]=r;history.replaceState({r,i:HI},'',t)}
  else{NAVT=1;setTimeout(()=>NAVT=0);
   const j=HI>1?HST.lastIndexOf(r,HI-1):-1;
   if(j>=1){const d=j-HI;HST.length=j+1;HI=j;IGN++;window._igt=setTimeout(()=>IGN=0,700);history.go(d)}
   else if(/^board/.test(r)&&/^admin\/w/.test(prev)){const k=HST.lastIndexOf('subjects',HI-1);
    // 공지를 올린 뒤: 글쓰기·관리자 화면 기록을 걷어 내고 [과목 선택 → 공지]만 남김
    if(k>=1&&k+1<HI){const d=k+1-HI,sub=r!='board';HST.length=k+2;HST[k+1]='board';if(sub)HST[k+2]=r;HI=k+1;IGN++;window._igt=setTimeout(()=>IGN=0,700);window.addEventListener('popstate',()=>{try{history.replaceState({r:'board',i:k+1},'',curU('board'));if(sub){history.pushState({r,i:k+2},'',t)}HI=sub?k+2:k+1;svH()}catch(e){}},{once:true});history.go(d)}
    else{HST[HI]=r;history.replaceState({r,i:HI},'',t)}}
   else if(prev==''||prev=='quiz'||prev=='result'||!actOK()){HST[HI]=r;history.replaceState({r,i:HI},'',t)}
   else if(r.startsWith('note/')&&prev.startsWith('note/')){HST[HI]=r;history.replaceState({r,i:HI},'',t)}
   else if(r.startsWith('note/')&&prev!==parentOf(r)){const par=parentOf(r);HST[HI]=par;history.replaceState({r:par,i:HI},'',curU(par));HI++;HST.length=HI;HST[HI]=r;history.pushState({r,i:HI},'',t)}
   else{HI++;HST.length=HI;HST[HI]=r;history.pushState({r,i:HI},'',t)}}
  svH()}catch(e){}}
function parentOf(r){const [k,...rest]=r.split('/'),v=rest.join('/');
 if(!r)return null;if(k=='subjects')return null;
 if(k=='prob'||k=='notes')return 'subj/'+v;if(k=='note'){const ps=v.split('/');ps.pop();ps.pop();return 'notes/'+ps.join('/')}
 if(k=='sel')return Array.isArray(R._sel)?'subjects':null;
 if(k=='leader')return 'subjects';if(k=='inbox')return v?'inbox':'subjects';if(k=='board')return v?'board':'subjects';if(k=='guide')return 'profile';
 if(k=='pick'||k=='menu'||k=='subj'||k=='profile'&&!v)return 'subjects';if(k=='stats')return 'subjects';if(k=='admin'&&!v)return 'profile';if(k=='admin'&&/^[wnd](\/|$)/.test(v))return BKO[v[0]]||(v[0]=='w'?'board':'profile');
 if(k=='profile')return 'profile';if(k=='admin'){if(/^t\/./.test(v))return 'admin/t';if(/^p\/./.test(v))return 'admin/p';return 'admin'}if(k=='fb')return v=='1'?'profile':'';
 if(k=='mock')return 'subj/'+v;
 if(k=='wrong'||k=='star')return (NEWS(v)?'prob/':'subj/')+v;if(k=='quiz'||k=='result'){if(SS&&SS.meta&&SS.meta.mock&&SS.meta.subj)return 'subj/'+SS.meta.subj;if(SS&&SS.meta&&SS.meta.note)return 'note/'+SS.meta.note.join('/');if(SS&&SS.meta&&SS.meta.star)return 'star/'+SS.meta.subj;if(SS&&SS.meta&&SS.meta.wp)return 'wrong/'+SS.meta.subj;if(SS&&SS.meta&&SS.meta.subj)return (NEWS(SS.meta.subj)?'prob/':'subj/')+SS.meta.subj;if(SS&&SS.pid&&!SS.meta)return 'menu/'+SS.pid;return 'subjects'}
 return 'subjects'}
const curR=()=>{const h=location.hash||'';if(!h.startsWith('#/'))return '';try{return decodeURIComponent(h.slice(2))}catch(e){return ''}};
function findQ(id){for(const p of PASS)for(const q of p.Q)if(q.id==id)return q;for(const n in CUR)for(const U of CUR[n])for(const M of U.m)for(const q of M.q)if(q.id==id)return q;return null}
function saveSS(){try{if(SS&&SS.segs){keepSafe();sessionStorage.setItem(KEY+'ss',JSON.stringify({meta:SS.meta,si:SS.si,i:SS.i,resp:SS.resp,segs:SS.segs.map(x=>({label:x.label,ids:x.qs.map(q=>q.id)})),gr:(SS.graded||[]).map(q=>q.id),perm:SS.perm||{},base:SS.base||{},sg0:SS.sg0||0}))}}catch(e){}}
function keepSafe(){try{const q=SS.qs[SS.i],e=document.getElementById('in');if(e&&q&&(q.t=='sh'||q.t=='es')&&!(SS.resp[q.id]&&SS.resp[q.id].done))SS.resp[q.id]={v:e.value}}catch(e){}}
window.addEventListener('pagehide',saveSS);
function loadSS(){try{const o=JSON.parse(sessionStorage.getItem(KEY+'ss'));if(!o||!o.segs)return false;const segs=o.segs.map(x=>({label:x.label,qs:x.ids.map(findQ).filter(Boolean)})).filter(x=>x.qs.length);if(!segs.length)return false;const si=Math.min(o.si,segs.length-1);SS={pid:'run',cat:'all',meta:o.meta,segs,si,qs:segs[si].qs,i:Math.min(o.i,segs[si].qs.length-1),resp:o.resp||{},graded:(o.gr||[]).map(findQ).filter(Boolean),perm:o.perm||{},base:o.base||{},sg0:o.sg0||0};if(!o.perm)segs.forEach(x=>Object.assign(SS.perm,mkPerm(x.qs)));return true}catch(e){return false}}
function go2(r){
 const [k,...rest]=r.split('/'),v=rest.join('/');
 if(!r)return home();
 if(!NICK)return home();
 if(!selOK()&&k!='sel')return pickSel();
 if(k=='subjects')return subjects();
 if(k=='pick'||k=='menu')return subj('독서와|작문');
 if(k=='sel')return pickSel();
 if(k=='subj'&&v&&SUBJ.flat().some(x=>x[0]==v))return subj(v);
 if((k=='prob'||k=='notes'||k=='note')&&v&&!STAFF()){const nn=k=='note'?v.split('/').slice(0,-2).join('/'):v;if(CUR[nn]&&!hasC(nn))return subjects()}
 if(k=='prob'&&v&&CUR[v])return socPage(v);
 if(k=='notes'&&v&&NEWS(v))return noteList(v);
 if(k=='note'){const ps=v.split('/'),kk=ps.pop(),uu=ps.pop(),nn=ps.join('/');if(NEWS(nn))return noteView(nn,+uu,+kk)}
 if(k=='inbox')return v?msgOpen(+v):inbox();
 if(k=='board')return v?postView(+v):board();if(k=='leader')return leader();
 if(k=='admin'&&/^w(\/\d+)?$/.test(v)&&OWNER)return postForm(+v.split('/')[1]||0);
 if(k=='guide')return guide();
 if(k=='admin'&&v=='n'&&OWNER)return noticeForm();
 if(k=='admin'&&/^r\/\d+$/.test(v)&&OWNER)return fbReply(+v.slice(2));
 if(k=='admin'&&v=='d'&&OWNER)return delPage();
 if(k=='stats')return allStats();
 if(k=='wrong'&&v&&CUR[v])return wrongPage(v);if(k=='star'&&v&&CUR[v])return starPage(v);
 if(k=='mock'&&v&&MOCK[v])return mockPage(v);
 if(k=='cal')return cal();
 if(k=='profile'){if(v=='cal')return cal();if(v=='nick')return pfNick();if(v=='pin')return pfPin();return profile()}
 if(k=='fb')return fbForm(+v||0);
 if(k=='admin'&&STAFF()){const [a,...b]=v.split('/'),w=b.join('/');if(a=='t'&&w)return fbType(w);if(a=='t')return fbTypes();if(a=='p'&&w)return fbPerson(w);if(a=='p')return fbPeople();if(a=='u'&&w&&OWNER)return adminOne(w);return admin()}
 if((k=='quiz'||k=='result')&&(SS||loadSS()))return k=='quiz'?quiz():result();
 return subjects()}
const BKO={},SCRS={};
// 탭 첫 화면은 칩까지 묶어서 스크롤 위치를 기억
function pgKey(r){const i=TBR.indexOf(r);return i>=0?r+':'+KCH[TBK[i]]:r}
function goR(r){ROUTING=true;try{go2(r)}finally{ROUTING=false}updBk();const y=SCRS[pgKey(r)];if(y>0){scrollTo(0,y);setTimeout(()=>{if(CURR==r&&Math.abs(scrollY-y)>2&&!document.querySelector('.mdw'))scrollTo(0,y)},260)}}
window.addEventListener('popstate',e=>{if(location.hash=='#admin')return;const s=e.state;
 if(IGN){IGN--;if(s&&typeof s.i=='number')HI=s.i;return}
 if(document.querySelector('.bsw.on')){IGN++;window._igt=setTimeout(()=>IGN=0,700);history.forward();accClose();return}
 clearTimeout(window._igt);if(!s||typeof s.i!='number')return;
 if(LEAVE){LEAVE=0;HI=s.i;goR(s.r);return}
 const md=document.querySelector('.mdw');if(md){IGN++;window._igt=setTimeout(()=>IGN=0,700);history.forward();const c=md.querySelector('[data-v="0"]');if(c)c.click();else md.remove();return}
 const tv=document.querySelector('.tbv');if(tv){IGN++;window._igt=setTimeout(()=>IGN=0,700);history.forward();tv.remove();return}
 if(CURR=='quiz'&&SS&&document.querySelector('.qz,.qpr')){IGN++;window._igt=setTimeout(()=>IGN=0,700);history.forward();exitQuiz();return}
 HI=s.i;if(s.r==='__x'){askExit();return}if(!NICK){history.back();return}goR(s.r)});
const H=(f,mk)=>function(...a){setR(mk(...a));return f.apply(this,a)};
home=H(home,()=>'');subjects=H(subjects,()=>'subjects');
subj=H(subj,n=>'subj/'+n);socPage=H(socPage,n=>NEWS(n)?'prob/'+n:'subj/'+n);noteList=H(noteList,n=>'notes/'+n);noteView=H(noteView,(n,u,k)=>'note/'+n+'/'+u+'/'+k);inbox=H(inbox,()=>'inbox');board=H(board,()=>'board');leader=H(leader,()=>'leader');postView=H(postView,id=>'board/'+id);postForm=H(postForm,id=>'admin/w'+(id?'/'+id:''));guide=H(guide,()=>'guide');pickSel=H(pickSel,()=>'sel');msgOpen=H(msgOpen,id=>'inbox/'+id);noticeForm=H(noticeForm,()=>'admin/n');delPage=H(delPage,()=>'admin/d');allStats=H(allStats,()=>'stats');fbForm=H(fbForm,f=>'fb/'+(f||0));
adminOne=H(adminOne,n=>'admin/u/'+n);fbTypes=H(fbTypes,()=>'admin/t');fbType=H(fbType,k=>'admin/t/'+k);fbPeople=H(fbPeople,()=>'admin/p');fbPerson=H(fbPerson,n=>'admin/p/'+n);fbReply=H(fbReply,id=>'admin/r/'+id);
wrongPage=H(wrongPage,n=>'wrong/'+n);starPage=H(starPage,n=>'star/'+n);mockPage=H(mockPage,n=>'mock/'+n);profile=H(profile,()=>'profile');pfShow=H(pfShow,()=>'profile/pw');pfNick=H(pfNick,()=>'profile/nick');pfPin=H(pfPin,()=>'profile/pin');
quiz=(f=>function(){setR('quiz');const x=f.apply(this,arguments);saveSS();return x})(quiz);
result=(f=>function(){REPL=true;setR('result');const x=f.apply(this,arguments);saveSS();return x})(result);
// 아이폰 홈 화면 앱: 왼쪽 가장자리에서 오른쪽으로 밀면 뒤로 가기
(function(){const sa=window.navigator.standalone===true;if(!sa)return;let sx=null,sy=0,dx=0;
 document.addEventListener('touchstart',e=>{const t=e.touches[0];if(t.clientX<26&&history.length>1){sx=t.clientX;sy=t.clientY;dx=0;A.style.transition='none'}else sx=null},{passive:true});
 document.addEventListener('touchmove',e=>{if(sx==null)return;const t=e.touches[0];dx=t.clientX-sx;if(Math.abs(t.clientY-sy)>Math.abs(dx)&&dx<30){sx=null;A.style.transform='';return}A.style.transform='translateX('+Math.max(0,dx*.6)+'px)'},{passive:true});
 document.addEventListener('touchend',()=>{if(sx==null)return;A.style.transition='transform .2s ease';A.style.transform='';if(dx>80){CWM?cwBack():history.back()}sx=null})})();
async function boot(){{const m=location.hash.match(/^#s=([A-Za-z0-9]{16,64})$/);if(m){if(ls('sk')!==m[1]){ls('subnick',null)}ls('sk',m[1]);ls('pin',null);try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}try{sessionStorage.removeItem(KEY+'alive')}catch(e){}}}{const m=location.hash.match(/^#k=([A-Za-z0-9]{16,64})$/);if(m){ls('ak',m[1]);try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}try{sessionStorage.removeItem(KEY+'alive')}catch(e){}}}const FRESH=(()=>{try{const f=!sessionStorage.getItem(KEY+'alive');sessionStorage.setItem(KEY+'alive','1');return f}catch(e){return true}})();
 await chkAdmin();if(CWM)cwArm();
 if(OWNER||SK())setMan();
 if(!OWNER&&SK())return subBoot(FRESH);
 if(OWNER){adminOn();if(!selOK())pickSel();else if(FRESH&&!/^inbox/.test(curR()))splash();else goR(curR());adminLoad();return}
 const lk=lastNick(),pn=ls('pin');
 if(!lk||!/^\d{4}$/.test(pn)){chkAdmin();return home()}
 NICK=lk;PIN=pn;try{R=okDV(JSON.parse(ls('rec:'+lk)))}catch(e){R={}}
 if(!selOK())pickSel();else if(FRESH&&!/^inbox/.test(curR()))splash();else goR(curR());
 if(DB){try{const {data,error}=await DB.rpc('player_login',{p_nick:lk,p_pin:pn});if(!error&&data){
  if(data.status=='ok'||data.status=='new'){const loc=R;R=mrg(okDV(data.data),loc);R._dv=DV;ls('rec:'+NICK,JSON.stringify(R));if(Object.keys(loc).length)sync();selRe()}
  else if(data.status=='wrong'){ls('last',null);ls('pin',null);NICK='';PIN='';REPL=true;home();soonMsg('비밀번호가 바뀌어 다시 입력해야 해요.')}}}catch(e){}}}

// ===== 계정 전환 (관리자 본인 전용): 프로필 탭을 길게 누르면 아래에서 올라오는 창 =====
const ACC=()=>{try{return JSON.parse(ls('acl'))||[]}catch(e){return []}};
let ACCLIVE=null;
function accForget(n){try{ls('acl',JSON.stringify(ACC().filter(x=>x.n!=n)));ls('rec:'+n,null);if(ACCLIVE)ACCLIVE.delete(n)}catch(e){}}
async function accPrune(){const k=AK()||ls('akp');if(!DB||!k||!ACC().length)return;try{const {data,error}=await DB.rpc('admin_players',{p_key:k});if(error||!Array.isArray(data))return;const live=new Set(data.map(x=>x.nick));ACCLIVE=live;ACC().filter(a=>!live.has(a.n)).forEach(a=>accForget(a.n))}catch(e){}}
const accOK=()=>!!(AK()||ls('akp'));
async function accSheet(){if(!accOK()||document.querySelector('.bsw'))return;await accPrune();if(document.querySelector('.bsw'))return;const L=ACC(),cur=OWNER?'@':NICK;
 const av=(n,adm)=>`<i class="acv" style="--avc:${adm?'#2a2620':avc(n)}">${adm?ICN_SH:esc([...n][0]||'?')}</i>`;
 const row=(k,n,sub,adm)=>`<button class="acr" onclick="accGo('${k}')">${av(n,adm)}<span><b>${esc(n)}</b><small>${sub}</small></span><span class="acc${k==cur?' on':''}"></span></button>`;
 const w=document.createElement('div');w.className='bsw';
 w.innerHTML=`<div class="bsh" role="dialog" aria-label="계정 전환"><span class="bsg"></span><h3>계정 전환</h3>${row('@',ADM_NICK,'관리자',1)}${L.map(a=>row(a.n,a.n,'일반 계정')).join('')}<button class="acr aca" onclick="accAdd()"><i class="acv acp">+</i><span><b>일반 계정 추가</b></span></button></div>`;
 w.addEventListener('click',e=>{if(e.target===w)accClose()});document.body.appendChild(w);w.offsetHeight;requestAnimationFrame(()=>requestAnimationFrame(()=>w.classList.add('on')));
 {const sh=w.querySelector('.bsh');let y0=null,dy=0;sh.addEventListener('touchstart',e=>{y0=e.touches[0].clientY;dy=0;sh.style.transition='none'},{passive:true});
  sh.addEventListener('touchmove',e=>{if(y0==null)return;dy=Math.max(0,e.touches[0].clientY-y0);sh.style.transform=`translateY(${dy}px)`},{passive:true});
  sh.addEventListener('touchend',()=>{y0=null;sh.style.transition='';sh.style.transform='';if(dy>80)accClose()})}}
function partPick(n,u,k){const M=CUR[n][u].m[k],sg=midSegs(n,u,k);if(!sg.length){soonMsg('이 단원 문제는 아직 준비 중이에요.');return}if(sg.length<2||document.querySelector('.bsw'))return socGo(n,u,k);
 const rows=sg.map((x,i)=>{const t=x.qs.length,d=x.qs.filter(q=>R[q.id]).length,p=i?'x':'b',nm=x.label.split(' · ').pop();return `<button class="acr prt${d==t?' dn':''}" onclick="partGo('${n}',${u},${k},'${p}')"><span><b>${nm}</b><small>${t}문제 · ${d==t?'모두 풀었어요':d?d+'문제 풀었어요':'아직 안 풀었어요'}</small></span><span class="chev">›</span></button>`}).join('');
 const w=document.createElement('div');w.className='bsw';w.innerHTML=`<div class="bsh" role="dialog" aria-label="파트 고르기"><span class="bsg"></span><h3>${esc(M.n)}</h3>${rows}</div>`;
 w.addEventListener('click',e=>{if(e.target===w)accClose()});document.body.appendChild(w);w.offsetHeight;requestAnimationFrame(()=>w.classList.add('on'));sheetSwipe(w)}
function sheetSwipe(w){const sh=w.querySelector('.bsh');let y0=null,dy=0;sh.addEventListener('touchstart',e=>{y0=e.touches[0].clientY;dy=0;sh.style.transition='none'},{passive:true});
 sh.addEventListener('touchmove',e=>{if(y0==null)return;dy=Math.max(0,e.touches[0].clientY-y0);sh.style.transform=`translateY(${dy}px)`},{passive:true});
 sh.addEventListener('touchend',()=>{y0=null;sh.style.transition='';sh.style.transform='';if(dy>80)accClose()})}
function partGo(n,u,k,p){accClose();setTimeout(()=>socGo(n,u,k,{part:p}),120)}
function accClose(){const w=document.querySelector('.bsw');if(!w)return;w.classList.remove('on');setTimeout(()=>w.remove(),260)}
function accGo(k){const cur=OWNER?'@':NICK;if(k==cur)return accClose();
 if(k=='@'){const a=ls('akp');if(!a)return;saveNow();ls('ak',a);ls('akp',null);ls('last',ADM_NICK);ls('pin',null)}
 else{const a=ACC().find(x=>x.n==k);if(!a)return;if(ACCLIVE&&!ACCLIVE.has(k)){accForget(k);accClose();return soonMsg('삭제된 계정이에요.')}saveNow();if(AK()){ls('akp',AK());ls('ak',null)}ls('last',a.n);ls('pin',a.p)}
 try{sessionStorage.removeItem(KEY+'ss');sessionStorage.setItem(KEY+'alive','1')}catch(e){}location.replace(location.pathname+location.search+'#/profile');location.reload()}
function saveNow(){try{if(NICK)ls('rec:'+NICK,JSON.stringify(R))}catch(e){}}
function accAdd(){const sh=document.querySelector('.bsh');if(!sh)return;
 sh.innerHTML=`<span class="bsg"></span><h3>일반 계정 추가</h3><input type="text" id="acn" maxlength="12" placeholder="닉네임 (최대 12자)" style="text-align:center"><input type="text" class="pw" autocomplete="off" id="acp" inputmode="numeric" pattern="[0-9]*" maxlength="4" placeholder="비밀번호 숫자 4자리" style="text-align:center;letter-spacing:4px;margin-top:8px" oninput="this.value=this.value.replace(/\\D/g,'')"><p class="mut acm" id="acs">처음 쓰는 닉네임이면 새로 만들어져요.</p><div class="row" style="margin:6px 0 0"><button class="b g" onclick="accClose()">취소</button><button class="b" id="acb" onclick="accSave()">추가하고 전환</button></div>`;
 setTimeout(()=>{const e=document.getElementById('acn');if(e)e.focus()},60)}
async function accSave(){const n=document.getElementById('acn').value.trim(),pw=document.getElementById('acp').value,st=document.getElementById('acs'),b=document.getElementById('acb');
 if(!n)return st.textContent='닉네임을 써 주세요.';if(n==ADM_NICK)return st.textContent='관리자 닉네임은 쓸 수 없어요.';if(!/^\d{4}$/.test(pw))return st.textContent='비밀번호는 숫자 4자리예요.';
 if(!DB)return st.textContent='서버에 연결되지 않았어요.';b.disabled=true;b.textContent='확인 중…';
 let r='';try{const {data,error}=await DB.rpc('player_login',{p_nick:n,p_pin:pw});if(!error&&data)r=data.status}catch(e){}
 if(r!='ok'&&r!='new'){b.disabled=false;b.textContent='추가하고 전환';st.textContent=r=='wrong'?'이미 있는 닉네임이고 비밀번호가 달라요.':r=='locked'?'잠긴 계정이에요. 잠시 뒤 다시 해 주세요.':'만들지 못했어요. 다시 해 주세요.';return}
 if(r=='new'){try{ls('rec:'+n,JSON.stringify({_dv:DV,_k1:1,_tour:1}))}catch(e){}}
 const L=ACC().filter(x=>x.n!=n);L.push({n,p:pw});ls('acl',JSON.stringify(L));ACCLIVE=null;accGo(n)}
// 프로필 탭 길게 누르기
let ACLK=0;{const rel=()=>{if(ACLK)setTimeout(()=>{ACLK=0},350)};['pointerup','pointercancel','touchend','touchcancel','mouseup'].forEach(n=>document.addEventListener(n,rel,true));['click','pointerdown','mousedown','touchstart'].forEach(n=>document.addEventListener(n,e=>{if(ACLK&&e.target.closest&&e.target.closest('.bsw')){e.stopPropagation();e.preventDefault()}},true))}
{let T=0,x0=0,y0=0;document.addEventListener('pointerdown',e=>{const b=e.target.closest&&e.target.closest('#tbr button[data-k="pf"]');if(!b||!accOK())return;x0=e.clientX;y0=e.clientY;clearTimeout(T);T=setTimeout(()=>{T=0;TBNOCLK=Date.now();TBDRAG=null;ACLK=1;setTimeout(()=>{ACLK=0},3000);accSheet()},450)},true);
 const cx=()=>{clearTimeout(T);T=0};document.addEventListener('pointermove',e=>{if(T&&Math.hypot(e.clientX-x0,e.clientY-y0)>10)cx()},true);document.addEventListener('pointerup',cx,true);document.addEventListener('pointercancel',cx,true);
 document.addEventListener('contextmenu',e=>{if(e.target.closest&&e.target.closest('#tbr'))e.preventDefault()})}

if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js',{updateViaCache:'none'}).then(r=>r.update()).catch(()=>{}));

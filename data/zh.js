// ===== 중국어 회화 (2학기 기말 범위: 교과서 9~62쪽) : 필기 + 단어집 =====
// 문제·모의고사는 data/zhq.js
(()=>{
const ZN='중국어|회화';NOTE[ZN]={};
const P=(a,b)=>{const r=[];for(let i=a;i<=b;i++)r.push(`tb/zh/p${String(i).padStart(3,'0')}.jpg`);return r};
// --- 병음 성조 색 ---
const TM={'ā':1,'á':2,'ǎ':3,'à':4,'ē':1,'é':2,'ě':3,'è':4,'ī':1,'í':2,'ǐ':3,'ì':4,'ō':1,'ó':2,'ǒ':3,'ò':4,'ū':1,'ú':2,'ǔ':3,'ù':4,'ǖ':1,'ǘ':2,'ǚ':3,'ǜ':4};
const VW=/[aeiouüāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ]/i,isV=c=>VW.test(c||'');
function seg(s){const o=[];let i=0;const L=s.length;while(i<L){let j=i;const two=s.slice(j,j+2).toLowerCase();if(['zh','ch','sh'].includes(two))j+=2;else if(!isV(s[j]))j++;while(j<L&&isV(s[j]))j++;
 if(s[j]=='n'&&s[j+1]=='g'&&!isV(s[j+2]))j+=2;else if(s[j]=='n'&&!isV(s[j+1]))j++;else if(s[j]=='r'&&!isV(s[j+1])&&j>i&&isV(s[j-1]))j++;
 let y=s.slice(i,j);if(!y){y=s[i];j=i+1}if(!VW.test(y)&&o.length)o[o.length-1]+=y;else o.push(y);i=j}return o}
const tn=y=>{for(const c of y.toLowerCase())if(TM[c])return TM[c];return 0};
const ZC=['#9a9184','#d8473b','#e2861a','#2c9655','#3a6cc6'],ZT=['경성','1성','2성','3성','4성'];
const sylls=p=>{const r=[];String(p).split(/(\s+)/).forEach(w=>{if(!w)return;if(/^\s+$/.test(w)){r.push({t:' ',sp:1});return}seg(w).forEach(x=>r.push({t:x,tn:VW.test(x)?tn(x):-1}))});return r};
const PY=p=>sylls(p).map(x=>x.sp?' ':x.tn<0?esc(x.t):`<span style="color:${ZC[x.tn]}">${esc(x.t)}</span>`).join('');
const TCV=['<path d="M2 10h16"/>','<path d="M2 15 L18 4"/>','<path d="M2 6 C5 15 8 17 11 15 C14 13 16 8 18 3"/>','<path d="M2 3 L18 16"/>'];
const CV=(t,w=16)=>t<=0?`<svg width="${w}" height="${w}" viewBox="0 0 20 20"><circle cx="10" cy="10" r="2.6" fill="${ZC[0]}"/></svg>`:`<svg width="${w}" height="${w}" viewBox="0 0 20 20" fill="none" stroke="${ZC[t]}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${TCV[t-1]}</svg>`;
const HZ=t=>ntIn(t);
Object.assign(NTX,{
 dlg:(sit,lines)=>{const au=lines.some(([w,h,p])=>ZDLG[h.replace(/==/g,'')+'|'+p]);return `<div class="zdl">${sit||au?`<div class="zsit">${sit?`<span>${ntIn(sit)}</span>`:''}${au?`<button class="zdall" onclick="zdAll(this)">${SPK2}<span>전체 듣기</span></button>`:''}</div>`:''}${lines.map(([w,h,p,k],i)=>{const f=ZDLG[h.replace(/==/g,'')+'|'+p];return `<div class="zln${i%2?' r':''}"${f?` data-a="${f}"`:''}><div class="zwc"><i class="zwho">${esc(w)}</i>${f?`<button class="zdsp" aria-label="발음 듣기" onclick="zdSay(this)">${SPK2}</button>`:''}</div><div class="zbub"><div class="zhz" lang="zh-CN">${HZ(h)}</div><div class="zpy">${PY(p)}</div><div class="zko">${ntIn(k)}</div></div></div>`}).join('')}</div>`},
 zx:rows=>`<div class="zex">${rows.map(([h,p,k])=>`<div class="zei"><div class="zhz" lang="zh-CN">${HZ(h)}</div><div class="zpy">${PY(p)}</div><div class="zko">${ntIn(k)}</div></div>`).join('')}</div>`,
 pat:(f,d)=>`<div class="zpat"><div class="zpf" lang="zh-CN">${ntIn(f)}</div>${d?`<p>${ntP(d)}</p>`:''}</div>`,
 sw:(base,bp,alts)=>`<div class="zsw"><div class="zsb"><div class="zhz" lang="zh-CN">${HZ(base)}</div><div class="zpy">${PY(bp)}</div></div><div class="zsa">${alts.map(([h,p,k])=>`<div><b lang="zh-CN" style="font-size:${[...h].length>=5?15:[...h].length==4?17:19}px">${esc(h)}</b><span class="zpy">${PY(p)}</span><small>${ntIn(k)}</small></div>`).join('')}</div></div>`,
 idm:(h,p,k,d)=>`<div class="zid"><span class="zil">관용 표현</span><div class="zhz" lang="zh-CN">${esc(h)}</div><div class="zpy">${PY(p)}</div><b>${ntIn(k)}</b>${d?`<p>${ntP(d)}</p>`:''}</div>`,
 wd:rows=>`<div class="zwd">${rows.map(([h,p,k])=>`<span><b lang="zh-CN">${esc(h)}</b><em class="zpy">${PY(p)}</em><small>${ntIn(k)}</small></span>`).join('')}</div>`,
 pl:rows=>`<div class="zpl">${rows.map(([nm,h,p,tags])=>`<div class="zpc"><b>${ntIn(nm)}</b>${h?`<span class="zhz" lang="zh-CN">${esc(h)}</span>`:''}${p?`<span class="zpy">${PY(p)}</span>`:''}${tags?`<small>${ntIn(tags)}</small>`:''}</div>`).join('')}</div>`
});
const st=document.createElement('style');st.textContent=`
.zhz{font-family:"Noto Serif SC","Noto Serif CJK SC","Songti SC","STSong","SimSun",serif;font-size:22px;line-height:1.45;color:#1f1b16;letter-spacing:.5px}
.zhz mark{background:linear-gradient(transparent 55%,#f9df99 55%);color:inherit}
.zpy{font-weight:700;font-size:15.5px;line-height:1.4;letter-spacing:.1px}
.zko{font-size:14.5px;color:#5a5245;margin-top:2px}
.nt .zdl *,.nt .zex *,.nt .zsw *,.nt .zid *,.nt .zpat *,.nt .zwd *,.nt .zpl *{line-height:1.45}.nt .zhz{line-height:1.4}
.zdl{background:#fff;border-radius:16px;padding:12px 12px 6px;box-shadow:inset 0 0 0 1.5px #e7dfcd;margin:6px 0 12px}
.zsit{font-size:13px;color:#7a7264;margin:0 2px 10px;padding-left:9px;border-left:3px solid #93d3d8;display:flex;align-items:center;gap:8px}.zsit>span{flex:1}
.zdall{flex:none;margin-left:auto;display:flex;align-items:center;gap:4px;padding:6px 10px 6px 8px;border-radius:99px;border:none;background:#d8eff1;color:#24585d;font:inherit;font-size:12.5px;font-weight:800;cursor:pointer;-webkit-tap-highlight-color:transparent}
.zdall.ing{background:#2f8f97;color:#fff}.zdall.ing svg{fill:#fff;stroke:#fff}
.zwc{flex:none;width:46px;display:flex;flex-direction:column;align-items:center;gap:7px}
.zdsp{width:34px;height:34px;border-radius:50%;border:none;background:#e3f3f4;display:flex;align-items:center;justify-content:center;cursor:pointer;-webkit-tap-highlight-color:transparent}
.zdsp.ing{background:#2f8f97}.zdsp.ing svg{fill:#fff;stroke:#fff}
.zln.ply .zbub{background:#eef8f8;border-radius:12px;box-shadow:0 0 0 4px #eef8f8}
.zln{display:flex;gap:9px;margin:0 0 10px;align-items:flex-start}
.zwho{flex:none;font-style:normal;font-size:12px;font-weight:800;width:46px;text-align:center;padding:5px 0;border-radius:10px;background:#d8eff1;color:#24585d;margin-top:3px}
.zln.r .zwho{background:#f6e2d4;color:#8a4a22}
.zbub{flex:1;min-width:0}
.zex{display:grid;gap:8px;margin:6px 0 12px}
.zei{background:#fff;border-radius:14px;padding:9px 13px;box-shadow:inset 0 0 0 1.5px #ece4d2;position:relative}
.zei:before{content:'예';position:absolute;right:10px;top:9px;font-size:11px;font-weight:800;color:#9a8f7d;background:#f4eee2;border-radius:6px;padding:1px 6px}
.zpat{margin:6px 0 10px;border-radius:14px;background:#e3f3f4;box-shadow:inset 0 0 0 1.5px #a9d9dd;padding:10px 14px;text-align:center}
.zpf{font-family:Jua,"Noto Sans SC","Noto Sans CJK SC",sans-serif;font-size:19px;color:#1f4f53}
.zpat p{margin:4px 0 0;font-size:14px;color:#4b5f60;text-align:left}
.zsw{margin:6px 0 12px;border-radius:16px;background:#fff;box-shadow:inset 0 0 0 1.5px #ece4d2;overflow:hidden}
.zsb{padding:10px 14px;background:#faf3e3;border-bottom:1.5px dashed #e3d8c1}
.zsa{display:grid;grid-template-columns:repeat(3,1fr)}
.zsa div{padding:9px 4px;text-align:center;border-left:1.5px dashed #ece4d2;display:flex;flex-direction:column;gap:1px;min-width:0}
.zsa div:first-child{border-left:none}
.zsa b{white-space:nowrap;font-family:"Noto Serif SC","Noto Serif CJK SC",serif;font-weight:500}
.zsa .zpy{font-size:13px}.zsa small{font-size:12.5px;color:#5a5245}
.zid{margin:6px 0 12px;border-radius:16px;padding:12px 14px;background:#fdf0ec;box-shadow:inset 0 0 0 1.5px #efc2b5;position:relative}
.zil{position:absolute;right:12px;top:10px;font-size:11px;font-weight:800;color:#b3523b;background:#fff;border-radius:7px;padding:2px 7px}
.zid .zhz{font-size:26px}.zid b{display:block;margin-top:3px}.zid p{margin:4px 0 0;font-size:14px;color:#5a5245}
.zwd{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0 12px}
.zwd span{display:inline-flex;align-items:baseline;gap:5px;padding:5px 10px;border-radius:12px;background:#fff;box-shadow:inset 0 0 0 1.3px #e5dcc8}
.zwd b{font-family:"Noto Serif SC","Noto Serif CJK SC",serif;font-weight:500;font-size:17px}.zwd em{font-style:normal;font-size:13px}.zwd small{font-size:12.5px;color:#5a5245}
.zpl{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:6px 0 12px}
.zpc{background:#fff;border-radius:14px;padding:10px 12px;box-shadow:inset 0 0 0 1.5px #ece4d2;display:flex;flex-direction:column;gap:1px}
.zpc b{font-size:15px}.zpc .zhz{font-size:18px}.zpc .zpy{font-size:13px}.zpc small{font-size:12.5px;color:#6a6254}
/* ---- 단어집 ---- */
.zv{--zu:#93d3d8;--zd:#2f8f97}
.zv .ztab{display:flex;gap:6px;margin:0 0 12px}
.zv .ztab button{flex:1;padding:10px 4px;border-radius:12px;border:none;background:var(--card);font:inherit;font-size:14.5px;font-weight:700;box-shadow:inset 0 0 0 1.5px var(--bd);color:var(--mut);cursor:pointer}
.zv .ztab button.on{background:color-mix(in srgb,var(--zu) 45%,var(--card));box-shadow:inset 0 0 0 2px var(--zd);color:var(--tx)}
.zv .zlh{background:var(--card);border-radius:16px;padding:14px 16px;margin-bottom:12px;box-shadow:0 2px 10px rgba(90,70,40,.1);display:flex;align-items:center;gap:12px}
.zv .zlh .n{font:22px Jua;width:44px;height:44px;border-radius:12px;background:var(--zu);display:flex;align-items:center;justify-content:center;flex:none}
.zv .zlh .t{font-size:21px;font-weight:700;font-family:"Noto Sans SC","Noto Sans CJK SC",sans-serif}.zv .zlh small{display:block;color:var(--mut);font-size:13px}
.zv .zctl{background:var(--card);border-radius:18px;padding:14px 14px 12px;box-shadow:0 2px 10px rgba(90,70,40,.1)}
.zv .zlb{font:15px Jua;color:#3d5f62;margin:0 0 8px}
.zv .ztl{display:grid;grid-template-columns:repeat(5,1fr);gap:5px}
.zv .ztl span{display:flex;flex-direction:column;align-items:center;gap:1px;padding:7px 0 6px;border-radius:12px;font-size:13.5px;font-weight:800}
.zv .zstk{position:sticky;top:0;z-index:30;margin:8px -16px 0;padding:10px 16px 10px 66px;display:flex;align-items:center;gap:10px;background:rgba(243,237,225,.95);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border-bottom:1.5px solid transparent;transition:box-shadow .2s}
.zv .zstk.stuck{box-shadow:0 6px 14px rgba(90,70,40,.16);border-bottom-color:var(--bd)}
.zv .zstl{font:14px/1.15 Jua;color:#3d5f62;flex:none}
.zv .zhb{flex:1;display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.zv .zhb button{display:flex;align-items:center;justify-content:center;gap:4px;padding:10px 0;border-radius:12px;border:none;background:#fff;box-shadow:inset 0 0 0 2px var(--zd);color:#24585d;font:inherit;font-size:15px;font-weight:800;cursor:pointer;-webkit-tap-highlight-color:transparent}
.zv .zhb button.on{background:var(--zd);color:#fff}
.zv .zsec{display:flex;align-items:center;gap:8px;margin:20px 0 8px;padding:10px 12px;border-radius:14px;background:color-mix(in srgb,var(--zu) 55%,var(--card));box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--zd) 45%,transparent);scroll-margin-top:80px}
.zv .zsec .ic{width:30px;height:30px;border-radius:9px;background:var(--zd);color:#fff;font:17px Jua;display:flex;align-items:center;justify-content:center;flex:none}
.zv .zsec b{font:19px Jua;color:#1f3f42}.zv .zsec .ch{margin-left:auto;display:flex;gap:4px}.zv .zsec .ch span{font-size:12px;font-weight:700;padding:3px 8px;border-radius:99px;background:#fff;color:#2f6d73;white-space:nowrap}
.zv .ztb{background:var(--card);border-radius:16px;box-shadow:0 2px 10px rgba(90,70,40,.1);overflow:hidden}
.zv .zhd{display:grid;grid-template-columns:86px 1fr 34px 34px;gap:8px;padding:9px 14px;background:color-mix(in srgb,var(--zu) 35%,var(--card));font-size:12.5px;font-weight:700;color:#3d5f62}
.zv .zhd span:first-child{text-align:center}
.zv .zw{display:grid;grid-template-columns:86px 1fr 34px 34px;grid-template-areas:"h p t s" "h k t s";gap:0 8px;padding:11px 14px;border-top:1.5px dashed var(--bd);align-items:center}
.zv .zw:first-child{border-top:none}
.zv .zh{grid-area:h;font-family:"Noto Serif SC","Noto Serif CJK SC","Songti SC",serif;font-size:31px;line-height:1.2;text-align:center;padding:6px 0;border-radius:12px;background:#fff;box-shadow:inset 0 0 0 1.5px #ece4d2;white-space:nowrap;color:#1f1b16}
.zv .zh.l3{font-size:25px}.zv .zh.l4{font-size:19px}.zv .zh.l5{font-size:16px}
.zv .zp{grid-area:p;display:flex;align-items:center;gap:6px;flex-wrap:wrap;min-width:0}
.zv .zp .zpy{font-size:20px}
.zv .zcv{display:inline-flex;gap:1px;padding:2px 5px;border-radius:8px;background:#f4eee2}
.zv .zk{grid-area:k;font-size:15px;color:#3b352c;word-break:keep-all}
.zv .zsp{grid-area:s;width:34px;height:34px;border-radius:50%;border:none;background:color-mix(in srgb,var(--zu) 40%,#fff);display:flex;align-items:center;justify-content:center;cursor:pointer;-webkit-tap-highlight-color:transparent}
.zv .zsp.ing{background:var(--zd)}.zv .zsp.ing svg{fill:#fff;stroke:#fff}
.zv .cov{border-radius:8px;background:repeating-linear-gradient(135deg,#e6dcc8 0 6px,#efe7d6 6px 12px)!important;color:transparent!important;cursor:pointer;box-shadow:none!important}
.zv .cov *{color:transparent!important}.zv .cov .zcv{visibility:hidden}
.zv .zw.star{background:#fff8dc}
.zv .zst{grid-area:t;width:34px;height:34px;border-radius:50%;border:none;background:#f4eee2;display:flex;align-items:center;justify-content:center;cursor:pointer;-webkit-tap-highlight-color:transparent;color:#b9ad96}
.zv .zst svg{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:2;stroke-linejoin:round}
.zv .zst.on{background:#ffe9a3;color:#d28f00}.zv .zst.on svg{fill:#f2b01e}
.zv .zfl{display:flex;gap:6px;margin:12px 0 0}
.zv .zfl button{flex:1;padding:10px 6px;border-radius:12px;border:none;background:#fff;box-shadow:inset 0 0 0 2px #e0b53a;color:#8a6200;font:inherit;font-size:14.5px;font-weight:800;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:5px;-webkit-tap-highlight-color:transparent}
.zv .zfl button svg{width:17px;height:17px;fill:#f2b01e;stroke:#d28f00;stroke-width:2;stroke-linejoin:round}
.zv .zfl button.on{background:#f2b01e;color:#3b2a00}.zv .zfl button.on svg{fill:#fff;stroke:#fff}
.zv .zfl button.clr{flex:none;padding:10px 12px;box-shadow:inset 0 0 0 1.5px var(--bd);color:var(--mut);font-weight:700}
.zv .zfl button.clr.ask{background:#e2574c;color:#fff;box-shadow:none}
.zv .zemp{text-align:center;color:var(--mut);padding:34px 10px;font-size:15px;line-height:1.6;background:var(--card);border-radius:16px;margin-top:14px}
.zv .zfoot{font-size:12.5px;color:var(--mut);text-align:center;margin:14px 0 4px}
`;document.head.appendChild(st);

// ----- 단어집 -----
const ZVOC=[{"l": 1, "t": ["好久不见!", "Hǎojiǔ bújiàn!", "오랜만이야!"], "secs": [{"s": "단어 익히기 1", "p": 22, "w": [["好久", "hǎojiǔ", "오랫동안"], ["不见", "bújiàn", "만나지 않다"], ["暑假", "shǔjià", "여름 방학"], ["过", "guò", "지내다, 지나다"], ["得", "de", "[뒤에 정도를 나타내는 말을 연결함]"], ["怎么样", "zěnmeyàng", "어떠하다"], ["每", "měi", "매, ~마다"], ["天", "tiān", "날, 일"], ["看", "kàn", "보다"], ["书", "shū", "책"], ["运动", "yùndòng", "운동(하다)"], ["非常", "fēicháng", "매우, 대단히"]]}, {"s": "단어 익히기 2", "p": 24, "w": [["到", "dào", "[동작의 결과가 있음을 나타냄]"], ["同学", "tóngxué", "학우"], ["真", "zhēn", "정말로"], ["高兴", "gāoxìng", "기쁘다"], ["觉得", "juéde", "~라고 느끼다"], ["学期", "xuéqī", "학기"], ["努力", "nǔlì", "열심히"], ["学习", "xuéxí", "공부하다"], ["一起", "yìqǐ", "함께"], ["加油", "jiāyóu", "힘을 내다"]]}, {"s": "실력 쌓기", "p": 26, "w": [["熊猫", "xióngmāo", "판다"], ["吃", "chī", "먹다"], ["多", "duō", "많다"], ["玩儿", "wánr", "놀다"], ["开心", "kāixīn", "즐겁다"], ["收", "shōu", "받다"], ["个", "ge", "개[단위]"], ["礼物", "lǐwù", "선물"], ["相信", "xiāngxìn", "믿다"], ["能", "néng", "~할 수 있다"], ["做", "zuò", "하다"], ["昨天", "zuótiān", "어제"], ["没", "méi", "~않다"], ["你", "nǐ", "너"]]}, {"s": "바꿔 말하기", "p": 27, "w": [["不错", "búcuò", "좋다"], ["还", "hái", "그런대로"], ["行", "xíng", "괜찮다"], ["不怎么样", "bù zěnmeyàng", "별로 좋지 않다"], ["有意思", "yǒu yìsi", "재미있다"], ["紧张", "jǐnzhāng", "긴장하다"], ["太", "tài", "너무"], ["可惜", "kěxī", "아깝다"]]}]}, {"l": 2, "t": ["我喜欢弹钢琴", "Wǒ xǐhuan tán gāngqín", "나는 피아노 치는 걸 좋아해"], "secs": [{"s": "단어 익히기 1", "p": 36, "w": [["想", "xiǎng", "~하고 싶다"], ["参加", "cānjiā", "참가하다"], ["什么", "shénme", "무슨, 무엇"], ["社团", "shètuán", "동아리"], ["电影", "diànyǐng", "영화"], ["呢", "ne", "~는요 [의문을 나타냄]"], ["音乐", "yīnyuè", "음악"], ["喜欢", "xǐhuan", "좋아하다"], ["弹", "tán", "연주하다"], ["钢琴", "gāngqín", "피아노"], ["报名", "bàomíng", "신청하다"]]}, {"s": "단어 익히기 2", "p": 38, "w": [["欢迎", "huānyíng", "환영하다"], ["条件", "tiáojiàn", "조건"], ["只要", "zhǐyào", "~하기만 하면"], ["快", "kuài", "빨리"], ["时间", "shíjiān", "시간"], ["从", "cóng", "~부터"], ["到", "dào", "~까지"], ["联系", "liánxì", "연락(하다)"], ["方式", "fāngshì", "방식"], ["加入", "jiārù", "가입하다"], ["生活", "shēnghuó", "생활"], ["会", "huì", "~할 것이다"], ["更", "gèng", "더욱"], ["精彩", "jīngcǎi", "근사하다"]]}, {"s": "실력 쌓기", "p": 40, "w": [["周末", "zhōumò", "주말"], ["他", "tā", "그"], ["韩国", "Hánguó", "한국"], ["足球", "zúqiú", "축구"], ["比赛", "bǐsài", "경기"], ["有", "yǒu", "있다"], ["打", "dǎ", "(손이나 기구로) 치다"], ["篮球", "lánqiú", "농구"], ["愿意", "yuànyì", "원하다"], ["可以", "kěyǐ", "~해도 된다, 가능하다"]]}, {"s": "바꿔 말하기", "p": 41, "w": [["科学", "kēxué", "과학"], ["实验", "shíyàn", "실험"], ["动漫", "dòngmàn", "애니메이션"], ["画", "huà", "(그림을) 그리다"], ["画儿", "huàr", "그림"], ["体育", "tǐyù", "체육"], ["乒乓球", "pīngpāngqiú", "탁구"], ["努力", "nǔlì", "노력하다"], ["成功", "chénggōng", "성공하다"], ["问题", "wèntí", "질문, 문제"], ["找", "zhǎo", "찾다"], ["天气", "tiānqì", "날씨"], ["出去", "chūqu", "나가다"], ["拍照", "pāizhào", "사진을 찍다"]]}]}, {"l": 3, "t": ["你哪儿不舒服?", "Nǐ nǎr bù shūfu?", "어디가 불편하니?"], "secs": [{"s": "단어 익히기 1", "p": 50, "w": [["怎么", "zěnme", "어째서, 어떻게"], ["了", "le", "[상황의 출현을 나타냄]"], ["看起来", "kàn qilai", "보기에"], ["脸色", "liǎnsè", "안색"], ["不太", "bú tài", "그다지 ~하지 않다"], ["有点儿", "yǒudiǎnr", "조금, 약간"], ["头", "tóu", "머리"], ["疼", "téng", "아프다"], ["得", "děi", "~해야 한다"], ["医院", "yīyuàn", "병원"], ["看", "kàn", "진찰 받다"], ["陪", "péi", "동반하다"], ["不用", "búyòng", "~할 필요가 없다"]]}, {"s": "단어 익히기 2", "p": 52, "w": [["哪儿", "nǎr", "어디"], ["舒服", "shūfu", "편안하다"], ["嗓子", "sǎngzi", "목"], ["感冒", "gǎnmào", "감기에 걸리다"], ["要", "yào", "~해야 한다"], ["打针", "dǎzhēn", "주사를 맞다"], ["严重", "yánzhòng", "심각하다"], ["(一)点儿", "(yì)diǎnr", "조금, 다소"], ["药", "yào", "약"], ["行", "xíng", "좋다, 되다"], ["大夫", "dàifu", "의사"]]}, {"s": "실력 쌓기", "p": 54, "w": [["准备", "zhǔnbèi", "준비하다"], ["节目", "jiémù", "프로그램"], ["一定", "yídìng", "꼭, 반드시"], ["按时", "ànshí", "제때"], ["喝", "hē", "마시다"], ["热", "rè", "뜨겁다"], ["水", "shuǐ", "물"], ["肚子", "dùzi", "배, 복부"], ["后悔", "hòuhuǐ", "후회하다"]]}, {"s": "바꿔 말하기", "p": 55, "w": [["好好儿", "hǎohāor", "잘"], ["休息", "xiūxi", "쉬다"], ["锻炼", "duànliàn", "단련하다"], ["身体", "shēntǐ", "신체"], ["戴", "dài", "착용하다"], ["上", "shang", "[동작의 결과가 있음을 나타냄]"], ["口罩", "kǒuzhào", "마스크"], ["流", "liú", "흐르다"], ["鼻涕", "bítì", "콧물"], ["发烧", "fāshāo", "열이 나다"], ["咳嗽", "késou", "기침하다"]]}]}];
const ZSN={'단어 익히기 1':'단어 익히기 ①','단어 익히기 2':'단어 익히기 ②','실력 쌓기':'실력 쌓기 단어','바꿔 말하기':'바꿔 말하기 단어'};
const ZV={l:1,h:{},s:{},f:0};try{const o=JSON.parse(localStorage.getItem('pungsan-zvoc')||'{}');if(o.l)ZV.l=o.l;if(o.h)ZV.h=o.h;if(o.s)ZV.s=o.s;if(o.f)ZV.f=1}catch(e){}
const zvSave=()=>{try{localStorage.setItem('pungsan-zvoc',JSON.stringify(ZV))}catch(e){}};
const EYE='<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
const STAR='<svg viewBox="0 0 24 24"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z"/></svg>';
const zvCnt=l=>Object.keys(ZV.s).filter(k=>k.startsWith(l+'-')).length;
const SPK='<svg width="19" height="19" viewBox="0 0 24 24" fill="#24585d" stroke="#24585d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7" fill="none"/><path d="M19 6a8.5 8.5 0 0 1 0 12" fill="none"/></svg>';
// 다음자(여러 소리)는 맞는 소리가 나도록 읽을 글자를 바꿔 줌
const SAY={'得|de':'的','了|le':'了','上|shang':'上','个|ge':'个'};
function zvPage(n){const L=ZVOC[ZV.l-1],tot=L.secs.reduce((a,s)=>a+s.w.length,0),all=ZVOC.reduce((a,x)=>a+x.secs.reduce((b,s)=>b+s.w.length,0),0);
 let h=`<div class="shd"><h2 style="--hlc:#93d3d8">단어집</h2><p class="tag">중국어 회화 · 1~3과 단어 ${all}개</p></div><div class="zv">`;
 h+=`<div class="ztab">${ZVOC.map(x=>`<button class="${x.l==ZV.l?'on':''}" data-l="${x.l}" onclick="zvGo(${x.l})">${x.l}과${zvCnt(x.l)?` ★${zvCnt(x.l)}`:''}</button>`).join('')}</div>`;
 h+=`<div class="zlh"><span class="n">${ZV.l}</span><div><div class="t" lang="zh-CN">${L.t[0]}</div><small>${L.t[1]} · ${L.t[2]} · ${tot}단어</small></div></div>`;
 h+=`<div class="zctl"><div class="zlb">성조 색깔</div><div class="ztl">${[1,2,3,4,0].map(t=>`<span style="color:${ZC[t]};background:color-mix(in srgb,${ZC[t]} 13%,#fff);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,${ZC[t]} 45%,transparent)">${CV(t,24)}${ZT[t]}</span>`).join('')}</div></div>`;
 h+=`<div class="zfl"><button class="${ZV.f?'on':''}" onclick="zvFilt()">${STAR}<span>별표 단어만 보기 <span data-zn>${zvCnt(ZV.l)}</span>개</span></button><button class="clr" onclick="zvClr(this)">모두 해제</button></div>`;
 h+=`<div class="zstk"><span class="zstl">가리고<br>외우기</span><div class="zhb">${[['h','한자'],['p','병음'],['k','뜻']].map(([k,t])=>`<button class="${ZV.h[k]?'on':''}" onclick="zvHide('${k}')">${EYE}${t}</button>`).join('')}</div></div>`;
 let shown=0;
 L.secs.forEach((s,si)=>{if(ZV.f&&!s.w.some((_,wi)=>ZV.s[ZV.l+'-'+si+'-'+wi]))return;h+=`<div class="zsec"><span class="ic">${si+1}</span><b>${ZSN[s.s]}</b><span class="ch"><span>${s.p}쪽</span><span>${s.w.length}개</span></span></div><div class="ztb"><div class="zhd"><span>한자</span><span>병음 · 성조 · 뜻</span><span></span></div>`;
  s.w.forEach(([hz,py,km],wi)=>{const K=ZV.l+'-'+si+'-'+wi,st=!!ZV.s[K];if(ZV.f&&!st)return;shown++;const S=sylls(py).filter(x=>!x.sp&&x.tn>=0),n=[...hz].length;
   h+=`<div class="zw${st?' star':''}"><div class="zh${n>=3?' l'+Math.min(n,5):''}${ZV.h.h?' cov':''}" lang="zh-CN" onclick="zvPeek(this)">${esc(hz)}</div><div class="zp${ZV.h.p?' cov':''}" onclick="zvPeek(this)"><span class="zpy">${PY(py)}</span><span class="zcv">${S.map(x=>CV(x.tn,15)).join('')}</span></div><div class="zk${ZV.h.k?' cov':''}" onclick="zvPeek(this)">${esc(km)}</div><button class="zsp" aria-label="발음 듣기" onclick="zvSay(this,${si},${wi})">${SPK}</button></div>`.replace('<button class="zsp"',`<button class="zst${st?' on':''}" aria-label="모르는 단어 별표" aria-pressed="${st}" onclick="zvStar(this,'${K}')">${STAR}</button><button class="zsp"`)});h+='</div>'});
 if(ZV.f&&!shown)h+=`<div class="zemp">별표 친 단어가 없어요.<br>모르는 단어 옆 ☆를 눌러 표시해 보세요.</div>`;
 h+=`<p class="zfoot">🔊 발음은 AI 중국어 음성으로 미리 녹음해 두었어요.</p></div>`;return h}
function zvAfter(){const K=document.querySelector('.zv .zstk');if(!K)return;const f=()=>{if(!K.isConnected){removeEventListener('scroll',f);return}K.classList.toggle('stuck',K.getBoundingClientRect().top<=1&&scrollY>40)};addEventListener('scroll',f,{passive:true});f()}
const zvRe=()=>{show(zvPage(ZN),'voc:'+ZN);zvAfter()};
window.zvGo=l=>{ZV.l=l;zvSave();zvRe();scrollTo(0,0)};
const zvUpd=()=>{document.querySelectorAll('.zv [data-zn]').forEach(e=>e.textContent=zvCnt(ZV.l));document.querySelectorAll('.zv .ztab button').forEach(b=>{const l=+b.dataset.l,c=zvCnt(l);b.textContent=l+'과'+(c?' ★'+c:'')})};
window.zvStar=(b,k)=>{if(ZV.s[k])delete ZV.s[k];else ZV.s[k]=1;zvSave();if(ZV.f){const y=scrollY;zvRe();scrollTo(0,y);return}const on=!!ZV.s[k];b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);b.closest('.zw').classList.toggle('star',on);zvUpd()};
window.zvFilt=()=>{ZV.f=ZV.f?0:1;zvSave();zvRe();scrollTo(0,0)};
window.zvClr=b=>{if(!zvCnt(ZV.l))return;if(!b.classList.contains('ask')){b.classList.add('ask');b.textContent='정말 해제?';setTimeout(()=>{if(b.isConnected){b.classList.remove('ask');b.textContent='모두 해제'}},2500);return}
 Object.keys(ZV.s).forEach(k=>{if(k.startsWith(ZV.l+'-'))delete ZV.s[k]});zvSave();const y=scrollY;zvRe();scrollTo(0,y)};
window.zvHide=k=>{ZV.h[k]=!ZV.h[k];zvSave();const y=scrollY;zvRe();scrollTo(0,y)};
window.zvPeek=el=>{if(el.classList.contains('cov')){el.classList.remove('cov');el.dataset.pk=1}else if(el.dataset.pk){el.classList.add('cov');delete el.dataset.pk}};
let zvVoice=null;const zvPick=()=>{if(!('speechSynthesis' in window))return null;const vs=speechSynthesis.getVoices();return vs.find(v=>/^zh[-_]CN/i.test(v.lang))||vs.find(v=>/^zh/i.test(v.lang)&&!/HK|TW/i.test(v.lang))||vs.find(v=>/^zh|^cmn/i.test(v.lang))||null};
if('speechSynthesis' in window){try{speechSynthesis.onvoiceschanged=()=>{zvVoice=zvPick()}}catch(e){}}
const ZAUD={"好久|hǎojiǔ":"b000","不见|bújiàn":"b001","暑假|shǔjià":"b002","过|guò":"b003","得|de":"b004","怎么样|zěnmeyàng":"b005","每|měi":"b006","天|tiān":"b007","看|kàn":"b008","书|shū":"b009","运动|yùndòng":"b010","非常|fēicháng":"b011","到|dào":"b012","同学|tóngxué":"b013","真|zhēn":"b014","高兴|gāoxìng":"b015","觉得|juéde":"b016","学期|xuéqī":"b017","努力|nǔlì":"b018","学习|xuéxí":"b019","一起|yìqǐ":"b020","加油|jiāyóu":"b021","熊猫|xióngmāo":"b022","吃|chī":"b023","多|duō":"b024","玩儿|wánr":"b025","开心|kāixīn":"b026","收|shōu":"b027","个|ge":"b028","礼物|lǐwù":"b029","相信|xiāngxìn":"b030","能|néng":"b031","做|zuò":"b032","昨天|zuótiān":"b033","没|méi":"b034","你|nǐ":"b035","不错|búcuò":"b036","还|hái":"b037","行|xíng":"b038","不怎么样|bù zěnmeyàng":"b039","有意思|yǒu yìsi":"b040","紧张|jǐnzhāng":"b041","太|tài":"b042","可惜|kěxī":"b043","想|xiǎng":"b044","参加|cānjiā":"b045","什么|shénme":"b046","社团|shètuán":"b047","电影|diànyǐng":"b048","呢|ne":"b049","音乐|yīnyuè":"b050","喜欢|xǐhuan":"b051","弹|tán":"b052","钢琴|gāngqín":"b053","报名|bàomíng":"b054","欢迎|huānyíng":"b055","条件|tiáojiàn":"b056","只要|zhǐyào":"b057","快|kuài":"b058","时间|shíjiān":"b059","从|cóng":"b060","联系|liánxì":"b061","方式|fāngshì":"b062","加入|jiārù":"b063","生活|shēnghuó":"b064","会|huì":"b065","更|gèng":"b066","精彩|jīngcǎi":"b067","周末|zhōumò":"b068","他|tā":"b069","韩国|Hánguó":"b070","足球|zúqiú":"b071","比赛|bǐsài":"b072","有|yǒu":"b073","打|dǎ":"b074","篮球|lánqiú":"b075","愿意|yuànyì":"b076","可以|kěyǐ":"b077","科学|kēxué":"b078","实验|shíyàn":"b079","动漫|dòngmàn":"b080","画|huà":"b081","画儿|huàr":"b082","体育|tǐyù":"b083","乒乓球|pīngpāngqiú":"b084","成功|chénggōng":"b085","问题|wèntí":"b086","找|zhǎo":"b087","天气|tiānqì":"b088","出去|chūqu":"b089","拍照|pāizhào":"b090","怎么|zěnme":"b091","了|le":"b092","看起来|kàn qilai":"b093","脸色|liǎnsè":"b094","不太|bú tài":"b095","有点儿|yǒudiǎnr":"b096","头|tóu":"b097","疼|téng":"b098","得|děi":"b099","医院|yīyuàn":"b100","陪|péi":"b101","不用|búyòng":"b102","哪儿|nǎr":"b103","舒服|shūfu":"b104","嗓子|sǎngzi":"b105","感冒|gǎnmào":"b106","要|yào":"b107","打针|dǎzhēn":"b108","严重|yánzhòng":"b109","(一)点儿|(yì)diǎnr":"b110","药|yào":"b111","大夫|dàifu":"b112","准备|zhǔnbèi":"b113","节目|jiémù":"b114","一定|yídìng":"b115","按时|ànshí":"b116","喝|hē":"b117","热|rè":"b118","水|shuǐ":"b119","肚子|dùzi":"b120","后悔|hòuhuǐ":"b121","好好儿|hǎohāor":"b122","休息|xiūxi":"b123","锻炼|duànliàn":"b124","身体|shēntǐ":"b125","戴|dài":"b126","上|shang":"b127","口罩|kǒuzhào":"b128","流|liú":"b129","鼻涕|bítì":"b130","发烧|fāshāo":"b131","咳嗽|késou":"b132"};
let zvAu=null,zvEl=null;
window.zvSay=(btn,si,wi)=>{const [hz,py]=ZVOC[ZV.l-1].secs[si].w[wi],f=ZAUD[hz+'|'+py];
 if(f){try{if(zvAu)zvAu.pause();if('speechSynthesis' in window)speechSynthesis.cancel()}catch(e){}document.querySelectorAll('.zv .zsp.ing').forEach(b=>b.classList.remove('ing'));btn.classList.add('ing');
  const au=new Audio('audio/zh/'+f+'.mp3');zvAu=au;zvEl=btn;const done=()=>btn.classList.remove('ing');au.onended=done;au.onerror=()=>{done();zvTTS(btn,hz,py)};au.play().catch(()=>{done();zvTTS(btn,hz,py)});return}
 zvTTS(btn,hz,py)};
const zvTTS=(btn,hz,py)=>{if(!('speechSynthesis' in window)){soonMsg('이 기기에서는 발음 듣기를 쓸 수 없어요.');return}
 zvVoice=zvVoice||zvPick();if(!zvVoice&&speechSynthesis.getVoices().length){soonMsg('이 휴대폰에는 중국어 음성이 없어요. 설정 > 음성(TTS)에서 중국어를 추가해 주세요.');return}
 speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(SAY[hz+'|'+py]||hz);u.lang='zh-CN';if(zvVoice)u.voice=zvVoice;u.rate=.75;
 document.querySelectorAll('.zv .zsp.ing').forEach(b=>b.classList.remove('ing'));btn.classList.add('ing');u.onend=u.onerror=()=>btn.classList.remove('ing');speechSynthesis.speak(u)};
const SPK2=SPK.replace('width="19" height="19"','width="16" height="16"');
let zdQ=null;
const zdStop=()=>{try{if(zvAu)zvAu.pause();if('speechSynthesis' in window)speechSynthesis.cancel()}catch(e){}zvAu=null;zvEl=null;zdQ=null;document.querySelectorAll('.zdsp.ing,.zdall.ing,.zv .zsp.ing').forEach(b=>b.classList.remove('ing'));document.querySelectorAll('.zln.ply').forEach(b=>b.classList.remove('ply'))};
const zdPlay=(ln,done)=>{const f=ln.dataset.a,b=ln.querySelector('.zdsp');ln.classList.add('ply');if(b)b.classList.add('ing');
 const au=new Audio('audio/zh/'+f+'.mp3');zvAu=au;zvEl=ln;const end=()=>{ln.classList.remove('ply');if(b)b.classList.remove('ing');if(zvAu===au)done&&done()};au.onended=end;au.onerror=()=>{end()};au.play().catch(()=>{ln.classList.remove('ply');if(b)b.classList.remove('ing');soonMsg('소리를 재생하지 못했어요.')})};
window.zdSay=btn=>{const ln=btn.closest('.zln'),was=btn.classList.contains('ing');zdStop();if(!was)zdPlay(ln)};
window.zdAll=btn=>{const was=btn.classList.contains('ing');zdStop();if(was)return;const L=[...btn.closest('.zdl').querySelectorAll('.zln[data-a]')];btn.classList.add('ing');const q={};zdQ=q;
 const nx=i=>{if(zdQ!==q)return;if(i>=L.length){btn.classList.remove('ing');zdQ=null;return}L[i].scrollIntoView({block:'nearest',behavior:'smooth'});zdPlay(L[i],()=>setTimeout(()=>nx(i+1),350))};nx(0)};
// 화면을 벗어나면(다른 화면으로 이동·뒤로 가기·앱 나가기) 소리 멈춤
addEventListener('hashchange',()=>zdStop());addEventListener('popstate',()=>zdStop());
document.addEventListener('visibilitychange',()=>{if(document.hidden)zdStop()});addEventListener('pagehide',()=>zdStop());
setInterval(()=>{if((zvAu||zdQ)&&zvEl&&!zvEl.isConnected)zdStop()},200);
const ZDLG={"好久不见!|Hǎojiǔ bújiàn!":"d000","暑假过得怎么样?|Shǔjià guò de zěnmeyàng?":"d001","我每天看书、运动，过得非常好。|Wǒ měi tiān kàn shū、yùndòng, guò de fēicháng hǎo.":"d002","今天见到同学们，真高兴!|Jīntiān jiàndào tóngxuémen, zhēn gāoxìng!":"d003","我也觉得很高兴。|Wǒ yě juéde hěn gāoxìng.":"d004","这个学期我们努力学习吧。|Zhège xuéqī wǒmen nǔlì xuéxí ba.":"d005","好，我们一起加油!|Hǎo, wǒmen yìqǐ jiāyóu!":"d006","你想参加什么社团?|Nǐ xiǎng cānjiā shénme shètuán?":"d007","电影社团，你呢?|Diànyǐng shètuán, nǐ ne?":"d008","音乐社团，我喜欢弹钢琴。|Yīnyuè shètuán, wǒ xǐhuan tán gāngqín.":"d009","我们去报名吧。|Wǒmen qù bàomíng ba.":"d010","音乐社团欢迎你!|Yīnyuè shètuán huānyíng nǐ!":"d011","报名条件：只要喜欢音乐，就快来报名。|Bàomíng tiáojiàn: Zhǐyào xǐhuan yīnyuè, jiù kuài lái bàomíng.":"d012","报名时间：从9月20日到9月28日|Bàomíng shíjiān: cóng jiǔ yuè èrshí rì dào jiǔ yuè èrshíbā rì":"d013","加入我们，你的高中生活会更精彩!|Jiārù wǒmen, nǐ de gāozhōng shēnghuó huì gèng jīngcǎi!":"d014","你怎么了? 看起来脸色不太好。|Nǐ zěnme le? Kàn qilai liǎnsè bú tài hǎo.":"d015","我有点儿头疼。|Wǒ yǒudiǎnr tóu téng.":"d016","你得去医院看看。我陪你一起去吧。|Nǐ děi qù yīyuàn kànkan. Wǒ péi nǐ yìqǐ qù ba.":"d017","不用，我一个人可以。谢谢。|Búyòng, wǒ yí ge rén kěyǐ. Xièxie.":"d018","你哪儿不舒服?|Nǐ nǎr bù shūfu?":"d019","我头疼，嗓子也疼。|Wǒ tóu téng, sǎngzi yě téng.":"d020","我看看。你感冒了。|Wǒ kànkan. Nǐ gǎnmào le.":"d021","要打针吗?|Yào dǎzhēn ma?":"d022","不严重，不用打针，吃点儿药就行。|Bù yánzhòng, búyòng dǎzhēn, chī diǎnr yào jiù xíng.":"d023","好，谢谢大夫。|Hǎo, xièxie dàifu.":"d024"};
VOCAB[ZN]={sub:'1~3과 단어 '+ZVOC.reduce((a,x)=>a+x.secs.reduce((b,s)=>b+s.w.length,0),0)+'개 · 발음 듣기',page:zvPage,after:zvAfter};

// ----- 발음 0-1 -----
NOTE[ZN]['0-1']={pg:P(12,17),b:[
 ['h','01 중국어의 음절 구성'],
 ['p','중국어 음절 = ==성모== + ==운모== + ==성조==\n예: hǎo → 성모 h + 운모 ao + 성조 3성'],
 ['tbl',['용어','뜻'],[['한어(汉语 Hànyǔ)','중국 인구의 약 91%인 ==한족==이 쓰는 말'],['보통화(普通话 pǔtōnghuà)','베이징 발음을 표준으로 한 ==표준어=='],['간화자(简化字 jiǎnhuàzì)','획을 줄여 간단하게 만든 ==간체자== (예: 韓國 → 韩国)'],['한어병음(汉语拼音 Hànyǔ Pīnyīn)','로마자로 중국어 발음을 적는 방법']]],
 ['h','02 성조 — 소리의 높낮이'],
 ['p','성조가 다르면 ==뜻도 달라져요.== 기본 성조는 4개 + 가볍게 읽는 경성.'],
 ['zx',[['八 · 拔 · 靶 · 爸','bā · bá · bǎ · bà','8 · 뽑다 · 과녁 · 아빠']]],
 ['tbl',['성조','높낮이','소리'],[['1성 ā','5 → 5','높고 평평하게 쭉'],['2성 á','3 → 5','중간에서 높이 올리기'],['3성 ǎ','2 → 1 → 4','낮게 내렸다가 살짝 올리기'],['4성 à','5 → 1','높은 곳에서 뚝 떨어뜨리기'],['경성','표기 없음','앞 성조에 따라 짧고 가볍게']]],
 ['zx',[['妈妈 · 爷爷 · 奶奶 · 弟弟','māma · yéye · nǎinai · dìdi','엄마 · 할아버지 · 할머니 · 남동생 (뒤 글자는 경성)']]],
 ['tip','**3성 + 3성** → 앞의 3성은 ==2성==으로 읽어요. (nǐ hǎo → ní hǎo, 표기는 그대로)\n**不(bù) + 4성** → ==bú==로 읽고 표기도 바꿔요. (bú shì)\n**一(yī)** → 1·2·3성 앞에서는 ==yì==, 4성 앞에서는 ==yí==.'],
 ['h','03 성모 — 음절 첫소리 (21개)'],
 ['tbl',['묶음','성모','함께 연습하는 운모'],[['입술소리','b p m f','+ o'],['혀끝소리','d t n l','+ e'],['혀뿌리소리','g k h','+ e'],['혓바닥소리','j q x','+ i'],['혀를 만 소리','zh ch sh r','+ -i'],['혀와 이 소리','z c s','+ -i']]],
 ['h','04 운모 — 성모 뒤의 소리'],
 ['p','단운모: ==a o e i u ü==\ni, u, ü가 혼자 쓰이면 ==yi, wu, yu==로 적어요.'],
 ['wd',[['菜','cài','요리'],['猫','māo','고양이'],['山','shān','산'],['狗','gǒu','개'],['门','mén','문'],['二','èr','2']]]
]};

// ----- 1과 회화 1-0 -----
NOTE[ZN]['1-0']={pg:P(21,25),b:[
 ['h','01 회화 1 — 오랜만에 만난 친구'],
 ['dlg','개학 날, 장하오가 한송이에게 안부를 묻습니다. (23쪽)',[
  ['장하오','==好久不见==!','Hǎojiǔ bújiàn!','오랜만이야!'],
  ['한송이','==好久不见==!','Hǎojiǔ bújiàn!','오랜만이야!'],
  ['장하오','暑假过==得怎么样==?','Shǔjià guò de zěnmeyàng?','여름 방학은 어떻게 보냈어?'],
  ['한송이','我每天看书、运动，过==得非常好==。','Wǒ měi tiān kàn shū、yùndòng, guò de fēicháng hǎo.','나는 매일 책 읽고 운동하면서 아주 잘 보냈어.']]],
 ['key','핵심 표현','**好久不见!** = 오랜만이야! (오랫동안 + 못 만났다)\n**过得怎么样?** = 어떻게 지냈어? → 대답도 ==过得 + 정도==로!'],
 ['h','02 회화 2 — 새 학기 다짐'],
 ['dlg','장하오와 한송이가 새 학기 다짐을 합니다. (25쪽)',[
  ['장하오','今天见==到==同学们，真高兴!','Jīntiān jiàndào tóngxuémen, zhēn gāoxìng!','오늘 친구들을 만나서 정말 기뻐!'],
  ['한송이','我也==觉得==很高兴。','Wǒ yě juéde hěn gāoxìng.','나도 기뻐.'],
  ['장하오','这个学期我们努力学习==吧==。','Zhège xuéqī wǒmen nǔlì xuéxí ba.','이번 학기에 우리 열심히 공부하자.'],
  ['한송이','好，我们一起==加油==!','Hǎo, wǒmen yìqǐ jiāyóu!','좋아, 우리 함께 힘내자!']]],
 ['ul',['见到 jiàndào: 보다 + **到**(결과) → 만나게 되다','吧 ba: 문장 끝에서 ==제안·권유== (~하자)','一起 yìqǐ: 一는 3성(qǐ) 앞이라 ==yì==로 읽어요']],
 ['tip','회화 질문 정답: ‘오랜만이야!’ → **好久不见!** / ‘힘을 내다’ → **加油**\n같은 得인데 이 과의 得는 경성 ==de==예요. (3과의 得 děi와 구별!)']
]};
// ----- 1과 문법 1-1 -----
NOTE[ZN]['1-1']={pg:P(26,31),b:[
 ['h','01 得 — 정도보어 (26쪽)'],
 ['pat','동사 + 得(de) + 정도보어','동작이나 상태가 ==어느 정도인지== 설명해요.'],
 ['zx',[['熊猫吃==得很多==。','Xióngmāo chī de hěn duō.','판다는 많이 먹는다.'],['今天玩儿==得很开心==。','Jīntiān wánr de hěn kāixīn.','오늘 즐겁게 놀았다.']]],
 ['tip','부정은 **得 뒤**에 不! → 熊猫吃得==不==多。 (판다는 많이 먹지 않는다)\n吃不得多 (✕)'],
 ['h','02 到 — 결과보어 (26쪽)'],
 ['pat','동사 + 到(dào)','동작의 ==결과가 있음==(해냈음, 도달함)을 나타내요.'],
 ['zx',[['我收==到==一个礼物。','Wǒ shōudào yí ge lǐwù.','나는 선물 하나를 받았다.'],['我相信你们能做==到==。','Wǒ xiāngxìn nǐmen néng zuòdào.','나는 너희들이 해낼 수 있을 거라 믿는다.']]],
 ['tip','부정은 **동사 앞**에 没! → 我昨天==没==看到你。 (나는 어제 너를 못 봤다)'],
 ['h','03 바꿔 말하기 (27쪽)'],
 ['sw','暑假过得==非常好==。','Shǔjià guò de fēicháng hǎo.',[['不错','búcuò','좋다'],['还行','hái xíng','그런대로 괜찮다'],['不怎么样','bù zěnmeyàng','별로다']]],
 ['sw','我也觉得==很高兴==。','Wǒ yě juéde hěn gāoxìng.',[['很有意思','hěn yǒu yìsi','재미있다'],['非常紧张','fēicháng jǐnzhāng','매우 긴장된다'],['太可惜','tài kěxī','너무 아깝다']]],
 ['h','04 표현 플러스 (31쪽)'],
 ['idm','开门红','kāiménhóng','좋은 출발을 하다','‘문을 여니 온통 붉다’ → 일이나 학업에서 ==좋은 출발==. 가오카오 첫날 응원할 때도 써요.'],
 ['idm','铁杵磨成针','tiěchǔ móchéng zhēn','쇠 절굿공이를 갈아 바늘을 만든다','==끈기 있게 노력하면== 무슨 일이든 이룬다.']
]};

// ----- 2과 회화 2-0 -----
NOTE[ZN]['2-0']={pg:P(35,39),b:[
 ['h','01 회화 1 — 어떤 동아리에 들까?'],
 ['dlg','김영웅과 천리나가 동아리 가입에 관해 이야기합니다. (37쪽)',[
  ['김영웅','你==想==参加==什么==社团?','Nǐ xiǎng cānjiā shénme shètuán?','너는 무슨 동아리에 들고 싶어?'],
  ['천리나','电影社团，你==呢==?','Diànyǐng shètuán, nǐ ne?','영화 동아리. 너는?'],
  ['김영웅','音乐社团，我==喜欢==弹钢琴。','Yīnyuè shètuán, wǒ xǐhuan tán gāngqín.','음악 동아리. 나는 피아노 치는 걸 좋아해.'],
  ['천리나','我们==去报名==吧。','Wǒmen qù bàomíng ba.','우리 신청하러 가자.']]],
 ['ul',['想 xiǎng + 동사: ~하고 싶다','A, 你呢? : ==되묻기== (너는?)','喜欢 + 동사구: ~하는 것을 좋아하다 (喜欢弹钢琴)']],
 ['h','02 회화 2 — 동아리 홍보 포스터'],
 ['dlg','두 사람이 음악 동아리 포스터를 봅니다. (39쪽)',[
  ['포스터','音乐社团欢迎你!','Yīnyuè shètuán huānyíng nǐ!','음악 동아리가 너를 환영해!'],
  ['포스터','报名条件：==只要==喜欢音乐，==就==快来报名。','Bàomíng tiáojiàn: Zhǐyào xǐhuan yīnyuè, jiù kuài lái bàomíng.','신청 조건: 음악을 좋아하기만 하면 빨리 와서 신청하세요.'],
  ['포스터','报名时间：==从==9月20日==到==9月28日','Bàomíng shíjiān: cóng jiǔ yuè èrshí rì dào jiǔ yuè èrshíbā rì','신청 기간: 9월 20일부터 9월 28일까지'],
  ['포스터','加入我们，你的高中生活==会更精彩==!','Jiārù wǒmen, nǐ de gāozhōng shēnghuó huì gèng jīngcǎi!','우리와 함께하면 너의 고등학교 생활이 더 근사해질 거야!']]],
 ['tip','전화번호의 숫자 1은 ==yāo==로 읽어요. (182 → yāo bā èr)\n从 A 到 B = ==A부터 B까지== (시간·장소 모두)']
]};
NOTE[ZN]['2-1']={pg:P(40,45),b:[
 ['h','01 연동문 (40쪽)'],
 ['pat','주어 + 동사(구)1 + 동사(구)2','동사가 두 개 이상이면 ==동작이 일어나는 순서대로== 써요.'],
 ['zx',[['周末我们==去看电影==吧。','Zhōumò wǒmen qù kàn diànyǐng ba.','주말에 우리 영화 보러 가자.'],['他==来韩国参加足球比赛==。','Tā lái Hánguó cānjiā zúqiú bǐsài.','그는 축구 경기에 참가하러 한국에 왔다.']]],
 ['h','02 只要 A，就 B (40쪽)'],
 ['pat','只要(zhǐyào) A，就(jiù) B','‘==A 하기만 하면 B 하다==’ — 조건만 채우면 결과를 얻을 수 있어요.'],
 ['zx',[['==只要==有时间，==就==去打篮球。','Zhǐyào yǒu shíjiān, jiù qù dǎ lánqiú.','시간만 있으면 농구하러 간다.'],['==只要==你愿意，==就==可以去。','Zhǐyào nǐ yuànyì, jiù kěyǐ qù.','네가 원하기만 하면 가도 된다.']]],
 ['h','03 바꿔 말하기 (41쪽)'],
 ['sw','音乐社团，我喜欢==弹钢琴==。','Yīnyuè shètuán, wǒ xǐhuan tán gāngqín.',[['做实验','zuò shíyàn','과학 / 실험하기'],['画画儿','huà huàr','애니 / 그림 그리기'],['打乒乓球','dǎ pīngpāngqiú','체육 / 탁구 치기']]],
 ['sw','只要==喜欢音乐==，就==快来报名==。','Zhǐyào xǐhuan yīnyuè, jiù kuài lái bàomíng.',[['努力 / 能成功','nǔlì / néng chénggōng','노력하면 성공'],['有问题 / 来找我','yǒu wèntí / lái zhǎo wǒ','질문 있으면 나에게'],['天气好 / 出去拍照','tiānqì hǎo / chūqu pāizhào','날씨 좋으면 사진 찍기']]],
 ['h','04 표현 플러스 (45쪽)'],
 ['idm','排长龙','pái chánglóng','줄이 길게 늘어서 있다','‘긴 용처럼 줄 서 있다’ → 진짜 용이 아니에요!'],
 ['idm','门庭若市','méntíng-ruòshì','문전성시','찾아오는 사람이 많아 ==문 앞이 시장 같다==.']
]};

// ----- 3과 -----
NOTE[ZN]['3-0']={pg:P(49,53),b:[
 ['h','01 회화 1 — 어디 아파?'],
 ['dlg','장하오가 아파 보이는 한송이를 걱정합니다. (51쪽)',[
  ['장하오','你==怎么了==? ==看起来==脸色不太好。','Nǐ zěnme le? Kàn qilai liǎnsè bú tài hǎo.','너 왜 그래? 안색이 별로 안 좋아 보여.'],
  ['한송이','我==有点儿==头疼。','Wǒ yǒudiǎnr tóu téng.','나 머리가 좀 아파.'],
  ['장하오','你==得==去医院==看看==。我陪你一起去吧。','Nǐ děi qù yīyuàn kànkan. Wǒ péi nǐ yìqǐ qù ba.','너 병원에 가서 진찰 좀 받아 봐야겠다. 내가 같이 가 줄게.'],
  ['한송이','==不用==，我一个人可以。谢谢。','Búyòng, wǒ yí ge rén kěyǐ. Xièxie.','괜찮아, 나 혼자 갈 수 있어. 고마워.']]],
 ['ul',['看看 kànkan: 동사를 ==겹쳐 쓰면== ‘좀 ~해 보다’','看 kàn: 이 과에서는 ‘==진찰 받다==’라는 뜻!','一个人 yí ge rén: 一 + 4성(个 gè) → ==yí==']],
 ['h','02 회화 2 — 병원에서'],
 ['dlg','의사가 한송이에게 어디가 아픈지 묻습니다. (53쪽)',[
  ['의사','你==哪儿不舒服==?','Nǐ nǎr bù shūfu?','어디가 불편하니?'],
  ['한송이','我头疼，嗓子==也==疼。','Wǒ tóu téng, sǎngzi yě téng.','머리가 아프고, 목도 아파요.'],
  ['의사','我看看。你感冒==了==。','Wǒ kànkan. Nǐ gǎnmào le.','좀 보자. 감기에 걸렸구나.'],
  ['한송이','要打针吗?','Yào dǎzhēn ma?','주사 맞아야 해요?'],
  ['의사','不严重，==不用==打针，吃==点儿==药==就行==。','Bù yánzhòng, búyòng dǎzhēn, chī diǎnr yào jiù xíng.','심하지 않으니 주사는 안 맞아도 돼. 약을 좀 먹으면 돼.'],
  ['한송이','好，谢谢大夫。','Hǎo, xièxie dàifu.','네, 감사합니다, 선생님.']]],
 ['tip','처방 정답: 주사(打针) ✕ → ==약 먹기(吃药)== ○\n了 le: ==새로운 상황이 생김== (감기에 걸렸다)']
]};
NOTE[ZN]['3-1']={pg:P(54,59),b:[
 ['h','01 得(děi) — ~해야 한다 (54쪽)'],
 ['pat','得(děi) + 동사','==강한 필요성==. 비슷한 要(yào)보다 어감이 강해요.'],
 ['zx',[['我们==得==准备一个节目。','Wǒmen děi zhǔnbèi yí ge jiémù.','우리는 공연 프로그램 하나를 준비해야 한다.'],['你一定==要==按时吃药。','Nǐ yídìng yào ànshí chī yào.','너는 꼭 제때 약을 먹어야 한다.']]],
 ['tip','부정은 **不用**(~할 필요 없다)! → ==不用==去医院。 (병원에 갈 필요 없다)\n不得 (✕)'],
 ['h','02 (一)点儿 vs 有点儿 (54쪽)'],
 ['vs',['(一)点儿 (yì)diǎnr','동사·형용사 ==뒤==\n‘조금’ — 중립적'],['有点儿 yǒudiǎnr','형용사·심리동사 ==앞==\n‘조금’ — ==불만족==한 느낌']],
 ['zx',[['你喝==点儿==热水吧。','Nǐ hē diǎnr rè shuǐ ba.','너 따뜻한 물 좀 마시렴.'],['你好==点儿==了吗?','Nǐ hǎo diǎnr le ma?','너 좀 좋아졌니?'],['我肚子==有点儿==不舒服。','Wǒ dùzi yǒudiǎnr bù shūfu.','나는 배가 좀 불편하다.'],['我==有点儿==后悔。','Wǒ yǒudiǎnr hòuhuǐ.','나는 좀 후회된다.']]],
 ['h','03 바꿔 말하기 (55쪽)'],
 ['sw','你得==去医院看看==。','Nǐ děi qù yīyuàn kànkan.',[['好好儿休息','hǎohāor xiūxi','푹 쉬다'],['锻炼身体','duànliàn shēntǐ','몸을 단련하다'],['戴上口罩','dàishang kǒuzhào','마스크를 쓰다']]],
 ['sw','我==头疼==。','Wǒ tóu téng.',[['流鼻涕','liú bítì','콧물이 나다'],['发烧了','fāshāo le','열이 나다'],['咳嗽','késou','기침하다']]],
 ['h','04 표현 플러스 (59쪽)'],
 ['idm','久病成医','jiǔbìng-chéngyī','경험이 쌓이면 전문가가 될 수 있다','‘오래 앓으면 의사가 된다’ → 경험이 많으면 ==그 분야의 전문가==.'],
 ['idm','吃后悔药','chī hòuhuǐyào','후회하다','‘잘못을 되돌리는 약을 먹다’']
]};


// ----- 0-0 중국 개관 -----
NOTE[ZN]['0-0']={pg:P(9,11),b:[
 ['h','01 중국 개관 (9~10쪽)'],
 ['tbl',['항목','내용'],[['정식 명칭','==중화인민공화국== (中华人民共和国 Zhōnghuá Rénmín Gònghéguó)'],['국기','==오성홍기== (五星红旗 Wǔxīng-Hóngqí) — 별 **5개**'],['수도','==베이징== (北京 Běijīng)'],['면적','약 960만 km² (한반도의 약 ==44배==)'],['인구','약 14억 1,175만 명 (2023년 기준)'],['민족','==한족==(汉族 Hànzú) 약 ==91%== + ==55개== 소수 민족'],['행정 구역','22개 성(타이완을 23번째 성으로 간주), ==5개 자치구==, ==4개 직할시==, ==2개 특별 행정구==']]],
 ['tip','지도 활동 함정: “중국은 **4개**의 자치구가 있다” → ✕ (==5개==)\n오성홍기의 별은 ==5개==, 한족은 약 ==91%==.'],
 ['h2','직할시 · 특별 행정구'],
 ['pl',[['직할시 4곳','北京 · 天津 · 上海 · 重庆','','베이징 · 톈진 · 상하이 · 충칭'],['특별 행정구 2곳','香港 · 澳门','','홍콩 · 마카오']]],
 ['h2','자치구 5곳'],
 ['ul',['네이멍구 자치구','신장 웨이우얼 자치구','시짱 자치구','닝샤 후이족 자치구','광시 좡족 자치구']],
 ['tip','산시성은 두 곳! 山西(Shānxī, 동쪽)와 陕西(Shǎnxī, 서쪽 · 시안이 있는 곳)\n→ 한글 이름이 같으니 ==한자와 성조==로 구별해요.'],
 ['h','02 한어병음 결합표 (11쪽)'],
 ['p','성모(왼쪽 줄)와 운모(위 칸)를 만나게 해서 음절을 만들어요. 빈칸은 ==실제로 없는 소리==예요.\n예: b + a → ba, j + ü → ==ju== (ü의 두 점 생략)']
]};

// ----- 0-2 발음 연습 · 한어병음 표기 규칙 -----
NOTE[ZN]['0-2']={pg:P(18,20),b:[
 ['h','01 숫자 읽기 (18쪽)'],
 ['wd',[['一','yī','1'],['二','èr','2'],['三','sān','3'],['四','sì','4'],['五','wǔ','5'],['六','liù','6'],['七','qī','7'],['八','bā','8'],['九','jiǔ','9'],['十','shí','10']]],
 ['tip','전화번호의 1은 ==yāo==로 읽어요. (2과 포스터: 182 → yāo bā èr)'],
 ['h','02 성조 변화 (18쪽)'],
 ['tbl',['규칙','소리','예'],[['3성 + 3성','앞 3성 → ==2성==','nǐ hǎo → ní hǎo (표기는 그대로!)'],['3성 + 1·2·4·경성','앞 3성 → ==반3성== (내려가기만)','lǎoshī'],['一 + 1·2·3성','==yì==','yìtiān, yìzhí, yìqǐ'],['一 + 4성','==yí==','yíxià'],['不 + 4성','==bú==','bú shì']]],
 ['tip','3성의 변화는 ==성조 부호를 바꾸지 않아요.==\n一 · 不의 변화는 교과서처럼 ==바뀐 성조로 표기==해요. (yìqǐ, bú tài, búyòng)'],
 ['h','03 성조 표기 규칙 (20쪽)'],
 ['ul',['성조는 ==운모== 위에 표기 (mā, nǐ, rè)','모음이 2개 이상이면 ==a > o, e > i, u, ü== 순서로 (hǎo, guó)','i와 u가 함께 나오면 ==뒤에 있는 것==에 표기 (liù, huì)','i 위에 표기할 때는 ==i의 점을 생략== (tī, shì)']],
 ['tip','함정 주의! **haǒ** ✕ → ==hǎo== ○ (a가 o보다 우선)\n**lìu** ✕ → ==liù== ○ / **hùi** ✕ → ==huì== ○ (i·u는 뒤에!)'],
 ['h','04 주의해야 할 병음 표기 (20쪽)'],
 ['tbl',['규칙','예'],[['j, q, x + ü → ==두 점 생략==','ju, qu, xu (jü ✕)'],['i, u, ü가 혼자 쓰일 때','yi, wu, yu'],['i, u, ü가 첫 글자일 때','i→==y==, u→==w==, ü→==yu== (iao→yao, uo→wo, ün→yun)'],['iou, uei, uen + 성모 → 가운데 생략','q+iou→==qiu==, d+uei→==dui==, g+uen→==gun=='],['a, o, e로 시작하는 음절이 뒤에 올 때','격음부호(’): kě’ài, Shǒu’ěr']]],
 ['h','05 획순 — 한자를 쓰는 순서'],
 ['p','교과서 ‘획순 따라 쓰기’에 나온 한자는 ==획 번호==까지 시험에 나올 수 있어요. 번호가 하나만 바뀌어도 틀린 획순!'],
 ['tbl',['한자','획수','쓰는 순서 포인트'],[['过 guò (22쪽)','6획','==寸 먼저==(横 → 竖钩 → 点), ==辶은 마지막==(点 → 横折折撇 → 捺)'],['高 gāo (24쪽)','10획','위에서 아래로: 点 → 横 → 口 → 冂 → 口'],['兴 xìng (24쪽)','6획','点 → 点 → 撇 → 横 → ==撇(5)== → ==点(6)=='],['想 xiǎng (36쪽)','13획','==木(1~4) → 目(5~9) → 心(10~13)=='],['欢 huān (38쪽)','6획','又(==横撇 → 点==) → 欠'],['迎 yíng (38쪽)','7획','卬 먼저(1~4), ==辶은 마지막(5~7)=='],['疼 téng (50쪽)','10획','疒 먼저(点 → ==横 → 撇== → 点 → 提) → 冬'],['打 dǎ (52쪽)','5획','扌(横 → ==竖钩 → 提==) → 丁'],['针 zhēn (52쪽)','7획','钅(1~5) → 十(==横(6) → 竖(7)==)']]],
 ['tip','**辶(책받침)은 마지막에!** 过 · 迎 · 运 · 还 · 这\n**十은 가로획 먼저!** 针의 오른쪽 十 → 横(6) → 竖(7)\n획 번호 두 개만 바꿔 놓는 함정이 자주 나와요.'],
 ['img','img/zh/so_guo_ok.png','过의 바른 획순 (寸 → 辶)']
]};

// ----- 1-2 문화: 외교 분야 · 베이징 -----
NOTE[ZN]['1-2']={pg:P(32,34),b:[
 ['h','01 네 꿈을 펼쳐 봐! — 국제 관계 · 외교 분야 (32쪽)'],
 ['ul',['중국은 ==유엔 상임 이사국==, 중국어는 ==유엔 공식 언어== 중 하나이자 세계에서 ==사용 인구가 가장 많은 언어==','한중 수교: ==1992년 8월 24일==','관계 발전: 선린 우호 → 협력 동반자 → 전면적 협력 동반자 → ==전략적 협력 동반자==']],
 ['zx',[['我想==当==外交官。','Wǒ xiǎng dāng wàijiāoguān.','저는 외교관이 되고 싶어요.'],['我相信你能做到。','Wǒ xiāngxìn nǐ néng zuòdào.','나는 네가 할 수 있을 거라 믿어.']]],
 ['tbl',['직업','하는 일'],[['외교관','외국에 파견되어 한국과 주재국의 ==우호 관계 증진==, 해외 동포·자국민 보호'],['국제 개발 협력 전문가','==개발 도상국==의 경제·사회 발전을 위한 사업 기획·실행']]],
 ['p','교과 융합: 서희 — 고려 성종 12년(993년) 거란(요) 1차 침입 때 소손녕과 담판 → ==강동 6주== 영유권 인정\n비단길(과거 동서 교역로) vs ==일대일로==(오늘날 중국의 추진 전략)'],
 ['h','02 중국 속으로 — 베이징 (34쪽)'],
 ['p','중국의 ==수도==, 정치·문화·행정의 중심지. 요·금·원·명·청 등 여러 왕조의 수도라 유적이 많아요.'],
 ['pl',[['톈안먼','天安门','Tiān’ān Mén','1호선 · 베이징의 중심'],['첸먼 거리','前门大街','Qián Mén Dàjiē','2호선 · 오랜 전통 상점'],['이허위안','颐和园','Yíhé Yuán','4호선 · ==최고의 황실 정원=='],['창청(만리장성)','长城','Chángchéng','S2호선 · 세계 7대 불가사의'],['국가체육장','国家体育场','Guójiā Tǐyùchǎng','8호선 · 2008 하계·2022 동계 올림픽 주경기장 · ==‘새 둥지’=='],['베이징 카오야','北京烤鸭','Běijīng kǎoyā','베이징 오리구이']]],
 ['wd',[['糖葫芦','tánghúlu','탕후루'],['炸酱面','zhájiàngmiàn','자장면']]],
 ['tip','‘새 둥지’라는 별명 = ==국가체육장== (이허위안 ✕)\n황실 정원 = ==이허위안== / 세계 7대 불가사의 = ==창청=='],
 ['h','03 표현 플러스와 함께 보기'],
 ['p','开门红(kāiménhóng) = 좋은 출발 — ==가오카오(대학 입학 시험)== 첫날 붉은 옷으로 응원하는 장면에 나와요.']
]};

// ----- 2-2 문화: 문화 예술 분야 · 상하이 -----
NOTE[ZN]['2-2']={pg:P(46,48),b:[
 ['h','01 네 꿈을 펼쳐 봐! — 문화 예술 분야 (46쪽)'],
 ['p','한국과 중국은 ==지리적 인접성, 문화적 유사성==으로 영화·드라마·음악·미술 교류가 활발해요. 중국은 거대한 문화 소비 시장!'],
 ['tbl',['작품·인물','핵심'],[['증후을(曾侯乙) 편종','==전국 시대== 악기, 청동 종 ==65개==, 7성 음계 · 5옥타브 반'],['웨민쥔(岳敏君)','‘==웃음 시리즈==’로 유명한 중국 현대 미술 작가'],['치아문단순적소미호','致我们单纯的小美好 = ‘우리들의 순수하고 아름다운 날들에게’ (드라마)'],['마답비연(马踏飞燕)','==간쑤(甘肃)성==에서 발굴된 ==한나라== 청동 말 — 말발굽 아래 ==제비=='],['청명상하도(清明上河图)','중국 10대 명화, 가로 약 ==5.28m==']]],
 ['zx',[['这==幅==画怎么样?','Zhè fú huà zěnmeyàng?','이 그림 어떠세요?'],['画==得非常好==，我很喜欢。','Huà de fēicháng hǎo, wǒ hěn xǐhuan.','정말 잘 그렸어요, 마음에 들어요.']]],
 ['p','幅 fú = 그림·종이 등을 세는 단위\n직업: ==글로벌 문화 콘텐츠 전문가==(문화 콘텐츠 기획·개발), ==국제 아트 딜러==(작가 발굴, 미술품 판매)'],
 ['h','02 중국 속으로 — 상하이 (48쪽)'],
 ['p','금융·물류·문화·산업의 중심지 → 중국의 ==경제 수도=='],
 ['pl',[['상하이 타워','上海中心大厦','','632m · ==가장 높은 건물=='],['세계금융센터','上海环球金融中心','','492m · ==병따개 모양=='],['둥팡밍주(동방명주)','东方明珠','Dōngfāng Míngzhū','468m · 상하이 랜드마크'],['진마오 타워','上海金茂大厦','','420.5m · 88층 전망대']]],
 ['ul',['==대한민국 임시 정부 청사== — 1919년 4월 11일 임시 정부 수립','==매헌 윤봉길 의사 기념관== — 루쉰 공원(구 훙커우 공원)']],
 ['wd',[['小笼包','xiǎolóngbāo','샤오룽바오'],['大闸蟹','dàzháxiè','다자셰(민물 털게)']]],
 ['tip','높이 순서: 상하이 타워 > 세계금융센터 > 둥팡밍주 > 진마오 타워\n‘병따개 모양’ = ==세계금융센터== (상하이 타워 ✕)']
]};

// ----- 3-2 문화: 의료 보건 분야 · 시안 -----
NOTE[ZN]['3-2']={pg:P(60,62),b:[
 ['h','01 네 꿈을 펼쳐 봐! — 의료 · 보건 분야 (60쪽)'],
 ['ul',['==의료 관광==은 잠재력이 높은 서비스 산업','《==동의보감==》: ==허준==이 한국과 중국의 전통 의학을 집대성, ==세계 기록 유산==','허준박물관: 허준의 업적을 기리고 전통 의학 자료 수집·연구']],
 ['tbl',['직업','하는 일'],[['국제 의료 관광 코디네이터','외국인 환자 ==접수·통역·약 처방 설명·퇴원 후 관리==, 의료+관광 서비스 기획'],['국제 진료 센터 의료진','외국인을 위한 국제 진료 서비스에서 진료·치료·상담']]],
 ['zx',[['要打针吗?','Yào dǎzhēn ma?','주사를 맞아야 되나요?'],['不用，吃点儿药就行。','Búyòng, chī diǎnr yào jiù xíng.','아니요, 약 좀 드시면 괜찮아요.']]],
 ['p','교과 융합: ==화타(华佗)== — ==동한== 시대 명의, 편작(扁鹊)과 함께 명의의 대표, ==중국 최초의 외과 의사==\n인공 지능: ==1분 진료소(一分钟诊所)== — AI · 빅 데이터 무인 진료소'],
 ['h','02 중국 속으로 — 시안 (62쪽)'],
 ['p','“100년 역사는 상하이, 1,000년 역사는 베이징, ==5,000년 역사는 시안==”\n진·한·당 등 ==13개 왕조==의 수도 → ‘==지붕 없는 박물관==’'],
 ['pl',[['시안 성벽','西安城墙','Xī’ān Chéngqiáng','높이 12m · 둘레 13.7km · 자전거로 한 바퀴'],['병마용갱','兵马俑坑','Bīngmǎyǒng Kēng','병사와 말 · 저마다 다른 자세·표정·갑옷'],['화칭츠','华清池','Huáqīng Chí','당나라 황제의 별궁 · ==현종과 양귀비=='],['뱡뱡몐','biángbiáng面','biángbiángmiàn','==산시(陕西)성==의 대표 면 요리']]],
 ['tip','병마용갱 · 화칭츠 · 뱡뱡몐 → ==시안== (베이징 ✕)\n임시 정부 청사 → ==상하이== / 이허위안 · 창청 → ==베이징==']
]};

})();

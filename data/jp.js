// ===== 일본어 회화 (2학기 기말 범위: 교과서 52~92쪽 + 워크시트 143~145쪽) : 필기 + 단어집 =====
// 문제·모의고사는 data/jpq.js
(()=>{
const JN='일본어|회화';NOTE[JN]={};
const P=(...a)=>{const r=[];a.forEach(x=>{if(Array.isArray(x))for(let i=x[0];i<=x[1];i++)r.push(`tb/jp/p${String(i).padStart(3,'0')}.jpg`);else r.push(`tb/jp/p${String(x).padStart(3,'0')}.jpg`)});return r};
const JA=t=>ntIn(t);
Object.assign(NTX,{
 jdl:(sit,lines)=>{const au=lines.some(l=>jaF('s',l[1]));return `<div class="jdl">${sit||au?`<div class="jsit">${sit?`<span>${ntIn(sit)}</span>`:''}${au?`<button class="jall" onclick="jaAll(this)">${JSPK2}<span>전체 듣기</span></button>`:''}</div>`:''}${lines.map(([w,ja,ko],i)=>{const f=jaF('s',ja);return `<div class="jln${i%2?' r':''}"${f?` data-a="${f}"`:''}><div class="jwc"><i class="jwho">${esc(w)}</i>${f?`<button class="jlsp" aria-label="발음 듣기" onclick="jaSay(this)">${JSPK2}</button>`:''}</div><div class="jbub"><div class="jja" lang="ja">${JA(ja)}</div><div class="jko">${ntIn(ko)}</div></div></div>`}).join('')}</div>`},
 jx:rows=>`<div class="jex">${rows.map(([ja,ko])=>{const f=jaF('s',ja);return `<div class="jei${f?' jau':''}"${f?` data-a="${f}"`:''}><div class="jeit"><div class="jja" lang="ja">${JA(ja)}</div><div class="jko">${ntIn(ko)}</div></div>${f?`<button class="jlsp" aria-label="발음 듣기" onclick="jaSay(this)">${JSPK2}</button>`:''}</div>`}).join('')}</div>`,
 jpat:(f,d)=>`<div class="jpat"><div class="jpf" lang="ja">${ntIn(f)}</div>${d?`<p>${ntP(d)}</p>`:''}</div>`,
 jsw:(base,alts)=>{const f=jaF('s',base);return `<div class="jsw"><div class="jsb${f?' jau':''}"${f?` data-a="${f}"`:''}><div class="jja" lang="ja">${JA(base)}</div>${f?`<button class="jlsp" aria-label="발음 듣기" onclick="jaSay(this)">${JSPK2}</button>`:''}</div><div class="jsa">${alts.map(([ja,ko])=>{const g=jaF('w',ja);return g?`<div class="jtap" data-a="${g}" role="button" tabindex="0" aria-label="${esc(ja)} 발음 듣기" onclick="jaSay(this)"><b lang="ja">${esc(ja)}</b><small>${ntIn(ko)}</small><i class="jmini">${JSPK3}</i></div>`:`<div><b lang="ja">${esc(ja)}</b><small>${ntIn(ko)}</small></div>`}).join('')}</div></div>`},
 jwd:ws=>`<div class="jwd">${ws.map(([ja,ko])=>{const g=jaF('w',ja);return g?`<span class="jtap" data-a="${g}" role="button" tabindex="0" aria-label="${esc(ja)} 발음 듣기" onclick="jaSay(this)"><b lang="ja">${esc(ja)}</b><small>${esc(ko)}</small><i class="jmini">${JSPK3}</i></span>`:`<span><b lang="ja">${esc(ja)}</b><small>${esc(ko)}</small></span>`}).join('')}</div>`
});
const st=document.createElement('style');st.textContent=`
.jja{font-family:"Noto Sans JP","Noto Sans CJK JP","Hiragino Kaku Gothic ProN","Yu Gothic","Apple SD Gothic Neo",sans-serif;font-size:19px;line-height:1.5;color:#1f1b16;letter-spacing:.3px}
.jja mark{background:linear-gradient(transparent 55%,#f9df99 55%);color:inherit}
.jko{font-size:14px;color:#5a5245;margin-top:2px;line-height:1.45}
.jdl{margin:6px 0 12px}.jsit{margin:0 0 10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap}.jsit span{display:inline-block;font-size:13px;font-weight:700;color:#8b3a55;background:#fbe3ea;border-radius:99px;padding:5px 12px}
.jln{display:flex;gap:9px;margin:0 0 9px;align-items:flex-start}
.jwho{flex:none;font-style:normal;font-size:11.5px;font-weight:800;width:50px;text-align:center;padding:5px 0;border-radius:10px;background:#fbe3ea;color:#8b3a55;margin-top:3px;white-space:nowrap}
.jln.r .jwho{background:#e0ecfa;color:#2f5b8f}
.jbub{flex:1;min-width:0;background:#fff;border-radius:14px;padding:8px 12px;box-shadow:inset 0 0 0 1.5px #ece4d2}
.jex{display:grid;gap:8px;margin:6px 0 12px}
.jei{background:#fff;border-radius:14px;padding:9px 13px;box-shadow:inset 0 0 0 1.5px #ece4d2}
.jpat{margin:6px 0 10px;border-radius:14px;background:#fbe3ea;box-shadow:inset 0 0 0 1.5px #f0b4c4;padding:10px 14px;text-align:center}
.jpf{font-family:"Noto Sans JP","Noto Sans CJK JP","Hiragino Kaku Gothic ProN","Yu Gothic",sans-serif;font-size:20px;font-weight:700;color:#7a2c46}
.jpat p{margin:4px 0 0;font-size:14px;color:#6a4a55;text-align:left}
.jsw{margin:6px 0 12px;border-radius:16px;background:#fff;box-shadow:inset 0 0 0 1.5px #ece4d2;overflow:hidden}
.jsb{padding:10px 14px;background:#fdf3f6;border-bottom:1.5px dashed #ead3da}
.jsa{display:grid;grid-template-columns:repeat(3,1fr)}
.jsa div{padding:9px 4px;text-align:center;border-left:1.5px dashed #ece4d2;border-top:1.5px dashed #ece4d2;display:flex;flex-direction:column;gap:1px;min-width:0}
.jsa div:nth-child(3n+1){border-left:none}.jsa div:nth-child(-n+3){border-top:none}
.jsa b{font-size:16px;font-weight:700;white-space:nowrap}.jsa small{font-size:12.5px;color:#5a5245}
.jwd{display:flex;flex-wrap:wrap;gap:6px;margin:6px 0 12px}
.jwd span{display:inline-flex;align-items:baseline;gap:5px;padding:5px 10px;border-radius:12px;background:#fff;box-shadow:inset 0 0 0 1.3px #e5dcc8}
.jwd b{font-size:16px;font-weight:700}.jwd small{font-size:12.5px;color:#5a5245}
.nt .jdl *,.nt .jex *,.nt .jsw *,.nt .jpat *{line-height:1.45}
/* ---- 단어집 ---- */
.jv{--ju:#f1b6c4;--jd:#c9506e}
.jv .jtab{display:flex;gap:6px;margin:0 0 12px}
.jv .jtab button{flex:1;padding:10px 4px;border-radius:12px;border:none;background:var(--card);font:inherit;font-size:14.5px;font-weight:700;box-shadow:inset 0 0 0 1.5px var(--bd);color:var(--mut);cursor:pointer}
.jv .jtab button.on{background:color-mix(in srgb,var(--ju) 45%,var(--card));box-shadow:inset 0 0 0 2px var(--jd);color:var(--tx)}
.jv .jlh{background:var(--card);border-radius:16px;padding:14px 16px;margin-bottom:12px;box-shadow:0 2px 10px rgba(90,70,40,.1);display:flex;align-items:center;gap:12px}
.jv .jlh .n{font:22px Jua;width:44px;height:44px;border-radius:12px;background:var(--ju);display:flex;align-items:center;justify-content:center;flex:none}
.jv .jlh .t{font-size:19px;font-weight:700}.jv .jlh small{display:block;color:var(--mut);font-size:13px}
.jv .jfl{display:flex;gap:8px;margin:0 0 10px}
.jv .jfl button{display:flex;align-items:center;gap:6px;padding:9px 12px;border-radius:12px;border:none;background:var(--card);box-shadow:inset 0 0 0 1.5px var(--bd);font:inherit;font-size:14px;font-weight:700;color:var(--mut);cursor:pointer}
.jv .jfl button.on{background:color-mix(in srgb,var(--ju) 45%,var(--card));box-shadow:inset 0 0 0 2px var(--jd);color:var(--tx)}
.jv .jfl svg{width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:2}.jv .jfl button.on svg{fill:#e8a526;stroke:#e8a526}
.jv .jfl .clr{margin-left:auto}.jv .jfl .clr.ask{background:#fbe3ea;color:#8b3a55}
.jv .jstk{position:sticky;top:0;z-index:30;margin:8px -16px 10px;padding:10px 16px;display:flex;align-items:center;gap:10px;background:rgba(243,237,225,.95);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}
.jv .jstl{font-size:12px;font-weight:800;color:#8b3a55;line-height:1.2;flex:none}
.jv .jhb{flex:1;display:grid;grid-template-columns:1fr 1fr;gap:6px}
.jv .jhb button{display:flex;align-items:center;justify-content:center;gap:4px;padding:10px 0;border-radius:12px;border:none;background:#fff;box-shadow:inset 0 0 0 2px var(--jd);color:#8b3a55;font:inherit;font-size:15px;font-weight:800;cursor:pointer}
.jv .jhb button.on{background:var(--jd);color:#fff}
.jv .jsec{display:flex;align-items:center;gap:8px;margin:14px 0 6px;font-size:15px}
.jv .jsec .ic{width:24px;height:24px;border-radius:8px;background:var(--ju);display:flex;align-items:center;justify-content:center;font:13px Jua;flex:none}
.jv .jsec .ch{margin-left:auto;display:flex;gap:5px}.jv .jsec .ch span{font-size:12px;color:var(--mut);background:var(--card);border-radius:8px;padding:2px 7px}
.jv .jtb{background:var(--card);border-radius:16px;box-shadow:0 2px 10px rgba(90,70,40,.08);overflow:hidden}
.jv .jhd{display:grid;grid-template-columns:1fr 1fr 34px 34px;gap:8px;padding:8px 14px;background:color-mix(in srgb,var(--ju) 35%,var(--card));font-size:12.5px;font-weight:700;color:#8b3a55}
.jv .jw{display:grid;grid-template-columns:1fr 1fr 34px 34px;gap:8px;align-items:center;padding:9px 14px;border-top:1px solid var(--ln)}
.jv .jw.star{background:#fff8e1}
.jv .jwj{font-size:18px;font-weight:700;line-height:1.3;cursor:pointer;font-family:"Noto Sans JP","Noto Sans CJK JP","Hiragino Kaku Gothic ProN","Yu Gothic",sans-serif;word-break:keep-all}
.jv .jwj small{display:block;font-size:12.5px;font-weight:500;color:#8b7a6a}
.jv .jwk{font-size:14.5px;cursor:pointer;line-height:1.4}
.jv .cov{color:transparent!important;background:#eadfcf;border-radius:8px;user-select:none}.jv .cov small{color:transparent!important}
.jv .jst,.jv .jsp{width:34px;height:34px;border-radius:50%;border:none;background:#f3ece0;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0}
.jv .jst svg{width:18px;height:18px;fill:none;stroke:#b5a58f;stroke-width:2}.jv .jst.on svg{fill:#e8a526;stroke:#e8a526}
.jv .jsp.ing{background:var(--jd)}.jv .jsp.ing svg{fill:#fff;stroke:#fff}
.jv .jemp{text-align:center;color:var(--mut);padding:30px 0;line-height:1.6}
.jv .jfoot{font-size:12.5px;color:var(--mut);text-align:center;margin:14px 0 0}
/* ---- 발음 듣기 ---- */
.jall{flex:none;margin-left:auto;display:flex;align-items:center;gap:4px;padding:6px 11px 6px 9px;border-radius:99px;border:none;background:#fbe3ea;color:#8b3a55;font:inherit;font-size:12.5px;font-weight:800;cursor:pointer;-webkit-tap-highlight-color:transparent}
.jall.ing{background:#c9506e;color:#fff}.jall.ing svg{fill:#fff;stroke:#fff}
.jwc{flex:none;display:flex;flex-direction:column;align-items:center;gap:6px;width:50px}.jwc .jwho{margin-top:3px}
.jlsp{flex:none;width:34px;height:34px;border-radius:50%;border:none;background:#fdf0f3;box-shadow:inset 0 0 0 1.3px #f3cdd7;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;-webkit-tap-highlight-color:transparent;transition:transform .12s}
.jlsp:active{transform:scale(.92)}.jlsp.ing{background:#c9506e;box-shadow:none}.jlsp.ing svg{fill:#fff;stroke:#fff}
.jln.ply .jbub{box-shadow:inset 0 0 0 2px #e58aa2;background:#fff8fa}
.jei.jau{display:flex;align-items:center;gap:10px}.jeit{flex:1;min-width:0}.jei.ply,.jsb.ply{box-shadow:inset 0 0 0 2px #e58aa2}
.jsb.jau{display:flex;align-items:center;gap:10px}.jsb.jau .jja{flex:1;min-width:0}
.jtap{position:relative;cursor:pointer;-webkit-tap-highlight-color:transparent}.jtap:active{background:#fdf0f3}
.jmini{position:absolute;bottom:5px;right:6px;display:flex;opacity:.55}.jwd .jtap{padding-right:22px}.jwd .jtap .jmini{top:50%;transform:translateY(-50%)}
.jtap.ing{background:#fbe3ea}.jtap.ing .jmini{opacity:1}
`;document.head.appendChild(st);
// ----- 단어집 데이터: [표기, 읽기(한자가 있을 때), 뜻] -----
const JVOC=[
{l:3,t:['いつに しますか','언제로 할까요?'],secs:[
 {s:'Topic 1 · 제안 표현',p:54,w:[['にちようび','','일요일'],['どうですか','','어떠세요?'],['いい','','좋다'],['げつようび','','월요일'],['かようび','','화요일'],['すいようび','','수요일'],['もくようび','','목요일'],['きんようび','','금요일'],['どようび','','토요일']]},
 {s:'Topic 1 · 회화 1',p:55,w:[['つぎ','','다음'],['いつ','','언제'],['～に しますか','','~(으)로 할까요?'],['金ようび','きんようび','금요일'],['ちょっと','','좀, 잠깐'],['アルバイト / バイト','','아르바이트'],['高校生','こうこうせい','고등학생'],['できる','','할 수 있다'],['～よ','','~요'],['うち','','우리'],['そうですか','','그래요?'],['～に しましょうか','','~(으)로 할까요?'],['水ようび','すいようび','수요일'],['～なら','','~(이)라면'],['～に しましょう','','~(으)로 합시다']]},
 {s:'Topic 1 · 확인·말하기',p:56,w:[['じゅく','','학원'],['テスト','','테스트, 시험'],['ひっこし','','이사'],['ともだち','','친구'],['やくそく','','약속']]},
 {s:'Topic 2 · 희망 표현',p:58,w:[['どこ','','어디'],['～に','','~에'],['いきたい','','가고 싶다'],['テーマパーク','','테마파크'],['おだいば','','오다이바(도쿄)'],['あらしやま','','아라시야마(교토)'],['どうとんぼり','','도톤보리(오사카)']]},
 {s:'Topic 2 · 회화 2',p:59,w:[['～には','','~에는'],['来ます','きます','옵니다'],['7月','しちがつ','7월'],['20日','はつか','20일'],['行く','いく','가다'],['17日','じゅうしちにち','17일'],['夏休み','なつやすみ','여름 방학, 여름 휴가'],['わかりました','','알겠습니다'],['どこか','','어딘가'],['ところ','','곳'],['ぎおんまつり','','기온마쓰리(교토)'],['見る','みる','보다'],['～たい','','~(하)고 싶다'],['オッケー','','‘OK’의 일본어 표기'],['これから','','이제부터'],['下の なまえ','したの なまえ','(성이 아닌) 이름'],['～で','','~(으)로'],['よぶ','','부르다'],['～ませんか','','~(하)지 않을래요?']]},
 {s:'Topic 2 · 말하기 활동',p:61,w:[['しゅうまつ','','주말'],['あそぶ','','놀다'],['かいもの','','쇼핑, 장보기'],['えいが','','영화'],['ほっかいどう','','홋카이도'],['おこのみやき','','오코노미야키'],['たべる','','먹다'],['いっしょに','','같이, 함께'],['うたう','','(노래를) 부르다'],['やきゅう','','야구']]},
 {s:'즐겁게 활동하기',p:62,w:[['アイドル','','아이돌'],['グッズ','','상품'],['チーズタッカルビ','','치즈 닭갈비'],['ビビンバ','','비빔밥'],['～など','','~ 등']]},
 {s:'워크시트 · 동사(ます형)',p:143,w:[['あう','','만나다'],['およぐ','','수영하다'],['はなす','','말하다'],['まつ','','기다리다'],['すわる','','앉다'],['しぬ','','죽다'],['よむ','','읽다'],['みる','','보다'],['おきる','','일어나다'],['おちる','','떨어지다'],['ねる','','자다'],['くる','','오다'],['する','','하다'],['りょこうする','','여행하다']]}
]},
{l:4,t:['どうやって いくの？','어떻게 가는 거야?'],secs:[
 {s:'Topic 1 · 가족 호칭',p:68,w:[['そうです','','그렇습니다'],['おとうさん','','아버지'],['おかあさん','','어머니'],['おねえさん','','언니, 누나'],['おにいさん','','오빠, 형'],['いもうとさん','','(남의) 여동생'],['おとうとさん','','(남의) 남동생'],['ちち','','아버지(남에게 말할 때)']]},
 {s:'Topic 1 · 회화 1',p:69,w:[['～ちゃん','','~야'],['こっち','','이쪽(「こちら」보다 스스럼없는 말)'],['いらっしゃい','','어서 와(요)'],['父','ちち','아버지(남에게 말할 때)'],['つかれたでしょう？','','피곤하지요?'],['どうぞ あがって ください','','어서 올라오세요(들어오세요)'],['おじゃまします','','실례합니다(방문)'],['あのう','','저, 저기(말 걸기)'],['これ','','이것'],['韓国','かんこく','한국'],['のり','','김'],['どうぞ','','받으세요(권유)'],['ありがとうございます','','고맙습니다'],['お母さん','おかあさん','어머니'],['にる','','닮다'],['～に にて いるね','','~을/를 닮았네']]},
 {s:'Topic 1 · こ·そ·あ·ど',p:70,w:[['これ / それ / あれ / どれ','','이것 / 그것 / 저것 / 어느 것'],['ここ / そこ / あそこ / どこ','','여기 / 거기 / 저기 / 어디'],['こちら / そちら / あちら / どちら','','이쪽 / 그쪽 / 저쪽 / 어느 쪽']]},
 {s:'Topic 2 · 방법·수단',p:72,w:[['なにで','','무엇으로'],['ちかてつ','','지하철'],['～で','','~(으)로(수단)'],['しんかんせん','','신칸센'],['タクシー','','택시'],['バス','','버스']]},
 {s:'Topic 2 · 회화 2',p:73,w:[['どうやって','','어떻게'],['～の？','','문장 끝에서 질문을 나타냄'],['まず','','우선, 먼저'],['おおさか','','오사카'],['えき','','역'],['～て[で]','','~(하)고, ~(해)서'],['電車','でんしゃ','전철'],['のりかえる','','갈아타다'],['もう','','벌써, 이미'],['あんなに','','저렇게'],['人','ひと','사람'],['ならぶ','','한 줄로 서다, 늘어서다'],['～て[で] いる','','~(하)고 있다'],['ほんとだ','','정말이다'],['はやく','','빨리'],['のる','','타다'],['え','','어(놀라거나 당황할 때의 소리)'],['あの','','저'],['アトラクション','','놀이기구'],['こわい','','무섭다'],['ぜんぜん','','전혀'],['～より','','~보다'],['ショー','','쇼'],['ほう','','쪽'],['～のに','','~한데']]},
 {s:'Topic 2 · 말하기 활동',p:75,w:[['とうきょう','','도쿄'],['ふくおか','','후쿠오카'],['ふね','','배'],['おきなわ','','오키나와'],['ひこうき','','비행기'],['えいご','','영어'],['きゅうしゅう','','규슈'],['おおきい','','크다'],['すうがく','','수학'],['むずかしい','','어렵다'],['おもしろい','','재미있다']]},
 {s:'즐겁게 활동하기 · 일본 도시',p:76,w:[['おおさか','','오사카'],['さっぽろ','','삿포로'],['きょうと','','교토'],['なら','','나라'],['こうべ','','고베'],['よこはま','','요코하마']]},
 {s:'문화 · 선물',p:77,w:[['おみやげ','','남의 집을 방문할 때·여행지에서 사 온 선물'],['プレゼント','','생일·크리스마스 등 특별한 날의 선물'],['おちゅうげん','','7월 초~8월 중순에 보내는 선물'],['おせいぼ','','연말~2월 중순에 보내는 선물'],['おかえし','','받은 선물에 대한 답례']]},
 {s:'워크시트 · 동사(て형·た형)',p:144,w:[['きく','','듣다'],['かく','','쓰다'],['きる','','입다'],['あける','','열다'],['いく','','가다']]}
]},
{l:5,t:['しゃしんを とっても いいですか','사진을 찍어도 되나요?'],secs:[
 {s:'Topic 1 · 가능 표현',p:84,w:[['かんじ','','한자'],['よむ','','읽다'],['～ことが できる','','~할 수 있다'],['ひく','','(악기를) 연주하다, 치다, 켜다'],['カタカナ','','가타카나'],['じてんしゃ','','자전거']]},
 {s:'Topic 1 · 회화 1',p:85,w:[['ロボット','','로봇'],['いる','','(사람·동물 등이) 있다'],['この','','이'],['ニュース','','뉴스'],['スタジオ','','스튜디오'],['ばしょ','','장소'],['聞く','きく','묻다'],['～て みる','','~해 보다'],['がめん','','화면'],['タッチ','','터치'],['～か','','~거나, ~는지'],['話しかける','はなしかける','말을 걸다'],['～て いるの？','','~(하)고 있어?'],['いろいろ','','여러 가지'],['おしえる','','가르치다'],['～て くれる','','~해 주다'],['～て くれない','','~해 주지 않다'],['～と おもう','','~라고 생각하다'],['～けど・けれど','','~(지)만, ~(인)데']]},
 {s:'Topic 1 · 말하기 활동',p:87,w:[['てんき','','날씨'],['メニュー','','메뉴'],['しんぶん','','신문'],['ちゅうごく','','중국'],['ダンス','','댄스, 춤'],['おどる','','춤추다']]},
 {s:'Topic 2 · 전언 표현',p:88,w:[['あつい','','덥다'],['～そうです','','~(라)고 합니다'],['あたたかい','','따뜻하다'],['すずしい','','시원하다'],['さむい','','춥다']]},
 {s:'Topic 2 · 회화 2',p:89,w:[['あつさ','','더위'],['-さ','','~임, ~함(형용사에 접속하여 명사를 만듦)'],['-まつ','','~말'],['つづく','','계속되다'],['みなさん','','여러분'],['からだに 気を つけて ください','からだに きを つけて ください','몸조심하세요'],['～みたいだ','','~같다'],['すごく','','엄청, 굉장히'],['～た','','~다(과거)'],['きんちょう','','긴장'],['うまく','','잘'],['～ことが できなかった','','~할 수 없었다'],['有名','ゆうめい','유명함'],['写真を とる','しゃしんを とる','사진을 찍다'],['ええ','','네'],['サイン','','사인']]},
 {s:'Topic 2 · 말하기 활동',p:91,w:[['どうでしたか','','어땠습니까?'],['アニメ','','애니메이션'],['かりる','','빌리다'],['はいる','','들어가다']]},
 {s:'즐겁게 활동하기',p:92,w:[['のむ','','마시다'],['ジュース','','주스']]},
 {s:'워크시트 · 형용사',p:145,w:[['とおい','','멀다'],['ちかい','','가깝다'],['ひろい','','넓다'],['げんきだ','','건강하다'],['しずかだ','','조용하다'],['べんりだ','','편리하다']]}
]}];
const JZ=JVOC.map(x=>x.secs.reduce((a,s)=>a+s.w.length,0));
// ----- 단어집 화면 -----
const JV={l:3,h:{},s:{},f:0};try{const o=JSON.parse(localStorage.getItem('pungsan-jvoc')||'{}');if(o.l)JV.l=o.l;if(o.h)JV.h=o.h;if(o.s)JV.s=o.s;if(o.f)JV.f=1}catch(e){}
const jvSave=()=>{try{localStorage.setItem('pungsan-jvoc',JSON.stringify(JV))}catch(e){}};
const JEYE='<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
const JSTAR='<svg viewBox="0 0 24 24"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z"/></svg>';
const JSPK='<svg width="18" height="18" viewBox="0 0 24 24" fill="#8b3a55" stroke="#8b3a55" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7" fill="none"/><path d="M19 6a8.5 8.5 0 0 1 0 12" fill="none"/></svg>';
const jvCnt=l=>Object.keys(JV.s).filter(k=>k.startsWith(l+'-')).length;
function jvPage(n){const L=JVOC.find(x=>x.l==JV.l),tot=JZ[JV.l-3],all=JZ.reduce((a,b)=>a+b,0);
 let h=`<div class="shd"><h2 style="--hlc:#f1b6c4">단어집</h2><p class="tag">일본어 회화 · 3~5과 단어 ${all}개</p></div><div class="jv">`;
 h+=`<div class="jtab">${JVOC.map(x=>`<button class="${x.l==JV.l?'on':''}" data-l="${x.l}" onclick="jvGo(${x.l})">${x.l}과${jvCnt(x.l)?` ★${jvCnt(x.l)}`:''}</button>`).join('')}</div>`;
 h+=`<div class="jlh"><span class="n">${JV.l}</span><div><div class="t" lang="ja">${L.t[0]}</div><small>${L.t[1]} · ${tot}단어</small></div></div>`;
 h+=`<div class="jfl"><button class="${JV.f?'on':''}" onclick="jvFilt()">${JSTAR}<span>별표 단어만 <span data-jn>${jvCnt(JV.l)}</span>개</span></button><button class="clr" onclick="jvClr(this)">모두 해제</button></div>`;
 h+=`<div class="jstk"><span class="jstl">가리고<br>외우기</span><div class="jhb">${[['j','일본어'],['k','뜻']].map(([k,t])=>`<button class="${JV.h[k]?'on':''}" onclick="jvHide('${k}')">${JEYE}${t}</button>`).join('')}</div></div>`;
 let shown=0;
 L.secs.forEach((s,si)=>{if(JV.f&&!s.w.some((_,wi)=>JV.s[JV.l+'-'+si+'-'+wi]))return;h+=`<div class="jsec"><span class="ic">${si+1}</span><b>${esc(s.s)}</b><span class="ch"><span>${s.p}쪽</span><span>${s.w.length}개</span></span></div><div class="jtb"><div class="jhd"><span>일본어</span><span>뜻</span><span></span><span></span></div>`;
  s.w.forEach(([ja,rd,ko],wi)=>{const K=JV.l+'-'+si+'-'+wi,sr=!!JV.s[K];if(JV.f&&!sr)return;shown++;
   h+=`<div class="jw${sr?' star':''}"><div class="jwj${JV.h.j?' cov':''}" lang="ja" onclick="jvPeek(this)">${esc(ja)}${rd?`<small>${esc(rd)}</small>`:''}</div><div class="jwk${JV.h.k?' cov':''}" onclick="jvPeek(this)">${esc(ko)}</div><button class="jst${sr?' on':''}" aria-label="모르는 단어 별표" aria-pressed="${sr}" onclick="jvStar(this,'${K}')">${JSTAR}</button><button class="jsp" aria-label="발음 듣기" onclick="jvSay(this,${si},${wi})">${JSPK}</button></div>`});h+='</div>'});
 if(JV.f&&!shown)h+=`<div class="jemp">별표 친 단어가 없어요.<br>모르는 단어 옆 ☆를 눌러 표시해 보세요.</div>`;
 h+=`<p class="jfoot">🔊 발음은 AI 일본어 음성으로 미리 녹음해 두었어요. 한자 읽기는 교과서와 맞춰 확인했어요.</p></div>`;return h}
const jvRe=()=>{show(jvPage(JN),'voc:'+JN)};
window.jvGo=l=>{JV.l=l;jvSave();jvRe();scrollTo(0,0)};
window.jvStar=(b,k)=>{if(JV.s[k])delete JV.s[k];else JV.s[k]=1;jvSave();if(JV.f){const y=scrollY;jvRe();scrollTo(0,y);return}const on=!!JV.s[k];b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);b.closest('.jw').classList.toggle('star',on);document.querySelectorAll('.jv [data-jn]').forEach(e=>e.textContent=jvCnt(JV.l));document.querySelectorAll('.jv .jtab button').forEach(x=>{const l=+x.dataset.l,c=jvCnt(l);x.textContent=l+'과'+(c?' ★'+c:'')})};
window.jvFilt=()=>{JV.f=JV.f?0:1;jvSave();jvRe();scrollTo(0,0)};
window.jvClr=b=>{if(!jvCnt(JV.l))return;if(!b.classList.contains('ask')){b.classList.add('ask');b.textContent='정말 해제?';setTimeout(()=>{if(b.isConnected){b.classList.remove('ask');b.textContent='모두 해제'}},2500);return}Object.keys(JV.s).forEach(k=>{if(k.startsWith(JV.l+'-'))delete JV.s[k]});jvSave();const y=scrollY;jvRe();scrollTo(0,y)};
window.jvHide=k=>{JV.h[k]=!JV.h[k];jvSave();const y=scrollY;jvRe();scrollTo(0,y)};
window.jvPeek=el=>{if(el.classList.contains('cov')){el.classList.remove('cov');el.dataset.pk=1}else if(el.dataset.pk){el.classList.add('cov');delete el.dataset.pk}};
// 미리 녹음한 AI 일본어 음성(Style-Bert-VITS2, JVNV 성우 데이터) — 한자 읽기는 교과서 읽기와 대조해 고침
const JAUD={"w":{"にちようび":"w000","どうですか":"w001","いい":"w002","げつようび":"w003","かようび":"w004","すいようび":"w005","もくようび":"w006","きんようび":"w007","どようび":"w008","つぎ":"w009","いつ":"w010","～に しますか":"w011","金ようび":"w012","ちょっと":"w013","アルバイト / バイト":"w014","高校生":"w015","できる":"w016","～よ":"w017","うち":"w018","そうですか":"w019","～に しましょうか":"w020","水ようび":"w021","～なら":"w022","～に しましょう":"w023","じゅく":"w024","テスト":"w025","ひっこし":"w026","ともだち":"w027","やくそく":"w028","どこ":"w029","～に":"w030","いきたい":"w031","テーマパーク":"w032","おだいば":"w033","あらしやま":"w034","どうとんぼり":"w035","～には":"w036","来ます":"w037","7月":"w038","20日":"w039","行く":"w040","17日":"w041","夏休み":"w042","わかりました":"w043","どこか":"w044","ところ":"w045","ぎおんまつり":"w046","見る":"w047","～たい":"w048","オッケー":"w049","これから":"w050","下の なまえ":"w051","～で":"w052","よぶ":"w053","～ませんか":"w054","しゅうまつ":"w055","あそぶ":"w056","かいもの":"w057","えいが":"w058","ほっかいどう":"w059","おこのみやき":"w060","たべる":"w061","いっしょに":"w062","うたう":"w063","やきゅう":"w064","アイドル":"w065","グッズ":"w066","チーズタッカルビ":"w067","ビビンバ":"w068","～など":"w069","あう":"w070","およぐ":"w071","はなす":"w072","まつ":"w073","すわる":"w074","しぬ":"w075","よむ":"w076","みる":"w077","おきる":"w078","おちる":"w079","ねる":"w080","くる":"w081","する":"w082","りょこうする":"w083","そうです":"w084","おとうさん":"w085","おかあさん":"w086","おねえさん":"w087","おにいさん":"w088","いもうとさん":"w089","おとうとさん":"w090","ちち":"w091","～ちゃん":"w092","こっち":"w093","いらっしゃい":"w094","父":"w095","つかれたでしょう？":"w096","どうぞ あがって ください":"w097","おじゃまします":"w098","あのう":"w099","これ":"w100","韓国":"w101","のり":"w102","どうぞ":"w103","ありがとうございます":"w104","お母さん":"w105","にる":"w106","～に にて いるね":"w107","これ / それ / あれ / どれ":"w108","ここ / そこ / あそこ / どこ":"w109","こちら / そちら / あちら / どちら":"w110","なにで":"w111","ちかてつ":"w112","しんかんせん":"w113","タクシー":"w114","バス":"w115","どうやって":"w116","～の？":"w117","まず":"w118","おおさか":"w119","えき":"w120","～て[で]":"w121","電車":"w122","のりかえる":"w123","もう":"w124","あんなに":"w125","人":"w126","ならぶ":"w127","～て[で] いる":"w128","ほんとだ":"w129","はやく":"w130","のる":"w131","え":"w132","あの":"w133","アトラクション":"w134","こわい":"w135","ぜんぜん":"w136","～より":"w137","ショー":"w138","ほう":"w139","～のに":"w140","とうきょう":"w141","ふくおか":"w142","ふね":"w143","おきなわ":"w144","ひこうき":"w145","えいご":"w146","きゅうしゅう":"w147","おおきい":"w148","すうがく":"w149","むずかしい":"w150","おもしろい":"w151","さっぽろ":"w152","きょうと":"w153","なら":"w154","こうべ":"w155","よこはま":"w156","おみやげ":"w157","プレゼント":"w158","おちゅうげん":"w159","おせいぼ":"w160","おかえし":"w161","きく":"w162","かく":"w163","きる":"w164","あける":"w165","いく":"w166","かんじ":"w167","～ことが できる":"w168","ひく":"w169","カタカナ":"w170","じてんしゃ":"w171","ロボット":"w172","いる":"w173","この":"w174","ニュース":"w175","スタジオ":"w176","ばしょ":"w177","聞く":"w178","～て みる":"w179","がめん":"w180","タッチ":"w181","～か":"w182","話しかける":"w183","～て いるの？":"w184","いろいろ":"w185","おしえる":"w186","～て くれる":"w187","～て くれない":"w188","～と おもう":"w189","～けど・けれど":"w190","てんき":"w191","メニュー":"w192","しんぶん":"w193","ちゅうごく":"w194","ダンス":"w195","おどる":"w196","あつい":"w197","～そうです":"w198","あたたかい":"w199","すずしい":"w200","さむい":"w201","あつさ":"w202","-さ":"w203","-まつ":"w204","つづく":"w205","みなさん":"w206","からだに 気を つけて ください":"w207","～みたいだ":"w208","すごく":"w209","～た":"w210","きんちょう":"w211","うまく":"w212","～ことが できなかった":"w213","有名":"w214","写真を とる":"w215","ええ":"w216","サイン":"w217","どうでしたか":"w218","アニメ":"w219","かりる":"w220","はいる":"w221","のむ":"w222","ジュース":"w223","とおい":"w224","ちかい":"w225","ひろい":"w226","げんきだ":"w227","しずかだ":"w228","べんりだ":"w229","かんじを よむ":"w230","ギターを ひく":"w231","カタカナを かく":"w232","じてんしゃに のる":"w233","うたを うたう":"w234","ダンスを おどる":"w235"},"s":{"にちようびは どうですか。":"s000","ろくじは どうですか。":"s001","にちようび は どうですか。":"s002","すみません。きんようびは ちょっと……。":"s003","バイトが あります。":"s004","つぎは いつに しますか。":"s005","わたしは 金ようびが いいです。金ようびの ６時は どうですか。":"s006","あ、すみません。わたし、金ようびは ちょっと……。バイトが あります。":"s007","日本の 高校生も バイト できますか。":"s008","はい、できますよ。うちの 高校は。":"s009","そうですか。じゃ、いつに しましょうか。":"s010","水ようびなら だいじょうぶですが……。":"s011","じゃ、水ようびの ６時に しましょう。":"s012","はーい。":"s013","いいですよ。":"s014","きんようびは どうですか。":"s015","すみません。きんようびは ちょっと……。バイトが あります。":"s016","テーマパークに いきたいです。":"s017","えいがを みたいです。":"s018","ともだちと あそびたいです。":"s019","したの なまえで よびませんか。":"s020","いっしょに おこのみやきを たべませんか。":"s021","いっしょに うたを うたいませんか。":"s022","イさん、キムさん、日本には いつ 来ますか。":"s023","７月 ２０日に 行きます。７月 １７日から 夏休みです。":"s024","わかりました。":"s025","どこか 行きたい ところが ありますか。":"s026","はい。テーマパークに 行きたいです。":"s027","ぼくは、ぎおんまつりが 見たいです。":"s028","オッケー。あ、それから、これからは みんな 下の なまえで よびませんか。":"s029","いいよ。":"s030","A しゅうまつ、なにか したい ことが ありますか。":"s031","B はい、ともだちと あそびたいです。":"s032","アイドルの グッズを かいたいです。":"s033","チーズタッカルビ、ビビンバ、トッポッキ などが たべたいです。":"s034","こちらは わたしの ちちです。":"s035","こちらは おにいさんですか。 はい、そうです。":"s036","ユミちゃん、こっち、こっち！":"s037","いらっしゃい。はるなの 父です。":"s038","こんにちは。イ·ユミと もうします。よろしく おねがいします。":"s039","つかれたでしょう？":"s040","いいえ、だいじょうぶです。":"s041","どうぞ あがって ください。":"s042","おじゃまします。":"s043","あのう、これ、韓国の のりです。どうぞ。":"s044","わあ、ありがとうございます。韓国の のり、大好きです。":"s045","はるなちゃん、お母さんに にて いるね。":"s046","これ、かんこくの のりです。どうぞ。":"s047","おさきに どうぞ。":"s048","ごじゆうに どうぞ。":"s049","おおさかまで ＿＿で いきます。":"s050","A おおさかまで どうやって いきますか。":"s051","B バスで いきます。":"s052","ここから どうやって 行くの？":"s053","ええと、まず、バスで おおさかえきまで 行って、それから 電車に のりかえるよ。":"s054","わあ、もう あんなに 人が ならんで いる。":"s055","ほんとだ。ユミちゃん、れんくん、はやく、はやく。":"s056","え？ あれに のるの？":"s057","うん。":"s058","あ、あの アトラクション、こ、こわく ない？":"s059","ぜんぜん こわく ないよ。":"s060","わたしは、アトラクションより ショーの ほうが いいのに……。":"s061","わあ、もう あんなに ひとが ならんで いる。":"s062","れんくんは いま おべんとうを たべて いる。":"s063","A アトラクションと ショーと どちらが いいですか。":"s064","B わたしは アトラクションより ショーの ほうが いいです。":"s065","B アトラクションの ほうが いいです。":"s066","かんじを よむ ことが できますか。":"s067","はい、できます。":"s068","いいえ、できません。":"s069","えいごの しんぶんを よむ ことが できます。":"s070","＿＿＿ことが できますか。":"s071","あ、ロボットが いる。":"s072","この ロボットに ニュース スタジオの ばしょを 聞いて みる？":"s073","うん、いいね。":"s074","がめんに タッチするか、話しかけてね。":"s075","ニュース スタジオは どこですか。":"s076","ユミちゃん、ノアくん、何 して いるの？":"s077","見て、見て。この ロボット、いろいろ おしえて くれるよ。":"s078","すごい！ ぼくも、サッカーせんしゅに なる ことが できるか 聞いて みる。":"s079","それは おしえて くれないと おもうけど……。":"s080","この ロボット、いろいろ おしえて くれるよ。":"s081","A この がめんに タッチして みる？  B うん、タッチして みる。":"s082","A この ロボット、スタジオの ばしょを おしえて くれるよ。  B すごい！":"s083","A えいごの しんぶんを よむ ことが できますか。":"s084","この あつさは ８月まつまで つづくそうです。":"s085","A そうですか。":"s086","あしたは ＿＿＿ そうです。":"s087","この あつさは ８月まつまで つづくそうです。みなさん、からだに 気を つけて ください。":"s088","ユミちゃん、アナウンサーみたい。すごく 上手だったよ。":"s089","そう？ きんちょうして、うまく よむ ことが できなかった。でも、おもしろかった。":"s090","れんくん、あの 人、有名な サッカーせんしゅじゃ ない？":"s091","あ、まえだせんしゅだ。":"s092","あ、あのう、すみません。いっしょに 写真を とっても いいですか。":"s093","ええ、いいですよ。":"s094","ここに サインも おねがいします。":"s095","いっしょに 写真を とっても いいですか。":"s096","すみません、写真は ちょっと……。":"s097","じゃ、ジュースを のんでも いいですか。":"s098","いいえ、それは ちょっと……。":"s099","A えいがは どうでしたか。":"s100","B とても おもしろかったです。 / あまり おもしろく なかったです。":"s101","A すみません。しゃしんを とっても いいですか。  B はい、いいですよ。":"s102"}};
const jk=t=>String(t||'').replace(/==|\*\*/g,'').trim();
const jaF=(k,t)=>(JAUD[k]||{})[jk(t)]||'';
const JSPK2=JSPK.replace('width="18" height="18"','width="16" height="16"'),JSPK3=JSPK.replace('width="18" height="18"','width="12" height="12"');
let jaAu=null,jaEl=null,jaQ=null;
const jaStop=()=>{try{if(jaAu)jaAu.pause();if('speechSynthesis' in window)speechSynthesis.cancel()}catch(e){}jaAu=null;jaEl=null;jaQ=null;document.querySelectorAll('.jlsp.ing,.jall.ing,.jv .jsp.ing,.jtap.ing').forEach(b=>b.classList.remove('ing'));document.querySelectorAll('.jln.ply,.jei.ply,.jsb.ply').forEach(b=>b.classList.remove('ply'))};
const jaPlay=(el,btn,done)=>{el.classList.add(el.classList.contains('jtap')?'ing':'ply');if(btn&&btn!==el)btn.classList.add('ing');
 const au=new Audio('audio/ja/'+el.dataset.a+'.mp3');jaAu=au;jaEl=el;const end=()=>{el.classList.remove('ply','ing');if(btn)btn.classList.remove('ing');if(jaAu===au){jaAu=null;done&&done()}};au.onended=end;au.onerror=end;au.play().catch(()=>{end();soonMsg('소리를 재생하지 못했어요.')})};
window.jaSay=b=>{const el=b.closest('[data-a]'),was=b.classList.contains('ing')||el.classList.contains('ply');jaStop();if(!was)jaPlay(el,b)};
window.jaAll=btn=>{const was=btn.classList.contains('ing');jaStop();if(was)return;const L=[...btn.closest('.jdl').querySelectorAll('.jln[data-a]')];btn.classList.add('ing');const q={};jaQ=q;
 const nx=i=>{if(jaQ!==q)return;if(i>=L.length){btn.classList.remove('ing');jaQ=null;return}L[i].scrollIntoView({block:'nearest',behavior:'smooth'});jaPlay(L[i],L[i].querySelector('.jlsp'),()=>setTimeout(()=>nx(i+1),380))};nx(0)};
addEventListener('hashchange',()=>jaStop());addEventListener('popstate',()=>jaStop());
document.addEventListener('visibilitychange',()=>{if(document.hidden)jaStop()});addEventListener('pagehide',()=>jaStop());
setInterval(()=>{if(jaAu&&jaEl&&!jaEl.isConnected)jaStop()},250);
let jvVoice=null;const jvPick=()=>{if(!('speechSynthesis' in window))return null;const vs=speechSynthesis.getVoices();return vs.find(v=>/^ja[-_]JP/i.test(v.lang))||vs.find(v=>/^ja/i.test(v.lang))||null};
if('speechSynthesis' in window){try{const o=speechSynthesis.onvoiceschanged;speechSynthesis.onvoiceschanged=()=>{jvVoice=jvPick();if(typeof o=='function')o()}}catch(e){}}
window.jvSay=(btn,si,wi)=>{const w=JVOC.find(x=>x.l==JV.l).secs[si].w[wi],f=jaF('w',w[0]);if(f){const was=btn.classList.contains('ing');jaStop();if(was)return;btn.dataset.a=f;btn.classList.add('ing');const au=new Audio('audio/ja/'+f+'.mp3');jaAu=au;jaEl=btn;const end=()=>{btn.classList.remove('ing');if(jaAu===au)jaAu=null};au.onended=end;au.onerror=end;au.play().catch(end);return}
 if(!('speechSynthesis' in window)){soonMsg('이 기기에서는 발음 듣기를 쓸 수 없어요.');return}
 jvVoice=jvVoice||jvPick();if(!jvVoice&&speechSynthesis.getVoices().length){soonMsg('이 휴대폰에는 일본어 음성이 없어요. 설정 > 음성(TTS)에서 일본어를 추가해 주세요.');return}
 speechSynthesis.cancel();const t=(w[1]||w[0]).replace(/[～\-\[\]（）()？?・]/g,' ').replace(/\s*\/\s*/g,'、'),u=new SpeechSynthesisUtterance(t);u.lang='ja-JP';if(jvVoice)u.voice=jvVoice;u.rate=.8;
 document.querySelectorAll('.jv .jsp.ing').forEach(b=>b.classList.remove('ing'));btn.classList.add('ing');u.onend=u.onerror=()=>btn.classList.remove('ing');speechSynthesis.speak(u)};
VOCAB[JN]={sub:'3~5과 단어 '+JZ.reduce((a,b)=>a+b,0)+'개 · 가리고 외우기',page:jvPage};
// ===== 3과 いつに しますか =====
NOTE[JN]['0-0']={pg:P([52,57]),b:[
 ['h','01 3과에서 배우는 것'],
 ['p','3과는 친구와 ==약속을 잡는== 이야기예요. 요일·시간을 제안하고, 승낙·거절하고, 하고 싶은 일을 말해요.'],
 ['tbl',['기능','기본 표현'],[['선택','つぎは いつに しますか。 (다음은 언제로 할까요?)'],['제안(1)','ろくじは どうですか。 (6시는 어때요?)'],['희망(2)','テーマパークに いきたいです。 (테마파크에 가고 싶어요.)'],['권유(1)','したの なまえで よびませんか。 (이름으로 부르지 않을래요?)']]],
 ['h','02 제안 표현 — ～は どうですか'],
 ['jpat','～は どうですか。','~은(는) 어때요? 상대에게 일정이나 의견을 ==제안하며 묻는== 표현이에요.'],
 ['jx',[['にちようびは どうですか。','일요일은 어때요?'],['ろくじは どうですか。','6시는 어때요?']]],
 ['jsw','にちようび は どうですか。',[['げつようび','월요일'],['かようび','화요일'],['すいようび','수요일'],['もくようび','목요일'],['きんようび','금요일'],['どようび','토요일']]],
 ['tip','**요일**은 ==月火水木金土日 + ようび==예요. (げつ·か·すい·もく·きん·ど·にち)\n**승낙** いいですね。/ いいですよ。 → 좋아요.'],
 ['h','03 거절 표현 — すみません。～は ちょっと……'],
 ['p','거절할 때는 먼저 ==すみません==이라고 하고, ==～は ちょっと……==로 말끝을 흐려 부드럽게 거절해요. 이유는 ==～が あります==로 말해요.'],
 ['jx',[['すみません。きんようびは ちょっと……。','미안해요. 금요일은 좀…….'],['バイトが あります。','아르바이트가 있어요.']]],
 ['tbl',['일정 어휘','뜻'],[['じゅく','학원'],['テスト','테스트, 시험'],['ひっこし','이사'],['やくそく','약속'],['ともだち','친구'],['バイト(アルバイト)','아르바이트']]],
 ['tip','**시간**은 ==숫자 + じ(時)==예요. 6時 ろくじ, 7時 ==しちじ==, 4時 ==よじ==, 9時 ==くじ== (よんじ·ななじ·きゅうじ ✕). 몇 시 = ==なんじ==.'],
 ['h','04 회화 1 — 다음에 언제 만날까요? (55쪽)'],
 ['jdl','SNS 대화방에서 다음 약속을 정해요.',[['れん','つぎは いつに しますか。','다음은 언제로 할까요?'],['ユミ','わたしは ==金ようびが いいです==。金ようびの ６時は どうですか。','저는 금요일이 좋아요. 금요일 6시는 어때요?'],['はるな','あ、すみません。わたし、金ようびは ちょっと……。バイトが あります。','아, 미안해요. 저, 금요일은 좀……. 아르바이트가 있어요.'],['ノア','日本の 高校生も バイト できますか。','일본 고등학생도 아르바이트 할 수 있어요?'],['はるな','はい、できますよ。うちの 高校は。','네, 할 수 있어요. 우리 학교는요.'],['ユミ','そうですか。じゃ、いつに しましょうか。','그래요? 그럼 언제로 할까요?'],['はるな','==水ようびなら だいじょうぶです==が……。','수요일이라면 괜찮은데요…….'],['ユミ','じゃ、水ようびの ６時に ==しましょう==。','그럼 수요일 6시로 해요.'],['れん','はーい。','네~.'],['ノア','いいですよ。','좋아요.']]],
 ['ul',['Q1 하루나네 학교는 아르바이트가 ==가능==해요. (うちの 高校は できます)','Q2 다음 약속은 ==수요일 6시==예요.','～に しますか(しましょうか) = ~로 할까요? / ～に しましょう = ~로 합시다 (결정)','できる = 할 수 있다 / ～なら = ~라면 / ～よ = ~요(알려 주는 말투)']],
 ['h','05 말하기 활동 (56~57쪽)'],
 ['jdl','',[['A','きんようびは どうですか。','금요일은 어때요?'],['B','すみません。きんようびは ちょっと……。バイトが あります。','미안해요. 금요일은 좀……. 아르바이트가 있어요.']]],
 ['p','일정표(학원·테스트·이사·약속·아르바이트 등)를 보고 ==ようび + は どうですか== 로 제안하고, 안 될 때는 ==すみません。～は ちょっと……== 로 거절하는 연습을 해요.']
]};
NOTE[JN]['0-1']={pg:P([58,62]),b:[
 ['h','06 희망 표현 — ～たい'],
 ['jpat','どこに いきたいですか。','어디에 가고 싶어요?'],
 ['jx',[['テーマパークに いきたいです。','테마파크에 가고 싶어요.'],['えいがを みたいです。','영화를 보고 싶어요.'],['ともだちと あそびたいです。','친구와 놀고 싶어요.']]],
 ['p','「～たい」는 ‘~(하)고 싶다’예요. 동사 ==ます형에서 ます를 빼고 たい==를 붙여요.'],
 ['tbl',['기본형','ます형','희망(たい)','뜻'],[['いく','いき','==いきたい==','가고 싶다'],['みる','み','==みたい==','보고 싶다'],['たべる','たべ','==たべたい==','먹고 싶다'],['あそぶ','あそび','==あそびたい==','놀고 싶다'],['する','し','==したい==','하고 싶다']]],
 ['tip','목적어에는 ==を==도 ==が==도 써요. (えいがを みたい / ぎおんまつりが 見たい)\n장소는 ==に== (テーマパークに いきたい), 함께하는 사람은 ==と== (ともだちと)'],
 ['jwd',[['おだいば','도쿄'],['あらしやま','교토'],['どうとんぼり','오사카'],['ぎおんまつり','교토 축제'],['ほっかいどう','홋카이도']]],
 ['h','07 권유 표현 — ～ませんか / ～ましょう'],
 ['jpat','～ませんか。','~(하)지 않을래요? 상대에게 ==함께 하자고 권하는== 표현이에요.'],
 ['jx',[['したの なまえで よびませんか。','이름으로 부르지 않을래요?'],['いっしょに おこのみやきを たべませんか。','같이 오코노미야키를 먹지 않을래요?'],['いっしょに うたを うたいませんか。','같이 노래를 부르지 않을래요?']]],
 ['tbl',['표현','뜻','쓰임'],[['～ませんか','~하지 않을래요?','권유(묻는 말)'],['～ましょう','~합시다','권유·결정'],['～ましょうか','~할까요?','제안하며 묻기'],['いいですね。','좋아요.','승낙']]],
 ['h','08 날짜 표현'],
 ['p','월은 ==숫자 + がつ(月)==, 일은 ==숫자 + にち(日)==예요. 일본 고유의 읽기가 있는 날이 있어요.'],
 ['tbl',['월','읽기','월','읽기'],[['1月','いちがつ','7月','==しちがつ=='],['2月','にがつ','8月','はちがつ'],['3月','さんがつ','9月','==くがつ=='],['4月','==しがつ==','10月','じゅうがつ'],['5月','ごがつ','11月','じゅういちがつ'],['6月','ろくがつ','12月','じゅうにがつ']]],
 ['tbl',['날짜','읽기','날짜','읽기'],[['1日','==ついたち==','8日','ようか'],['2日','ふつか','9日','ここのか'],['3日','みっか','10日','とおか'],['4日','よっか','14日','じゅうよっか'],['5日','いつか','17日','じゅうしちにち'],['6日','むいか','20日','==はつか=='],['7日','なのか','24日','にじゅうよっか']]],
 ['tip','1~10일, ==14일, 20일, 24일==은 고유 읽기예요. 그 밖의 날은 ==숫자 + にち==로 읽어요. (12日 じゅうににち, 17日 じゅうしちにち)\n7月 20日 = ==しちがつ はつか==, 7月 17日 = しちがつ じゅうしちにち'],
 ['h','09 회화 2 — 일본에서 하고 싶은 것 (59쪽)'],
 ['jdl','온라인에서 일본에서 하고 싶은 것을 이야기해요.',[['はるな','イさん、キムさん、日本には いつ 来ますか。','이 씨, 김 씨, 일본에는 언제 와요?'],['ユミ','７月 ２０日に 行きます。７月 １７日から 夏休みです。','7월 20일에 가요. 7월 17일부터 여름 방학이에요.'],['はるな','わかりました。','알겠어요.'],['れん','どこか 行きたい ところが ありますか。','어딘가 가고 싶은 곳이 있어요?'],['ユミ','はい。テーマパークに ==行きたいです==。','네. 테마파크에 가고 싶어요.'],['ノア','ぼくは、ぎおんまつりが ==見たいです==。','저는 기온마쓰리가 보고 싶어요.'],['れん','オッケー。あ、それから、これからは みんな 下の なまえで ==よびませんか==。','오케이. 아, 그리고 이제부터는 모두 이름으로 부르지 않을래요?'],['ユミ','いいよ。','좋아.']]],
 ['ul',['Q1 유미네 학교의 여름 방학은 ==7월 17일부터==예요.','Q2 노아가 일본에서 보고 싶은 것은 ==기온마쓰리==예요.','下の なまえ = 성이 아닌 ==이름== (성은 上の なまえ가 아니라 ‘みょうじ’)']],
 ['h','10 말하기·즐겁게 활동하기 (61~62쪽)'],
 ['jx',[['A しゅうまつ、なにか したい ことが ありますか。','주말에 뭔가 하고 싶은 것이 있어요?'],['B はい、ともだちと あそびたいです。','네, 친구와 놀고 싶어요.'],['アイドルの グッズを かいたいです。','아이돌 상품을 사고 싶어요.'],['チーズタッカルビ、ビビンバ、トッポッキ などが たべたいです。','치즈 닭갈비, 비빔밥, 떡볶이 등을 먹고 싶어요.']]],
 ['p','～など = ==~ 등== / いっしょに = 함께 / 하고 싶은 일: かいものを する, えいがを みる, ほっかいどうに いく']
]};
NOTE[JN]['0-2']={pg:P([63,67],143),b:[
 ['h','11 동사의 종류와 ます형 (워크시트 143쪽)'],
 ['tbl',['종류','특징','예'],[['1류 동사','어미가 う단(う·く·ぐ·す·つ·ぬ·ぶ·む·る)','あう, いく, およぐ, はなす, まつ, すわる, しぬ, あそぶ, よむ'],['2류 동사','어미 ==る==, 그 앞이 い단·え단','みる, おきる, おちる, たべる, ねる'],['3류 동사','불규칙','==くる · する · ～する(りょこうする)==']]],
 ['tbl',['종류','만드는 법','예'],[['1류','어미 う단 → ==い단 + ます==','いく → いきます, あそぶ → あそびます'],['2류','==る 없애고== ます','みる → みます, たべる → たべます'],['3류','불규칙','くる → ==きます==, する → ==します==']]],
 ['tbl',['기본형','정중형','부정형','과거형','과거 부정형'],[['いく 가다','いきます','いきません','いきました','いきませんでした'],['あう 만나다','あいます','あいません','あいました','あいませんでした'],['およぐ 수영하다','およぎます','およぎません','およぎました','およぎませんでした'],['はなす 말하다','はなします','はなしません','はなしました','はなしませんでした'],['まつ 기다리다','まちます','まちません','まちました','まちませんでした'],['すわる 앉다','すわります','すわりません','すわりました','すわりませんでした'],['しぬ 죽다','しにます','しにません','しにました','しにませんでした'],['あそぶ 놀다','あそびます','あそびません','あそびました','あそびませんでした'],['よむ 읽다','よみます','よみません','よみました','よみませんでした'],['みる 보다','みます','みません','みました','みませんでした'],['おきる 일어나다','おきます','おきません','おきました','おきませんでした'],['おちる 떨어지다','おちます','おちません','おちました','おちませんでした'],['たべる 먹다','たべます','たべません','たべました','たべませんでした'],['ねる 자다','ねます','ねません','ねました','ねませんでした'],['くる 오다','きます','きません','きました','きませんでした'],['する 하다','します','しません','しました','しませんでした'],['りょこうする 여행하다','りょこうします','りょこうしません','りょこうしました','りょこうしませんでした']]],
 ['tip','**정중형 + ます → 부정 ません → 과거 ました → 과거 부정 ませんでした** 순서로 외워요.\n어미가 る여도 ==おきる·おちる·みる·たべる·ねる==는 2류(る를 떼요).'],
 ['h','12 문화 — 일본 고등학생의 아르바이트 (63쪽)'],
 ['ul',['아르바이트 경험이 있는 고등학생은 ==30% 이상==이에요.','==교칙으로 금지하지 않으면== 가능해요. 편의점, 슈퍼마켓 점원, 음식점 서빙, 패스트푸드점이 많아요.','하는 이유: ==① 저금 ② 취미 살리기 ③ 사회 경험==','하지 않는 이유: ① 학교에서 금지 ② 학교생활(학업·동아리)과 병행이 힘듦 ③ 취미·입시 공부를 중시','아르바이트로 얻은 사회 경험으로 ==진로를 정하는== 학생도 많아요.','아르바이트 구인·구직 사이트나 앱에는 ==고등학생 카테고리==가 따로 있을 정도예요.']],
 ['h','13 もう いちど かくにん — 한눈에 정리 (64~65쪽)'],
 ['tbl',['표현','핵심 문장'],[['제안·선택','つぎは いつに しますか。 / ろくじは どうですか。'],['승낙','いいですね。 / いいですよ。'],['거절','すみません。きんようびは ちょっと……。'],['희망','テーマパークに いきたいです。 (どこに いきたいですか。)'],['권유','したの なまえで よびませんか。 / いっしょに ～ませんか。'],['날짜','７月 ２０日 = しちがつ はつか']]],
 ['tip','요약 문제 정답: ユミは ==テーマパーク==に 行きたいです。 / ノアは ==ぎおんまつり==が みたいです。']
]};
// ===== 4과 どうやって いくの？ =====
NOTE[JN]['1-0']={pg:P([68,71]),b:[
 ['h','01 4과에서 배우는 것'],
 ['tbl',['기능','기본 표현'],[['권유(2)','これ、かんこくの のりです。==どうぞ==。'],['방법·안내','ここから どうやって いくの？ / バスで おおさかえきまで いって、それから でんしゃに のりかえるよ。'],['상황 설명(1)','もう あんなに ひとが ならんで いる。'],['비교(1)','アトラクションより ショーの ほうが いいのに……。']]],
 ['h','02 가족 호칭'],
 ['jpat','おにいさんですか。 / はい、そうです。','남의 가족을 가리켜 묻고 답하는 표현'],
 ['tbl',['뜻','남의 가족을 말할 때','내 가족을 남에게 말할 때'],[['아버지','おとうさん','ちち'],['어머니','おかあさん','はは'],['언니, 누나','おねえさん','あね'],['오빠, 형','おにいさん','あに'],['여동생','==いもうとさん==','いもうと'],['남동생','==おとうとさん==','おとうと']]],
 ['jx',[['こちらは わたしの ちちです。','이분은 제 아버지예요.'],['こちらは おにいさんですか。 はい、そうです。','이분은 오빠(형)이신가요? 네, 그렇습니다.']]],
 ['tip','**남의 가족**은 높여서 ==お～さん==, **내 가족**을 남에게 말할 때는 낮춰서 ちち·はは처럼 말해요. 히라가나 표기와 발음이 다른 ==장음==: おかあさん[おかーさん], おとうさん[おとーさん], おにいさん[おにーさん], おねえさん[おねーさん]'],
 ['h','03 회화 1 — 하루나의 집을 방문해요 (69쪽)'],
 ['jdl','유미가 일본에서 하루나의 집을 방문해요.',[['はるな','ユミちゃん、こっち、こっち！','유미야, 이쪽, 이쪽!'],['父','いらっしゃい。はるなの 父です。','어서 와요. 하루나의 아버지예요.'],['ユミ','こんにちは。イ·ユミと もうします。よろしく おねがいします。','안녕하세요. 이유미라고 합니다. 잘 부탁드립니다.'],['父','つかれたでしょう？','피곤하지요?'],['ユミ','いいえ、だいじょうぶです。','아니요, 괜찮아요.'],['母','==どうぞ あがって ください==。','어서 올라오세요.'],['ユミ','==おじゃまします==。','실례합니다.'],['ユミ','あのう、これ、韓国の のりです。==どうぞ==。','저, 이거 한국 김이에요. 받으세요.'],['母','わあ、ありがとうございます。韓国の のり、大好きです。','와, 고맙습니다. 한국 김, 아주 좋아해요.'],['ユミ','はるなちゃん、お母さんに にて いるね。','하루나, 어머니를 닮았네.']]],
 ['ul',['Q1 유미가 선물로 가져온 것은 ==한국 김(のり)==이에요.','Q2 유미는 하루나가 ==어머니==를 닮았다고 했어요.','～ちゃん = ~야(친근한 호칭) / こっち = 이쪽(こちら보다 스스럼없음)']],
 ['h','04 방문 표현과 권유 표현(2) — どうぞ'],
 ['tbl',['장면','표현','뜻'],[['손님을 맞을 때','いらっしゃい。','어서 와요.'],['들어오라고 할 때','どうぞ あがって ください。','어서 올라오세요.'],['방문한 손님','おじゃまします。','실례하겠습니다.']]],
 ['tip','「あがって ください」는 보통 손님이 ==현관에서 실내로 들어올 때== ‘올라오세요, 들어오세요’라는 뜻으로 써요.'],
 ['jx',[['これ、かんこくの のりです。どうぞ。','이거 한국 김이에요. 받으세요.'],['おさきに どうぞ。','먼저 타세요(가세요).'],['ごじゆうに どうぞ。','자유롭게 가져가세요.']]],
 ['p','「どうぞ」는 ==권유·허락==의 표현이에요: 물건을 건넬 때(받으세요), 순서를 양보할 때(먼저 가세요), 자유롭게 하라고 할 때(자유롭게 가져가세요).'],
 ['h','05 こ·そ·あ·ど (지시 표현)'],
 ['tbl',['','사물','장소','방향'],[['こ (가까움)','これ 이것','ここ 여기','こちら / こっち 이쪽'],['そ (상대 쪽)','それ 그것','そこ 거기','そちら / そっち 그쪽'],['あ (먼 곳)','あれ 저것','あそこ 저기','あちら / あっち 저쪽'],['ど (의문)','どれ 어느 것','どこ 어디','どちら / どっち 어느 쪽']]]
]};
NOTE[JN]['1-1']={pg:P([72,75],144),b:[
 ['h','06 방법·수단 — ～で'],
 ['jpat','なにで いきますか。 / ちかてつで いきます。','무엇으로 갈까요? / 지하철로 가요. (で = 수단·방법)'],
 ['jsw','おおさかまで ＿＿で いきます。',[['バス','버스'],['しんかんせん','신칸센'],['タクシー','택시'],['ちかてつ','지하철'],['ひこうき','비행기'],['ふね','배']]],
 ['jx',[['A おおさかまで どうやって いきますか。','오사카까지 어떻게 가요?'],['B バスで いきます。','버스로 가요.']]],
 ['tip','**まで** = ~까지(도착점), **で** = ~(으)로(수단). どうやって = 어떻게, なにで = 무엇으로.'],
 ['h','07 회화 2 — 테마파크에 가요 (73쪽)'],
 ['jdl','대중교통으로 테마파크에 가요.',[['ユミ','ここから どうやって 行くの？','여기에서 어떻게 가는 거야?'],['れん','ええと、まず、バスで おおさかえきまで 行って、それから 電車に のりかえるよ。','음, 먼저 버스로 오사카역에 가서, 그리고 전철로 갈아탈 거야.'],['ノア','わあ、もう あんなに 人が ==ならんで いる==。','와, 벌써 저렇게 사람이 줄을 서 있네.'],['はるな','ほんとだ。ユミちゃん、れんくん、はやく、はやく。','정말이다. 유미야, 렌, 빨리 빨리.'],['ユミ','え？ あれに のるの？','어? 저걸 타는 거야?'],['はるな','うん。','응.'],['ユミ','あ、あの アトラクション、こ、こわく ない？','아, 저 놀이기구, 무, 무섭지 않아?'],['れん','ぜんぜん こわく ないよ。','전혀 무섭지 않아.'],['ユミ','わたしは、アトラクション==より== ショー==の ほうが== いいのに……。','나는 놀이기구보다 쇼 쪽이 좋은데…….']]],
 ['ul',['Q1 버스를 타고 ==오사카역==에서 전철로 갈아탔어요.','Q2 놀이기구보다 쇼를 보고 싶어 한 사람은 ==유미==예요.','～の？ = 문장 끝에서 질문(친한 사이 말투) / ～のに = ~한데(아쉬움)']],
 ['h','08 동사의 て형 만들기 (워크시트 144쪽)'],
 ['tbl',['동사의 종류','기본형','만드는 법','～て[で]'],[['1류','かく 쓰다','==く → いて==','かいて 쓰고'],['1류','およぐ 수영하다','==ぐ → いで==','およいで 수영하고'],['1류','はいる 들어가다','==う·つ·る → って==','はいって 들어가고'],['1류','やすむ 쉬다','==ぬ·ぶ·む → んで==','やすんで 쉬고'],['1류','はなす 말하다','==す → して==','はなして 말하고'],['1류(예외)','いく 가다','예외','==いって== 가고'],['2류','みる / たべる','==る 없애고 → て==','みて / たべて'],['3류','くる / する','불규칙','きて / して']]],
 ['tip','**예외 1류 동사**: ==はいる(들어가다·들어오다), かえる(돌아가다·돌아오다)==는 2류처럼 보이지만 1류예요. → はいって, かえって\n**いく**는 かいて식이 아니라 ==いって==예요. (いいて ✕)'],
 ['tbl',['기본형','て형','た형'],[['かく 쓰다','かいて','かいた'],['きく 듣다','きいて','きいた'],['およぐ 수영하다','およいで','およいだ'],['あう 만나다','あって','あった'],['まつ 기다리다','まって','まった'],['すわる 앉다','すわって','すわった'],['しぬ 죽다','しんで','しんだ'],['あそぶ 놀다','あそんで','あそんだ'],['よむ 읽다','よんで','よんだ'],['はなす 말하다','はなして','はなした'],['いく 가다','いって','いった'],['みる 보다','みて','みた'],['きる 입다','きて','きた'],['あける 열다','あけて','あけた'],['くる 오다','きて','きた'],['する 하다','して','した'],['りょこうする 여행하다','りょこうして','りょこうした']]],
 ['tip','た형은 て형의 ==て → た, で → だ==로 바꾸면 돼요. (かいて → かいた, よんで → よんだ)'],
 ['h','09 상황 설명(1) — ～て[で] いる'],
 ['jx',[['わあ、もう あんなに ひとが ならんで いる。','와, 벌써 저렇게 사람이 줄을 서 있네.'],['れんくんは いま おべんとうを たべて いる。','렌 군은 지금 도시락을 먹고 있다.']]],
 ['p','「～て[で] いる」는 ==‘~(하)고 있다’(진행), ‘~어 있다’(상태)==예요. 동사 ==て형 + いる==로 만들어요. (ならぶ → ならんで いる)'],
 ['h','10 비교 표현(1) — ～より ～の ほうが'],
 ['jx',[['A アトラクションと ショーと どちらが いいですか。','놀이 기구와 쇼 중 어느 쪽이 좋아요?'],['B わたしは アトラクションより ショーの ほうが いいです。','나는 놀이 기구보다 쇼 쪽이 좋아요.'],['B アトラクションの ほうが いいです。','놀이 기구 쪽이 좋아요.']]],
 ['tip','두 가지를 비교해 묻는 말: ==AとBと どちらが ～ですか==. 대답: ==AよりBの ほうが ～です== 또는 ==Bの ほうが ～です== (~쪽이)'],
 ['h','11 말하기 활동 — 일본의 도시 (75~76쪽)'],
 ['tbl',['도시','특징'],[['도쿄(とうきょう)','일본의 수도, 정치·경제·문화의 중심 (도쿄 스카이트리)'],['오사카(おおさか)','일본 제2의 도시, 유니버설 스튜디오 재팬·오사카성'],['삿포로(さっぽろ)','여름은 시원, 겨울은 설국 (유키마쓰리)'],['오키나와(おきなわ)','아름다운 자연 경관과 독특한 역사 문화'],['교토(きょうと)','과거 1,000년간 일본의 수도, 전통이 살아 숨 쉬는 도시 (긴카쿠지)'],['나라(なら)','일본에서 유네스코 세계 문화유산이 가장 많은 도시 (나라 공원)'],['고베(こうべ)','멋진 야경과 이국적인 항구 도시 (고베 포트 타워)'],['요코하마(よこはま)','일본의 차이나타운과 야경이 멋진 항구 도시']]],
 ['p','여행 관련 직업: ==지역 수배 전문가, 여행 상품 기획자, 관광 통역 안내사==']
]};
NOTE[JN]['1-2']={pg:P([76,81]),b:[
 ['h','12 문화 — 일본의 선물 문화 (77쪽)'],
 ['tbl',['이름','뜻'],[['おみやげ(お土産)','==남의 집을 방문할 때== 준비하는 선물, 또는 ==여행지에서 사 온== 선물'],['プレゼント','==생일·크리스마스== 등 특별한 날에 주는 선물'],['おちゅうげん(お中元)','7월 초~8월 중순에 보내는 선물'],['おせいぼ(お歳暮)','연말~2월 중순(교재 기준)에 보내는 선물'],['おかえし(お返し)','받은 선물에 대한 ==답례==']]],
 ['ul',['오추겐·오세이보는 ==평소 신세를 진== 지인, 직장 상사, 친척에게 감사의 마음을 전하는 선물이에요.','일본 선물 문화의 특징: 선물을 받으면 ==가까운 시일 안에 답례==하거나 감사의 말을 해요. (おかえし)','선물은 주로 ==실용적이면서 받는 사람이 부담스럽지 않은 금액의 과자류== 등을 준비해요.','일본 친구에게 한국에서 가져온 과자나 특산물을 주면 ‘오미야게’가 돼요.']],
 ['h','13 もう いちど かくにん — 정리 (78~79쪽)'],
 ['tbl',['주제','핵심'],[['가족 호칭','おかあさん·おとうさん·おにいさん·おねえさん의 장음, いもうとさん·おとうとさん'],['방법·수단','えきまで どうやって いきますか。 / バス·ちかてつ·タクシー·しんかんせん ＋ で'],['권유 どうぞ','これ、かんこくの おかしです。どうぞ。 / おさきに どうぞ。'],['상황 설명','もう あんなに ひとが ならんで いる。 (ならんで いる)'],['선물 문화','おかえし = 답례 / おみやげ = 방문·여행 선물 / おちゅうげん = 여름 선물']]],
 ['h','14 쉬어 가기 1 — 일본 상식 테스트 (80~81쪽)'],
 ['tbl',['번호','내용','○/×'],[['1','일본의 벚꽃은 홋카이도에서 가장 먼저 핀다.','× (오키나와 등 남쪽이 먼저)'],['2','일본에서는 자동차가 좌측통행을 한다.','○'],['3','일본에서는 지진이 발생하면 바로 104번에 전화한다.','× (긴급 번호는 110·119)'],['4','「すみません」은 감사를 표할 때도 사용한다.','○'],['5','일본 욕조에는 ‘오이다키’라는 물을 데워 주는 장치가 있다.','○'],['6','일본에는 돼지띠가 없다.','○ (멧돼지띠를 써요)'],['7','일본 학교는 3월에 신학기가 시작된다.','× (4월)'],['8','일본의 연호 ‘레이와’는 2020년부터 시작되었다.','× (2019년 5월)'],['9','일본에는 고양이섬이 있다.','○'],['10','「イケメン」은 ‘잘생긴 남자, 꽃미남’이라는 뜻이다.','○'],['11','후지산 정상은 계절과 관계없이 등반할 수 있다.','× (여름 한정)'],['12','일본인의 성씨는 1,000개 정도이다.','× (수만 개 이상)']]],
 ['tip','쉬어 가기의 정답은 교재 161·162쪽에 있어요. 여기 표는 일반 상식으로 정리한 것이니, 교재 정답과 다르면 교재를 따르세요.']
]};
// ===== 5과 しゃしんを とっても いいですか =====
NOTE[JN]['2-0']={pg:P([82,87]),b:[
 ['h','01 5과에서 배우는 것'],
 ['tbl',['기능','기본 표현'],[['제안(2)','この ロボットに ニュース スタジオの ばしょを きいて みる？'],['가능(1)','ぼくも サッカーせんしゅに なる ことが できるか きいて みる。'],['전언','この あつさは はちがつまつまで つづくそうです。'],['허가','いっしょに しゃしんを とっても いいですか。']]],
 ['h','02 가능 표현(1) — ～ことが できる'],
 ['jpat','～ことが できますか。','~할 수 있어요? (동사 ==기본형 + ことが できます==)'],
 ['jx',[['かんじを よむ ことが できますか。','한자를 읽을 수 있어요?'],['はい、できます。','네, 할 수 있어요.'],['いいえ、できません。','아니요, 못 해요.'],['えいごの しんぶんを よむ ことが できます。','영어 신문을 읽을 수 있어요.']]],
 ['jsw','＿＿＿ことが できますか。',[['かんじを よむ','한자를 읽다'],['ギターを ひく','기타를 치다'],['カタカナを かく','가타카나를 쓰다'],['じてんしゃに のる','자전거를 타다'],['うたを うたう','노래를 부르다'],['ダンスを おどる','춤을 추다']]],
 ['tip','보통체는 ==～ことが できる==(~할 수 있다), 부정은 ==できない / できません==, 과거 부정은 ==できなかった==예요. ひく = (현악기·피아노를) 치다·켜다.'],
 ['h','03 회화 1 — 안내 로봇 (85쪽)'],
 ['jdl','방송국을 견학하다가 안내 로봇을 만나요.',[['ユミ','あ、ロボットが いる。','아, 로봇이 있어.'],['ノア','この ロボットに ニュース スタジオの ばしょを ==聞いて みる==？','이 로봇에게 뉴스 스튜디오 장소를 물어볼까?'],['ユミ','うん、いいね。','응, 좋아.'],['ロボット','がめんに タッチするか、話しかけてね。','화면을 터치하거나 말을 걸어 줘.'],['ユミ','ニュース スタジオは どこですか。','뉴스 스튜디오는 어디예요?'],['はるな','ユミちゃん、ノアくん、何 して いるの？','유미야, 노아야, 뭐 하고 있어?'],['ノア','見て、見て。この ロボット、いろいろ おしえて ==くれる==よ。','봐, 봐. 이 로봇, 여러 가지 가르쳐 줘.'],['れん','すごい！ ぼくも、サッカーせんしゅに なる ことが できるか 聞いて みる。','대단하다! 나도 축구 선수가 될 수 있는지 물어볼래.'],['ユミ','それは おしえて くれないと おもうけど……。','그건 안 가르쳐 줄 거라고 생각하는데…….']]],
 ['ul',['Q1 유미가 로봇에게 물어본 장소는 ==뉴스 스튜디오==예요.','Q2 렌은 ==축구 선수가 될 수 있는지== 물어보려고 해요.','～か = ~거나·~는지 (がめんに タッチするか、話しかけて / なれるか 聞いて みる)']],
 ['h','04 제안 표현(2) — ～て[で] みる？'],
 ['jx',[['この ロボットに ニュース スタジオの ばしょを 聞いて みる？','이 로봇에게 뉴스 스튜디오 장소를 물어볼까?'],['うん、いいね。','응, 좋아.']]],
 ['p','「～て[で] みる？」는 ==‘~해 볼까?’== 라는 제안이에요. (동사 て형 + みる) 평서문에서는 ‘~해 보다’ → ぼくも 聞いて みる (나도 물어볼래).'],
 ['h','05 상황 설명(2) — ～て[で] くれる'],
 ['jx',[['この ロボット、いろいろ おしえて くれるよ。','이 로봇, 여러 가지 가르쳐 줘.'],['それは おしえて くれないと おもうけど……。','그건 안 가르쳐 줄 거라고 생각하는데…….']]],
 ['p','「～て[で] くれる」는 ==남이 나 또는 나와 가까운 사람에게 어떤 동작을 해 주다==(~해 주다)예요. 부정은 ==～て くれない==(~해 주지 않다). 「～と おもう」 = ~라고 생각하다.'],
 ['tip','**비교**: ～て いる(~하고 있다) / ～て みる(~해 보다) / ～て くれる(~해 주다) → 모두 동사 ==て형 + 보조 동사=='],
 ['h','06 말하기 활동 (87쪽)'],
 ['jx',[['A この がめんに タッチして みる？  B うん、タッチして みる。','A 이 화면을 터치해 볼까? B 응, 터치해 볼래.'],['A この ロボット、スタジオの ばしょを おしえて くれるよ。  B すごい！','A 이 로봇, 스튜디오 장소를 가르쳐 줘. B 대단하다!'],['A えいごの しんぶんを よむ ことが できますか。','A 영어 신문을 읽을 수 있어요?']]],
 ['jwd',[['てんき','날씨'],['ニュース','뉴스'],['メニュー','메뉴'],['しんぶん','신문'],['ちゅうごく','중국'],['ダンス','댄스, 춤'],['おどる','춤추다']]]
]};
NOTE[JN]['2-1']={pg:P([88,92]),b:[
 ['h','07 전언 표현 — ～そうです'],
 ['jpat','あしたは あつい そうです。','내일은 덥다고 합니다. (들은 이야기를 ==전하는== 표현)'],
 ['jx',[['この あつさは ８月まつまで つづくそうです。','이 더위는 8월 말까지 계속된다고 합니다.'],['A そうですか。','A 그래요?']]],
 ['jsw','あしたは ＿＿＿ そうです。',[['あつい','덥다'],['あたたかい','따뜻하다'],['すずしい','시원하다'],['さむい','춥다']]],
 ['tip','「～そうです」는 ==전해 들은 내용==을 말할 때 써요. 「そうですか」는 ‘그래요?’라는 맞장구예요.'],
 ['h','08 회화 2 — 캐스터 체험 (89쪽)'],
 ['jdl','유미가 뉴스 스튜디오에서 캐스터 체험을 해요.',[['ユミ','この あつさは ８月まつまで つづくそうです。みなさん、からだに 気を つけて ください。','이 더위는 8월 말까지 계속된다고 합니다. 여러분, 몸조심하세요.'],['はるな','ユミちゃん、アナウンサー==みたい==。すごく 上手だったよ。','유미야, 아나운서 같아. 굉장히 잘했어.'],['ユミ','そう？ きんちょうして、うまく よむ ことが ==できなかった==。でも、おもしろかった。','그래? 긴장해서 잘 못 읽었어. 하지만 재미있었어.'],['ノア','れんくん、あの 人、有名な サッカーせんしゅじゃ ない？','렌, 저 사람 유명한 축구 선수 아니야?'],['れん','あ、まえだせんしゅだ。','아, 마에다 선수다.'],['れん','あ、あのう、すみません。いっしょに 写真を ==とっても いいですか==。','저, 저기요. 같이 사진을 찍어도 될까요?'],['まえだ','ええ、いいですよ。','네, 좋아요.'],['れん','ここに サインも おねがいします。','여기에 사인도 부탁드립니다.']]],
 ['ul',['Q1 하루나는 유미에게 ==아나운서 같다(アナウンサーみたい)==, ==굉장히 잘했다(すごく 上手だったよ)== 고 칭찬했어요.','Q2 렌은 축구 선수에게 ==같이 사진 찍기==와 ==사인==을 부탁했어요.','あつさ = あつい + さ (형용사 + さ → 명사) / ～まつ = ~말 / ～みたいだ = ~같다']],
 ['h','09 형용사의 과거 표현 (워크시트 145쪽)'],
 ['p','い형용사는 ==어미 い → かった==, な형용사는 ==だ → だった(でした)== 로 과거를 만들어요.'],
 ['tbl',['','긍정','부정'],[['い형용사 현재','おもしろい / おもしろいです','おもしろく ない / おもしろく ないです'],['い형용사 과거','おもしろかった / おもしろかったです','おもしろく なかった / おもしろく なかったです'],['な형용사 현재','じょうずだ / じょうずです','じょうずじゃ ない / じょうずじゃ ないです'],['な형용사 과거','じょうずだった / じょうずでした','じょうずじゃ なかった / じょうずじゃ なかったです']]],
 ['tip','✕ おもしろいでした → ==おもしろかったです==\n✕ おもしろいく ない → ==おもしろく ない== (い를 く로)'],
 ['h','10 허가 표현 — ～ても[でも] いいですか'],
 ['jpat','～ても いいですか。','~해도 되나요? (동사 ==て형 + も いいですか==)'],
 ['jx',[['いっしょに 写真を とっても いいですか。','같이 사진을 찍어도 될까요?'],['ええ、いいですよ。','네, 좋아요. (승낙)'],['すみません、写真は ちょっと……。','죄송합니다, 사진은 좀……. (거절)'],['じゃ、ジュースを のんでも いいですか。','그럼 주스를 마셔도 되나요?'],['いいえ、それは ちょっと……。','아니요, 그건 좀…….']]],
 ['tbl',['동사','て형','허가 표현'],[['とる','とって','とっても いいですか'],['のむ','のんで','のんでも いいですか'],['かりる','かりて','かりても いいですか'],['はいる','はいって','はいっても いいですか'],['いく','いって','いっても いいですか']]],
 ['tip','て형이 ==で==로 끝나면 ==でも==(のんでも), 그 밖에는 ==ても==(とっても)예요.'],
 ['h','11 말하기 활동 (91~92쪽)'],
 ['jx',[['A えいがは どうでしたか。','영화는 어땠어요?'],['B とても おもしろかったです。 / あまり おもしろく なかったです。','매우 재미있었어요. / 별로 재미있지 않았어요.'],['A すみません。しゃしんを とっても いいですか。  B はい、いいですよ。','A 실례합니다. 사진을 찍어도 되나요? B 네, 좋아요.']]],
 ['p','매너 픽토그램 활동: 박물관 등에서 ==してもいい 행동 / してはいけない 행동==을 허가 표현으로 묻고 답해요. (しゃしんを とっても いいですか → ええ、いいですよ / ジュースを のんでも いいですか → いいえ、それは ちょっと……) 서비스업(승무원·관광 가이드·호텔리어)의 고객 응대 매뉴얼을 조사하는 활동도 있어요.']
]};
NOTE[JN]['2-2']={pg:P(145,90),b:[
 ['h','12 형용사 활용 정리 (워크시트 145쪽)'],
 ['tbl',['기본형','정중형','과거형','정중 과거형'],[['おもしろい 재미있다','おもしろいです','おもしろかった','おもしろかったです'],['とおい 멀다','とおいです','とおかった','とおかったです'],['ちかい 가깝다','ちかいです','ちかかった','ちかかったです'],['ひろい 넓다','ひろいです','ひろかった','ひろかったです'],['じょうずだ 잘하다','じょうずです','じょうずだった','じょうずでした'],['げんきだ 건강하다','げんきです','げんきだった','げんきでした'],['しずかだ 조용하다','しずかです','しずかだった','しずかでした'],['べんりだ 편리하다','べんりです','べんりだった','べんりでした']]],
 ['tbl',['기본형','부정형','정중 부정형','과거 부정형','정중 과거 부정형'],[['おもしろい','おもしろく ない','おもしろく ないです','おもしろく なかった','おもしろく なかったです'],['とおい 멀다','とおく ない','とおく ないです','とおく なかった','とおく なかったです'],['ちかい 가깝다','ちかく ない','ちかく ないです','ちかく なかった','ちかく なかったです'],['ひろい 넓다','ひろく ない','ひろく ないです','ひろく なかった','ひろく なかったです'],['じょうずだ','じょうずじゃ ない','じょうずじゃ ないです','じょうずじゃ なかった','じょうずじゃ なかったです'],['げんきだ 건강하다','げんきじゃ ない','げんきじゃ ないです','げんきじゃ なかった','げんきじゃ なかったです'],['しずかだ 조용하다','しずかじゃ ない','しずかじゃ ないです','しずかじゃ なかった','しずかじゃ なかったです'],['べんりだ 편리하다','べんりじゃ ない','べんりじゃ ないです','べんりじゃ なかった','べんりじゃ なかったです']]],
 ['tip','**い형용사**: 어미 い → ==く ない / かった / く なかった==\n**な형용사**: だ → ==じゃ ない / だった / じゃ なかった== (정중체는 です·でした·じゃ ないです·じゃ なかったです)'],
 ['h','13 3~5과 문법 한눈에 보기'],
 ['tbl',['과','표현','형태','예'],[['3','제안','～は どうですか','ろくじは どうですか。'],['3','희망','ます형 − ます + ==たい==','いきたいです'],['3','권유','ます형 + ==ませんか==','よびませんか'],['4','수단','명사 + ==で==','バスで いきます'],['4','진행·상태','て형 + ==いる==','ならんで いる'],['4','비교','Aより Bの ==ほうが==','ショーの ほうが いい'],['5','가능','기본형 + ==ことが できる==','よむ ことが できる'],['5','제안','て형 + ==みる？==','聞いて みる？'],['5','해 주다','て형 + ==くれる==','おしえて くれる'],['5','전언','～ ==そうです==','あついそうです'],['5','허가','て형 + ==も いいですか==','とっても いいですか']]]
]};
// 필기가 있는 중단원 번호 → 교과서 쪽 이미지는 pg 에 연결됨
})();

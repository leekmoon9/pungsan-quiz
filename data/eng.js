// ===== 영어 : 올림포스 지문별 필기 + 문제(기본·실전·어휘) + 단어장 =====
// 지금은 12강 8번(카페인) 1개. 지문을 늘릴 때는 아래 EP(지문 모음)에 같은 모양으로 한 개씩 더하면 돼요.
(()=>{
const EN='영어';
const UN=['올림포스'];
const G0='영어Ⅱ · 올림포스 12강 8번';
NOTE[EN]={};

// ----- 지문 12강 8번 : 문장 · 해석 -----
const S=[
 'The “jolt” of caffeine does wear off.',
 'Caffeine is removed from your system by an enzyme within your liver, which gradually degrades it over time.',
 'Based in large part on genetics, some people have a more efficient version of the enzyme that degrades caffeine, allowing the liver to rapidly clear it from the bloodstream.',
 'These rare individuals can drink an espresso with dinner and fall fast asleep at midnight without a problem.',
 'Others, however, have a slower-acting version of the enzyme.',
 'It takes far longer for their system to eliminate the same amount of caffeine.',
 'As a result, they are very sensitive to caffeine’s effects.',
 'One cup of tea or coffee in the morning will last much of the day, and should they have a second cup, even early in the afternoon, they will find it difficult to fall asleep in the evening.',
 'Aging also alters the speed of caffeine clearance: the older we are, the longer it takes our brain and body to remove caffeine, and thus the more sensitive we become in later life to caffeine’s sleep-disrupting influence.'];
const KO=[
 '카페인의 ‘짜릿한 자극’은 정말로 사라진다.',
 '카페인은 간 속의 효소에 의해 몸에서 제거되는데, 이 효소는 시간이 지나면서 카페인을 서서히 분해한다.',
 '대체로 유전에 근거해, 어떤 사람들은 카페인을 분해하는 효소를 더 효율적인 형태로 가지고 있어서, 간이 혈류에서 카페인을 빠르게 제거할 수 있다.',
 '이런 드문 사람들은 저녁 식사와 함께 에스프레소를 마셔도 자정에 문제없이 깊이 잠들 수 있다.',
 '그러나 다른 사람들은 더 느리게 작용하는 형태의 효소를 가지고 있다.',
 '그들의 몸이 같은 양의 카페인을 제거하는 데는 훨씬 더 오래 걸린다.',
 '그 결과 그들은 카페인의 효과에 매우 민감하다.',
 '아침에 마신 차나 커피 한 잔은 하루의 대부분 동안 지속되고, 오후 이른 시간이라 해도 두 번째 잔을 마신다면 저녁에 잠들기 어렵다는 것을 알게 될 것이다.',
 '노화 또한 카페인 제거 속도를 바꾼다. 나이가 많을수록 뇌와 몸이 카페인을 없애는 데 더 오래 걸리고, 따라서 노년에는 카페인의 수면 방해 영향에 더 민감해진다.'];
const PASS=S.join(' ');

// ----- 단어·숙어 : [영어, 지문 속 뜻, 종류(w 단어 · p 숙어), 문장 번호(1~), 지문 속 모양] -----
const W=[
 ['jolt','짜릿한 자극, 충격','w',1,'jolt'],
 ['wear off','(효과·느낌이) 서서히 사라지다','p',1,'wear off'],
 ['remove','제거하다','w',2,'removed'],
 ['system','(몸의) 체내, 신체','w',2,'system'],
 ['enzyme','효소','w',2,'enzyme'],
 ['liver','간','w',2,'liver'],
 ['gradually','점차, 서서히','w',2,'gradually'],
 ['degrade','분해하다','w',2,'degrades'],
 ['over time','시간이 지나면서','p',2,'over time'],
 ['based on','~에 근거하여','p',3,'Based'],
 ['in large part','대부분, 상당 부분','p',3,'in large part'],
 ['genetics','유전(적 특성)','w',3,'genetics'],
 ['efficient','효율적인','w',3,'efficient'],
 ['version','(변형된) 형태, 유형','w',3,'version'],
 ['allow A to V','A가 V하게 해 주다','p',3,'allowing'],
 ['rapidly','빠르게','w',3,'rapidly'],
 ['clear','(몸에서) 없애다','w',3,'clear'],
 ['bloodstream','혈류','w',3,'bloodstream'],
 ['rare','드문','w',4,'rare'],
 ['individual','(한) 사람, 개인','w',4,'individuals'],
 ['fast asleep','깊이 잠든','p',4,'fast asleep'],
 ['without a problem','문제없이','p',4,'without a problem'],
 ['slower-acting','더 느리게 작용하는','w',5,'slower-acting'],
 ['It takes ~ for A to V','A가 V하는 데 (시간이) 걸리다','p',6,'It takes'],
 ['eliminate','제거하다, 없애다','w',6,'eliminate'],
 ['amount','양','w',6,'amount'],
 ['as a result','그 결과','p',7,'As a result'],
 ['sensitive','민감한','w',7,'sensitive'],
 ['be sensitive to','~에 민감하다','p',7,'sensitive to'],
 ['effect','효과, 영향','w',7,'effects'],
 ['last','지속되다','w',8,'last'],
 ['much of the day','하루의 대부분','p',8,'much of the day'],
 ['have a second cup','한 잔 더 마시다','p',8,'have a second cup'],
 ['fall asleep','잠들다','p',8,'fall asleep'],
 ['find it difficult to V','V하기 어렵다고 느끼다','p',8,'find it difficult to'],
 ['aging','노화','w',9,'Aging'],
 ['alter','(부분적으로) 바꾸다','w',9,'alters'],
 ['clearance','제거(율)','w',9,'clearance'],
 ['the 비교급, the 비교급','~할수록 더 …하다','p',9,'the older we are, the longer'],
 ['thus','따라서, 그러므로','w',9,'thus'],
 ['in later life','노년에','p',9,'in later life'],
 ['disrupt','방해하다','w',9,'sleep-disrupting'],
 ['influence','영향(력)','w',9,'influence']];
const K={};W.forEach(w=>K[w[0]]=w[1]);
// 짝짓기 보기: 단어만 주면 올바른 뜻, [단어,다른 뜻]을 주면 일부러 틀린 뜻
const P=(...a)=>a.map(x=>Array.isArray(x)?x[0]+' – '+x[1]:x+' – '+K[x]).join(' · ');
const E=(...a)=>a.map(x=>x+'='+K[x]).join(', ');

// ----- 문제 : 기본 -----
const gB=['강조의 do','관계대명사 which','분사구문','병렬 구조','의미상 주어','Should 도치','the 비교급 구문','가목적어 it','어법 선택','글의 내용'];
const QB=[
 {g:0,q:'The “jolt” of caffeine does wear off.\n\n위 문장의 does wear off에서 does의 쓰임으로 알맞은 것은?',o:['동사 wear off의 뜻을 강조한다','의문문을 만드는 조동사이다','부정문을 만드는 조동사이다','앞의 동사를 대신하는 대동사이다','‘하다’라는 뜻의 본동사이다'],a:0,e:'긍정문의 동사 앞에 쓴 do/does/did는 동사를 강조해요. ‘카페인의 짜릿한 자극은 정말로 사라진다’는 뜻이에요.'},
 {g:1,q:'Caffeine is removed from your system by an enzyme within your liver, which gradually degrades it over time.\n\n밑줄 친 __which__의 선행사는 caffeine이다.',a:false,e:'which의 선행사는 an enzyme(효소)이고, it이 caffeine이에요. degrades가 단수 동사인 것도 단수 선행사 an enzyme에 맞춘 거예요.'},
 {g:2,q:'다음 문장의 ⓐ, ⓑ에 들어갈 말이 순서대로 알맞게 짝지어진 것은?\n\nSome people have a more efficient version of the enzyme ⓐ degrades caffeine, ⓑ the liver to rapidly clear it from the bloodstream.',o:['that – allowing','what – allowing','that – allowed','what – allowed','that – to allow'],a:0,e:'ⓐ 선행사 the enzyme 뒤에 주어 없는 절이 오므로 주격 관계대명사 that (what은 선행사를 포함). ⓑ 앞 절의 결과를 나타내는 분사구문이고 목적어 the liver가 있으니 능동 allowing.'},
 {g:3,q:'These rare individuals can drink an espresso with dinner and fall fast asleep at midnight without a problem.\n\n접속사 and는 조동사 can 뒤의 두 동사원형 drink와 fall을 연결한다.',a:true,e:'can drink ~ and (can) fall ~ — 조동사 can을 공유하는 두 동사원형이에요.'},
 {g:4,q:'It takes far longer for their system to eliminate the same amount of caffeine.\n\n밑줄 친 __for their system__의 역할로 알맞은 것은?',o:['to eliminate의 의미상 주어','가주어 It의 진주어','전치사 for의 목적어가 되는 부사구','동사 takes의 목적어','far longer를 꾸미는 수식어'],a:0,e:'It takes + 시간 + for A to V = A가 V하는 데 (시간이) 걸린다. for A는 to부정사의 의미상 주어예요.'},
 {g:5,q:'Should they have a second cup, they will find it difficult to fall asleep.\n\n위 문장의 Should they have a second cup과 같은 뜻의 표현은?',o:['If they should have a second cup','If should they have a second cup','If they would have a second cup','Unless they have a second cup','Though they have a second cup'],a:0,e:'가정법 미래의 If S should V에서 If를 생략하면 Should S V로 도치돼요(should는 조동사이므로 주어 앞으로).'},
 {g:6,q:'The older we are, the longer it takes our brain and body to remove caffeine.\n\n위 문장의 뜻으로 알맞은 것은?',o:['나이가 많을수록 뇌와 몸이 카페인을 없애는 데 더 오래 걸린다','나이가 많을수록 카페인을 더 빨리 없앤다','카페인을 많이 마실수록 나이가 더 든다','나이가 적을수록 카페인을 없애는 데 더 오래 걸린다','카페인을 없앨수록 나이가 들어도 덜 민감해진다'],a:0,e:'the 비교급 ~, the 비교급 … = ~할수록 더 …하다. 나이 ↑ → 제거 시간 ↑.'},
 {g:7,q:'They will find it difficult to fall asleep in the evening.\n\n밑줄 친 __it__의 역할로 알맞은 것은?',o:['가목적어','가주어','앞 문장을 받는 인칭대명사','강조 구문의 it','비인칭 주어'],a:0,e:'find + it(가목적어) + difficult(목적격 보어) + to fall asleep(진목적어). 긴 to부정사를 뒤로 보내고 it을 앞에 둔 구조예요.'},
 {g:8,q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nThe “jolt” of caffeine ⓐ(does / do) ⓑ(wears / wear) off.',o:['does – wear','does – wears','do – wear','do – wears','doing – wear'],a:0,e:'ⓐ 주어 The “jolt”(단수)에 수를 일치시켜 does (of caffeine은 수식어). ⓑ 강조의 조동사 does 뒤에는 동사원형 wear.'},
 {g:8,q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nⓐ(Basing / Based) in large part on genetics, some people have a more efficient version of the enzyme, allowing the liver ⓑ(rapidly clearing / to rapidly clear) caffeine.',o:['Based – to rapidly clear','Based – rapidly clearing','Basing – to rapidly clear','Basing – rapidly clearing','Base – to rapidly clear'],a:0,e:'ⓐ base A on B(A를 B에 근거를 두다)의 수동이라 과거분사 Based. ⓑ allow + 목적어 + to부정사.'},
 {g:8,q:'다음 문장의 ⓐ, ⓑ, ⓒ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nIt takes ⓐ(very / far) longer ⓑ(for / of) their system ⓒ(eliminating / to eliminate) the same amount of caffeine.',o:['far – for – to eliminate','very – for – to eliminate','far – of – to eliminate','far – for – eliminating','very – of – eliminating'],a:0,e:'ⓐ 비교급 longer는 far·much·even·still·a lot이 강조 (very는 원급만). ⓑ 의미상 주어는 for + 목적격 (of는 kind·wise 같은 성격 형용사 뒤). ⓒ 진주어 자리는 to부정사.'},
 {g:7,q:'다음 문장의 빈칸에 알맞은 한 단어를 쓰시오. (가목적어)\n\nOne more cup of coffee in the afternoon, and they will find [빈칸] difficult to fall asleep in the evening.',a:['it'],m:'it',e:'find + 가목적어 it + 형용사 보어 + 진목적어(to부정사).'},
 {g:6,q:'다음 우리말과 같은 뜻이 되도록 빈칸에 알맞은 한 단어를 쓰시오.\n\n나이가 들수록 뇌와 몸이 카페인을 없애는 데 더 오래 걸린다.\n→ The [빈칸] we are, the longer it takes our brain and body to remove caffeine.',a:['older'],m:'older',e:'the 비교급 ~, the 비교급 … 구문. old의 비교급은 older예요.'},
 {g:9,q:'윗글에 따르면, 사람마다 카페인이 몸에서 없어지는 속도가 다른 까닭으로 언급된 것은?\n\n' + PASS,o:['간 속 효소의 효율(유전)과 나이(노화)','하루에 마시는 커피의 양과 잠든 시간','체중과 성별','식사 시간과 운동량','카페인의 종류와 마시는 온도'],a:0,e:'효소의 효율은 유전의 영향을 크게 받고, 나이가 들수록 제거 속도가 달라진다고 했어요.'}
];
// ----- 문제 : 실전 -----
const gX=['어법성 판단','어휘 쓰임 판단','빈칸 추론','요지 파악','내용 불일치','글의 순서','요약문 완성','영작','어법 문장 고르기'];
const NN=['','','','',''];
const QX=[
 {g:0,ns:1,q:'다음 글의 밑줄 친 부분 중, 어법상 틀린 것은?\n\nCaffeine is ①__removed__ from your system by an enzyme within your liver, ②__which__ gradually degrades it over time. Based in large part on genetics, some people have a more efficient version of the enzyme ③__that__ degrades caffeine, ④__allowed__ the liver to rapidly clear it from the bloodstream. It takes far longer ⑤__for__ their system to eliminate the same amount of caffeine.',o:NN,a:3,e:'④ 앞 절의 결과를 나타내는 분사구문이고 뒤에 목적어(the liver)가 있으니 능동의 allowing이어야 해요.'},
 {g:1,ns:1,q:'다음 글의 밑줄 친 부분 중, 문맥상 낱말의 쓰임이 적절하지 않은 것은?\n\nOthers have a slower-acting version of the enzyme, so they are very ①__sensitive__ to caffeine’s effects. One cup of tea or coffee in the morning will ②__last__ much of the day, and they will find it ③__difficult__ to fall asleep in the evening. Aging also alters the speed of caffeine clearance: the ④__older__ we are, the ⑤__shorter__ it takes our brain and body to remove caffeine.',o:NN,a:4,e:'나이가 들수록 카페인을 없애는 데 시간이 ‘더 오래’ 걸리니 shorter가 아니라 longer여야 해요.'},
 {g:2,q:'빈칸에 들어갈 말로 가장 적절한 것은?\n\nOthers, however, have a slower-acting version of the enzyme. It takes far longer for their system to eliminate the same amount of caffeine. As a result, they are very [빈칸] to caffeine’s effects.',o:['sensitive','resistant','indifferent','accustomed','immune'],a:0,e:'제거가 느려 카페인이 오래 남으니 효과에 ‘민감하다(sensitive)’. 나머지는 모두 ‘영향을 덜 받는다’는 방향이에요.'},
 {g:3,q:'윗글의 요지로 가장 적절한 것은?\n\n' + PASS,o:['카페인이 몸에서 분해되는 속도는 유전과 나이에 따라 달라서, 사람마다 카페인에 대한 민감도가 다르다','간에서 카페인이 분해되므로 간 건강이 수면의 질을 결정한다','나이가 들수록 카페인 효과를 유지하려면 섭취량을 늘려야 한다','저녁에 에스프레소를 마셔도 모든 사람은 쉽게 잠들 수 있다','카페인의 각성 효과는 시간이 지나도 사라지지 않는다'],a:0,e:'효소의 효율(유전)과 나이에 따라 카페인 제거 속도와 민감도가 달라진다는 것이 글 전체의 요지예요.'},
 {g:4,q:'윗글의 내용과 일치하지 않는 것은?\n\n' + PASS,o:['나이가 들수록 카페인을 제거하는 속도가 빨라진다','카페인은 간 속의 효소에 의해 분해된다','효소의 효율은 유전의 영향을 크게 받는다','느린 효소를 가진 사람은 같은 양을 없애는 데 더 오래 걸린다','아침에 마신 한 잔의 효과가 하루 대부분 이어질 수 있다'],a:0,e:'마지막 문장: 나이가 많을수록 제거에 더 오래 걸려요(빨라진다 ✕).'},
 {g:5,q:'주어진 글 다음에 이어질 글의 순서로 가장 적절한 것은?\n\nBased in large part on genetics, some people have a more efficient version of the enzyme that degrades caffeine, allowing the liver to rapidly clear it from the bloodstream.\n\n(A) Others, however, have a slower-acting version of the enzyme. It takes far longer for their system to eliminate the same amount of caffeine.\n\n(B) These rare individuals can drink an espresso with dinner and fall fast asleep at midnight without a problem.\n\n(C) As a result, they are very sensitive to caffeine’s effects. One cup of tea or coffee in the morning will last much of the day.',o:['(B) – (A) – (C)','(A) – (C) – (B)','(B) – (C) – (A)','(C) – (A) – (B)','(C) – (B) – (A)'],a:0,e:'(B) These rare individuals가 주어진 글의 ‘빠른 효소를 가진 사람’을 받고 → (A) Others, however로 반대 사례 → (C) As a result로 결과를 이어요.'},
 {g:6,q:'윗글의 내용을 한 문장으로 요약하려 한다. 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?\n\nThe speed at which caffeine is (A) from the body depends on genetics and (B), which determines how sensitive a person is to its effects.',o:['removed – age','delivered – diet','stored – gender','produced – weight','absorbed – height'],a:0,e:'효소가 카페인을 ‘제거(removed)’하는 속도는 유전과 나이(age)에 좌우돼요.'},
 {g:7,q:'다음 우리말과 같은 뜻이 되도록 빈칸에 알맞은 한 단어를 쓰시오.\n\n나이가 들수록 우리는 카페인의 수면 방해 효과에 더 민감해진다.\n→ The older we are, the [빈칸] sensitive we become to caffeine’s sleep-disrupting influence.',a:['more'],m:'more',e:'the 비교급 ~, the 비교급 … 구문. sensitive의 비교급은 more sensitive예요.'},
 {g:7,q:'두 문장이 같은 뜻이 되도록 빈칸에 알맞은 한 단어를 쓰시오.\n\nShould they have a second cup, they will find it difficult to fall asleep.\n= If they [빈칸] have a second cup, they will find it difficult to fall asleep.',a:['should'],m:'should',e:'If를 생략하면 should가 주어 앞으로 도치돼요. 되돌리면 If they should have ~.'},
 {g:8,q:'다음 중 어법상 올바른 문장은?',o:['The older we are, the longer it takes our brain to remove caffeine.','The older we are, longer it takes our brain to remove caffeine.','The more old we are, the more long it takes our brain to remove caffeine.','The older are we, the longer takes it our brain to remove caffeine.','The old we are, the long it takes our brain to remove caffeine.'],a:0,e:'the + 비교급(older, longer) ~, the + 비교급 … 이고 절 안의 어순은 평서문(S+V)이에요.'}
];
// ----- 문제 : 어휘 (단어장의 단어·숙어를 적은 문제로 넓게 다룸) -----
const gV=['영어 단어 뜻','영어 숙어 뜻','영어 어휘 활용'];
const QV=[
 {g:0,q:'다음 중 영단어와 윗글에서의 뜻이 모두 바르게 짝지어진 것은?',o:[P('enzyme','liver','bloodstream'),P('degrade',['gradually','갑자기'],'system'),P('remove',['clear','유전'],'eliminate'),P('genetics',['efficient','효율이 떨어지는'],'version'),P('rapidly','jolt',['individual','양'])],a:0,e:'바른 뜻 — '+E('enzyme','liver','bloodstream')+'. 나머지 보기에는 gradually=점차(갑자기 ✕), clear=(몸에서) 없애다, efficient=효율적인, individual=(한) 사람이 틀리게 섞여 있어요.'},
 {g:0,q:'다음 중 영단어와 윗글에서의 뜻이 잘못 짝지어진 것은?',o:[P('rare','sensitive','effect'),P('last','alter','clearance'),P('thus','disrupt','influence'),P('amount','aging',['slower-acting','더 빠르게 작용하는']),P('individual','jolt','rapidly')],a:3,e:'slower-acting은 ‘더 느리게 작용하는’이에요. 나머지는 모두 맞아요: '+E('rare','sensitive','effect','last','alter','clearance','thus','disrupt','influence','amount','aging')+'.'},
 {g:1,q:'다음 중 영어 표현과 윗글에서의 뜻이 모두 바르게 짝지어진 것은?',o:[P('wear off','over time','as a result'),P('in large part','based on',['in later life','청년기에']),P('fall asleep',['fast asleep','얕게 잠든'],'without a problem'),P(['much of the day','하루의 일부'],'have a second cup','be sensitive to'),P(['allow A to V','A가 V하지 못하게 하다'],'find it difficult to V','It takes ~ for A to V')],a:0,e:'바른 뜻 — '+E('wear off','over time','as a result')+'. 나머지는 in later life=노년에, fast asleep=깊이 잠든, much of the day=하루의 대부분, allow A to V=A가 V하게 해 주다로 바로잡아요.'},
 {g:2,q:'윗글의 내용을 요약한 글이다. 빈칸 (A)~(D)에 들어갈 말로 가장 적절한 것은?\n\nThe (A) of caffeine fades as an (B) in the liver breaks it down. People with a more (C) version of this enzyme can clear caffeine from the blood (D), so they can sleep well even after an evening espresso.',o:['jolt – enzyme – efficient – rapidly','amount – enzyme – efficient – gradually','jolt – individual – rare – rapidly','effect – liver – efficient – gradually','jolt – enzyme – sensitive – gradually'],a:0,e:'(A) jolt(짜릿한 자극) (B) enzyme(효소) (C) efficient(효율적인) (D) rapidly(빠르게). 이 사람들은 효소가 빨라서 저녁 에스프레소를 마셔도 잘 자요.'},
 {g:1,q:'빈칸 (A)~(C)에 들어갈 표현으로 가장 적절한 것은?\n\n(A) Don’t worry. The effect of the medicine will [빈칸] in a few hours.\n(B) He finished the hard task [빈칸] and never complained.\n(C) She is very [빈칸] loud noise, so she can’t sleep.',o:['wear off – without a problem – sensitive to','over time – as a result – based on','wear off – in later life – much of the day','fall asleep – without a problem – in large part','over time – in later life – sensitive to'],a:0,e:'(A) wear off(서서히 사라지다) (B) without a problem(문제없이) (C) be sensitive to(~에 민감하다).'},
 {g:2,q:'빈칸 (A)~(C)에 들어갈 말이 순서대로 바르게 짝지어진 것은?\n\n(A) The more we exercise, [빈칸] stronger we become.\n(B) She found [빈칸] difficult to fall asleep.\n(C) The app allows users [빈칸] share photos.',o:['the – it – to','the – that – to','a – it – to','the – it – sharing','a – that – sharing'],a:0,e:'(A) the 비교급 ~, the 비교급 … (B) find + 가목적어 it + 형용사 + to V (C) allow A to V.'},
 {g:2,q:'다음 중 의미가 서로 비슷한 말끼리 짝지어지지 않은 것은?',o:['eliminate – get rid of · remove – take away','gradually – little by little · thus – therefore','rapidly – quickly · degrade – break down','alter – maintain · influence – effect','rare – uncommon · clearance – removal'],a:3,e:'alter(바꾸다)의 비슷한 말은 change·modify이고, maintain(유지하다)은 오히려 반대에 가까워요. influence ≒ effect는 맞아요.'},
 {g:2,q:'다음 중 밑줄 친 단어의 뜻이 윗글에서 쓰인 뜻과 다른 것은?',o:['A newer __version__ of the software fixed the problem.','The gardener tried to __clear__ the weeds from the path.','The new law will __alter__ the way people pay taxes.','He was the __last__ person to leave the room.','Alcohol can stay in your __system__ for hours.'],a:3,e:'윗글의 last는 ‘지속되다’(동사)인데 ④의 last는 ‘마지막의’(형용사)예요. version=(변형된) 형태, clear=없애다, alter=바꾸다, system=(몸의) 체내는 윗글과 같은 뜻이에요.'},
 {g:2,q:'다음 뜻에 해당하는 단어를 윗글에서 찾아 빈칸에 쓰시오. (sleep-로 시작하는 낱말 중 뒷부분)\n\n수면을 방해하는 → sleep-[빈칸]',a:['disrupting'],m:'disrupting',e:'disrupt(방해하다)의 현재분사형 disrupting이 쓰여, sleep-disrupting = 수면을 방해하는이 돼요.'}
];

NOTE[EN]['0-0']={b:[
 ['case','출처','2023년 9월 고2 전국연합학력평가 30번','영어Ⅱ · 올림포스 12강 8번 · 과학 지문','이 지문의 핵심은 **카페인이 몸에서 사라지는 속도**가 사람마다 다르다는 것(유전 · 나이)과, 그 결과 **카페인에 민감한 정도**가 달라진다는 거예요.'],
 ['h','01 한 줄 요약'],
 ['p','카페인의 각성 효과는 ==간 속 효소==가 카페인을 분해해 사라지는데, ==유전==에 따라 효소가 빠른 사람은 늦은 밤에도 잘 자고, 효소가 느린 사람은 ==카페인 효과에 민감==하며, ==나이==가 들수록 제거가 더 느려져 더 민감해진다.'],
 ['h','02 글의 구조'],
 ['tbl',['단계','문장','내용'],[['주장','①','카페인의 짜릿한 자극은 ==사라진다=='],['원리','②','==간 속 효소==가 카페인을 서서히 분해해 제거'],['빠른 사람','③~④','유전적으로 ==효율적인 효소== → 혈류에서 빠르게 제거 → 저녁에 마셔도 숙면'],['느린 사람','⑤~⑧','==느리게 작용하는 효소== → 제거에 훨씬 오래 → 카페인에 ==민감== → 효과가 하루 종일, 오후 두 번째 잔이면 불면'],['노화','⑨','==나이==가 들수록 제거가 더 느려져 ==더 민감==해짐']]],
 ['h','03 문장별 해석'],
 ['tbl',['번호','영어 · 해석'],S.map((s,i)=>['①②③④⑤⑥⑦⑧⑨'[i],s+'\n→ '+KO[i]])],
 ['h','04 구문 포인트'],
 ['def','강조의 do/does','긍정문에서 ==동사 앞에 do/does/did==를 쓰면 동사를 ==강조==(정말로 ~하다). 뒤에는 ==동사원형==, do의 수는 주어에 일치. → The “jolt” of caffeine ==does wear off==.'],
 ['def','계속적 용법 which','콤마 뒤 which는 ==앞 선행사에 대한 추가 설명==. 선행사는 ==an enzyme==(caffeine ✕)이고 단수라서 동사가 degrades. which gradually degrades it = and it gradually degrades it.'],
 ['def','분사구문 allowing','~, ==allowing the liver to== rapidly clear it = 그리고 (그 결과) 간이 ~할 수 있게 해 준다. 주절과 능동 관계 + 목적어가 있으니 ==현재분사==. allow + 목적어 + ==to V==.'],
 ['def','Based on 분사구문','==(Being) based on== ~ = ~에 근거하여. base A on B의 수동이라 ==과거분사==. in large part = 대부분.'],
 ['def','주격 관계대명사 that','the enzyme ==that== degrades caffeine — 선행사가 있고 뒤에 주어가 없는 절 → that (what은 선행사를 포함하므로 ✕)'],
 ['def','병렬 구조','can drink ~ and (can) fall ~ — 조동사 can 뒤에 ==동사원형 두 개==가 and로 연결.'],
 ['def','It takes + 시간 + for A to V','==가주어 It==, ==for A==는 to부정사의 ==의미상 주어==(of A는 kind·wise 같은 성격 형용사일 때). far longer의 far는 비교급 강조(very ✕, much·even·still·a lot ○).'],
 ['def','If 생략 도치 Should they have ~','==If they should have ~==에서 ==If를 생략하면 should가 주어 앞으로 도치==. should = 만약 ~한다면(가능성이 낮은 조건).'],
 ['def','가목적어 it','find + ==it(가목적어)== + difficult(목적격 보어) + ==to fall asleep(진목적어)==. 긴 to부정사를 뒤로 보내요.'],
 ['def','the 비교급 ~, the 비교급 …','==~할수록 더 …하다==. the older we are, the longer it takes … / thus the more sensitive we become — 비교급이 앞으로 나간 형태(we become more sensitive).'],
 ['tip','**함정 주의** much of the day의 much — the day는 ‘하루’라는 한 덩어리 기간이라 ==much==(many ✕). last는 자동사(지속되다)라서 수동태 ✕. very는 원급만 꾸미고(very sensitive), 비교급은 far·much·even·still·a lot이 꾸며요.'],
 ['h','05 시험 포인트'],
 ['ul',['==유전(효소 효율) + 노화(나이)== → 카페인 제거 속도 → 카페인 민감도','요지·제목: 사람마다 카페인에 반응하는 정도가 다른 이유','어법 단골: which의 선행사, 분사구문 allowing, 가목적어 it, the 비교급, Should 도치','빈칸 단골: sensitive(민감한) · longer(더 오래)','단어·숙어는 ==단어장==에서 가려 가며 외우고, 어휘 문제로 확인해요']]
]};

Object.assign(TIPS,{
 '강조의 do':'긍정문에서 동사 앞의 do/does/did는 동사를 강조해요. 뒤에는 동사원형, 수는 주어에 일치!',
 '관계대명사 which':'콤마 뒤 which는 선행사에 대한 추가 설명이에요. 선행사가 어디인지(an enzyme) 먼저 찾아요.',
 '분사구문':'앞 절의 결과를 잇는 분사구문 — 능동이면 -ing(allowing), 수동이면 p.p.(Based).',
 '병렬 구조':'and 앞뒤는 같은 형태끼리 연결돼요. 조동사 can을 공유하면 둘 다 동사원형!',
 '의미상 주어':'It takes + 시간 + for A to V — for A가 to부정사의 의미상 주어예요.',
 'Should 도치':'If they should have ~ → If 생략 → Should they have ~. 조동사 should가 주어 앞으로 나가요.',
 'the 비교급 구문':'the 비교급 ~, the 비교급 … = ~할수록 더 …하다. 절 안은 평서문 어순!',
 '가목적어 it':'find + it + 형용사 + to V — 긴 to부정사(진목적어)를 뒤로 보내고 it을 앞에 둬요.',
 '어법 선택':'수 일치 · 분사 · to부정사 · 관계사를 차례로 확인해요.',
 '글의 내용':'핵심 요인(유전 + 나이)과 그 결과(민감도)를 연결해 읽어요.',
 '어법성 판단':'밑줄마다 수 일치·태·분사·관계사를 확인하고, 결과를 이어 주는 분사구문(allowing)에 주의해요.',
 '어휘 쓰임 판단':'‘더 오래/더 짧게’ 같은 반대말 함정이 많아요. 글 전체 흐름(나이 ↑ → 제거 느려짐)에 맞는지 확인!',
 '빈칸 추론':'빈칸 앞의 인과 표현(As a result)을 단서로 써요.',
 '요지 파악':'글 전체를 묶는 한 문장 — 유전과 나이가 카페인 민감도를 가른다.',
 '내용 불일치':'선택지의 비교급·방향(빨라진다/느려진다)을 본문과 대조해요.',
 '글의 순서':'주어진 글의 마지막 단서(these rare individuals ← 빠른 효소) → Others, however → As a result.',
 '요약문 완성':'본문의 핵심 어휘(removed · age)를 요약문 빈칸에 옮겨요.',
 '영작':'the 비교급 구문과 If 생략 도치를 정확한 어순으로!',
 '어법 문장 고르기':'비교급 앞의 the, 절 안의 평서문 어순을 확인해요.',
 '영어 단어 뜻':'지문에서 쓰인 뜻으로 외워요. 단어장에서 뜻을 가리고 확인해 보세요.',
 '영어 숙어 뜻':'숙어는 통째로! 단어장에서 숙어만 모아 볼 수 있어요.',
 '영어 어휘 활용':'비슷한 말·다의어·구문 속 쓰임까지 확인해요.'});

// ----- 문제 조립 -----
const mkq=(L,gs,lv)=>L.map(q=>{q=Object.assign({},q);q.g=G0===undefined?gs[q.g]:gs[q.g];if(!q.t)q.t=q.o?'mc':typeof q.a=='boolean'?'ox':'sh';if(q.t=='sh'&&!q.m)q.m=q.a[0];if(lv)q.lv=lv;return q});
const KQ=[[].concat(mkq(QB,gB),mkq(QX,gX,'x'),mkq(QV,gV,'v'))];
const MN=[[['카페인 분해 속도의 개인차','2023년 9월 고2 학평 30번','12-8']]];
CUR[EN]=UN.map((n,u)=>({n,m:MN[u].map(([nm,src,no],k)=>{const pre='eng'+(u+1)+String(k+1).padStart(2,'0'),W2={v:0,b:1,x:2};
 return {n:nm,no,src,q:KQ[k].map(q=>Object.assign({},q)).sort((a,b)=>W2[a.lv||'b']-W2[b.lv||'b']).map((q,i)=>Object.assign({id:pre+(q.lv||'b')+String(i+1).padStart(2,'0')},q))}})}));

// ===== 단어장 : 지문 목록 → 지문마다 단어·숙어 학습 (단어 가리기 / 뜻 가리기) =====
const EP=[{n:'카페인 분해 속도의 개인차',no:'12-8',src:'올림포스 12강 8번 · 2023년 9월 고2 학평 30번',S,W}];
const EV={h:{w:0,m:0},t:'all'};try{const o=JSON.parse(localStorage.getItem('pungsan-evoc')||'{}');if(o.h)EV.h=o.h;if(o.t)EV.t=o.t}catch(e){}
const evSave=()=>{try{localStorage.setItem('pungsan-evoc',JSON.stringify(EV))}catch(e){}};
const EYE2='<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>';
const hl=(s,f)=>{const i=s.toLowerCase().indexOf(f.toLowerCase());if(i<0)return esc(s);return esc(s.slice(0,i))+'<mark>'+esc(s.slice(i,i+f.length))+'</mark>'+esc(s.slice(i+f.length))};
const cnt=p=>({w:p.W.filter(x=>x[2]=='w').length,p:p.W.filter(x=>x[2]=='p').length});
function evPage(n,i){const col=sCol(n);
 if(i==null||!EP[i]){const tot=EP.reduce((a,p)=>a+p.W.length,0);
  let h=`<div class="shd"><h2 style="--hlc:${col}">단어장</h2><p class="tag">영어 · 지문 ${EP.length}개 · 단어·숙어 ${tot}개</p></div><div class="ev">`;
  h+=EP.map((p,k)=>{const c=cnt(p);return `<button class="evp" onclick="vocabPage('${n}',${k})"><span class="evn">${esc(p.no)}</span><span class="evt"><b>${esc(p.n)}</b><small>${esc(p.src)}</small><small>단어 ${c.w}개 · 숙어 ${c.p}개</small></span><span class="chev">›</span></button>`}).join('');
  return h+`<p class="evf">지문을 누르면 단어·숙어를 가려 가며 외울 수 있어요. 뜻은 모두 지문에서 쓰인 뜻이에요.</p></div>`}
 const p=EP[i],c=cnt(p),L=p.W.filter(x=>EV.t=='all'||x[2]==EV.t);
 let h=`<div class="shd"><h2 style="--hlc:${col}">${esc(p.no)} 단어장</h2><p class="tag">${esc(p.n)} · 단어 ${c.w} · 숙어 ${c.p}</p></div><div class="ev">`;
 h+=`<div class="evtab">${[['all','전체',p.W.length],['w','단어',c.w],['p','숙어',c.p]].map(([k,t,m])=>`<button class="${EV.t==k?'on':''}" onclick="evTab('${n}',${i},'${k}')">${t} <small>${m}</small></button>`).join('')}</div>`;
 h+=`<div class="evstk"><span class="evsl">가리고<br>외우기</span><div class="evhb">${[['w','단어'],['m','뜻']].map(([k,t])=>`<button class="${EV.h[k]?'on':''}" onclick="evHide('${n}',${i},'${k}')">${EYE2}${t}</button>`).join('')}</div></div>`;
 h+=`<div class="evtb">`+L.map(x=>`<div class="evw"><div class="evk${EV.h.w?' cov':''}" onclick="evPeek(this)"><b>${esc(x[0])}</b>${x[2]=='p'?'<i>숙어</i>':''}</div><div class="evm${EV.h.m?' cov':''}" onclick="evPeek(this)">${esc(x[1])}</div><div class="evs${EV.h.w?' cov':''}" onclick="evPeek(this)">${hl(p.S[x[3]-1],x[4])}</div></div>`).join('')+`</div>`;
 h+=`<button class="evgo" onclick="partPick('${n}',0,${i})">이 지문 문제 풀기</button><p class="evf">칸을 누르면 그 칸만 잠깐 볼 수 있어요. 파란 글씨는 지문 속 문장이에요.</p></div>`;return h}
window.evPeek=el=>{if(el.classList.contains('cov')){el.classList.remove('cov');el.dataset.pk=1}else if(el.dataset.pk){el.classList.add('cov');delete el.dataset.pk}};
window.evTab=(n,i,t)=>{EV.t=t;evSave();vocabPage(n,i)};
window.evHide=(n,i,k)=>{EV.h[k]=EV.h[k]?0:1;evSave();const y=scrollY;vocabPage(n,i);scrollTo(0,y)};
VOCAB[EN]={lb:'단어장',sub:'지문별 단어·숙어 '+EP.reduce((a,p)=>a+p.W.length,0)+'개 · 가려서 외우기',page:evPage};

const st=document.createElement('style');st.textContent=`
.ev{--eu:#f1a9a9;--ed:#c25a5a}
.ev .evp{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:13px 14px;margin-bottom:10px;border:none;border-radius:16px;background:var(--card);box-shadow:0 2px 10px rgba(90,70,40,.1);font:inherit;color:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent}
.ev .evn{flex:none;min-width:50px;height:44px;padding:0 8px;border-radius:12px;background:var(--eu);display:flex;align-items:center;justify-content:center;font:18px Jua;color:#5b2323}
.ev .evt{flex:1;min-width:0}.ev .evt b{display:block;font-size:16.5px}.ev .evt small{display:block;color:var(--mut);font-size:12.5px;margin-top:2px}
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
.qbox u,.q u{text-decoration-thickness:2px;text-underline-offset:3px}
`;document.head.appendChild(st);
})();

// ===== 올림포스 12강 8번 · 카페인 분해 속도의 개인차 =====
(()=>{
const S=ENG.T['o12-8'];
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
const {P,E}=ENG.h(W);
const gB=['강조의 do','관계대명사 which','분사구문','병렬 구조','의미상 주어','Should 도치','the 비교급 구문','가목적어 it','어법 선택','글의 내용'];
const gX=['어법성 판단','어휘 쓰임 판단','빈칸 추론','요지 파악','내용 불일치','글의 순서','요약문 완성','영작','어법 문장 고르기'];
const gV=['영어 단어 뜻','영어 숙어 뜻','영어 어휘 활용'];
const NN=['','','','',''];const PASS=S.join(' ');
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


ENG.add('o12-8',{u:0,n:'카페인 분해 속도의 개인차',no:'12-8',src:'2023년 9월 고2 학평 30번 · 올림포스 12강 8번',KO,W,
 sum:'카페인의 각성 효과는 ==간 속 효소==가 카페인을 분해해 사라지는데, ==유전==에 따라 효소가 빠른 사람은 늦은 밤에도 잘 자고, 효소가 느린 사람은 ==카페인 효과에 민감==하며, ==나이==가 들수록 제거가 더 느려져 더 민감해진다.',
 st:[['주장','①','카페인의 짜릿한 자극은 ==사라진다=='],['원리','②','==간 속 효소==가 카페인을 서서히 분해해 제거'],['빠른 사람','③~④','유전적으로 ==효율적인 효소== → 혈류에서 빠르게 제거 → 저녁에 마셔도 숙면'],['느린 사람','⑤~⑧','==느리게 작용하는 효소== → 제거에 훨씬 오래 → 카페인에 ==민감== → 효과가 하루 종일, 오후 두 번째 잔이면 불면'],['노화','⑨','==나이==가 들수록 제거가 더 느려져 ==더 민감==해짐']],
 syn:[
  ['강조의 do/does','긍정문에서 ==동사 앞에 do/does/did==를 쓰면 동사를 ==강조==(정말로 ~하다). 뒤에는 ==동사원형==, do의 수는 주어에 일치. → The “jolt” of caffeine ==does wear off==.'],
  ['계속적 용법 which','콤마 뒤 which는 ==앞 선행사에 대한 추가 설명==. 선행사는 ==an enzyme==(caffeine ✕)이고 단수라서 동사가 degrades.'],
  ['분사구문 allowing','~, ==allowing the liver to== rapidly clear it = 그리고 (그 결과) 간이 ~할 수 있게 해 준다. 목적어가 있고 능동이니 ==현재분사==. allow + 목적어 + ==to V==.'],
  ['Based on 분사구문','==(Being) based on== ~ = ~에 근거하여. base A on B의 수동이라 ==과거분사==.'],
  ['주격 관계대명사 that','the enzyme ==that== degrades caffeine — 선행사가 있고 뒤에 주어가 없는 절 → that (what은 선행사를 포함하므로 ✕)'],
  ['병렬 구조','can drink ~ and (can) fall ~ — 조동사 can 뒤에 ==동사원형 두 개==가 and로 연결.'],
  ['It takes + 시간 + for A to V','==가주어 It==, ==for A==는 to부정사의 ==의미상 주어==. far longer의 far는 비교급 강조(very ✕).'],
  ['If 생략 도치','==If they should have ~==에서 ==If를 생략하면 should가 주어 앞으로 도치==.'],
  ['가목적어 it','find + ==it(가목적어)== + difficult + ==to fall asleep(진목적어)==.'],
  ['the 비교급 ~, the 비교급 …','==~할수록 더 …하다==. 절 안은 평서문 어순.']],
 tip:'**함정 주의** much of the day의 much — the day는 한 덩어리 기간이라 ==much==(many ✕). last는 자동사(지속되다)라서 수동태 ✕. very는 원급만, 비교급은 far·much·even·still·a lot이 꾸며요.',
 pts:['==유전(효소 효율) + 노화(나이)== → 카페인 제거 속도 → 카페인 민감도','요지·제목: 사람마다 카페인에 반응하는 정도가 다른 이유','어법 단골: which의 선행사, 분사구문 allowing, 가목적어 it, the 비교급, Should 도치','빈칸 단골: sensitive(민감한) · longer(더 오래)'],
 B:QB.map(q=>Object.assign({},q,{g:gB[q.g]})),X:QX.map(q=>Object.assign({},q,{g:gX[q.g]})),V:QV.slice(3).map(q=>Object.assign({},q,{g:gV[q.g]})),
 tips:{'강조의 do':'긍정문에서 동사 앞의 do/does/did는 동사를 강조해요. 뒤에는 동사원형, 수는 주어에 일치!','관계대명사 which':'콤마 뒤 which는 선행사에 대한 추가 설명이에요. 선행사가 어디인지(an enzyme) 먼저 찾아요.','분사구문':'앞 절의 결과를 잇는 분사구문 — 능동이면 -ing(allowing), 수동이면 p.p.(Based).','병렬 구조':'and 앞뒤는 같은 형태끼리 연결돼요. 조동사 can을 공유하면 둘 다 동사원형!','의미상 주어':'It takes + 시간 + for A to V — for A가 to부정사의 의미상 주어예요.','Should 도치':'If they should have ~ → If 생략 → Should they have ~.','the 비교급 구문':'the 비교급 ~, the 비교급 … = ~할수록 더 …하다. 절 안은 평서문 어순!','가목적어 it':'find + it + 형용사 + to V — 진목적어(to부정사)를 뒤로 보내요.','어법 선택':'수 일치 · 분사 · to부정사 · 관계사를 차례로 확인해요.','글의 내용':'핵심 요인(유전 + 나이)과 그 결과(민감도)를 연결해 읽어요.','영작':'the 비교급 구문과 If 생략 도치를 정확한 어순으로!','어법 문장 고르기':'비교급 앞의 the, 절 안의 평서문 어순을 확인해요.'},
 M:[
  {k:'gr',marks:[['which','which'],['allowing','allowing'],['asleep','asleep'],['for','of'],['sensitive','sensitive']],e:'④ It takes (시간) for A to V — 의미상 주어는 for A. of A는 사람의 성품 형용사(kind, wise 등) 뒤에서만 써요.'},
  {t:'mc',g:'빈칸 추론',q:'윗글의 빈칸에 들어갈 말로 가장 적절한 것은?\n\nCaffeine’s “jolt” does wear off, and how long it lasts in your body depends largely on [빈칸].\n\nCaffeine is removed from your system by an enzyme within your liver. Some people have a more efficient version of that enzyme, while others have a slower-acting one, so the same amount of caffeine takes far longer to eliminate in some people than in others.',o:['how efficiently your liver enzyme breaks it down','how much sleep you had the night before','how fast your heart beats at rest','how much water you drink with it','how often you exercise in the morning'],a:0,e:'바로 아래에서 간 효소의 효율 차이로 제거 속도가 달라진다고 설명하므로, 지속 시간은 ‘효소가 얼마나 효율적으로 분해하는가’에 달려 있어요.'},
  {k:'ins',s:5,at:[1,2,3,4,5],e:'their system은 앞 문장의 Others를 가리키고, 결과를 나타내는 As a result 바로 앞에 ‘제거에 더 오래 걸린다’가 와야 자연스러워요.'}]
});
})();

// ===== 올림포스 12강 9번 · 비관세 조치의 차별적 효과 =====
(()=>{
const S=ENG.T['o12-9'];
const KO=[
 '지난 수십 년 동안 가난한 나라들의 부채를 줄이기 위한 몇몇 합의가 있었지만, (무역 장벽과 같은) 다른 경제적 과제들은 여전히 남아 있다.',
 '쿼터(수입 할당), 보조금, 수출 제한과 같은 비관세 무역 조치는 점점 더 널리 퍼지고 있으며, 무역과 아무 관련이 없는 정책적 이유로 제정될 수도 있다.',
 '그러나 그것들은 부유한 나라가 부과한 비관세 조치의 요건을 충족시킬 자원이 부족한 나라의 수출에 차별적인 영향을 미친다.',
 '예를 들어, 부유한 나라들이 자국 농부들에게 주는 막대한 보조금은 세계 다른 지역의 농부들이 그들과 경쟁하는 것을 매우 어렵게 만든다.',
 '또 다른 예로는 국내 보건 또는 안전 규제를 들 수 있는데, 이는 수입품을 구체적으로 겨냥하지 않더라도 수입국 시장에 맞추려는 외국 제조업체에 상당한 비용을 부과할 수 있다.',
 '개발도상 시장의 산업들은 이러한 추가 비용을 감당하는 데 더 큰 어려움을 겪을 수 있다.'];
const W=[
 ['decades','수십 년','w',1,'decades'],['agreement','합의','w',1,'agreements'],['reduce','줄이다','w',1,'reduce'],['debt','부채','w',1,'debt'],
 ['barrier','장벽','w',1,'barriers'],['remain','여전히 ~이다, 남아 있다','w',1,'remain'],
 ['measure','조치','w',2,'measures'],['quota','(수입) 할당량','w',2,'quotas'],['subsidy','보조금','w',2,'subsidies'],['restriction','제한, 규제','w',2,'restrictions'],
 ['prevalent','널리 퍼진, 만연한','w',2,'prevalent'],['enact','(법·정책을) 제정하다','w',2,'enacted'],['export','수출(품)','w',2,'exports'],
 ['such as','~와 같은','p',2,'such as'],['have nothing to do with','~와 관련이 없다','p',2,'having nothing to do with'],
 ['discriminatory','차별적인','w',3,'discriminatory'],['lack','~이 부족하다','w',3,'lack'],['resource','자원','w',3,'resources'],
 ['comply with','(규칙·요건을) 따르다, 충족시키다','p',3,'comply with'],['requirement','요건, 요구 사항','w',3,'requirements'],['impose','부과하다','w',3,'imposed'],
 ['make it difficult for A to V','A가 V하는 것을 어렵게 만들다','p',4,'make it very difficult for'],['compete with','~와 경쟁하다','p',4,'compete with'],
 ['domestic','국내의','w',5,'domestic'],['regulation','규제','w',5,'regulations'],['target','겨냥하다, 표적으로 삼다','w',5,'targeting'],['import','수입(품)','w',5,'imports'],
 ['significant','상당한, 중대한','w',5,'significant'],['manufacturer','제조업체','w',5,'manufacturers'],['seek to V','V하려고 애쓰다','p',5,'seeking to'],['conform to','~에 맞추다, 순응하다','p',5,'conform to'],
 ['developing','개발도상의','w',6,'developing'],['have difficulty (in) -ing','~하는 데 어려움을 겪다','p',6,'have more difficulty'],['absorb','(비용·충격을) 감당하다, 흡수하다','w',6,'absorbing'],['additional','추가적인','w',6,'additional']];
ENG.add('o12-9',{u:0,n:'비관세 조치의 차별적 효과',no:'12-9',src:'2023년 6월 고2 학평 30번 · 올림포스 12강 9번',KO,W,
 sum:'부유한 나라가 부과하는 ==비관세 조치==(보조금·국내 규제 등)는 무역과 무관해 보여도, 요건을 맞출 자원이 부족한 ==가난한 나라의 수출에 차별적==으로 작용해 큰 부담이 된다.',
 st:[['문제 제기','①','부채 문제는 줄었지만 ==무역 장벽==은 남아 있음'],['핵심','②~③','==비관세 조치==는 널리 퍼졌고, 자원이 부족한 나라의 수출에 ==차별적=='],['예시 1','④','부유국의 ==막대한 보조금== → 다른 나라 농부는 경쟁이 어려움'],['예시 2','⑤','==국내 보건·안전 규제== → 외국 제조업체에 큰 비용'],['결론','⑥','==개도국 산업==은 추가 비용을 감당하기 더 어려움']],
 syn:[
  ['to부정사의 형용사적 용법','agreements ==to reduce== the debt — 명사 agreements를 꾸미는 to부정사(~하기 위한). = agreements ==for reducing== the debt'],
  ['분사의 후치 수식','reasons ==having nothing to do with== trade — 능동이라 현재분사 / measures ==imposed== by rich nations — 수동이라 과거분사 (= that are imposed)'],
  ['주격 관계대명사 that','countries ==that lack== the resources — 선행사 countries(복수) → 복수 동사 lack.'],
  ['가목적어 it','make ==it== very difficult ==for farmers== ... ==to compete== with them — it은 가목적어, for farmers는 to부정사의 의미상 주어, to compete 이하가 진목적어.'],
  ['관계절이 낀 주어의 수 일치','the huge ==subsidies== that rich nations give to their farmers ==make== — 주어는 복수 subsidies, that절은 수식어 → 동사 make(복수).'],
  ['삽입된 분사구문','regulations, which, ==though not specifically targeting imports==, could impose — though 뒤에 they are 생략, 능동이라 targeting.'],
  ['seek to V / have difficulty -ing','manufacturers ==seeking to== conform — 분사가 manufacturers 수식. have more difficulty ==(in) absorbing== — 전치사 in 생략 + 동명사.']],
 tip:'**자주 틀리는 포인트** comply는 자동사라 ==comply with==. prevalent는 ==형용사==(be + prevalent), prevail은 동사. another는 단수 명사 앞, other는 복수 명사 앞.',
 pts:['==비관세 조치==가 가난한 나라 수출에 불리한 이유','제목 단골: 비관세 조치의 차별적 효과 (부채 탕감만으로는 부족)','어법 단골: 수 일치(subsidies → make), 가목적어 it, 분사 수식, comply with','빈칸 단골: discriminatory / difficult / costs'],
 tips:{'형용사적 to부정사':'명사 뒤에서 ‘~하기 위한, ~할’의 뜻으로 명사를 꾸미는 to부정사예요.','분사의 후치 수식':'명사 뒤 분사 — 능동·진행이면 -ing, 수동·완료면 p.p.!','가목적어 it':'make + it + 형용사 + (for A) to V — 진목적어(to부정사)를 뒤로 보내요.','어법 선택':'수 일치 · 관계사 · 전치사를 차례로 확인해요.','글의 내용':'핵심: 비관세 조치 → 가난한 나라 수출에 차별적 효과 → 예시 2개.','영작':'가목적어 it 구문을 정확한 어순으로!','어법 문장 고르기':'가목적어 it + for A to V 어순을 확인해요.','수 일치':'관계절이 낀 긴 주어는 핵심 명사(subsidies)에 수를 맞춰요.'},
 B:[
  {g:'형용사적 to부정사',q:'there have been some agreements to reduce the debt of poor nations\n\n밑줄 친 __to reduce__의 쓰임으로 알맞은 것은?',o:['명사 agreements를 꾸미는 형용사적 용법','목적을 나타내는 부사적 용법','주어 역할을 하는 명사적 용법','진주어로 쓰인 명사적 용법','감정의 원인을 나타내는 부사적 용법'],a:0,e:'agreements 뒤에서 ‘~하기 위한 합의’로 명사를 꾸며요. = agreements for reducing the debt.'},
  {g:'분사의 후치 수식',q:'may be enacted for policy reasons having nothing to do with trade\n\n밑줄 친 __having__은 현재분사로 명사 reasons를 뒤에서 꾸민다.',a:true,e:'이유가 무역과 ‘관련이 없는’ 능동 관계라 현재분사 having이에요. (= reasons that have nothing to do with trade)'},
  {g:'어법 선택',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nNontariff trade measures ⓐ(is / are) increasingly prevalent and may ⓑ(enact / be enacted) for policy reasons.',o:['are – be enacted','is – be enacted','are – enact','is – enact','are – be enacting'],a:0,e:'ⓐ 주어 measures(복수) → are. ⓑ 조치가 ‘제정되는’ 수동 → be enacted.'},
  {g:'어법 선택',q:'다음 문장의 ⓐ, ⓑ, ⓒ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nThey affect exports from countries ⓐ(that / what) ⓑ(lack / lacks) the resources ⓒ(to comply / to comply with) requirements.',o:['that – lack – to comply with','what – lack – to comply with','that – lacks – to comply with','that – lack – to comply','what – lacks – to comply'],a:0,e:'ⓐ 선행사 countries 뒤 주어 없는 절 → that. ⓑ 선행사가 복수 → lack. ⓒ comply는 자동사 → comply with.'},
  {g:'가목적어 it',q:'make it very difficult for farmers in the rest of the world to compete with them\n\n밑줄 친 __it__은 for farmers를 가리킨다.',a:false,e:'it은 가목적어이고 진목적어는 뒤의 to compete with them이에요. for farmers는 to compete의 의미상 주어예요.'},
  {g:'수 일치',q:'the huge subsidies that rich nations give to their farmers make it very difficult ...\n\n동사 make의 주어로 알맞은 것은?',o:['the huge subsidies','rich nations','their farmers','farmers in the rest of the world','it'],a:0,e:'that rich nations give to their farmers는 subsidies를 꾸미는 관계절이에요. 주어는 복수 subsidies라 makes가 아니라 make.'},
  {g:'분사의 후치 수식',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nAnother example would be domestic regulations, which, though not specifically [빈칸] imports, could impose significant costs. (겨냥하는)',a:['targeting'],m:'targeting',e:'though 뒤에 they are가 생략된 분사구문이고, 규제가 수입품을 ‘겨냥하는’ 능동이라 targeting.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nIndustries in developing markets may have more difficulty [빈칸] these additional costs. (감당하는 데)',a:['absorbing'],m:'absorbing',e:'have difficulty (in) -ing — 어려움을 겪다. 전치사 in 뒤라 동명사 absorbing.'},
  {g:'글의 내용',q:'윗글에서 비관세 조치의 예로 언급되지 않은 것은?\n\n'+S.join(' '),o:['수입품에 대한 관세 인상','쿼터(수입 할당)','보조금','수출 제한','국내 보건·안전 규제'],a:0,e:'관세는 ‘비관세’ 조치의 반대예요. 쿼터·보조금·수출 제한·국내 규제가 언급됐어요.'},
  {g:'글의 내용',q:'③ However, they have a discriminatory effect ...\n\n밑줄 친 __they__가 가리키는 것은?',o:['Nontariff trade measures','agreements','poor nations','trade barriers','policy reasons'],a:0,e:'바로 앞 문장의 주어 Nontariff trade measures(비관세 무역 조치)를 가리켜요.'}],
 X:[
  {k:'gr',marks:[['have','have'],['are','are'],['that','that'],['make','makes'],['seeking','seeking']],e:'④ 주어는 복수 the huge subsidies(that rich nations ~ farmers는 관계절)이므로 makes가 아니라 make.'},
  {k:'vo',marks:[['remain','remain'],['prevalent','prevalent'],['discriminatory','discriminatory'],['difficult','easy'],['additional','additional']],e:'④ 막대한 보조금 때문에 다른 나라 농부가 경쟁하기 ‘어렵다(difficult)’가 문맥에 맞아요.'},
  {k:'bl',ph:'discriminatory',o:['discriminatory','beneficial','neutral','temporary','negligible'],e:'자원이 부족한 나라만 요건을 맞추기 어려우니 수출에 ‘차별적인(discriminatory)’ 영향을 미쳐요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['부유한 나라의 비관세 조치는 자원이 부족한 가난한 나라의 수출에 불리하게 작용한다','가난한 나라의 부채가 줄면 무역 장벽도 곧 사라진다','보조금은 모든 나라의 농업을 고르게 발전시킨다','국내 안전 규제는 수입 제품의 품질을 높인다','무역 장벽은 개발도상국 산업을 보호한다'],e:'비관세 조치가 요건을 맞출 자원이 부족한 나라의 수출에 차별적 효과를 낸다는 것이 글 전체의 요지예요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['Debt Relief Is Not Enough: The Unequal Burden of Trade Rules','Why Rich Nations Should Increase Their Farm Subsidies','The Rise of Free Trade Among Developing Countries','How Health Regulations Improve Global Safety','Quotas: A Simple Way to Reduce National Debt'],e:'부채 탕감만으로는 부족하고, 비관세 조치라는 불평등한 부담이 남아 있다는 내용이에요.'},
  {k:'sm',s:'Nontariff measures taken by rich nations, though seemingly unrelated to trade, place a (A) burden on poor countries, which lack the (B) to meet them.',o:['heavy – resources','light – knowledge','heavy – agreements','light – subsidies','fair – technology'],e:'(A) 큰 부담(heavy) (B) 요건을 충족시킬 자원(resources).'},
  {k:'ins',s:2,at:[1,2,3,4,5],e:'However로 앞 문장(비관세 조치가 널리 퍼짐)과 대비하며, they는 앞 문장의 measures를 가리켜요. 구체적 예(For example) 앞에 와야 해요.'},
  {k:'ord',cut:[2,1,2],lab:['B','A','C'],e:'(B) However ~ they(조치의 차별적 효과) → (A) For example(보조금)과 Another example(규제) → (C) 개도국 산업의 어려움.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n막대한 보조금은 다른 나라 농부들이 경쟁하는 것을 매우 어렵게 만든다.\n→ The huge subsidies make [빈칸] very difficult for farmers in the rest of the world to compete with them.',a:['it'],m:'it',e:'가목적어 it + difficult + for A to V(진목적어).'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['The subsidies that rich nations give to farmers make it difficult for others to compete.','The subsidies that rich nations give to farmers makes it difficult for others to compete.','The subsidies that rich nations give to farmers make difficult for others to compete.','The subsidies that rich nations give to farmers make it difficult of others to compete.','The subsidies that rich nations give to farmers make it difficult for others compete.'],a:0,e:'복수 주어 → make, 가목적어 it, 의미상 주어 for others, 진목적어 to compete.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A), (B)에 들어갈 말로 가장 적절한 것은?\n\nRich nations give huge (A) to their farmers, which makes it hard for farmers elsewhere to (B) with them.',o:['subsidies – compete','quotas – comply','subsidies – conform','barriers – absorb','regulations – compete'],a:0,e:'(A) subsidies(보조금) (B) compete with(~와 경쟁하다).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['barrier – obstacle · prevalent – widespread','rich – wealthy · unfair – biased','comply with – conform to · target – aim at','significant – considerable · domestic – internal','prevalent – uncommon · restriction – limit'],a:4,e:'prevalent(널리 퍼진)의 반대말이 uncommon(흔치 않은)이에요. 나머지는 모두 비슷한 말이에요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 measure(s)가 윗글과 다른 뜻으로 쓰인 것은?',o:['The government took strong __measures__ against pollution.','New safety __measures__ were introduced at the factory.','Officials announced tough __measures__ to control prices.','What is the best __measure__ of a country’s wealth?','The city adopted special __measures__ to reduce traffic.'],a:3,e:'윗글의 measures는 ‘조치’이고, ④의 measure는 ‘척도, 기준’이에요.'}],
 M:[
  {k:'gr',marks:[['to reduce','to reduce'],['are','are'],['imposed','imposing'],['give','give'],['absorbing','absorbing']],e:'③ 조치가 부유한 나라들에 의해 ‘부과되는’ 수동 관계 → imposed.'},
  {k:'bl',ph:'make it very difficult for farmers in the rest of the world to compete with them',o:['make it very difficult for farmers in the rest of the world to compete with them','help farmers in the rest of the world sell their crops at higher prices','allow farmers in poor countries to receive more support from their governments','encourage rich nations to reduce the prices of their farm products','protect farmers in the rest of the world from foreign competition'],e:'보조금이 비관세 조치의 차별적 효과의 예이므로, 다른 나라 농부가 경쟁하기 어려워진다는 내용이 와요.'},
  {k:'ins',s:4,at:[1,2,3,4,5],e:'Another example(또 다른 예)는 앞에 첫 번째 예(보조금)가 먼저 나온 뒤에 와야 하고, 개도국 산업의 어려움(마지막 문장)으로 이어져요.'}]
});
})();

// ===== 올림포스 13강 5번 · 번역의 성격 =====
(()=>{
const S=ENG.T['o13-5'];
const KO=[
 '모든 번역가는 자신이 작업하는 대상인 독자 공동체로부터 어느 정도의 압박을 느낀다.',
 '그리고 모든 번역가는 다른 사람들과의 대화 속에서 자신의 해석에 이른다.',
 '영국 시인 알렉산더 포프는 그리스어를 꽤 잘했지만, 18세기 초에 호메로스의 『일리아드』를 번역하기 시작했을 때 그는 혼자가 아니었다.',
 '그에게는 참고할 그리스어 주석서들과 이미 영어, 라틴어, 프랑스어로 된 번역본들이 있었고, 물론 사전도 있었다.',
 '번역가는 언제나 하나 이상의 원천 텍스트에 의지한다.',
 '번역의 장면이 펜과 종이와 번역 중인 책을 가진 단 한 사람으로 이루어져 있을 때도, 혹은 한 사람이 다른 사람을 위해 구두로 번역해 줄 때조차도, 그 사람의 언어 지식은 수많은 다른 텍스트와 다른 대화에서 생겨난다.',
 '그러고 나서 번역의 목적에 대한 그 사람의 생각은 그 번역을 받을 사람 또는 사람들의 기대에 영향을 받을 것이다.',
 '이 두 가지 의미에서 모든 번역은 집단 번역이다.'];
const W=[
 ['translator','번역가','w',1,'translators'],['pressure','압박, 부담','w',1,'pressure'],['community','공동체','w',1,'community'],
 ['interpretation','해석','w',2,'interpretations'],['arrive at','(결론·해석 등에) 이르다','p',2,'arrive at'],['in dialogue with','~와의 대화 속에서','p',2,'in dialogue with'],
 ['poet','시인','w',3,'poet'],['pretty','꽤, 상당히','w',3,'pretty'],['set about -ing','~하기 시작하다','p',3,'set about'],['on one’s own','혼자서, 스스로','p',3,'on his own'],['translate','번역하다','w',3,'translating'],
 ['commentary','주석(서), 해설','w',4,'commentaries'],['refer to','~을 참고하다','p',4,'refer to'],['dictionary','사전','w',4,'dictionaries'],
 ['draw on','~에 의지하다, ~을 활용하다','p',5,'draw on'],['source text','원천 텍스트(번역의 원문)','w',5,'source text'],
 ['scene','장면, 상황','w',6,'scene'],['consist of','~로 이루어지다','p',6,'consists of'],['orally','구두로, 말로','w',6,'orally'],['linguistic','언어의, 언어학의','w',6,'linguistic'],['arise from','~에서 생겨나다','p',6,'arises from'],['lots of','많은','p',6,'lots of'],
 ['purpose','목적','w',7,'purpose'],['expectation','기대','w',7,'expectations'],['influence','영향을 주다','w',7,'influenced'],['be influenced by','~에 영향을 받다','p',7,'be influenced by'],
 ['sense','의미, 뜻','w',8,'senses'],['crowd','군중, 집단','w',8,'crowd']];
ENG.add('o13-5',{u:0,n:'번역의 성격',no:'13-5',src:'2024년 10월 고2 학평 32번 · 올림포스 13강 5번',KO,W,
 sum:'번역가는 ==독자 공동체의 압박==을 받고 ==다른 사람과의 대화==로 해석에 이르며, ==여러 텍스트==에 의지하고 번역의 목적도 ==독자의 기대==에 영향을 받으므로, ==모든 번역은 집단 번역(crowd translation)==이다.',
 st:[['주장','①~②','번역가는 독자의 ==압박==을 느끼고 ==대화==로 해석에 이른다'],['예시','③~④','포프도 ==혼자가 아니었다==(주석서·번역본·사전)'],['일반화','⑤~⑥','번역가는 ==둘 이상의 텍스트==에 의지, 언어 지식은 ==다른 텍스트·대화==에서 나옴'],['목적','⑦','번역의 목적은 ==받는 사람의 기대==에 영향받음'],['결론','⑧','==모든 번역은 집단 번역==']],
 syn:[
  ['전치사 + 관계대명사','the community of readers ==for whom== they are doing their work = readers ==whom== they are doing their work ==for==. 전치사 바로 뒤에는 whom/which만 가능(that ✕).'],
  ['set about -ing / on one’s own','==set about translating== = 번역하기 시작하다(about 뒤는 동명사). ==on his own== = 혼자 힘으로.'],
  ['형용사적 to부정사 + 전치사','Greek commentaries ==to refer to== — commentaries가 refer to의 목적어라서 마지막 ==to==가 남아요.'],
  ['과거완료 수동','translations that ==had already been done== — 포프가 번역을 시작한 시점보다 이전에 이미 완료된 일 → had + p.p. 수동 had been done.'],
  ['양보절의 병렬 + 분사 후치 수식','==Even when== the scene ~ consists of ~, or ==even when== it is just one person ==translating== orally — 두 when절이 병렬, translating은 one person을 꾸미는 현재분사.'],
  ['진행 수동','the book that ==is being translated== — 지금 번역되고 있는 (진행형 수동태).'],
  ['관계대명사 생략','the person or people ==(that) it is for== — 목적격 관계대명사 생략, 전치사 for가 끝에 남아요.'],
  ['every + 단수','==every translation is== — every 뒤에는 단수 명사, 단수 동사.']],
 tip:'**함정 주의** 마지막 문장 both these senses = 앞에서 말한 두 가지(① 언어 지식이 다른 텍스트·대화에서 옴 ② 번역 목적이 독자의 기대에 영향받음). every 뒤는 ==단수==라 every translation ==is==.',
 pts:['핵심: ==모든 번역은 집단 번역(crowd translation)== — 번역은 혼자 하는 일이 아니다','근거 ①: 언어 지식이 다른 텍스트·대화에서 나옴 / ②: 번역의 목적이 독자의 기대에 영향받음','빈칸 단골: crowd translation(결론 문장), more than one source text','어법: 전치사 + 관계대명사, to refer to, 과거완료 수동, every + 단수'],
 tips:{'전치사+관계대명사':'전치사 뒤에는 whom/which! that은 올 수 없어요.','관용 표현':'set about -ing(~하기 시작하다), on one’s own(혼자서) 같은 표현은 통째로!','형용사적 to부정사':'to refer to처럼 끝에 전치사가 남는 형태에 주의해요.','시제 (과거완료)':'기준 시점보다 먼저 일어난 일은 had p.p.예요.','어법 선택':'수 일치 · 분사 · 관계사를 차례로 확인해요.','글의 내용':'핵심: 번역은 혼자 하는 일이 아니다.','영작':'to refer to / every + 단수 같은 구문을 정확히!','어법 문장 고르기':'to부정사 + 전치사의 어순을 확인해요.','제목 추론':'글 전체를 한마디로 — 번역은 집단 작업!'},
 B:[
  {g:'전치사+관계대명사',q:'the community of readers for whom they are doing their work\n\n밑줄 친 __for whom__ 대신 for that을 쓸 수 있다.',a:false,e:'전치사 바로 뒤에는 관계대명사 that을 쓸 수 없어요. (whom ~ for 또는 that ~ for는 가능)'},
  {g:'전치사+관계대명사',q:'다음 중 윗글 첫 문장의 for whom과 같은 뜻의 문장은?\n\nAll translators feel some pressure from the community of readers for whom they are doing their work.',o:['All translators feel some pressure from the community of readers whom they are doing their work for.','All translators feel some pressure from the community of readers who they are doing their work.','All translators feel some pressure from the community of readers whose they are doing their work for.','All translators feel some pressure from the community of readers for whom they are doing for their work.','All translators feel some pressure from the community of readers what they are doing their work for.'],a:0,e:'for whom ~ = whom ~ for. 전치사가 문장 끝으로 가면 whom과 for가 떨어져요.'},
  {g:'관용 표현',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nwhen he [빈칸] about translating Homer’s Iliad (번역하기 시작했을 때)',a:['set'],m:'set',e:'set about -ing = ~하기 시작하다.'},
  {g:'형용사적 to부정사',q:'He had Greek commentaries to refer to\n\n끝에 전치사 to가 남은 이유로 알맞은 것은?',o:['commentaries가 refer to의 목적어이기 때문','refer는 자동사라서 to를 붙이면 안 되기 때문','to가 부사로 쓰였기 때문','목적어가 생략된 명령문이기 때문','commentaries가 주어이기 때문'],a:0,e:'commentaries가 to refer to의 목적어(refer to ~)라서 전치사 to가 끝에 남아요.'},
  {g:'시제 (과거완료)',q:'translations that had already been done in English, Latin, and French\n\n밑줄 친 __had already been done__의 시제를 쓴 이유로 알맞은 것은?',o:['포프가 번역을 시작한 시점보다 이전에 이미 완료된 일이라서','현재까지 계속되는 일이라서','미래에 완료될 일이라서','포프가 번역한 직후의 일이라서','지금 진행 중인 일이라서'],a:0,e:'기준 시점(포프가 번역을 시작한 때)보다 먼저 끝난 일이라 과거완료 수동(had been done)이에요.'},
  {g:'어법 선택',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nEven when the scene of translation ⓐ(consists / consist) of just one person, or even when it is just one person ⓑ(translating / translated) orally for another, ...',o:['consists – translating','consist – translating','consists – translated','consist – translated','consisting – translating'],a:0,e:'ⓐ 주어 the scene(단수) → consists of. ⓑ one person을 꾸미는 능동 현재분사 translating.'},
  {g:'어법 선택',q:'every translation is a crowd translation\n\nevery 뒤에는 단수 명사와 단수 동사를 쓴다.',a:true,e:'every + 단수 명사 + 단수 동사. 그래서 every translation ==is==예요.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nthat person’s linguistic knowledge [빈칸] from lots of other texts (생겨난다)',a:['arises'],m:'arises',e:'주어가 단수 knowledge라 arises. arise from = ~에서 생겨나다.'},
  {g:'글의 내용',q:'윗글에서 알렉산더 포프가 번역할 때 참고한 것으로 언급되지 않은 것은?\n\n'+S.join(' '),o:['호메로스에게서 직접 들은 설명','그리스어 주석서','영어 번역본','라틴어 번역본','사전'],a:0,e:'주석서, 이미 된 영어·라틴어·프랑스어 번역본, 사전이 언급돼요.'},
  {g:'글의 내용',q:'윗글의 마지막 문장에서 both these senses가 가리키는 것으로 가장 알맞은 것은?\n\n'+S.join(' '),o:['번역가의 언어 지식이 다른 텍스트·대화에서 나온다는 점과, 번역의 목적이 독자의 기대에 영향받는다는 점','번역가가 두 개의 언어를 안다는 점과, 사전을 쓴다는 점','포프가 그리스어를 잘했다는 점과, 번역본이 많았다는 점','번역이 구두로도 가능하다는 점과, 글로도 가능하다는 점','번역가가 독자를 무시한다는 점과, 원문을 무시한다는 점'],a:0,e:'⑥(언어 지식은 다른 텍스트·대화에서 나옴)과 ⑦(목적은 사람들의 기대에 영향받음) 두 가지를 가리켜요.'}],
 X:[
  {k:'gr',marks:[['whom','whom'],['arrive','arrive'],['translating','translating'],['done','did'],['consists','consists']],e:'④ translations가 ‘행해지는’ 수동 관계이고 앞에 had already been이 있으니 had already been done.'},
  {k:'vo',marks:[['pressure','pressure'],['dialogue','dialogue'],['dictionaries','dictionaries'],['more than one','only one'],['expectations','expectations']],e:'④ 번역가는 언제나 ‘하나 이상의(more than one)’ 원천 텍스트에 의지해요. only one이면 글의 주장과 반대예요.'},
  {k:'bl',ph:'every translation is a crowd translation',o:['every translation is a crowd translation','every translator works alone','every translation is a literal copy','every translation is a private task','no translation is a social activity'],e:'앞의 두 가지 근거(다른 사람·텍스트에 의존)를 종합하면 모든 번역은 ‘집단 번역’이에요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['번역은 혼자 하는 일이 아니라 독자·다른 텍스트·다른 사람과의 대화에 기대는 집단적 작업이다','번역가는 원문 한 권만 충실히 따라야 한다','유명한 번역가일수록 사전을 덜 쓴다','번역의 질은 번역가의 외국어 실력으로만 결정된다','번역은 독자의 기대를 무시할수록 좋아진다'],e:'모든 번역은 ‘집단 번역’이라는 것이 글 전체의 요지예요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['Translation Is Never a Solitary Act','How to Become a Great Poet','The Hidden Costs of Dictionaries','Why Readers Dislike Translations','Learning Greek in the 18th Century'],e:'번역은 결코 혼자 하는 행위가 아니라는 내용이에요.'},
  {k:'sm',s:'Because translators rely on (A) and are influenced by readers’ (B), translation is a collective effort.',o:['various sources – expectations','a single text – criticism','personal memory – feedback','dictionaries only – laws','old translations – payments'],e:'(A) 여러 원천(various sources)에 의지 (B) 독자의 기대(expectations)에 영향받음.'},
  {k:'ins',s:3,at:[1,2,3,4,5],e:'He had Greek commentaries ~ 는 앞 문장의 ‘혼자가 아니었다(not on his own)’를 구체적으로 설명하고, 뒤의 일반화(Translators always draw on ~)로 이어져요.'},
  {k:'ord',cut:[2,2,2],lab:['C','A','B'],e:'(C) 포프의 사례 → (A) 일반화(둘 이상의 텍스트, 한 사람일 때도) → (B) And then 번역 목적과 결론.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n그에게는 참고할 그리스어 주석서들이 있었다.\n→ He had Greek commentaries to refer [빈칸].',a:['to'],m:'to',e:'commentaries가 refer to의 목적어라 전치사 to가 남아요.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['The poet had dictionaries to refer to.','The poet had dictionaries to refer.','The poet had dictionaries which to refer to.','The poet had dictionaries for refer to.','The poet had dictionaries to refer them to.'],a:0,e:'명사 뒤 to부정사의 목적어가 그 명사일 때는 전치사를 남겨요: dictionaries to refer to.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nTranslators arrive at their (A) in (B) with other people, and draw on more than one source (C).',o:['interpretations – dialogue – text','pressures – dialogue – text','interpretations – pressure – text','expectations – debate – scene','interpretations – debate – scene'],a:0,e:'(A) interpretations(해석) (B) dialogue(대화) (C) text(텍스트).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['commentary – explanation · purpose – aim','pressure – force · community – society','orally – verbally · expectation – anticipation','arise from – result from · draw on – rely on','set about – begin · on one’s own – with others'],a:4,e:'on one’s own은 ‘혼자서’이고 with others는 ‘다른 사람들과 함께’라 반대예요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 sense가 윗글(의미, 뜻)과 같은 뜻으로 쓰인 것은?',o:['In a __sense__, both answers are right.','She has a good __sense__ of humor.','He had a __sense__ of danger.','You should have the common __sense__ to leave.','The dog has a keen __sense__ of smell.'],a:0,e:'윗글의 senses는 ‘의미’이고 ①의 sense도 ‘의미’예요. 나머지는 감각·느낌·분별력이에요.'}],
 M:[
  {k:'gr',marks:[['doing','doing'],['arrive','arrive'],['translating','translating'],['that','what'],['influenced','influenced']],e:'④ translations를 꾸미는 관계대명사는 선행사가 있으므로 that (what은 선행사를 포함해서 ✕).'},
  {k:'bl',ph:'draw on more than one source text',o:['draw on more than one source text','work from one original manuscript','rely on a single dictionary','ignore previous translations','avoid reader expectations'],e:'포프의 사례처럼 번역가는 주석서·번역본·사전 등 여러 텍스트에 의지해요.'},
  {k:'ins',s:6,at:[2,3,4,5,6],e:'And then으로 시작하는 문장은 번역가의 언어 지식(⑥)을 말한 뒤 번역 목적(⑦)을 덧붙이고, 마지막 결론(In both these senses) 바로 앞에 와요.'}]
});
})();

// ===== 올림포스 13강 12번 · 엄격한 규제가 낳은 혁신 =====
(()=>{
const S=ENG.T['o13-12'];
const KO=[
 '사업 전략과 환경에 관한 연구를 하던 중, 마이클 포터는 특이한 양상을 알아차렸는데, 기업들이 규제로부터 이익을 얻는 것처럼 보였다는 것이다.',
 '그는 또한 더 엄격한 규제가 더 약한 규제보다 더 많은 혁신을 촉진하고 있다는 것을 발견했다.',
 '네덜란드 화훼 산업이 하나의 예를 제공한다.',
 '여러 해 동안, 네덜란드의 세계적으로 유명한 튤립과 다른 절화(꺾은 꽃)를 생산하는 회사들은 비료와 살충제로 그 나라의 물과 토양을 오염시키기도 했다.',
 '1991년에 네덜란드 정부는 2000년까지 살충제 사용을 절반으로 줄이는 것을 목표로 한 정책을 채택했고, 이는 그들이 결국 달성한 목표였다.',
 '점점 더 엄격해지는 규제에 직면하자, 온실 재배자들은 더 적은 살충제로 제품 품질을 유지하려면 새로운 방법을 개발해야 한다는 것을 깨달았다.',
 '이에 대응하여 그들은 폐쇄 순환 시스템에서 물을 순환시키고 암면(rock wool) 배지에서 꽃을 키우는 재배 방식으로 바꾸었다.',
 '새로운 시스템은 환경으로 방출되는 오염을 줄였을 뿐만 아니라, 기업들에게 재배 조건에 대한 더 큰 통제력을 주어 이익도 늘렸다.'];
const W=[
 ['in the course of','~하는 동안, ~ 중에','p',1,'In the course of'],['strategy','전략','w',1,'strategy'],['notice','알아차리다','w',1,'noticed'],['peculiar','특이한, 독특한','w',1,'peculiar'],
 ['profit from','~로부터 이익을 얻다','p',1,'profiting from'],['regulation','규제','w',1,'regulation'],
 ['strict','엄격한','w',2,'stricter'],['prompt','촉진하다, 유도하다','w',2,'prompting'],['innovation','혁신','w',2,'innovation'],
 ['illustration','예(시), 설명','w',3,'illustration'],
 ['contaminate','오염시키다','w',4,'contaminating'],['fertilizer','비료','w',4,'fertilizers'],['pesticide','살충제','w',4,'pesticides'],['world-renowned','세계적으로 유명한','w',4,'world-renowned'],
 ['adopt','채택하다','w',5,'adopted'],['policy','정책','w',5,'policy'],['be designed to V','~하도록 고안되다','p',5,'designed to'],['cut A in half','A를 절반으로 줄이다','p',5,'cut pesticide use in half'],['ultimately','결국, 궁극적으로','w',5,'ultimately'],['achieve','달성하다','w',5,'achieved'],
 ['face','~에 직면하다','w',6,'Facing'],['greenhouse','온실','w',6,'greenhouse'],['realize','깨닫다','w',6,'realized'],['maintain','유지하다','w',6,'maintain'],
 ['in response','이에 대응하여','p',7,'In response'],['shift to','~로 바꾸다, 전환하다','p',7,'shifted to'],['cultivation','재배','w',7,'cultivation'],['circulate','순환시키다','w',7,'circulates'],['substrate','(식물이 자라는) 배지, 기질','w',7,'substrate'],
 ['not only A but also B','A뿐만 아니라 B도','p',8,'not only'],['pollution','오염','w',8,'pollution'],['release','방출하다','w',8,'released'],['control','통제(력), 관리','w',8,'control'],['condition','조건, 환경','w',8,'conditions']];
ENG.add('o13-12',{u:0,n:'엄격한 규제가 낳은 혁신',no:'13-12',src:'2023년 6월 고2 학평 31번 · 올림포스 13강 12번',KO,W,
 sum:'포터는 ==엄격한 규제가 더 많은 혁신==을 촉진해 오히려 기업이 ==이익==을 얻는다는 것을 발견했고, 네덜란드 화훼 산업은 ==살충제 규제==를 계기로 ==폐쇄 순환 재배==를 개발해 오염을 줄이고 이익도 늘렸다.',
 st:[['발견','①~②','규제로부터 이익을 얻는 기업들 → ==엄격한 규제 = 더 많은 혁신=='],['예시 도입','③','네덜란드 화훼 산업'],['과거','④','튤립 재배 회사가 ==물·토양을 오염=='],['규제','⑤','정부의 ==살충제 절반 감축== 정책'],['대응','⑥~⑦','재배자들이 ==새 재배 방식==(폐쇄 순환, 암면)으로 전환'],['결과','⑧','==오염 감소 + 이익 증가=='] ],
 syn:[
  ['to be + -ing (진행 부정사)','Businesses seemed ==to be profiting== from regulation — seem to be -ing = ~하고 있는 것처럼 보이다.'],
  ['대명사 ones','the stricter regulations were prompting more innovation than the weaker ==ones== — ones = regulations(복수 가산명사 대신).'],
  ['현재분사 후치 수식','the companies ==producing== Holland’s ~ flowers — 능동 → 현재분사. were also contaminating = 과거진행(지속된 행위).'],
  ['과거분사 후치 수식 + 관계사 생략','a policy ==designed to== cut ~ — 수동 과거분사. a goal ==(that)== they ultimately achieved — 목적격 관계대명사 생략.'],
  ['분사구문','==Facing== increasingly strict regulation, greenhouse growers realized — 주어(growers)가 직면하는 능동 → Facing (= When they faced).'],
  ['접속사 that 생략 + be going to','realized ==(that)== they had to develop ~ if they ==were going to== maintain — if절의 be going to = ~하려면(의도).'],
  ['관계절 동사 병렬','a cultivation method that ==circulates== water ~ and ==grows== flowers — 선행사 method(단수)에 맞춘 단수 동사 두 개의 병렬.'],
  ['not only A but also B','The new system ==not only== reduced ~; it ==also== increased ~ — A와 B는 같은 형태끼리(reduced / increased). 분사 released는 pollution을 후치 수식(수동).']],
 tip:'**함정 주의** the weaker ==ones==의 ones는 regulations를 대신하는 대명사예요. not only A but also B는 A와 B의 형태를 맞춰요(reduced ~ increased).',
 pts:['핵심: ==엄격한 규제 → 혁신 → 이익 증가== (포터의 발견)','예시: 네덜란드 화훼 — 살충제 절반 감축 정책 → 폐쇄 순환 재배 → 오염 감소 + 이익 증가','빈칸 단골: stricter regulations / innovation / profits / control','어법: 분사 후치 수식, 관계대명사 생략, not only A but also B, 분사구문'],
 tips:{'대명사 ones':'ones는 앞에 나온 복수 가산명사(regulations)를 대신해요.','분사의 후치 수식':'명사 뒤 분사 — 능동이면 -ing, 수동이면 p.p.!','관계대명사 생략':'a goal they achieved처럼 목적격 관계대명사는 생략돼요.','분사구문':'주어와 능동 관계면 -ing로 시작하는 분사구문!','병렬 구조':'관계절 안의 동사가 and로 이어지면 같은 형태로 맞춰요.','어법 선택':'병렬 · 분사 · 수 일치를 차례로 확인해요.','글의 내용':'핵심: 엄격한 규제가 혁신과 이익으로 이어진다.','영작':'that 절 접속사와 not only A but also B 구문을 정확히!','어법 문장 고르기':'not only A but also B의 병렬 형태를 확인해요.','제목 추론':'글 전체를 한마디로 — 엄격한 규제가 낳은 혁신!'},
 B:[
  {g:'대명사 ones',q:'the stricter regulations were prompting more innovation than the weaker ones\n\n밑줄 친 __ones__가 가리키는 것은?',o:['regulations','innovations','businesses','methods','pesticides'],a:0,e:'ones는 앞의 복수 가산명사 regulations를 대신해요. (the weaker regulations)'},
  {g:'분사의 후치 수식',q:'the companies producing Holland’s world-renowned tulips\n\n밑줄 친 __producing__의 쓰임으로 알맞은 것은?',o:['명사 companies를 뒤에서 꾸미는 현재분사','문장의 주어인 동명사','과거진행형을 만드는 동사의 일부','시간을 나타내는 분사구문','전치사의 목적어인 동명사'],a:0,e:'companies를 능동으로 꾸미는 현재분사예요. (= companies that produce ~)'},
  {g:'관계대명사 생략',q:'a goal they ultimately achieved\n\nthey 앞에는 목적격 관계대명사가 생략되어 있다.',a:true,e:'a goal (that) they ultimately achieved — achieved의 목적어가 선행사 a goal이라 목적격 관계대명사 생략이에요.'},
  {g:'분사의 후치 수식',q:'a policy designed to cut pesticide use in half\n\n밑줄 친 __designed__의 설명으로 알맞은 것은?',o:['명사 policy를 꾸미는 과거분사(수동)','동사 adopted의 목적어','현재완료를 만드는 과거분사','정책이 직접 설계했다는 능동의 현재분사','명령문의 동사'],a:0,e:'정책은 ‘고안되는’ 수동 관계라 과거분사 designed (= a policy that was designed to ~).'},
  {g:'분사구문',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n[빈칸] increasingly strict regulation, greenhouse growers realized they had to develop new methods. (직면하자)',a:['Facing'],m:'Facing',e:'주어 growers가 직면하는 능동 관계의 분사구문이라 Facing.'},
  {g:'병렬 구조',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nThey shifted to a cultivation method that ⓐ(circulate / circulates) water in closed-loop systems and ⓑ(grow / grows) flowers in a rock wool substrate.',o:['circulates – grows','circulate – grow','circulates – grow','circulate – grows','circulating – grows'],a:0,e:'선행사 a cultivation method(단수) → circulates와 grows가 and로 병렬.'},
  {g:'어법 선택',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nThe new system not only reduced the pollution ⓐ(released / releasing) into the environment; it also increased profits by ⓑ(give / giving) companies greater control.',o:['released – giving','releasing – giving','released – give','releasing – give','released – given'],a:0,e:'ⓐ 오염이 ‘방출되는’ 수동 → released. ⓑ 전치사 by 뒤는 동명사 giving.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nThe new system not [빈칸] reduced the pollution; it also increased profits. (~뿐만 아니라)',a:['only'],m:'only',e:'not only A but also B 구문이에요.'},
  {g:'글의 내용',q:'윗글에서 마이클 포터가 발견한 것으로 알맞은 것은?\n\n'+S.join(' '),o:['엄격한 규제가 더 약한 규제보다 더 많은 혁신을 촉진한다','규제는 언제나 기업의 이익을 줄인다','약한 규제가 혁신을 더 크게 촉진한다','혁신은 규제와 아무 관련이 없다','환경 규제는 산업을 쇠퇴시킨다'],a:0,e:'두 번째 문장에서 더 엄격한 규제가 더 많은 혁신을 촉진한다고 했어요.'},
  {g:'글의 내용',q:'if they were going to maintain product quality with fewer pesticides\n\n밑줄 친 부분의 뜻으로 알맞은 것은?',o:['~하려면','~했다면','~하더라도','~하기 때문에','~하는 동안'],a:0,e:'if절의 be going to는 의도를 나타내서 ‘~하려면’이에요.'}],
 X:[
  {k:'gr',marks:[['profiting','profiting'],['prompting','prompting'],['producing','producing'],['designed','designing'],['circulates','circulates']],e:'④ 정책이 ‘고안된’ 수동 관계이므로 과거분사 designed (a policy designed to ~).'},
  {k:'vo',marks:[['peculiar','peculiar'],['stricter','looser'],['contaminating','contaminating'],['maintain','maintain'],['control','control']],e:'② 더 약한 규제와 비교해 ‘더 엄격한(stricter)’ 규제가 혁신을 더 촉진했다는 내용이에요.'},
  {k:'bl',ph:'the stricter regulations were prompting more innovation than the weaker ones',st:'윗글의 빈칸에 들어갈 말로 가장 적절한 것은?',o:['the stricter regulations were prompting more innovation than the weaker ones','the weaker regulations were prompting more innovation than the stricter ones','regulations had no effect on innovation at all','innovation was prompting stricter regulations','the stricter regulations were preventing businesses from growing'],e:'네덜란드 사례처럼 엄격한 규제가 혁신을 촉진했다는 내용이에요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['엄격한 환경 규제는 기업의 혁신을 촉진해 오히려 이익을 높일 수 있다','규제가 약할수록 기업은 더 많은 이익을 얻는다','살충제를 줄이면 꽃의 품질은 반드시 떨어진다','정부는 기업에 규제를 가하지 말아야 한다','네덜란드 화훼 산업은 규제 때문에 쇠퇴했다'],e:'엄격한 규제 → 혁신 → 오염 감소·이익 증가라는 흐름이 글의 요지예요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['Strict Regulation: A Spark for Innovation','The Decline of the Dutch Flower Industry','Why Pesticides Are Necessary for Farming','Weak Rules, Strong Profits','How to Grow Tulips at Home'],e:'엄격한 규제가 혁신의 불씨가 된다는 내용이에요.'},
  {k:'sm',s:'Strict environmental (A) can push companies to (B), which may even raise their profits.',o:['regulations – innovate','taxes – retreat','subsidies – relax','markets – merge','prices – expand'],e:'(A) 엄격한 규제(regulations) (B) 혁신하다(innovate).'},
  {k:'ins',s:6,at:[2,3,4,5,6],e:'In response는 앞에서 말한 규제 직면과 개발 필요성(⑥)에 대한 대응을 말하고, 새 시스템의 결과(마지막 문장) 바로 앞에 와요.'},
  {k:'ord',cut:[3,2,2],lab:['C','A','B'],e:'(C) 과거 오염과 정부의 정책 → (A) 규제에 직면한 재배자의 대응 → (B) 새 시스템의 결과.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nHe also discovered [빈칸] the stricter regulations were prompting more innovation.',a:['that'],m:'that',e:'discover의 목적어 절을 이끄는 접속사 that.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['The new system not only reduced pollution but also increased profits.','The new system not only reduce pollution but also increased profits.','The new system not only reduced pollution but also increase profits.','The new system reduced not only pollution but also increasing profits.','The new system not only reduced pollution but increased also profits.'],a:0,e:'not only A but also B에서 A와 B는 같은 형태(reduced / increased)로 병렬해요.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nDutch growers had to cut (A) use in half, so they developed a new (B) method that also gave them more (C) over growing conditions.',o:['pesticide – cultivation – control','fertilizer – cooking – profit','pesticide – cultivation – pressure','water – cultivation – control','pesticide – transportation – control'],a:0,e:'(A) pesticide(살충제) (B) cultivation(재배) (C) control(통제력).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['peculiar – strange · world-renowned – famous','adopt – accept · achieve – accomplish','contaminate – pollute · maintain – keep','illustration – example · cultivation – farming','strict – lenient · prompt – encourage'],a:4,e:'strict(엄격한)의 반대말이 lenient(관대한)이에요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 face(s)가 윗글(~에 직면하다)과 같은 뜻으로 쓰인 것은?',o:['Many small firms __face__ a shortage of workers.','The clock has a white __face__.','He lost __face__ in front of everyone.','She washed her __face__ with cold water.','Don’t pull a long __face__.'],a:0,e:'윗글의 Facing은 ‘직면하다’(동사)이고, 나머지 face는 모두 명사(얼굴·표면·체면)예요.'}],
 M:[
  {k:'gr',marks:[['noticed','noticed'],['discovered','discovered'],['provides','provide'],['adopted','adopted'],['maintain','maintain']],e:'③ 주어 The Dutch flower industry는 단수이므로 provides.'},
  {k:'bl',ph:'greater control over growing conditions',o:['greater control over growing conditions','less money for growing flowers','lower prices for cut flowers','fewer workers in greenhouses','more pesticides for protecting flowers'],e:'새 재배 시스템은 오염을 줄이면서 재배 조건에 대한 통제력을 높여 이익도 늘렸어요.'},
  {k:'ins',s:2,at:[1,2,3,4,5],e:'The Dutch flower industry provides an illustration은 앞의 일반적 발견(①~②)을 사례로 이어 주는 문장이에요.'}]
});
})();

// ===== 올림포스 14강 14번 · 교란 변수와 인과 결론 =====
(()=>{
const S=ENG.T['o14-14'];
const KO=[
 '인간에 대한 관찰 연구는 제대로 통제될 수 없다.',
 '인간은 서로 다른 생활 방식으로, 서로 다른 환경에서 산다.',
 '따라서 인간은 적합한 실험 대상이 되기에는 충분히 동질적이지 않다.',
 '이러한 교란 요인들은 인간 역학 조사에서 타당한 인과 결론을 도출하는 우리의 능력을 약화시킨다.',
 '교란 요인이란 (알려졌든 알려지지 않았든) 역학자들이 연구 중인 특정 변수의 영향을 분리해 내기 어렵게 만드는 변수들이다.',
 '예를 들어, 타웁스는 술을 마시는 사람 중 상당수가 담배도 피우기 때문에 연구자들이 알코올 섭취와 암 사이의 연관성을 밝히는 데 어려움을 겪는다고 주장했다.',
 '마찬가지로, 유명한 프레이밍햄 연구의 연구자들은 커피 마시기와 관상 동맥 심장 질환 사이에서 유의미한 상관관계를 확인했다.',
 '그러나 이 상관관계의 대부분은 많은 커피 애호가가 담배도 피운다는 사실을 연구자들이 보정하자 사라졌다.',
 '교란 요인이 알려져 있다면, 그것들을 보정하는 것이 종종 가능하다.',
 '그러나 그것들이 알려져 있지 않다면, 그것들은 우리가 역학 조사에서 도출하는 인과 결론의 신뢰성을 약화시킬 것이다.'];
const W=[
 ['observational','관찰에 의한','w',1,'Observational'],['properly','제대로, 적절하게','w',1,'properly'],['control','통제하다','w',1,'controlled'],
 ['lifestyle','생활 방식','w',2,'lifestyles'],
 ['insufficiently','불충분하게','w',3,'insufficiently'],['homogeneous','동질적인','w',3,'homogeneous'],['suitable','적합한, 알맞은','w',3,'suitable'],['experimental subject','실험 대상','w',3,'experimental subjects'],
 ['confounding','교란시키는, 혼동을 주는','w',4,'confounding'],['undermine','약화시키다, 훼손하다','w',4,'undermine'],['draw a conclusion','결론을 도출하다','p',4,'draw sound causal conclusions'],['sound','타당한, 건전한','w',4,'sound'],['causal','인과(관계)의','w',4,'causal'],['epidemiological','역학(疫學)의','w',4,'epidemiological'],['survey','조사','w',4,'surveys'],
 ['variable','변수','w',5,'variables'],['make it difficult for A to V','A가 V하는 것을 어렵게 하다','p',5,'make it difficult for'],['isolate','분리하다, 고립시키다','w',5,'isolate'],
 ['argue','주장하다','w',6,'argued'],['have difficulty -ing','~하는 데 어려움을 겪다','p',6,'have difficulty'],['determine','알아내다, 결정하다','w',6,'determining'],['link','연관성, 관련','w',6,'link'],['consumption','섭취, 소비','w',6,'consumption'],
 ['similarly','마찬가지로','w',7,'Similarly'],['correlation','상관관계','w',7,'correlation'],['significant','유의미한, 상당한','w',7,'significant'],['coronary','관상 동맥의','w',7,'coronary'],
 ['disappear','사라지다','w',8,'disappeared'],['once','~하자, 일단 ~하면','w',8,'once'],['correct for','~을 보정하다','p',8,'corrected for'],
 ['reliability','신뢰성, 신뢰도','w',10,'reliability']];
ENG.add('o14-14',{u:0,n:'교란 변수와 인과 결론',no:'14-14',src:'2022년 11월 고2 학평 34번 · 올림포스 14강 14번',KO,W,
 sum:'인간에 대한 관찰 연구는 생활 방식이 서로 달라 통제되지 않으므로 ==교란 요인==이 생기고, 이는 연구 중인 변수의 영향을 분리하기 어렵게 만들어 ==인과 결론의 신뢰성==을 약화시킨다. 교란 요인이 알려져 있으면 ==보정==할 수 있지만 모르면 보정할 수 없다.',
 st:[['문제','①~③','인간은 ==통제 불가== → 실험 대상으로 충분히 동질적이지 않음'],['정의','④~⑤','==교란 요인== = 연구 변수의 영향을 분리하기 어렵게 만드는 변수'],['예시 1','⑥','Taubes: ==술·흡연·암=='],['예시 2','⑦~⑧','Framingham: ==커피·흡연·심장병==, 흡연을 보정하자 상관관계 사라짐'],['결론','⑨~⑩','알려진 교란 요인은 ==보정 가능==, 모르면 ==신뢰성 약화==']],
 syn:[
  ['조동사 + 수동 + 부사','cannot be ==properly== controlled — 조동사 뒤 수동태(be + p.p.), 부사 properly는 be와 p.p. 사이.'],
  ['insufficiently … to V','==insufficiently homogeneous to be== suitable ~ = not homogeneous enough to be suitable. (~하기에는 충분히 …하지 않다)'],
  ['형용사적 to부정사','our ability ==to draw== sound causal conclusions — ability를 꾸미는 to부정사(~하는 능력).'],
  ['가목적어 it + 분사 후치 수식','variables that make ==it== difficult ==for epidemiologists== ==to isolate== ~ the specific variable ==being studied== — it은 가목적어, being studied는 variable을 꾸미는 수동 분사.'],
  ['have difficulty -ing','researchers ==have difficulty determining== the link — ~하는 데 어려움을 겪다(전치사 in 생략, 동명사).'],
  ['once 접속사 / 동격 that','==once== researchers corrected for ~ — once는 접속사(~하자). the fact ==that== many coffee drinkers also smoke — 동격의 that절(완전한 절).'],
  ['가주어 it','==it== is often possible ==to correct for== them — 가주어 it, 진주어 to부정사. correct for = ~을 보정하다.'],
  ['관계대명사 생략','the causal conclusions ==(that)== we draw — 목적격 관계대명사 생략.']],
 tip:'**함정 주의** since가 ‘~ 때문에’(이유)로 쓰인 문장(since many people who drink also smoke)과 once가 ‘~하자’(접속사)로 쓰인 문장을 구분해요. the fact that ~의 that은 관계대명사가 아니라 ==동격 접속사==(뒤가 완전한 절).',
 pts:['핵심: ==인간 관찰 연구 → 교란 요인 → 인과 결론의 신뢰성 약화==','예시: Taubes(술·흡연·암), Framingham(커피·흡연·심장병)','빈칸 단골: confounding factors / correct for / causal conclusions','어법: 가목적어 it, 동격 that, once 접속사, 분사 후치 수식'],
 tips:{'조동사 수동태':'조동사 뒤 수동태는 be + p.p., 부사는 그 사이에 올 수 있어요.','가목적어 it':'make + it + 형용사 + for A to V — 진목적어 to부정사를 뒤로!','분사의 후치 수식':'명사 뒤 분사 — 수동·진행이면 being p.p., 능동이면 -ing!','동격의 that':'the fact that ~의 that 뒤에는 완전한 절이 와요.','접속사 once':'once = ~하자, 일단 ~하면 (접속사).','어법 선택':'수 일치 · 분사 · 동명사를 차례로 확인해요.','글의 내용':'핵심: 교란 요인 때문에 인과 결론이 흔들린다.','영작':'가목적어 it · 전치사(correct for)를 정확히!','어법 문장 고르기':'가주어 it 구문과 correct for 어순을 확인해요.','제목 추론':'글 전체를 한마디로 — 교란 요인이라는 걸림돌!'},
 B:[
  {g:'insufficiently … to V',q:'they are insufficiently homogeneous to be suitable experimental subjects\n\n위 문장의 뜻으로 알맞은 것은?',o:['충분히 동질적이지 않아 적합한 실험 대상이 되기 어렵다','너무 동질적이라 실험 대상으로 부적합하다','동질적이어서 실험 대상으로 매우 적합하다','충분히 동질적이어서 인과관계를 알 수 있다','동질적인지는 실험과 상관없다'],a:0,e:'insufficiently ~ to V = ~하기에는 충분히 …하지 않다. (= not homogeneous enough to be suitable)'},
  {g:'형용사적 to부정사',q:'our ability to draw sound causal conclusions\n\n밑줄 친 __to draw__는 명사 ability를 꾸미는 형용사적 용법이다.',a:true,e:'ability(능력)를 꾸며 ‘~하는 능력’이라는 뜻의 형용사적 용법이에요.'},
  {g:'가목적어 it',q:'variables that make it difficult for epidemiologists to isolate the effects\n\n밑줄 친 __it__의 역할로 알맞은 것은?',o:['가목적어(진목적어는 to isolate 이하)','가주어','앞 문장을 가리키는 인칭대명사','강조 구문의 it','비인칭 주어'],a:0,e:'make + it(가목적어) + difficult + for A to V(진목적어)예요.'},
  {g:'분사의 후치 수식',q:'the specific variable being studied\n\n밑줄 친 __being studied__는 variable을 꾸미는 ‘연구되고 있는’의 뜻이다.',a:true,e:'variable이 ‘연구되는’ 수동 관계이고 진행의 의미라 being studied예요. (= that is being studied)'},
  {g:'어법 선택',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nresearchers ⓐ(have / has) difficulty ⓑ(determine / determining) the link between alcohol consumption and cancer',o:['have – determining','has – determining','have – determine','has – determine','have – to determine'],a:0,e:'ⓐ 주어 researchers(복수) → have. ⓑ have difficulty (in) -ing → determining.'},
  {g:'접속사 once',q:'once researchers corrected for the fact that many coffee drinkers also smoke\n\n밑줄 친 __once__의 뜻으로 알맞은 것은?',o:['~하자, 일단 ~하면','한 번','이전에','~ 때문에','~에도 불구하고'],a:0,e:'once가 접속사로 쓰이면 ‘일단 ~하면, ~하자’예요.'},
  {g:'동격의 that',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nresearchers corrected for the fact [빈칸] many coffee drinkers also smoke (~라는 사실)',a:['that'],m:'that',e:'the fact와 동격인 절을 이끄는 접속사 that이에요. (뒤가 완전한 절)'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nIf the confounding factors are known, it is often possible to correct [빈칸] them. (~을 보정하다)',a:['for'],m:'for',e:'correct for = ~을 보정하다.'},
  {g:'글의 내용',q:'윗글의 Framingham 연구에 대한 설명으로 알맞은 것은?\n\n'+S.join(' '),o:['커피 마시기와 심장병의 상관관계 대부분은 흡연을 보정하자 사라졌다','커피가 심장병의 직접적 원인임이 입증되었다','흡연은 심장병과 무관하다는 것이 밝혀졌다','커피를 마시면 흡연량이 줄어든다는 것이 밝혀졌다','보정한 뒤에 상관관계가 더 강해졌다'],a:0,e:'⑧: 많은 커피 애호가가 담배도 피운다는 사실을 보정하자 상관관계 대부분이 사라졌어요.'},
  {g:'글의 내용',q:'마지막 문장의 밑줄 친 __they__가 가리키는 것은?\n\nHowever, if they are unknown, they will undermine the reliability of the causal conclusions ...',o:['알려지지 않은 교란 요인들','역학자들','실험 대상자들','인과 결론들','연구되는 변수들'],a:0,e:'앞 문장의 the confounding factors를 가리키며, ‘알려지지 않은 경우’의 교란 요인이에요.'}],
 X:[
  {k:'gr',marks:[['controlled','controlled'],['undermine','undermine'],['make','makes'],['determining','determining'],['corrected','corrected']],e:'③ 선행사 variables(복수)를 받는 관계절의 동사이므로 make.'},
  {k:'vo',marks:[['properly','properly'],['insufficiently','insufficiently'],['undermine','strengthen'],['significant','significant'],['disappeared','disappeared']],e:'③ 교란 요인은 인과 결론을 도출하는 능력을 ‘약화시킨다(undermine)’. strengthen(강화하다)은 글의 흐름과 반대예요.'},
  {k:'bl',ph:'undermine the reliability of the causal conclusions we draw from epidemiological surveys',o:['undermine the reliability of the causal conclusions we draw from epidemiological surveys','improve the accuracy of laboratory experiments','strengthen the link between smoking and cancer','simplify the process of isolating variables','reduce the number of confounding variables'],e:'알려지지 않은 교란 요인은 보정할 수 없으므로 인과 결론의 신뢰성을 약화시켜요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['인간에 대한 관찰 연구에서는 교란 요인 때문에 인과 결론의 신뢰성이 떨어질 수 있다','커피와 술은 암의 직접적인 원인이다','역학 조사는 실험보다 항상 더 정확하다','교란 요인은 언제나 쉽게 보정된다','인간은 실험 대상으로 가장 적합하다'],e:'교란 요인이 인간 관찰 연구의 인과 결론을 흔든다는 것이 요지예요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['Confounding Factors: Obstacles to Sound Causal Conclusions','Coffee and Alcohol: A Perfect Combination','Why Human Experiments Are Always Reliable','The History of the Framingham Study','How to Quit Smoking for Good'],e:'교란 요인이 타당한 인과 결론을 가로막는다는 내용이에요.'},
  {k:'sm',s:'(A) factors in human studies make it hard to (B) the effect of one variable, which weakens causal conclusions.',o:['Confounding – isolate','Helpful – ignore','Known – create','Genetic – measure','Simple – combine'],e:'(A) 교란(Confounding) 요인 (B) 한 변수의 영향을 분리하다(isolate).'},
  {k:'ins',s:7,at:[3,4,5,6,7],e:'However로 앞 문장(커피와 심장병의 상관관계 확인)을 뒤집고, 교란 요인이 알려진 경우를 말하는 문장(If ~ known) 바로 앞에 와요.'},
  {k:'ord',cut:[4,2,2],lab:['B','C','A'],e:'(B) 교란 요인의 정의 + Taubes 예시 → (C) Similarly Framingham 예시 → (A) 알려진/알려지지 않은 경우의 결론.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nConfounding factors are variables that make [빈칸] difficult for epidemiologists to isolate the effects.',a:['it'],m:'it',e:'가목적어 it + difficult + for A to V(진목적어).'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['If the factors are known, it is often possible to correct for them.','If the factors are known, it is often possible correcting for them.','If the factors are known, that is often possible to correct for them.','If the factors are known, it is often possible for correct them.','If the factors are known, there is often possible to correct for them.'],a:0,e:'가주어 it + possible + to부정사(진주어). correct for = 보정하다.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nMany people who drink also smoke, so researchers have difficulty determining the (A) between alcohol and cancer. Such (B) factors undermine the (C) of causal conclusions.',o:['link – confounding – reliability','cause – confounding – reliability','link – suitable – reliability','link – confounding – survey','link – homogeneous – survey'],a:0,e:'(A) link(연관성) (B) confounding(교란시키는) (C) reliability(신뢰성).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['undermine – weaken · isolate – separate','argue – claim · determine – find out','significant – considerable · similarly – likewise','suitable – appropriate · sound – valid','disappear – appear · correct for – adjust for'],a:4,e:'disappear(사라지다)의 반대말이 appear(나타나다)예요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 control이 윗글(통제하다)과 다른 뜻으로 쓰인 것은?',o:['He couldn’t __control__ his anger.','Scientists must __control__ other variables.','She learned to __control__ the robot.','The __control__ group did not take the drug.','The government tries to __control__ prices.'],a:3,e:'④의 control group은 ‘대조군’(명사)이고, 나머지는 ‘통제하다’(동사)예요.'}],
 M:[
  {k:'gr',marks:[['argued','argued'],['have','has'],['identified','identified'],['disappeared','disappeared'],['known','known']],e:'② 주어 researchers(복수) → have difficulty.'},
  {k:'bl',ph:'isolate the effects of the specific variable being studied',o:['isolate the effects of the specific variable being studied','combine the results of different studies','predict the future of the variable','increase the number of subjects','reduce the cost of experiments'],e:'교란 요인은 연구 중인 특정 변수의 영향을 따로 떼어 내기 어렵게 만들어요.'},
  {k:'ins',s:3,at:[1,2,3,4,5],e:'These confounding factors는 앞 문장의 서로 다른 생활 방식·환경을 가리키고, 뒤의 교란 요인의 정의(Confounding factors are ~)로 이어져요.'}]
});
})();

// ===== 올림포스 14강 16번 · 직업으로서의 저널리즘 =====
(()=>{
const S=ENG.T['o14-16'];
const KO=[
 '직업으로서 저널리즘에서 특이한 점은 독립성이 부족하다는 것이다.',
 '이론상, 의학이나 성직 같은 고전적 전문직의 종사자들은 생산 수단을 머리와 손에 지니고 있으므로, 회사나 고용주를 위해 일할 필요가 없다.',
 '그들은 자신의 수입을 고객이나 환자에게서 직접 얻을 수 있다.',
 '게다가 전문가들이 지식을 가지고 있기 때문에 그들의 고객은 그들에게 의존한다.',
 '언론인도 지식을 가지고 있지만 그것은 본질적으로 이론적이지 않다. 대중이 환자가 의사에게 의존하는 것과 같은 방식으로 언론인에게 의존한다고 주장할 수도 있겠지만, 실제로 언론인은 대개 뉴스 기관에서 일함으로써만 대중에게 봉사할 수 있고, 그 기관은 그 또는 그녀를 마음대로 해고할 수 있다.',
 '언론인의 수입은 대중이 아니라 고용하고 있는 뉴스 기관에 달려 있으며, 그 기관은 흔히 수익의 대부분을 광고주로부터 얻는다.'];
const W=[
 ['unusual','특이한, 이례적인','w',1,'unusual'],['profession','직업, 전문직','w',1,'profession'],['lack','부족, 결핍','w',1,'lack'],['independence','독립(성)','w',1,'independence'],
 ['in theory','이론상(으로는)','p',2,'In theory'],['practitioner','종사자, 실무자','w',2,'practitioners'],['classic','고전적인, 전형적인','w',2,'classic'],['clergy','성직자(들)','w',2,'clergy'],['the means of production','생산 수단','p',2,'the means of production'],['have to V','~해야 한다','p',2,'have to'],['employer','고용주','w',2,'employer'],
 ['draw income from','~에서 수입을 얻다','p',3,'draw their income'],['client','고객, 의뢰인','w',3,'clients'],
 ['moreover','게다가, 더욱이','w',4,'moreover'],['dependent on','~에 의존하는','p',4,'dependent on'],
 ['theoretical','이론적인','w',5,'theoretical'],['in nature','본질적으로, 성격상','p',5,'in nature'],['depend on','~에 의존하다, ~에 달려 있다','p',5,'depends on'],['in practice','실제로는','p',5,'in practice'],['serve','봉사하다, 도움이 되다','w',5,'serve'],['organization','기관, 조직','w',5,'organization'],['at will','마음대로, 자유롭게','p',5,'at will'],['fire','해고하다','w',5,'fire'],
 ['employing','고용하고 있는','w',6,'employing'],['derive A from B','B에서 A를 얻다','p',6,'derives'],['majority','대다수','w',6,'majority'],['revenue','수익, 수입','w',6,'revenue'],['advertiser','광고주','w',6,'advertisers']];
ENG.add('o14-16',{u:0,n:'직업으로서의 저널리즘',no:'14-16',src:'2022년 6월 고2 학평 33번 · 올림포스 14강 16번',KO,W,
 sum:'의사 같은 고전적 전문직은 지식을 가지고 있어 ==고객에게서 직접 수입==을 얻지만, 언론인은 ==뉴스 기관에 고용==되어야 대중에게 봉사할 수 있고 수입도 ==광고주==에게서 나오므로 ==독립성이 부족==하다.',
 st:[['주제','①','저널리즘은 ==독립성이 부족==한 직업'],['대조(고전적 전문직)','②~④','생산 수단이 머리·손에 → ==고용주 불필요==, 고객에게서 직접 수입'],['언론인','⑤','지식은 있어도 ==뉴스 기관에 속해야== 봉사 가능, 해고될 수 있음'],['결론','⑥','수입은 ==대중이 아니라 기관(광고주)==에게서 나옴']],
 syn:[
  ['주어가 되는 명사절 what','==What== is unusual about journalism as a profession ==is== its lack of independence — what절이 주어(단수 취급), 보어는 its lack of independence.'],
  ['like 전치사 / 병렬','the classic professions, ==like== medicine or the clergy — 예시를 나타내는 전치사 like. 두 번째 문장 and therefore do not have to ~ 는 동사 contain과 병렬되는 do not have to.'],
  ['Because 부사절 + moreover','==Because== the professionals hold knowledge, ==moreover==, their clients are dependent on them — 이유 부사절 사이에 삽입된 연결어 moreover.'],
  ['세미콜론 이하 & the same way that','~; one might argue ==that== the public depends on journalists ==in the same way that== patients depend on doctors — 주장의 that절, in the same way that = ~와 같은 방식으로.'],
  ['only by -ing','a journalist can serve the public usually ==only by working== for a news organization — 오직 ~함으로써만(수단).'],
  ['계속적 용법 which','a news organization, ==which== can fire her or him at will — 선행사 a news organization, which = and it.'],
  ['not A but B','Journalists’ income depends ==not on the public, but on== the employing news organization — A가 아니라 B에 달려 있다.'],
  ['derive A from B','which often ==derives== the large majority of its revenue ==from== advertisers — 선행사 organization(단수) → derives.']],
 tip:'**함정 주의** the large majority of its revenue처럼 majority는 ‘대다수’를 뜻해요. depend on과 dependent on은 둘 다 ‘~에 의존’이지만 품사가 달라요(depend 동사, dependent 형용사).',
 pts:['핵심: ==저널리즘은 독립성이 부족한 직업== (고전적 전문직과 대조)','근거: 뉴스 기관에 고용돼야 봉사 가능 → 해고 가능 / 수입이 대중이 아닌 기관·광고주에서 나옴','빈칸 단골: lack of independence / depend on / news organization','어법: what 주어절, only by -ing, not A but B, 계속적 용법 which'],
 tips:{'명사절 what':'what절이 주어이면 단수 동사! What is unusual ~ is ~','only by -ing':'오직 ~함으로써만 — by 뒤는 동명사!','not A but B':'A가 아니라 B — 전치사 on도 대등하게 반복돼요.','계속적 용법 which':'콤마 뒤 which는 선행사에 대한 추가 설명이에요.','어법 선택':'수 일치 · 전치사 · 동명사를 차례로 확인해요.','글의 내용':'핵심: 저널리즘은 독립성이 부족한 직업이다.','영작':'only by -ing와 not A but B를 정확히!','어법 문장 고르기':'what 주어절의 수 일치를 확인해요.','제목 추론':'글 전체를 한마디로 — 독립성 없는 직업, 저널리즘!'},
 B:[
  {g:'명사절 what',q:'What is unusual about journalism as a profession is its lack of independence.\n\n밑줄 친 __What__절의 역할로 알맞은 것은?',o:['문장의 주어(명사절)','문장의 목적어','문장의 보어','주어를 꾸미는 형용사절','시간의 부사절'],a:0,e:'What ~ profession이 문장의 주어(명사절)이고 is 뒤가 보어예요.'},
  {g:'어법 선택',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nWhat is unusual about journalism ⓐ(is / are) its lack of independence, ⓑ(like / alike) medicine or the clergy, they do not have to work for a company.',o:['is – like','are – like','is – alike','are – alike','is – likes'],a:0,e:'ⓐ what절 주어는 단수 취급 → is. ⓑ 예시를 이끄는 전치사 like.'},
  {g:'only by -ing',q:'a journalist can serve the public usually only by working for a news organization\n\n밑줄 친 부분의 뜻으로 알맞은 것은?',o:['오직 뉴스 기관에서 일함으로써만','뉴스 기관에서 일하는 동안에만','뉴스 기관에서 일하기 위해서만','뉴스 기관에서 일했음에도 불구하고','뉴스 기관에서 일하지 않으려고'],a:0,e:'only by -ing = 오직 ~함으로써만(수단).'},
  {g:'계속적 용법 which',q:'a news organization, which can fire her or him at will\n\n밑줄 친 __which__의 선행사는 a news organization이다.',a:true,e:'콤마 뒤 which는 선행사 a news organization에 대한 추가 설명이에요. (= and it can fire ~)'},
  {g:'not A but B',q:'Journalists’ income depends not on the public, but on the employing news organization.\n\n위 문장의 뜻으로 알맞은 것은?',o:['언론인의 수입은 대중이 아니라 고용하는 뉴스 기관에 달려 있다','언론인의 수입은 대중과 뉴스 기관에 모두 달려 있다','언론인의 수입은 뉴스 기관이 아니라 대중에 달려 있다','언론인의 수입은 광고와 아무 관련이 없다','언론인은 수입 없이 일한다'],a:0,e:'not A but B = A가 아니라 B. 여기서 A는 the public, B는 the employing news organization.'},
  {g:'어법 선택',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nA news organization often ⓐ(derive / derives) the large majority of its revenue ⓑ(from / of) advertisers.',o:['derives – from','derive – from','derives – of','derive – of','deriving – from'],a:0,e:'ⓐ 주어 a news organization(단수) → derives. ⓑ derive A from B.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nThey can draw their income directly from their clients or patients. (draw A from B)\n= They can [빈칸] their income directly from their clients. (얻다)',a:['derive'],m:'derive',e:'derive A from B = B에서 A를 얻는다. draw A from B와 같은 뜻이에요.'},
  {g:'글의 내용',q:'윗글에서 고전적 전문직(의사·성직자)에 대한 설명으로 알맞은 것은?\n\n'+S.join(' '),o:['생산 수단이 머리와 손에 있어 고용주에게 의존하지 않아도 된다','반드시 회사에 소속되어야 일할 수 있다','수입의 대부분이 광고에서 나온다','지식이 이론적이지 않다','고객이 전문가에게 의존하지 않는다'],a:0,e:'②: 생산 수단을 머리와 손에 지니고 있어 회사나 고용주를 위해 일할 필요가 없어요.'},
  {g:'글의 내용',q:'윗글에서 언론인이 독립적이지 못한 이유로 가장 알맞은 것은?\n\n'+S.join(' '),o:['뉴스 기관에 고용되어야 대중에게 봉사할 수 있고 수입도 기관과 광고주에게서 나오기 때문','지식이 전혀 없기 때문','대중이 언론인에게 의존하지 않기 때문','언론인이 환자를 직접 돌보기 때문','광고주가 대중의 수입을 결정하기 때문'],a:0,e:'⑤⑥: 뉴스 기관에서 일해야 봉사할 수 있고, 수입은 기관(광고주)에서 나와요.'}],
 X:[
  {k:'gr',marks:[['is','is'],['contain','contain'],['draw','draw'],['depend','depend'],['derives','derive']],e:'⑤ 선행사 a news organization(단수) → derives.'},
  {k:'vo',marks:[['unusual','unusual'],['independence','independence'],['dependent','independent'],['theoretical','theoretical'],['majority','majority']],e:'③ 전문가가 지식을 가지고 있어서 고객이 그들에게 ‘의존적(dependent)’이라는 흐름이에요.'},
  {k:'bl',ph:'its lack of independence',o:['its lack of independence','its freedom from advertisers','its rapid growth','its high income','its theoretical knowledge'],e:'뒤 내용(뉴스 기관에 고용되고 해고될 수 있음)은 ‘독립성 부족’을 뒷받침해요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['저널리즘은 뉴스 기관과 광고주에게 의존하므로 다른 전문직과 달리 독립성이 부족하다','언론인은 의사보다 더 많은 지식을 가지고 있다','언론인은 대중에게서 직접 수입을 얻는다','고전적 전문직은 고용주 없이는 일할 수 없다','광고주는 언론의 독립성을 보장한다'],e:'고전적 전문직과 달리 언론인은 뉴스 기관과 광고주에 의존한다는 것이 요지예요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['Journalism: A Profession Lacking Independence','Why Doctors Earn More Than Journalists','The Rise of Online Advertising','Knowledge Is Power in the Newsroom','How to Become a News Anchor'],e:'저널리즘이 독립성이 부족한 직업이라는 내용이에요.'},
  {k:'sm',s:'Unlike doctors, journalists cannot serve the public (A) a news organization, which depends on (B) for most of its revenue.',o:['without – advertisers','against – readers','beyond – doctors','through – patients','despite – clergy'],e:'(A) 뉴스 기관 없이는(without) 대중에게 봉사하기 어렵고 (B) 수익은 광고주(advertisers)에게서 나와요.'},
  {k:'ins',s:3,at:[1,2,3,4,5],e:'Because the professionals hold knowledge, moreover ~는 앞 문장의 ‘수입을 직접 얻음’에 덧붙이는 또 다른 이유(moreover)로, 언론인과 대조되는 문장 앞에 와요.'},
  {k:'ord',cut:[2,1,2],lab:['B','C','A'],e:'(B) Because ~ moreover(고객이 전문가에게 의존) → (C) 그러나 언론인은 … → (A) 수입은 기관에 달려 있음.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n언론인의 수입은 대중이 아니라 고용 기관에 달려 있다.\n→ Journalists’ income depends not on the public, [빈칸] on the employing news organization.',a:['but'],m:'but',e:'not A but B 구문이에요.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['What is unusual about journalism is its lack of independence.','What are unusual about journalism is its lack of independence.','That is unusual about journalism is its lack of independence.','What is unusual about journalism are its lack of independence.','Which is unusual about journalism is its lack of independence.'],a:0,e:'what절이 주어이면 단수 취급하고, 보어는 its lack of independence예요.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nClassic professionals draw their (A) directly from their (B), but journalists must work for a news (C).',o:['income – clients – organization','revenue – advertisers – practitioner','income – employers – profession','profit – clients – advertiser','income – patients – independence'],a:0,e:'(A) income(수입) (B) clients(고객) (C) organization(기관).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['unusual – uncommon · profession – occupation','moreover – furthermore · revenue – income','client – customer · majority – most','theoretical – practical · fire – dismiss','serve – help · derive from – obtain from'],a:3,e:'theoretical(이론적인)의 반대말이 practical(실용적인)이에요. fire와 dismiss는 비슷한 말이에요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 fire가 윗글(해고하다)과 같은 뜻으로 쓰인 것은?',o:['The company decided to __fire__ the manager.','The campers sat around the __fire__.','Soldiers began to __fire__ at the target.','The house caught __fire__ last night.','They put out the __fire__ quickly.'],a:0,e:'윗글의 fire는 ‘해고하다’(동사). ③은 ‘발사하다’, 나머지는 ‘불’이에요.'}],
 M:[
  {k:'gr',marks:[['is','is'],['hold','hold'],['depends','depend'],['serve','serve'],['derives','derives']],e:'③ 주어 the public(단수) → depends.'},
  {k:'bl',ph:'in the same way that patients depend on doctors',o:['in the same way that patients depend on doctors','in the opposite way that doctors depend on patients','in a way that has nothing to do with doctors','as soon as patients stop trusting doctors','so that doctors can ignore patients'],e:'대중이 언론인에게 의존한다는 주장을 환자와 의사의 관계에 비유한 부분이에요.'},
  {k:'ins',s:2,at:[1,2,3,4,5],e:'They can draw their income directly from ~의 They는 앞 문장의 practitioners를 가리켜요. ②(고용주가 필요 없다) 바로 뒤에 와야 해요.'}]
});
})();

// ===== 올림포스 16강 6번 · 능력자들을 대하는 우리의 태도 =====
(()=>{
const S=ENG.T['o16-6'];
const KO=[
 '어떤 사람이 더 유능할수록 우리가 그 사람을 더 좋아하게 될 것이라는 것은 당연해 보일 것이다.',
 '‘능력’이란 영리함, 일을 해내는 능력, 현명한 결정 등 일련의 자질을 뜻한다.',
 '우리가 자기가 하는 일을 잘 알고 우리에게 가르쳐 줄 것이 많은 사람들로 주변을 채우면 인생의 과업을 잘 해낼 가능성이 더 높아진다.',
 '그러나 연구 증거는 역설적이다. 문제 해결 집단에서 가장 유능하다고 여겨지고 가장 좋은 아이디어를 가진 참여자들은 가장 호감을 사는 사람들이 아닌 경향이 있다.',
 '왜일까?',
 '한 가지 가능성은, 우리가 유능한 사람들 곁에 있기를 좋아하긴 해도, 지나치게 유능한 사람들은 우리를 불편하게 만든다는 것이다.',
 '그들은 가까이하기 어렵고, 거리감이 있으며, 초인적으로 보일 수 있고, 비교를 통해 우리를 못나 보이게(그리고 기분을 더 나쁘게) 만든다.',
 '이것이 사실이라면, 우리는 사람들이 실수할 수 있다는 증거를 보여 줄 때 그들을 더 좋아할지도 모른다.',
 '예를 들어, 친구가 뛰어난 수학자이자 훌륭한 운동선수이고 미식가 요리사라면, 그 친구가 이따금 실수를 한다면 그 사람을 더 좋아하게 될지도 모른다.'];
const W=[
 ['obvious','분명한, 명백한','w',1,'obvious'],['competent','유능한','w',1,'competent'],
 ['competence','능력, 역량','w',2,'competence'],['cluster','무리, 일련','w',2,'cluster'],['quality','자질, 특성','w',2,'qualities'],['get things done','일을 해내다','p',2,'get things done'],
 ['stand a chance of -ing','~할 가능성이 있다','p',3,'stand a better chance of'],['surround A with B','A를 B로 둘러싸다','p',3,'surround ourselves with'],['have a lot to teach','가르칠 것이 많다','p',3,'have a lot to teach'],
 ['paradoxical','역설적인','w',4,'paradoxical'],['participant','참여자','w',4,'participants'],['tend to V','~하는 경향이 있다','p',4,'tend not to be'],
 ['possibility','가능성','w',6,'possibility'],['be around','~ 곁에 있다','p',6,'be around'],['uncomfortable','불편한','w',6,'uncomfortable'],
 ['unapproachable','가까이하기 어려운','w',7,'unapproachable'],['distant','거리감이 있는, 먼','w',7,'distant'],['superhuman','초인적인','w',7,'superhuman'],['by comparison','비교해 보면','p',7,'by comparison'],
 ['reveal','드러내다, 보여 주다','w',8,'reveal'],['evidence','증거','w',8,'evidence'],['fallibility','틀릴 수 있음, 오류 가능성','w',8,'fallibility'],
 ['brilliant','뛰어난, 훌륭한','w',9,'brilliant'],['superb','최고의, 훌륭한','w',9,'superb'],['gourmet','미식가의, 고급 요리의','w',9,'gourmet'],['every once in a while','이따금, 가끔','p',9,'every once in a while'],['screw up','실수하다, 망치다','p',9,'screwed up']];
ENG.add('o16-6',{u:0,n:'능력자들을 대하는 우리의 태도',no:'16-6',src:'2024년 9월 고2 학평 36번 · 올림포스 16강 6번',KO,W,
 sum:'유능한 사람이 더 호감을 살 것 같지만 연구에서는 ==가장 유능한 사람이 가장 호감을 사지는 않는다==. 지나치게 유능한 사람은 ==불편하고 거리감==이 들기 때문이며, 그들이 ==실수할 수 있다는 증거==를 보이면 오히려 더 호감을 얻는다.',
 st:[['통념','①~③','유능할수록 더 좋아할 것 같음(유능함의 장점)'],['역설','④','연구: ==가장 유능한 사람이 가장 호감을 받지는 않음=='],['이유','⑤~⑦','너무 유능하면 ==불편·거리감·비교=='],['해결','⑧~⑨','==약점(실수)==을 보이면 더 호감']],
 syn:[
  ['가주어 It + the 비교급','==It== would seem obvious ==that== the more competent someone is, the more we will like that person — 가주어-진주어 that절 안에 the 비교급 ~, the 비교급 … 구문.'],
  ['조건절 + 재귀대명사 + 관계절 병렬','We stand a better chance of doing well if we ==surround ourselves with== people ==who know== what they’re doing ==and have== a lot to teach us — 주어와 목적어가 같으면 재귀대명사 ourselves, who절의 know와 have 병렬.'],
  ['주어 수 일치 / the ones','==the participants== who are considered ~ and have ~ ==tend== not to be ==the ones== who are best liked — 주어 participants(복수), the ones = the participants, tend not to V의 부정 위치.'],
  ['those who + 5형식 make','those who are too competent ==make us uncomfortable== — those who(~하는 사람들, 복수), make + 목적어 + 형용사 보어.'],
  ['사역동사 make','~ and ==make us look bad== (and ==feel== worse) by comparison — 사역동사 make + 목적어 + 원형부정사(look, feel).'],
  ['가정법 과거','If this ==were== true, we ==might like== people more if they reveal ~ — 현재 사실의 반대/가능성이 낮은 가정: If + 과거(were), 조동사 과거(might) + 원형. 마지막 문장의 if ~ screwed up도 과거형.'],
  ['삽입구 every once in a while','you might like him or her better if, ==every once in a while==, they screwed up — 이따금(삽입 부사구).']],
 tip:'**함정 주의** 가정법 과거에서는 be동사로 ==were==를 써요(If this were true). tend not to be처럼 부정은 to부정사 앞에 not을 붙여요(not to V). make us look bad의 look은 원형부정사예요.',
 pts:['핵심: ==너무 유능한 사람은 호감도가 낮다==(역설) — 불편함·거리감 때문, ==약점(fallibility)을 보이면 오히려 호감==','빈칸 단골: fallibility / uncomfortable / competent','어법: the 비교급, 가정법 과거, 사역동사 make, those who'],
 tips:{'가주어 it':'It ~ that절 — 가주어 It, 진주어 that절이에요.','the 비교급 구문':'the 비교급 ~, the 비교급 … = ~할수록 더 …하다.','재귀대명사':'주어와 목적어가 같으면 재귀대명사(ourselves)!','병렬 구조':'관계절 안의 동사가 and로 이어지면 같은 형태로 맞춰요.','사역동사 make':'make + 목적어 + 원형부정사/형용사 — 5형식 구조예요.','가정법 과거':'If + 과거(were), 조동사 과거 + 동사원형!','어법 선택':'수 일치 · 가정법 · 5형식을 차례로 확인해요.','글의 내용':'핵심: 너무 유능한 사람은 오히려 호감도가 낮다.','영작':'가정법 과거와 the 비교급 구문을 정확히!','어법 문장 고르기':'가정법 과거 어순(If ~ were, might + 원형)을 확인해요.','제목 추론':'글 전체를 한마디로 — 완벽한 사람은 매력이 덜하다!'},
 B:[
  {g:'the 비교급 구문',q:'the more competent someone is, the more we will like that person\n\n위 구절의 뜻으로 알맞은 것은?',o:['어떤 사람이 더 유능할수록 우리는 그 사람을 더 좋아하게 될 것이다','어떤 사람을 더 좋아할수록 그 사람은 덜 유능해진다','우리가 유능해질수록 사람들이 우리를 좋아한다','유능한 사람은 우리를 덜 좋아할 것이다','유능한 사람은 항상 우리를 좋아한다'],a:0,e:'the 비교급 ~, the 비교급 … = ~할수록 더 …하다.'},
  {g:'관용 표현',q:'We stand a better chance of doing well at our life tasks\n\n밑줄 친 __stand a better chance of doing__의 뜻으로 알맞은 것은?',o:['~할 가능성이 더 높다','~할 기회를 놓치다','~하는 것을 참다','~하기 위해 서 있다','~할 필요가 없다'],a:0,e:'stand a chance of -ing = ~할 가능성이 있다. better가 붙어 ‘더 높은 가능성’이에요.'},
  {g:'병렬 구조',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nwith people who ⓐ(know / knows) what they’re doing and ⓑ(have / has) a lot to teach us',o:['know – have','knows – have','know – has','knows – has','known – having'],a:0,e:'선행사 people(복수)을 받는 who절의 동사 know와 have가 and로 병렬돼요.'},
  {g:'대명사 the ones',q:'tend not to be the ones who are best liked\n\n밑줄 친 __the ones__가 가리키는 것은?',o:['the participants','the ideas','the groups','the problems','the qualities'],a:0,e:'the ones는 주어 the participants(참여자들)를 대신해요.'},
  {g:'어법 선택',q:'those who are too competent make us ⓐ(uncomfortable / uncomfortably)\n\nⓐ에 알맞은 것은?',o:['uncomfortable','uncomfortably','comfort','comfortably','uncomforting'],a:0,e:'make + 목적어(us) + 형용사 보어(uncomfortable) — 5형식이라 형용사가 와요.'},
  {g:'사역동사 make',q:'and make us look bad (and feel worse) by comparison\n\n밑줄 친 __look__은 사역동사 make의 목적보어로 쓰인 원형부정사이다.',a:true,e:'make + 목적어 + 원형부정사. look과 feel이 and로 병렬돼요.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nThey may seem distant, and make us look bad by [빈칸]. (비교)',a:['comparison'],m:'comparison',e:'by comparison = 비교해 보면.'},
  {g:'가정법 과거',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nIf this ⓐ(is / were) true, we ⓑ(might / may) like people more if they reveal some evidence of fallibility.',o:['were – might','is – might','were – may','is – may','being – might'],a:0,e:'현재 사실과 반대/가능성이 낮은 가정이라 가정법 과거: If + were, 조동사 과거 might + 동사원형.'},
  {g:'가정법 과거',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nyou might like him or her better if, every once in a while, they [빈칸] up (실수한다면, screw의 과거형)',a:['screwed'],m:'screwed',e:'if절은 과거형 screwed up이 와서 가정법 과거를 이뤄요.'},
  {g:'글의 내용',q:'윗글에서 연구 증거가 ‘역설적’이라고 한 이유로 알맞은 것은?\n\n'+S.join(' '),o:['가장 유능하고 아이디어가 좋은 사람이 가장 호감을 사는 사람은 아닌 경향이 있기 때문','유능한 사람일수록 더 인기가 많기 때문','인기 있는 사람이 가장 유능하기 때문','유능한 사람이 혼자 일하길 좋아하기 때문','문제 해결 집단에 유능한 사람이 없기 때문'],a:0,e:'유능할수록 호감을 살 것 같지만, 실제로는 가장 유능한 사람이 가장 좋아지는 사람은 아니에요.'}],
 X:[
  {k:'gr',marks:[['seem','seem'],['stand','stand'],['know','know'],['tend','tend'],['make','makes']],e:'⑤ 주어 those who are too competent(복수) → make.'},
  {k:'vo',marks:[['obvious','obvious'],['paradoxical','paradoxical'],['uncomfortable','comfortable'],['unapproachable','unapproachable'],['fallibility','fallibility']],e:'③ 지나치게 유능한 사람은 우리를 ‘불편하게(uncomfortable)’ 만든다는 흐름이에요.'},
  {k:'bl',ph:'evidence of fallibility',o:['evidence of fallibility','signs of laziness','proof of intelligence','examples of success','records of competence'],e:'너무 유능한 사람이 ‘실수할 수 있다는 증거’를 보이면 더 호감을 얻는다는 내용이에요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['지나치게 유능한 사람은 불편함을 주어 호감을 덜 얻을 수 있고, 약점을 보일 때 더 호감을 얻는다','유능한 사람일수록 항상 더 많은 호감을 얻는다','실수를 많이 하는 사람이 가장 유능하다','친구는 유능한 사람 중에서 골라야 한다','문제 해결 집단은 유능한 사람만으로 구성해야 한다'],e:'능력이 지나치면 불편함을 주고, 약점을 보이면 호감이 커진다는 것이 요지예요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['Why We Like Imperfect People','The Secret of Becoming a Genius','How to Solve Problems in Groups','Why Competence Is Overrated by Experts','The Importance of Being Popular'],e:'너무 완벽한 사람보다 약점이 있는 사람에게 더 호감을 느낀다는 내용이에요.'},
  {k:'sm',s:'Highly competent people may be (A) because they seem superhuman, so people may like them more when they show (B).',o:['less liked – mistakes','more feared – talent','less trusted – wealth','more famous – effort','easily forgotten – success'],e:'(A) 덜 호감을 얻다(less liked) (B) 실수(mistakes)를 보일 때 더 호감.'},
  {k:'ins',s:6,at:[3,4,5,6,7],e:'They는 앞 문장의 ‘지나치게 유능한 사람들(those who are too competent)’을 가리키고, 가정(If this were true)으로 이어지기 전에 와요.'},
  {k:'ord',cut:[3,2,2],lab:['B','C','A'],e:'(B) 역설(연구 증거)과 Why? → (C) 한 가지 가능성(너무 유능한 사람은 불편) → (A) 약점을 보이면 더 호감, 예시.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n이것이 사실이라면, 우리는 사람들을 더 좋아할지도 모른다.\n→ If this [빈칸] true, we might like people more.',a:['were'],m:'were',e:'가정법 과거에서는 be동사로 were를 써요.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['If this were true, we might like people more.','If this was true, we might liked people more.','If this were true, we will like people more.','If this is true, we might liked people more.','If this were true, we might to like people more.'],a:0,e:'가정법 과거: If + 과거형(were), 주절 might + 동사원형.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nVery (A) people may seem (B), so we often feel (C) around them.',o:['competent – unapproachable – uncomfortable','brilliant – unapproachable – comfortable','competent – approachable – uncomfortable','unskilled – distant – uncomfortable','competent – distant – cheerful'],a:0,e:'(A) competent(유능한) (B) unapproachable(가까이하기 어려운) (C) uncomfortable(불편한).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['obvious – clear · brilliant – excellent','distant – remote · superb – excellent','reveal – show · evidence – proof','quality – trait · cluster – group','competent – skilled · fallibility – perfection'],a:4,e:'fallibility(틀릴 수 있음)는 perfection(완벽함)과 반대 느낌이에요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 stand가 윗글(stand a better chance)과 같은 뜻으로 쓰인 것은?',o:['The team doesn’t __stand__ a chance of winning.','I can’t __stand__ the noise.','Please __stand__ up when the teacher enters.','A tall tree will __stand__ by the gate.','He took a firm __stand__ on the issue.'],a:0,e:'stand a chance = ~할 가능성이 있다. 나머지는 참다·서다·서 있다·입장이에요.'}],
 M:[
  {k:'gr',marks:[['seem','seem'],['surround','surround'],['are considered','is considered'],['make','make'],['reveal','reveal']],e:'③ 주어 the participants(복수) → are considered.'},
  {k:'bl',ph:'those who are too competent make us uncomfortable',o:['those who are too competent make us uncomfortable','those who are less competent help us learn faster','those who work alone make us feel confident','those who are popular encourage us to compete','those who are friendly make us look bad'],e:'너무 유능한 사람들이 우리를 불편하게 만든다는 것이 호감도가 낮은 이유예요.'},
  {k:'ins',s:7,at:[3,4,5,6,7],e:'이것(this)은 앞 문장(너무 유능해서 불편하고 거리감)을 가리키고, 가정법 설명 뒤에 구체적 예(For example)가 이어져요.'}]
});
})();

// ===== 올림포스 16강 8번 · 소비와 투자 =====
(()=>{
const S=ENG.T['o16-8'];
const KO=[
 '텔레비전을 사는 것은 현재의 소비이다.',
 '그것은 오늘 우리를 행복하게 하지만 내일 우리를 더 부유하게 만드는 데는 아무 도움이 되지 않는다.',
 '그렇다, 텔레비전에 쓴 돈은 텔레비전 공장의 노동자들이 계속 일자리를 유지하게 한다.',
 '그러나 같은 돈이 투자된다면, 그 돈은 예컨대 연구실의 과학자나 건설 현장의 노동자를 위한 다른 곳의 일자리를 창출하면서, 동시에 장기적으로는 우리를 더 부유하게 만들 것이다.',
 '대학을 예로 생각해 보라.',
 '학생들을 대학에 보내는 것은 교수들을 위한 일자리를 만든다.',
 '같은 돈으로 고등학교 졸업생들에게 멋진 스포츠카를 사 주는 것은 자동차 노동자들을 위한 일자리를 만들 것이다.',
 '이 두 시나리오의 결정적인 차이는 대학 교육은 젊은 사람을 평생 더 생산적으로 만들지만, 스포츠카는 그렇지 않다는 것이다.',
 '따라서 대학 등록금은 투자이고, 스포츠카를 사는 것은 소비이다.'];
const W=[
 ['current','현재의','w',1,'current'],['consumption','소비','w',1,'consumption'],
 ['do nothing to V','~하는 데 아무 도움이 되지 않는다','p',2,'does nothing to make'],['employ','고용하다','w',3,'employed'],['factory','공장','w',3,'factory'],
 ['invest','투자하다','w',4,'invested'],['say','예컨대, 이를테면','w',4,'say'],['laboratory','실험실, 연구실','w',4,'laboratory'],['construction site','건설 현장','p',4,'construction site'],['in the long run','장기적으로는','p',4,'in the long run'],
 ['college','대학','w',5,'college'],['create jobs','일자리를 만들다','p',6,'creates jobs'],['professor','교수','w',6,'professors'],
 ['fancy','멋진, 화려한','w',7,'fancy'],['graduate','졸업생','w',7,'graduates'],['auto worker','자동차 노동자','w',7,'auto workers'],
 ['crucial','결정적인, 중대한','w',8,'crucial'],['scenario','시나리오, 상황','w',8,'scenarios'],['productive','생산적인','w',8,'productive'],['for the rest of one’s life','평생, 남은 생애 동안','p',8,'for the rest of his or her life'],
 ['tuition','등록금, 수업료','w',9,'tuition'],['investment','투자(금)','w',9,'investment'],['thus','따라서','w',9,'Thus']];
ENG.add('o16-8',{u:0,n:'소비와 투자',no:'16-8',src:'2024년 6월 고2 학평 37번 · 올림포스 16강 8번',KO,W,
 sum:'같은 돈을 쓰더라도 텔레비전이나 스포츠카를 사는 것은 ==현재의 소비==이지만, 대학 교육은 사람을 평생 ==더 생산적==으로 만들어 ==장기적으로 부를 늘리는 투자==이다. 둘의 차이는 ==미래의 생산성==에 있다.',
 st:[['정의','①~②','TV 구매 = ==현재의 소비==(미래에 더 부유해지지 않음)'],['비교','③~④','같은 돈을 ==투자==하면 다른 일자리 + ==장기적 부=='],['예시','⑤~⑦','대학 vs 스포츠카 — 둘 다 일자리를 만들지만…'],['차이','⑧','대학 교육은 평생 ==더 생산적==, 스포츠카는 아님'],['결론','⑨','==등록금 = 투자==, 스포츠카 = 소비']],
 syn:[
  ['do nothing to V','It makes us happy today but ==does nothing to make== us richer tomorrow — do nothing to V = ~하는 데 아무 도움이 안 된다. make + 목적어 + 형용사(richer).'],
  ['과거분사 후치 수식','money ==spent== on a television — 돈이 ‘쓰이는’ 수동 관계 → 과거분사 후치 수식. keeps workers employed — keep + 목적어 + 과거분사.'],
  ['가정법 과거','if the same money ==were invested==, it ==would create== jobs — If + were p.p., would + 원형(현재 사실의 반대 가정).'],
  ['분사구문 while also -ing','~, ==while also making== us richer — while + 분사구문(~하면서 동시에).'],
  ['동명사 주어','==Sending== students to college ==creates== jobs / ==Using== the same money to buy ~ ==would create== — 동명사 주어는 단수 취급.'],
  ['명사절 that + 대용 does','The crucial difference ~ is ==that== a college education makes a young person more productive ~; a sports car ==does not== — does not = does not make a young person more productive (대동사).'],
  ['세미콜론 병렬','college tuition is an investment; buying a sports car is consumption — 세미콜론으로 대등한 두 절을 대비.']],
 tip:'**함정 주의** 동명사 주어(Sending ~, Using ~)는 단수 취급해서 creates / would create. a sports car does not의 does는 앞의 make ~ productive를 대신하는 대동사예요.',
 pts:['핵심: ==소비(TV·스포츠카) vs 투자(대학 교육)== — 차이는 ==미래의 생산성==','빈칸 단골: productive / investment / consumption','어법: 가정법 과거, 동명사 주어, 분사구문, 대동사 does'],
 tips:{'do nothing to V':'do nothing to V = ~하는 데 도움이 안 된다. 뒤에 동사원형!','과거분사 후치 수식':'명사 뒤 분사 — 수동이면 p.p.! money spent on ~','가정법 과거':'If + were p.p., would + 원형 — 현재 사실의 반대 가정.','동명사 주어':'동명사 주어는 단수 취급해요.','대동사':'does not = 앞 동사구를 대신하는 대동사예요.','어법 선택':'수 일치 · 분사 · 가정법을 차례로 확인해요.','글의 내용':'핵심: 소비는 현재 행복, 투자는 미래 생산성과 부.','영작':'가정법과 동명사 주어를 정확히!','어법 문장 고르기':'동명사 주어의 수 일치를 확인해요.','제목 추론':'글 전체를 한마디로 — 소비와 투자의 차이!'},
 B:[
  {g:'do nothing to V',q:'It makes us happy today but does nothing to make us richer tomorrow.\n\n밑줄 친 부분의 뜻으로 알맞은 것은?',o:['우리를 더 부유하게 만드는 데는 아무 도움이 되지 않는다','우리를 더 부유하게 만들지 않으려고 아무것도 하지 않는다','내일 우리를 부유하게 하려고 노력한다','우리가 아무것도 하지 않아도 부유해진다','우리를 행복하게 하는 일을 하지 않는다'],a:0,e:'do nothing to V = ~하는 데 아무 도움이 되지 않는다.'},
  {g:'과거분사 후치 수식',q:'money spent on a television keeps workers employed\n\n밑줄 친 __spent__와 __employed__는 모두 과거분사이다.',a:true,e:'money spent on ~(돈이 쓰이는: 수식), keeps workers employed(목적보어 과거분사)예요.'},
  {g:'가정법 과거',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nif the same money ⓐ(were / was being) invested, it ⓑ(would / will) create jobs somewhere else',o:['were – would','was being – would','were – will','was being – will','is – would'],a:0,e:'현재 사실과 반대되는 가정법 과거: If + were p.p., would + 원형.'},
  {g:'분사구문',q:'it would create jobs somewhere else, while also making us richer in the long run\n\n밑줄 친 __making__의 설명으로 알맞은 것은?',o:['while 뒤에 주어와 be동사가 생략된 분사구문','동명사 주어','과거분사','명사를 꾸미는 현재분사','진행형 동사'],a:0,e:'while it also makes ~에서 주어·동사(it, makes → making)를 줄인 분사구문이에요.'},
  {g:'동명사 주어',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nⓐ(Send / Sending) students to college ⓑ(creates / create) jobs for professors.',o:['Sending – creates','Send – creates','Sending – create','Send – create','To sending – creates'],a:0,e:'동명사 Sending이 주어이고 단수 취급 → creates.'},
  {g:'동명사 주어',q:'Using the same money to buy fancy sports cars would create jobs for auto workers.\n\n문장의 주어는 Using the same money to buy fancy sports cars이다.',a:true,e:'동명사구 전체가 주어이고, 단수 취급해서 would create(조동사 뒤라 수 일치 없음).'},
  {g:'대동사',q:'a college education makes a young person more productive ...; a sports car does not\n\n밑줄 친 __does__는 무엇을 대신하는가?',o:['makes a young person more productive','is a college education','creates jobs','buys a sports car','keeps workers employed'],a:0,e:'does not = does not make a young person more productive. 앞 동사구를 대신하는 대동사예요.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n[빈칸], college tuition is an investment; buying a sports car is consumption. (따라서)',a:['thus'],m:'Thus',e:'Thus = 따라서. 앞의 비교를 종합하는 결론 연결어예요.'},
  {g:'글의 내용',q:'윗글에서 대학 교육과 스포츠카의 결정적인 차이로 언급된 것은?\n\n'+S.join(' '),o:['대학 교육은 젊은 사람을 평생 더 생산적으로 만들지만 스포츠카는 그렇지 않다','스포츠카가 대학 교육보다 일자리를 더 많이 만든다','대학 교육은 일자리를 만들지 않는다','스포츠카는 사람을 더 부유하게 만든다','대학 교육은 현재의 소비이다'],a:0,e:'⑧: 대학 교육은 평생 사람을 더 생산적으로 만들지만 스포츠카는 그렇지 않아요.'}],
 X:[
  {k:'gr',marks:[['employed','employed'],['invested','invested'],['creates','create'],['buy','buy'],['makes','makes']],e:'③ 동명사 주어 Sending students to college는 단수 취급 → creates.'},
  {k:'vo',marks:[['consumption','consumption'],['richer','richer'],['crucial','crucial'],['productive','unproductive'],['investment','investment']],e:'④ 대학 교육은 젊은 사람을 평생 ‘더 생산적으로(productive)’ 만든다는 흐름이에요.'},
  {k:'bl',ph:'a college education makes a young person more productive for the rest of his or her life',st:'윗글의 빈칸에 들어갈 말로 가장 적절한 것은?',o:['a college education makes a young person more productive for the rest of his or her life','a sports car creates more jobs than a college education','a college education is a form of current consumption','a sports car makes a young person richer in the long run','buying a television is an investment'],e:'대학 교육이 투자인 이유는 평생 생산성을 높이기 때문이에요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['투자는 미래의 생산성과 부를 높이지만 소비는 현재의 만족에 그친다','돈은 쓸수록 더 많은 일자리를 만든다','스포츠카는 최고의 투자 대상이다','대학 교육은 일자리를 줄인다','텔레비전 공장은 문을 닫아야 한다'],e:'소비와 투자의 차이는 미래의 생산성에 있다는 것이 요지예요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['Consumption vs. Investment: What Really Makes Us Richer','Why Televisions Are Getting Cheaper','How to Choose a College Major','The Secret Life of Sports Car Workers','The Joy of Spending Money'],e:'소비와 투자의 차이를 설명하는 글이에요.'},
  {k:'sm',s:'Spending on a television is (A), while paying for college is an (B) that raises future productivity.',o:['consumption – investment','investment – consumption','saving – expense','income – cost','profit – tax'],e:'(A) 소비(consumption) (B) 투자(investment).'},
  {k:'ins',s:3,at:[1,2,3,4,5],e:'But if the same money were invested ~는 앞 문장(TV 구매의 한계: Yes, money spent ~)에 대한 반론으로, 같은 돈을 투자했을 때를 말해요.'},
  {k:'ord',cut:[4,2,2],lab:['B','C','A'],e:'(B) 대학 예시 → (C) 같은 돈으로 스포츠카 → (A) 결정적 차이와 결론.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n학생들을 대학에 보내는 것은 교수들을 위한 일자리를 만든다.\n→ [빈칸] students to college creates jobs for professors.',a:['sending'],m:'Sending',e:'동명사 주어 Sending.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['Buying a sports car is consumption.','Buy a sports car is consumption.','To buying a sports car is consumption.','Buying a sports car are consumption.','Bought a sports car is consumption.'],a:0,e:'동명사 주어는 단수 취급 → is.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nMoney spent on a television is (A), but money spent on college tuition is an (B) that makes a person more (C).',o:['consumption – investment – productive','investment – consumption – productive','consumption – investment – fancy','consumption – scenario – crucial','investment – investment – current'],a:0,e:'(A) consumption(소비) (B) investment(투자) (C) productive(생산적인).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['crucial – essential · fancy – luxurious','invest – put money in · employ – hire','scenario – situation · thus – therefore','graduate – student · tuition – school fee','laboratory – lab · factory – plant'],a:3,e:'graduate(졸업생)와 student(재학생)는 서로 다른 말이에요. 나머지는 비슷한 말이에요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 current가 윗글(현재의)과 같은 뜻으로 쓰인 것은?',o:['What is your __current__ address?','A strong __current__ pulled the boat away.','The wire carries an electric __current__.','He swam against the __current__.','She cannot step into the same __current__.'],a:0,e:'윗글의 current는 ‘현재의’(형용사). 나머지 current는 ‘물살·전류’(명사)예요.'}],
 M:[
  {k:'gr',marks:[['is','is'],['does','does'],['spent','spent'],['were invested','was invested'],['would create','would create']],e:'④ 현재 사실과 반대되는 가정법 과거이므로 were invested.'},
  {k:'bl',ph:'buying a sports car is consumption',o:['buying a sports car is consumption','buying a sports car is an investment','sending students to college is consumption','buying a television is an investment','tuition is a form of current consumption'],e:'결론: 대학 등록금은 투자이고, 스포츠카를 사는 것은 소비예요.'},
  {k:'ins',s:7,at:[3,4,5,6,7],e:'결정적 차이(The crucial difference ~)는 두 시나리오(대학, 스포츠카)를 소개한 뒤, 결론(Thus) 앞에 와요.'}]
});
})();

// ===== 올림포스 16강 12번 · 의도하지 않은 결과의 법칙 =====
(()=>{
const S=ENG.T['o16-12'];
const KO=[
 '정책을 평가할 때, 사람들은 그 정책이 어떤 특정 문제를 어떻게 해결할지에만 집중하고, 그 정책이 가질 수 있는 다른 영향들은 무시하거나 가볍게 여기는 경향이 있다.',
 '경제학자들은 이러한 상황을 흔히 ‘의도하지 않은 결과의 법칙’이라고 부른다.',
 '예를 들어, 국내 철강 노동자들의 일자리를 보호하기 위해 수입 철강에 관세를 부과한다고 가정해 보자.',
 '충분히 높은 관세를 부과하면, 그들의 일자리는 외국 철강 회사들과의 경쟁으로부터 실제로 보호될 것이다.',
 '그러나 의도하지 않은 결과는 일부 자동차 노동자들의 일자리가 외국과의 경쟁 때문에 사라진다는 것이다.',
 '왜 그럴까?',
 '철강 노동자를 보호하는 관세는 국내 자동차 제조업체가 자동차를 만드는 데 필요한 철강의 가격을 올린다.',
 '그 결과 국내 자동차 제조업체들은 자동차 가격을 올릴 수밖에 없고, 이는 그 차들을 외국 차보다 상대적으로 덜 매력적으로 만든다.',
 '가격 인상은 국내 자동차 판매를 줄이는 경향이 있고, 그래서 일부 국내 자동차 노동자들이 일자리를 잃는다.'];
const W=[
 ['evaluate','평가하다','w',1,'evaluating'],['policy','정책','w',1,'policy'],['tend to V','~하는 경향이 있다','p',1,'tend to'],['concentrate on','~에 집중하다','p',1,'concentrate on'],['fix','해결하다, 고치다','w',1,'fix'],['particular','특정한','w',1,'particular'],['ignore','무시하다','w',1,'ignoring'],['downplay','가볍게 여기다, 축소하다','w',1,'downplaying'],
 ['refer to A as B','A를 B라고 부르다','p',2,'refer to'],['situation','상황','w',2,'situation'],
 ['impose','부과하다','w',3,'impose'],['tariff','관세','w',3,'tariff'],['imported','수입된','w',3,'imported'],['in order to V','~하기 위해','p',3,'in order to'],['domestic','국내의','w',3,'domestic'],['protect','보호하다','w',3,'protect'],
 ['indeed','실제로, 정말로','w',4,'indeed'],['competition','경쟁','w',4,'competition'],['foreign','외국의','w',4,'foreign'],
 ['unintended','의도하지 않은','w',5,'unintended'],['consequence','결과','w',5,'consequence'],['be lost to','~ 때문에 사라지다(잃다)','p',5,'be lost to'],
 ['raise','올리다','w',7,'raises'],
 ['as a result','그 결과','p',8,'As a result'],['manufacturer','제조업체','w',8,'manufacturers'],['relatively','상대적으로','w',8,'relatively'],['attractive','매력적인','w',8,'attractive'],
 ['reduce','줄이다','w',9,'reduce'],['sales','판매(량)','w',9,'sales']];
ENG.add('o16-12',{u:0,n:'의도하지 않은 결과의 법칙',no:'16-12',src:'2024년 3월 고2 학평 · 올림포스 16강 12번',KO,W,
 sum:'정책을 평가할 때 사람들은 해결하려는 문제에만 집중하고 다른 영향은 무시하는데, 이것이 ==의도하지 않은 결과의 법칙==이다. 철강 관세는 철강 노동자는 보호하지만 ==철강 가격 상승 → 자동차 가격 상승 → 판매 감소==로 자동차 노동자의 일자리를 잃게 한다.',
 st:[['주제','①~②','정책 평가 시 ==다른 영향을 무시== → 의도하지 않은 결과의 법칙'],['예시','③~④','철강 관세로 ==철강 노동자 보호=='],['반전','⑤~⑥','그러나 ==자동차 노동자 일자리 손실== (Why?)'],['이유','⑦~⑨','철강 가격↑ → 자동차 가격↑ → ==판매↓ → 해고==']],
 syn:[
  ['When + 분사구문 / while + 분사','==When evaluating== a policy ~, ==while ignoring== or downplaying other effects — 접속사를 남긴 분사구문(주어 people 생략).'],
  ['관계부사 how / 관계절 생략','concentrate on ==how== the policy will fix ~ other effects ==(that)== it may have — how절, 목적격 관계대명사 생략.'],
  ['refer to A as B','Economists often ==refer to== this situation ==as== The Law of Unintended Consequences — A를 B라고 부르다.'],
  ['suppose that / in order to V','==suppose that== you impose a tariff ~ ==in order to protect== the jobs — 가정(~라고 가정해 보자), 목적의 to부정사.'],
  ['수동태 be + p.p. + from','their jobs will indeed ==be protected from== competition — be protected from(~로부터 보호되다).'],
  ['주어와 수 일치 + 관계절','The tariff ==that protects== steelworkers ==raises== the price of the steel ==that== domestic automobile makers need ~ — 주어 The tariff(단수) → raises, 두 개의 관계절.'],
  ['분사구문(결과)','domestic automobile manufacturers have to raise the prices ~, ==making== them relatively less attractive — 앞 내용의 결과를 나타내는 현재분사구문.'],
  ['동명사 주어','==Raising== prices ==tends== to reduce domestic car sales — 동명사 주어는 단수 취급.']],
 tip:'**함정 주의** raises의 주어는 가까운 steelworkers가 아니라 ==The tariff(단수)==. making them less attractive의 making은 and makes가 아니라 ==결과의 분사구문==.',
 pts:['핵심: ==정책의 의도하지 않은 부작용== (의도하지 않은 결과의 법칙)','예시 흐름: 철강 관세 → 철강 가격↑ → 자동차 가격↑ → 판매↓ → 일자리↓','빈칸 단골: unintended consequence / raises the price','어법: 분사구문, 수 일치, 관계절, 동명사 주어'],
 tips:{'분사구문':'접속사를 남긴 분사구문 When evaluating ~ — 주어는 주절과 같아 생략돼요.','관계사 how':'how + 완전한 절 — how the policy will fix ~','수 일치':'주어의 핵심 명사(The tariff)와 동사 수를 맞춰요.','목적의 to부정사':'in order to V = ~하기 위해.','refer to A as B':'A를 B라고 부르다 — as를 빠뜨리지 않기!','동명사 주어':'동명사 주어는 단수 취급해요.','어법 선택':'수 일치 · 분사 · 관계사를 차례로 확인해요.','글의 내용':'핵심: 정책이 예상 못한 부작용을 낳는다.','영작':'refer to A as B와 수 일치를 정확히!','어법 문장 고르기':'분사구문과 수 일치를 확인해요.','제목 추론':'글 전체를 한마디로 — 정책의 숨은 부작용!'},
 B:[
  {g:'분사구문',q:'When evaluating a policy, people tend to concentrate on ...\n\n밑줄 친 __When evaluating__을 부사절로 바꾼 것으로 알맞은 것은?',o:['When people evaluate a policy','When people evaluated a policy','When a policy evaluates people','When people are evaluated','When people will evaluate a policy'],a:0,e:'주절의 주어 people이 정책을 ‘평가하는’ 능동 관계이고 현재 시제예요.'},
  {g:'refer to A as B',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nEconomists often refer to this situation [빈칸] The Law of Unintended Consequences. (A를 B라고 부르다)',a:['as'],m:'as',e:'refer to A as B = A를 B라고 부르다.'},
  {g:'suppose / 목적',q:'suppose that you impose a tariff on imported steel in order to protect the jobs\n\n밑줄 친 __in order to protect__의 뜻으로 알맞은 것은?',o:['보호하기 위해','보호한 결과','보호하는 것을 막기 위해','보호해야 하는 이유','보호되는 동안'],a:0,e:'in order to V = ~하기 위해(목적).'},
  {g:'수동태',q:'their jobs will indeed be protected from competition\n\n밑줄 친 부분은 ‘~로부터 보호될 것이다’라는 수동태이다.',a:true,e:'will be protected from = ~로부터 보호될 것이다.'},
  {g:'수 일치',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nThe tariff that protects steelworkers ⓐ(raise / raises) the price of the steel that domestic automobile makers ⓑ(need / needs).',o:['raises – need','raise – need','raises – needs','raise – needs','raising – need'],a:0,e:'ⓐ 주어 The tariff(단수) → raises. ⓑ 선행사 makers(복수) → need.'},
  {g:'관계사',q:'the steel that domestic automobile makers need to build their cars\n\n밑줄 친 __that__은 목적격 관계대명사로, 생략할 수 있다.',a:true,e:'that절의 need 뒤에 목적어가 없고 steel이 선행사이므로 목적격 관계대명사예요.'},
  {g:'분사구문',q:'..., making them relatively less attractive than foreign cars\n\n밑줄 친 __making__의 의미상 알맞은 것은?',o:['그 결과 ~하게 만든다(결과)','~하기 때문에(이유)','~하는 동안(시간)','만약 ~한다면(조건)','~에도 불구하고(양보)'],a:0,e:'앞 내용의 결과를 덧붙이는 현재분사구문이에요.'},
  {g:'동명사 주어',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nⓐ(Raise / Raising) prices ⓑ(tend / tends) to reduce domestic car sales.',o:['Raising – tends','Raise – tends','Raising – tend','Raise – tend','To raising – tends'],a:0,e:'동명사 주어(Raising prices)는 단수 취급 → tends.'},
  {g:'글의 내용',q:'윗글에서 철강 관세의 의도하지 않은 결과로 언급된 것은?\n\n'+S.join(' '),o:['자동차 가격이 올라 판매가 줄고 일부 자동차 노동자가 일자리를 잃는다','철강 노동자의 일자리가 사라진다','외국 철강 회사가 더 번창한다','자동차 가격이 내려간다','국내 철강 가격이 내려간다'],a:0,e:'⑦~⑨: 철강 가격↑ → 자동차 가격↑ → 판매↓ → 일부 자동차 노동자 해고.'}],
 X:[
  {k:'gr',marks:[['evaluating','evaluating'],['refer','refer'],['protect','protect'],['raises','raise'],['making','making']],e:'④ 주어 The tariff(단수) → raises.'},
  {k:'vo',marks:[['concentrate','concentrate'],['downplaying','downplaying'],['protected','exposed'],['unintended','unintended'],['attractive','attractive']],e:'③ 충분히 높은 관세로 철강 노동자의 일자리는 경쟁으로부터 ‘보호된다(protected)’. exposed는 흐름과 반대예요.'},
  {k:'bl',ph:'raises the price of the steel that domestic automobile makers need to build their cars',o:['raises the price of the steel that domestic automobile makers need to build their cars','lowers the cost of foreign cars sold at home','increases the wages of every domestic worker','makes foreign steel companies go out of business','encourages automobile makers to hire more workers'],e:'관세가 철강 가격을 올려 자동차 제조업체의 비용이 늘어나는 것이 반전의 이유예요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['정책은 의도한 효과뿐 아니라 예상하지 못한 부작용도 낳을 수 있다','관세는 항상 국내 산업을 보호한다','자동차 산업은 철강 산업보다 중요하다','외국과의 경쟁은 언제나 바람직하다','경제학자들은 정책 평가를 꺼린다'],e:'정책의 의도하지 않은 결과를 함께 살펴야 한다는 것이 요지예요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['Unintended Consequences of Well-Meant Policies','The Benefits of Free Trade','How to Build a Better Car','Why Steel Prices Always Fall','The Rise of Foreign Competition'],e:'좋은 뜻의 정책이 낳은 의도하지 않은 결과를 다룬 글이에요.'},
  {k:'sm',s:'A policy aimed at solving one problem may cause (A) effects elsewhere, as a steel tariff can (B) jobs in the car industry.',o:['unexpected – threaten','guaranteed – create','minor – protect','temporary – double','positive – ignore'],e:'(A) 예상치 못한(unexpected) (B) 자동차 산업의 일자리를 위협하다(threaten).'},
  {k:'ins',s:7,at:[3,4,5,6,7],e:'As a result는 앞 문장(철강 가격 상승)의 결과로 자동차 제조업체가 가격을 올린다는 내용을 이어요.'},
  {k:'ord',cut:[3,2,2],lab:['B','C','A'],e:'(B) 관세로 철강 노동자 보호, 하지만 자동차 노동자 일자리 손실 → (C) Why? 철강 가격 상승 → (A) 자동차 가격 인상과 판매 감소.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n그 관세는 철강의 가격을 올린다.\n→ The tariff [빈칸] the price of steel. (raise)',a:['raises'],m:'raises',e:'주어 The tariff(단수) → raises.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['Raising prices tends to reduce domestic car sales.','Raise prices tends to reduce domestic car sales.','Raising prices tend to reduce domestic car sales.','To raising prices tends to reduce domestic car sales.','Raised prices tends reducing domestic car sales.'],a:0,e:'동명사 주어는 단수 → tends + to V.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nA (A) on imported steel can (B) domestic steelworkers, but it raises costs for carmakers and (C) car sales.',o:['tariff – protect – reduces','policy – ignore – raises','tariff – impose – increases','sales – protect – reduces','tariff – evaluate – increases'],a:0,e:'(A) tariff(관세) (B) protect(보호하다) (C) reduces(줄이다).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['ignore – overlook · downplay – minimize','foreign – overseas · domestic – national','impose – apply · evaluate – assess','reduce – cut · particular – specific','relatively – absolutely · indeed – really'],a:4,e:'relatively(상대적으로)와 absolutely(절대적으로)는 비슷하지 않아요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 fix가 윗글(해결하다)과 같은 뜻으로 쓰인 것은?',o:['The plan will __fix__ the problem.','He is trying to __fix__ his bike.','They __fix__ the date of the meeting.','She is in a bad __fix__.','Please __fix__ the picture on the wall.'],a:0,e:'윗글의 fix는 문제를 ‘해결하다’. 나머지는 수리하다·정하다·곤경·고정하다예요.'}],
 M:[
  {k:'gr',marks:[['evaluating','evaluating'],['tend','tend'],['ignoring','ignoring'],['protects','protect'],['need','need']],e:'④ 관계대명사 The tariff that protects 주어(단수) → protects.'},
  {k:'bl',ph:'concentrate on how the policy will fix some particular problem',o:['concentrate on how the policy will fix some particular problem','forget about the policy entirely','compare the policy with older ones','complain about its high cost','explain why the problem exists'],e:'사람들은 정책이 해결할 특정 문제에만 집중한다는 내용이에요.'},
  {k:'ins',s:4,at:[1,2,3,4,5],e:'But an unintended consequence is ~의 But은 앞 문장(관세로 철강 일자리 보호)과 대조되는 의도하지 않은 결과를 소개해요.'}]
});
})();

// ===== 올림포스 17강 9번 · 내향적인 리더 =====
(()=>{
const S=ENG.T['o17-9'];
const KO=[
 '내향적인 리더들은 외향적인 사람이 더 효과적인 리더라는 강한 문화적 통념을 정말로 극복해야 한다.',
 '인구는 내향적인 사람과 외향적인 사람으로 거의 같은 비율로 나뉘지만, 관리자와 경영진의 96퍼센트 이상이 외향적이다.',
 '2006년에 이루어진 한 연구에서, 고위 기업 임원의 65퍼센트가 내향성을 리더십의 장벽으로 보았다.',
 '그러나 우리는 이 고정관념을 재검토해야 하는데, 그것이 항상 들어맞는 것은 아니기 때문이다.',
 '리젠트 대학은 다른 사람들에게 도움이 되고 그들이 성장하도록 힘을 북돋우려는 욕구가, 외향적인 사람보다 내향적인 사람에게 더 흔한데, 리더가 되고 리더십을 유지하는 데 핵심 요인임을 발견했다.',
 '고대 철학 문헌까지 거슬러 올라가는 이른바 서번트 리더십은 회사의 목표가 직원이나 고객이 자신의 목표를 달성하도록 도울 때 가장 잘 달성된다는 신념을 고수한다.',
 '그런 리더들은 관심을 구하지 않고 오히려 다른 사람들의 성공과 성취에 빛을 비추고 싶어 한다. 서번트 리더십은 겸손을 요구하지만, 그 겸손은 결국 보답을 받는다.'];
const W=[
 ['introverted','내향적인','w',1,'Introverted'],['overcome','극복하다','w',1,'overcome'],['presumption','통념, 추정','w',1,'presumption'],['extrovert','외향적인 사람','w',1,'extroverts'],['effective','효과적인','w',1,'effective'],
 ['split into','~로 나뉘다','p',2,'splits into'],['manager','관리자','w',2,'managers'],['executive','경영진, 임원','w',2,'executives'],
 ['senior','고위의, 상급의','w',3,'senior'],['corporate','기업의','w',3,'corporate'],['view A as B','A를 B로 보다','p',3,'viewed'],['barrier','장벽','w',3,'barrier'],
 ['reexamine','재검토하다','w',4,'reexamine'],['stereotype','고정관념','w',4,'stereotype'],['hold true','들어맞다, 사실이다','p',4,'hold true'],
 ['desire','욕구, 바람','w',5,'desire'],['be of service to','~에게 도움이 되다','p',5,'be of service to'],['empower','힘을 북돋우다, 권한을 주다','w',5,'empower'],['key factor','핵심 요인','p',5,'key factor'],['retain','유지하다','w',5,'retaining'],
 ['so-called','이른바','w',6,'So-called'],['date back to','~까지 거슬러 올라가다','p',6,'dating back to'],['ancient','고대의','w',6,'ancient'],['adhere to','~을 고수하다','p',6,'adheres to'],['achieve','달성하다','w',6,'achieved'],
 ['seek attention','관심을 구하다','p',7,'seek attention'],['shine a light on','~에 빛을 비추다, 주목하게 하다','p',7,'shine a light on'],['humility','겸손','w',7,'humility'],['ultimately','결국','w',7,'ultimately'],['pay off','성과를 내다, 보답받다','p',7,'pays off']];
ENG.add('o17-9',{u:0,n:'내향적인 리더',no:'17-9',src:'2023년 3월 고2 학평 · 올림포스 17강 9번',KO,W,
 sum:'외향적인 사람이 더 좋은 리더라는 ==통념==이 강하지만 항상 맞지는 않다. 남에게 도움이 되고 성장시키려는 욕구는 ==내향적인 사람에게 더 흔==하며 이는 리더십의 핵심 요인이다. ==서번트 리더십==은 겸손을 요구하고 결국 성과를 낸다.',
 st:[['통념','①~③','외향성이 리더십에 유리하다는 ==고정관념== (관리자의 96%가 외향적)'],['반박','④~⑤','==재검토 필요==: 도움·성장 욕구는 내향적인 사람에게 더 흔함'],['서번트 리더십','⑥~⑦','==남을 돕고 빛내는 리더십==, 겸손이 결국 성과']],
 syn:[
  ['do 강조','Introverted leaders ==do have to== overcome ~ — 조동사 do로 동사를 강조(정말로 ~해야 한다).'],
  ['Although 양보절 + 비교','==Although== the population splits into almost equal parts ~, more than 96 percent of managers and executives ==are== extroverted — 양보절 + 주절.'],
  ['과거분사 후치 수식','a study ==done== in 2006 — 연구가 ‘수행된’ 수동 관계 → 과거분사 후치 수식.'],
  ['view A as B','65 percent of senior corporate executives ==viewed== introversion ==as== a barrier — A를 B로 보다.'],
  ['동격 / 계속적 관계절','a desire to be of service to others ~, ==which== is more common among introverts than extroverts, ==is== a key factor — 주어 a desire 뒤의 which절 삽입, 본동사 is.'],
  ['분사구문 / adhere to + 명사','So-called servant leadership, ==dating back to== ancient philosophical literature, ==adheres to== the belief ==that== ~ — 분사구문 삽입, 동격 that절.'],
  ['not A but rather B','Such leaders ==do not seek attention but rather want== to shine a light on others’ wins — A하지 않고 오히려 B한다.']],
 tip:'**함정 주의** 5번 문장에서 which절이 삽입되어 주어(a desire)와 동사(is)가 멀리 떨어져요 → ==수 일치는 a desire(단수)==. adhere to의 to는 전치사라 뒤에 명사(the belief)가 와요.',
 pts:['핵심: ==외향적이어야 좋은 리더라는 통념은 틀릴 수 있다==, 내향적인 사람의 ==서번트 리더십==','근거: 도움·성장 욕구가 리더십의 핵심, 겸손이 결국 성과','빈칸 단골: stereotype / servant leadership / humility','어법: 삽입절 수 일치, 분사구문, view A as B, 동격 that'],
 tips:{'강조 do':'do + 동사원형 — 동사 강조(정말로 ~한다).','양보절':'Although + 주어 + 동사, 주절 — 접속사를 중복하지 않기!','과거분사 후치 수식':'명사 뒤 분사 — 수동이면 p.p.! a study done in 2006','view A as B':'A를 B로 보다 — as를 빠뜨리지 않기!','삽입절 수 일치':'주어와 동사 사이에 which절이 끼어도 주어(a desire)에 수를 맞춰요.','동격의 that':'the belief that ~ — 뒤가 완전한 절.','어법 선택':'수 일치 · 분사 · 관계사를 차례로 확인해요.','글의 내용':'핵심: 내향적인 사람도 훌륭한 리더가 될 수 있다.','영작':'view A as B와 수 일치를 정확히!','어법 문장 고르기':'삽입절이 있는 문장의 수 일치를 확인해요.','제목 추론':'글 전체를 한마디로 — 조용한 리더십의 힘!'},
 B:[
  {g:'do 강조',q:'Introverted leaders do have to overcome the strong cultural presumption ...\n\n밑줄 친 __do__의 쓰임으로 알맞은 것은?',o:['동사를 강조하는 조동사','일반동사(하다)','대동사','의문문을 만드는 조동사','부정문을 만드는 조동사'],a:0,e:'do + 동사원형은 ‘정말로 ~하다’라고 동사를 강조해요.'},
  {g:'양보절',q:'Although the population splits into almost equal parts, more than 96 percent of managers are extroverted.\n\n밑줄 친 __Although__절은 ‘~이지만’이라는 양보를 나타낸다.',a:true,e:'Although = ~이지만(양보). 주절의 내용과 대비돼요.'},
  {g:'과거분사 후치 수식',q:'In a study done in 2006, 65 percent of ...\n\n밑줄 친 __done__의 설명으로 알맞은 것은?',o:['a study를 꾸미는 과거분사(수행된)','동사의 과거형','현재완료의 일부','명사','to부정사의 일부'],a:0,e:'study가 ‘수행된’ 수동 관계라 과거분사가 후치 수식해요.'},
  {g:'view A as B',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n65 percent of executives viewed introversion [빈칸] a barrier to leadership.',a:['as'],m:'as',e:'view A as B = A를 B로 보다.'},
  {g:'삽입절 수 일치',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nA desire to be of service to others, which ⓐ(is / are) more common among introverts, ⓑ(is / are) a key factor in becoming a leader.',o:['is – is','are – are','is – are','are – is','being – is'],a:0,e:'which의 선행사 A desire(단수), 본동사의 주어도 A desire(단수) → is, is.'},
  {g:'분사구문',q:'So-called servant leadership, dating back to ancient philosophical literature, adheres to the belief ...\n\n밑줄 친 __dating back to__는 servant leadership을 꾸미는 분사구문(삽입)이다.',a:true,e:'which dates back to ~를 줄인 분사구문이 삽입된 형태예요.'},
  {g:'동격의 that',q:'the belief that a company’s goals are best achieved by helping workers\n\n밑줄 친 __that__의 쓰임으로 알맞은 것은?',o:['the belief와 동격인 접속사','주격 관계대명사','목적격 관계대명사','지시대명사','지시형용사'],a:0,e:'뒤가 완전한 절이므로 the belief와 동격인 접속사 that이에요.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nSuch leaders do not seek attention but [빈칸] want to shine a light on others’ wins. (오히려)',a:['rather'],m:'rather',e:'not A but rather B = A가 아니라 오히려 B.'},
  {g:'글의 내용',q:'윗글에서 서번트 리더십에 대한 설명으로 알맞은 것은?\n\n'+S.join(' '),o:['다른 사람들을 돕고 그들의 성취에 주목하게 하는 데 초점을 둔다','관심과 칭찬을 받는 것을 가장 중요하게 여긴다','외향적인 사람만 실천할 수 있다','겸손은 성과와 무관하다','최근에 새로 생긴 개념이다'],a:0,e:'⑥⑦: 직원·고객의 목표 달성을 돕고, 다른 사람들의 성취에 주목하게 해요.'}],
 X:[
  {k:'gr',marks:[['overcome','overcome'],['splits','splits'],['viewed','viewed'],['found','found'],['achieved','achieve']],e:'⑤ goals가 ‘달성되는’ 수동 관계이므로 are best achieved.'},
  {k:'vo',marks:[['effective','effective'],['barrier','barrier'],['reexamine','reexamine'],['key','trivial'],['humility','humility']],e:'④ 도움·성장 욕구는 리더가 되고 유지하는 데 ‘핵심(key)’ 요인이에요. trivial(사소한)은 흐름과 반대예요.'},
  {k:'bl',ph:'a desire to be of service to others and to empower them to grow',o:['a desire to be of service to others and to empower them to grow','a strong wish to be famous and admired','a talent for giving clear orders','an ability to speak in public confidently','a habit of working alone'],e:'내향적인 리더에게 더 흔한 리더십의 핵심 요인이에요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['내향적인 사람도 서번트 리더십 등으로 훌륭한 리더가 될 수 있다','외향적인 사람만이 훌륭한 리더가 될 수 있다','리더는 겸손하지 않아도 된다','대부분의 경영진은 내향적이다','리더십은 타고나는 것이다'],e:'외향성이 리더십에 필수라는 통념을 반박하는 글이에요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['Quiet Leaders: Breaking the Extrovert Stereotype','Why Extroverts Make Better Managers','How to Win Every Argument','The History of Ancient Philosophy','Ten Rules for Successful Meetings'],e:'내향적인 사람도 리더가 될 수 있다는 내용이에요.'},
  {k:'sm',s:'Although leaders are often assumed to be (A), introverts can lead well through (B) leadership focused on helping others.',o:['extroverted – servant','shy – competitive','famous – strict','cautious – absolute','young – digital'],e:'(A) 외향적인(extroverted) (B) 서번트(servant) 리더십.'},
  {k:'ins',s:3,at:[1,2,3,4,5],e:'We must reexamine this stereotype ~는 앞에서 소개한 통념(외향적 리더 선호)을 가리키는 this stereotype이 필요하므로 ③ 뒤에 와요.'},
  {k:'ord',cut:[2,2,2],lab:['C','A','B'],e:'(C) 연구와 고정관념 재검토 → (A) Regent 대학 연구 결과 → (B) 서번트 리더십.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n그 연구는 2006년에 수행되었다.\n→ In a study [빈칸] in 2006, 65 percent of executives viewed introversion as a barrier. (do의 과거분사)',a:['done'],m:'done',e:'study를 후치 수식하는 과거분사 done.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['Servant leadership requires humility, but that humility ultimately pays off.','Servant leadership require humility, but that humility ultimately pay off.','Servant leadership requires humility, but that humility ultimately paying off.','Servant leadership requiring humility, but that humility ultimately pays off.','Servant leadership requires humble, but that humility ultimately pays off.'],a:0,e:'단수 주어 → requires, pays. humility는 명사.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nThe (A) that extroverts make better leaders is a (B) we must (C).',o:['presumption – stereotype – reexamine','desire – barrier – retain','presumption – stereotype – achieve','humility – barrier – empower','stereotype – presumption – overcome'],a:0,e:'(A) presumption(통념) (B) stereotype(고정관념) (C) reexamine(재검토하다).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['retain – keep · achieve – accomplish','ancient – old · ultimately – finally','barrier – obstacle · senior – higher-ranking','empower – enable · desire – wish','humility – modesty · introverted – outgoing'],a:4,e:'introverted(내향적인)는 outgoing(외향적인)과 반대예요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 hold가 윗글(hold true: 들어맞다)과 같은 뜻으로 쓰인 것은?',o:['The rule doesn’t __hold__ in this case.','Please __hold__ the door for me.','They will __hold__ a meeting tomorrow.','She can __hold__ her breath for a minute.','He tried to __hold__ the baby.'],a:0,e:'hold true = 들어맞다. 나머지는 잡다·열다·참다·안다예요.'}],
 M:[
  {k:'gr',marks:[['do','do'],['splits','splits'],['viewed','viewed'],['reexamine','reexamine'],['is','are']],e:'⑤ which의 선행사 a desire(단수) → is more common.'},
  {k:'bl',ph:'shine a light on others’ wins and achievements',o:['shine a light on others’ wins and achievements','take credit for their wins and achievements','hide their own wins from others','compete with others for attention','ignore what others have achieved'],e:'서번트 리더는 다른 사람들의 성공과 성취를 빛나게 하고 싶어 해요.'},
  {k:'ins',s:5,at:[1,2,3,4,5],e:'So-called servant leadership은 앞에서 말한 ‘남을 돕고 키우려는 욕구’를 이어받아 서번트 리더십을 정의하는 문장이에요.'}]
});
})();

// ===== 올림포스 17강 11번 · 실험 방법의 본질 =====
(()=>{
const S=ENG.T['o17-11'];
const KO=[
 '실험 방법의 근본적인 성격은 조작과 통제이다.',
 '과학자들은 관심 있는 변수를 조작하고 차이가 있는지 살펴본다.',
 '동시에, 그들은 다른 모든 변수의 잠재적 영향을 통제하려고 시도한다.',
 '사건의 근본 원인을 밝혀내는 데 있어 통제된 실험의 중요성은 아무리 강조해도 지나치지 않다.',
 '통제되지 않은 현실 세계에서는 변수들이 흔히 서로 상관되어 있다.',
 '예를 들어, 비타민 보충제를 먹는 사람들은 먹지 않는 사람들과 식습관과 운동 습관이 다를 수 있다.',
 '그 결과, 비타민이 건강에 미치는 영향을 연구하려면 현실 세계를 단순히 관찰할 수만은 없는데, 이 요소들(비타민, 식단, 운동) 중 어느 것이든 건강에 영향을 미칠 수 있기 때문이다.',
 '오히려 우리는 현실 세계에서 실제로는 일어나지 않는 상황을 만들어야 한다.',
 '바로 그것이 과학 실험이 하는 일이다.',
 '그것들은 한 번에 하나의 특정 변수만 조작하고 나머지는 모두 일정하게 유지함으로써, 세상에 자연적으로 존재하는 관계를 분리하려고 노력한다.'];
const W=[
 ['fundamental','근본적인','w',1,'fundamental'],['nature','성격, 본질','w',1,'nature'],['experimental','실험의','w',1,'experimental'],['manipulation','조작','w',1,'manipulation'],
 ['manipulate','조작하다','w',2,'manipulate'],['variable','변수','w',2,'variable'],['of interest','관심 있는','p',2,'of interest'],
 ['at the same time','동시에','p',3,'At the same time'],['attempt to V','~하려고 시도하다','p',3,'attempt to'],['control for','~을 통제하다(변수를 고려해 통제하다)','p',3,'control for'],['potential','잠재적인','w',3,'potential'],
 ['underlying','근본적인, 밑에 깔린','w',4,'underlying'],['identify','밝혀내다, 확인하다','w',4,'identifying'],['cannot be overstated','아무리 강조해도 지나치지 않다','p',4,'cannot be overstated'],
 ['correlate','상관되다, 서로 관련되다','w',5,'correlated'],['uncontrolled','통제되지 않은','w',5,'uncontrolled'],
 ['supplement','보충제','w',6,'supplements'],['habit','습관','w',6,'habits'],
 ['as a result','그 결과','p',7,'As a result'],['merely','단지, 그저','w',7,'merely'],['observe','관찰하다','w',7,'observe'],['affect','영향을 미치다','w',7,'affect'],
 ['occur','일어나다, 발생하다','w',8,'occur'],
 ['naturally occurring','자연적으로 발생하는','p',10,'naturally occurring'],['relationship','관계','w',10,'relationship'],['separate','분리하다','w',10,'separate'],['hold constant','일정하게 유지하다','p',10,'holding everything else constant']];
ENG.add('o17-11',{u:0,n:'실험 방법의 본질',no:'17-11',src:'2023년 9월 고2 학평 · 올림포스 17강 11번',KO,W,
 sum:'실험의 본질은 ==조작과 통제==이다. 현실 세계에서는 변수들이 서로 얽혀 있어 단순 관찰로는 원인을 알 수 없으므로, 과학자들은 ==한 번에 하나의 변수만 조작하고 나머지는 일정하게 유지==해 관계를 분리한다.',
 st:[['정의','①~④','실험 = ==조작 + 통제==, 원인 규명에 중요'],['문제','⑤~⑦','현실 세계는 변수들이 ==얽혀 있어== 단순 관찰로는 부족 (비타민 예)'],['해결','⑧~⑩','현실에 없는 상황을 만들어 ==하나만 조작, 나머지는 통제==']],
 syn:[
  ['주어의 수 일치 / 전치사 of','The importance ==of controlled experiments== in identifying the underlying causes of events ==cannot be overstated== — 주어 The importance(단수), cannot be overstated(수동, 아무리 강조해도 지나치지 않다).'],
  ['관계대명사 people who','people ==who== take vitamin supplements may have different habits than people ==who don’t== — 선행사 people(복수) → take, don’t.'],
  ['if + 주어 + want / since','==if== we want to study ~, we can’t merely observe the real world, ==since== any of these factors may affect health — 조건절, 이유절(since).'],
  ['선행사 a situation + 관계절','we have to create a situation ==that== doesn’t actually occur in the real world — 선행사 a situation(단수) → doesn’t.'],
  ['That’s just what ~','That’s just ==what== scientific experiments do — 관계대명사 what(~하는 것) 명사절이 보어.'],
  ['by -ing / while -ing','They try to separate ~ ==by manipulating== one specific variable at a time, ==while holding== everything else constant — 수단의 by -ing, 접속사를 남긴 분사구문.']],
 tip:'**함정 주의** ‘cannot be overstated’는 ‘아무리 강조해도 지나치지 않다’는 관용 표현. ==people who don’t (take vitamins)==처럼 생략된 대동사에 유의해요. 마지막 문장의 ==holding==은 while 뒤의 분사구문이에요.',
 pts:['핵심: ==실험의 본질 = 하나의 변수만 조작하고 나머지는 통제==','근거: 현실 세계의 변수는 서로 얽혀 있어 관찰만으로는 원인 파악이 어려움','빈칸 단골: manipulation and control / hold everything else constant','어법: 관계절 수 일치, by -ing, while -ing 분사구문, what 명사절'],
 tips:{'수동태':'cannot be overstated — 조동사 뒤 be + p.p.','관계대명사 who':'who절 동사는 선행사 people(복수)에 맞춰요.','접속사 since':'since가 이유를 나타내면 ‘~ 때문에’.','관계대명사 that':'선행사 a situation(단수)이면 동사도 단수!','관계대명사 what':'what = the thing that, 명사절을 이끌어요.','by -ing':'by + 동명사 = ~함으로써(수단).','분사구문':'while holding ~ — 접속사 while을 남긴 분사구문.','어법 선택':'수 일치 · 분사 · 관계사를 차례로 확인해요.','글의 내용':'핵심: 하나만 조작하고 나머지는 통제해야 원인을 알 수 있다.','영작':'관계대명사 what과 by -ing를 정확히!','어법 문장 고르기':'관계절의 수 일치를 확인해요.','제목 추론':'글 전체를 한마디로 — 실험은 변수 통제의 기술!'},
 B:[
  {g:'관용 표현',q:'The importance of controlled experiments cannot be overstated.\n\n위 문장의 뜻으로 알맞은 것은?',o:['통제된 실험의 중요성은 아무리 강조해도 지나치지 않다','통제된 실험의 중요성은 과장되어 있다','통제된 실험은 중요하지 않다','통제된 실험은 반드시 필요하지는 않다','통제된 실험의 중요성은 말하기 어렵다'],a:0,e:'cannot be overstated = 아무리 강조해도 지나치지 않다.'},
  {g:'수 일치',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nThe importance of controlled experiments ⓐ(is / are) great, and people who ⓑ(take / takes) vitamin supplements may have different habits.',o:['is – take','are – take','is – takes','are – takes','be – take'],a:0,e:'ⓐ 주어 The importance(단수) → is. ⓑ 선행사 people(복수) → take.'},
  {g:'관계대명사 who',q:'people who take vitamin supplements ... than people who don’t\n\n밑줄 친 __don’t__ 뒤에는 take vitamins가 생략되어 있다.',a:true,e:'대동사 don’t가 앞의 take vitamins를 대신해요.'},
  {g:'접속사 since',q:'we can’t merely observe the real world, since any of these factors may affect health\n\n밑줄 친 __since__의 뜻으로 알맞은 것은?',o:['~ 때문에','~ 이래로','~하는 동안','~에도 불구하고','~하자마자'],a:0,e:'since가 이유를 나타내면 ‘~ 때문에’예요.'},
  {g:'관계대명사 that',q:'we have to create a situation that doesn’t actually occur in the real world\n\n밑줄 친 __that__의 선행사는 a situation이다.',a:true,e:'주격 관계대명사 that의 선행사는 a situation(단수) → doesn’t.'},
  {g:'관계대명사 what',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nThat’s just [빈칸] scientific experiments do. (~하는 것)',a:['what'],m:'what',e:'what = the thing that. 명사절이 보어예요.'},
  {g:'by -ing',q:'They try to separate the relationship ⓐ(by manipulating / by manipulate) one variable, ⓑ(while holding / while held) everything else constant.\n\nⓐ, ⓑ에 알맞은 것은?',o:['by manipulating – while holding','by manipulate – while holding','by manipulating – while held','by manipulate – while held','to manipulating – while holding'],a:0,e:'by + 동명사(수단), while + 현재분사(능동: 나머지를 유지하면서).'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nScientists attempt to control [빈칸] the potential effects of all other variables.',a:['for'],m:'for',e:'control for = ~을 통제하다.'},
  {g:'글의 내용',q:'윗글에서 현실 세계를 단순히 관찰할 수 없는 이유로 알맞은 것은?\n\n'+S.join(' '),o:['비타민, 식단, 운동 등 여러 요소가 모두 건강에 영향을 줄 수 있어서','현실 세계에는 변수가 없어서','비타민이 건강에 해로워서','과학자들이 관찰을 싫어해서','통제된 실험이 불가능해서'],a:0,e:'⑦: 여러 요소가 서로 얽혀 건강에 영향을 줄 수 있어서 단순 관찰로는 부족해요.'}],
 X:[
  {k:'gr',marks:[['manipulate','manipulate'],['attempt','attempt'],['overstated','overstated'],['occur','occurs'],['holding','holding']],e:'④ doesn’t 뒤에는 동사원형이 오므로 doesn’t actually occur.'},
  {k:'vo',marks:[['fundamental','fundamental'],['manipulation','manipulation'],['underlying','underlying'],['correlated','unrelated'],['constant','constant']],e:'③ 현실 세계에서는 변수들이 서로 ‘상관되어(correlated)’ 있어 관찰만으로는 원인을 알기 어려워요. unrelated는 흐름과 반대예요.'},
  {k:'bl',ph:'manipulating one specific variable at a time, while holding everything else constant',o:['manipulating one specific variable at a time, while holding everything else constant','observing every variable at the same time','changing all variables randomly','ignoring the variables of interest','measuring only the real world as it is'],e:'실험은 한 번에 하나의 변수만 조작하고 나머지는 일정하게 유지해요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['실험은 하나의 변수만 조작하고 나머지를 통제해 원인을 밝혀낸다','현실 세계의 관찰이 실험보다 정확하다','비타민은 건강에 가장 큰 영향을 준다','과학자는 변수를 최대한 많이 조작해야 한다','실험은 현실에서 일어나는 일만 다룬다'],e:'조작과 통제를 통해 변수 사이의 관계를 분리하는 것이 실험의 본질이에요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['Manipulation and Control: The Heart of Experiments','Why Vitamins Are Good for You','The Limits of Scientific Knowledge','How to Observe the Real World','Famous Experiments in History'],e:'실험의 핵심인 조작과 통제를 다룬 글이에요.'},
  {k:'sm',s:'Because variables are (A) in the real world, scientists create experiments that (B) one variable while keeping the others constant.',o:['entangled – manipulate','isolated – ignore','unknown – measure','identical – remove','harmless – predict'],e:'(A) 얽혀 있다(entangled) (B) 하나의 변수를 조작하다(manipulate).'},
  {k:'ins',s:6,at:[3,4,5,6,7],e:'As a result는 앞(비타민 섭취자와 비섭취자의 습관 차이) 내용의 결과로, 단순 관찰로는 부족하다는 결론을 이끌어요.'},
  {k:'ord',cut:[3,3,2],lab:['B','C','A'],e:'(B) 통제된 실험의 중요성과 현실 세계의 상관된 변수(비타민 예) → (C) 그래서 현실에 없는 상황을 만든다 → (A) 한 번에 한 변수만 조작.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n바로 그것이 과학 실험이 하는 일이다.\n→ That’s just [빈칸] scientific experiments do.',a:['what'],m:'what',e:'관계대명사 what이 이끄는 명사절.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['We have to create a situation that doesn’t actually occur in the real world.','We have to create a situation that don’t actually occur in the real world.','We have to create a situation what doesn’t actually occur in the real world.','We have to create a situation doesn’t actually occurs in the real world.','We have to creating a situation that doesn’t actually occur in the real world.'],a:0,e:'선행사 a situation(단수) → doesn’t + 동사원형 occur.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nScientists (A) a variable of interest and try to (B) the effects of all other (C).',o:['manipulate – control – variables','observe – ignore – supplements','manipulate – identify – habits','control – manipulate – experiments','observe – control – relationships'],a:0,e:'(A) manipulate(조작하다) (B) control(통제하다) (C) variables(변수).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['fundamental – basic · merely – simply','potential – possible · identify – recognize','habit – custom · observe – watch','affect – influence · separate – divide','occur – happen · underlying – superficial'],a:4,e:'underlying(근본적인)과 superficial(피상적인)은 반대 느낌이에요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 control이 윗글(통제하다)과 같은 뜻으로 쓰인 것은?',o:['Scientists must __control__ other variables.','The __control__ group took no pills.','He pressed the __control__ button.','The government lost __control__ of the city.','The remote __control__ is on the table.'],a:0,e:'윗글의 control은 ‘통제하다’(동사). 나머지는 대조군·조종 버튼·통제권·리모컨(명사)예요.'}],
 M:[
  {k:'gr',marks:[['manipulate','manipulate'],['attempt','attempt'],['cannot','cannot'],['don’t','doesn’t'],['affect','affect']],e:'④ people(복수)를 받는 대동사는 don’t.'},
  {k:'bl',ph:'we can’t merely observe the real world',o:['we can’t merely observe the real world','we should only observe the real world','we can predict everything without experiments','we must avoid studying vitamins','we need not control any variable'],e:'여러 요소가 건강에 영향을 줄 수 있어 단순 관찰만으로는 원인을 알 수 없어요.'},
  {k:'ins',s:8,at:[4,5,6,7,8],e:'That’s just what scientific experiments do는 앞 문장(현실에 없는 상황을 만들어야 한다)을 받아 실험의 정의로 이어져요.'}]
});
})();

// ===== 올림포스 17강 12번 · 지중해 식단과 색깔 =====
(()=>{
const S=ENG.T['o17-12'];
const KO=[
 '지중해 지역 사람들은 왜 더 오래 살고 질병 발생률이 더 낮을까?',
 '어떤 사람들은 그것이 그들이 먹는 음식 때문이라고 말한다.',
 '그들의 식단은 신선한 과일, 생선, 채소, 통곡물, 견과류로 가득하다.',
 '이 문화권의 사람들은 적포도주를 마시고 올리브유를 많이 사용한다.',
 '그 식습관은 왜 건강에 좋을까?',
 '한 가지 이유는 그들이 다양한 색의 팔레트를 먹고 있기 때문이다.',
 '식품에 존재하는 수천 가지의 다채로운 ‘파이토케미컬’(phyto=식물)의 이점을 보여 주는 연구가 점점 더 많이 나오고 있다.',
 '식물 속에 있는 이 건강에 좋은, 영양소는 아닌 화합물들은 식물에 색과 기능을 주고 인체의 건강에도 보탬이 된다.',
 '각각의 색은 몸에서 특정한 기능을 하는 특정 화합물과 연결되어 있다.',
 '예를 들어, 보라색 음식을 먹지 않는다면 중요한 뇌 보호 화합물인 안토시아닌을 놓치고 있을 가능성이 크다.',
 '마찬가지로, 녹색 음식을 피한다면 세포를 손상으로부터 보호하는 식물성 항산화제인 엽록소가 부족할 수 있다.'];
const W=[
 ['Mediterranean','지중해(의)','w',1,'Mediterranean'],['incidence','발생(률)','w',1,'incidence'],['disease','질병','w',1,'disease'],
 ['be full of','~로 가득하다','p',3,'is full of'],['whole grain','통곡물','w',3,'whole grains'],['nut','견과류','w',3,'nuts'],
 ['individual','개인, 사람','w',4,'Individuals'],['great amounts of','많은 양의','p',4,'great amounts of'],
 ['palette','(색의) 팔레트, 다양한 색','w',6,'palette'],
 ['surface','(밖으로) 드러나다','w',7,'surfacing'],['benefit','이점, 혜택','w',7,'benefits'],['exist','존재하다','w',7,'exist'],
 ['healthful','건강에 좋은','w',8,'healthful'],['non-nutritive','영양소가 아닌','w',8,'non-nutritive'],['compound','화합물','w',8,'compounds'],['add to','~에 보탬이 되다','p',8,'add to'],
 ['connect to','~와 연결되다','p',9,'connects to'],['serve a function','기능을 하다','p',9,'serves a specific function'],['specific','특정한','w',9,'specific'],
 ['miss out on','~을 놓치다','p',10,'missing out on'],['protection','보호','w',10,'protection'],
 ['similarly','마찬가지로','w',11,'Similarly'],['avoid','피하다','w',11,'avoid'],['lack','~이 부족하다','w',11,'lacking'],['antioxidant','항산화제','w',11,'antioxidant'],['guard A from B','A를 B로부터 보호하다','p',11,'guards'],['damage','손상','w',11,'damage']];
ENG.add('o17-12',{u:0,n:'지중해 식단과 색깔',no:'17-12',src:'2023년 11월 고2 학평 · 올림포스 17강 12번',KO,W,
 sum:'지중해 사람들이 건강한 이유 중 하나는 ==다양한 색의 식품==을 먹기 때문이다. 식물의 색은 특정 ==파이토케미컬==과 연결되어 각각 몸에서 고유한 기능을 하므로, 특정 색을 피하면 그 건강 효과를 놓친다.',
 st:[['질문','①~⑤','지중해 사람들은 왜 ==오래 살고 질병이 적은가=='],['이유','⑥~⑨','==다양한 색의 식품== → 색마다 ==파이토케미컬==과 고유 기능'],['예시','⑩~⑪','==보라색(안토시아닌)==, ==녹색(엽록소)== 식품을 피하면 부족']],
 syn:[
  ['be full of / 병렬','Their diet ==is full of== fresh fruits, fish, vegetables, whole grains, and nuts — 명사 병렬, be full of(~로 가득하다).'],
  ['more and more + 현재진행','==More and more research is surfacing== that shows us the benefits ~ — more and more(점점 더 많은), 주어 research는 불가산 → is. 주격 관계대명사 that절.'],
  ['관계대명사 that + 비한정','the benefits of the thousands of colorful “phytochemicals” ==that exist== in foods — 선행사 phytochemicals(복수) → exist.'],
  ['동사 병렬','These healthful, non-nutritive compounds ==provide== color and function to the plant and ==add== to the health — 두 동사 provide, add 병렬.'],
  ['관계대명사 that + 단수','a particular compound ==that serves== a specific function — 선행사 compound(단수) → serves.'],
  ['if 조건절 + probably','==if== you don’t eat purple foods, you are probably missing out on anthocyanins — 조건절(현재) + 주절(현재진행).'],
  ['동격 + 관계대명사','chlorophyll, ==a plant antioxidant that guards== your cells from damage — 콤마로 동격, that절의 동사 guards.']],
 tip:'**함정 주의** research는 불가산 명사로 ==단수 취급(is surfacing)==. thousands of colorful phytochemicals ==that exist==처럼 관계절 동사는 선행사(복수)에 맞춰요. guard A from B(A를 B로부터 보호하다)의 from을 기억!',
 pts:['핵심: ==다양한 색의 식품 = 건강== (파이토케미컬)','예시: 보라색(안토시아닌, 뇌 보호), 녹색(엽록소, 세포 보호)','빈칸 단골: palette of colors / phytochemicals / function','어법: 불가산 research, 관계절 수 일치, 병렬, guard A from B'],
 tips:{'불가산 명사':'research는 불가산 → 단수 동사(is)!','관계절 수 일치':'관계절 동사는 선행사(phytochemicals 복수 / compound 단수)에 맞춰요.','동사 병렬':'and로 이어진 동사는 같은 형태로!','guard A from B':'A를 B로부터 보호하다 — from을 기억!','if 조건절':'if절은 현재형, 주절은 현재진행/미래 가능.','동격':'콤마 뒤 명사구는 동격(앞 명사 설명).','어법 선택':'수 일치 · 병렬 · 전치사를 차례로 확인해요.','글의 내용':'핵심: 색이 다양한 식품이 건강에 좋은 이유는 파이토케미컬 때문.','영작':'guard A from B와 수 일치를 정확히!','어법 문장 고르기':'불가산 명사와 관계절 수 일치를 확인해요.','제목 추론':'글 전체를 한마디로 — 건강은 색깔에 있다!'},
 B:[
  {g:'be full of',q:'Their diet is full of fresh fruits, fish, vegetables, whole grains, and nuts.\n\n밑줄 친 __is full of__와 바꿔 쓸 수 있는 것은?',o:['is filled with','is short of','is free from','is aware of','is afraid of'],a:0,e:'be full of = be filled with(~로 가득하다).'},
  {g:'불가산 명사',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nMore and more research ⓐ(is / are) surfacing that shows us the benefits of phytochemicals that ⓑ(exist / exists) in foods.',o:['is – exist','are – exist','is – exists','are – exists','being – exist'],a:0,e:'ⓐ research는 불가산 → is. ⓑ 선행사 phytochemicals(복수) → exist.'},
  {g:'병렬 구조',q:'These compounds provide color and function to the plant and add to the health of the human body.\n\n밑줄 친 __add__는 provide와 병렬 연결된 동사이다.',a:true,e:'and로 이어진 두 동사 provide, add가 병렬이에요.'},
  {g:'관계절 수 일치',q:'a particular compound that serves a specific function in the body\n\n밑줄 친 __serves__가 단수인 이유로 알맞은 것은?',o:['선행사 a particular compound가 단수여서','주어가 body여서','function이 단수여서','Each color가 주어여서','that이 단수여서'],a:0,e:'관계절 동사는 선행사(compound, 단수)에 맞춰요.'},
  {g:'어법 선택',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nEach color ⓐ(connects / connect) to a particular compound that serves a specific function ⓑ(in / at) the body.',o:['connects – in','connect – in','connects – at','connect – at','connecting – in'],a:0,e:'ⓐ Each + 단수 → connects. ⓑ in the body(몸 안에서).'},
  {g:'miss out on',q:'you are probably missing out on anthocyanins\n\n밑줄 친 __missing out on__의 뜻으로 알맞은 것은?',o:['~을 놓치다','~을 만들어 내다','~을 즐기다','~에서 벗어나다','~을 기대하다'],a:0,e:'miss out on = (좋은 것을) 놓치다.'},
  {g:'guard A from B',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nchlorophyll, a plant antioxidant that guards your cells [빈칸] damage (손상으로부터)',a:['from'],m:'from',e:'guard A from B = A를 B로부터 보호하다.'},
  {g:'동격',q:'chlorophyll, a plant antioxidant that guards your cells\n\n밑줄 친 __a plant antioxidant__는 chlorophyll과 동격이다.',a:true,e:'콤마 뒤 명사구가 chlorophyll을 부연 설명해요.'},
  {g:'글의 내용',q:'윗글에서 지중해 식단이 건강한 이유로 제시된 것은?\n\n'+S.join(' '),o:['다양한 색의 식품을 먹어 여러 파이토케미컬을 섭취하기 때문','포도주를 많이 마시기 때문','고기를 많이 먹기 때문','식사량이 적기 때문','운동을 많이 하기 때문'],a:0,e:'⑥: 한 가지 이유는 다양한 색의 팔레트를 먹고 있기 때문이에요.'}],
 X:[
  {k:'gr',marks:[['live','live'],['say','say'],['drink','drink'],['surfacing','surfacing'],['serves','serve']],e:'⑤ 선행사 a particular compound(단수) → serves.'},
  {k:'vo',marks:[['incidence','incidence'],['healthy','healthy'],['healthful','harmful'],['specific','specific'],['missing','missing']],e:'③ 식물 속 화합물은 ‘건강에 좋은(healthful)’ 것이라 흐름상 harmful은 틀려요.'},
  {k:'bl',ph:'eating a palette of colors',o:['eating a palette of colors','eating less food every day','drinking more red wine','avoiding all kinds of fat','cooking everything at home'],e:'뒤에 색깔별 파이토케미컬 설명이 이어져요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['다양한 색의 식품을 먹으면 색마다 고유한 건강 효과를 얻을 수 있다','적포도주는 건강에 가장 좋다','지중해 지역 사람들은 운동을 많이 한다','채소보다 과일이 건강에 좋다','영양소가 없는 식품은 먹지 말아야 한다'],e:'색마다 연결된 파이토케미컬이 서로 다른 기능을 하므로 다양한 색을 먹는 것이 좋아요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['Eat the Rainbow: Colors That Keep Us Healthy','The History of Olive Oil','Why We Should Skip Breakfast','Mediterranean Travel Guide','The Dangers of Sugar'],e:'다양한 색의 식품이 건강을 지킨다는 내용이에요.'},
  {k:'sm',s:'Eating foods of many (A) provides various phytochemicals, each of which has a (B) function in the body.',o:['colors – specific','tastes – harmful','prices – general','sizes – useless','countries – weak'],e:'(A) 다양한 색(colors) (B) 특정한(specific) 기능.'},
  {k:'ins',s:9,at:[5,6,7,8,9],e:'For example은 앞의 일반적인 설명(색마다 특정 화합물과 기능)에 대한 구체적 예시를 이끌어요.'},
  {k:'ord',cut:[3,3,3],lab:['B','C','A'],e:'(B) 포도주·올리브유와 Why? 색의 팔레트 → (C) 파이토케미컬과 색-기능 연결 → (A) 보라색·녹색 예시.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n그들의 식단은 신선한 과일로 가득하다.\n→ Their diet is [빈칸] of fresh fruits.',a:['full'],m:'full',e:'be full of = ~로 가득하다.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['More and more research is surfacing that shows us the benefits.','More and more research are surfacing that shows us the benefits.','More and more researches is surfacing that show us the benefits.','More and more research is surfaced that shows us the benefits.','Much and much research is surfacing that shows us the benefits.'],a:0,e:'research는 불가산 → is surfacing. more and more = 점점 더 많은.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nColorful plant (A) give color and (B) to the plant and help (C) our cells from damage.',o:['compounds – function – protect','diseases – benefit – avoid','nuts – palette – lack','grains – damage – guard','compounds – incidence – lack'],a:0,e:'(A) compounds(화합물) (B) function(기능) (C) protect(보호하다).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['surface – emerge · exist – be present','benefit – advantage · damage – harm','avoid – stay away from · lack – be short of','specific – particular · similarly – likewise','healthful – harmful · protection – defense'],a:4,e:'healthful(건강에 좋은)과 harmful(해로운)은 반대예요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 serve가 윗글(기능을 하다)과 같은 뜻으로 쓰인 것은?',o:['The tool can __serve__ several functions.','The waiter will __serve__ dinner at six.','He will __serve__ in the army.','She has a good __serve__ in tennis.','They __serve__ coffee at the counter.'],a:0,e:'serve a function = 기능을 하다. 나머지는 음식을 내다·복무하다·서브·제공하다예요.'}],
 M:[
  {k:'gr',marks:[['live','live'],['is','are'],['are eating','are eating'],['exist','exist'],['lacking','lacking']],e:'② 주어 Their diet(단수) → is full of.'},
  {k:'bl',ph:'Each color connects to a particular compound that serves a specific function in the body',o:['Each color connects to a particular compound that serves a specific function in the body','All colors have the same effect on the body','Colors only affect how food looks','Only green foods contain useful compounds','Colorful foods lack any nutrients'],e:'색마다 특정 화합물과 연결되어 몸에서 특정 기능을 해요.'},
  {k:'ins',s:6,at:[2,3,4,5,6],e:'More and more research ~는 앞의 ‘한 가지 이유는 다양한 색’에 대한 근거(연구)를 소개해요.'}]
});
})();

// ===== 올림포스 18강 5번 · 질투와 시기 =====
(()=>{
const S=ENG.T['o18-5'];
const KO=[
 '많은 것들이 시기심을 불러일으킨다. 소유, 지위, 건강, 젊음, 재능, 인기, 아름다움.',
 '그것은 신체 반응이 똑같기 때문에 흔히 질투와 혼동된다.',
 '차이는 이렇다. 시기의 대상은 (지위, 돈, 건강 등) 어떤 것이다.',
 '질투의 대상은 제3자의 행동이다.',
 '시기에는 두 사람이 필요하다.',
 '반면 질투에는 세 사람이 필요하다. 피터가 샘을 질투하는 것은 옆집의 예쁜 여자가 피터가 아니라 샘에게 전화하기 때문이다.',
 '역설적이게도, 시기심에서 우리는 나이, 직업, 거주지가 우리와 가장 비슷한 사람들에게 원망을 돌린다.',
 '우리는 지난 세기의 사업가들을 부러워하지 않는다.',
 '우리는 지구 반대편의 백만장자들을 부러워하지 않는다.',
 '작가인 나는 음악가, 경영자, 치과 의사가 아니라 다른 작가들을 부러워한다.',
 'CEO라면 자신보다 더 큰 다른 CEO들을 부러워한다.',
 '슈퍼모델이라면 더 성공한 슈퍼모델들을 부러워한다.',
 '아리스토텔레스는 이를 알고 있었다. ‘도공은 도공을 시기한다.’'];
const W=[
 ['spark','불러일으키다','w',1,'spark'],['envy','시기(하다), 부러워하다','w',1,'envy'],['ownership','소유(권)','w',1,'ownership'],['status','지위','w',1,'status'],['talent','재능','w',1,'talent'],['popularity','인기','w',1,'popularity'],
 ['be confused with','~와 혼동되다','p',2,'confused with'],['jealousy','질투','w',2,'jealousy'],['reaction','반응','w',2,'reactions'],['identical','똑같은','w',2,'identical'],
 ['subject','대상, 주제','w',3,'subject'],['behaviour','행동','w',4,'behaviour'],['third person','제3자','p',4,'third person'],
 ['on the other hand','반면에','p',6,'on the other hand'],['require','필요로 하다','w',6,'requires'],['next door','옆집의','p',6,'next door'],
 ['paradoxically','역설적이게도','w',7,'Paradoxically'],['direct A toward B','A를 B로 향하게 하다','p',7,'direct resentments toward'],['resentment','원망, 분개','w',7,'resentments'],['similar to','~와 비슷한','p',7,'similar to'],['residence','거주(지)','w',7,'residence'],
 ['century','세기','w',8,'century'],['millionaire','백만장자','w',9,'millionaires'],['globe','지구','w',9,'globe'],
 ['musician','음악가','w',10,'musicians'],['dentist','치과 의사','w',10,'dentists'],['successful','성공한','w',12,'successful'],['potter','도공','w',13,'Potters']];
ENG.add('o18-5',{u:0,n:'질투와 시기',no:'18-5',src:'2024년 6월 고2 학평 · 올림포스 18강 5번',KO,W,
 sum:'==시기(envy)==는 두 사람 사이에서 ==어떤 것(지위·돈 등)==을 두고 생기고, ==질투(jealousy)==는 세 사람이 필요하며 제3자의 행동이 대상이다. 시기는 역설적이게도 ==나이·직업·거주지가 가장 비슷한 사람==을 향한다.',
 st:[['구분','①~⑥','시기 = ==두 사람, 대상은 물건==; 질투 = ==세 사람, 대상은 제3자의 행동=='],['특징','⑦~⑨','시기는 ==나와 가장 비슷한 사람==에게 향함 (먼 사람은 부러워하지 않음)'],['예시','⑩~⑬','작가→작가, CEO→CEO, 모델→모델, ==도공은 도공을 시기=='] ],
 syn:[
  ['가목적어 / 수동 + with','It is often ==confused with== jealousy because the physical reactions are identical — be confused with(~와 혼동되다), because 이유절.'],
  ['콜론 / 동격적 설명','The difference: the subject of envy ==is== a thing — 콜론 뒤 설명. the subject(단수) → is.'],
  ['on the other hand','Envy needs two people. Jealousy, ==on the other hand==, requires three — 대조의 삽입구.'],
  ['콜론 + because','Peter is jealous of Sam ==because== the beautiful girl next door rings him instead — 이유 부사절.'],
  ['direct A toward B / 관계대명사 who(m)','we direct resentments toward ==those who are== most similar to us — those who = ~하는 사람들, 복수 → are.'],
  ['do not + 동사원형','We ==don’t envy== businesspeople from the century before last — 일반동사 부정, envy는 타동사.'],
  ['as + 자격','==As a writer==, I don’t envy musicians — as 전치사(~로서). 문장 맨 앞 as a CEO도 같은 용법.']],
 tip:'**함정 주의** ‘as a writer’의 as는 ==전치사(~로서)==. ‘we direct resentments toward those who are most similar to us’의 who절 동사는 ==those(복수) → are==. envy는 ‘(~를) 부러워하다’ 타동사라 전치사 없이 목적어가 와요.',
 pts:['핵심: ==시기(2인, 물건) vs 질투(3인, 제3자의 행동)==','특징: 시기는 ==가장 비슷한 사람==을 향함 (역설적)','빈칸 단골: similar to us in age, career and residence / third person','어법: those who 수 일치, 타동사 envy, as 전치사, 대조 연결어'],
 tips:{'be confused with':'~와 혼동되다 — with를 기억!','those who':'those who + 복수 동사(are)!','타동사 envy':'envy는 타동사 — 전치사 없이 목적어!','as 전치사':'as + 명사 = ~로서.','대조 연결어':'on the other hand = 반면에(대조).','어법 선택':'수 일치 · 전치사 · 타동사를 차례로 확인해요.','글의 내용':'핵심: 시기와 질투는 대상과 사람 수가 다르다.','영작':'those who와 타동사 envy를 정확히!','어법 문장 고르기':'as 전치사와 수 일치를 확인해요.','제목 추론':'글 전체를 한마디로 — 시기와 질투의 차이!'},
 B:[
  {g:'be confused with',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nEnvy is often confused [빈칸] jealousy because the physical reactions are identical.',a:['with'],m:'with',e:'be confused with = ~와 혼동되다.'},
  {g:'콜론/수 일치',q:'The difference: the subject of envy is a thing.\n\n밑줄 친 __is__의 주어는 the subject이다.',a:true,e:'주어 the subject(단수) → is. of envy는 수식어예요.'},
  {g:'어법 선택',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nEnvy ⓐ(needs / need) two people. Jealousy, on the other hand, ⓑ(requires / require) three.',o:['needs – requires','need – require','needs – require','need – requires','needing – requires'],a:0,e:'Envy, Jealousy 모두 단수 주어 → needs, requires.'},
  {g:'on the other hand',q:'Jealousy, on the other hand, requires three.\n\n밑줄 친 __on the other hand__와 의미가 가장 가까운 것은?',o:['In contrast','For example','As a result','In addition','Likewise'],a:0,e:'on the other hand = 반면에(대조) = In contrast.'},
  {g:'those who',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nwe direct resentments toward those who ⓐ(is / are) most similar to us ⓑ(in / on) age, career and residence',o:['are – in','is – in','are – on','is – on','being – in'],a:0,e:'ⓐ those who + 복수 → are. ⓑ in age(나이에 있어서).'},
  {g:'타동사 envy',q:'We don’t envy millionaires on the other side of the globe.\n\n밑줄 친 __envy__는 뒤에 전치사 없이 목적어를 취하는 타동사이다.',a:true,e:'envy + 목적어(millionaires). 전치사 불필요.'},
  {g:'as 전치사',q:'As a writer, I don’t envy musicians, managers or dentists, but other writers.\n\n밑줄 친 __As__의 뜻으로 알맞은 것은?',o:['~로서','~할 때','~ 때문에','~처럼','~하는 대로'],a:0,e:'As + 명사 = ~로서(자격).'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n우리는 지난 세기의 사업가들을 부러워하지 않는다.\n→ We don’t [빈칸] businesspeople from the century before last.',a:['envy'],m:'envy',e:'envy = 부러워하다(타동사).'},
  {g:'글의 내용',q:'윗글에서 시기(envy)와 질투(jealousy)의 차이로 알맞은 것은?\n\n'+S.join(' '),o:['시기는 두 사람과 어떤 것이 관련되고, 질투는 세 사람이 필요하다','시기는 세 사람, 질투는 두 사람이 필요하다','둘 다 제3자의 행동이 대상이다','시기는 신체 반응이 없다','질투는 비슷한 사람에게만 생긴다'],a:0,e:'⑤⑥: 시기에는 두 사람, 질투에는 세 사람이 필요해요.'}],
 X:[
  {k:'gr',marks:[['spark','spark'],['confused','confused'],['requires','require'],['direct','direct'],['envy','envy']],e:'③ 주어 Jealousy(단수) → requires.'},
  {k:'vo',marks:[['identical','identical'],['subject','subject'],['resentments','resentments'],['similar','different'],['successful','successful']],e:'④ 시기는 나와 ‘비슷한(similar)’ 사람에게 향해요. different는 흐름과 반대예요.'},
  {k:'bl',ph:'those who are most similar to us in age, career and residence',o:['those who are most similar to us in age, career and residence','those who live far away from us','those who are much richer than us','those who are famous around the world','those who have never met us'],e:'다음 문장들에서 먼 세계의 사람은 부러워하지 않는다고 했어요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['시기와 질투는 다르며, 시기는 나와 가장 비슷한 사람을 향한다','질투는 두 사람 사이에서만 생긴다','시기는 자신보다 훨씬 부유한 사람에게 생긴다','신체 반응으로 시기와 질투를 구별할 수 있다','시기는 극복하기 쉽다'],e:'시기와 질투의 차이, 그리고 시기가 비슷한 사람을 향한다는 점이 요지예요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['Envy vs. Jealousy: Who Is the Target?','How to Win a Friend','The Secret of Successful CEOs','Why Writers Write','The Joy of Admiration'],e:'시기와 질투의 구분이 핵심이에요.'},
  {k:'sm',s:'Envy involves (A) people and is directed at those who are similar to us, whereas jealousy involves a (B) person’s behavior.',o:['two – third','three – first','two – second','four – single','one – distant'],e:'(A) 시기 = 두 사람(two) (B) 질투 = 제3자(third).'},
  {k:'ins',s:6,at:[4,5,6,7,8],e:'Paradoxically는 앞의 시기와 질투 구분에서 방향을 바꿔 시기의 특징(비슷한 사람)을 소개해요.'},
  {k:'ord',cut:[4,3,3],lab:['B','C','A'],e:'(B) 시기=2인, 질투=3인 + 역설적으로 비슷한 사람 → (C) 먼 사람은 부러워하지 않음 → (A) 작가·CEO·모델 예시와 아리스토텔레스.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n시기에는 두 사람이 필요하고, 질투는 [빈칸] 반면 세 사람이 필요하다. (반면에: on the other [빈칸])',a:['hand'],m:'hand',e:'on the other hand = 반면에.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['As a CEO you envy other, bigger CEOs.','As a CEO you envy to other, bigger CEOs.','As a CEO you are envy other, bigger CEOs.','Like a CEO you envy of other, bigger CEOs.','As a CEO you envies other, bigger CEOs.'],a:0,e:'envy는 타동사(전치사 불필요), as a CEO는 ‘CEO로서’.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\n(A) is a feeling about a thing such as status, while (B) is about a third person’s (C).',o:['Envy – jealousy – behaviour','Jealousy – envy – status','Envy – popularity – reaction','Resentment – envy – talent','Jealousy – envy – ownership'],a:0,e:'(A) Envy(시기) (B) jealousy(질투) (C) behaviour(행동).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['spark – trigger · identical – same','resentment – anger · talent – gift','residence – home · globe – world','status – position · popularity – fame','successful – failed · century – 100 years'],a:4,e:'successful(성공한)은 failed(실패한)와 반대예요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 spark가 윗글(불러일으키다)과 같은 뜻으로 쓰인 것은?',o:['The news will __spark__ a debate.','A __spark__ from the fire landed on the grass.','The wire gave off a __spark__.','He has a __spark__ of genius.','There was no __spark__ between them.'],a:0,e:'윗글의 spark는 동사 ‘불러일으키다’. 나머지는 명사(불꽃·재능의 조짐 등)예요.'}],
 M:[
  {k:'gr',marks:[['spark','spark'],['is','are'],['requires','requires'],['direct','direct'],['envy','envy']],e:'② 주어 It(단수) → is often confused with.'},
  {k:'bl',ph:'Potters envy potters',o:['Potters envy potters','Potters envy painters','Painters envy potters','Potters help potters','Potters ignore potters'],e:'아리스토텔레스의 말로, 시기가 비슷한 사람을 향함을 요약해요.'},
  {k:'ins',s:5,at:[3,4,5,6,7],e:'Jealousy, on the other hand, requires three는 앞의 Envy needs two people과 대조를 이루는 문장이에요.'}]
});
})();

// ===== 올림포스 18강 12번 · 그린워싱 =====
(()=>{
const S=ENG.T['o18-12'];
const KO=[
 '그린워싱은 소비자를 오도하여 상품이나 서비스가 실제보다 더 친환경적이라고 생각하게 만드는 것이다.',
 '그린워싱은 법으로 요구되어 무관한 환경 관련 주장(예를 들어 ‘프레온 가스 없음’)에서부터 과장(환경 관련 주장을 부풀리는 것), 사기에 이르기까지 다양하다.',
 '연구자들은 제품에 적힌 주장이 너무 모호하거나 오해의 소지가 있는 경우가 많다는 것을 보여 주었다.',
 '일부 제품은 ‘화학물질 무첨가’라고 표시되어 있지만, 실제로는 식물과 동물을 포함한 모든 것에 화학물질이 들어 있다.',
 '오해의 소지가 있거나 입증할 수 없는 주장이 가장 많은 제품은 세탁 세제, 가정용 세정제, 페인트였다.',
 '환경 옹호자들은 소비자들이 자신이 사는 제품의 환경 영향에 대해 충분히 정보를 얻도록 하려면 아직 갈 길이 멀다는 데 동의한다.',
 '그린워싱의 가장 흔한 이유는 환경 의식이 있는 소비자를 끌어들이기 위한 것이다.',
 '많은 소비자는 구매한 뒤에야 비로소 그 허위 주장을 알게 된다.',
 '따라서 그린워싱은 단기적으로는 판매를 늘릴 수 있다.',
 '그러나 소비자들이 자신이 속고 있다는 것을 알게 되면 이 전략은 심각하게 역효과를 낼 수 있다.'];
const W=[
 ['greenwashing','그린워싱(친환경인 척하기)','w',1,'Greenwashing'],['mislead','오도하다','w',1,'misleading'],['environmentally friendly','환경친화적인','p',1,'environmentally friendly'],
 ['range from A to B','A에서 B에 이르다','p',2,'ranges from'],['claim','주장(하다)','w',2,'claims'],['irrelevant','무관한','w',2,'irrelevant'],['puffery','과장(광고)','w',2,'puffery'],['exaggerate','과장하다','w',2,'exaggerating'],['fraud','사기','w',2,'fraud'],
 ['vague','모호한','w',3,'vague'],['misleading','오해의 소지가 있는','w',3,'misleading'],
 ['label','표시하다, 라벨을 붙이다','w',4,'labeled'],['contain','포함하다','w',4,'contains'],
 ['unverifiable','입증할 수 없는','w',5,'unverifiable'],['laundry detergent','세탁 세제','p',5,'laundry detergents'],
 ['advocate','옹호자','w',6,'advocates'],['adequately','충분히, 적절하게','w',6,'adequately'],['impact','영향','w',6,'impact'],['a long way to go','갈 길이 멀다','p',6,'a long way to go'],
 ['conscious','의식하는, 인식하는','w',7,'conscious'],['attract','끌어들이다','w',7,'attract'],
 ['find out about','~에 대해 알게 되다','p',8,'find out about'],['purchase','구매','w',8,'purchase'],
 ['in the short term','단기적으로','p',9,'in the short term'],['increase','늘리다','w',9,'increase'],
 ['backfire','역효과를 내다','w',10,'backfire'],['deceive','속이다','w',10,'deceived'],['strategy','전략','w',10,'strategy']];
ENG.add('o18-12',{u:0,n:'그린워싱',no:'18-12',src:'2024년 9월 고2 학평 · 올림포스 18강 12번',KO,W,
 sum:'==그린워싱==은 상품을 실제보다 친환경적으로 보이게 하는 것으로, 모호하거나 오해의 소지가 있는 주장이 많다. 주로 ==환경 의식 있는 소비자를 끌기 위해== 쓰이며 단기적으로 판매를 늘리지만, 속은 것을 알게 되면 ==역효과==를 낼 수 있다.',
 st:[['정의','①~②','==그린워싱 = 실제보다 친환경적으로 오도=='],['실태','③~⑥','주장이 ==모호·오해의 소지==, 입증 불가(세제·세정제·페인트)'],['이유·결과','⑦~⑩','==친환경 소비자를 끌기 위해== → 단기 판매↑, 들통나면 ==역효과==']],
 syn:[
  ['involve + 동명사 / 오도하다 A into -ing','Greenwashing involves ==misleading a consumer into thinking== a good or service is more environmentally friendly ==than it really is== — mislead A into -ing(A를 오도해 ~하게 하다), 비교 than절.'],
  ['range from A to B','Greenwashing ==ranges from== making claims required by law ~ ==to== puffery ==to== fraud — A에서 B에 이르다. required by law는 claims를 꾸미는 과거분사.'],
  ['분사구문 / 삽입','Researchers have shown that claims on products are often too vague or misleading — have shown(현재완료) + that절, too ~(너무 ~한).'],
  ['when the fact is ~','Some products are labeled “chemical-free,” ==when the fact is== everything contains chemicals — 대조(~인데 사실은). everything(단수) → contains.'],
  ['최상급 + 과거 동사','Products with the highest number of misleading or unverifiable claims ==were== laundry detergents ~ — 주어 Products(복수) → were.'],
  ['ensure + 목적어 + 보어 / adequately informed','to ensure shoppers are ==adequately informed== about the environmental impact — 부사 adequately + p.p.'],
  ['The most common reason ~ is to V','The most common reason for greenwashing ==is to attract== environmentally conscious consumers — to부정사 보어.'],
  ['until after / find out','Many consumers do not find out about the false claims ==until after== the purchase — ~한 뒤에야 비로소.'],
  ['they are being deceived','when consumers find out ==they are being deceived== — 현재진행 수동태(속임을 당하고 있다).']],
 tip:'**함정 주의** everything은 ==단수 취급(contains)==. Products with the highest number of ~ were laundry detergents의 주어는 Products(복수). ‘they are being deceived’는 ==현재진행 수동태==.',
 pts:['핵심: ==그린워싱 = 친환경인 척 오도==, 단기 이득 vs 들통나면 역효과','근거: 모호·오해 소지가 있는 주장, 소비자는 구매 후에야 알게 됨','빈칸 단골: attract environmentally conscious consumers / backfire','어법: mislead A into -ing, range from A to B, everything 단수, 진행 수동태'],
 tips:{'mislead A into -ing':'A를 오도해 ~하게 하다 — into 뒤는 동명사!','range from A to B':'A에서 B에 이르다 — from, to를 짝으로!','everything 단수':'everything은 단수 동사!','수 일치':'주어 Products(복수) → were.','진행 수동태':'are being p.p. = ~되고 있다.','부사 + p.p.':'adequately informed — 부사가 p.p.를 꾸며요.','어법 선택':'수 일치 · 동명사 · 수동태를 차례로 확인해요.','글의 내용':'핵심: 그린워싱은 단기적 이득, 장기적 위험.','영작':'mislead A into -ing와 everything 단수를 정확히!','어법 문장 고르기':'수 일치와 진행 수동태를 확인해요.','제목 추론':'글 전체를 한마디로 — 친환경인 척의 대가!'},
 B:[
  {g:'mislead A into -ing',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nGreenwashing involves misleading a consumer ⓐ(into / for) ⓑ(think / thinking) a good is more environmentally friendly than it really is.',o:['into – thinking','for – thinking','into – think','for – think','to – thinking'],a:0,e:'mislead A into -ing = A를 오도해 ~하게 하다.'},
  {g:'range from A to B',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nGreenwashing ranges from legally required claims [빈칸] puffery to fraud. (A에서 B에 이르다)',a:['to'],m:'to',e:'range from A to B = A에서 B에 이르다.'},
  {g:'과거분사 후치 수식',q:'making environmental claims required by law, and therefore irrelevant\n\n밑줄 친 __required__는 claims를 꾸미는 과거분사이다.',a:true,e:'claims가 ‘요구되는’ 수동 관계이므로 과거분사 후치 수식이에요.'},
  {g:'everything 단수',q:'Some products are labeled “chemical-free,” when the fact is everything contains chemicals.\n\n밑줄 친 __contains__가 단수인 이유로 알맞은 것은?',o:['everything이 단수 취급되어서','chemicals가 단수여서','products가 주어여서','fact가 복수여서','labeled가 단수여서'],a:0,e:'everything은 단수 취급 → contains.'},
  {g:'수 일치',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nProducts with the highest number of misleading claims ⓐ(was / were) laundry detergents, and shoppers ⓑ(is / are) often misled.',o:['were – are','was – are','were – is','was – is','being – are'],a:0,e:'ⓐ 주어 Products(복수) → were. ⓑ shoppers(복수) → are.'},
  {g:'부사 + p.p.',q:'to ensure shoppers are adequately informed about the environmental impact\n\n밑줄 친 __adequately__는 형용사 informed를 꾸미는 부사이다.',a:true,e:'adequately(부사) + informed(p.p.). 부사가 p.p.를 꾸며요.'},
  {g:'to부정사 보어',q:'The most common reason for greenwashing is to attract environmentally conscious consumers.\n\n밑줄 친 __to attract__의 용법으로 알맞은 것은?',o:['보어로 쓰인 명사적 용법','목적을 나타내는 부사적 용법','결과를 나타내는 부사적 용법','명사를 꾸미는 형용사적 용법','진주어로 쓰인 용법'],a:0,e:'is의 보어로 쓰인 to부정사(명사적 용법)예요.'},
  {g:'진행 수동태',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nwhen consumers find out they are [빈칸] deceived (속임을 당하고 있다)',a:['being'],m:'being',e:'현재진행 수동태: are being p.p.'},
  {g:'글의 내용',q:'윗글에서 그린워싱이 역효과를 낼 수 있는 경우로 알맞은 것은?\n\n'+S.join(' '),o:['소비자들이 자신이 속았다는 것을 알게 될 때','소비자가 제품을 구매하기 전','환경 규제가 사라질 때','제품 가격이 내려갈 때','광고를 하지 않을 때'],a:0,e:'⑩: 소비자들이 속고 있다는 것을 알게 되면 전략이 역효과를 낼 수 있어요.'}],
 X:[
  {k:'gr',marks:[['misleading','misleading'],['required','required'],['shown','shown'],['labeled','labeled'],['contains','contain']],e:'⑤ everything은 단수 취급 → contains.'},
  {k:'vo',marks:[['environmentally','environmentally'],['vague','vague'],['unverifiable','unverifiable'],['adequately','inadequately'],['deceived','deceived']],e:'④ 소비자가 ‘충분히(adequately)’ 정보를 얻도록 해야 한다는 흐름이에요. inadequately는 반대 의미예요.'},
  {k:'bl',ph:'attract environmentally conscious consumers',o:['attract environmentally conscious consumers','reduce the price of products','follow the law strictly','discourage people from shopping','test products in laboratories'],e:'그린워싱의 가장 흔한 이유는 환경 의식 있는 소비자를 끌어들이는 것이에요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['그린워싱은 단기적으로는 이득이지만 소비자가 알게 되면 역효과를 낼 수 있다','그린워싱은 법으로 금지되어 있다','친환경 제품은 가격이 더 비싸다','소비자는 환경에 관심이 없다','모든 화학물질은 해롭다'],e:'단기 이익과 장기 위험이 요지예요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['Greenwashing: A Risky Way to Sell Green','How to Recycle at Home','The Cheapest Paint on the Market','Why Detergents Are Dangerous','A Guide to Chemical Elements'],e:'친환경인 척하는 마케팅의 위험을 다루고 있어요.'},
  {k:'sm',s:'Greenwashing may (A) sales in the short term, but it can (B) when consumers learn they have been deceived.',o:['boost – backfire','cut – succeed','explain – improve','hide – disappear','copy – expand'],e:'(A) 판매를 늘리다(boost) (B) 역효과를 내다(backfire).'},
  {k:'ins',s:8,at:[5,6,7,8,9],e:'Therefore는 앞 문장(구매 후에야 허위 주장을 알게 됨)의 결과로 ‘단기적 판매 증가’를 이끌어요.'},
  {k:'ord',cut:[3,3,2],lab:['C','A','B'],e:'(C) 모호한 주장과 사례 → (A) 가장 흔한 이유와 소비자 반응 → (B) 단기 이익, 그러나 역효과.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nMany consumers do not find out about the false claims [빈칸] after the purchase. (~한 뒤에야)',a:['until'],m:'until',e:'not ~ until after = ~한 뒤에야 비로소.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['Everything contains chemicals, including plants and animals.','Everything contain chemicals, including plants and animals.','Everything containing chemicals, including plants and animals.','Everything are contained chemicals, including plants and animals.','Everything contains of chemicals, including plants and animals.'],a:0,e:'everything은 단수 → contains + 목적어.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nSome (A) on products are too (B) to be checked, so consumers are (C).',o:['claims – vague – misled','strategies – conscious – attracted','claims – verifiable – informed','labels – vague – informed','impacts – clear – misled'],a:0,e:'(A) claims(주장) (B) vague(모호한) (C) misled(오도된).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['mislead – deceive · fraud – deception','vague – unclear · puffery – exaggeration','increase – raise · attract – draw','irrelevant – unrelated · adequately – sufficiently','backfire – succeed · strategy – plan'],a:4,e:'backfire(역효과를 내다)와 succeed(성공하다)는 반대예요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 label이 윗글(표시하다)과 같은 뜻으로 쓰인 것은?',o:['They __label__ the product as organic.','Check the __label__ on the bottle.','The __label__ signed a new singer.','He wore a designer __label__.','Read the care __label__ carefully.'],a:0,e:'윗글의 labeled는 동사 ‘표시하다’. 나머지는 명사(라벨·음반사)예요.'}],
 M:[
  {k:'gr',marks:[['involves','involves'],['ranges','range'],['required','required'],['have','have'],['are','are']],e:'② 주어 Greenwashing(단수) → ranges from A to B.'},
  {k:'bl',ph:'this strategy can seriously backfire when consumers find out they are being deceived',o:['this strategy can seriously backfire when consumers find out they are being deceived','this strategy will always make companies richer','this strategy is rarely noticed by consumers','this strategy is encouraged by laws','this strategy lowers the cost of production'],e:'소비자가 속은 것을 알게 되면 그린워싱 전략은 역효과를 낳아요.'},
  {k:'ins',s:6,at:[4,5,6,7,8],e:'The most common reason for greenwashing is ~는 앞의 실태 설명 뒤에 이유를 소개하는 문장이에요.'}]
});
})();

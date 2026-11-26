// ===== 교과서 4과 본문 1~6 =====
// ----- 본문 1 · 리즈의 노트북 -----
(()=>{
const S=ENG.T['t1'];
const KO=[
 '스터디 모임에 가는 길에 리즈는 실수로 길에서 노트북을 떨어뜨려 심하게 손상시켰다.',
 '아직 켜지기는 하지만 화면이 깨졌고 일부 키는 작동하지 않는다.',
 '그녀는 그것을 수리 맡길 수 있지만, 그렇게 하기를 망설이고 있다.',
 '때때로 수리는 비싸고, 흔히 오래 걸린다.',
 '게다가 그 노트북은 약 5년이 되었다.',
 '이 경우, 오래된 것을 버리고 새것을 사는 것이 더 합리적인 선택처럼 보일 수도 있다.',
 '하지만 실제로는 그것이 최선이 아닐 수도 있다.',
 '리즈가 노트북을 쓰레기통에 버리면, 그녀는 심각한 문제인 전자 폐기물에 일조하게 될 것이다.'];
const W=[
 ['on one’s way to','~로 가는 길에','p',1,'On her way to'],['accidentally','실수로, 우연히','w',1,'accidentally'],['seriously','심하게','w',1,'seriously'],['damage','손상시키다','w',1,'damaging'],
 ['turn on','(전원이) 켜지다','p',2,'turns on'],['crack','금이 가게 하다','w',2,'cracked'],
 ['have it repaired','그것을 수리받다','p',3,'have it repaired'],['hesitate','망설이다','w',3,'hesitating'],
 ['repair','수리(하다)','w',4,'repairs'],['expensive','비싼','w',4,'expensive'],['besides','게다가','w',5,'Besides'],
 ['get rid of','~을 없애다, 버리다','p',6,'getting rid of'],['purchase','구매하다','w',6,'purchasing'],['reasonable','합리적인','w',6,'reasonable'],['option','선택(지)','w',6,'option'],
 ['in reality','실제로는','p',7,'In reality'],['contribute to','~에 기여하다, ~의 원인이 되다','p',8,'contributing to'],['e-waste','전자 폐기물','w',8,'e-waste']];
ENG.add('t1',{u:2,n:'리즈의 노트북',no:'본문 1',src:'교과서 4과 본문 1',KO,W,
 sum:'리즈는 노트북을 떨어뜨려 고장 냈고, 수리는 비싸고 오래 걸릴 수 있어 ==새것을 사는 것이 합리적==으로 보인다. 하지만 노트북을 그냥 버리면 ==전자 폐기물 문제==에 일조하게 된다.',
 st:[['상황','①~②','리즈가 노트북을 ==떨어뜨려 손상=='],['고민','③~⑥','==수리 vs 새로 구매==, 새로 사는 편이 합리적으로 보임'],['반전','⑦~⑧','그러나 버리면 ==전자 폐기물== 문제에 일조']],
 syn:[
  ['분사구문 (결과)','Liz accidentally dropped her laptop on the street, ==seriously damaging it== — 결과를 나타내는 현재분사구문.'],
  ['Although 양보 / 등위접속','==Although== it still turns on, the screen is cracked, and some keys are not working — 양보절 + 두 절 병렬.'],
  ['have + 목적어 + p.p.','She can ==have it repaired== — ~을 (남에게) 수리받다. 대부정사 to do so.'],
  ['동명사 주어 / might seem like','==getting rid of== the old one and ==purchasing== a new one ==might seem like== a more reasonable option — 동명사 주어(병렬), seem like + 명사.'],
  ['it may not be + the best thing to do','it may not be the best thing ==to do== — 형용사적 to부정사.'],
  ['If + 현재 / will + be -ing','==If== Liz throws her laptop in the trash, she ==will be contributing== to a serious problem — 조건절(현재), 미래진행. contribute to + 명사.']],
 tip:'**함정 주의** contribute to의 ==to는 전치사==(뒤에 명사/동명사). have it repaired는 ‘수리받다’(사역·수동), repair(원형)가 아니에요. She is hesitating to do so의 do so는 have it repaired를 대신.',
 pts:['핵심: ==노트북을 버리면 전자 폐기물에 일조==','흐름: 손상 → 수리 고민 → 새것이 합리적 → 하지만 e-waste 문제','빈칸 단골: contributing to a serious problem: e-waste','어법: 분사구문, have + 목적어 + p.p., 동명사 주어, 전치사 to'],
 tips:{'분사구문':'결과를 나타내는 현재분사구문 — ~, -ing.','have + 목적어 + p.p.':'~을 …받다(당하다) — 목적어가 수동 관계면 p.p.!','동명사 주어':'동명사 주어는 단수 취급해요.','contribute to':'contribute to의 to는 전치사 → 명사/동명사.','대부정사':'do so는 앞 동사구를 대신해요.','어법 선택':'분사 · 수 일치 · 전치사를 차례로 확인해요.','글의 내용':'핵심: 버리면 전자 폐기물 문제에 일조한다.','영작':'have + 목적어 + p.p.와 contribute to를 정확히!','어법 문장 고르기':'동명사 주어와 전치사 to를 확인해요.','제목 추론':'글 전체를 한마디로 — 버리기 전에 생각해 볼 것!','요지 파악':'글 전체를 한 문장으로 — 반전(however) 뒤가 핵심이에요.'},
 B:[
  {g:'분사구문',q:'..., seriously damaging it.\n\n밑줄 친 __damaging__ 분사구문의 의미로 알맞은 것은?',o:['그 결과 심하게 손상시켰다(결과)','~하기 위해서(목적)','~하는 동안(시간)','~이기 때문에(이유)','~이지만(양보)'],a:0,e:'앞 동작(떨어뜨림)의 결과를 덧붙이는 분사구문이에요.'},
  {g:'have + 목적어 + p.p.',q:'다음 문장의 ⓐ에서 어법에 맞는 것은?\n\nShe can have it ⓐ(repair / repaired).',o:['repaired','repair','repairing','to repair','repairs'],a:0,e:'it(노트북)은 ‘수리되는’ 대상이므로 have + 목적어 + p.p.'},
  {g:'대부정사',q:'she is hesitating to do so\n\n밑줄 친 __do so__는 have it repaired를 대신한다.',a:true,e:'do so = 앞에 나온 동사구(have it repaired)를 대신해요.'},
  {g:'Although 양보',q:'Although it still turns on, the screen is cracked.\n\n밑줄 친 __Although__의 뜻으로 알맞은 것은?',o:['~이지만','~ 때문에','~하는 동안','~한 이후로','~하자마자'],a:0,e:'Although = ~이지만(양보).'},
  {g:'동명사 주어',q:'다음 문장의 ⓐ에서 어법에 맞는 것은?\n\nGetting rid of the old one and purchasing a new one ⓐ(might / might be) seem like a more reasonable option.',o:['might','might be','might to','mights','is might'],a:0,e:'조동사 might 뒤에 동사원형 seem이 와요. (might be seem은 불가)'},
  {g:'seem like',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nA new one might seem [빈칸] a more reasonable option. (~처럼 보이다)',a:['like'],m:'like',e:'seem like + 명사 = ~처럼 보이다.'},
  {g:'if 조건절',q:'If Liz throws her laptop in the trash, she will be contributing to a serious problem.\n\n밑줄 친 __throws__가 현재형인 이유로 알맞은 것은?',o:['조건 부사절에서는 미래 대신 현재형을 쓰기 때문','주어가 복수이기 때문','과거의 일이기 때문','if가 가정법이기 때문','동사가 불규칙이기 때문'],a:0,e:'조건 부사절에서는 현재형이 미래를 대신해요.'},
  {g:'contribute to',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nshe will be contributing [빈칸] a serious problem: e-waste (~에 기여하다)',a:['to'],m:'to',e:'contribute to = ~에 기여하다, ~의 원인이 되다.'},
  {g:'글의 내용',q:'윗글에서 리즈가 노트북 수리를 망설이는 이유로 알맞지 않은 것은?\n\n'+S.join(' '),o:['수리점이 집에서 너무 멀어서','수리가 비쌀 수 있어서','수리에 오랜 시간이 걸릴 수 있어서','노트북이 5년 정도 되어서','새것을 사는 편이 합리적으로 보여서'],a:0,e:'집에서 먼 것은 언급되지 않았어요.'}],
 X:[
  {k:'gr',marks:[['dropped','dropped'],['damaging','damaging'],['turns','turn'],['hesitating','hesitating'],['getting','getting']],e:'③ 주어 it(단수) → turns.'},
  {k:'vo',marks:[['accidentally','accidentally'],['seriously','seriously'],['cracked','cracked'],['expensive','cheap'],['reasonable','reasonable']],e:'③ 수리를 망설이는 이유이므로 수리가 ‘비쌀(expensive)’ 수 있다는 흐름이에요.'},
  {k:'bl',ph:'she will be contributing to a serious problem',o:['she will be contributing to a serious problem','she will be saving a lot of money','she will be helping the environment','she will be learning how to repair','she will be solving all her problems'],e:'노트북을 쓰레기통에 버리면 전자 폐기물이라는 심각한 문제에 일조하게 돼요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['손상된 노트북을 그냥 버리면 전자 폐기물 문제에 일조하게 된다','새 노트북을 사는 것이 항상 최선이다','수리는 언제나 저렴하다','노트북은 5년 이상 쓰면 안 된다','스터디 모임은 중요하다'],e:'반전(However) 이후의 핵심은 버리면 전자 폐기물 문제에 일조한다는 점이에요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['To Repair or to Throw Away?','The History of Laptops','How to Study in Groups','Why New Is Always Better','The Joy of Shopping Online'],e:'수리할지 버릴지에 대한 고민이 중심이에요.'},
  {k:'sm',s:'Although buying a new laptop seems (A), throwing away the old one adds to the (B) problem.',o:['reasonable – e-waste','cheap – noise','difficult – study','old – school','popular – health'],e:'(A) 합리적인(reasonable) (B) 전자 폐기물(e-waste).'},
  {k:'ins',s:6,at:[3,4,5,6,7],e:'In reality, however는 앞(새것이 합리적으로 보임)과 반대되는 내용을 이끌어요.'},
  {k:'ord',cut:[2,3,2],lab:['C','A','B'],e:'(C) 수리가 비싸고 오래 걸림, 노트북이 오래됨 → (A) 새것이 합리적으로 보이나 최선이 아님 → (B) 버리면 전자 폐기물에 일조.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n그녀는 그것을 수리받을 수 있다.\n→ She can have it [빈칸]. (repair)',a:['repaired'],m:'repaired',e:'have + 목적어 + p.p.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['Getting rid of the old laptop might seem like a reasonable option.','Get rid of the old laptop might seem like a reasonable option.','Getting rid of the old laptop might seems like a reasonable option.','Getting rid of the old laptop might seem a reasonable option like.','To getting rid of the old laptop might seem like a reasonable option.'],a:0,e:'동명사 주어 + might + 동사원형(seem like).'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nLiz (A) dropped her laptop, (B) the screen. A repair can be (C) and slow.',o:['accidentally – damaging – expensive','seriously – cracking – cheap','accidentally – reasonable – fast','hesitating – damaging – expensive','accidentally – purchasing – free'],a:0,e:'(A) accidentally(실수로) (B) damaging(손상시키며) (C) expensive(비싼).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['besides – moreover · option – choice','purchase – buy · hesitate – pause','repair – fix · reasonable – sensible','damage – harm · seriously – badly','expensive – cheap · crack – break'],a:4,e:'expensive(비싼)와 cheap(싼)은 반대예요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 option이 윗글(선택(지))과 같은 뜻으로 쓰인 것은?',o:['Repair is a reasonable __option__.','The car has an extra __option__.','He has an __option__ to buy the house.','I had no __option__ but to wait.','Choose the best __option__ below.'],a:0,e:'윗글의 option = 선택(지). 나머지도 비슷하지만 ①이 윗글과 같은 쓰임이에요.'}],
 M:[
  {k:'gr',marks:[['dropped','dropped'],['turns','turns'],['have','has'],['hesitating','hesitating'],['might','might']],e:'③ 조동사 can 뒤에는 동사원형 have.'},
  {k:'bl',ph:'getting rid of the old one and purchasing a new one',o:['getting rid of the old one and purchasing a new one','keeping the old one and repairing it','borrowing a laptop from a friend','selling the laptop to a store','waiting until the screen heals'],e:'새것을 사는 것이 더 합리적으로 보일 수 있다는 내용이에요.'},
  {k:'ins',s:4,at:[2,3,4,5,6],e:'Besides는 앞에서 말한 수리의 단점(비싸고 오래 걸림)에 또 다른 이유(노트북이 오래됨)를 덧붙여요.'}]
});
})();

// ----- 본문 2 · 전자 폐기물이란 -----
(()=>{
const S=ENG.T['t2'];
const KO=[
 '전자 폐기물이란 정확히 무엇일까?',
 '이 용어는 버려진 전자 기기와 가전제품을 가리킨다.',
 '납과 같이 이 제품들에 들어 있는 유독 물질 때문에 전자 폐기물은 심각한 건강 및 환경 위험 요소이다.',
 '설상가상으로, 해마다 발생하는 전자 폐기물의 양은 놀라운 속도로 늘고 있다.',
 '2021년에 전 세계에서 총 5,740만 미터톤의 전자 폐기물이 발생했는데, 이는 전자 폐기물에 대한 자료가 처음 수집된 해인 2014년보다 37% 증가한 것이었다.',
 '전문가들은 2030년까지 연간 발생하는 전자 폐기물의 양이 불과 16년 만에 두 배가 될 것이라고 예측한다.',
 '이런 이유로 이 문제를 해결하기 위한 노력이 이루어지고 있는데, 그 대부분은 제품을 더 쉽게 수리할 수 있게 만드는 데 초점을 맞추고 있다.',
 '전 세계의 몇 가지 실용적인 접근 방식을 살펴보자.'];
const W=[
 ['exactly','정확히','w',1,'exactly'],['refer to','~을 가리키다','p',2,'refers to'],['discard','버리다','w',2,'discarded'],['appliance','가전제품','w',2,'appliances'],
 ['due to','~ 때문에','p',3,'Due to'],['toxic','유독한','w',3,'toxic'],['contain','포함하다','w',3,'contained'],['hazard','위험 (요소)','w',3,'hazard'],
 ['to make matters worse','설상가상으로','p',4,'To make matters worse'],['alarming','놀라운, 걱정스러운','w',4,'alarming'],['rate','속도, 비율','w',4,'rate'],
 ['generate','발생시키다','w',5,'generated'],['worldwide','전 세계적으로','w',5,'worldwide'],['collect','수집하다','w',5,'collected'],
 ['predict','예측하다','w',6,'predict'],['annually','매년','w',6,'annually'],['double','두 배가 되다','w',6,'doubled'],
 ['for this reason','이런 이유로','p',7,'For this reason'],['address','해결하다, 다루다','w',7,'address'],['be focused on','~에 초점을 맞추다','p',7,'focused on'],
 ['practical','실용적인','w',8,'practical'],['approach','접근 (방식)','w',8,'approaches']];
ENG.add('t2',{u:2,n:'전자 폐기물이란',no:'본문 2',src:'교과서 4과 본문 2',KO,W,
 sum:'==전자 폐기물==은 버려진 전자 기기·가전제품으로 ==유독 물질== 때문에 건강·환경에 위험하며, 발생량이 ==빠르게 늘고 있다==. 이를 해결하려는 노력은 대부분 ==제품을 쉽게 수리하게 만드는 것==에 초점을 둔다.',
 st:[['정의','①~②','==e-waste = 버려진 전자 기기·가전제품=='],['위험','③~⑥','==유독 물질==, ==급증==(2021년 5,740만 톤, 2030년 두 배 예상)'],['대응','⑦~⑧','==수리하기 쉽게== 만드는 노력, 세계의 접근 방식 소개']],
 syn:[
  ['과거분사 후치 / due to','==Due to== toxic materials ==contained== in these products — 전치사구 due to, 과거분사 후치 수식.'],
  ['과거분사 + 분사 / the amount of','the amount of e-waste ==produced== each year ==is== increasing — 과거분사 후치, 주어 the amount(단수) → is.'],
  ['which 계속적 / the year when','~, ==which== was a 37% increase from 2014, ==the year when== data about e-waste was first collected — 계속적 which(앞 내용), 관계부사 when.'],
  ['by + 시점 / will have p.p.','by 2030, the amount of e-waste generated annually ==will have doubled== in just 16 years — 미래완료.'],
  ['be + -ing 진행 수동','efforts ==are being made== to address this problem — 현재진행 수동태.'],
  ['most of which','~, ==most of which== are focused on making products easier to repair — 부분 표현 + 관계대명사.']],
 tip:'**함정 주의** efforts ==are being made==는 현재진행 수동태. most of which are focused on에서 which는 efforts를 가리키므로 ==are(복수)==. the year when data ~는 관계부사 when.',
 pts:['핵심: ==전자 폐기물은 유독하고 빠르게 늘고 있어 수리가 쉬운 제품을 만들려는 노력이 있다==','근거: 2021년 5,740만 톤, 2014년 대비 37% 증가, 2030년 두 배','빈칸 단골: easier to repair / alarming rate','어법: 과거분사 후치, 계속적 which, 진행 수동, most of which'],
 tips:{'과거분사 후치':'명사 뒤 과거분사 — materials contained in ~','수 일치':'the amount(단수) → is.','계속적 which':'콤마 뒤 which는 앞 내용을 받아요.','관계부사 when':'the year when ~ — 완전한 절.','진행 수동태':'are being p.p. = ~되고 있다.','most of which':'most of which + 동사 — 선행사에 맞춰 수 일치.','어법 선택':'수 일치 · 분사 · 관계사를 차례로 확인해요.','글의 내용':'핵심: 전자 폐기물은 위험하고 빠르게 늘고 있다.','영작':'과거분사 후치와 진행 수동을 정확히!','어법 문장 고르기':'수 일치와 분사를 확인해요.','제목 추론':'글 전체를 한마디로 — 늘어나는 전자 폐기물!','요지 파악':'글 전체를 한 문장으로 — 위험성과 증가, 그리고 대응.'},
 B:[
  {g:'due to',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n[빈칸] to toxic materials, e-waste is a serious hazard. (~ 때문에)',a:['due'],m:'Due',e:'due to = ~ 때문에.'},
  {g:'과거분사 후치',q:'toxic materials contained in these products\n\n밑줄 친 __contained__는 materials를 꾸미는 과거분사이다.',a:true,e:'materials가 ‘들어 있는’ 수동 관계 → 과거분사 후치 수식.'},
  {g:'수 일치',q:'다음 문장의 ⓐ에서 어법에 맞는 것은?\n\nThe amount of e-waste produced each year ⓐ(is / are) increasing at an alarming rate.',o:['is','are','be','been','being'],a:0,e:'주어 The amount(단수) → is.'},
  {g:'to make matters worse',q:'To make matters worse, the amount ... is increasing.\n\n밑줄 친 부분의 뜻으로 알맞은 것은?',o:['설상가상으로','다행히도','게다가 기쁘게도','문제를 해결하기 위해','사실을 말하자면'],a:0,e:'to make matters worse = 설상가상으로.'},
  {g:'계속적 which',q:'..., which was a 37% increase from 2014\n\n밑줄 친 __which__는 앞 문장 전체 내용을 가리킨다.',a:true,e:'콤마 뒤 which는 앞 절 전체를 받아요.'},
  {g:'관계부사 when',q:'2014, the year when data about e-waste was first collected\n\n밑줄 친 __when__ 뒤에 완전한 절이 온 이유로 알맞은 것은?',o:['관계부사이기 때문에','관계대명사이기 때문에','의문사이기 때문에','접속사 that이기 때문에','전치사이기 때문에'],a:0,e:'the year를 선행사로 하는 관계부사 when이라 완전한 절이 와요.'},
  {g:'미래완료',q:'다음 빈칸에 알맞은 말을 쓰시오.\n\nExperts predict that by 2030, the amount will have [빈칸] in just 16 years. (double)',a:['doubled'],m:'doubled',e:'will have p.p. (미래완료): will have doubled.'},
  {g:'진행 수동태',q:'다음 문장의 ⓐ에서 어법에 맞는 것은?\n\nEfforts are ⓐ(being made / making) to address this problem.',o:['being made','making','made','been making','to make'],a:0,e:'efforts는 ‘이루어지는’ 수동 관계 → are being made.'},
  {g:'글의 내용',q:'윗글에서 전자 폐기물이 위험한 이유로 제시된 것은?\n\n'+S.join(' '),o:['납 같은 유독 물질이 들어 있어 건강과 환경에 해로워서','소리가 너무 시끄러워서','가격이 비싸서','부피가 너무 작아서','재활용이 쉬워서'],a:0,e:'③: 납과 같은 유독 물질 때문에 건강·환경 위험 요소예요.'}],
 X:[
  {k:'gr',marks:[['refers','refers'],['discarded','discarded'],['contained','contained'],['is','are'],['increasing','increasing']],e:'③ 주어 e-waste(단수) → is.'},
  {k:'vo',marks:[['toxic','toxic'],['hazard','hazard'],['alarming','alarming'],['increase','decrease'],['practical','practical']],e:'④ 전자 폐기물 발생량이 늘고 있으므로 ‘증가(increase)’예요.'},
  {k:'bl',ph:'the amount of e-waste produced each year is increasing at an alarming rate',o:['the amount of e-waste produced each year is increasing at an alarming rate','the amount of e-waste has stayed the same for years','e-waste is easily recycled worldwide','e-waste is decreasing at a slow rate','most e-waste is produced by experts'],e:'바로 뒤에서 2021년의 증가율을 제시해요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['전자 폐기물은 유독하고 빠르게 늘고 있어 해결 노력이 필요하다','전자 폐기물은 곧 사라질 것이다','전자 기기는 오래 쓸수록 위험하다','전문가들은 전자 폐기물을 무시한다','수리는 이미 완벽히 해결되었다'],e:'위험성과 증가 추세, 그리고 대응 노력이 핵심이에요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['E-Waste: A Growing Danger','The Birth of Smartphones','Why Metals Are Useful','How to Build a Computer','The Future of Space Travel'],e:'전자 폐기물의 위험과 증가를 다룬 글이에요.'},
  {k:'sm',s:'E-waste contains (A) materials and is growing (B), so efforts focus on making products easier to repair.',o:['toxic – rapidly','useful – slowly','cheap – quietly','rare – badly','heavy – suddenly'],e:'(A) 유독한(toxic) (B) 빠르게(rapidly).'},
  {k:'ins',s:6,at:[3,4,5,6,7],e:'For this reason(이런 이유로)은 앞의 위험성·증가 예측을 이유로 해결 노력을 소개해요.'},
  {k:'ord',cut:[2,3,2],lab:['B','C','A'],e:'(B) 유독 물질로 인한 위험과 증가 → (C) 구체적 수치와 예측 → (A) 해결 노력과 접근 방식 소개.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nTo make [빈칸] worse, the amount of e-waste is increasing. (설상가상으로)',a:['matters'],m:'matters',e:'to make matters worse.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['Efforts are being made to address this problem.','Efforts are been made to address this problem.','Efforts is being made to address this problem.','Efforts are being making to address this problem.','Efforts being made to address this problem are.'],a:0,e:'현재진행 수동태: are being made.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nE-waste means (A) electronic devices. Its (B) materials make it a (C) to health.',o:['discarded – toxic – hazard','generated – practical – approach','discarded – annual – rate','collected – toxic – appliance','discarded – toxic – approach'],a:0,e:'(A) discarded(버려진) (B) toxic(유독한) (C) hazard(위험).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['discard – throw away · generate – produce','address – deal with · predict – forecast','annually – yearly · worldwide – global','alarming – worrying · practical – useful','toxic – harmless · hazard – danger'],a:4,e:'toxic(유독한)과 harmless(무해한)는 반대예요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 address가 윗글(해결하다)과 같은 뜻으로 쓰인 것은?',o:['We must __address__ this problem.','Write your home __address__ here.','The president will __address__ the nation.','What is your email __address__?','She gave a long __address__.'],a:0,e:'윗글의 address = (문제를) 다루다, 해결하다.'}],
 M:[
  {k:'gr',marks:[['refers','refers'],['contained','contained'],['is','is'],['produced','produced'],['are','is']],e:'⑦ 주어 efforts(복수) → are being made.'},
  {k:'bl',ph:'most of which are focused on making products easier to repair',o:['most of which are focused on making products easier to repair','most of which are aimed at banning electronics','most of which fail to reduce the waste','most of which ignore the environment','most of which focus on making new devices'],e:'해결 노력의 대부분은 제품을 더 쉽게 수리하게 만드는 데 초점을 맞춰요.'},
  {k:'ins',s:4,at:[2,3,4,5,6],e:'In 2021 ~는 앞 문장(놀라운 속도로 증가)에 대한 구체적 수치 근거예요.'}]
});
})();

// ----- 본문 3 · 수리할 권리 운동 -----
(()=>{
const S=ENG.T['t3'];
const KO=[
 '많은 사람이 손상된 기기를 버리는 한 가지 이유는 그것들이 수리하기에 너무 어렵기 때문이다.',
 '예를 들어, 기기가 분해하기 어려울 수도 있고, 제조업체가 공식 서비스 센터로 가져와서 수리받도록 요구할 수도 있다.',
 '많은 회사가 고객이 손상된 물품을 제3자 수리점에 가져가는 것을 허용하지 않는다.',
 '게다가 어떤 제품들은 일부러 수리하기 어렵게 설계된다.',
 '소비자들이 물품을 수리하는 방법에 대한 설명서나 수리를 마치는 데 필요한 부품을 구하지 못하는 일은 흔하다.',
 '수리할 권리 운동은 다음과 같은 내용을 명시한 법안을 촉진함으로써 이러한 문제들을 해결하려 하고 있다. 제품을 소유하고 있다면, 직접 수리하거나 자신이 선택한 기술자에게 가져갈 권리가 있다.',
 '소비자의 권리를 보호하기 위해 수리할 권리 운동은 네 가지를 요구한다.',
 '첫째, 회사는 자사 제품에 대한 정보를 모든 사람이 이용할 수 있게 해야 한다.',
 '둘째, 개인을 포함한 제3자가 수리에 필요한 부품과 도구를 얻을 수 있어야 한다.',
 '셋째, 소비자가 자신의 기기에 맞춤 소프트웨어를 설치하는 것을 막는 관행은 법으로 금지되어야 한다.',
 '마지막으로, 이 운동은 제조업체가 수리가 가능한 한 쉽도록 기기를 설계할 것을 요구한다.',
 '이 운동의 옹호자들은 이러한 목표가 모두 달성되면 전자 폐기물이 훨씬 적게 발생할 것이라고 말한다.',
 '그들의 노력 덕분에 미국의 40개 이상의 주가 수리할 권리 관련 입법 작업을 시작했다.',
 '이 운동은 더 많은 나라가 동참하면서 유럽에서도 점점 영향력을 키우고 있다.'];
const W=[
 ['dispose of','~을 버리다','p',1,'dispose of'],['damaged','손상된','w',1,'damaged'],
 ['disassemble','분해하다','w',2,'disassemble'],['require','요구하다','w',2,'require'],['official','공식의','w',2,'official'],
 ['third-party','제3자의','w',3,'third-party'],['allow','허용하다','w',3,'allow'],
 ['intentionally','고의로, 일부러','w',4,'intentionally'],
 ['acquire','얻다, 입수하다','w',5,'acquire'],['instruction','설명(서), 지시','w',5,'instructions'],['unable to V','~할 수 없는','p',5,'unable to'],
 ['movement','(사회) 운동','w',6,'movement'],['promote','촉진하다, 추진하다','w',6,'promoting'],['legislation','법률, 입법','w',6,'legislation'],['technician','기술자','w',6,'technician'],
 ['demand','요구하다','w',7,'demands'],['available','이용 가능한','w',8,'available'],['obtain','얻다','w',9,'obtain'],['tool','도구','w',9,'tools'],
 ['prohibit','금지하다','w',10,'prohibited'],['install','설치하다','w',10,'installing'],['custom','맞춤형의','w',10,'custom'],
 ['advocate','옹호자','w',12,'Advocates'],['accomplish','달성하다','w',12,'accomplished'],
 ['thanks to','~ 덕분에','p',13,'Thanks to'],['gain influence','영향력을 얻다','p',14,'gaining a growing influence'],['cause','대의, 운동','w',14,'cause']];
ENG.add('t3',{u:2,n:'수리할 권리 운동',no:'본문 3',src:'교과서 4과 본문 3',KO,W,
 sum:'제품이 ==수리하기 어렵게 만들어져== 사람들이 버리므로, ==수리할 권리 운동==은 정보·부품·도구 제공, 맞춤 소프트웨어 설치 허용, ==쉽게 수리되는 설계==를 요구한다. 이 운동은 미국과 유럽에서 ==영향력이 커지고 있다==.',
 st:[['문제','①~⑤','수리가 ==어렵게 설계==·제한되어 사람들이 버림'],['운동','⑥~⑦','==수리할 권리 운동== — 법안 추진, 네 가지 요구'],['요구','⑧~⑪','==정보 공개==, ==부품·도구 제공==, ==소프트웨어 설치 허용==, ==쉬운 설계=='],['성과','⑫~⑭','목표 달성 시 ==전자 폐기물 감소==, 미국·유럽에서 확산']],
 syn:[
  ['One reason ~ is that','==One reason== many people dispose of their damaged devices ==is that== they are too difficult to repair — 이유 + be동사 + that절. too ~ to repair.'],
  ['may require that + 주어 + (should) 동사원형','its manufacturer may ==require that it be brought== to an official service center — 요구 동사 뒤 that절은 (should) 동사원형.'],
  ['allow A to V','Many companies do not ==allow their customers to take== their damaged items — allow + 목적어 + to V.'],
  ['What is more / be designed to V','==What is more==, some products are intentionally ==designed to be== difficult to repair — 게다가, 수동 + to부정사.'],
  ['It is common for A to V','==It is common for consumers to be unable to acquire== the instructions ~ or the parts ==needed== to complete repairs — 가주어 it, 의미상 주어 for consumers, 과거분사 후치.'],
  ['by -ing / that states','trying to solve these problems ==by promoting== legislation ==that states== the following — by -ing(수단), 주격 관계대명사 that(선행사 legislation 단수).'],
  ['should be p.p. / should be able to','third parties ==should be able to obtain== the parts and tools ==required== to make repairs / the practice ~ ==should be prohibited== by law — 조동사 수동.'],
  ['demands that + 동사원형','it ==demands that manufacturers design== devices in a way that makes repairs as easy as possible — demand 뒤 that절의 동사원형(design).'],
  ['if 조건절 + will','==if== all these goals ==are accomplished==, far less e-waste ==will be generated== — 조건절 현재(수동), 주절 미래(수동).']],
 tip:'**함정 주의** ==demands that manufacturers design==, ==require that it be brought==처럼 요구·주장·명령 동사 뒤 that절은 ==(should) 동사원형==. promoting legislation ==that states==의 선행사는 legislation(단수). It is common ==for consumers== to ~의 for는 의미상 주어.',
 pts:['핵심: ==수리할 권리 운동 = 수리 가능성을 높이도록 법으로 요구==','네 가지 요구: 정보 공개 / 부품·도구 제공 / 소프트웨어 설치 허용 / 쉬운 설계','빈칸 단골: right to fix it yourself / make repairs as easy as possible','어법: require/demand that + 원형, allow A to V, 가주어 it, 과거분사 후치'],
 tips:{'that절 동사원형':'demand/require that + 주어 + (should) 동사원형!','allow A to V':'allow + 목적어 + to V.','가주어 it':'It is common for A to V — 의미상 주어는 for A.','과거분사 후치':'parts needed / tools required — 수동 후치 수식.','수단의 by -ing':'by + 동명사 = ~함으로써.','관계대명사 수 일치':'that states — 선행사 legislation(단수).','조동사 수동':'should be p.p. — 조동사 뒤 be + p.p.','어법 선택':'that절 동사 · 수 일치 · 분사를 차례로 확인해요.','글의 내용':'핵심: 수리할 권리 운동의 네 가지 요구.','영작':'demand that + 동사원형을 정확히!','어법 문장 고르기':'요구 동사 뒤 that절을 확인해요.','제목 추론':'글 전체를 한마디로 — 내 물건을 고칠 권리!','요지 파악':'글 전체를 한 문장으로 — 수리할 권리 운동의 목적과 요구.'},
 B:[
  {g:'that절 동사원형',q:'다음 문장의 ⓐ에서 어법에 맞는 것은?\n\nIts manufacturer may require that it ⓐ(be brought / is brought) to an official service center.',o:['be brought','is brought','was brought','being brought','brings'],a:0,e:'require 뒤 that절 → (should) 동사원형: be brought.'},
  {g:'allow A to V',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nMany companies do not allow their customers [빈칸] take their damaged items to third-party repair shops.',a:['to'],m:'to',e:'allow + 목적어 + to V.'},
  {g:'What is more',q:'What is more, some products are intentionally designed to be difficult to repair.\n\n밑줄 친 __What is more__와 의미가 가장 가까운 것은?',o:['Moreover','However','For example','As a result','In contrast'],a:0,e:'what is more = 게다가(Moreover).'},
  {g:'가주어 it',q:'It is common for consumers to be unable to acquire the instructions.\n\n밑줄 친 __for consumers__는 to be unable to acquire의 의미상 주어이다.',a:true,e:'It is common for A to V = A가 ~하는 것은 흔하다. for A가 의미상 주어예요.'},
  {g:'과거분사 후치',q:'the parts needed to complete repairs\n\n밑줄 친 __needed__는 parts를 꾸미는 과거분사이다.',a:true,e:'parts가 ‘필요한’ 수동 관계(needed) → 과거분사 후치.'},
  {g:'관계대명사 수 일치',q:'다음 문장의 ⓐ에서 어법에 맞는 것은?\n\nby promoting legislation that ⓐ(states / state) the following',o:['states','state','stating','to state','stated'],a:0,e:'선행사 legislation(단수) → states.'},
  {g:'demand that',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nit demands that manufacturers [빈칸] devices in a way that makes repairs easy. (design)',a:['design'],m:'design',e:'demand + that + 주어 + (should) 동사원형 → design.'},
  {g:'조동사 수동',q:'다음 문장의 ⓐ에서 어법에 맞는 것은?\n\nThe practice of preventing consumers from installing custom software should ⓐ(be prohibited / prohibit) by law.',o:['be prohibited','prohibit','prohibited','be prohibiting','to be prohibited'],a:0,e:'관행이 ‘금지되는’ 수동 관계 → should be prohibited.'},
  {g:'글의 내용',q:'윗글에서 수리할 권리 운동의 요구로 언급되지 않은 것은?\n\n'+S.join(' '),o:['수리 서비스의 가격을 모두 인하할 것','제품 정보를 모든 사람이 이용하게 할 것','제3자도 부품과 도구를 얻을 수 있게 할 것','맞춤 소프트웨어 설치를 막지 말 것','수리가 쉽도록 기기를 설계할 것'],a:0,e:'가격 인하는 언급되지 않았어요.'}],
 X:[
  {k:'gr',marks:[['dispose','dispose'],['require','requires'],['allow','allow'],['promoting','promoting'],['prohibited','prohibited']],e:'② 조동사 may 뒤에는 동사원형 require.'},
  {k:'vo',marks:[['intentionally','intentionally'],['unable','able'],['obtain','obtain'],['prohibited','prohibited'],['accomplished','accomplished']],e:'③ 문제 상황이므로 소비자는 설명서를 구하지 ‘못하는(unable)’ 경우가 흔해요.'},
  {k:'bl',ph:'the right to fix it yourself or bring it to a technician of your choice',o:['the right to fix it yourself or bring it to a technician of your choice','the duty to throw it away after use','the chance to buy a newer model','the permission to copy the software','the order to return it to the manufacturer'],e:'수리할 권리 운동은 제품을 직접 수리하거나 원하는 기술자에게 맡길 권리를 요구해요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['수리할 권리 운동은 소비자가 제품을 쉽게 고칠 수 있도록 법과 제도를 요구한다','수리할 권리는 제조업체의 의무이다','수리는 공식 서비스 센터에서만 가능하다','수리점은 점점 사라지고 있다','맞춤 소프트웨어는 금지되어야 한다'],e:'소비자의 수리할 권리를 보장하려는 운동이 핵심이에요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['The Right to Repair: Fighting for Fixable Products','How to Open a Repair Shop','Why Manufacturers Always Win','The Story of Official Service Centers','Software for Beginners'],e:'수리할 권리 운동을 다룬 글이에요.'},
  {k:'sm',s:'The right-to-repair movement demands that products be (A) to fix and that consumers have (B) to information, parts, and tools.',o:['easy – access','hard – debts','cheap – fear','new – time','small – taxes'],e:'(A) 고치기 쉬운(easy) (B) 접근 권한(access).'},
  {k:'ins',s:6,at:[4,5,6,7,8],e:'To protect the rights of consumers ~는 앞(운동의 소개)에 이어 구체적 요구 네 가지를 제시하기 직전에 와요.'},
  {k:'ord',cut:[3,3,3],lab:['B','C','A'],e:'(B) 수리를 어렵게 하는 사례 → (C) 수리할 권리 운동의 네 가지 요구 → (A) 성과와 확산.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n그 운동은 소비자가 수리하는 것을 허용하라고 요구한다.\n→ The movement demands that companies [빈칸] consumers repair their items. (allow)',a:['allow'],m:'allow',e:'demand + that + 주어 + (should) 동사원형.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['It demands that manufacturers design devices to be easy to repair.','It demands that manufacturers designs devices to be easy to repair.','It demands that manufacturers designed devices to be easy to repair.','It demands manufacturers to that design devices easy to repair.','It demands that manufacturers designing devices to be easy to repair.'],a:0,e:'demand 뒤 that절의 동사는 (should) 동사원형(design).'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nThe movement (A) legislation so that people can (B) the parts and tools and (C) their devices themselves.',o:['promotes – obtain – repair','prohibits – install – dispose','demands – accomplish – discard','promotes – acquire – throw','allows – obtain – damage'],a:0,e:'(A) promotes(촉진하다) (B) obtain(얻다) (C) repair(수리하다).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['acquire – obtain · demand – require','accomplish – achieve · official – formal','advocate – supporter · technician – specialist','prohibit – ban · intentionally – deliberately','allow – forbid · custom – tailored'],a:4,e:'allow(허용하다)와 forbid(금지하다)는 반대예요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 cause가 윗글(대의, 운동)과 같은 뜻으로 쓰인 것은?',o:['Many countries are joining the __cause__.','Smoking is a __cause__ of cancer.','What was the __cause__ of the fire?','Stress can __cause__ headaches.','There is no __cause__ for worry.'],a:0,e:'윗글의 cause = 대의, 운동. 나머지는 원인·초래하다·이유예요.'}],
 M:[
  {k:'gr',marks:[['dispose','dispose'],['allow','allow'],['designed','designed'],['is','are'],['trying','trying']],e:'⑤ 가주어 It(단수) → It is common.'},
  {k:'bl',ph:'make information about their products available to everyone',o:['make information about their products available to everyone','keep information about their products secret','sell information about their products','limit information to official centers','delete information about old products'],e:'첫째 요구는 제품 정보를 모든 사람에게 이용 가능하게 하는 것이에요.'},
  {k:'ins',s:11,at:[8,9,10,11,12],e:'Advocates of the movement say ~는 네 가지 요구(마지막 Finally) 뒤에 목표 달성의 효과를 말해요.'}]
});
})();

// ----- 본문 4 · 프랑스의 수리 가능성 지수 -----
(()=>{
const S=ENG.T['t4'];
const KO=[
 '2021년 1월, 프랑스 정부는 모든 제조업체가 스마트폰, 노트북, 세탁기, 텔레비전, 잔디깎이의 다섯 가지 전자 기기 및 가전제품 범주에 ‘수리 가능성 지수’를 포함하도록 요구하는 법안을 통과시켰다.',
 '0부터 10까지의 점수와 색상 표시 체계를 사용하여, 이 지수는 소비자가 제품을 구매하기 전에 그것이 얼마나 쉽게 수리될 수 있는지 볼 수 있게 해 준다.',
 '이 지수는 수리 정보의 이용 가능성, 분해의 용이성, 예비 부품의 가격을 포함한 여러 요소를 고려한다.',
 '밝은 빨간색 라벨의 낮은 숫자는 제품을 수리하기 어려울 것임을 의미하는 반면, 초록색 라벨의 높은 숫자는 제품이 수리하기 쉽다는 것을 나타낸다.',
 '이 지수는 두 가지 긍정적인 효과를 내도록 설계되었다.',
 '첫째, 소비자가 새 기기와 가전제품을 구매할 때 정보에 입각한 결정을 내릴 수 있게 한다.',
 '둘째, 제조업체가 제품을 더 쉽게 수리할 수 있게 만들도록 장려한다.',
 '그 결과, 전자·전기 제품이 매립지에 덜 쌓이면서 프랑스는 가까운 미래에 더 지속 가능한 사회로 전환할 수 있을 것으로 기대할 수 있다.',
 '그러나 이 지수의 영향은 프랑스를 훨씬 넘어 퍼질 가능성이 높다.',
 '우리는 세계 경제 속에 살고 있으며, 프랑스 시장에 가전제품을 팔고자 하는 어떤 회사든 수리 가능성 지수에 따라 제품에 표시해야 할 것이다.',
 '이 지수가 성공한다면, 전 세계 더 많은 나라가 프랑스의 혁신적인 선례를 따르는 것을 기대할 수 있다.'];
const W=[
 ['pass','통과시키다','w',1,'passed'],['bill','법안','w',1,'bill'],['require','요구하다','w',1,'requires'],['manufacturer','제조업체','w',1,'manufacturer'],['repairability','수리 가능성','w',1,'repairability'],['appliance','가전제품','w',1,'appliances'],
 ['range from A to B','A에서 B에 이르다','p',2,'ranging from'],['color-coded','색상으로 구분된','w',2,'color-coded'],['let A V','A가 ~하게 하다','p',2,'lets consumers see'],
 ['take into account','고려하다','p',3,'takes into account'],['availability','이용 가능성','w',3,'availability'],['spare part','예비 부품','p',3,'spare parts'],
 ['indicate','나타내다','w',4,'indicates'],['whereas','~인 반면','w',4,'whereas'],
 ['positive','긍정적인','w',5,'positive'],['informed decision','정보에 입각한 결정','p',6,'informed decisions'],['encourage','장려하다','w',7,'encourages'],
 ['landfill','매립지','w',8,'landfills'],['make a transition to','~로 전환하다','p',8,'make a transition to'],['sustainable','지속 가능한','w',8,'sustainable'],
 ['spread','퍼지다','w',9,'spread'],['label','표시하다','w',10,'label'],['according to','~에 따라','p',10,'according to'],
 ['anticipate','기대하다, 예상하다','w',11,'anticipate'],['innovative','혁신적인','w',11,'innovative']];
ENG.add('t4',{u:2,n:'프랑스의 수리 가능성 지수',no:'본문 4',src:'교과서 4과 본문 4',KO,W,
 sum:'프랑스는 2021년 제조업체가 제품에 ==수리 가능성 지수==(0~10점, 색상)를 표시하도록 법으로 정했다. 이는 소비자의 ==현명한 선택==과 제조업체의 ==쉬운 수리 설계==를 장려하며, 다른 나라로도 ==확산될 가능성==이 높다.',
 st:[['제도','①~④','프랑스 ==수리 가능성 지수==: 점수와 색상으로 수리 용이성 표시'],['효과','⑤~⑧','소비자의 ==정보에 입각한 결정==, 제조업체의 ==수리 용이 설계==, 쓰레기 감소'],['확산','⑨~⑪','==세계 경제==라서 프랑스 밖으로도 영향, 다른 나라가 따를 가능성']],
 syn:[
  ['require that + 주어 + 동사원형','a bill that ==requires that every manufacturer include== a “repairability index” — 요구 동사 뒤 that절의 동사원형(include).'],
  ['Using + 분사구문 / as well as','==Using== a score ranging from 0 to 10, ==as well as== a color-coded system, the index ==lets consumers see== how easily the product can be repaired — 분사구문, 사역(let + 목적어 + 원형), how + 부사 + S + V.'],
  ['including + 병렬','several elements, ==including== the availability of repair information, the ease of disassembly, and the price of spare parts — 전치사 including + 병렬 명사구.'],
  ['whereas 대조 / means that','A low number ~ ==means that== repairing the product will be difficult, ==whereas== a high number ~ indicates that ~ — 대조 접속사 whereas.'],
  ['be designed to V','The index ==was designed to have== two positive effects — 수동 + 목적의 to부정사.'],
  ['with + 목적어 + -ing','==with fewer electronic and electrical items ending up== in its landfills — with + 목적어 + 현재분사(~하면서).'],
  ['be likely to V / far beyond','The impact of the index ~ ==is likely to spread== far beyond France — be likely to V.'],
  ['anticipate -ing / following','we can ==anticipate seeing== more countries ==following== France’s lead — anticipate + 동명사, see + 목적어 + 현재분사.']],
 tip:'**함정 주의** requires ==that every manufacturer include==는 동사원형(요구 동사). lets consumers ==see==(원형)처럼 let은 사역동사. with fewer items ==ending up==은 ‘with + 목적어 + -ing’ 분사 구문이에요.',
 pts:['핵심: ==프랑스의 수리 가능성 지수 = 소비자 선택과 제조업체 설계를 바꾸고 세계로 확산 가능==','근거: 0~10점, 색상 라벨, 정보 이용 가능성·분해 용이성·부품 가격 고려','빈칸 단골: make informed decisions / easier to repair','어법: require that + 원형, 사역 let, with + 목적어 + -ing, be likely to'],
 tips:{'that절 동사원형':'require + that + 주어 + (should) 동사원형.','사역동사 let':'let + 목적어 + 동사원형.','분사구문':'Using ~ — 주어가 the index이고 능동이므로 -ing.','whereas':'whereas = ~인 반면(대조).','with + 목적어 + -ing':'~하면서(부대 상황) — 목적어와 분사가 능동 관계.','be likely to':'be likely to V = ~할 가능성이 높다.','어법 선택':'that절 · 사역 · 분사를 차례로 확인해요.','글의 내용':'핵심: 점수와 색상으로 수리 용이성을 보여 주는 지수.','영작':'require that + 원형, with + 목적어 + -ing를 정확히!','어법 문장 고르기':'요구 동사 뒤 that절을 확인해요.','제목 추론':'글 전체를 한마디로 — 수리 가능성에 점수를!','요지 파악':'글 전체를 한 문장으로 — 지수의 효과와 확산 가능성.'},
 B:[
  {g:'that절 동사원형',q:'다음 문장의 ⓐ에서 어법에 맞는 것은?\n\nThe bill requires that every manufacturer ⓐ(include / includes) a repairability index.',o:['include','includes','included','including','to include'],a:0,e:'require 뒤 that절 → (should) 동사원형.'},
  {g:'사역동사 let',q:'the index lets consumers see how easily the product can be repaired\n\n밑줄 친 __see__는 사역동사 let의 목적보어(원형부정사)이다.',a:true,e:'let + 목적어 + 동사원형.'},
  {g:'분사구문',q:'Using a score ranging from 0 to 10, ... the index lets consumers see ...\n\n밑줄 친 __Using__의 의미로 알맞은 것은?',o:['~을 사용하여','~을 사용했기 때문에','~을 사용하더라도','~을 사용하자마자','~을 사용하기 전에'],a:0,e:'방법을 나타내는 분사구문(~을 사용하여).'},
  {g:'including',q:'several elements, including the availability of repair information, the ease of disassembly, and the price of spare parts\n\n밑줄 친 __including__ 뒤에는 세 개의 명사구가 병렬로 이어진다.',a:true,e:'including + A, B, and C 병렬.'},
  {g:'whereas',q:'A low number on a bright red label means ..., whereas a high number on a green label indicates ...\n\n밑줄 친 __whereas__의 뜻으로 알맞은 것은?',o:['~인 반면','~ 때문에','~하는 동안','~하기 위해','~한다면'],a:0,e:'whereas = ~인 반면(대조).'},
  {g:'be designed to V',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nThe index was designed [빈칸] have two positive effects.',a:['to'],m:'to',e:'be designed to V = ~하도록 설계되다.'},
  {g:'with + 목적어 + -ing',q:'with fewer electronic and electrical items ending up in its landfills\n\n밑줄 친 __ending up__의 설명으로 알맞은 것은?',o:['with + 목적어 + 현재분사(부대 상황)','동명사 주어','과거분사','명사','진행형 동사'],a:0,e:'items가 ‘끝나게 되는’ 능동 관계 → with + 목적어 + -ing.'},
  {g:'be likely to',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nThe impact of the index is [빈칸] to spread far beyond France. (~할 가능성이 높다)',a:['likely'],m:'likely',e:'be likely to V = ~할 가능성이 높다.'},
  {g:'글의 내용',q:'윗글에서 수리 가능성 지수가 고려하는 요소로 언급되지 않은 것은?\n\n'+S.join(' '),o:['제품의 디자인 색상','수리 정보의 이용 가능성','분해의 용이성','예비 부품의 가격','제품의 무게'],a:0,e:'고려 요소는 정보 이용 가능성, 분해 용이성, 부품 가격이에요. 색상은 표시 방식이에요.'}],
 X:[
  {k:'gr',marks:[['passed','passed'],['requires','requires'],['ranging','ranging'],['lets','let'],['indicates','indicates']],e:'② 주어 the index(단수) → lets.'},
  {k:'vo',marks:[['repairability','repairability'],['availability','availability'],['bright','bright'],['positive','negative'],['sustainable','sustainable']],e:'③ 지수는 ‘긍정적인(positive)’ 두 가지 효과를 내도록 설계되었어요.'},
  {k:'bl',ph:'make a transition to a more sustainable society',o:['make a transition to a more sustainable society','make a decision to stop producing devices','make a profit from selling old devices','make a promise to buy new devices','make a mistake in measuring waste'],e:'쓰레기가 줄면서 더 지속 가능한 사회로 전환할 수 있다는 내용이에요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['프랑스의 수리 가능성 지수는 소비자와 제조업체를 변화시키고 다른 나라로도 확산될 수 있다','프랑스는 모든 전자 제품을 금지했다','지수는 수리 비용을 정해 준다','제조업체는 지수를 표시할 의무가 없다','지수는 다섯 가지 제품에만 효과가 있다'],e:'지수의 효과와 확산 가능성이 핵심이에요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['France’s Repairability Index: A Model for the World','How to Fix a Washing Machine','The History of French Cuisine','Why Lawn Mowers Are Dangerous','A Guide to Online Shopping'],e:'프랑스의 수리 가능성 지수와 확산을 다룬 글이에요.'},
  {k:'sm',s:'France’s repairability index helps consumers make (A) choices and pushes manufacturers to design (B) products.',o:['informed – repairable','random – disposable','rushed – expensive','fashionable – heavy','local – foreign'],e:'(A) 정보에 입각한(informed) (B) 수리 가능한(repairable).'},
  {k:'ins',s:8,at:[5,6,7,8,9],e:'The impact of the index, however는 앞(프랑스 내의 효과)과 대조하여 프랑스 밖으로의 영향을 소개해요.'},
  {k:'ord',cut:[3,3,2],lab:['C','A','B'],e:'(C) 점수·색상 라벨의 의미 → (A) 두 가지 긍정적 효과 → (B) 세계 경제와 다른 나라로의 확산.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nThe index [빈칸] consumers see how easily the product can be repaired. (let)',a:['lets'],m:'lets',e:'주어 The index(단수) + lets + 목적어 + 원형.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['The bill requires that every manufacturer include a repairability index.','The bill requires that every manufacturer includes a repairability index.','The bill requires every manufacturer include that a repairability index.','The bill require that every manufacturer include a repairability index.','The bill requires that every manufacturer to include a repairability index.'],a:0,e:'require 뒤 that절 동사원형(include).'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nThe index (A) several elements, like (B) of repair information and the price of (C) parts.',o:['takes into account – availability – spare','indicates – difficulty – broken','requires – spread – extra','takes into account – label – spare','anticipates – availability – repair'],a:0,e:'(A) takes into account(고려하다) (B) availability(이용 가능성) (C) spare(예비의).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['anticipate – expect · innovative – creative','encourage – support · indicate – show','pass – approve · landfill – dump','spread – extend · label – mark','positive – negative · sustainable – lasting'],a:4,e:'positive(긍정적인)와 negative(부정적인)는 반대예요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 pass가 윗글(통과시키다)과 같은 뜻으로 쓰인 것은?',o:['The parliament will __pass__ the bill.','Please __pass__ me the salt.','Time seems to __pass__ quickly.','She failed to __pass__ the exam.','A car tried to __pass__ us.'],a:0,e:'윗글의 passed a bill = 법안을 통과시키다.'}],
 M:[
  {k:'gr',marks:[['passed','passed'],['requires','requires'],['takes','takes'],['means','means'],['was designed','were designed']],e:'⑤ 주어 The index(단수) → was designed.'},
  {k:'bl',ph:'make informed decisions when purchasing new devices and appliances',o:['make informed decisions when purchasing new devices and appliances','forget about the price of new devices','buy the cheapest device available','avoid shopping for appliances','copy what other people buy'],e:'첫째 효과: 소비자가 정보에 입각한 결정을 내릴 수 있다.'},
  {k:'ins',s:10,at:[6,7,8,9,10],e:'If the index is successful ~는 마지막에 다른 나라로의 확산 기대를 말하는 결론이에요.'}]
});
})();

// ----- 본문 5 · 수리 카페 -----
(()=>{
const S=ENG.T['t5'];
const KO=[
 '소비자가 알맞은 도구와 재료, 그리고 몇 가지 유용한 조언을 받으면, 전자 제품에 생기는 손상의 상당 부분을 스스로 수리할 수 있다.',
 '그것이 수리 카페가 시작된 이유이다.',
 '그곳은 사람들이 함께 모여 고장 난 기기를 고칠 수 있는 무료 만남의 장소이다.',
 '카페에는 기술 조언을 해 주고 물건 고치는 법을 가르쳐 줄 수 있는 자원봉사 전문가들이 근무한다.',
 '최초의 수리 카페는 2009년 네덜란드의 암스테르담에서 문을 열었다.',
 '그것은 대단한 성공이어서 그 아이디어는 곧 이웃 나라들로 퍼졌다.',
 '오래지 않아 전 세계 30개국 이상에 수리 카페가 생겼다.',
 '손상된 물품이 전자 폐기물이 되는 것을 막는 것과 더불어, 이 카페들은 사람들이 전자 제품의 수리와 유지에 대한 매우 귀중한 기술과 지식을 나누도록 장려하기도 한다.',
 '그것들은 점점 더 인기를 얻고 있으며, 자원봉사에 등록하는 사람들도 늘고 있다.',
 '사람들이 배울 수 있는 공간을 제공함으로써, 수리 카페는 개인이 기기를 유지하고 수명을 늘릴 수 있게 한다.',
 '더 나아가, 그곳은 우리의 미래에 크게 긍정적인 영향을 줄 수 있는 지속 가능한 관점을 키워 준다.'];
const W=[
 ['material','재료','w',1,'materials'],['occur','일어나다, 발생하다','w',1,'occurs'],['by oneself','스스로, 혼자 힘으로','p',1,'by themselves'],
 ['gather together','함께 모이다','p',3,'gather together'],['broken','고장 난','w',3,'broken'],
 ['staff','직원으로 근무하다','w',4,'staffed'],['volunteer','자원봉사자','w',4,'volunteer'],['technical','기술적인','w',4,'technical'],
 ['neighboring','이웃의','w',6,'neighboring'],['spread','퍼지다','w',6,'spread'],['before long','오래지 않아','p',7,'Before long'],
 ['prevent A from -ing','A가 ~하지 못하게 막다','p',8,'preventing damaged items from becoming'],['invaluable','매우 귀중한','w',8,'invaluable'],['maintenance','유지(보수)','w',8,'maintenance'],
 ['popularity','인기','w',9,'popularity'],['sign up','등록하다','p',9,'signing up'],
 ['enable A to V','A가 ~할 수 있게 하다','p',10,'enable individuals to maintain'],['extend','늘리다, 연장하다','w',10,'extend'],['life span','수명','w',10,'life spans'],
 ['furthermore','더 나아가','w',11,'Furthermore'],['foster','키우다, 촉진하다','w',11,'foster'],['sustainable','지속 가능한','w',11,'sustainable'],['perspective','관점','w',11,'perspective']];
ENG.add('t5',{u:2,n:'수리 카페',no:'본문 5',src:'교과서 4과 본문 5',KO,W,
 sum:'==수리 카페==는 사람들이 모여 고장 난 기기를 ==자원봉사 전문가==의 도움으로 고치는 무료 공간이다. 2009년 암스테르담에서 시작해 ==30개국 이상==으로 퍼졌으며, ==전자 폐기물을 막고 기술을 나누며 지속 가능한 관점==을 키운다.',
 st:[['등장','①~④','도구·재료·조언만 있으면 스스로 수리 → ==수리 카페=='],['확산','⑤~⑦','2009년 ==암스테르담==에서 시작 → ==30개국 이상=='],['의의','⑧~⑪','==폐기물 방지==, ==지식 공유==, ==수명 연장==, ==지속 가능한 관점==']],
 syn:[
  ['When + 수동 / along with','==When consumers are given== the right tools and materials, ==along with== some helpful advice, they can repair much of the damage ==that occurs== to electronic products — 수동태 4형식(be given), 관계절 수 일치(damage 단수 → occurs).'],
  ['That is why ~','==That is why== Repair Cafés were started — 그것이 ~한 이유이다(결과).'],
  ['관계부사 where','free meeting places ==where== people can gather together and fix their broken devices — 장소 선행사 + where + 완전한 절.'],
  ['수동 staffed by / how to V','The cafés ==are staffed by== volunteer experts who can give technical advice and teach people ==how to fix== things — 수동 staffed by, 의문사 + to V.'],
  ['such a success that','It was ==such a success that== the idea soon spread — 매우 ~해서 …했다.'],
  ['there were / over','==Before long==, there were Repair Cafés ==in over 30 countries== — 존재 구문.'],
  ['Along with + -ing','==Along with preventing== damaged items ==from becoming== e-waste — prevent A from -ing.'],
  ['with + 목적어 + -ing','They continue to grow in popularity, ==with more and more people signing up== to volunteer — with + 목적어 + -ing(~하면서).'],
  ['By -ing / enable A to V','==By providing== spaces where people can learn, Repair Cafés ==enable individuals to maintain== their devices — 수단의 by -ing, enable + 목적어 + to V.']],
 tip:'**함정 주의** ==the damage that occurs==의 선행사 damage는 단수라 occurs. prevent A from -ing의 from 뒤는 동명사(becoming). with more and more people ==signing up==은 부대상황(목적어와 능동 관계).',
 pts:['핵심: ==수리 카페 = 모여서 함께 고치는 공간 → 폐기물 방지, 지식 공유, 지속 가능성==','흐름: 아이디어 → 2009 암스테르담 → 30개국 확산 → 의의','빈칸 단골: share their invaluable skills and knowledge / sustainable perspective','어법: 관계부사 where, such ~ that, prevent A from -ing, with + 목적어 + -ing'],
 tips:{'4형식 수동':'be given + 직접목적어 — 수동태에서도 목적어가 남아요.','관계절 수 일치':'damage(단수) → occurs.','That is why':'That is why + 절 = 그래서 ~한 것이다.','관계부사 where':'where 뒤에 완전한 절.','such ~ that':'such a + 명사 + that = 매우 ~해서 …하다.','prevent A from -ing':'A가 ~하지 못하게 막다 — from + 동명사.','with + 목적어 + -ing':'부대상황 — 목적어와 분사가 능동이면 -ing.','어법 선택':'수 일치 · 관계사 · 동명사를 차례로 확인해요.','글의 내용':'핵심: 수리 카페는 함께 고치고 배우는 공간.','영작':'prevent A from -ing와 such ~ that을 정확히!','어법 문장 고르기':'관계부사와 동명사를 확인해요.','제목 추론':'글 전체를 한마디로 — 함께 고치는 카페!','요지 파악':'글 전체를 한 문장으로 — 수리 카페의 확산과 의의.'},
 B:[
  {g:'관계절 수 일치',q:'다음 문장의 ⓐ에서 어법에 맞는 것은?\n\nthey can repair much of the damage that ⓐ(occurs / occur) to electronic products',o:['occurs','occur','occurring','to occur','occurred'],a:0,e:'선행사 the damage(단수) → occurs.'},
  {g:'That is why',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nThat is [빈칸] Repair Cafés were started. (그것이 ~한 이유이다)',a:['why'],m:'why',e:'That is why + 결과 절.'},
  {g:'관계부사 where',q:'free meeting places where people can gather together\n\n밑줄 친 __where__ 뒤에는 완전한 절이 온다.',a:true,e:'장소 선행사 places를 받는 관계부사 where → 완전한 절.'},
  {g:'수동태 staffed by',q:'The cafés are staffed by volunteer experts.\n\n밑줄 친 부분의 뜻으로 알맞은 것은?',o:['자원봉사 전문가들이 근무한다','자원봉사 전문가들을 고용한다','자원봉사 전문가들이 없다','자원봉사 전문가들을 모집한다','자원봉사 전문가들이 방문한다'],a:0,e:'be staffed by = ~가 근무하다(직원으로 일하다).'},
  {g:'such ~ that',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nIt was such a success [빈칸] the idea soon spread to neighboring countries.',a:['that'],m:'that',e:'such a + 명사 + that = 매우 ~해서 …하다.'},
  {g:'prevent A from -ing',q:'Along with preventing damaged items from becoming e-waste\n\n밑줄 친 __from__ 뒤에는 동명사가 온다.',a:true,e:'prevent A from -ing.'},
  {g:'with + 목적어 + -ing',q:'다음 문장의 ⓐ에서 어법에 맞는 것은?\n\nThey continue to grow in popularity, with more and more people ⓐ(signing up / signed up) to volunteer.',o:['signing up','signed up','sign up','to sign up','signs up'],a:0,e:'people이 ‘등록하는’ 능동 관계 → with + 목적어 + -ing.'},
  {g:'enable A to V',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nRepair Cafés enable individuals [빈칸] maintain their devices. (A가 ~할 수 있게 하다)',a:['to'],m:'to',e:'enable + 목적어 + to V.'},
  {g:'글의 내용',q:'윗글에서 최초의 수리 카페에 대한 설명으로 알맞은 것은?\n\n'+S.join(' '),o:['2009년 네덜란드 암스테르담에서 문을 열었다','2020년 프랑스에서 문을 열었다','미국에서 처음 생겼다','자원봉사 없이 운영되었다','유료로 운영되었다'],a:0,e:'⑤: 2009년 네덜란드 암스테르담에서 문을 열었어요.'}],
 X:[
  {k:'gr',marks:[['given','given'],['occurs','occur'],['gather','gather'],['staffed','staffed'],['opened','opened']],e:'① 선행사 the damage(단수) → occurs.'},
  {k:'vo',marks:[['technical','technical'],['neighboring','neighboring'],['invaluable','worthless'],['popularity','popularity'],['sustainable','sustainable']],e:'③ 카페는 ‘매우 귀중한(invaluable)’ 기술과 지식을 나누도록 장려해요.'},
  {k:'bl',ph:'enable individuals to maintain their devices and extend their life spans',o:['enable individuals to maintain their devices and extend their life spans','force people to buy more devices','prevent volunteers from teaching','replace broken devices with new ones','reduce the use of electronics entirely'],e:'수리 카페는 개인이 기기를 유지하고 수명을 늘릴 수 있게 해요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['수리 카페는 함께 고치고 배우며 지속 가능한 관점을 키우는 공간이다','수리 카페는 새 기기를 판매한다','수리 카페는 네덜란드에만 있다','수리 카페는 전문가만 이용한다','수리 카페는 곧 사라질 것이다'],e:'수리 카페의 확산과 의의가 핵심이에요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['Repair Cafés: Fixing Things Together','How to Buy a Cheap Laptop','The Secret of Dutch Cooking','Why Coffee Is Popular','The Future of Space Travel'],e:'수리 카페를 소개한 글이에요.'},
  {k:'sm',s:'Repair Cafés let people (A) broken devices with the help of volunteers, which reduces e-waste and (B) a sustainable perspective.',o:['fix – fosters','sell – ignores','hide – blocks','discard – weakens','buy – lowers'],e:'(A) 고치다(fix) (B) 키우다(fosters).'},
  {k:'ins',s:5,at:[3,4,5,6,7],e:'It was such a success ~의 It은 앞 문장의 최초의 수리 카페를 가리켜요. ⑤ 바로 뒤에 와요.'},
  {k:'ord',cut:[3,3,3],lab:['B','C','A'],e:'(B) 수리 카페 소개와 첫 카페 → (C) 확산과 의의 → (A) 인기와 앞으로의 영향.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nBefore [빈칸], there were Repair Cafés in over 30 countries. (오래지 않아)',a:['long'],m:'long',e:'before long = 오래지 않아.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['They are free places where people can fix their broken devices.','They are free places which people can fix their broken devices.','They are free places where people can fix them their broken devices.','They are free places in where people can fix their broken devices.','They are free places what people can fix their broken devices.'],a:0,e:'장소 선행사 + 관계부사 where + 완전한 절.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nRepair Cafés are (A) by volunteers and help people (B) their devices, which extends their (C).',o:['staffed – maintain – life spans','prevented – gather – materials','staffed – sign up – perspectives','gathered – spread – popularity','founded – extend – maintenance'],a:0,e:'(A) staffed(근무하는) (B) maintain(유지하다) (C) life spans(수명).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['invaluable – priceless · foster – promote','gather – assemble · extend – lengthen','neighboring – nearby · perspective – viewpoint','technical – specialized · furthermore – moreover','popularity – fame · invaluable – worthless'],a:4,e:'invaluable(매우 귀중한)과 worthless(가치 없는)는 반대예요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 spread가 윗글(퍼지다)과 같은 뜻으로 쓰인 것은?',o:['The news will __spread__ quickly.','Please __spread__ butter on the bread.','She __spread__ the map on the table.','A disease can __spread__ by air.','The farmers __spread__ seeds.'],a:0,e:'윗글의 spread = (아이디어가) 퍼지다. ①이 같은 쓰임이에요.'}],
 M:[
  {k:'gr',marks:[['given','given'],['started','started'],['staffed','staffed'],['spread','spread'],['continue','continues']],e:'⑨ 주어 They(복수) → continue.'},
  {k:'bl',ph:'foster a sustainable perspective that can have a huge positive impact on our future',o:['foster a sustainable perspective that can have a huge positive impact on our future','encourage people to buy more things','discourage people from learning','replace human skills with machines','make repairs more expensive'],e:'수리 카페는 미래에 긍정적 영향을 줄 지속 가능한 관점을 키워 줘요.'},
  {k:'ins',s:7,at:[5,6,7,8,9],e:'Along with preventing ~는 앞(확산)에 이어 수리 카페의 의의를 소개하는 문장이에요.'}]
});
})();

// ----- 본문 6 · 수리가 일상인 세상 -----
(()=>{
const S=ENG.T['t6'];
const KO=[
 '노트북을 떨어뜨린 소녀 리즈를 기억하는가?',
 '그녀가 손상된 기기와 가전제품을 수리하는 것이 일상의 당연한 일부인 세상에 산다고 상상해 보자.',
 '그렇다면 그녀의 선택지는 비싼 수리비를 내거나 노트북을 버리고 새것을 사는 것으로 제한되지 않을 것이다.',
 '그녀는 필요한 부품을 온라인으로 주문해 직접 교체할 수 있을 것이다.',
 '아니면 손상된 기기를 가장 가까운 수리 카페에 가져가 고치는 방법에 대한 조언을 얻을 수도 있을 것이다.',
 '수리 가능성 점수가 높은 노트북을 샀을 가능성이 크므로, 수리하는 것은 아마 그리 어렵지 않을 것이다.',
 '사실 이 지속 가능한 세상은 우리가 함께 노력하면 모두가 누릴 수 있는 미래이다.',
 '더욱 중요한 것은, 그것이 사람들이 전자 폐기물을 훨씬 적게 만들어 내어 우리 지구를 모두에게 더 깨끗하고 건강한 곳으로 만드는 미래라는 점이다.'];
const W=[
 ['imagine','상상하다','w',2,'Imagine'],['simply','단순히, 그저','w',2,'simply'],['appliance','가전제품','w',2,'appliances'],['part of everyday life','일상의 일부','p',2,'part of everyday life'],
 ['limit','제한하다','w',3,'limited'],['option','선택(지)','w',3,'options'],['throw away','버리다','p',3,'throwing away'],
 ['necessary','필요한','w',4,'necessary'],['replace','교체하다','w',4,'replace'],
 ['alternatively','그렇지 않으면, 대안으로','w',5,'Alternatively'],['nearest','가장 가까운','w',5,'nearest'],
 ['repairability','수리 가능성','w',6,'repairability'],['likely','아마','w',6,'likely'],
 ['sustainable','지속 가능한','w',7,'sustainable'],['work toward','~을 위해 노력하다','p',7,'work toward'],
 ['generate','만들어 내다','w',8,'generate'],['planet','지구, 행성','w',8,'planet']];
ENG.add('t6',{u:2,n:'수리가 일상인 세상',no:'본문 6',src:'교과서 4과 본문 6',KO,W,
 sum:'수리가 ==일상==인 세상이라면 리즈는 ==부품을 온라인으로 주문==해 직접 고치거나 ==수리 카페==에서 도움을 받을 수 있다. 이 ==지속 가능한 세상==은 함께 노력하면 만들 수 있고, ==전자 폐기물이 줄어== 지구가 더 깨끗해진다.',
 st:[['가정','①~③','수리가 ==일상==인 세상을 상상 — 선택지가 ==넓어짐=='],['예시','④~⑥','==부품 주문·직접 교체==, ==수리 카페==, 높은 수리 가능성 점수'],['결론','⑦~⑧','==함께 노력하면 누릴 미래==, 전자 폐기물↓ → 지구가 더 깨끗해짐']],
 syn:[
  ['관계대명사 who','Liz, the girl ==who dropped== her laptop — 동격 + 주격 관계대명사.'],
  ['Imagine + 가정 / where','==Imagine== she lived in a world ==where== repairing damaged devices and appliances ==was== simply part of everyday life — Imagine + 과거(가정), 관계부사 where, 동명사 주어 → was.'],
  ['가정법 과거 (If that were the case)','==If that were the case==, her options ==wouldn’t be limited== to paying for expensive repairs or throwing away her laptop and buying a new one — If + 과거(were), would + 원형. be limited to + 동명사(병렬).'],
  ['would be able to','She ==would be able to order== the necessary parts online and replace them herself — 가정법 주절, 병렬 동사.'],
  ['could + how to V','she ==could bring== her damaged device to the nearest Repair Café to get advice ==on how to fix== it — could(가능성), 전치사 on + how to V.'],
  ['as 이유 / would have p.p.','~ wouldn’t be very hard, ==as she likely would have purchased== a laptop with a high repairability score — as(이유), 추측의 would have p.p.'],
  ['a future (that) we can enjoy','this sustainable world is a future ==we can all enjoy== ==if we work toward it== together — 목적격 관계대명사 생략, 조건절.'],
  ['a future in which / making','a future ==in which== people will generate far less e-waste, ==making== our planet a cleaner, healthier place — 전치사 + 관계대명사, 결과의 분사구문.']],
 tip:'**함정 주의** ==If that were the case==에서 be동사는 were(가정법 과거). repairing damaged devices ==was== part of everyday life — 동명사 주어는 단수. a future ==in which== people will generate의 in which 뒤는 완전한 절.',
 pts:['핵심: ==수리가 일상인 세상 = 선택지가 많고 전자 폐기물이 줄어드는 지속 가능한 세상==','예시: 부품 온라인 주문·교체, 수리 카페, 높은 수리 가능성 점수','빈칸 단골: a future we can all enjoy if we work toward it together','어법: 가정법 과거, 동명사 주어, in which, 결과의 분사구문'],
 tips:{'관계대명사 who':'동격 + who절 — 사람 선행사.','관계부사 where':'a world where + 완전한 절.','동명사 주어':'동명사 주어는 단수 취급 → was.','가정법 과거':'If + were, would + 원형.','be limited to':'be limited to + 명사/동명사 (to는 전치사).','전치사 + 관계대명사':'in which + 완전한 절.','결과의 분사구문':'~, making ~ = 그 결과 ~하게 만든다.','어법 선택':'가정법 · 수 일치 · 전치사를 차례로 확인해요.','글의 내용':'핵심: 수리가 일상이면 선택지가 넓어지고 폐기물이 줄어든다.','영작':'가정법 과거와 be limited to를 정확히!','어법 문장 고르기':'가정법 과거 어순을 확인해요.','제목 추론':'글 전체를 한마디로 — 수리가 일상이 되는 미래!','요지 파악':'글 전체를 한 문장으로 — 함께 노력해 만드는 지속 가능한 세상.'},
 B:[
  {g:'관계대명사 who',q:'Do you remember Liz, the girl who dropped her laptop?\n\n밑줄 친 __who__의 선행사는 the girl이다.',a:true,e:'사람 선행사 the girl을 받는 주격 관계대명사 who.'},
  {g:'동명사 주어',q:'다음 문장의 ⓐ에서 어법에 맞는 것은?\n\nImagine she lived in a world where repairing damaged devices ⓐ(was / were) simply part of everyday life.',o:['was','were','is','are','been'],a:0,e:'동명사 주어(repairing ~)는 단수 취급, 과거 시제 → was.'},
  {g:'가정법 과거',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nIf that [빈칸] the case, her options wouldn’t be limited to paying for expensive repairs.',a:['were'],m:'were',e:'가정법 과거: If + were, would + 원형.'},
  {g:'be limited to',q:'her options wouldn’t be limited to paying for expensive repairs\n\n밑줄 친 __to__ 뒤에 동명사가 온 이유로 알맞은 것은?',o:['to가 전치사이기 때문에','to가 to부정사이기 때문에','paying이 명사이기 때문에','limited가 동사이기 때문에','would 때문에'],a:0,e:'be limited to의 to는 전치사라 동명사/명사가 와요.'},
  {g:'would be able to',q:'다음 문장의 ⓐ에서 어법에 맞는 것은?\n\nShe would be able to order the necessary parts online and ⓐ(replace / replaces) them herself.',o:['replace','replaces','replaced','replacing','to replacing'],a:0,e:'would be able to order와 병렬 → replace.'},
  {g:'how to V',q:'to get advice on how to fix it\n\n밑줄 친 __on how to fix it__에서 on은 전치사이다.',a:true,e:'전치사 on + 의문사 how + to부정사(명사구).'},
  {g:'추측의 would have p.p.',q:'as she likely would have purchased a laptop with a high repairability score\n\n밑줄 친 부분의 의미로 알맞은 것은?',o:['아마 ~을 샀을 것이다(과거 추측)','~을 사야 했다','~을 살 수 없었다','~을 살 것이다','~을 샀을 리가 없다'],a:0,e:'would have p.p. = ~했을 것이다(과거 추측).'},
  {g:'결과의 분사구문',q:'..., making our planet a cleaner, healthier place for everyone.\n\n밑줄 친 __making__ 분사구문의 의미로 알맞은 것은?',o:['그 결과 ~하게 만든다','~하기 위해','~하는 동안','~하기 전에','~일지라도'],a:0,e:'결과를 덧붙이는 분사구문이에요.'},
  {g:'글의 내용',q:'윗글에서 리즈가 수리가 일상인 세상에서 할 수 있는 일로 언급되지 않은 것은?\n\n'+S.join(' '),o:['중고 노트북을 팔아 큰돈을 버는 것','부품을 온라인으로 주문해 교체하는 것','가장 가까운 수리 카페에서 조언을 얻는 것','수리 가능성 점수가 높은 노트북을 사는 것','선택지가 비싼 수리나 새 구매로 한정되지 않는 것'],a:0,e:'중고 노트북 판매는 언급되지 않았어요.'}],
 X:[
  {k:'gr',marks:[['remember','remember'],['dropped','dropped'],['lived','lived'],['was','were'],['limited','limited']],e:'② 동명사 주어 repairing ~(단수) → was.'},
  {k:'vo',marks:[['simply','simply'],['limited','limited'],['necessary','necessary'],['nearest','farthest'],['sustainable','sustainable']],e:'⑤ 손상된 기기를 ‘가장 가까운(nearest)’ 수리 카페에 가져간다는 흐름이에요.'},
  {k:'bl',ph:'a future we can all enjoy if we work toward it together',o:['a future we can all enjoy if we work toward it together','a future we cannot reach at all','a future in which only experts can repair','a future that has already arrived','a future that depends on new laws only'],e:'지속 가능한 세상은 우리가 함께 노력하면 누릴 수 있는 미래예요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['수리가 일상이 되면 선택지가 넓어지고 전자 폐기물이 줄어 지구가 더 깨끗해진다','리즈는 노트북을 새로 샀다','수리 카페는 일부 나라에서만 가능하다','수리 가능성 점수는 필요 없다','전자 폐기물은 늘 수밖에 없다'],e:'함께 노력해 만드는 지속 가능한 세상이 핵심이에요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['A Future Where Repair Is Part of Daily Life','Liz’s Trip Abroad','The Cost of New Laptops','How to Study with Friends','The History of Cafés'],e:'수리가 일상이 된 미래를 그린 글이에요.'},
  {k:'sm',s:'If repairing devices were part of daily life, people could (A) their own devices and (B) e-waste.',o:['fix – reduce','throw away – increase','hide – ignore','sell – create','copy – avoid'],e:'(A) 고치다(fix) (B) 줄이다(reduce).'},
  {k:'ins',s:3,at:[1,2,3,4,5],e:'She would be able to order ~의 She는 리즈이며, 앞 문장(선택지가 제한되지 않을 것)의 구체적 예시예요.'},
  {k:'ord',cut:[2,2,2],lab:['C','A','B'],e:'(C) 선택지가 제한되지 않을 것 + 부품 주문 → (A) 수리 카페, 수리 가능성 점수 → (B) 함께 노력하는 미래.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nHer options wouldn’t be limited [빈칸] paying for expensive repairs. (~로 제한되다)',a:['to'],m:'to',e:'be limited to + 명사/동명사.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['If that were the case, her options wouldn’t be limited to paying for repairs.','If that was the case, her options won’t be limited to paying for repairs.','If that were the case, her options wouldn’t limited to paying for repairs.','If that is the case, her options wouldn’t be limited to paying for repairs.','If that were the case, her options wouldn’t be limited paying for repairs.'],a:0,e:'가정법 과거: If + were, wouldn’t be limited to + 동명사.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nLiz could order the (A) parts online and (B) them, or go to the (C) Repair Café.',o:['necessary – replace – nearest','spare – generate – farthest','necessary – imagine – nearest','useless – replace – nearest','necessary – limit – next'],a:0,e:'(A) necessary(필요한) (B) replace(교체하다) (C) nearest(가장 가까운).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['alternatively – instead · generate – produce','planet – world · simply – merely','likely – probably · necessary – needed','imagine – picture · replace – substitute','throw away – keep · limit – restrict'],a:4,e:'throw away(버리다)와 keep(보관하다)은 반대예요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 limit이 윗글(제한하다)과 같은 뜻으로 쓰인 것은?',o:['Her options aren’t __limited__ to repairs.','Don’t exceed the speed __limit__.','There’s no __limit__ to his energy.','He reached his __limit__.','The time __limit__ is one hour.'],a:0,e:'윗글의 limited = 제한된(동사/분사). 나머지는 명사 ‘한계’예요.'}],
 M:[
  {k:'gr',marks:[['remember','remember'],['lived','lived'],['wouldn’t','wouldn’t'],['would','will'],['could','could']],e:'④ 가정법 과거 주절이므로 would be able to.'},
  {k:'bl',ph:'a future in which people will generate far less e-waste',o:['a future in which people will generate far less e-waste','a future in which people will buy more devices','a future in which repairs become illegal','a future in which cafés disappear','a future in which e-waste has no impact'],e:'마지막 문장: 사람들이 전자 폐기물을 훨씬 적게 만들어 내는 미래.'},
  {k:'ins',s:6,at:[3,4,5,6,7],e:'In fact, this sustainable world ~는 앞의 상상(수리가 일상인 세상)이 실현 가능한 미래임을 강조해요.'}]
});
})();

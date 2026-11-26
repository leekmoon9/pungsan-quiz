// ===== 2026년 10월 학평 지문 (24 · 29 · 34 · 39) =====
// ===== 24번 · 아리스토텔레스의 한계 =====
(()=>{
const S=ENG.T['m24'];
const KO=[
 '일관성이 있을지는 몰라도, 아리스토텔레스의 생각 중 일부는 오늘날 우리에게 낯설게 다가온다.',
 '예를 들어 그는 노예제를 정당화하는 데 어려움이 없었고, 그의 시대에 철학자들은 높은 특권과 영향력을 누렸다.',
 '인간의 최고선에 대한 관조를 실천했기 때문에, 철학자들은 삶에서 가장 좋은 것을 모두 가질 자격이 있다고 여겨졌다.',
 '어쩐지 그 주장은 이상할 만큼 자기 잇속만 차리는 것처럼 보인다.',
 '모든 위대한 사상가는 자기 시대의 사람이며 특정한 청중에게 말한다는 것을 기억해 두는 것이 도움이 되고, 아리스토텔레스도 분명 예외가 아니다.',
 '그가 이해한 인간의 번영은 오늘날 우리가 바랄 만큼 포용적이지는 않았을 것이다.',
 '그가 옳음과 좋음을 이해한 방식은 고대 그리스 사회의 특권 엘리트들이 옳음과 좋음을 이해하던 방식을 보여 주는 지표로 보는 것이 가장 좋다.',
 '그 결과, 그것은 잘하는 점이 많음에도 불구하고 심각한 결함도 지니고 있다.'];
const W=[
 ['consistent','일관성 있는','w',1,'Consistent'],['strange','낯선, 이상한','w',1,'strange'],
 ['have no difficulty -ing','~하는 데 어려움이 없다','p',2,'had no difficulty justifying'],['justify','정당화하다','w',2,'justifying'],['slavery','노예제','w',2,'slavery'],['era','시대','w',2,'era'],['privilege','특권','w',2,'privilege'],['influence','영향력','w',2,'influence'],
 ['contemplation','관조, 깊은 생각','w',3,'contemplation'],['worthy','~할 자격이 있는','w',3,'worthy'],
 ['assertion','주장','w',4,'assertion'],['self-serving','자기 잇속만 차리는','w',4,'self-serving'],
 ['serve','도움이 되다','w',5,'serves'],['be no exception','예외가 아니다','p',5,'is no exception'],
 ['flourishing','번영, 잘 지냄','w',6,'flourishing'],['inclusive','포용적인','w',6,'inclusive'],
 ['indicator','지표','w',7,'indicator'],['elite','엘리트, 지배층','w',7,'elite'],['tend to V','~하는 경향이 있다','p',7,'tended to'],
 ['as a result','그 결과','p',8,'As a result'],['for all','~에도 불구하고','p',8,'for all'],['flawed','결함이 있는','w',8,'flawed']];
ENG.add('m24',{u:1,n:'아리스토텔레스의 한계',no:'24번',src:'2026년 10월 고2 학평 24번',KO,W,
 sum:'아리스토텔레스는 노예제를 정당화하고 철학자의 특권을 당연시했다. 모든 사상가는 ==자기 시대의 사람==이므로, 그의 ==옳음과 좋음==은 고대 그리스 ==특권 엘리트의 관점==을 반영하며 ==결함==이 있다.',
 st:[['한계','①~④','아리스토텔레스의 생각 중 일부는 ==낯섦==, 철학자의 ==특권== 정당화'],['관점','⑤~⑥','모든 사상가는 ==자기 시대의 사람==, 인간 번영도 ==덜 포용적=='],['결론','⑦~⑧','==특권 엘리트의 관점== → 장점도 있지만 ==결함==']],
 syn:[
  ['양보 도치','==Consistent though he may be==, some of Aristotle’s ideas meet us today as strange — 형용사 + though + 주어 + may be = 비록 ~일지라도(도치된 양보절).'],
  ['have no difficulty -ing','He ==had no difficulty justifying== slavery — ~하는 데 어려움이 없었다.'],
  ['분사구문 / considered worthy to V','philosophers ==were considered== worthy ==to have== all the best things — be considered + 형용사 + to V.'],
  ['It serves us to V / 동격 that','==It serves us to remember== that every great thinker is of her own time — 가주어 It, 진주어 to remember. 뒤에 that절.'],
  ['as + 주어 + 동사 / as ~ as','Human flourishing ==as he understood it== probably would not be ==nearly as inclusive as== we would want it to be today — 양태의 as, not nearly as ~ as(결코 ~만큼 …하지 않은).'],
  ['의문사 how + best taken to be','==How he understood== right and good ==is best taken to be== an indicator of ==how== the privileged elite ~ tended to understand — how 명사절 주어, be taken to be(~로 여겨지다).'],
  ['for all + 대명사','==for all it does well==, it is also deeply flawed — ~에도 불구하고.']],
 tip:'**함정 주의** ‘Consistent though he may be’는 ==though가 문장 중간에 오는 도치 양보절==이에요. ‘it serves us to remember’의 ==it은 가주어==. is best taken to be에서 taken은 수동태 과거분사.',
 pts:['핵심: ==모든 사상가는 자기 시대의 한계==가 있다 (아리스토텔레스도 예외 아님)','근거: 노예제 정당화, 철학자의 특권, 인간 번영의 비포용성','빈칸 단골: every great thinker is of her own time / privileged elite','어법: 도치 양보절, 가주어 it, how 명사절, as ~ as'],
 tips:{'양보 도치':'형용사 + though + S + V — 비록 ~일지라도.','have no difficulty -ing':'~하는 데 어려움이 없다 — 동명사!','가주어 it':'It serves us to V — 가주어 it, 진주어 to부정사.','how 명사절':'how + 주어 + 동사 — 명사절 주어/목적어.','수동태 be taken to be':'~로 여겨지다.','어법 선택':'수 일치 · 수동태 · 가주어를 차례로 확인해요.','글의 내용':'핵심: 사상가는 자기 시대의 한계를 지닌다.','영작':'가주어 it과 how 절을 정확히!','어법 문장 고르기':'도치 양보절 어순을 확인해요.','제목 추론':'글 전체를 한마디로 — 시대의 한계!'},
 B:[
  {g:'양보 도치',q:'Consistent though he may be, some of Aristotle’s ideas meet us today as strange.\n\n밑줄 친 부분의 뜻으로 알맞은 것은?',o:['그가 일관성이 있을지라도','그가 일관성이 있기 때문에','그가 일관성 있을 때','그가 일관성이 있다면','그가 일관성이 없으므로'],a:0,e:'형용사 + though + S + may be = 비록 ~일지라도(양보 도치).'},
  {g:'have no difficulty -ing',q:'다음 문장의 ⓐ에서 어법에 맞는 것은?\n\nHe had no difficulty ⓐ(justify / justifying) slavery.',o:['justifying','justify','to justify','justified','justifies'],a:0,e:'have no difficulty (in) -ing = ~하는 데 어려움이 없다.'},
  {g:'be considered',q:'philosophers were considered worthy to have all the best things in life\n\n밑줄 친 부분의 뜻으로 알맞은 것은?',o:['~할 자격이 있다고 여겨졌다','~하기를 거부당했다','~하려고 노력했다','~할 필요가 없었다','~하는 것을 허락받았다'],a:0,e:'be considered worthy to V = ~할 자격이 있다고 여겨지다.'},
  {g:'가주어 it',q:'It serves us to remember that every great thinker is of her own time.\n\n밑줄 친 __It__은 가주어이고 진주어는 to remember 이하이다.',a:true,e:'It serves us to remember ~ : 가주어 It, 진주어 to부정사.'},
  {g:'as ~ as 비교',q:'Human flourishing as he understood it probably would not be nearly as inclusive as we would want it to be today.\n\n밑줄 친 부분의 뜻으로 알맞은 것은?',o:['결코 ~만큼 포용적이지는 않았을 것이다','~만큼 포용적이었을 것이다','~보다 더 포용적이었을 것이다','~와 전혀 관계없을 것이다','~하기를 원했을 것이다'],a:0,e:'not nearly as A as B = B만큼 결코 A하지 않은.'},
  {g:'how 명사절',q:'How he understood right and good is best taken to be an indicator of ...\n\n밑줄 친 __How he understood right and good__은 문장의 주어 역할을 하는 명사절이다.',a:true,e:'의문사 how가 이끄는 명사절이 주어이고 is가 동사예요.'},
  {g:'어법 선택',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nHow he understood right and good ⓐ(is / are) best ⓑ(taken / taking) to be an indicator.',o:['is – taken','are – taken','is – taking','are – taking','is – take'],a:0,e:'ⓐ how 명사절 주어는 단수 → is. ⓑ be taken to be(수동).'},
  {g:'for all',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nfor [빈칸] it does well, it is also deeply flawed (~에도 불구하고)',a:['all'],m:'all',e:'for all = ~에도 불구하고.'},
  {g:'글의 내용',q:'윗글에서 철학자들이 특권을 누린 이유로 제시된 것은?\n\n'+S.join(' '),o:['인간의 최고선에 대한 관조를 실천했기 때문에 가장 좋은 것을 가질 자격이 있다고 여겨져서','노예를 많이 소유해서','정치적 권력을 가져서','가장 부유해서','교육을 받지 못해서'],a:0,e:'③: 최고선에 대한 관조를 실천한 철학자는 삶의 가장 좋은 것을 가질 자격이 있다고 여겨졌어요.'}],
 X:[
  {k:'gr',marks:[['justifying','justifying'],['considered','considered'],['serves','serve'],['speaks','speaks'],['understood','understood']],e:'③ 가주어 It(단수) → It serves us to remember.'},
  {k:'vo',marks:[['strange','strange'],['privilege','privilege'],['worthy','unworthy'],['inclusive','inclusive'],['flawed','flawed']],e:'③ 철학자들이 가장 좋은 것을 가질 ‘자격이 있다(worthy)’고 여겨졌다는 흐름이에요.'},
  {k:'bl',ph:'every great thinker is of her own time and speaks to a particular audience',o:['every great thinker is of her own time and speaks to a particular audience','every great thinker is timeless and speaks to everyone','every great thinker is wrong about human nature','every great thinker is ignored in her own time','every great thinker avoids speaking to an audience'],e:'모든 사상가는 자기 시대의 사람이며 특정 청중에게 말한다는 점을 기억하라는 내용이에요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['아리스토텔레스의 철학은 당시 특권층의 관점을 반영한 한계가 있다','아리스토텔레스는 모든 사람에게 평등을 주장했다','철학자는 사회에서 영향력이 없었다','고대 그리스 철학은 오늘날에도 그대로 적용된다','아리스토텔레스의 사상은 일관성이 없다'],e:'그의 이해는 특권 엘리트의 관점이라 결함이 있다는 것이 요지예요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['Aristotle: A Thinker Bound by His Time','The Glory of Ancient Greece','Why Philosophers Should Be Rich','How to Argue Like Aristotle','The Rise of Democracy'],e:'아리스토텔레스도 자기 시대의 한계를 지녔다는 내용이에요.'},
  {k:'sm',s:'Aristotle’s ideas on the good life reflect the (A) of the privileged elite of his time and are therefore (B).',o:['perspective – limited','success – perfect','anger – useful','fear – neutral','habit – ancient'],e:'(A) 관점(perspective) (B) 한계가 있는(limited).'},
  {k:'ins',s:5,at:[3,4,5,6,7],e:'Human flourishing as he understood it ~는 앞 문장(모든 사상가는 자기 시대의 사람)의 구체적 사례로, 그의 인간 번영 개념의 한계를 말해요.'},
  {k:'ord',cut:[2,2,2],lab:['B','C','A'],e:'(B) 철학자들의 특권과 자격 → (C) 그 주장의 이상함, 사상가의 시대적 한계 → (A) 그의 이해의 한계와 결론.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nHe had no [빈칸] justifying slavery. (어려움)',a:['difficulty'],m:'difficulty',e:'have no difficulty -ing.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['It serves us to remember that every thinker is of her own time.','It serve us to remember that every thinker is of her own time.','It serves us remembering that every thinker is of her own time.','That serves us to remember that every thinker is of her own time.','It serves us to remembers that every thinker is of her own time.'],a:0,e:'가주어 It(단수) + serves + 진주어 to remember.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nPhilosophers enjoyed high (A) and (B) because their (C) was seen as the highest good.',o:['privilege – influence – contemplation','assertion – era – slavery','privilege – exception – elite','influence – flaw – contemplation','era – privilege – assertion'],a:0,e:'(A) privilege(특권) (B) influence(영향력) (C) contemplation(관조).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['strange – unusual · justify – defend','assertion – claim · era – period','indicator – sign · elite – upper class','inclusive – exclusive · flawed – faulty','consistent – steady · privilege – advantage'],a:3,e:'inclusive(포용적인)와 exclusive(배타적인)는 반대예요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 serve가 윗글(도움이 되다)과 같은 뜻으로 쓰인 것은?',o:['It will __serve__ you well to be careful.','They __serve__ lunch at noon.','He will __serve__ as president.','She has a strong __serve__.','The tool can __serve__ as a weapon.'],a:0,e:'윗글의 serves us = 우리에게 도움이 되다. 나머지는 음식을 내다·역할을 하다 등이에요.'}],
 M:[
  {k:'gr',marks:[['had','had'],['enjoyed','enjoyed'],['considered','consider'],['seems','seems'],['understood','understood']],e:'③ 철학자들이 ‘여겨졌다’는 수동태 were considered.'},
  {k:'bl',ph:'an indicator of how the privileged elite of ancient Greek society tended to understand right and good',o:['an indicator of how the privileged elite of ancient Greek society tended to understand right and good','a proof that ancient Greeks shared equal rights','a guide to modern ideas of fairness','a warning against ancient philosophy','a record of how slaves understood right and good'],e:'그의 이해는 특권 엘리트의 관점을 보여 주는 지표예요.'},
  {k:'ins',s:3,at:[1,2,3,4,5],e:'Somehow that assertion은 앞 문장(철학자가 최고의 것을 가질 자격이 있다는 주장)을 가리켜요.'}]
});
})();

// ===== 29번 · 생존이라는 경주 =====
(()=>{
const S=ENG.T['m29'];
const KO=[
 '생존을 해마다 장애물을 하나씩 넘어야 하는 경주로 생각해 볼 수 있다.',
 '초기의 장애물은 한때 매우 높았고, 많은 사람이 처음 몇 개를 넘기도 전에 쓰러졌다.',
 '인구학적으로 인류는 자연 상태에 가깝게 살고 있었고, 자연은 생명을 몹시 낭비한다.',
 '극히 적은 수의 무화과에서도 많은 씨앗 중 단 하나만이 무화과나무가 될 것이다.',
 '야생에서 태어난 개코원숭이의 거의 4분의 1이 한 살이 되기 전에 죽는데, 이는 영장류로서는 꽤 전형적이다.',
 '전근대 농경 사회에서의 인간의 영아 사망률은 유인원의 사망률과 비슷했고 때로는 더 높았다.',
 '우리 수렵 채집 조상들도 형편이 별로 나을 것이 없었는데, 그중 4분의 1은 첫 생일에 이르지 못했고 또 다른 4분의 1은 번식할 만큼 오래 살지 못했으며, 이는 19세기까지 거의 어디서나 마찬가지였다.',
 '만약 그렇지 않았다면, 최근의 엄청난 인구 증가는 훨씬 더 일찍 일어났을 것이다.'];
const W=[
 ['survival','생존','w',1,'survival'],['hurdle','장애물','w',1,'hurdle'],
 ['clear','넘다, 통과하다','w',2,'clearing'],
 ['demographically','인구학적으로','w',3,'Demographically'],['state of nature','자연 상태','p',3,'state of nature'],['wasteful','낭비하는','w',3,'wasteful'],
 ['seed','씨앗','w',4,'seeds'],['fig','무화과','w',4,'figs'],
 ['baboon','개코원숭이','w',5,'baboons'],['primate','영장류','w',5,'primates'],['typical','전형적인','w',5,'typical'],
 ['infant mortality','영아 사망(률)','p',6,'Infant mortality'],['pre-modern','전근대의','w',6,'pre-modern'],['agricultural','농경의','w',6,'agricultural'],['ape','유인원','w',6,'apes'],
 ['hunter-gatherer','수렵 채집인','w',7,'hunter-gatherer'],['ancestor','조상','w',7,'ancestors'],['reproduce','번식하다','w',7,'reproduce'],
 ['otherwise','그렇지 않게, 달리','w',8,'otherwise'],['population','인구','w',8,'population'],['occur','일어나다','w',8,'occurred']];
ENG.add('m29',{u:1,n:'생존이라는 경주',no:'29번',src:'2026년 10월 고2 학평 29번',KO,W,
 sum:'과거의 인류는 ==자연 상태==에서 살았고 자연은 생명을 낭비한다. 인간뿐 아니라 영장류도 ==영아 사망률==이 높았기에, 근대 이전에는 ==생존의 장애물이 매우 높았다==.',
 st:[['비유','①~②','생존 = ==해마다 장애물을 넘는 경주==, 초기 장애물은 매우 높았음'],['근거','③~⑥','==자연은 생명을 낭비==: 무화과, 개코원숭이, 농경 사회 영아 사망률'],['결론','⑦~⑧','수렵 채집 조상도 마찬가지, 그렇지 않았다면 ==인구 증가가 더 일찍=='] ],
 syn:[
  ['think of A as B','You might ==think of== survival ==as== a race in which a hurdle has to be jumped every year — A를 B로 생각하다, a race in which(전치사+관계대명사).'],
  ['fall before -ing','many people fell ==before clearing== the first few — 전치사 before + 동명사.'],
  ['분사구문 / close to','humankind ==was living close to== a state of nature, and nature is extremely wasteful of life — 접속사 and로 두 절 연결.'],
  ['도치 + will even one','From only a very small number of figs ==will even one== of many seeds become a fig tree — 부정(only) 부사구가 앞에 오면 의문문 어순으로 도치.'],
  ['which 계속적 용법 / similar to','Almost a quarter of baboons born in the wild die ~, ==which== is fairly typical for primates — 앞 문장 전체를 받는 which.'],
  ['비교 / 반복 생략','were similar to, and sometimes higher than, those of apes — those = rates, 두 비교 표현 병렬.'],
  ['가정법 과거완료 도치','==Had it been== otherwise, the huge recent growth ~ ==would have occurred== much earlier — If it had been otherwise의 도치.']],
 tip:'**함정 주의** From only a very small number of figs 문두의 only 부사구 때문에 ==will even one ~ become==처럼 도치가 일어나요. ‘Had it been otherwise’는 ==If it had been otherwise==의 도치(가정법 과거완료).',
 pts:['핵심: ==과거에는 생존이 매우 어려웠다== (영아 사망률 높음)','근거: 무화과·개코원숭이·농경 사회 영아 사망률','빈칸 단골: nature is extremely wasteful of life','어법: only 부사구 도치, 가정법 과거완료 도치, which 계속적 용법, think of A as B'],
 tips:{'think of A as B':'A를 B로 생각하다.','전치사 + 관계대명사':'a race in which ~ — which 뒤에 완전한 절.','only 도치':'only + 부사구가 문두에 오면 주어-동사가 도치돼요.','계속적 which':'콤마 뒤 which는 앞 내용을 받아요.','가정법 도치':'Had + S + p.p. = If + S + had p.p.','어법 선택':'도치 · 관계사 · 시제를 차례로 확인해요.','글의 내용':'핵심: 자연은 생명을 낭비해 영아 사망률이 높았다.','영작':'도치와 가정법 어순을 정확히!','어법 문장 고르기':'도치 구문을 확인해요.','제목 추론':'글 전체를 한마디로 — 험난했던 생존 경주!'},
 B:[
  {g:'think of A as B',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nYou might think of survival [빈칸] a race. (A를 B로 생각하다)',a:['as'],m:'as',e:'think of A as B = A를 B로 생각하다.'},
  {g:'전치사 + 관계대명사',q:'a race in which a hurdle has to be jumped every year\n\n밑줄 친 __in which__ 뒤에는 완전한 절이 온다.',a:true,e:'전치사 + 관계대명사(in which) 뒤에는 완전한 절이 와요.'},
  {g:'before -ing',q:'many people fell before clearing the first few\n\n밑줄 친 __before clearing__의 뜻으로 알맞은 것은?',o:['처음 몇 개를 넘기도 전에','처음 몇 개를 넘은 뒤에','처음 몇 개를 넘는 동안','처음 몇 개를 넘기 위해','처음 몇 개를 넘지 못해서'],a:0,e:'before + 동명사 = ~하기 전에.'},
  {g:'only 도치',q:'다음 문장의 ⓐ에서 어법에 맞는 것은?\n\nFrom only a very small number of figs ⓐ(will even one / even one will) of many seeds become a fig tree.',o:['will even one','even one will','one will even','will one even','one even will'],a:0,e:'부정의 의미 only 부사구가 문두에 오면 조동사 + 주어 순서로 도치돼요.'},
  {g:'계속적 which',q:'..., which is fairly typical for primates\n\n밑줄 친 __which__는 앞 문장 전체 내용을 가리킨다.',a:true,e:'콤마 뒤 계속적 용법의 which는 앞 문장 전체를 받아요.'},
  {g:'비교 병렬',q:'Infant mortality rates for humans were similar to, and sometimes higher than, those of apes.\n\n밑줄 친 __those__가 가리키는 것은?',o:['mortality rates','humans','apes','societies','primates'],a:0,e:'those = the infant mortality rates (복수 명사 대신).'},
  {g:'가정법 도치',q:'Had it been otherwise, the huge recent growth in human population would have occurred much earlier.\n\n밑줄 친 부분과 같은 의미의 문장은?',o:['If it had been otherwise','If it were otherwise','If it has been otherwise','If it would be otherwise','Unless it had been otherwise'],a:0,e:'Had it been = If it had been (가정법 과거완료의 도치).'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n[빈칸] it been otherwise, the growth would have occurred earlier.',a:['had'],m:'Had',e:'가정법 과거완료의 도치: Had + 주어 + p.p.'},
  {g:'글의 내용',q:'윗글에서 개코원숭이에 대한 설명으로 알맞은 것은?\n\n'+S.join(' '),o:['야생에서 태어난 개코원숭이의 거의 4분의 1이 한 살이 되기 전에 죽는다','개코원숭이는 인간보다 오래 산다','개코원숭이는 번식하지 않는다','영아 사망률이 거의 없다','농경 사회에서 길러진다'],a:0,e:'⑤: 야생 개코원숭이의 거의 4분의 1이 한 살 전에 죽어요.'}],
 X:[
  {k:'gr',marks:[['jumped','jumped'],['fell','fell'],['was','were'],['die','die'],['occurred','occurred']],e:'③ 주어 humankind(단수) → was living.'},
  {k:'vo',marks:[['hurdles','hurdles'],['wasteful','wasteful'],['typical','typical'],['higher','lower'],['little','little']],e:'④ 인간의 영아 사망률은 유인원과 비슷했고 때로는 ‘더 높았다(higher)’.'},
  {k:'bl',ph:'nature is extremely wasteful of life',o:['nature is extremely wasteful of life','nature is extremely kind to humans','nature protects every living thing','nature rarely changes over time','nature avoids using resources'],e:'뒤의 무화과·개코원숭이 예가 ‘자연은 생명을 낭비한다’를 뒷받침해요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['과거에는 영아 사망률이 높아 생존의 장애물이 매우 높았다','현대인은 과거보다 장수하지 못한다','자연은 생명을 보호하는 경향이 있다','영장류만 영아 사망률이 높다','인구 증가는 오래전에 시작되었다'],e:'자연 상태에서는 많은 생명이 어릴 때 죽었다는 것이 요지예요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['The High Hurdles of Early Survival','How Figs Grow into Trees','Modern Medicine and Longevity','The Life of Baboons in Africa','Why Population Falls'],e:'초기 생존의 높은 장애물을 다룬 글이에요.'},
  {k:'sm',s:'Since nature is (A) of life, many humans and primates died in (B), so population growth began relatively late.',o:['wasteful – infancy','generous – old age','careful – battle','silent – winter','strict – school'],e:'(A) 생명을 낭비하는(wasteful) (B) 유아기(infancy)에 많이 죽었다.'},
  {k:'ins',s:5,at:[3,4,5,6,7],e:'Infant mortality rates for humans ~는 앞의 야생 영장류(개코원숭이) 사례에 이어 인간 사회의 사례를 제시해요.'},
  {k:'ord',cut:[2,3,2],lab:['C','A','B'],e:'(C) 자연은 생명을 낭비 + 무화과·개코원숭이 → (A) 인간 사회 영아 사망률, 수렵 채집 조상 → (B) 그렇지 않았다면 인구 증가가 더 일찍.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nFrom only a very small number of figs [빈칸] even one of many seeds become a fig tree.',a:['will'],m:'will',e:'only 부사구 도치: will even one ~ become.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['Had it been otherwise, growth would have occurred earlier.','Had it been otherwise, growth will occur earlier.','If it had been otherwise, growth would occur earlier.','Had been it otherwise, growth would have occurred earlier.','Have it been otherwise, growth would have occurred earlier.'],a:0,e:'가정법 과거완료 도치: Had + 주어 + p.p., would have p.p.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nIn (A) societies, (B) mortality was high, and many people died before they could (C).',o:['agricultural – infant – reproduce','modern – adult – survive','agricultural – hunter – occur','pre-modern – seed – clear','typical – infant – occur'],a:0,e:'(A) agricultural(농경의) (B) infant(영아) (C) reproduce(번식하다).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['ancestor – forefather · typical – usual','wasteful – extravagant · occur – happen','hurdle – obstacle · survival – continued life','population – inhabitants · clear – pass','otherwise – differently · seed – harvest'],a:4,e:'seed(씨앗)와 harvest(수확)는 비슷한 말이 아니에요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 clear가 윗글(넘다, 통과하다)과 같은 뜻으로 쓰인 것은?',o:['The horse can __clear__ the fence.','The sky is __clear__ today.','Please __clear__ the table.','Her voice is very __clear__.','He tried to __clear__ his name.'],a:0,e:'윗글의 clearing = (장애물을) 넘다. 나머지는 맑은·치우다·분명한 등이에요.'}],
 M:[
  {k:'gr',marks:[['might','might'],['fell','fall'],['was living','was living'],['is','is'],['occurred','occurred']],e:'② 과거 사실이므로 many people fell.'},
  {k:'bl',ph:'a quarter of whom failed to reach their first birthday',o:['a quarter of whom failed to reach their first birthday','half of whom lived to old age','none of whom had any children','most of whom moved to cities','all of whom learned to farm'],e:'수렵 채집 조상의 4분의 1이 첫 생일을 맞지 못했어요.'},
  {k:'ins',s:7,at:[3,4,5,6,7],e:'Had it been otherwise는 앞의 높은 사망률을 근거로 인구 증가가 더 일찍 일어나지 않은 이유를 마무리해요.'}]
});
})();

// ===== 34번 · 상호 연결과 복잡한 실패 =====
(()=>{
const S=ENG.T['m34'];
const KO=[
 '소셜 미디어는 비즈니스, 정치, 우정을 바꾸어 놓았고, ‘바이럴이 되다’를 가정에서도 쓰는 흔한 말로 만들었다.',
 '글로벌 금융 산업은 모든 나라의 모든 은행과 수많은 가정을 연결하여, 우리가 지구 반대편에서 일어나는 인간의 실수에 취약해지게 만든다.',
 '컬럼비아 대학교 전략 교수 리타 맥그래스가 설명하듯이, 몇 년 전만 해도 우리의 기관들 대부분은 분리되어 있었고, 그래서 담장 밖 오류의 영향으로부터 보호받았다.',
 '그것은 더 이상 사실이 아니다.',
 '엄청난 양의 정보의 디지털화는 컴퓨팅 비용이 감소함에 따라 엄청나게 계속 늘어 왔다.',
 '자율적으로 소통하는 스마트 시스템의 개발은 무수히 다양한 잠재적 고장을 낳았다.',
 '이러한 상호 의존성은 복잡한 실패의 온상이다.',
 '리타의 표현대로, 예전에는 분리되어 있던 것들이 서로 부딪히면, 다음에 무슨 일이 일어날지 예측하기가 훨씬 더 어려워진다.',
 '정보 기술은 상호 연결성이 작은 실패의 영향을 즉시 퍼뜨리기 때문에 새로운 취약점을 만든다.'];
const W=[
 ['alter','바꾸다','w',1,'altered'],['go viral','입소문이 퍼지다','p',1,'going viral'],['household','가정의, 흔한','w',1,'household'],
 ['vulnerable','취약한','w',2,'vulnerable'],['error','오류','w',2,'error'],
 ['thereby','그렇게 함으로써','w',3,'thereby'],['buffer','보호하다, 완충하다','w',3,'buffered'],['institution','기관','w',3,'institutions'],
 ['digitization','디지털화','w',5,'digitization'],['massive','엄청난, 거대한','w',5,'massive'],['enormously','엄청나게','w',5,'enormously'],
 ['autonomously','자율적으로','w',6,'autonomously'],['give rise to','~을 낳다, 초래하다','p',6,'gave rise to'],['infinite','무한한, 무수한','w',6,'infinite'],['breakdown','고장, 붕괴','w',6,'breakdowns'],
 ['interdependence','상호 의존','w',7,'interdependence'],['breeding ground','온상','p',7,'breeding ground'],
 ['bump up against','~와 부딪히다','p',8,'bump up against'],['predict','예측하다','w',8,'predict'],
 ['interconnectedness','상호 연결성','w',9,'interconnectedness'],['instantly','즉시','w',9,'instantly'],['impact','영향','w',9,'impact']];
ENG.add('m34',{u:1,n:'상호 연결과 복잡한 실패',no:'34번',src:'2026년 10월 고2 학평 34번',KO,W,
 sum:'디지털화와 스마트 시스템으로 세상의 ==상호 의존성==이 커지면서 ==작은 실패==가 즉시 퍼져 ==복잡한 실패==가 일어나기 쉬워졌고, 다음에 무슨 일이 일어날지 ==예측하기 어려워졌다==.',
 st:[['배경','①~④','소셜 미디어·금융 산업으로 ==모든 것이 연결==, 과거에는 ==기관들이 분리=='],['원인','⑤~⑥','==디지털화·스마트 시스템== → 무수한 잠재적 고장'],['결론','⑦~⑨','==상호 의존성 = 복잡한 실패의 온상==, 작은 실패의 영향이 즉시 퍼짐']],
 syn:[
  ['분사구문 making','Social media has altered business, politics, and friendships, ==making going viral a household term== — 결과의 분사구문, make + 목적어 + 보어.'],
  ['making us vulnerable to','making us ==vulnerable to== human error ==taking place== on the other side of the world — make + 목적어 + 형용사, 현재분사 후치 수식.'],
  ['As + 인명 + explains','==As== Columbia University strategy professor Rita McGrath ==explains==, years ago most of our institutions were separate and ==thereby buffered== — As가 이끄는 양태절, thereby + 과거분사.'],
  ['as + 비교 / 증감','The digitization ~ has continued to grow enormously ==as== the cost of computing power has decreased — ~함에 따라(비례의 as).'],
  ['that + 관계대명사','the development of smart systems ==that communicate== autonomously — 선행사 systems(복수) → communicate.'],
  ['give rise to','gave rise to an infinite variety of potential breakdowns — ~을 낳다.'],
  ['as + A + puts it','==As Rita puts it==, when “things that used to be kept separate bump up against each other, it becomes far more difficult to predict ~” — as 양태절, used to be kept(과거의 상태, 수동).'],
  ['because 이유절','~ vulnerabilities ==because== interconnectedness instantly spreads the impact of small failures — 이유절.']],
 tip:'**함정 주의** ‘making going viral a household term’의 making은 ==분사구문(결과)==이고 going viral이 목적어(동명사구). ‘that communicate’는 ==선행사 systems(복수)==에 수 일치. ‘used to be kept’는 ==과거의 상태(수동)==.',
 pts:['핵심: ==상호 연결이 커질수록 작은 실패가 쉽게 퍼져 복잡한 실패가 생긴다==','근거: 디지털화, 스마트 시스템, 분리되어 있던 것들이 부딪힘','빈칸 단골: interconnectedness spreads the impact of small failures','어법: 분사구문, 관계절 수 일치, 비례의 as, used to be p.p.'],
 tips:{'분사구문':'making + 목적어 + 보어 — 결과를 나타내는 분사구문.','관계절 수 일치':'선행사(systems 복수)에 동사를 맞춰요.','비례의 as':'as + S + V = ~함에 따라.','give rise to':'~을 낳다(초래하다).','used to be p.p.':'과거에 ~되곤 했다/되어 있었다(수동).','어법 선택':'분사 · 수 일치 · 접속사를 차례로 확인해요.','글의 내용':'핵심: 연결이 커질수록 작은 실패가 쉽게 퍼진다.','영작':'분사구문과 give rise to를 정확히!','어법 문장 고르기':'관계절과 분사 구문을 확인해요.','제목 추론':'글 전체를 한마디로 — 연결 사회의 취약점!'},
 B:[
  {g:'분사구문',q:'..., making going viral a household term.\n\n밑줄 친 __making__ 분사구문의 의미로 알맞은 것은?',o:['그 결과 ~하게 만들었다(결과)','~하기 위해(목적)','~이기 때문에(이유)','~하는 동안(시간)','~일지라도(양보)'],a:0,e:'주절의 결과를 덧붙이는 분사구문이에요.'},
  {g:'make + 목적어 + 형용사',q:'다음 문장의 ⓐ에서 어법에 맞는 것은?\n\nThe industry links every bank, making us ⓐ(vulnerable / vulnerably) to human error.',o:['vulnerable','vulnerably','vulnerability','vulnerabilities','to vulnerable'],a:0,e:'make + 목적어 + 형용사 보어(vulnerable).'},
  {g:'후치 수식',q:'human error taking place on the other side of the world\n\n밑줄 친 __taking place__는 human error를 꾸미는 현재분사구이다.',a:true,e:'~에서 일어나고 있는 (능동 진행) → 현재분사 후치 수식.'},
  {g:'양태의 as',q:'As Columbia University strategy professor Rita McGrath explains, ...\n\n밑줄 친 __As__의 뜻으로 알맞은 것은?',o:['~하듯이','~ 때문에','~하는 동안','~함에 따라','~로서'],a:0,e:'양태를 나타내는 as = ~하듯이.'},
  {g:'비례의 as',q:'The digitization has continued to grow as the cost of computing power has decreased.\n\n밑줄 친 __as__의 뜻으로 알맞은 것은?',o:['~함에 따라','~하듯이','~로서','~ 때문에','~이지만'],a:0,e:'두 변화가 함께 일어나는 비례의 as예요.'},
  {g:'관계절 수 일치',q:'다음 문장의 ⓐ에서 어법에 맞는 것은?\n\nThe development of smart systems that ⓐ(communicate / communicates) autonomously gave rise to an infinite variety of breakdowns.',o:['communicate','communicates','communicating','to communicate','communicated'],a:0,e:'선행사 systems(복수) → communicate.'},
  {g:'give rise to',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nThe development of smart systems gave [빈칸] to an infinite variety of potential breakdowns. (~을 낳다)',a:['rise'],m:'rise',e:'give rise to = ~을 낳다, 초래하다.'},
  {g:'used to be p.p.',q:'things that used to be kept separate bump up against each other\n\n밑줄 친 __used to be kept__의 뜻으로 알맞은 것은?',o:['(예전에는) 분리되어 있었던','분리하는 데 익숙해진','분리하기 위해 사용된','분리하지 않으려고 했던','분리해야 하는'],a:0,e:'used to be p.p. = 과거에 ~되어 있었다(과거의 상태).'},
  {g:'글의 내용',q:'윗글에서 정보 기술이 새로운 취약점을 만드는 이유로 제시된 것은?\n\n'+S.join(' '),o:['상호 연결성이 작은 실패의 영향을 즉시 퍼뜨리기 때문에','컴퓨터 비용이 올라서','소셜 미디어가 줄어들어서','기관들이 분리되어서','인간의 실수가 없어서'],a:0,e:'⑨: 상호 연결성이 작은 실패의 영향을 즉시 퍼뜨리기 때문이에요.'}],
 X:[
  {k:'gr',marks:[['altered','altered'],['links','links'],['buffered','buffered'],['decreased','decreased'],['communicate','communicates']],e:'⑤ 선행사 systems(복수) → communicate.'},
  {k:'vo',marks:[['vulnerable','vulnerable'],['separate','separate'],['enormously','enormously'],['infinite','limited'],['predict','predict']],e:'④ 스마트 시스템은 ‘무수히(infinite)’ 다양한 잠재적 고장을 낳았다는 흐름이에요.'},
  {k:'bl',ph:'interconnectedness instantly spreads the impact of small failures',o:['interconnectedness instantly spreads the impact of small failures','interconnectedness gradually removes small failures','interconnectedness protects institutions from errors','interconnectedness increases the cost of computing','interconnectedness slows down new technology'],e:'상호 연결성이 작은 실패의 영향을 즉시 퍼뜨려요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['세상이 더 촘촘히 연결되면서 작은 실패도 크게 번질 위험이 커졌다','소셜 미디어는 우정을 약하게 만든다','금융 산업은 안전해졌다','디지털화는 비용을 늘린다','기관들은 여전히 서로 분리되어 있다'],e:'상호 의존성 때문에 복잡한 실패가 쉽게 생긴다는 것이 요지예요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['Connected World, Fragile Systems','The Joy of Going Viral','How to Save Computing Costs','Banks of the Future','Why Institutions Stay Separate'],e:'연결된 세계의 취약성을 다룬 글이에요.'},
  {k:'sm',s:'As systems become more (A), small failures spread quickly, making outcomes harder to (B).',o:['interconnected – predict','isolated – repeat','simple – measure','expensive – sell','local – ignore'],e:'(A) 상호 연결된(interconnected) (B) 예측하다(predict).'},
  {k:'ins',s:3,at:[1,2,3,4,5],e:'That is no longer the case는 앞 문장(과거에는 기관들이 분리되어 보호받았다)을 가리켜 현재와 대비시켜요.'},
  {k:'ord',cut:[2,3,2],lab:['B','C','A'],e:'(B) 과거 기관의 분리와 보호 → (C) 디지털화와 스마트 시스템 → (A) 상호 의존성과 복잡한 실패의 온상.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n[빈칸] Rita puts it, things that used to be kept separate bump up against each other. (~하듯이)',a:['as'],m:'As',e:'As + 주어 + puts it = ~가 말하듯이.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['Interconnectedness instantly spreads the impact of small failures.','Interconnectedness instant spreads the impact of small failures.','Interconnectedness instantly spread the impact of small failures.','Interconnectedness instantly spreading the impact of small failures.','Interconnectedness instantly spreads the impact of small failure.'],a:0,e:'단수 주어 + instantly(부사) + spreads.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nThe (A) of information and growing (B) create a breeding ground for (C) failure.',o:['digitization – interdependence – complex','alteration – isolation – simple','digitization – isolation – complex','interdependence – digitization – local','vulnerability – impact – simple'],a:0,e:'(A) digitization(디지털화) (B) interdependence(상호 의존) (C) complex(복잡한).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['massive – huge · enormously – hugely','vulnerable – weak · alter – change','buffer – protect · instantly – immediately','predict – forecast · impact – effect','infinite – limited · error – mistake'],a:4,e:'infinite(무한한)와 limited(제한된)는 반대예요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 household가 윗글(흔한)과 같은 뜻으로 쓰인 것은?',o:['The brand became a __household__ name.','Each __household__ received a letter.','She manages the __household__ budget.','There are four people in the __household__.','A __household__ robot cleans the floor.'],a:0,e:'a household term = 흔히 쓰이는 말. household name은 널리 알려진 이름이에요.'}],
 M:[
  {k:'gr',marks:[['has','has'],['links','link'],['explains','explains'],['were','were'],['is','is']],e:'② 주어 The global financial industry(단수) → links.'},
  {k:'bl',ph:'it becomes far more difficult to predict what’s going to happen next',o:['it becomes far more difficult to predict what’s going to happen next','it becomes easier to avoid every failure','it becomes impossible to build new systems','it becomes clear who is responsible','it becomes cheaper to run computers'],e:'분리되어 있던 것들이 부딪히면 다음 일을 예측하기 훨씬 어려워져요.'},
  {k:'ins',s:6,at:[3,4,5,6,7],e:'This interdependence는 앞 문장(스마트 시스템의 상호 소통)을 가리켜 복잡한 실패의 온상으로 이어져요.'}]
});
})();

// ===== 39번 · 사회사학자의 사료 읽기 =====
(()=>{
const S=ENG.T['m39'];
const KO=[
 '모든 역사가와 마찬가지로 사회사학자들은 다양한 1차 사료를 활용한다.',
 '사회사는 흔히 엘리트보다 보통 사람들을 강조한다.',
 '그러나 대부분의 장소와 시대에서 비엘리트들은 교육을 받을 기회가 부족했고, 따라서 상당한 양의 기록을 남기지 못했다.',
 '기록을 남긴 경우에도, 이 자료들이 보존되어 연구자들이 이용할 수 있는 문서 보관소에 들어가는 경우는 드물었다.',
 '이러한 역사 기록의 편향 때문에 사회사학자들은 연구에서 매우 창의적이어야 한다.',
 '다른 역사가들처럼 사회사학자들도 정부 관리, 고용주, 그 밖의 엘리트들이 만든 문헌 자료를 분석한다.',
 '그러나 그러한 자료를 액면 그대로 받아들이기보다는 ‘결에 거슬러’ 읽는다.',
 '그래서 예를 들어, 사회사학자는 법률 문서를 노예 소유주가 제공한 ‘사실’을 알기 위해서만 읽는 것이 아니라, 노예가 된 사람들의 태도와 행동에 대한 단서를 주는 침묵, 중단, 소문, 그 밖의 세부 사항도 살펴볼 것이다.'];
const W=[
 ['primary source','1차 사료','p',1,'primary sources'],['a variety of','다양한','p',1,'a variety of'],
 ['emphasize','강조하다','w',2,'emphasizes'],['elite','엘리트','w',2,'elites'],
 ['lack','~이 부족하다','w',3,'lacked'],['access to','~에 접근할 기회','p',3,'access to'],['thus','따라서','w',3,'thus'],['substantial','상당한','w',3,'substantial'],['documentation','기록, 문서','w',3,'documentation'],
 ['archive','문서 보관소','w',4,'archives'],['preserve','보존하다','w',4,'preserved'],['available to','~가 이용할 수 있는','p',4,'available to'],
 ['bias','편향','w',5,'biases'],['historical record','역사 기록','p',5,'historical record'],['creative','창의적인','w',5,'creative'],
 ['analyze','분석하다','w',6,'analyze'],['textual','문헌의','w',6,'textual'],['government official','정부 관리','p',6,'government officials'],['employer','고용주','w',6,'employers'],
 ['at face value','액면 그대로','p',7,'at face value'],['against the grain','결에 거슬러, 통념과 반대로','p',7,'against the grain'],
 ['slaveowner','노예 소유주','w',8,'slaveowners'],['silence','침묵','w',8,'silences'],['interruption','중단','w',8,'interruptions'],['rumor','소문','w',8,'rumors'],['hint','단서, 암시','w',8,'hints'],['attitude','태도','w',8,'attitudes']];
ENG.add('m39',{u:1,n:'사회사학자의 사료 읽기',no:'39번',src:'2026년 10월 고2 학평 39번',KO,W,
 sum:'사회사는 보통 사람들을 다루지만 ==비엘리트의 기록은 드물고 보존도 어렵다==. 그래서 사회사학자는 ==엘리트가 만든 사료를 결에 거슬러 읽어== 침묵과 소문 같은 세부 사항에서 보통 사람들의 태도와 행동을 읽어 낸다.',
 st:[['배경','①~②','사회사 = ==보통 사람 강조=='],['문제','③~⑤','비엘리트의 ==기록이 적고 보존도 안 됨== → ==창의적 접근 필요=='],['방법','⑥~⑧','엘리트 사료를 ==“against the grain”== 읽어 침묵·소문 등에서 단서']],
 syn:[
  ['Like + 명사','==Like all historians==, social historians draw from ~ — 전치사 like(~처럼).'],
  ['rather than','Social history often emphasizes ordinary people ==rather than== elites — A보다는 B.'],
  ['lacked access to / thus','non-elites ==lacked access to== education and, ==thus==, did not produce substantial amounts of documentation — 동사 lacked와 did not produce 병렬, thus 삽입.'],
  ['관계부사 where','archives ==where== they could be preserved and made available to researchers — 장소 선행사 archives, 완전한 절, 병렬 수동태.'],
  ['have to be','social historians ==have to be== very creative — have to V(~해야 한다).'],
  ['과거분사 후치','textual sources ==produced by== government officials — 과거분사 후치 수식.'],
  ['rather than simply V','==rather than simply take== such sources at face value, they read them “against the grain” — rather than + 동사원형(병렬).'],
  ['not only A but also B','a social historian will read legal documents ==not only for== the “facts” ~; she will ==also== examine the silences — not only A but also B(부분 도치 없음).']],
 tip:'**함정 주의** ‘rather than simply take’에서 ==rather than 뒤는 동사원형==이에요. ‘archives where they could be preserved’의 where는 ==관계부사==(뒤가 완전한 절). 5번 문장 social historians have to ~의 주어는 복수.',
 pts:['핵심: ==사회사학자는 엘리트 사료를 결에 거슬러 읽는다==','근거: 비엘리트 기록이 적고 보존되지 않음 → 창의적 방법 필요','빈칸 단골: against the grain / at face value','어법: 관계부사 where, rather than + 원형, 과거분사 후치, 병렬 수동'],
 tips:{'전치사 like':'Like + 명사 = ~처럼.','rather than':'rather than 뒤에는 앞과 같은 형태(동사원형/명사)!','병렬 구조':'lacked ~ and did not produce ~ 두 동사 병렬.','관계부사 where':'where 뒤에는 완전한 절!','과거분사 후치':'sources produced by ~ — 수동 후치 수식.','not only A but also B':'not only A but also B — 대등하게 연결.','어법 선택':'관계사 · 병렬 · 분사를 차례로 확인해요.','글의 내용':'핵심: 엘리트 사료를 결에 거슬러 읽는다.','영작':'rather than과 관계부사를 정확히!','어법 문장 고르기':'병렬 구조를 확인해요.','제목 추론':'글 전체를 한마디로 — 사료를 거슬러 읽기!'},
 B:[
  {g:'전치사 like',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\n[빈칸] all historians, social historians draw from a variety of primary sources.',a:['like'],m:'Like',e:'전치사 Like + 명사 = ~처럼.'},
  {g:'rather than',q:'Social history often emphasizes ordinary people rather than elites.\n\n밑줄 친 __rather than__의 뜻으로 알맞은 것은?',o:['~보다는, ~이 아니라','~ 때문에','~에도 불구하고','~하는 동안','~할 때까지'],a:0,e:'A rather than B = B보다는 A.'},
  {g:'병렬 구조',q:'non-elites lacked access to education and, thus, did not produce substantial documentation\n\n밑줄 친 __lacked__와 __did not produce__는 병렬 관계이다.',a:true,e:'and로 이어진 두 동사구(lacked ~ / did not produce ~)가 병렬이에요.'},
  {g:'관계부사 where',q:'these materials rarely ended up in archives where they could be preserved\n\n밑줄 친 __where__ 뒤에 완전한 절이 온 이유로 알맞은 것은?',o:['관계부사라서','관계대명사라서','접속사 that이라서','의문대명사라서','전치사라서'],a:0,e:'where는 관계부사로 뒤에 완전한 절이 와요.'},
  {g:'어법 선택',q:'다음 문장의 ⓐ, ⓑ에서 어법에 맞는 것끼리 짝지어진 것은?\n\nBecause of such biases, social historians ⓐ(have / has) to be very ⓑ(creative / creatively).',o:['have – creative','has – creative','have – creatively','has – creatively','having – creative'],a:0,e:'ⓐ 주어 social historians(복수) → have. ⓑ be + 형용사.'},
  {g:'과거분사 후치',q:'textual sources produced by government officials\n\n밑줄 친 __produced__는 sources를 꾸미는 과거분사이다.',a:true,e:'sources가 ‘만들어진’ 수동 관계 → 과거분사 후치 수식.'},
  {g:'rather than 뒤 형태',q:'다음 빈칸에 알맞은 형태를 고르시오.\n\nrather than simply [빈칸] such sources at face value, they read them against the grain',o:['take','taking','to take','took','taken'],a:0,e:'rather than 뒤에는 (조동사 없는 문장에서) 동사원형이 올 수 있어요.'},
  {g:'not only A but also B',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\na social historian will read legal documents not only for the “facts”; she will [빈칸] examine the silences',a:['also'],m:'also',e:'not only A but also B.'},
  {g:'글의 내용',q:'윗글에서 비엘리트의 기록이 드문 이유로 알맞은 것은?\n\n'+S.join(' '),o:['교육 기회가 부족했고 기록이 문서 보관소에 보존되는 경우도 드물었기 때문','기록이 너무 많았기 때문','엘리트가 모두 없앴기 때문','글쓰기가 금지되어 있었기 때문','역사가들이 관심이 없었기 때문'],a:0,e:'③④: 교육 기회가 부족했고, 남긴 기록도 보존·이용되는 경우가 드물었어요.'}],
 X:[
  {k:'gr',marks:[['draw','draw'],['emphasizes','emphasizes'],['lacked','lacked'],['preserved','preserved'],['have','has']],e:'⑤ 주어 social historians(복수) → have to be.'},
  {k:'vo',marks:[['variety','variety'],['ordinary','ordinary'],['substantial','substantial'],['creative','uncreative'],['simply','simply']],e:'④ 편향된 기록 때문에 사회사학자는 매우 ‘창의적이어야(creative)’ 해요.'},
  {k:'bl',ph:'rather than simply take such sources at face value',o:['rather than simply take such sources at face value','instead of rejecting all sources','as well as accepting the facts','because they trust the elites','in order to avoid the archives'],e:'사료를 액면 그대로 받아들이기보다 ‘결에 거슬러’ 읽어요.'},
  {k:'mc',g:'요지 파악',q:'윗글의 요지로 가장 적절한 것은?',o:['사회사학자는 엘리트가 만든 사료를 비판적으로 읽어 보통 사람들의 삶을 복원한다','역사가는 엘리트의 기록만 사용해야 한다','사회사는 문서 보관소에서만 가능하다','보통 사람들은 기록을 많이 남겼다','1차 사료는 신뢰할 수 없다'],e:'편향된 사료를 결에 거슬러 읽는 것이 사회사학자의 방법이에요.'},
  {k:'mc',g:'제목 추론',q:'윗글의 제목으로 가장 적절한 것은?',o:['Reading Against the Grain: How Social Historians Work','The Glory of Ancient Archives','Why Elites Wrote History','How to Visit a Library','The End of Slavery'],e:'사회사학자가 사료를 읽는 방식을 다룬 글이에요.'},
  {k:'sm',s:'Because records of ordinary people are (A), social historians read elite sources (B) to find hints about them.',o:['scarce – critically','rich – carelessly','private – quickly','famous – loudly','short – happily'],e:'(A) 드물다(scarce) (B) 비판적으로(critically).'},
  {k:'ins',s:5,at:[3,4,5,6,7],e:'Like other historians ~는 앞(기록의 편향과 창의성)에 이어 사회사학자도 엘리트 사료를 분석한다는 내용으로 방향을 전환해요.'},
  {k:'ord',cut:[2,3,2],lab:['C','A','B'],e:'(C) 비엘리트의 기록 부족과 보존 문제 → (A) 엘리트 사료 분석 → (B) 예시.'},
  {g:'영작',q:'다음 빈칸에 알맞은 한 단어를 쓰시오.\n\nthey read them “against the [빈칸]” (결에 거슬러)',a:['grain'],m:'grain',e:'against the grain = 결에 거슬러, 통념과 반대로.'},
  {g:'어법 문장 고르기',q:'다음 중 어법상 올바른 문장은?',o:['Social historians read sources rather than simply take them at face value.','Social historians read sources rather than simply taking them at face value.','Social historians read sources rather than to simply take them at face value.','Social historians read sources rather than simply took them at face value.','Social historians read sources rather simply take them at face value.'],a:0,e:'rather than 뒤에 동사원형(take)이 와요.'}],
 V:[
  {g:'영어 어휘 활용',q:'다음 글의 빈칸 (A)~(C)에 들어갈 말로 가장 적절한 것은?\n\nNon-elites left little (A), and what remained was rarely kept in (B), so historians read elite sources (C).',o:['documentation – archives – critically','bias – hints – quickly','documentation – rumors – happily','substantial – archives – carelessly','elites – attitudes – quickly'],a:0,e:'(A) documentation(기록) (B) archives(문서 보관소) (C) critically(비판적으로).'},
  {g:'영어 어휘 활용',q:'다음 중 의미가 서로 비슷하지 않은 말끼리 짝지어진 것은?',o:['hint – clue · analyze – examine','preserve – protect · bias – prejudice','thus – therefore · substantial – considerable','rumor – gossip · silence – quiet','elite – ordinary · employer – boss'],a:4,e:'elite(엘리트)와 ordinary(보통의)는 반대예요.'},
  {g:'영어 어휘 활용',q:'다음 중 밑줄 친 lack이 윗글(~이 부족하다)과 같은 뜻으로 쓰인 것은?',o:['They __lack__ the money to build it.','There was a __lack__ of water.','He showed no __lack__ of courage.','The __lack__ of sleep made her tired.','A __lack__ of time was the problem.'],a:0,e:'윗글의 lacked는 동사 ‘~이 부족하다’. 나머지는 명사 ‘부족’이에요.'}],
 M:[
  {k:'gr',marks:[['draw','draw'],['emphasizes','emphasizes'],['lacked','lacked'],['made','make'],['have','have']],e:'④ could be preserved and made available로 수동태 병렬.'},
  {k:'bl',ph:'the silences, interruptions, rumors, and other details',o:['the silences, interruptions, rumors, and other details','the exact dates of every event','the names of all slaveowners','the laws written by governments','the numbers in official reports'],e:'법률 문서에서 침묵·중단·소문 같은 세부 사항도 살펴보아요.'},
  {k:'ins',s:6,at:[3,4,5,6,7],e:'Yet rather than simply take ~는 앞에서 엘리트 사료를 분석한다고 한 뒤, 그것을 ‘결에 거슬러’ 읽는 방식을 소개해요.'}]
});
})();

// 영어 공통 틀 — 지문 파일(eng_o/eng_m/eng_t)이 ENG.add 로 지문을 등록하고, eng.js 가 앱에 연결해요.
window.ENG={L:[],T:{},TS:{},UN:['올림포스','2026년 10월 학평','교과서 4과'],add(id,p){p.id=id;this.L.push(p)}};
ENG.h=W=>{const K={};W.forEach(w=>K[w[0]]=w[1]);
 const P=(...a)=>a.map(x=>Array.isArray(x)?x[0]+' – '+x[1]:x+' – '+K[x]).join(' · ');
 const E=(...a)=>a.map(x=>x+'='+K[x]).join(', ');return {P,E,K}};

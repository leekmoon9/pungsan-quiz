const fs=require('fs');global.CUR={'경제':[1,2,3,4].map(u=>({n:'',m:[1,2,3].map(k=>({n:'',q:[]}))}))};global.NOTE={'경제':{}};global.TIPS={};global.ECOQ={};global.ECOMK={};
global.ECOPG=(u,k,a,b)=>{const r=[];for(let i=a;i<=b;i++)r.push(`tb/eco/u${u}-${k}-${String(i).padStart(3,'0')}.jpg`);return r};
const files=process.argv.slice(2);files.forEach(f=>eval(fs.readFileSync(f,'utf8')));let bad=0;
for(const k in ECOQ){const L=ECOQ[k],M=ECOMK[k]||[];const b=L.filter(q=>!q.lv).length,x=L.filter(q=>q.lv).length;console.log(k,'basic',b,'x',x,'mock',M.length);
 L.concat(M.map(q=>Object.assign({t:'mc'},q))).forEach((q,i)=>{const t=q.t;
  if(t=='mc'&&!(q.o&&q.a>=0&&q.a<q.o.length)){console.log('mc bad',k,i);bad++}
  if(t=='ox'&&typeof q.a!='boolean'){console.log('ox bad',k,i);bad++}
  if(t=='sh'&&!(Array.isArray(q.a)&&q.m&&q.q.includes('[빈칸]'))){console.log('sh bad',k,i);bad++}
  if(!TIPS[q.g]){console.log('no tip',k,i,q.g);bad++}
  (q.e.match(/⟦(\d)⟧/g)||[]).forEach(t=>{if(+t[1]>q.o.length){console.log('tok',k,i);bad++}})})}
for(const k in NOTE['경제']){const v=NOTE['경제'][k];v.pg.forEach(p=>{if(!fs.existsSync('/home/claude/pungsan-quiz/'+p)){console.log('missing',p);bad++}});v.b.forEach(b=>{if(!['h','h2','p','ul','key','def','vs','flow','tbl','tip','img'].includes(b[0])){console.log('blk',k,b[0]);bad++}})}
console.log('bad',bad);

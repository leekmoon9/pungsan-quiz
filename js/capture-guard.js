// ---- 캡처·복사 방지 (웹에서 가능한 범위) ----
(()=>{const ed=t=>t&&t.closest&&t.closest('input,textarea,[contenteditable]');
 const m=document.createElement('div');m.className='capm';m.textContent='화면 보호 중이에요. 다시 누르면 돌아와요.';
 const on=()=>{if(!document.body.contains(m))document.body.appendChild(m);document.body.classList.add('cap')},off=()=>document.body.classList.remove('cap');
 let t=0;const flash=ms=>{on();clearTimeout(t);t=setTimeout(()=>{if(document.hasFocus())off()},ms)};
 const wipe=()=>{try{navigator.clipboard&&navigator.clipboard.writeText('')}catch(e){}};
 window.addEventListener('blur',on);window.addEventListener('focus',()=>{clearTimeout(t);t=setTimeout(off,250)});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)on()});
 m.addEventListener('click',()=>{if(document.hasFocus())off()});
 document.addEventListener('keydown',e=>{const k=e.key||'';
  if(k=='PrintScreen'||k=='Snapshot'){wipe();flash(1500);return}
  if(e.metaKey&&e.shiftKey){flash(2500);return}
  if((e.ctrlKey||e.metaKey)&&/^[psu]$/i.test(k)){e.preventDefault();return}
  if((e.ctrlKey||e.metaKey)&&/^[cx]$/i.test(k)&&!ed(e.target)){e.preventDefault()}},true);
 document.addEventListener('keyup',e=>{if(e.key=='PrintScreen'){wipe();flash(1500)}},true);
 document.addEventListener('contextmenu',e=>{if(!ed(e.target))e.preventDefault()},true);
 ['copy','cut'].forEach(v=>document.addEventListener(v,e=>{if(!ed(e.target))e.preventDefault()},true));
 document.addEventListener('dragstart',e=>{if(e.target&&e.target.tagName=='IMG')e.preventDefault()},true);
 window.addEventListener('beforeprint',on);window.addEventListener('afterprint',off);})();

!function(){"use strict";const e=document.querySelector(".js-slider");if(e){const t=document.querySelectorAll(".js-slide"),s=document.querySelector(".js-slide-next"),l=document.querySelector(".js-slide-prev"),i=document.querySelector(".js-slide:first-child"),d=document.querySelector(".js-slide:last-child"),c="is-show",n="is-hide",r="Next Slide",a="Prev Slide";let o=0;const u=e=>{t.forEach((e=>{e.classList.remove(c),e.classList.add(n)})),t[e].classList.remove(n),t[e].classList.add(c)},h=()=>{i.classList.contains(c)?(l.disabled=!0,l.setAttribute("title","")):(l.disabled=!1,l.setAttribute("title",a)),d.classList.contains(c)?(s.disabled=!0,s.setAttribute("title","")):(s.disabled=!1,s.setAttribute("title",r))},b=()=>{o++,o>t.length-1&&(o=0),u(o),h()},v=()=>{o--,o<0&&(o=t.length-1),u(o),h()};s.addEventListener("click",b),l.addEventListener("click",v),((e,t,s,l,i)=>{let d=null,c=null;e.addEventListener("touchstart",(e=>{const t=(e=>e.touches||e.originalEvent.touches)(e)[0];d=t.clientX,c=t.clientY}),{passive:!0}),e.addEventListener("touchmove",(e=>{if(!d||!c)return;let n=e.touches[0].clientX,r=e.touches[0].clientY,a=d-n,o=c-r;Math.abs(a)>Math.abs(o)&&(a>0?t.hasAttribute("disabled")||l():s.hasAttribute("disabled")||i()),d=null,c=null}),{passive:!0})})(e,s,l,b,v)}document.fonts.ready.then((()=>{document.querySelector(".preloader").classList.add("loaded")}))}();
(()=>{"use strict";const e=()=>{let e=!1;const t=function(t,n,o){let l=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const s=document.querySelectorAll(t),a=document.querySelector(n),c=document.querySelector(o),r=document.querySelectorAll("[data-modal]"),d=function(){const e=document.createElement("div");e.style.width="50px",e.style.height="50px",e.style.overflowY="scroll",e.style.visibility="hidden",document.body.appendChild(e);const t=e.offsetWidth-e.clientWidth;return e.remove(),t}();s.forEach((t=>{t.addEventListener("click",(n=>{n.target&&n.preventDefault(),e=!0,l&&t.remove(),r.forEach((e=>{e.style.display="none",e.classList.add("animated","fadeIn")})),a.style.display="block",document.body.style.overflow="hidden",document.body.style.marginRight=`${d}px`}))})),c.addEventListener("click",(e=>{r.forEach((e=>{e.style.display="none"})),a.style.display="none",document.body.style.overflow="",document.body.style.marginRight="0px"})),a.addEventListener("click",(e=>{e.target===a&&(r.forEach((e=>{e.style.display="none"})),a.style.display="none",document.body.style.overflow="",document.body.style.marginRight="0px")}))};t(".button-design",".popup-design",".popup-design .popup-close"),t(".button-consultation",".popup-consultation",".popup-consultation .popup-close"),window.addEventListener("scroll",(()=>{!e&&window.scrollY+document.documentElement.clientHeight>=document.documentElement.scrollHeight-20&&document.querySelector(".fixed-gift").click()})),t(".fixed-gift",".popup-gift",".popup-gift .popup-close",!0)},t=(e,t,n,o)=>{let l=1,s=!1;const a=document.querySelectorAll(e);function c(e){e>a.length&&(l=1),e<1&&(l=a.length),a.forEach((e=>{e.classList.add("animated"),e.style.display="none"})),a[l-1].style.display="block"}function r(e){c(l+=e)}c(l);try{const e=document.querySelector(n),t=document.querySelector(o);e.addEventListener("click",(()=>{r(-1),a[l-1].classList.remove("slideInLeft"),a[l-1].classList.add("slideInRight")})),t.addEventListener("click",(()=>{r(1),a[l-1].classList.remove("slideInRight"),a[l-1].classList.add("slideInLeft")}))}catch(e){console.log(e)}function d(){s="vertical"===t?setInterval((()=>{r(1),a[l-1].classList.add("slideInDown")}),4e3):setInterval((()=>{r(1),a[l-1].classList.remove("slideInRight"),a[l-1].classList.add("slideInLeft")}),4e3)}a[0].parentNode.addEventListener("mouseenter",(()=>{clearInterval(s)})),a[0].parentNode.addEventListener("mouseleave",(()=>{d()})),d()},n=async(e,t)=>{const n=await fetch(e,{method:"POST",body:t});return await n.text()},o=e=>{const t=(e,t)=>{t.focus(),t.setSelectionRange?t.setSelectionRange(e,e):t.createTextRange&&t.createTextRange().collapse(!0).moveEnd("character",e).moveStart("character",e).select()};function n(e){e.target.selectionStart<2&&t(2,e.target);const n="+7 (___) ___ ____";let o=0;const l=n.replace(/\D/g,"");let s=this.value.replace(/\D/g,"");l.length>=s.length&&(s=l),this.value=n.replace(/./g,(e=>/[_\d]/.test(e)&&o<s.length?s.charAt(o++):o>=s.length?"":e)),"blur"===e.type?2==this.value.length&&(this.value=""):t(this.value.length,this)}document.querySelectorAll(e).forEach((e=>{e.addEventListener("click",n),e.addEventListener("input",n),e.addEventListener("focus",n),e.addEventListener("blur",n)}))},l=e=>{document.querySelectorAll(e).forEach((e=>{e.addEventListener("keypress",(e=>{e.key.match(/[^а-яё 0-9]/gi)&&e.preventDefault()})),e.addEventListener("paste",(e=>{(e.clipboardData||window.clipboardData).getData("text").match(/[^а-яё 0-9]/gi)&&e.preventDefault()}))}))},s=(e,t)=>{document.querySelectorAll(t);document.querySelector(e).addEventListener("click",(function(){(async e=>{const t=await fetch(e);if(!t.ok)throw new Error(`Could not fetch ${e}, status ${t.status}`);return await t.json()})("http://localhost:4000/assets/db.json").then((e=>{e.styles.forEach((e=>{let{src:n,title:o,link:l}=e;const s=document.createElement("div");s.classList.add("col-sm-3","col-sm-offset-0","col-xs-10","col-xs-offset-1","animated","fadeInUp"),s.innerHTML=`\n        <div class="styles-block">\n          <img src="${n}" alt="">\n          <h4>${o}</h4>\n          <a href="${l}">Подробнее</a>\n        </div>\n              `,document.querySelector(t).appendChild(s)}))})).catch((e=>console.log(e))),this.remove()}))},a=e=>{const t=document.querySelector(e);t.classList.add("animated"),window.addEventListener("scroll",(()=>{document.documentElement.scrollTop>window.screen.availHeight?(t.classList.add("fadeIn"),t.classList.remove("fadeOut")):(t.classList.add("fadeOut"),t.classList.remove("fadeIn"))}));document.querySelectorAll('[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=document.documentElement.scrollTop,{hash:n}=this,o=document.querySelector(n).getBoundingClientRect().top;let l=null;console.log(n),requestAnimationFrame((function e(s){null===l&&(l=s);const a=s-l,c=o<0?Math.max(t-a/.3,t+o):Math.min(t+a/.3,t+o);document.documentElement.scrollTo(0,c),c!=t+o?requestAnimationFrame(e):location.hash=n}))}))}))};window.addEventListener("DOMContentLoaded",(()=>{var c;e(),t(".feedback-slider-item","",".main-prev-btn",".main-next-btn"),t(".main-slider-item","vertical"),(()=>{const e=document.querySelectorAll("form"),t=document.querySelectorAll("input"),o=document.querySelectorAll("[name=upload]");o.forEach((e=>{e.addEventListener("input",(()=>{console.log(e.files);const t=e.files[0].name.split("."),n=t[0].length>6?"...":".",o=t[0].substring(0,6)+n+t[1];e.previousElementSibling.textContent=o}))})),e.forEach((e=>{e.addEventListener("submit",(l=>{l.preventDefault();const s=document.createElement("div");s.classList.add("status"),e.parentNode.appendChild(s),e.classList.add("animated","fadeOutUp"),setTimeout((()=>{e.style.display="none"}),400);const a=document.createElement("img");a.setAttribute("src","assets/img/spinner.gif"),a.classList.add("animated","fadeInUp"),s.appendChild(a);const c=document.createElement("div");c.textContent="Загрузка...",s.appendChild(c);const r=new FormData(e);let d;d=e.closest(".popup-design")||e.classList.contains("calc_form")?"assets/server.php":"assets/question.php",console.log(d),n(d,r).then((e=>{c.textContent="Спасибо! Скоро наш менеджер Вам перезвонит",a.setAttribute("src","assets/img/ok.png")})).catch((()=>{a.setAttribute("src","assets/img/fail.png"),c.textContent="Что-то пошло не так :("})).finally((()=>{t.forEach((e=>{e.value=""})),o.forEach((e=>{e.previousElementSibling.textContent="Файл не выбран"})),setTimeout((()=>{s.remove(),e.style.display="block",e.classList.remove("fadeOutUp"),e.classList.add("fadeInUp")}),5e3)}))}))}))})(),o("[name=phone]"),l("[name=name]"),l("[name=message]"),s(".button-styles","#styles .row"),((e,t,n,o,l,s)=>{const a=document.querySelector(e),c=document.querySelector(t),r=document.querySelector(n),d=document.querySelector(o),i=document.querySelector(l),u=document.querySelector(s);let m=0;const p=()=>{m=Math.round(+a.value*+c.value+ +r.value),""==a.value||""==c.value?i.textContent="Пожалуйста, выберите размер и материал картины":"IWANTPOPART"==d.value?(i.textContent=Math.round(.7*m),u.value=Math.round(.7*m)):(i.textContent=m,u.value=m)};a.addEventListener("change",p),c.addEventListener("change",p),r.addEventListener("change",p),d.addEventListener("keyup",p)})("#size","#material","#options",".promocode",".calc-price",".calc-price_value"),(()=>{const e=document.querySelector(".portfolio-menu"),t=e.querySelectorAll("li"),n=document.querySelector(".portfolio-wrapper"),o=n.querySelectorAll(".all"),l=document.querySelector(".portfolio-no");e.addEventListener("click",(e=>{"LI"==e.target?.tagName&&(t.forEach((e=>e.classList.remove("active"))),e.target.classList.add("active"),(e=>{o.forEach((e=>{e.style.display="none",e.classList.remove("animated","fadeIn")})),l.style.display="none",l.classList.remove("animated","fadeIn");const t=n.querySelectorAll(`.${e}`);t.length?t.forEach((e=>{e.style.display="block",e.classList.add("animated","fadeIn")})):(l.style.display="block",l.classList.add("animated","fadeIn"))})(e.target.dataset.type))}))})(),c=".sizes-block",document.querySelectorAll(c).forEach((e=>{e.addEventListener("mouseover",(()=>{!function(e){const t=e.querySelector("img");t.src=`${t.src.slice(0,-4)}-1.png`,e.querySelectorAll("p:not(.sizes-hit)").forEach((e=>{e.style.display="none"}))}(e)})),e.addEventListener("mouseout",(()=>{!function(e){const t=e.querySelector("img");t.src=`${t.src.slice(0,-6)}.png`,e.querySelectorAll("p:not(.sizes-hit)").forEach((e=>{e.style.display="block"}))}(e)}))})),((e,t)=>{const n=document.querySelector(e),o=document.querySelector(t);n.style.display="none",o.addEventListener("click",(()=>{"none"==n.style.display&&window.screen.availWidth<993?n.style.display="block":n.style.display="none"})),window.addEventListener("resize",(()=>{window.screen.availWidth>992&&(n.style.display="none")}))})(".burger-menu",".burger"),a(".pageup"),(()=>{const e=document.querySelectorAll('[name="upload"]');["dragenter","dragleave","dragover","drop"].forEach((t=>{e.forEach((e=>{e.addEventListener(t,(e=>{e.preventDefault(),e.stopPropagation()}),!1)}))})),["dragenter","dragover"].forEach((t=>{e.forEach((e=>{e.addEventListener(t,(()=>{var t;(t=e).closest(".file_upload").style.border="5px solid yellow",t.closest(".file_upload").style.backgroundColor="#00000070"}),!1)}))})),["dragleave","drop"].forEach((t=>{e.forEach((e=>{e.addEventListener(t,(()=>{var t;(t=e).closest(".file_upload").style.border="none",t.closest(".calc")?t.closest(".file_upload").style.backgroundColor="#fff":t.closest(".file_upload").style.backgroundColor="#ededed"}),!1)}))})),e.forEach((e=>{e.addEventListener("drop",(t=>{e.files=t.dataTransfer.files;const o=e.files[0].name.split("."),l=o[0].length>6?"...":".",s=o[0].substring(0,6)+l+o[1];if(e.previousElementSibling.textContent=s,e.closest(".main")){const t=new FormData;t.append("image_file",e.files[0]),n("assets/server.php",t).then((e=>{console.log(e)}))}}))}))})()}))})();
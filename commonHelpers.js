import{S as w,A as L,a as S,i as x}from"./assets/vendor-9bc83c7d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&s(p)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const k=document.querySelector(".header-menubtn"),C=document.querySelector(".header-mob-menubtn"),M=document.querySelector(".header-menu"),v=document.querySelector(".header-mob-menu"),j=document.querySelector(".header-close-icon"),N=document.querySelector(".header-mobmenu-list");N.addEventListener("click",e=>{e.target.nodeName==="A"&&v.classList.toggle("header-mob-hidden")});k.addEventListener("click",()=>M.classList.toggle("header-hidden"));C.addEventListener("click",()=>v.classList.toggle("header-mob-hidden"));j.addEventListener("click",()=>v.classList.toggle("header-mob-hidden"));const l={projectsSection:document.querySelector("#projects"),boxArrows:document.querySelector(".swiper-box-arrows"),prevBtnProjects:document.querySelector(".swiper-prev-btn"),nextBtnProjects:document.querySelector(".swiper-next-btn")};let b=!1;function E(e,r,o){e.isBeginning?r.disabled=!0:e.isEnd?o.disabled=!0:(o.disabled=!1,r.disabled=!1)}function y(e,r){new IntersectionObserver(s=>{s.forEach(t=>{b=t.isIntersecting})},{threshold:.95}).observe(e),document.addEventListener("keydown",function(s){s.key==="Tab"&&b&&(s.preventDefault(),s.shiftKey?r.slidePrev():r.slideNext())})}function A(e,r){e.isBeginning&&(r.disabled=!0)}l.prevBtnProjects.addEventListener("click",()=>{f.slidePrev()});l.nextBtnProjects.addEventListener("click",()=>{f.slideNext()});const f=new w(".project-swiper",{direction:"horizontal",speed:1500,spaceBetween:80,centerInsufficientSlides:!0,centeredSlidesBounds:!0,grabCursor:!0,preventClicks:!0,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},on:{slideChange:function(){E(this,l.prevBtnProjects,l.nextBtnProjects)}},effect:"coverflow",coverflowEffect:{rotate:30,slideShadows:!0}});A(f,l.prevBtnProjects);y(l.projectsSection,f);const P=document.querySelector(".next-slide"),h=document.querySelector(".prev-slide"),q=document.querySelector(".reviews-box"),I=q.querySelector(".reviews-list"),V=document.querySelector(".reviews-section");let m;D();async function O(){const o="https://portfolio-js.b.goit.study/api/reviews";try{return(await L.get(o)).data}catch(s){throw console.error("Error fetching reviews:",s),s}}async function D(){try{const e=await O();if(!e||e.length===0)throw new Error;const r=e.map(({_id:o,author:s,avatar_url:t,review:n})=>`
                <li class="review-item swiper-slide">
                <div class="review-swiper-window "> 
     
                <div class="review-photo">
                        <img src="${t}" alt='${s}' class="avatar">
                    </div>
                    <div class="review-content">
                        <h3 class="review-author">${s}</h3>
                         <p class="review-text">${n}</p>
                    </div> 
                    </div>
                </li>`).join("");I.innerHTML=r}catch(e){alert("Error rendering reviews"),console.error("Error rendering reviews:",e),q.innerHTML='<p class="review-error">Not found</p>'}}m=new w(".reviews-box",{direction:"horizontal",speed:400,slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},on:{slideChange:function(){E(this,h,P)}},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});m.isBeginning&&(h.disabled=!0);y(V,m);P.addEventListener("click",()=>{m.slideNext()});h.addEventListener("click",()=>{m.slidePrev()});const R=new S(".container-second",{duration:250,showMultiple:!0});new S(".container-first",{duration:250,showMultiple:!0});document.addEventListener("DOMContentLoaded",e=>{R.open(0)});const T=L.create({baseURL:"https://portfolio-js.b.goit.study/api"}),g=document.querySelector(".footer-form"),i=document.querySelector(".footer-form-email"),c=document.querySelector(".footer-form-comment"),u=document.querySelector(".footer-modal"),a=document.querySelector(".error-message"),d=document.querySelector(".error-comm-message"),$=document.querySelector(".footer-modal-close-btn-icon");async function _(e,r){try{return(await T.post("/requests",{email:e,comment:r})).data}catch(o){throw new Error(o.res.data.message)}}g.addEventListener("submit",async e=>{if(e.preventDefault(),i.checkValidity())i.classList.remove("incorrect-email"),i.classList.add("correct-email"),a.classList.remove("error-message"),a.classList.add("success-message"),a.textContent="Success!";else{i.classList.remove("correct-email"),i.classList.add("incorrect-email"),a.classList.remove("success-message"),a.classList.add("error-message"),a.textContent="Invalid email, try again";return}if(c.checkValidity())c.classList.remove("incorrect-email"),c.classList.add("correct-email"),d.classList.remove("error-comm-message"),d.classList.add("success-message"),d.textContent="Success!";else{c.classList.remove("correct-email"),c.classList.add("incorrect-email"),d.classList.remove("success-message"),d.classList.add("error-comm-message"),d.textContent="Please, send us a message.";return}const r=i.value.trim(),o=c.value.trim();try{await _(r,o)&&(z(),U()),g.reset()}catch(s){x.warning({title:"WARNING",message:"Enter the correct data",position:"bottomCenter"}),console.error("Помилка:",s)}});function z(){u.classList.add("is-open")}function U(){$.addEventListener("click",()=>{u.classList.remove("is-open")}),document.addEventListener("keydown",e=>{(e.key==="Escape"||e.key==="Esc")&&u.classList.remove("is-open")})}window.addEventListener("click",e=>{e.target==u&&u.classList.remove("is-open")});const F=document.querySelector(".about-section");document.querySelector(".about-skills-list-item");const G=document.querySelector(".swiper-next-btn-about"),B=new w(".swiper-about",{direction:"horizontal",speed:400,spaceBetween:0,slidesPerView:2,slidesPerGroup:1,loop:!0,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});G.addEventListener("click",()=>{B.slideNext()});y(F,B);
//# sourceMappingURL=commonHelpers.js.map

import{S as f,a as y,A as S}from"./assets/vendor-87d9ed32.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const L=document.querySelector(".header-menubtn"),E=document.querySelector(".header-mob-menubtn"),j=document.querySelector(".header-menu"),v=document.querySelector(".header-mob-menu"),q=document.querySelector(".header-close-icon");L.addEventListener("click",()=>j.classList.toggle("header-hidden"));E.addEventListener("click",()=>v.classList.toggle("header-mob-hidden"));q.addEventListener("click",()=>v.classList.toggle("header-mob-hidden"));const w={projectsSection:document.querySelector("#projects"),boxArrows:document.querySelector(".js-box-arrows")};let c,l,u=!1;function p(t,r,o){t.isBeginning?r.disabled=!0:t.isEnd?o.disabled=!0:(o.disabled=!1,r.disabled=!1)}function g(t,r){new IntersectionObserver(n=>{n.forEach(e=>{u=e.isIntersecting})},{threshold:.95}).observe(t),document.addEventListener("keydown",function(n){n.key==="Tab"&&u&&(n.preventDefault(),n.shiftKey?r.slidePrev():r.slideNext())})}function B(t,r){const o=`<button class="js-prev-btn">
          <svg class="js-prev-arrow">
            <use href="./img/icons.svg#arrow-left"></use>
          </svg>
        </button>
        <button class="js-next-btn">
          <svg class="js-next-arrow">
            <use href="./img/icons.svg#arrow-right"></use>
          </svg>
        </button>`;r.insertAdjacentHTML("afterbegin",o),c=r.querySelector(".js-prev-btn"),l=r.querySelector(".js-next-btn"),c.addEventListener("click",()=>{t.slidePrev()}),l.addEventListener("click",()=>{t.slideNext()}),P(t,c)}function P(t,r){t.isBeginning&&(r.disabled=!0)}document.addEventListener("DOMContentLoaded",()=>{B(h,w.boxArrows)});const h=new f(".project-swiper",{direction:"horizontal",speed:1500,spaceBetween:80,centerInsufficientSlides:!0,centeredSlidesBounds:!0,grabCursor:!0,preventClicks:!0,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},on:{slideChange:function(){p(this,c,l)}},effect:"coverflow",coverflowEffect:{rotate:30,slideShadows:!0}});g(w.projectsSection,h);const m=document.querySelector(".next-slide"),a=document.querySelector(".prev-slide"),b=document.querySelector(".reviews-box"),x=b.querySelector(".reviews-list"),O=document.querySelector(".reviews-section");let i;M();async function k(){const o="https://portfolio-js.b.goit.study/api/reviews";try{return(await y.get(o)).data}catch(n){throw console.error("Error fetching reviews:",n),n}}async function M(){try{const t=await k();if(!t||t.length===0){b.innerHTML='<p class="review-error">Not found</p>';return}const r=t.map(({_id:o,author:n,avatar_url:e,review:s})=>`
                <li class="review-item swiper-slide">
                <div class="review-swiper-window "> 
     
                <div class="review-photo">
                        <img src="${e}" alt='${n}' class="avatar">
                    </div>
                    <div class="review-content">
                        <h3 class="review-author">${n}</h3>
                         <p class="review-text">${s}</p>
                    </div> 
                    </div>
                </li>`).join("");x.innerHTML=r}catch(t){alert("Error rendering reviews"),console.error("Error rendering reviews:",t)}}i=new f(".reviews-box",{direction:"horizontal",speed:400,slidesPerView:1,spaceBetween:16,keyboard:{enabled:!0,onlyInViewport:!0},on:{slideChange:function(){p(this,a,m)}},breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});i.isBeginning&&(a.disabled=!0);g(O,i);m.addEventListener("click",()=>{i.slideNext()});a.addEventListener("click",()=>{i.slidePrev()});const N=document.querySelector(".ac-trigger");new S([".container-first",".container-second"],{duration:250,showMultiple:!0});N.click();
//# sourceMappingURL=commonHelpers.js.map

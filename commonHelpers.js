import{S as c,a as l}from"./assets/vendor-501c3e30.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const d=document.querySelector(".header-menubtn");document.querySelector(".header-mob-menubtn");const u=document.querySelector(".header-menu");d.addEventListener("click",()=>u.classList.toggle("header-hidden"));new c(".swiper",{direction:"horizontal",loop:!0,speed:400,spaceBetween:100});const a=document.querySelector(".reviews-box"),p=a.querySelector(".swiper-wrapper");async function f(){const n="https://portfolio-js.b.goit.study/api/reviews";try{return(await l.get(n)).data}catch(t){throw console.error("Error fetching reviews:",t),t}}async function w(){try{const o=await f();if(!o||o.length===0){a.innerHTML='<p class="review-error">Not found</p>';return}const s=o.map(({author:t,avatar_url:e,review:r})=>`
                <li class="review-item swiper-slide">
                    <div class="review-photo">
                        <img src="${e}" alt='${t}' class="avatar">
                    </div>
                    <div class="review-content">
                        <h3 class="author">${t}</h3>
                        <p class="text">${r}</p>
                    </div>
                </li>`).join("");p.innerHTML=s;const n=new c(".swiper",{direction:"horizontal",loop:!0,loopAdditionalSlides:1,speed:400,spaceBetween:30})}catch(o){alert("Error rendering reviews"),console.error("Error rendering reviews:",o)}}w();
//# sourceMappingURL=commonHelpers.js.map

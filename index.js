import{a as p,S as m,i as c}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="50196951-391601c250e619b024764c208",y="https://pixabay.com/api/";async function h(i){const o={key:d,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return(await p.get(y,{params:o})).data}catch(t){throw console.error("Помилка під час запиту до Pixabay API:",t),t}}const u=document.querySelector(".gallery"),a=document.querySelector(".loader"),g=new m(".gallery a",{captionsData:"alt",captionDelay:250});function b({webformatURL:i,largeImageURL:o,tags:t,likes:n,views:e,comments:r,downloads:s}){return`
    <li class="gallery-item">
      <a href="${o}">
        <img src="${i}" alt="${t}" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b><br> ${n}</p>
        <p class="info-item"><b>Views</b><br> ${e}</p>
        <p class="info-item"><b>Comments</b><br> ${r}</p>
        <p class="info-item"><b>Downloads</b><br> ${s}</p>
      </div>
    </li>
  `}function L(i){if(!i||i.length===0){f();return}const o=i.map(t=>b(t)).join("");u.innerHTML=o,g.refresh()}function f(){u.innerHTML=""}function v(){a&&a.classList.add("visible")}function w(){a&&a.classList.remove("visible")}const l=document.querySelector(".form"),S=l.querySelector('input[name="search-text"]');l.addEventListener("submit",async i=>{i.preventDefault();const o=S.value.trim();if(o===""){c.warning({title:"Увага",message:"Будь ласка, введіть пошуковий запит.",position:"topRight"});return}f(),v();try{const t=await h(o);t.hits.length===0?c.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(t.hits)}catch{c.error({title:"Помилка",message:"Не вдалося завантажити зображення. Спробуйте пізніше.",position:"topRight"})}finally{w(),l.reset()}});
//# sourceMappingURL=index.js.map

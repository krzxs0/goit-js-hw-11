var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,a.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var s=a("2POL7");let i=document.getElementById("inputSearch"),o=document.getElementById("submitButton"),l=document.getElementsByClassName("load-more")[0],r=document.querySelector(".gallery"),d=1,c=0,m=[];l.onclick=async()=>{await u()},o.onclick=async()=>{await f()};i.addEventListener("keypress",(async e=>{"Enter"===e.key&&(e.preventDefault(),await f())}));const f=async()=>{if(0===i.value.length)return void Notiflix.Notify.failure("Please enter something and try again!");d=1;let e=await(0,s.getImages)(i.value);0!==e.data.totalHits?(Notiflix.Notify.success(`Hooray! we found ${e.data.totalHits}`),c=Math.ceil(e.data.totalHits/20),l.style.display="block",e.data.hits.forEach((e=>{m.push({imgURL:e.webformatURL,tags:e.tags,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads})})),r.innerHTML="",m.forEach((e=>{const t=y(e);r.insertAdjacentHTML("beforeend",t)})),d++,m=[]):Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")},u=async()=>{let e=await(0,s.getImages)(i.value,d);d++,e.data.hits.forEach((e=>{m.push({imgURL:e.webformatURL,tags:e.tags,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads})}));const t=m.map(y).join("");r.insertAdjacentHTML("beforeend",t),m=[],d>c&&(l.style.display="none")},y=({imgURL:e,tags:t,likes:n,views:a,comments:s,downloads:i})=>`\n  <div class="photo-card">\n    <img src="${e}" alt="${t}" loading="lazy" />\n    \n    <div class="info">\n      <p class="info-item">\n        <b>Likes ${n}</b>\n      </p>\n      <p class="info-item">\n        <b>Views ${a}</b>\n      </p>\n      <p class="info-item">\n        <b>Comments ${s}</b>\n      </p>\n      <p class="info-item">\n        <b>Downloads ${i}</b>\n      </p>\n    </div>\n  </div>\n`;
//# sourceMappingURL=index.32884872.js.map

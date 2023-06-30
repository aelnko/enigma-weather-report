import{createHeaderStructure,createStartContainerStructure}from"./structure.js";import app from"../app.js";const isLength=(e,t,r)=>e.length>=t&&e.length<=r,isAlphanumeric=e=>/^[a-z0-9]+$/i.test(e),isAscii=e=>/^[\x00-\x7F]*$/.test(e),validate=(e,t)=>({username:(e=>/^[a-z0-9]+$/i.test(e)?!!isLength(e,3,20)||"uLength":"uAlphanumeric")(e),password:(e=>isLength(e,8,20)?!!/^[\x00-\x7F]*$/.test(e)||"pAscii":"pLength")(t)}),validateFormData=()=>{const e=document.querySelector(".forgot");e&&e.remove();const t=document.querySelector(".field2"),r=document.querySelector("#user"),s=document.querySelector("#password"),a=r.value,n=s.value,o=validate(a,n),c=(e,a)=>{("username"===e?r:s).style.border="1px solid #e35050",t.insertAdjacentElement("afterend",((e,t)=>{const r=document.createElement("span");return r.classList.add("forgot"),r.setAttribute("id",t),r.innerText=e,r})(a,e))},u=e=>{("username"===e?r:s).style.border="1px solid #ffffff",(e=>{const t=document.querySelector(`#${e}`);t&&t.remove()})(e)};switch(o.username){case"uAlphanumeric":c("username","The username should consist of only letters and numbers");break;case"uLength":c("username","Username must contain from 3 to 20 characters");break;default:u("username")}switch(o.password){case"pLength":c("pw","Password must contain from 8 to 20 characters");break;case"pAscii":c("pw","Password should consist of only ASCII characters");break;default:u("pw")}if(!0===o.username&&(r.style.border="1px solid #ffffff"),!0===o.password&&(s.style.border="1px solid #ffffff"),o.username&&!0===o.password)return{validation:!0,username:a}},registerHandler=()=>{const{validation:e,username:t}=validateFormData();if(e){const e=document.querySelector(".header");document.querySelector(".container").remove();const r=createStartContainerStructure();e.insertAdjacentElement("afterend",r),e.remove();const s=createHeaderStructure();s.setAttribute("id","authorized"),r.insertAdjacentElement("beforebegin",s);document.querySelector(".registration-message").innerText=t}app()};export default registerHandler;
import blockRegistrationButton from"./utils/block.js";import{openRegistrationForm}from"./utils/registration.js";import{renderWeatherInfo,setContainerOpenId}from"./utils/render.js";import switchTheme from"./utils/theme.js";const app=()=>{const e=document.querySelector(".image-button"),t=document.querySelector(".theme"),r=document.querySelector(".user-icon"),n=document.querySelector(".search-input");e.addEventListener("click",renderWeatherInfo),e.addEventListener("click",setContainerOpenId),t.addEventListener("click",switchTheme),n.addEventListener("keypress",(e=>{"Enter"===e.key&&renderWeatherInfo()})),r.addEventListener("click",openRegistrationForm),blockRegistrationButton()};app();export default app;
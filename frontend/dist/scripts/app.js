import{renderWeatherInfo}from"./utils/render.js";import switchTheme from"./utils/theme.js";const app=()=>{const e=document.querySelector(".image-button"),t=document.querySelector(".theme");e.addEventListener("click",renderWeatherInfo),t.addEventListener("click",switchTheme)};app();
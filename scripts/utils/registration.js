import{createHeaderStructure,createRegistrationFormStructure,createStartContainerStructure}from"./structure.js";import registerApp from"../registerApp.js";import app from"../app.js";const closeRegistrationForm=()=>{document.querySelector(".container").remove();document.querySelector(".header").remove();const e=createStartContainerStructure(),r=createHeaderStructure();document.body.append(r,e),app()},openRegistrationForm=()=>{const e=document.querySelector(".container__wrapper");e.innerHTML="";document.querySelector(".registration-button").remove();const r=createRegistrationFormStructure();e.append(r),registerApp()};export{openRegistrationForm,closeRegistrationForm};
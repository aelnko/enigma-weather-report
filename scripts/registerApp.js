import blockRegistrationButton from"./utils/block.js";import{closeRegistrationForm}from"./utils/registration.js";import registerHandler from"./utils/validator.js";const registerApp=()=>{const t=document.querySelector(".cancel-button"),e=document.querySelector(".register-button");t.addEventListener("click",closeRegistrationForm),e.addEventListener("click",registerHandler),blockRegistrationButton()};export default registerApp;
import { 
  createHeaderStructure,
  createRegistrationFormStructure,
  createStartContainerStructure,
 } from "./structure.js";
import registerApp from "../registerApp.js";
import app from "../app.js";

const closeRegistrationForm = () => {
  const container = document.querySelector('.container');
  container.remove();

  const header = document.querySelector('.header');
  header.remove();

  const newContainer = createStartContainerStructure();
  const newHeader = createHeaderStructure();
  const script = document.querySelector('#script');
  script.insertAdjacentElement('beforebegin', newHeader);
  script.insertAdjacentElement('beforebegin', newContainer);

  app();
};

const openRegistrationForm = () => {
  const wrapper = document.querySelector('.container__wrapper');
  wrapper.innerHTML = '';

  const registerButton = document.querySelector('.registration-button');
  registerButton.remove();

  const registrationForm = createRegistrationFormStructure();
  wrapper.append(registrationForm);

  registerApp();
};

export {
  openRegistrationForm,
  closeRegistrationForm,
};

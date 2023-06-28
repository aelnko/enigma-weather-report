import { 
  createHeaderStructure,
  createRegistrationFormStructure,
  createRegistrationWithoutButtonStructure,
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

  const header = document.querySelector('.header');
  document.querySelector('div .registration').remove();
  const registration = createRegistrationWithoutButtonStructure();
  header.append(registration);

  const registrationForm = createRegistrationFormStructure();
  wrapper.append(registrationForm);

  registerApp();
};

export {
  openRegistrationForm,
  closeRegistrationForm,
};

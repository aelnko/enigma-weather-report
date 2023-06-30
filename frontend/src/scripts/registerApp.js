import blockRegistrationButton from "./utils/block.js";
import { closeRegistrationForm } from "./utils/registration.js";
import registerHandler from "./utils/validator.js";

const registerApp = () => {
  const closeButton = document.querySelector('.cancel-button');
  const registrationButton = document.querySelector('.register-button');

  closeButton.addEventListener('click', closeRegistrationForm);
  registrationButton.addEventListener('click', registerHandler);
  blockRegistrationButton();
};

export default registerApp;

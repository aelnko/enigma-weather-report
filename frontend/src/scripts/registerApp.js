import { closeRegistrationForm } from "./utils/registration.js";
import { checkForCorrectData } from "./utils/validator.js";

const registerApp = () => {
  const closeButton = document.querySelector('.cancel-button');
  const registrationButton = document.querySelector('.register-button');

  closeButton.addEventListener('click', closeRegistrationForm);
  registrationButton.addEventListener('click', checkForCorrectData);
};

export default registerApp;

import { closeRegistrationForm } from "./utils/registration.js";

const registerApp = () => {
  const closeButton = document.querySelector('.cancel-button');

  closeButton.addEventListener('click', closeRegistrationForm);
};

export default registerApp;

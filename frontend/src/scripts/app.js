import { openRegistrationForm, closeRegistrationForm } from "./utils/registration.js";
import { renderWeatherInfo, setContainerOpenId, setContainerRegisterId } from "./utils/render.js";
import switchTheme from "./utils/theme.js";

const app = () => {
  const searchButton = document.querySelector('.image-button');
  const themeButton = document.querySelector('.theme');
  const registrationButton = document.querySelector('.registration-button');
  const closeButton = document.querySelector('.cancel-button');
  console.log(closeButton);

  searchButton.addEventListener('click', renderWeatherInfo);
  searchButton.addEventListener('click', setContainerOpenId);
  themeButton.addEventListener('click', switchTheme);
  registrationButton.addEventListener('click', openRegistrationForm);
};

app();

export default app;

import blockRegistrationButtonWhenAuthorized from "./utils/block.js";
import { openRegistrationForm } from "./utils/registration.js";
import { renderWeatherInfo, setContainerOpenId } from "./utils/render.js";
import switchTheme from "./utils/theme.js";

const app = () => {
  const searchButton = document.querySelector('.image-button');
  const themeButton = document.querySelector('.theme');
  const registrationButton = document.querySelector('.registration-button');

  searchButton.addEventListener('click', renderWeatherInfo);
  searchButton.addEventListener('click', setContainerOpenId);
  themeButton.addEventListener('click', switchTheme);
  registrationButton.addEventListener('click', openRegistrationForm);
  blockRegistrationButtonWhenAuthorized();
};

app();

export default app;

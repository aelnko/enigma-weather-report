import blockRegistrationButtonWhenAuthorized from "./utils/block.js";
import followButtonHandler from "./utils/favourite.js";
import { openRegistrationForm } from "./utils/registration.js";
import { renderWeatherInfo, setContainerOpenId } from "./utils/render.js";
import switchTheme from "./utils/theme.js";

const app = () => {
  const searchButton = document.querySelector('.image-button');
  const themeButton = document.querySelector('.theme');
  const registrationButton = document.querySelector('.user-icon');
  const followButton = document.querySelector('.follow');

  searchButton.addEventListener('click', renderWeatherInfo);
  searchButton.addEventListener('click', setContainerOpenId);
  themeButton.addEventListener('click', switchTheme);
  registrationButton.addEventListener('click', openRegistrationForm);
  followButton.addEventListener('click', followButtonHandler);
  blockRegistrationButtonWhenAuthorized();
};

app();

export default app;

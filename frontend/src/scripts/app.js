import blockRegistrationButtonWhenAuthorized from "./utils/block.js";
import followButtonHandler from "./utils/favourite.js";
import { openRegistrationForm } from "./utils/registration.js";
import { renderWeatherInfo, setContainerOpenId } from "./utils/render.js";
import switchTheme from "./utils/theme.js";
import { addToFavourites } from "./utils/addToFavourites.js";
import { showSlide } from "./utils/slider.js";

const app = () => {
  const searchButton = document.querySelector('.image-button');
  const themeButton = document.querySelector('.theme');
  const registrationButton = document.querySelector('.user-icon');
  const followButton = document.querySelector('.follow');
  const favouritesButton = document.querySelector('.favourite-button');
  searchButton.addEventListener('click', renderWeatherInfo);
  searchButton.addEventListener('click', setContainerOpenId);
  themeButton.addEventListener('click', switchTheme);
  registrationButton.addEventListener('click', openRegistrationForm);
  followButton.addEventListener('click', followButtonHandler);
  blockRegistrationButtonWhenAuthorized();
  favouritesButton.addEventListener('click', addToFavourites);
};

app();

export default app;

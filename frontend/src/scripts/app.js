import blockRegistrationButtonWhenAuthorized from "./utils/block.js";
import { openRegistrationForm } from "./utils/registration.js";
import { renderWeatherInfo, setContainerOpenId } from "./utils/render.js";
import switchTheme from "./utils/theme.js";

const app = () => {
  const searchButton = document.querySelector('.image-button');
  const themeButton = document.querySelector('.theme');
  const registrationButton = document.querySelector('.user-icon');
  const searchInput = document.querySelector('.search-input');

  searchButton.addEventListener('click', renderWeatherInfo);
  searchButton.addEventListener('click', setContainerOpenId);
  themeButton.addEventListener('click', switchTheme);
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      renderWeatherInfo();
    }
  });
  registrationButton.addEventListener('click', openRegistrationForm);
  blockRegistrationButtonWhenAuthorized();
};

app();

export default app;

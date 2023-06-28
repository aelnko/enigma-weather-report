import { renderWeatherInfo } from "./utils/render.js";
import switchTheme from "./utils/theme.js";

const app = () => {
  const searchButton = document.querySelector('.image-button');
  const themeButton = document.querySelector('.theme');
  searchButton.addEventListener('click', renderWeatherInfo);
  themeButton.addEventListener('click', switchTheme)
};

app();

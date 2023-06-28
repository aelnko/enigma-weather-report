import { renderWeatherInfo } from "./utils/render.js";
import switchTheme from "./utils/theme.js";

const app = () => {
  const searchButton = document.querySelector('.image-button');
  const themeButton = document.querySelector('.theme');
  const searchInput = document.querySelector('.search-input');
  searchButton.addEventListener('click', renderWeatherInfo);
  themeButton.addEventListener('click', switchTheme);
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      renderWeatherInfo();
    }
  })
};

app();

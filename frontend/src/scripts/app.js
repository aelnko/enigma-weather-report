import { renderWeatherInfo } from "./utils/render.js";

const app = () => {
  const searchButton = document.querySelector('.image-button');
  searchButton.addEventListener('click', renderWeatherInfo);
};

app();

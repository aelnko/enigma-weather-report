import { switchWeatherIcon, switchColor } from "./switch_view.js";
import getWeatherData from "../api.js";
import { createWeatherStructure, createErrorStructure } from "./structure.js";

const renderError = () => {
  const wrapper = document.querySelector('.container__wrapper');
  
  const weatherBox = document.querySelector('.weather-box');
  if (weatherBox) weatherBox.remove();

  const errorBox = document.querySelector('.error-box');
  if (errorBox) errorBox.remove();
  
  const errorBoxDiv = createErrorStructure();

  wrapper.append(errorBoxDiv);

  switchWeatherIcon(null);
  switchColor(null);
};

const renderWeatherInfo = async () => {  
  const cityName = document.querySelector('.search-input').value;
  const container = document.querySelector('.container');
  if (cityName !== '') {
    container.style.height = '650px';
  }
  const wrapper = document.querySelector('.container__wrapper');

  const weatherData = await getWeatherData(cityName);
  
  if (weatherData.message === 'city not found') {
    renderError();
    return;
  }
  
  const errorBox = document.querySelector('.error-box');
  if (errorBox) errorBox.remove();

  const weatherBox = document.querySelector('.weather-box');
  if (weatherBox) weatherBox.remove();
  
  const city = weatherData.name;
  const country = weatherData.sys.country;
  const {description, id} = weatherData.weather[0];
  const {temp, humidity} = weatherData.main;
  const windSpeed = weatherData.wind.speed;

  wrapper.append(createWeatherStructure());

  document.querySelector('.current-temp div').innerText = `${Math.round(temp)}°C`;
  document.querySelector('.city').innerText = `${city}, ${country}`;
  document.querySelector('.description').innerText = description;
  document.querySelector('span.humidity.value').innerText = `${humidity}%`;
  document.querySelector('span.wind-speed.value').innerText = `${windSpeed} m/s`;

  switchWeatherIcon(id);
  switchColor(id);
};

export {
  renderWeatherInfo,
};
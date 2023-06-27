import { switchWeatherIcon, switchColor } from "./switch_view.js";
import getWeatherData from "../api.js";
import { createWeatherStructure, createErrorStructure } from "./asd.js";

const createErrorDetailsDiv = () => {
  const div = document.createElement('div');
  div.classList.add('error-details', 'error-message');
  div.textContent = 'It seems there is no such city, try to enter the name again';
  div.style.marginTop = '96px';
  return div;
};

const createWeatherDetailsDiv = () => {
  const weatherDiv = document.createElement('div');
  weatherDiv.classList.add('weather-details');

  const createItemDiv = (str, imageName) => {
    const itemDiv = document.createElement('div');
    const span = document.createElement('span');
    const p = document.createElement('p');
    const iconDiv = document.createElement('div');
    const iconImg = document.createElement('img');
    const text = str.toLowerCase().replace(' ', '-');

    itemDiv.classList.add('item');
    
    span.classList.add('value', text);
    p.textContent = str;
    iconDiv.classList.add(text, 'icon');

    iconImg.src = `./image/${imageName}.png.png`;

    itemDiv.append(iconDiv, span, p);
    iconDiv.append(iconImg);

    return itemDiv;
  };

  const humidityDiv = createItemDiv('humidity', 'drop');
  const windSpeedDiv = createItemDiv('wind speed', 'wind');

  weatherDiv.append(humidityDiv, windSpeedDiv);

  return weatherDiv;
};

const setToDefault = () => {
  const errorDetailsDiv = document.querySelector('.error-details');
  if (errorDetailsDiv) errorDetailsDiv.remove();

  const errorBoxDiv = document.querySelector('.error-box');
  if (errorBoxDiv) {
    errorBoxDiv.classList.replace('error-box', 'weather-box');
    const weatherDetailsDiv = createWeatherDetailsDiv();
    errorBoxDiv.append(weatherDetailsDiv);
  }
  
  const description = document.querySelector('.description');
  description.style.marginTop = '';
};

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
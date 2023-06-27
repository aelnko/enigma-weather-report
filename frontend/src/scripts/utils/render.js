import { switchWeatherIcon, switchColor } from "./switch_view.js";
import getWeatherData from "../api.js";

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
  const weatherBoxDiv = document.querySelector('.weather-box');
  weatherBoxDiv.classList.replace('weather-box', 'error-box');

  const weatherDetailsDiv = document.querySelector('.weather-details');
  weatherDetailsDiv.remove();

  document.querySelector('.current-temp div').innerHTML = '';
  document.querySelector('.city').innerHTML = '';

  const description = document.querySelector('.description');
  description.innerText = 'Oh, no...';
  description.style.marginTop = '64px';

  const errorDiv = createErrorDetailsDiv();
  weatherBoxDiv.append(errorDiv);

  switchWeatherIcon(null);
  switchColor(null);
};

const renderWeatherInfo = async () => {
  setToDefault();
  
  const cityName = document.querySelector('.search-input').value;
  const weatherData = await getWeatherData(cityName);
  console.log(weatherData.cod);
  
  if (weatherData.message === 'city not found') {
    renderError();
    return;
  }
  
  const city = weatherData.name;
  const country = weatherData.sys.country;
  const {description, id} = weatherData.weather[0];
  const {temp, humidity} = weatherData.main;
  const windSpeed = weatherData.wind.speed;
  const feelsLike = weatherData.main.feels_lik;

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
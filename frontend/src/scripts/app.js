import getWeatherData from "./api.js";
import { switchColor, switchWeatherIcon } from "./utils/switch_view.js";

const renderWeatherInfo = async () => {
  const cityName = document.querySelector('.search-input').value;
  const weatherData = await getWeatherData(cityName);
  
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

const app = () => {
  const searchButton = document.querySelector('.image-button');
  searchButton.addEventListener('click', renderWeatherInfo);
};

app();

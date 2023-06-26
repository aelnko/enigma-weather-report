import getWeatherData from "./api.js";

const switchWeatherIcon = (id) => {
  const weatherIcon = document.querySelector('.weather-icon img');
  const container = document.querySelector('.container');
  
  if (id >= 200 && id <= 232) {
    weatherIcon.src = '../image/storm.png';
    if (container.classList.length > 1) {
      container.classList.forEach((item) => {
        if (item !== 'storm' && item !== 'container') {
          container.classList.remove(item);
        }
      });
    }
    container.classList.add('storm');
  } else if (id === 800) {
    weatherIcon.src = '../image/sunny.png';
    if (container.classList.length > 1) {
      container.classList.forEach((item) => {
        if (item !== 'sunny' && item !== 'container') {
          container.classList.remove(item);
        }
      });
    }
    container.classList.add('sunny');
  } else if (id === 801) {
    weatherIcon.src = '../image/cloudy.png';
    if (container.classList.length > 1) {
      container.classList.forEach((item) => {
        if (item !== 'cloudy' && item !== 'container') {
          container.classList.remove(item);
        }
      });
    }
    container.classList.add('cloudy');
  } else if (id === 802) {
    // условие для иконки с облачной погодой без солнца
    if (container.classList.length > 1) {
      container.classList.forEach((item) => {
        if (item !== 'cloudy' && item !== 'container') {
          container.classList.remove(item);
        }
      });
    }
    container.classList.add('cloudy');
  } else if (id === 803 || id === 804) {
    // условие для иконки с пасмурной погодой
    if (container.classList.length > 1) {
      container.classList.forEach((item) => {
        if (item !== 'broken-clouds' && item !== 'container') {
          container.classList.remove(item);
        }
      });
    }
    container.classList.add('broken-clouds');
  } else if (id >= 600 && id <= 622) {
    weatherIcon.src = '../image/snow.png';
    if (container.classList.length > 1) {
      container.classList.forEach((item) => {
        if (item !== 'snow' && item !== 'container') {
          container.classList.remove(item);
        }
      });
    }
    container.classList.add('snow');
  } else if (id >= 500 && id <= 531) {
    weatherIcon.src = '../image/rain.png';
    if (container.classList.length > 1) {
      container.classList.forEach((item) => {
        if (item !== 'rain' && item !== 'container') {
          container.classList.remove(item);
        }
      });
    }
    container.classList.add('rain');
  }
};

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
};

const app = () => {
  const searchButton = document.querySelector('.image-button');
  searchButton.addEventListener('click', renderWeatherInfo);
};

app();

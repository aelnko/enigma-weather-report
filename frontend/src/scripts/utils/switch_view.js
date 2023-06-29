import checkForDayTime from "./time.js";

const clearContainerClasses = (container) => {
  container.classList.forEach((item) => {
    if (item !== 'container') {
      container.classList.remove(item);
    }
  });
};

const switchColor = (id) => {
  const container = document.querySelector('.container');
  clearContainerClasses(container);

  if (id === null) {
    container.classList.add('error');
  } else if (id >= 200 && id <= 232) {
    container.classList.add('storm');
  } else if (id === 800) {
    container.classList.add('sunny');
  } else if (id === 801 || id === 802) {
    container.classList.add('cloudy');
  } else if (id === 803 || id === 804) {
    container.classList.add('broken-clouds');
  } else if (id >= 600 && id <= 622) {
    container.classList.add('snow');
  } else if (id >= 500 && id <= 531) {
    container.classList.add('rain');
  } else if (id >= 701 && id <= 781) {
    container.classList.add('fog');
  }
};

const switchWeatherIcon = (id) => {
  const weatherIcon = document.querySelector('.weather-icon img');
  const dayTime = checkForDayTime();

  if (id === null) {
    weatherIcon.src = '../../image/warning.png';
  } else if (id >= 200 && id <= 232) {
    weatherIcon.src = '../../image/storm.png';
  } else if (id === 800) {
    weatherIcon.src = `../../image/${dayTime}-sunny.png`;
  } else if (id === 801 || id === 802) {
    weatherIcon.src = `../../image/${dayTime}-cloudy.png`;
  } else if (id === 803 || id === 804) {
    weatherIcon.src = '../../image/overcast.png';
  } else if (id >= 600 && id <= 622) {
    weatherIcon.src = '../../image/snow.png';
  } else if (id >= 500 && id <= 531) {
    weatherIcon.src = '../../image/rain.png';
  } else if (id >= 701 && id <= 781) {
    weatherIcon.src = '../../image/fog.png';
  }
};

export {
  switchColor,
  switchWeatherIcon,
};

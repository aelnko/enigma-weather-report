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

  if (id >= 200 && id <= 232) {
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
  }
};

const switchWeatherIcon = (id) => {
  const weatherIcon = document.querySelector('.weather-icon img');

  if (id >= 200 && id <= 232) {
    weatherIcon.src = '../image/storm.png';
  } else if (id === 800) {
    weatherIcon.src = '../image/sunny.png';
  } else if (id === 801 || id === 802) {
    weatherIcon.src = '../image/cloudy.png';
  } else if (id === 803 || id === 804) {
    container.classList.add('broken-clouds');
  } else if (id >= 600 && id <= 622) {
    weatherIcon.src = '../image/snow.png';
  } else if (id >= 500 && id <= 531) {
    weatherIcon.src = '../image/rain.png';
  }
};

export {
  switchColor,
  switchWeatherIcon,
};

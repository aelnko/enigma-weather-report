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

export default switchWeatherIcon;

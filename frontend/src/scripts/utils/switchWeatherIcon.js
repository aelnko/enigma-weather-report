const switchWeatherIcon = (id) => {
  const weatherIcon = document.querySelector('.weather-icon img');
  const container = document.querySelector('.container');

  const clearContainerClasses = () => {
    container.classList.forEach((item) => {
      if (item !== 'container') {
        container.classList.remove(item);
      }
    });
  };

  if (id >= 200 && id <= 232) {
    weatherIcon.src = '../image/storm.png';
    clearContainerClasses();
    container.classList.add('storm');
  } else if (id === 800) {
    weatherIcon.src = '../image/sunny.png';
    clearContainerClasses();
    container.classList.add('sunny');
  } else if (id === 801 || id === 802) {
    weatherIcon.src = '../image/cloudy.png';
    clearContainerClasses();
    container.classList.add('cloudy');
  } else if (id === 803 || id === 804) {
    clearContainerClasses();
    container.classList.add('broken-clouds');
  } else if (id >= 600 && id <= 622) {
    weatherIcon.src = '../image/snow.png';
    clearContainerClasses();
    container.classList.add('snow');
  } else if (id >= 500 && id <= 531) {
    weatherIcon.src = '../image/rain.png';
    clearContainerClasses();
    container.classList.add('rain');
  }
};

export default switchWeatherIcon;

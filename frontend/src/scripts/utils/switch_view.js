import checkForDayTime from "./time.js";

const clearContainerClasses = (container) => {
  container.classList.forEach((item) => {
    if (item !== 'container') {
      container.classList.remove(item);
    }
  });
};

const switchGradient = (newClass) => {
  const container = document.querySelector('.container');
  clearContainerClasses(container);
  const gradients = {
    cloudy: 'linear-gradient(to left top, #caf6e5, #f4fcc1)',
    storm: 'linear-gradient(to left top, #97a8c4, #513a87)',
    sunny: 'linear-gradient(to left top, #FFFCA8, #FFBD3E)',
    'broken-clouds': 'linear-gradient(to left top, #bde2e9, #35475c)',
    snow: 'linear-gradient(to left top, #c1f5ff, #418be2)',
    rain: 'linear-gradient(to left top, #5c93e8, #193e69)',
    fog: 'linear-gradient(to left top, #8299c4, #92c9aa)',
    error: 'linear-gradient(to left top, #ffb4b4, #e35050)',
  };
  
  const gradientLayer = document.querySelector('.gradient-layer');
  const anotherLayer = document.querySelector('.another-gradient-layer');
  anotherLayer.opacity = 0;
  gradientLayer.style.opacity = 0;
  gradientLayer.style.background = gradients[newClass];
  
  let timer = setInterval(() => {
    let opacity = parseFloat(gradientLayer.style.opacity);
    opacity += 0.01;
    gradientLayer.style.opacity = opacity.toString();
    anotherLayer.style.opacity = opacity.toString();
    if (opacity >= 1.0) {
      container.style.background = gradients[newClass];
      gradientLayer.style.opacity = 0;
      clearInterval(timer);
    };
  }, 1);
  container.classList.add(newClass);
};

const switchColor = (id) => {
  const container = document.querySelector('.container');

  if (id === null) {
    switchGradient('error');
  } else if (id >= 200 && id <= 232) {
    switchGradient('storm');
  } else if (id === 800) {
    switchGradient('sunny');
  } else if (id === 801 || id === 802) {
    switchGradient('cloudy');
  } else if (id === 803 || id === 804) {
    switchGradient('broken-clouds');
  } else if (id >= 600 && id <= 622) {
    switchGradient('snow');
  } else if (id >= 500 && id <= 531) {
    switchGradient('rain');
  } else if (id >= 701 && id <= 781) {
    switchGradient('fog');
  }
};

const switchWeatherIcon = (id) => {
  const weatherIcon = document.querySelector('.weather-icon img');
  const dayTime = checkForDayTime();

  if (id === null) {
    weatherIcon.src = './image/warning.png';
  } else if (id >= 200 && id <= 232) {
    weatherIcon.src = './image/storm.png';
  } else if (id === 800) {
    weatherIcon.src = `./image/${dayTime}-sunny.png`;
  } else if (id === 801 || id === 802) {
    weatherIcon.src = `./image/${dayTime}-cloudy.png`;
  } else if (id === 803 || id === 804) {
    weatherIcon.src = './image/overcast.png';
  } else if (id >= 600 && id <= 622) {
    weatherIcon.src = './image/snow.png';
  } else if (id >= 500 && id <= 531) {
    weatherIcon.src = './image/rain.png';
  } else if (id >= 701 && id <= 781) {
    weatherIcon.src = './image/fog.png';
  }
};

export {
  switchColor,
  switchWeatherIcon,
};

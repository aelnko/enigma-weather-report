const createWeatherStructure = () => {
  const weatherBoxDiv = document.createElement('div');
  weatherBoxDiv.classList.add('weather-box');

  const weatherIconDiv = document.createElement('div');
  weatherIconDiv.classList.add('weather-icon');

  const weatherIconImg = document.createElement('img');
  weatherIconImg.setAttribute('src', '../../image/cloudy.png');

  weatherIconDiv.append(weatherIconImg);

  const currentTempDiv = document.createElement('div');
  currentTempDiv.classList.add('current-temp');

  const currentTempInnerDiv = document.createElement('div');

  currentTempDiv.append(currentTempInnerDiv);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('description');

  const cityDiv = document.createElement('div');
  cityDiv.classList.add('city');

  const weatherDetailsDiv = document.createElement('div');
  weatherDetailsDiv.classList.add('weather-details');

  const item1Div = document.createElement('div');
  item1Div.classList.add('item');

  const humidityDiv = document.createElement('div');
  humidityDiv.classList.add('humidity', 'icon');

  const humidityIconImg = document.createElement('img');
  humidityIconImg.setAttribute('src', '../../image/drop.png.png');

  const humidityValueSpan = document.createElement('span');
  humidityValueSpan.classList.add('value', 'humidity');

  const humidityP = document.createElement('p');
  humidityP.innerText = 'humidity';

  humidityDiv.append(humidityIconImg);
  item1Div.append(humidityDiv, humidityValueSpan, humidityP);

  const item2Div = document.createElement('div');
  item2Div.classList.add('item');

  const windSpeedDiv = document.createElement('div');
  windSpeedDiv.classList.add('wind-speed', 'icon');

  const windSpeedIconImg = document.createElement('img');
  windSpeedIconImg.setAttribute('src', '../../image/wind.png.png');

  const windSpeedValueSpan = document.createElement('span');
  windSpeedValueSpan.classList.add('value', 'wind-speed');

  const windSpeedP = document.createElement('p');
  windSpeedP.innerText = 'wind speed';

  windSpeedDiv.append(windSpeedIconImg);
  item2Div.append(windSpeedDiv, windSpeedValueSpan, windSpeedP);

  weatherDetailsDiv.append(item1Div, item2Div);
  weatherBoxDiv.append(weatherIconDiv, currentTempDiv, descriptionDiv, cityDiv, weatherDetailsDiv);

  return weatherBoxDiv;
};

const createErrorStructure = () => {
  const weatherBoxDiv = document.createElement('div');
  weatherBoxDiv.classList.add('error-box');

  const weatherIconDiv = document.createElement('div');
  weatherIconDiv.classList.add('weather-icon');

  const weatherIconImg = document.createElement('img');
  weatherIconImg.setAttribute('src', '../../image/warning.png');

  weatherIconDiv.append(weatherIconImg);

  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('description');
  descriptionDiv.innerText = 'Oh, no...';
  descriptionDiv.style.marginTop = '64px'

  const errorDetailsDiv = document.createElement('div');
  errorDetailsDiv.classList.add('error-details', 'message');
  errorDetailsDiv.textContent = 'It seems there is no such city, try to enter the name again';
  errorDetailsDiv.style.marginTop = '96px';

  weatherBoxDiv.append(weatherIconDiv, descriptionDiv, errorDetailsDiv);

  return weatherBoxDiv;
};

export {
  createWeatherStructure,
  createErrorStructure,
};

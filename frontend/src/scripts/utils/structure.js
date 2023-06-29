const createWeatherStructure = () => {
  const weatherBoxDiv = document.createElement('div');
  weatherBoxDiv.classList.add('weather-box');

  const weatherIconDiv = document.createElement('div');
  weatherIconDiv.classList.add('weather-icon');

  const weatherIconImg = document.createElement('img');

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
  errorDetailsDiv.classList.add('error-details', 'error-message');
  errorDetailsDiv.textContent = 'It seems there is no such city, try to enter the name again';
  errorDetailsDiv.style.marginTop = '96px';

  weatherBoxDiv.append(weatherIconDiv, descriptionDiv, errorDetailsDiv);

  return weatherBoxDiv;
};

const createRegistrationFormStructure = () => {
  const container = document.querySelector('.container');
  container.style.backgroundColor = '#78b6ff';
  container.style.height = '650px';

  const cancel = document.createElement('div');
  cancel.classList.add('cancel-div');

  const cancelButton = document.createElement('button');
  cancelButton.classList.add('cancel-button');

  const cancelImg = document.createElement('img');
  cancelImg.classList.add('cancel-icon');
  cancelImg.setAttribute('src', './image/close.png');

  cancelButton.append(cancelImg);
  cancel.append(cancelButton);
  container.prepend(cancel);

  const wrapper = document.querySelector('.container__wrapper');
  wrapper.style.top = '20%';

  const registrationForm = document.createElement('div');
  registrationForm.classList.add('registration-form');

  const field1 = document.createElement('div');
  field1.classList.add('field1');

  const fieldName1 = document.createElement('div');
  fieldName1.id = 'field-name';
  fieldName1.textContent = 'username';

  const input1 = document.createElement('input');
  input1.classList.add('registration-input');
  input1.type = 'text';
  input1.placeholder = 'enter your username';
  input1.setAttribute('id', 'user');

  field1.append(fieldName1, input1);

  const field2 = document.createElement('div');
  field2.classList.add('field2');

  const fieldName2 = document.createElement('div');
  fieldName2.id = 'field-name';
  fieldName2.textContent = 'password';

  const input2 = document.createElement('input');
  input2.classList.add('registration-input');
  input2.type = 'text';
  input2.placeholder = 'enter your password';
  input2.setAttribute('id', 'password');

  field2.append(fieldName2, input2);

  const registerButton = document.createElement('button');
  registerButton.classList.add('register-button');
  registerButton.textContent = 'REGISTER';

  registrationForm.append(field1, field2, registerButton);

  return registrationForm;
};

const createStartContainerStructure = () => {
  const container = document.createElement('div');
  container.classList.add('container');
  container.id = 'closed';

  const gradientLayer = document.createElement('div');
  gradientLayer.classList.add('gradient-layer');

  const anotherGradientLayer = document.createElement('div');
  anotherGradientLayer.classList.add('another-gradient-layer');

  const wrapper = document.createElement('div');
  wrapper.classList.add('container__wrapper');

  const searchBox = document.createElement('div');
  searchBox.classList.add('search-box');

  const input = document.createElement('input');
  input.classList.add('search-input');
  input.type = 'text';
  input.placeholder = 'Enter city name';

  const button = document.createElement('button');
  button.classList.add('image-button');

  const image = document.createElement('img');
  image.src = './image/search-button.png';
  image.alt = 'search-button';

  button.append(image);
  searchBox.append(input, button);
  wrapper.append(searchBox);
  container.append(gradientLayer, anotherGradientLayer, wrapper);

  return container;
};

const createHeaderStructure = () => {
  const currentTheme = document.body.id;
  const colors = {
    dark: 'btn-light',
    light: 'btn-dark'
  };

  const header = document.createElement('div');
  header.classList.add('header');

  const follow = document.createElement('div');
  follow.classList.add('follow-wrap');

  const followButton1 = document.createElement('button');
  followButton1.classList.add('follow', colors[currentTheme]);

  const followButton2 = document.createElement('button');
  followButton2.classList.add('follow-button');

  const followSpan = document.createElement('span');
  followSpan.classList.add('follow-message');
  followSpan.innerText = 'favorites';
  
  const followImage = document.createElement('img');
  followImage.src = `./image/follow-${currentTheme}-theme.png`;
  followImage.alt = `follow-${currentTheme}-theme`;

  followButton1.append(followImage);
  followButton2.append(followSpan);
  follow.append(followButton1, followButton2);

  const themeButton = document.createElement('button');
  themeButton.classList.add('theme');
  themeButton.classList.add(colors[currentTheme]);

  const themeImage = document.createElement('img');
  themeImage.src = `./image/button-${currentTheme}-theme.png`;
  themeImage.alt = 'sunny-theme';

  themeButton.append(themeImage);

  const registrationDiv = document.createElement('div');
  registrationDiv.classList.add('registration');

  const userButton = document.createElement('button');
  userButton.classList.add('user-icon');
  userButton.classList.add(colors[currentTheme]);

  const userImage = document.createElement('img');
  userImage.src = `./image/user-${currentTheme}-theme.png`;
  userImage.alt = `user-${currentTheme}-theme`;

  const registrationButton = document.createElement('button');
  registrationButton.classList.add('registration-button');

  const registrationSpan = document.createElement('span');
  registrationSpan.classList.add('registration-message');
  registrationSpan.textContent = 'registration';

  registrationButton.append(registrationSpan);

  userButton.append(userImage);

  registrationDiv.append(userButton, registrationButton);

  header.append(follow, themeButton, registrationDiv);

  return header;
};

const createContainerStructureWithoutSearchBox = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  const gradientLayer = document.createElement('div');
  gradientLayer.classList.add('gradient-layer');

  const anotherGradientLayer = document.createElement('div');
  anotherGradientLayer.classList.add('another-gradient-layer');

  const wrapper = document.createElement('div');
  wrapper.classList.add('container__wrapper');

  container.append(gradientLayer, anotherGradientLayer, wrapper);
  
  return container;
};

export {
  createWeatherStructure,
  createErrorStructure,
  createRegistrationFormStructure,
  createStartContainerStructure,
  createHeaderStructure,
  createContainerStructureWithoutSearchBox
};

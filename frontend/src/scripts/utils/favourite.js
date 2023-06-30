import { favourites } from "./addToFavourites.js";
import { renderWeatherInfo } from "./render.js";
import { createSliderButton, createStructureForFollow } from "./structure.js";

const generateWeatherBoxes = async () => {
  const result = [];
  const followCities = ['london', 'stambul', 'new york'];
  for (let i = 0; i < followCities.length; i += 1) {
    const weatherBox = await renderWeatherInfo(followCities[i], 'multiply', i);
    result.push(weatherBox);
  }
  return result;
};

const createWeatherCard = (city, i) => {
  const header = document.querySelector('.header');
  header.remove();

  const container = document.querySelector('.container');
  container.remove();
  
  const newContainer = createStructureForFollow(`wrapper${i}`);

  const prevButton = createSliderButton('prev');
  const nextButton = createSliderButton('next');

  const script = document.querySelector('#script');
  script.insertAdjacentElement('beforebegin', newContainer)
  
  newContainer.insertAdjacentElement('beforebegin', nextButton);
  newContainer.insertAdjacentElement('beforebegin', prevButton);
  
  //const followCities = favourites();

  const weatherBoxes = generateWeatherBoxes();
  newContainer.append(weatherBoxes[0], weatherBoxes[1], weatherBoxes[2]);  
};

const followButtonHandler = () => {
  return createWeatherCard();
};

export default followButtonHandler;

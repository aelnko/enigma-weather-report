import { favourites } from "./addToFavourites.js";
import { renderWeatherInfo } from "./render.js";
import { createContainerStructureWithoutSearchBox } from "./structure.js";

const createWeatherCard = async () => {
  const header = document.querySelector('.header');
  header.remove();

  const container = document.querySelector('.container');
  container.remove();

  const newContainer = createContainerStructureWithoutSearchBox();
  newContainer.style.height = '650px';

  const script = document.querySelector('#script');
  script.insertAdjacentElement('beforebegin', newContainer)

  const followCities = favourites();

  for (let i = 0; i < followCities.length; i += 1) {
    const weatherBox = await renderWeatherInfo(followCities[i]);
    newContainer.append(weatherBox);
  }
};

const followButtonHandler = () => {
  return createWeatherCard();
};

export default followButtonHandler;

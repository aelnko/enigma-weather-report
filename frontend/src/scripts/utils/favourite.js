import { renderWeatherInfo } from "./render.js";
import { createContainerStructureWithoutSearchBox } from "./structure.js";

const followButtonHandler = async () => {
  const header = document.querySelector('.header');
  header.remove();

  const container = document.querySelector('.container');
  container.remove();

  const newContainer = createContainerStructureWithoutSearchBox();
  newContainer.style.height = '650px';

  const body = document.body;
  body.append(newContainer);

  const weatherBox = await renderWeatherInfo();
  newContainer.append(weatherBox);

};

export default followButtonHandler;

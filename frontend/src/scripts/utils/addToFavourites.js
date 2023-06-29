const cities = [];

const addToFavourites = () => {
  const city = document.querySelector('.city').innerText;
  const lowerCaseCity = city.split(',')[0].toLowerCase();
  const favoritesButton = document.querySelector('.favourite-button');

  if (!cities.includes(lowerCaseCity)) {
    cities.push(lowerCaseCity);
  } else {
    cities.pop();
  }

  favoritesButton.classList.toggle('active');
  return cities;
};

const favourites = () => cities;

export { addToFavourites, favourites };

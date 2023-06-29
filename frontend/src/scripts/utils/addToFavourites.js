const cities = [];

const addToFavourites = () => {
  const city = document.querySelector('.city').innerText;
  const favoritesButton = document.querySelector('.favourite-button');
  if (!cities.includes(city)) {
    cities.push(city);
    favoritesButton.classList.add('active');
  } else {
    cities.pop();
    favoritesButton.classList.remove('active');
  }
  console.log(cities);
};

export { addToFavourites };
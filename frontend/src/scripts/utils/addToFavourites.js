const cities = [];

const addToFavourites = () => {
  const city = document.querySelector('.city').innerText;
  const favoritesButton = document.querySelector('.favourite-button');
  if (!cities.includes(city)) {
    cities.push(city);
  } else {
    cities.pop();
  }
  favoritesButton.classList.toggle('active');
  console.log(cities);
};

export { addToFavourites };
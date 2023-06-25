const searchButton = document.querySelector('.image-button');

function search() {
  const cityName = document.querySelector('.search-input').value;
  const apiKey = 'c8fb17bee74c48f0a0a8d6d542831ded';
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

  fetch(apiCall)
    .then(response => response.json())
    .then(
      result => {
        console.log(result);
      }
    ) 
}

searchButton.addEventListener('click', search);

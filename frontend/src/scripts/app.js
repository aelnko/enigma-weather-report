const searchButton = document.querySelector('.image-button');

async function search() {
  const cityName = document.querySelector('.search-input').value;
  const apiKey = 'c8fb17bee74c48f0a0a8d6d542831ded';
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

  await fetch(apiCall)
    .then(response => response.json())
    .then(
      result => {
        console.log(result);

        const city = result.name;
        const country = result.sys.country;
        const {description, id} = result.weather[0];
        const {temp, humidity} = result.main;
        const windSpeed = result.wind.speed;
        const feelsLike = result.main.feels_like;

        document.querySelector('.current-temp div').innerText = Math.round(temp);
        document.querySelector('.city').innerText = `${city}, ${country}`;
        document.querySelector('.description').innerText = description;
        document.querySelector('span.humidity.value').innerText = `${humidity}%`;
        document.querySelector('span.wind-speed.value').innerText = `${windSpeed} m/s`;
      }
    ) 
}

searchButton.addEventListener('click', search);

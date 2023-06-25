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

        document.querySelector('.current-temp div').innerText = `${Math.round(temp)}°C`;
        document.querySelector('.city').innerText = `${city}, ${country}`;
        document.querySelector('.description').innerText = description;
        document.querySelector('span.humidity.value').innerText = `${humidity}%`;
        document.querySelector('span.wind-speed.value').innerText = `${windSpeed} m/s`;

        const weatherIcon = document.querySelector('.weather-icon img');
        const container = document.querySelector('.container');

        if (id >= 200 && id <= 232) {
          weatherIcon.src = '../image/storm.png';
          container.setAttribute('style', 'background: linear-gradient(180deg, rgba(124,147,214,1) 27%, rgba(86,103,128,1) 85%);');
        }
        else if (id === 800) {
          weatherIcon.src = '../image/sunny.png';
          container.setAttribute('style', 'background: linear-gradient(180deg, rgba(255,254,159,1) 0%, rgba(255,225,101,1) 49%, rgba(255,183,0,1) 100%)');
        } else if (id === 801) {
          weatherIcon.src = '../image/cloudy.png';
          container.setAttribute('style', 'background: linear-gradient(180deg, rgba(184,255,252,1) 5%, rgba(248,255,203,1) 89%)');
        } else if (id >= 600 && id <= 622) {
          weatherIcon.src = '../image/snow.png';
          container.setAttribute('style', 'background: linear-gradient(180deg, rgba(187,231,255,1) 27%, rgba(255,255,255,1) 85%);');
        } else if (id >= 500 && id <= 531) {
          weatherIcon.src = '../image/rain.png';
          container.setAttribute('style', 'background: linear-gradient(180deg, rgba(124,129,214,1) 27%, rgba(56,72,143,1) 85%);');
        }
      }
    ) 
}

searchButton.addEventListener('click', search);

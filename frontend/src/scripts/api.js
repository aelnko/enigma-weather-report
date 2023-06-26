const getWeatherData = async (cityName) => {
  const apiKey = 'c8fb17bee74c48f0a0a8d6d542831ded';
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

  const data = await fetch(apiCall)
    .then(response => response.json());
  
  return data;
};

export default getWeatherData;

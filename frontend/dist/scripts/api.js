const getWeatherData=async t=>{const e=`https://api.openweathermap.org/data/2.5/weather?q=${t}&units=metric&appid=c8fb17bee74c48f0a0a8d6d542831ded`;return await fetch(e).then((t=>t.json()))};export default getWeatherData;
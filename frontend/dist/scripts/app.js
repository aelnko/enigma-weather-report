const searchButton=document.querySelector(".image-button");async function search(){const e=`https://api.openweathermap.org/data/2.5/weather?q=${document.querySelector(".search-input").value}&units=metric&appid=c8fb17bee74c48f0a0a8d6d542831ded`;await fetch(e).then((e=>e.json())).then((e=>{console.log(e);const n=e.name,t=e.sys.country,{description:c,id:r}=e.weather[0],{temp:i,humidity:o}=e.main,a=e.wind.speed;e.main.feels_like;document.querySelector(".current-temp div").innerText=`${Math.round(i)}°C`,document.querySelector(".city").innerText=`${n}, ${t}`,document.querySelector(".description").innerText=c,document.querySelector("span.humidity.value").innerText=`${o}%`,document.querySelector("span.wind-speed.value").innerText=`${a} m/s`;const s=document.querySelector(".weather-icon img");r>=200&&r<=232?s.src="../image/storm.png":800===r?s.src="../image/sunny.png":801===r?s.src="../image/cloudy.png":r>=600&&r<=622?s.src="../image/snow.png":r>=500&&r<=531&&(s.src="../image/rain.png")}))}searchButton.addEventListener("click",search);
import checkForDayTime from"./time.js";const clearContainerClasses=e=>{e.classList.forEach((t=>{"container"!==t&&e.classList.remove(t)}))},switchGradient=e=>{const t=document.querySelector(".container");clearContainerClasses(t);const r={cloudy:"linear-gradient(to left top, #caf6e5, #f4fcc1)",storm:"linear-gradient(to left top, #97a8c4, #513a87)",sunny:"linear-gradient(to left top, #FFFCA8, #FFBD3E)","broken-clouds":"linear-gradient(to left top, #bde2e9, #35475c)",snow:"linear-gradient(to left top, #c1f5ff, #418be2)",rain:"linear-gradient(to left top, #5c93e8, #193e69)",fog:"linear-gradient(to left top, #8299c4, #92c9aa)",error:"linear-gradient(to left top, #ffb4b4, #e35050)"},n=document.querySelector(".gradient-layer"),a=document.querySelector(".another-gradient-layer");a.opacity=0,n.style.opacity=0,n.style.background=r[e];Date.now();let o=setInterval((()=>{Date.now();let c=parseFloat(n.style.opacity);c+=.01,n.style.opacity=c.toString(),a.style.opacity=c.toString(),c>=1&&(t.style.background=r[e],n.style.opacity=0,clearInterval(o))}),1);t.classList.add(e)},switchColor=e=>{document.querySelector(".container");null===e?switchGradient("error"):e>=200&&e<=232?switchGradient("storm"):800===e?switchGradient("sunny"):801===e||802===e?switchGradient("cloudy"):803===e||804===e?switchGradient("broken-clouds"):e>=600&&e<=622?switchGradient("snow"):e>=500&&e<=531?switchGradient("rain"):e>=701&&e<=781&&switchGradient("fog")},switchWeatherIcon=e=>{const t=document.querySelector(".weather-icon img"),r=checkForDayTime();null===e?t.src="../../image/warning.png":e>=200&&e<=232?t.src="../../image/storm.png":800===e?t.src=`../../image/${r}-sunny.png`:801===e||802===e?t.src=`../../image/${r}-cloudy.png`:803===e||804===e?t.src="../../image/overcast.png":e>=600&&e<=622?t.src="../../image/snow.png":e>=500&&e<=531?t.src="../../image/rain.png":e>=701&&e<=781&&(t.src="../../image/fog.png")};export{switchColor,switchWeatherIcon};
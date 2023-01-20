const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f7f976e0aamsh08300ea8bbab715p10d7c3jsn00034562ec94',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>  {
    cityName.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' +city, options)
	.then(response => response.json())
	.then((response)=> {

      console.log(response)

    cloud_pct.innerHTML=response.cloud_pct
  
    humidity.innerHTML=response.humidity
    max_temp.innerHTML=response.max_temp
    min_temp.innerHTML=response.min_temp
    sunrise.innerHTML=response.sunrise
    sunset.innerHTML=response.sunset
    temp.innerHTML=response.temp
    wind_degrees.innerHTML=response.wind_degrees 
    wind_speed.innerHTML=response.wind_speed

    })

	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{ 
getWeather(city.value)

})
getWeather("kathmandu")
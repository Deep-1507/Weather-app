const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f79ac7736cmshfb06338959e2df7p1ad977jsn416ee7da716a',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = (city) => {
    cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city,options)
  .then(response => response.json())
  .then((response) => {
    
    cloud_pct.innerHTML= response.cloud_pct
    feels_like.innerHTML= response.feels_like
    humidity.innerHTML= response.humidity
    max_temp.innerHTML=response.max_temp
    min_temp.innerHTML= response.min_temp
    sunrise.innerHTML= response.sunrise
    sunset.innerHTML= response.sunset
    temp.innerHTML= response.temp
    wind_degrees.innerHTML= response.wind_degrees
    wind_speed.innerHTML= response.wind_speed
    
    
    console.log(response)})
  .then(data => {console.log(data);})
  .catch(error => {console.error(error);
  });
  

}


submit.addEventListener("click",(e)=>{
    e.preventDefault()
    getWeather(city.value)
})


//Called Delhi in API for By Default
getWeather("Delhi")



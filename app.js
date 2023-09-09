const api_key = '0e12d640ad5c9b353dd38a9b9d74ef4d';
const search = document.querySelector('#search-bar');
const btn = document.querySelector('#btn');
const head = document.querySelector('.city')
const temperature = document.querySelector('.temp');
const desc = document.querySelector('.description');
const hum = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const icon = document.querySelector('.icon');
btn.addEventListener('click', ()=>{
    let city = search.value;
    getWeather(city);
})




let getWeather =async(city)=>{
    const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&units=metric&appid=0e12d640ad5c9b353dd38a9b9d74ef4d');
    let cityName = city.toUpperCase();
    head.innerHTML = `Weather in ${cityName}`;
    temperature.innerHTML = `${res.data.main.temp}&#176;C`;
    desc.innerHTML = res.data.weather[0].main;
    hum.innerHTML = `Humidity: ${res.data.main.humidity}%`;
    wind.innerHTML = `Wind Speed: ${res.data.wind.speed}km/h`
    icon.src = `http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`;
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + res.data.weather[0].main + "&weather')";
}

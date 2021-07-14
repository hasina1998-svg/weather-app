//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
//0c7d8f56f7de0a34fd0b9b96e2c657ff

const weatherApi={
    key:"0c7d8f56f7de0a34fd0b9b96e2c657ff",
    baseUrl:"http://api.openweathermap.org/data/2.5/weather",

}

const searchInputBox = document.getElementById('input-box');
searchInputBox.addEventListener('keypress', (event) => {

    if (event.key == "Enter") {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

})

// Get weather report 

function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`).then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}



function showWeatherReport(weather) {
     console.log(weather);  


    let city =document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;



    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
    let feelslike = document.getElementById('feels-like');
    feelslike.innerHTML =`Feels_like: ${weather.main.feels_like}`;

    
 
    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max)`
   


    let weatherType = document.getElementById('weather');
    weatherType.innerHTML = `${weather.weather[0].main}`;



    let windSpeed = document.getElementById('wind');
    windSpeed.innerHTML = `Wind Speed: ${weather.wind.speed}`;



    let winddeg = document.getElementById('winddeg');
    winddeg.innerHTML = `Wind deg: ${weather.wind.deg}`;

    let date = document.getElementById('date');
    let todayDate =new Date();
    date.innerText =dateManage(todayDate);

    let humidity = document.getElementById('humid');
    humidity.innerHTML = `Humidity: ${weather.main.humidity}`;

    let pressure= document.getElementById('pressure');
    pressure.innerHTML = `Pressure:${weather.main.pressure}`;

    
    document.getElementById('image').setAttribute ('src' , `https://www.countryflags.io/${weather.sys.country}/shiny/64.png`)

    
}

function dateManage(dateArg) {
    let days =['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday' ,'Friday' ,'Saturday' ,'Saturday'];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let year =dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date= dateArg.getDate();
    let day =days[dateArg.getDay()];

    return `${date} ${month} ${day}, ${year} `;

}

async function getWeatherFiveDays(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=82a3c752c21a3a7c9dddb2402930dea0`, {mode: 'cors'})
    const weatherData = await response.json();
    console.log(weatherData);
}

async function getWeather() {
    event.preventDefault();
    const city = document.getElementById('location-input').value;
    console.log(city);
    const repsonse = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=82a3c752c21a3a7c9dddb2402930dea0`, {mode: 'cors'})
    const weatherData = await repsonse.json();
    console.log(weatherData);
    currentTemp = weatherData.main.temp;
    currentTemp = await kelvinToCelsius(currentTemp);
    console.log(currentTemp);
    return currentTemp;
}

async function kelvinToCelsius(temp) {
    temp = Number(temp);
    const celsius = temp - 273.15
    return celsius;
}
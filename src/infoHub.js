import { updateDOM } from "./updateDOM";

export const getData = (function() {
    //Retrieve weather data using weatherapi
    async function getWeatherData (locationInput) {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=8684e4180a68425f82550926240602&q=london');
        const weatherData = await response.json();

        //Get specific conditions
        const conditionText = weatherData.current.condition.text;
        const conditionIcon = weatherData.current.condition.icon;

        const tempC = weatherData.current.temp_c;
        const tempF = weatherData.current.temp_f;

        const feelsLikeC = weatherData.current.feelslike_c;
        const feelsLikeF = weatherData.current.feelslike_f;

        const windKPH = weatherData.current.wind_kph
        const windMPH = weatherData.current.wind_mph;

        const humidity = weatherData.current.humidity;

        const isDay = weatherData.current.is_day;

        const precipMm = weatherData.current.precip_mm;
        const precipIn = weatherData.current.precip_in;

        //Get location info
        const location = weatherData.location.name;

        console.log(weatherData);
    }

    //Retreive gif from Giphy based on current weather conditions
    async function getGif (currentWeather) {

    }

    function setLocation () {
        
    }

return {
    getWeatherData,
}
})();
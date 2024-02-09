import { updateDOM } from "./updateDOM";

export const getData = (function() {
    //Retrieve weather data using weatherapi
    async function getWeatherData (locationInput) {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=8684e4180a68425f82550926240602&q=london', {mode: 'cors'});
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

        //Create new object with weather info
        WeatherLocation(
            location,
            conditionText,
            conditionIcon,
            tempC,
            tempF,
            feelsLikeC,
            feelsLikeF,
            windKPH,
            windMPH,
            humidity,
            isDay,
            precipMm,
            precipIn,
        );
    }

    //Retreive gif from Giphy based on current weather conditions
    //Returns url of gif
    async function getGif (currentWeather) {
        const baseURL = 'https://api.giphy.com/v1/gifs/translate?api_key=Z8hw92W961WfR8SR0iFcVp1smAxV7z9L&s=';
        const gifData = await fetch(baseURL + currentWeather, {mode: 'cors'});
        return gifData.data.images.original.url;
    }

    function setLocation () {

    }

return {
    getWeatherData,
}
})();

//Creates new object with weather info
export const WeatherLocation = (
    location,
    conditionText,
    conditionIcon,
    tempC,
    tempF,
    feelsLikeC,
    feelsLikeF,
    windKPH,
    windMPH,
    humidity,
    isDay,
    precipMm,
    precipIn,
    ) => {
        location = location;
        conditionText = conditionText;
        conditionIcon = conditionIcon;
        tempC = tempC;
        tempF = tempF;
        feelsLikeC = feelsLikeC;
        feelsLikeF = feelsLikeF;
        windKPH = windKPH;
        windMPH = windMPH;
        humidity = humidity;
        isDay = isDay;
        precipMm = precipMm;
        precipIn = precipIn;

    return {
        location,
        conditionText,
        conditionIcon,
        tempC,
        tempF,
        feelsLikeC,
        feelsLikeF,
        windKPH,
        windMPH,
        humidity,
        isDay,
        precipMm,
        precipIn,
    }
}
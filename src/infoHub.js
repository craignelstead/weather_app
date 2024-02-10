import { updateDOM } from "./updateDOM";

export const getData = (function() {
    //Retrieve weather data using weatherapi and pass it to new WeatherLocation obj
    async function getWeatherData (locationInput) {
        try {
            const baseURL = 'https://api.weatherapi.com/v1/current.json?key=8684e4180a68425f82550926240602&q=';
            const response = await fetch(baseURL + locationInput, {mode: 'cors'});
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
            const myLocationData = WeatherLocation(
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
            return myLocationData;
        } catch {
            //Add error logic here
            //Handle API not reachable, location not found
            console.error(Error);
        }
    }
        

    //Retreive gif from Giphy based on current weather conditions
    //Returns url of gif
    async function getGif (currentWeather) {
        try {
            const baseURL = 'https://api.giphy.com/v1/gifs/translate?api_key=Z8hw92W961WfR8SR0iFcVp1smAxV7z9L&s=';
            const response = await fetch(baseURL + currentWeather, {mode: 'cors'});
            const gifData = await response.json();
            return gifData.data.images.original.url;
        } catch {
            //Add error handling here
            console.error(Error);
        }
    }

    //Checks local storage for previously saved location. Returns blank if empty
    function getDefaultLocation () {
        return localStorage.getItem('savedLocation') || 'Fort Collins';
    }

    //Save the searched for location
    function setSavedLocation (locationInput) {
        localStorage.setItem('savedLocation', locationInput);
    }

return {
    getWeatherData,
    getGif,
    getDefaultLocation,
    setSavedLocation,
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
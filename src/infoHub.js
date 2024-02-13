import { updateDOM } from "./updateDOM";

export const getData = (function() {
    //Retrieve weather data using weatherapi and pass it to new WeatherLocation obj
    async function getWeatherData (locationInput) {
        try {
            //Current weather
            const baseURL = 'https://api.weatherapi.com/v1/forecast.json?key=a0a843cefa8745f7a4935610241302&q=';
            const response = await fetch(baseURL + locationInput + 
                '&days=3&aqi=no&alerts=no', {mode: 'cors'});
            const weatherData = await response.json();

            console.log(weatherData);

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
            const region = weatherData.location.region;
            const country = weatherData.location.country;

            //Forecast info for tomorrow
            const tomorrowDate = weatherData.forecast.forecastday[1].date;
            const tomorrowHighF = weatherData.forecast.forecastday[1].day.maxtemp_f;
            const tomorrowLowF = weatherData.forecast.forecastday[1].day.mintemp_f;
            const tomorrowHighC = weatherData.forecast.forecastday[1].day.maxtemp_c;
            const tomorrowLowC = weatherData.forecast.forecastday[1].day.mintemp_c;
            const tomorrowCondition = weatherData.forecast.forecastday[1].day.condition.text;
            const tomorrowIcon = weatherData.forecast.forecastday[1].day.condition.icon;

            //Create new object with weather info
            const myLocationData = WeatherLocation(
                location,
                region,
                country,
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
                tomorrowDate,
                tomorrowHighF,
                tomorrowLowF,
                tomorrowHighC,
                tomorrowLowC,
                tomorrowCondition,
                tomorrowIcon,
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
    region,
    country,
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
    tomorrowDate,
    tomorrowHighF,
    tomorrowLowF,
    tomorrowHighC,
    tomorrowLowC,
    tomorrowCondition,
    tomorrowIcon,
    ) => {
        location = location;
        region = region,
        country = country,
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
        tomorrowDate = tomorrowDate;
        tomorrowHighF = tomorrowHighF;
        tomorrowLowF = tomorrowLowF;
        tomorrowHighC = tomorrowHighC;
        tomorrowLowC = tomorrowLowC;
        tomorrowCondition = tomorrowCondition;
        tomorrowIcon = tomorrowIcon;

    return {
        location,
        region,
        country,
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
        tomorrowDate,
        tomorrowHighF,
        tomorrowLowF,
        tomorrowHighC,
        tomorrowLowC,
        tomorrowCondition,
        tomorrowIcon,
    }
}
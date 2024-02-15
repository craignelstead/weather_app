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

            //console.log(weatherData);

            const degC = `${String.fromCharCode(176)}C`;
            const degF = `${String.fromCharCode(176)}F`;
            const mph = `MPH`;
            const kph = `KPH`;

            //Get specific conditions
            const conditionText = weatherData.current.condition.text;
            const conditionIcon = weatherData.current.condition.icon;

            const tempC = Math.round(weatherData.current.temp_c) + degC;
            const tempF = Math.round(weatherData.current.temp_f) + degF;

            const feelsLikeC = Math.round(weatherData.current.feelslike_c) + degC;
            const feelsLikeF = Math.round(weatherData.current.feelslike_f) + degF;

            const todayHighC = Math.round(weatherData.forecast.forecastday[0].day.maxtemp_c) + degC;
            const todayHighF = Math.round(weatherData.forecast.forecastday[0].day.maxtemp_f) + degF;

            const todayLowC = Math.round(weatherData.forecast.forecastday[0].day.mintemp_c) + degC;
            const todayLowF = Math.round(weatherData.forecast.forecastday[0].day.mintemp_f) + degF;

            const windKPH = Math.round(weatherData.current.wind_kph) + kph;
            const windMPH = Math.round(weatherData.current.wind_mph) + mph;
            const windDir = weatherData.current.wind_dir;

            const humidity = Math.round(weatherData.current.humidity);

            const isDay = weatherData.current.is_day;

            const precipMm = weatherData.current.precip_mm;
            const precipIn = weatherData.current.precip_in;

            //Get location info
            const location = weatherData.location.name;
            const region = weatherData.location.region;
            const country = weatherData.location.country;

            //Forecast info for tomorrow
            const tomorrowDate = weatherData.forecast.forecastday[1].date;
            const tomorrowHighF = Math.round(weatherData.forecast.forecastday[1].day.maxtemp_f) + degF;
            const tomorrowLowF = Math.round(weatherData.forecast.forecastday[1].day.mintemp_f) + degF;
            const tomorrowHighC = Math.round(weatherData.forecast.forecastday[1].day.maxtemp_c) + degC;
            const tomorrowLowC = Math.round(weatherData.forecast.forecastday[1].day.mintemp_c) + degC;
            const tomorrowCondition = weatherData.forecast.forecastday[1].day.condition.text;
            const tomorrowIcon = weatherData.forecast.forecastday[1].day.condition.icon;

            //Day after tomorrow forecast (apparently called overmorrow)
            const overmorrowDate = weatherData.forecast.forecastday[2].date;
            const overmorrowHighF = Math.round(weatherData.forecast.forecastday[2].day.maxtemp_f) + degF;
            const overmorrowLowF = Math.round(weatherData.forecast.forecastday[2].day.mintemp_f) + degF;
            const overmorrowHighC = Math.round(weatherData.forecast.forecastday[2].day.maxtemp_c) + degC;
            const overmorrowLowC = Math.round(weatherData.forecast.forecastday[2].day.mintemp_c) + degC;
            const overmorrowCondition = weatherData.forecast.forecastday[2].day.condition.text;
            const overmorrowIcon = weatherData.forecast.forecastday[2].day.condition.icon;

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
                todayHighC,
                todayHighF,
                todayLowC,
                todayLowF,
                windKPH,
                windMPH,
                windDir,
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
                overmorrowDate,
                overmorrowHighF,
                overmorrowLowF,
                overmorrowHighC,
                overmorrowLowC,
                overmorrowCondition,
                overmorrowIcon,
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
    // async function getGif (currentWeather) {
    //     try {
    //         const baseURL = 'https://api.giphy.com/v1/gifs/translate?api_key=Z8hw92W961WfR8SR0iFcVp1smAxV7z9L&s=';
    //         const response = await fetch(baseURL + currentWeather + 'weather', 
    //             {mode: 'cors'});
    //         const gifData = await response.json();
    //         return gifData.data.images.original.url;
    //     } catch {
    //         //Add error handling here
    //         console.error(Error);
    //     }
    // }

    //Checks local storage for previously saved location. Returns blank if empty
    function getSavedLocation () {
        return localStorage.getItem('savedLocation' || '');
    }

    //Save the searched for location
    function setSavedLocation (locationInput) {
        localStorage.setItem('savedLocation', locationInput);
    }

    //Update weather data when new location is entered
    async function getDataFromSearch () {
        try {
            const locationInput = updateDOM.getInput();

            //Save this search to local storage
            setSavedLocation(locationInput);

            //Get weather data
            const locationData = await getData.getWeatherData(locationInput);
            console.log(locationData.conditionText);
            //Get weather condition text to generate gif
            // const locationCondition = locationData.conditionText;
            // const locationGif = await getData.getGif(locationCondition);

            //Update display with location data
            updateDOM.showLocationData(
                locationData,
            );

        } catch {
            //Add error handling here
            console.error(Error);
        }
    }

    return {
        getWeatherData,
        getSavedLocation,
        setSavedLocation,
        getDataFromSearch,
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
    todayHighC,
    todayHighF,
    todayLowC,
    todayLowF,
    windKPH,
    windMPH,
    windDir,
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
    overmorrowDate,
    overmorrowHighF,
    overmorrowLowF,
    overmorrowHighC,
    overmorrowLowC,
    overmorrowCondition,
    overmorrowIcon,
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
        todayHighC = todayHighC;
        todayHighF = todayHighF;
        todayLowC = todayLowC;
        todayLowF = todayLowF;
        windKPH = windKPH;
        windMPH = windMPH;
        windDir = windDir;
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
        overmorrowDate = overmorrowDate;
        overmorrowHighF = overmorrowHighF;
        overmorrowLowF = overmorrowLowF;
        overmorrowHighC = overmorrowHighC;
        overmorrowLowC = overmorrowLowC;
        overmorrowCondition = overmorrowCondition;
        overmorrowIcon = overmorrowIcon;

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
        todayHighC,
        todayHighF,
        todayLowC,
        todayLowF,
        windKPH,
        windMPH,
        windDir,
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
        overmorrowDate,
        overmorrowHighF,
        overmorrowLowF,
        overmorrowHighC,
        overmorrowLowC,
        overmorrowCondition,
        overmorrowIcon,
    }
}

export const determineDisplay = (function() {

    function checkForC(temp) {
        
    }

    return {
        checkForC,
    }

})();
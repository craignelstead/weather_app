import { getData } from "./infoHub";
import { format } from "date-fns";

export const updateDOM = (function(doc) {

    //Display info in F/MPH
    function showLocationDataF (location) {       
        //Set background
        getDayOrNight(location);

        const dataDisplay = doc.getElementById('dataDisplay');
        dataDisplay.classList.remove('hidden');

        //Get variables
        const showLocation = doc.getElementById('showLocation');
        const showTemp = doc.getElementById('showTemp');
        const showIcon = doc.getElementById('showIcon');
        const showCondition = doc.getElementById('showCondition');
        const showFeelsLike = doc.getElementById('showFeelsLike');
        const showHighLow = doc.getElementById('showHighLow');
        const showWind = doc.getElementById('showWind');

        showLocation.textContent = `${location.location}`;
        showTemp.textContent = `${location.tempF}`;
        showIcon.src = location.conditionIcon;
        showIcon.setAttribute('alt', location.conditionText);
        showCondition.textContent = location.conditionText;
        showFeelsLike.textContent = `Feels like ${location.feelsLikeF}`;
        showHighLow.textContent = `High: ${location.todayHighF} | Low: ${location.todayLowF}`;
        showWind.textContent = `Wind: ${location.windMPH} ${location.windDir}`;

        //Tomorrow's forecast
        const tomorrowDay = doc.getElementById('tomorrowDate');
        const tomorrowIcon = doc.getElementById('tomorrowIcon');
        const tomorrowHighLow = doc.getElementById('tomorrowHighLow')

        tomorrowDay.textContent = format(location.tomorrowDate, 'EEEE');
        tomorrowIcon.src = location.tomorrowIcon;
        tomorrowHighLow.textContent = `${location.tomorrowHighF} / ${location.tomorrowLowF}`;
    
        //Overmorrow's forecast
        const overmorrowDay = doc.getElementById('overmorrowDate');
        const overmorrowIcon = doc.getElementById('overmorrowIcon');
        const overmorrowHighLow = doc.getElementById('overmorrowHighLow')

        overmorrowDay.textContent = format(location.overmorrowDate, 'EEEE');
        overmorrowIcon.src = location.overmorrowIcon;
        overmorrowHighLow.textContent = `${location.overmorrowHighF} / ${location.overmorrowLowF}`;

    }

    //Display info in C/KPH
    function showLocationDataC (location) {     
        //Set background
        getDayOrNight(location);

        const dataDisplay = doc.getElementById('dataDisplay');
        dataDisplay.classList.remove('hidden');

        //Get variables
        const showLocation = doc.getElementById('showLocation');
        const showTemp = doc.getElementById('showTemp');
        const showIcon = doc.getElementById('showIcon');
        const showCondition = doc.getElementById('showCondition');
        const showFeelsLike = doc.getElementById('showFeelsLike');
        const showHighLow = doc.getElementById('showHighLow');
        const showWind = doc.getElementById('showWind');

        showLocation.textContent = `${location.location}`;
        showTemp.textContent = `${location.tempC}`;
        showIcon.src = location.conditionIcon;
        showIcon.setAttribute('alt', location.conditionText);
        showCondition.textContent = location.conditionText;
        showFeelsLike.textContent = `Feels like ${location.feelsLikeC}`;
        showHighLow.textContent = `High: ${location.todayHighC} | Low: ${location.todayLowC}`;
        showWind.textContent = `Wind: ${location.windKPH} ${location.windDir}`;

        //Tomorrow's forecast
        const tomorrowDay = doc.getElementById('tomorrowDate');
        const tomorrowIcon = doc.getElementById('tomorrowIcon');
        const tomorrowHighLow = doc.getElementById('tomorrowHighLow')

        tomorrowDay.textContent = format(location.tomorrowDate, 'EEEE');
        tomorrowIcon.src = location.tomorrowIcon;
        tomorrowHighLow.textContent = `${location.tomorrowHighC} / ${location.tomorrowLowC}`;
    
        //Overmorrow's forecast
        const overmorrowDay = doc.getElementById('overmorrowDate');
        const overmorrowIcon = doc.getElementById('overmorrowIcon');
        const overmorrowHighLow = doc.getElementById('overmorrowHighLow')

        overmorrowDay.textContent = format(location.overmorrowDate, 'EEEE');
        overmorrowIcon.src = location.overmorrowIcon;
        overmorrowHighLow.textContent = `${location.overmorrowHighC} / ${location.overmorrowLowC}`;
    }

    //Toggles background
    function getDayOrNight (location) {
        const background = doc.getElementById('catchAll');
        const searchBtn = doc.getElementById('searchButton');

        if (location.isDay === 0) {
            //Night time
            background.classList.remove('dayBG');
            background.classList.add('nightBG');
            searchBtn.classList.add('searchButtonInvert');
        } else {
            //Day time
            background.classList.remove('nightBG');
            background.classList.add('dayBG');
            searchBtn.classList.remove('searchButtonInvert');
        }
    }

    //Returns input box value
    function getInput () {
        return doc.getElementById('searchBar').value;
    }

    //Change F/MPH and C/KPH
    function swapMeasureDisplay (text) {
        const displayUnit = doc.getElementById('changeMeasure');
        displayUnit.textContent = text;
    }

    //Set default measurement
    function showDefaultMeasurement () {
        const changeMeasure = doc.getElementById('changeMeasure');
        changeMeasure.textContent = getData.getSavedMeasurement();
    }

    //Add event listeners to buttons
    function addListeners () {
        //Click search icon
        const searchBtn = doc.getElementById('searchButton');
        searchBtn.addEventListener('click', getData.getDataFromSearch);

        //Press Enter on search bar
        const searchBar = doc.getElementById('searchBar');
        searchBar.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {getData.getDataFromSearch()}
        });

        //Change measurement
        const changeMeasure = doc.getElementById('changeMeasure');
        changeMeasure.addEventListener('click', () => {
            getData.changeMeasurement(changeMeasure);
            getData.setSavedMeasurement(changeMeasure.textContent);
        });
    }

    //Called on page load to show saved input
    function showSavedInput () {
        const searchBar = doc.getElementById('searchBar');
        searchBar.value = getData.getSavedLocation();
    }

    function hideData () {
        const dataDisplay = doc.getElementById('dataDisplay');
        dataDisplay.classList.add('hidden');
    }

    return {
        showLocationDataF,
        showLocationDataC,
        getInput,
        swapMeasureDisplay,
        showDefaultMeasurement,
        addListeners,
        showSavedInput,
        hideData,
    }
})(document);
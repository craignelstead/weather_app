import { getData } from "./infoHub";

export const updateDOM = (function(doc) {

    function showLocationData (location) {
        //Get variables
        const catchAll = doc.getElementById('catchall');

        const showLocation = doc.getElementById('showLocation');
        const showTemp = doc.getElementById('showTemp');
        const showIcon = doc.getElementById('showIcon');
        const showCondition = doc.getElementById('showCondition');
        const showFeelsLike = doc.getElementById('showFeelsLike');
        const showHighLow = doc.getElementById('showHighLow');
        const showWind = doc.getElementById('showWind');
        const measureDeg = 'F';

        showLocation.textContent = location.location;
        showTemp.textContent = `${location.tempF}${String.fromCharCode(176)}${measureDeg}`;
        showIcon.src = location.conditionIcon;
    }

    //Show the forecast
    function showForecast (location) {

    }

    //Returns input box value
    function getInput () {
        return doc.getElementById('searchBar').value;
    }

    //Add event listeners to buttons
    function addListeners () {
        const searchBtn = doc.getElementById('searchButton');
        searchBtn.addEventListener('click', getData.getDataFromSearch);
    }

    //Called on page load to show saved input
    function showSavedInput () {
        const searchBar = doc.getElementById('searchBar');
        searchBar.value = getData.getSavedLocation();
    }

    return {
        showLocationData,
        showForecast,
        getInput,
        addListeners,
        showSavedInput,
    }
})(document);
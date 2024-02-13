import { getData } from "./infoHub";

export const updateDOM = (function(doc) {

    function buildDisplay () {
        const catchAll = doc.createElement('div');
        catchAll.setAttribute('id', 'catchAll');
    }

    function showLocationData (location, gif) {
        console.log(location);
        console.log(gif);


    }

    function showForecast (location) {

    }

    function updateGifUrl (url) {
        const img = doc.getElementById('showGif');
        img.src = url;
    }

    function getInput () {
        return doc.getElementById('searchBar').value;
    }

    function addListeners () {
        const searchBtn = doc.getElementById('searchButton');
        searchBtn.addEventListener('click', getData.getDataFromSearch);
    }

    return {
        buildDisplay,
        showLocationData,
        showForecast,
        updateGifUrl,
        getInput,
        addListeners,
    }
})(document);
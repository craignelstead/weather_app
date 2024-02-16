import { getData } from './infoHub';
import { updateDOM } from './updateDOM';

//Start here
//Check if there's a saved location
//Get the weather data for the saved location (if applicable)
//Update DOM
const initializer = (function() {
    
    async function defaults () {
        try {
            const startingLoc = getData.getSavedLocation();
            const startingLocData = await getData.getWeatherData(startingLoc);

            //Update saved unit preference
            if (getData.getSavedMeasurement() === null) {
                getData.setSavedMeasurement(`${String.fromCharCode(176)}F / MPH`);
            }
            updateDOM.showDefaultMeasurement();

            //Update display with location data based on selected unit
            if ((getData.getSavedMeasurement() === `${String.fromCharCode(176)}F / MPH`)
                && (getData.getSavedLocation() != null)) {
                    updateDOM.showLoading();
                    updateDOM.showLocationDataF(startingLocData);
                    //updateDOM.removeLoading();
            } else if ((getData.getSavedMeasurement() === `${String.fromCharCode(176)}C / KPH`)
                && (getData.getSavedLocation() != null)) {
                    updateDOM.showLoading();
                    updateDOM.showLocationDataC(startingLocData);
                    //updateDOM.removeLoading();
            } else {
                updateDOM.hideData();
            }

            } catch(Error) {
                //Add error handling here
                console.error(Error);
                updateDOM.displayError(Error);
            } finally {
                updateDOM.removeLoading();
            }
    }

    defaults();
    updateDOM.displayYear();
    updateDOM.showSavedInput();
    updateDOM.addListeners();

})();
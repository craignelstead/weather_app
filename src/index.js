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

            //Update display with location data
            if ((getData.getSavedMeasurement() === `${String.fromCharCode(176)}F / MPH`)
                && (getData.getSavedLocation() != null)) {
                    updateDOM.showLocationDataF(startingLocData);
            } else if ((getData.getSavedMeasurement() === `${String.fromCharCode(176)}C / KPH`)
                && (getData.getSavedLocation() != null)) {
                    updateDOM.showLocationDataC(startingLocData);
            } else {
                updateDOM.hideData();
            }

            } catch {
                //Add error handling here
                console.error(Error);
            }
    }

    defaults();
    updateDOM.showSavedInput();
    updateDOM.addListeners();

})();
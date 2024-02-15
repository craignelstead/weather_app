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

            //Update display with location data
            updateDOM.showLocationDataF(
                startingLocData,
            );
            } catch {
                //Add error handling here
                console.error(Error);
            }
    }

    defaults();
    updateDOM.showSavedInput();
    updateDOM.addListeners();

})();
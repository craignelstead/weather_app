import { getData } from './infoHub';
import { updateDOM } from './updateDOM';

//Start here
//Check if there's a saved location
//Get the weather data for the saved location (if applicable)
//Get appropriate gif
//Update DOM
const initializer = (function() {
    
    async function defaults () {
        try {
            const startingLoc = getData.getDefaultLocation;
            const startingLocData = await getData.getWeatherData(startingLoc);
            const startingConditionText = startingLocData.conditionText;
            const startingGif = await getData.getGif(startingConditionText);

            //Update display with location data and gif
            updateDOM.showLocationData(
                startingLocData,
                startingGif
            );
            } catch {
                //Add error handling here
                console.error(Error);
            }
    }

    defaults();
    updateDOM.addListeners();

})();
import { getData } from "./infoHub";

export const updateDOM = (function(doc) {

    function showLocationData (location, gif) {
        console.log(location);
        console.log(gif);
    }


    return {
        showLocationData,
    }
})(document);
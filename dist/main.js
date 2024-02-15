/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _infoHub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infoHub */ \"./src/infoHub.js\");\n/* harmony import */ var _updateDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateDOM */ \"./src/updateDOM.js\");\n\n\n\n//Start here\n//Check if there's a saved location\n//Get the weather data for the saved location (if applicable)\n//Update DOM\nconst initializer = (function() {\n    \n    async function defaults () {\n        try {\n            const startingLoc = _infoHub__WEBPACK_IMPORTED_MODULE_0__.getData.getSavedLocation();\n            const startingLocData = await _infoHub__WEBPACK_IMPORTED_MODULE_0__.getData.getWeatherData(startingLoc);\n            // const startingConditionText = startingLocData.conditionText;\n            // const startingGif = await getData.getGif(startingConditionText);\n\n            //Update display with location data\n            _updateDOM__WEBPACK_IMPORTED_MODULE_1__.updateDOM.showLocationData(\n                startingLocData,\n                //startingGif\n            );\n            } catch {\n                //Add error handling here\n                console.error(Error);\n            }\n    }\n\n    defaults();\n    _updateDOM__WEBPACK_IMPORTED_MODULE_1__.updateDOM.showSavedInput();\n    _updateDOM__WEBPACK_IMPORTED_MODULE_1__.updateDOM.addListeners();\n\n})();\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/infoHub.js":
/*!************************!*\
  !*** ./src/infoHub.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WeatherLocation: () => (/* binding */ WeatherLocation),\n/* harmony export */   determineDisplay: () => (/* binding */ determineDisplay),\n/* harmony export */   getData: () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _updateDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateDOM */ \"./src/updateDOM.js\");\n\n\nconst getData = (function() {\n    //Retrieve weather data using weatherapi and pass it to new WeatherLocation obj\n    async function getWeatherData (locationInput) {\n        try {\n            //Current weather\n            const baseURL = 'https://api.weatherapi.com/v1/forecast.json?key=a0a843cefa8745f7a4935610241302&q=';\n            const response = await fetch(baseURL + locationInput + \n                '&days=3&aqi=no&alerts=no', {mode: 'cors'});\n            const weatherData = await response.json();\n\n            //Get specific conditions\n            const conditionText = weatherData.current.condition.text;\n            const conditionIcon = weatherData.current.condition.icon;\n\n            const tempC = Math.round(weatherData.current.temp_c);\n            const tempF = Math.round(weatherData.current.temp_f);\n\n            const feelsLikeC = weatherData.current.feelslike_c;\n            const feelsLikeF = weatherData.current.feelslike_f;\n\n            const windKPH = weatherData.current.wind_kph\n            const windMPH = weatherData.current.wind_mph;\n\n            const humidity = weatherData.current.humidity;\n\n            const isDay = weatherData.current.is_day;\n\n            const precipMm = weatherData.current.precip_mm;\n            const precipIn = weatherData.current.precip_in;\n\n            //Get location info\n            const location = weatherData.location.name;\n            const region = weatherData.location.region;\n            const country = weatherData.location.country;\n\n            //Forecast info for tomorrow\n            const tomorrowDate = weatherData.forecast.forecastday[1].date;\n            const tomorrowHighF = weatherData.forecast.forecastday[1].day.maxtemp_f;\n            const tomorrowLowF = weatherData.forecast.forecastday[1].day.mintemp_f;\n            const tomorrowHighC = weatherData.forecast.forecastday[1].day.maxtemp_c;\n            const tomorrowLowC = weatherData.forecast.forecastday[1].day.mintemp_c;\n            const tomorrowCondition = weatherData.forecast.forecastday[1].day.condition.text;\n            const tomorrowIcon = weatherData.forecast.forecastday[1].day.condition.icon;\n\n            //Day after tomorrow forecast (apparently called overmorrow)\n            const overmorrowDate = weatherData.forecast.forecastday[2].date;\n            const overmorrowHighF = weatherData.forecast.forecastday[2].day.maxtemp_f;\n            const overmorrowLowF = weatherData.forecast.forecastday[2].day.mintemp_f;\n            const overmorrowHighC = weatherData.forecast.forecastday[2].day.maxtemp_c;\n            const overmorrowLowC = weatherData.forecast.forecastday[2].day.mintemp_c;\n            const overmorrowCondition = weatherData.forecast.forecastday[2].day.condition.text;\n            const overmorrowIcon = weatherData.forecast.forecastday[2].day.condition.icon;\n\n            //Create new object with weather info\n            const myLocationData = WeatherLocation(\n                location,\n                region,\n                country,\n                conditionText,\n                conditionIcon,\n                tempC,\n                tempF,\n                feelsLikeC,\n                feelsLikeF,\n                windKPH,\n                windMPH,\n                humidity,\n                isDay,\n                precipMm,\n                precipIn,\n                tomorrowDate,\n                tomorrowHighF,\n                tomorrowLowF,\n                tomorrowHighC,\n                tomorrowLowC,\n                tomorrowCondition,\n                tomorrowIcon,\n                overmorrowDate,\n                overmorrowHighF,\n                overmorrowLowF,\n                overmorrowHighC,\n                overmorrowLowC,\n                overmorrowCondition,\n                overmorrowIcon,\n            );\n            return myLocationData;\n        } catch {\n            //Add error logic here\n            //Handle API not reachable, location not found\n            console.error(Error);\n        }\n    }\n        \n\n    //Retreive gif from Giphy based on current weather conditions\n    //Returns url of gif\n    // async function getGif (currentWeather) {\n    //     try {\n    //         const baseURL = 'https://api.giphy.com/v1/gifs/translate?api_key=Z8hw92W961WfR8SR0iFcVp1smAxV7z9L&s=';\n    //         const response = await fetch(baseURL + currentWeather + 'weather', \n    //             {mode: 'cors'});\n    //         const gifData = await response.json();\n    //         return gifData.data.images.original.url;\n    //     } catch {\n    //         //Add error handling here\n    //         console.error(Error);\n    //     }\n    // }\n\n    //Checks local storage for previously saved location. Returns blank if empty\n    function getSavedLocation () {\n        return localStorage.getItem('savedLocation' || 0);\n    }\n\n    //Save the searched for location\n    function setSavedLocation (locationInput) {\n        localStorage.setItem('savedLocation', locationInput);\n    }\n\n    //Update weather data when new location is entered\n    async function getDataFromSearch () {\n        try {\n            const locationInput = _updateDOM__WEBPACK_IMPORTED_MODULE_0__.updateDOM.getInput();\n\n            //Save this search to local storage\n            setSavedLocation(locationInput);\n\n            //Get weather data\n            const locationData = await getData.getWeatherData(locationInput);\n            console.log(locationData.conditionText);\n            //Get weather condition text to generate gif\n            // const locationCondition = locationData.conditionText;\n            // const locationGif = await getData.getGif(locationCondition);\n\n            //Update display with location data\n            _updateDOM__WEBPACK_IMPORTED_MODULE_0__.updateDOM.showLocationData(\n                locationData,\n            );\n\n        } catch {\n            //Add error handling here\n            console.error(Error);\n        }\n    }\n\n    return {\n        getWeatherData,\n        getSavedLocation,\n        setSavedLocation,\n        getDataFromSearch,\n    }\n})();\n\n//Creates new object with weather info\nconst WeatherLocation = (\n    location,\n    region,\n    country,\n    conditionText,\n    conditionIcon,\n    tempC,\n    tempF,\n    feelsLikeC,\n    feelsLikeF,\n    windKPH,\n    windMPH,\n    humidity,\n    isDay,\n    precipMm,\n    precipIn,\n    tomorrowDate,\n    tomorrowHighF,\n    tomorrowLowF,\n    tomorrowHighC,\n    tomorrowLowC,\n    tomorrowCondition,\n    tomorrowIcon,\n    overmorrowDate,\n    overmorrowHighF,\n    overmorrowLowF,\n    overmorrowHighC,\n    overmorrowLowC,\n    overmorrowCondition,\n    overmorrowIcon,\n    ) => {\n        location = location;\n        region = region,\n        country = country,\n        conditionText = conditionText;\n        conditionIcon = conditionIcon;\n        tempC = tempC;\n        tempF = tempF;\n        feelsLikeC = feelsLikeC;\n        feelsLikeF = feelsLikeF;\n        windKPH = windKPH;\n        windMPH = windMPH;\n        humidity = humidity;\n        isDay = isDay;\n        precipMm = precipMm;\n        precipIn = precipIn;\n        tomorrowDate = tomorrowDate;\n        tomorrowHighF = tomorrowHighF;\n        tomorrowLowF = tomorrowLowF;\n        tomorrowHighC = tomorrowHighC;\n        tomorrowLowC = tomorrowLowC;\n        tomorrowCondition = tomorrowCondition;\n        tomorrowIcon = tomorrowIcon;\n        overmorrowDate = overmorrowDate;\n        overmorrowHighF = overmorrowHighF;\n        overmorrowLowF = overmorrowLowF;\n        overmorrowHighC = overmorrowHighC;\n        overmorrowLowC = overmorrowLowC;\n        overmorrowCondition = overmorrowCondition;\n        overmorrowIcon = overmorrowIcon;\n\n    return {\n        location,\n        region,\n        country,\n        conditionText,\n        conditionIcon,\n        tempC,\n        tempF,\n        feelsLikeC,\n        feelsLikeF,\n        windKPH,\n        windMPH,\n        humidity,\n        isDay,\n        precipMm,\n        precipIn,\n        tomorrowDate,\n        tomorrowHighF,\n        tomorrowLowF,\n        tomorrowHighC,\n        tomorrowLowC,\n        tomorrowCondition,\n        tomorrowIcon,\n        overmorrowDate,\n        overmorrowHighF,\n        overmorrowLowF,\n        overmorrowHighC,\n        overmorrowLowC,\n        overmorrowCondition,\n        overmorrowIcon,\n    }\n}\n\nconst determineDisplay = (function() {\n\n    function checkForC(temp) {\n        \n    }\n\n    return {\n        checkForC,\n    }\n\n})();\n\n//# sourceURL=webpack://weatherapp/./src/infoHub.js?");

/***/ }),

/***/ "./src/updateDOM.js":
/*!**************************!*\
  !*** ./src/updateDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   updateDOM: () => (/* binding */ updateDOM)\n/* harmony export */ });\n/* harmony import */ var _infoHub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infoHub */ \"./src/infoHub.js\");\n\n\nconst updateDOM = (function(doc) {\n\n    function showLocationData (location) {\n        //Get variables\n        const catchAll = doc.getElementById('catchall');\n\n        const showLocation = doc.getElementById('showLocation');\n        const showTemp = doc.getElementById('showTemp');\n        const showIcon = doc.getElementById('showIcon');\n        const showCondition = doc.getElementById('showCondition');\n        const showFeelsLike = doc.getElementById('showFeelsLike');\n        const showHighLow = doc.getElementById('showHighLow');\n        const showWind = doc.getElementById('showWind');\n        const measureDeg = 'F';\n\n        showLocation.textContent = location.location;\n        showTemp.textContent = `${location.tempF}${String.fromCharCode(176)}${measureDeg}`;\n        showIcon.src = location.conditionIcon;\n    }\n\n    //Show the forecast\n    function showForecast (location) {\n\n    }\n\n    //Returns input box value\n    function getInput () {\n        return doc.getElementById('searchBar').value;\n    }\n\n    //Add event listeners to buttons\n    function addListeners () {\n        const searchBtn = doc.getElementById('searchButton');\n        searchBtn.addEventListener('click', _infoHub__WEBPACK_IMPORTED_MODULE_0__.getData.getDataFromSearch);\n    }\n\n    //Called on page load to show saved input\n    function showSavedInput () {\n        const searchBar = doc.getElementById('searchBar');\n        searchBar.value = _infoHub__WEBPACK_IMPORTED_MODULE_0__.getData.getSavedLocation();\n    }\n\n    return {\n        showLocationData,\n        showForecast,\n        getInput,\n        addListeners,\n        showSavedInput,\n    }\n})(document);\n\n//# sourceURL=webpack://weatherapp/./src/updateDOM.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
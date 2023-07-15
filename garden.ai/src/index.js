import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


const weatherAPIKey = ""; // API key for openweathermap.org here


var lat;
var lon;
var temp;
var hum;

var predictor = require("./predictor.js");
var initialized = false;


/**
 * Predicts the number of days until a plant is grown.
 *
 * @param type         the type of plant.
 * @param daysGrowing  the number of days this plant has spent growing so far.
 *
 * @return the number of days until the plant is grown.
 */
function predict(type, daysGrowing = 0) {
	if (!initialized)
		setTimeout(predict, 100, type, daysGrowing); // Wait for data init before continuing
	else {
		var time = predictor.daysToMaturity(type, temp, hum, daysGrowing);
		alert("Your " + type + " plant will be ready in " + time + " days");
		return time;
	}
}


predict("Tomato");


/**
 * Format the OpenWeatherMap endpoint URL for API access.
 *
 * @param lat  the latitude for the request.
 * @parma lon  the longitude for the request.
 *
 * @return a formatted URL which the api request can be sent to.
 */
function _getWeatherEndpoint() {
	return "https://api.openweathermap.org/data/2.5/weather?" +
		"lat=" + lat + "&" +
		"lon=" + lon + "&" +
		"units=metric&" +
		"appid=" + weatherAPIKey;
}


/**
 * Step 2 of the initialization process. Sets the temperature and humidity and then invokes
 * the main function for usage. By the time main() is invoked, all data is correctly set.
 */
function setWeatherData() {
	var endpoint = _getWeatherEndpoint();

	fetch(endpoint)
	    .then((response) => response.json())
	    .then((data) => {
			if (data === undefined || data.main === undefined) {
				temp = Number.NEGATIVE_INFINITY;
				hum = Number.NEGATIVE_INFINITY;
			}
			else {
				temp = data.main.temp;
				hum = data.main.humidity;
			}
			initialized = true;
		})
	    .catch((error) => {
			console.error(error);
		});
}


/**
 * Step 2 of the initialization process. Sets the lat/lon and then invokes the weather
 * data setup.
 */
function setCoordinates(position) {
	lat = position.coords.latitude;
	lon = position.coords.longitude;
	setWeatherData();
}


// Step 1 of async initialization process.
// Starts by invoking the geolocation process.
if (navigator.geolocation)
	navigator.geolocation.getCurrentPosition(setCoordinates);
else
	alert("Sorry, your browser does not support HTML5 geolocation.");

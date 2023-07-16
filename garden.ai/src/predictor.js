/** The plant growth information, should be copied from {@code plant_data/data/json}. */
const plantJSON = {"Tomato": {"time": 60, "temp": 25, "hum": 55, "mass": "10-20 kg", "water": 5.678115, "height": 100, "drought_tol": "Medium"}, "Carrot": {"time": 70, "temp": 17, "hum": 70, "mass": "1-2 kg", "water": 2.83906, "height": 30, "drought_tol": "High"}, "Lettuce": {"time": 50, "temp": 17, "hum": 50, "mass": "0.5-1 kg", "water": 2.83906, "height": 20, "drought_tol": "Low"}, "Cucumber": {"time": 60, "temp": 25, "hum": 65, "mass": "5-10 kg", "water": 5.678115, "height": 150, "drought_tol": "Medium"}, "Spinach": {"time": 40, "temp": 17, "hum": 60, "mass": "0.3-0.5 kg", "water": 1.5141049999999998, "height": 30, "drought_tol": "High"}, "Bell Pepper": {"time": 70, "temp": 25, "hum": 55, "mass": "2-4 kg", "water": 5.678115, "height": 60, "drought_tol": "Medium"}, "Broccoli": {"time": 70, "temp": 20, "hum": 50, "mass": "0.5-1 kg", "water": 2.83906, "height": 60, "drought_tol": "Medium"}, "Cabbage": {"time": 70, "temp": 16, "hum": 55, "mass": "3-5 kg", "water": 5.678115, "height": 60, "drought_tol": "Medium"}, "Onion": {"time": 100, "temp": 18, "hum": 55, "mass": "1-2 kg", "water": 2.83906, "height": 30, "drought_tol": "Medium"}, "Strawberry": {"time": 60, "temp": 20, "hum": 60, "mass": "0.5-1 kg", "water": 2.83906, "height": 20, "drought_tol": "Medium"}, "Potato": {"time": 80, "temp": 20, "hum": 75, "mass": "5-10 kg", "water": 5.678115, "height": 60, "drought_tol": "Medium"}, "Zucchini": {"time": 50, "temp": 25, "hum": 60, "mass": "3-6 kg", "water": 3.7854200000000002, "height": 60, "drought_tol": "Medium"}, "Green Bean": {"time": 60, "temp": 25, "hum": 60, "mass": "2-4 kg", "water": 5.678115, "height": 60, "drought_tol": "Medium"}, "Radish": {"time": 30, "temp": 17, "hum": 50, "mass": "0.3-0.5 kg", "water": 1.5141049999999998, "height": 20, "drought_tol": "High"}, "Watermelon": {"time": 80, "temp": 26, "hum": 70, "mass": "10-20 kg", "water": 11.35621, "height": 200, "drought_tol": "Medium"}, "Pumpkin": {"time": 90, "temp": 26, "hum": 70, "mass": "5-10 kg", "water": 11.35621, "height": 60, "drought_tol": "Medium"}, "Sweet Corn": {"time": 70, "temp": 25, "hum": 60, "mass": "3-6 kg", "water": 5.678115, "height": 150, "drought_tol": "Medium"}, "Cauliflower": {"time": 70, "temp": 16, "hum": 55, "mass": "0.5-1 kg", "water": 2.83906, "height": 60, "drought_tol": "Medium"}, "Eggplant": {"time": 70, "temp": 25, "hum": 55, "mass": "2-4 kg", "water": 5.678115, "height": 60, "drought_tol": "Medium"}, "Cilantro": {"time": 40, "temp": 21, "hum": 50, "mass": "0.1-0.2 kg", "water": 0.5678115, "height": 30, "drought_tol": "High"}, "Cantaloupe": {"time": 90, "temp": 26, "hum": 70, "mass": "5-10 kg", "water": 11.35621, "height": 100, "drought_tol": "Medium"}, "Garlic": {"time": 90, "temp": 17, "hum": 55, "mass": "0.5-1 kg", "water": 2.83906, "height": 30, "drought_tol": "Medium"}, "Kale": {"time": 55, "temp": 17, "hum": 50, "mass": "0.5-1 kg", "water": 2.83906, "height": 60, "drought_tol": "Medium"}, "Peas": {"time": 70, "temp": 17, "hum": 50, "mass": "2-4 kg", "water": 5.678115, "height": 60, "drought_tol": "Medium"}, "Beetroot": {"time": 60, "temp": 17, "hum": 55, "mass": "1-2 kg", "water": 2.83906, "height": 30, "drought_tol": "High"}, "Raspberry": {"time": 80, "temp": 21, "hum": 60, "mass": "0.5-1 kg", "water": 2.83906, "height": 120, "drought_tol": "Medium"}, "Blueberry": {"time": 90, "temp": 19, "hum": 55, "mass": "0.5-1 kg", "water": 2.83906, "height": 150, "drought_tol": "Medium"}, "Mint": {"time": 60, "temp": 22, "hum": 50, "mass": "0.1-0.2 kg", "water": 0.5678115, "height": 30, "drought_tol": "Low"}, "Parsley": {"time": 70, "temp": 17, "hum": 50, "mass": "0.1-0.2 kg", "water": 0.5678115, "height": 30, "drought_tol": "Low"}, "Cherry": {"time": 70, "temp": 25, "hum": 55, "mass": "1-2 kg", "water": 2.83906, "height": 60, "drought_tol": "Medium"}, "Grapes": {"time": 100, "temp": 20, "hum": 65, "mass": "5-10 kg", "water": 11.35621, "height": 200, "drought_tol": "Low"}, "Squash": {"time": 50, "temp": 26, "hum": 60, "mass": "5-10 kg", "water": 11.35621, "height": 60, "drought_tol": "Medium"}, "Artichoke": {"time": 85, "temp": 18, "hum": 55, "mass": "0.5-1 kg", "water": 2.83906, "height": 120, "drought_tol": "Medium"}, "Asparagus": {"time": 80, "temp": 21, "hum": 50, "mass": "0.5-1 kg", "water": 2.83906, "height": 150, "drought_tol": "Low"}, "Brussels": {"time": 90, "temp": 18, "hum": 55, "mass": "0.5-1 kg", "water": 2.83906, "height": 60, "drought_tol": "Medium"}, "Celery": {"time": 120, "temp": 18, "hum": 70, "mass": "0.5-1 kg", "water": 2.83906, "height": 60, "drought_tol": "Low"}, "Collard Greens": {"time": 70, "temp": 21, "hum": 50, "mass": "0.5-1 kg", "water": 2.83906, "height": 60, "drought_tol": "Low"}, "Green Onion": {"time": 60, "temp": 21, "hum": 55, "mass": "0.1-0.2 kg", "water": 0.5678115, "height": 30, "drought_tol": "Low"}, "Honeydew": {"time": 100, "temp": 25, "hum": 70, "mass": "5-10 kg", "water": 11.35621, "height": 100, "drought_tol": "Medium"}, "Kiwi": {"time": 150, "temp": 21, "hum": 70, "mass": "1-2 kg", "water": 2.83906, "height": 150, "drought_tol": "Medium"}, "Lima Beans": {"time": 70, "temp": 23, "hum": 55, "mass": "2-4 kg", "water": 5.678115, "height": 60, "drought_tol": "Medium"}, "Mango": {"time": 120, "temp": 28, "hum": 70, "mass": "5-10 kg", "water": 11.35621, "height": 200, "drought_tol": "Medium"}, "Peach": {"time": 100, "temp": 21, "hum": 55, "mass": "1-2 kg", "water": 2.83906, "height": 100, "drought_tol": "Medium"}, "Pear": {"time": 120, "temp": 19, "hum": 65, "mass": "2-4 kg", "water": 5.678115, "height": 120, "drought_tol": "Medium"}, "Pineapple": {"time": 180, "temp": 26, "hum": 70, "mass": "2-4 kg", "water": 5.678115, "height": 100, "drought_tol": "Medium"}, "Pomegranate": {"time": 150, "temp": 25, "hum": 55, "mass": "1-2 kg", "water": 2.83906, "height": 120, "drought_tol": "Medium"}, "Rhubarb": {"time": 150, "temp": 17, "hum": 50, "mass": "0.5-1 kg", "water": 2.83906, "height": 60, "drought_tol": "Low"}, "Tomatillo": {"time": 75, "temp": 25, "hum": 55, "mass": "2-4 kg", "water": 5.678115, "height": 100, "drought_tol": "Medium"}, "Turnip": {"time": 50, "temp": 17, "hum": 55, "mass": "0.5-1 kg", "water": 2.83906, "height": 60, "drought_tol": "Medium"}, "Watercress": {"time": 60, "temp": 17, "hum": 60, "mass": "0.1-0.2 kg", "water": 0.5678115, "height": 30, "drought_tol": "Low"}};


// ******************************************************************************************
// **********                          Data Analysis                               **********
// ******************************************************************************************

/**
 * Calculates the time penalty to grow a plant based on the deviation from the ideal growing
 * temperature.
 *
 * @param idealTemp   the ideal temperature for the plant to grow fastest in celsius.
 * @param localTemp   the local temperature of the plant's location in celsius.
 * @param daysToGrow  the number of days the plant takes to grow if {@code localTemp == idealTemp}.
 *
 * @return the delta number of days that the plant will take to grow under the specified 
 *         temperature conditions.
 */
function _temperaturePenalty(idealTemp, localTemp, daysToGrow) {
	var growthRate = daysToGrow / idealTemp;
	return Math.abs(localTemp - idealTemp) * growthRate;
}


/**
 * Calculates the time penalty to grow a plant based on the deviation from the ideal growing
 * humidity.
 *
 * @param idealHum    the ideal humidity for the plant to grow fastest in percent saturation.
 * @param localHum    the local humidity of the plant's location in percent saturation.
 * @param daysToGrow  the number of days the plant takes to grow if {@code localHum == idealHum}.
 *
 * @return the delta number of days that the plant will take to grow under the specified 
 *         humidity conditions.
 */
function _humidityPenalty(idealHum, localHum, daysToGrow) {
	var growthRate = daysToGrow / idealHum;
	return Math.abs(localHum - idealHum) * growthRate;
}


/**
 * The number of days for a plant to be grown to maturity based on its environmental conditions.
 *
 * @param plantType    the type of the plant. This must be one of the keys of the {@code plantJSON}
 *                     hashmap.
 * @param localTemp    the local temperature, in deg C, of the plant's environment.
 * @param localHum     the local humidity, in percent saturation, of the plant's environment.
 * @param daysGrowing  the number of days this plant has already been growing since planted.
 *
 * @return the number of days until the plant reaches maturity. If the plant does not exist
 *         in the {@code plantJSON} hashmap, then {@code -1} will be returned.
 */
function _daysToMaturity(plantType, localTemp, localHum, daysGrowing = 0) {
	if (!(plantType in plantJSON))
		return -1;
	var plantInfo = plantJSON[plantType];

	var daysToGrow = plantInfo["time"];
	var idealTemp = plantInfo["temp"];
	var idealHum = plantInfo["hum"];

	var totalDays = daysToGrow;
	totalDays += _temperaturePenalty(idealTemp, localTemp, daysToGrow);
	totalDays += _humidityPenalty(idealHum, localHum, daysToGrow);
	totalDays -= daysGrowing;

	return totalDays;
}


function _amountPenalty(idealTemp, idealHum, localTemp, localHum) {
	var tempDiff = Math.abs(idealTemp - localTemp);
	var humDiff = Math.abs(idealHum - localHum);

	var totalDiff = tempDiff + humDiff;
	return 1 - (totalDiff) / 200;
}


/**
 * Return the expected yield from a particular plant as a range in kilograms.
 *
 * @param plantType  the type of the plant. This must be one of the keys of the {@code plantJSON}
 *                   hashmap.
 *
 * @return the kilogram range for the expected yield of this plant. If the plantType is undefined
 *         in the plantJSON map, then the string "Unknown" is returned.
 */
function _getAmountYield(plantType, localTemp, localHum) {
	if (!(plantType in plantJSON))
		return "Unknown";
	var plantInfo = plantJSON[plantType];
	var idealTemp = plantInfo["temp"];
	var idealHum = plantInfo["hum"];

	var plantAmountStr = plantInfo["mass"];
    plantAmountStr = plantAmountStr.substring(0, plantAmountStr.length - 3);
    var amountSplit = plantAmountStr.split("-");
    var minAmount = parseFloat(amountSplit[0]);
	var maxAmount = parseFloat(amountSplit[1]);

	var penalty = _amountPenalty(idealTemp, idealHum, localTemp, localHum);
	return {min: minAmount * penalty, max: maxAmount * penalty};
}



// ******************************************************************************************
// **********                          User Access Point                           **********
// ******************************************************************************************


/**
 * Gets generic information about this plant for displaying in a catalogue. This method
 * does NOT need the predictor to be initialized to work, and is fully synchronous.
 *
 * @param type  the plant type. This should be one of the keys in the plantJSON map. If this
 *              plant cannot be found, then null is returned.
 *
 * @return a map of information about the plant. If the return value is not null, then the
 *         following keys are guaranteed in the object: temperature, humidity, water, height,
 *         and droughtTolerance. Temperature is in C, humidity is a percent, water is in
 *         liters/week, height is in cm, and droughtTolerance is one of "Low", "Medium", or "High".
 */
function getCatalogueEntry(type) {
	if (!(type in plantJSON))
		return null;

	var plantInfo = plantJSON[type];

	return {
		temperature: plantInfo["temp"],
		humidity: plantInfo["hum"],
		water: plantInfo["water"],
		height: plantInfo["height"],
		droughtTolerance: plantInfo["drought_tol"]
	}
}


const weatherAPIKey = "f44ef2b3d440d65be2ab9aea193294d9"; // API key for openweathermap.org here

// Data defined by the initialize routine. All these will be defined with values once
// initialized is set to true. This also happens at the same time as the call
// to predictorCallback.
var lat;
var lon;
var temp;
var hum;

// Init information. predictorCallback is specified by the initialize method, and is called
// as soon as the predictor is ready to be called.
var initialized = false;
var predictorCallback;


/**
 * Predicts the number of days until a plant is grown. Returns undefined if the module is not
 * yet initialized. The module is safe to use once the callback function passed to the
 * initialize method is called.
 *
 * @param type         the type of plant.
 * @param daysGrowing  the number of days this plant has spent growing so far.
 *
 * @return the number of days until the plant is grown.
 */
function predict(type, daysGrowing = 0) {
	if (!initialized)
		return undefined;
	
	var time = _daysToMaturity(type, temp, hum, daysGrowing);
	var amount = _getAmountYield(type, temp, hum);
	return {time: time, amount: amount};
}


/**
 * Initializes the predictor module for use by gathering necessary API information.
 *
 * @param callback  a function to call once the async initialization in completed.
 */
function initialize(callback) {
	predictorCallback = callback;
	
	// Step 1 of async initialization process.
	// Starts by invoking the geolocation process.
	if (navigator.geolocation)
		navigator.geolocation.getCurrentPosition(_setCoordinates);
	else
		alert("Sorry, your browser does not support HTML5 geolocation.");
}


/**
 * Step 2 of the initialization process. Sets the lat/lon and then invokes the weather
 * data setup.
 */
function _setCoordinates(position) {
	lat = position.coords.latitude;
	lon = position.coords.longitude;
	_setWeatherData();
}


/**
 * Step 3 of the initialization process. Sets the temperature and humidity and then invokes
 * the main function for usage. By the time main() is invoked, all data is correctly set.
 */
function _setWeatherData() {
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

			// Process has finished, so notify the original caller of the initialize method.
			initialized = true;
			predictorCallback();
		})
	    .catch((error) => {
			console.error(error);
		});
}


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


// Open the initialize and predict methods to import access.

module.exports = {
	initialize,
	predict,
	getCatalogueEntry
}

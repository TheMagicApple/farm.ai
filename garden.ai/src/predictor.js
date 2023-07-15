/** The plant growth information, should be copied from {@code plant_data/data/json}. */
const plantJSON = {"Tomato": {"time": 60, "temp": 25, "hum": 55, "wt": "10-20 kg"}, "Carrot": {"time": 70, "temp": 17, "hum": 70, "wt": "1-2 kg"}, "Lettuce": {"time": 50, "temp": 17, "hum": 50, "wt": "0.5-1 kg"}, "Cucumber": {"time": 60, "temp": 25, "hum": 65, "wt": "5-10 kg"}, "Spinach": {"time": 40, "temp": 17, "hum": 60, "wt": "0.3-0.5 kg"}, "Bell Pepper": {"time": 70, "temp": 25, "hum": 55, "wt": "2-4 kg"}, "Broccoli": {"time": 70, "temp": 20, "hum": 50, "wt": "0.5-1 kg"}, "Cabbage": {"time": 70, "temp": 16, "hum": 55, "wt": "3-5 kg"}, "Onion": {"time": 100, "temp": 18, "hum": 55, "wt": "1-2 kg"}, "Strawberry": {"time": 60, "temp": 20, "hum": 60, "wt": "0.5-1 kg"}, "Potato": {"time": 80, "temp": 20, "hum": 75, "wt": "5-10 kg"}, "Zucchini": {"time": 50, "temp": 25, "hum": 60, "wt": "3-6 kg"}, "Green Bean": {"time": 60, "temp": 25, "hum": 60, "wt": "2-4 kg"}, "Radish": {"time": 30, "temp": 17, "hum": 50, "wt": "0.3-0.5 kg"}, "Watermelon": {"time": 80, "temp": 26, "hum": 70, "wt": "10-20 kg"}, "Pumpkin": {"time": 90, "temp": 26, "hum": 70, "wt": "5-10 kg"}, "Sweet Corn": {"time": 70, "temp": 25, "hum": 60, "wt": "3-6 kg"}, "Cauliflower": {"time": 70, "temp": 16, "hum": 55, "wt": "0.5-1 kg"}, "Eggplant": {"time": 70, "temp": 25, "hum": 55, "wt": "2-4 kg"}, "Cilantro": {"time": 40, "temp": 21, "hum": 50, "wt": "0.1-0.2 kg"}, "Cantaloupe": {"time": 90, "temp": 26, "hum": 70, "wt": "5-10 kg"}, "Garlic": {"time": 90, "temp": 17, "hum": 55, "wt": "0.5-1 kg"}, "Kale": {"time": 55, "temp": 17, "hum": 50, "wt": "0.5-1 kg"}, "Peas": {"time": 70, "temp": 17, "hum": 50, "wt": "2-4 kg"}, "Beetroot": {"time": 60, "temp": 17, "hum": 55, "wt": "1-2 kg"}, "Raspberry": {"time": 80, "temp": 21, "hum": 60, "wt": "0.5-1 kg"}, "Blueberry": {"time": 90, "temp": 19, "hum": 55, "wt": "0.5-1 kg"}, "Mint": {"time": 60, "temp": 22, "hum": 50, "wt": "0.1-0.2 kg"}, "Parsley": {"time": 70, "temp": 17, "hum": 50, "wt": "0.1-0.2 kg"}, "Cherry": {"time": 70, "temp": 25, "hum": 55, "wt": "1-2 kg"}, "Grapes": {"time": 100, "temp": 20, "hum": 65, "wt": "5-10 kg"}, "Squash": {"time": 50, "temp": 26, "hum": 60, "wt": "5-10 kg"}, "Artichoke": {"time": 85, "temp": 18, "hum": 55, "wt": "0.5-1 kg"}, "Asparagus": {"time": 80, "temp": 21, "hum": 50, "wt": "0.5-1 kg"}, "Brussels": {"time": 90, "temp": 18, "hum": 55, "wt": "0.5-1 kg"}, "Celery": {"time": 120, "temp": 18, "hum": 70, "wt": "0.5-1 kg"}, "Collard Greens": {"time": 70, "temp": 21, "hum": 50, "wt": "0.5-1 kg"}, "Green Onion": {"time": 60, "temp": 21, "hum": 55, "wt": "0.1-0.2 kg"}, "Honeydew": {"time": 100, "temp": 25, "hum": 70, "wt": "5-10 kg"}, "Kiwi": {"time": 150, "temp": 21, "hum": 70, "wt": "1-2 kg"}, "Lima Beans": {"time": 70, "temp": 23, "hum": 55, "wt": "2-4 kg"}, "Mango": {"time": 120, "temp": 28, "hum": 70, "wt": "5-10 kg"}, "Peach": {"time": 100, "temp": 21, "hum": 55, "wt": "1-2 kg"}, "Pear": {"time": 120, "temp": 19, "hum": 65, "wt": "2-4 kg"}, "Pineapple": {"time": 180, "temp": 26, "hum": 70, "wt": "2-4 kg"}, "Pomegranate": {"time": 150, "temp": 25, "hum": 55, "wt": "1-2 kg"}, "Rhubarb": {"time": 150, "temp": 17, "hum": 50, "wt": "0.5-1 kg"}, "Tomatillo": {"time": 75, "temp": 25, "hum": 55, "wt": "2-4 kg"}, "Turnip": {"time": 50, "temp": 17, "hum": 55, "wt": "0.5-1 kg"}, "Watercress": {"time": 60, "temp": 17, "hum": 60, "wt": "0.1-0.2 kg"}};


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


function _getAmountYield(plantType) {
	if (!(plantType in plantJSON))
		return "Unknown";
	var plantInfo = plantJSON[plantType];

	return plantInfo["wt"];
}



// ******************************************************************************************
// **********                          User Access Point                           **********
// ******************************************************************************************

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
	var amount = _getAmountYield(type);
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
	predict
}

const plantJSON = {"Tomato": {"time": 60, "temp": 25, "hum": 55}, "Carrot": {"time": 70, "temp": 17, "hum": 70}, "Lettuce": {"time": 50, "temp": 17, "hum": 50}, "Cucumber": {"time": 60, "temp": 25, "hum": 65}, "Spinach": {"time": 40, "temp": 17, "hum": 60}, "Bell Pepper": {"time": 70, "temp": 25, "hum": 55}, "Broccoli": {"time": 70, "temp": 20, "hum": 50}, "Cabbage": {"time": 70, "temp": 16, "hum": 55}, "Onion": {"time": 100, "temp": 18, "hum": 55}, "Strawberry": {"time": 60, "temp": 20, "hum": 60}, "Potato": {"time": 80, "temp": 20, "hum": 75}, "Zucchini": {"time": 50, "temp": 25, "hum": 60}, "Green Bean": {"time": 60, "temp": 25, "hum": 60}, "Radish": {"time": 30, "temp": 17, "hum": 50}, "Watermelon": {"time": 80, "temp": 26, "hum": 70}, "Pumpkin": {"time": 90, "temp": 26, "hum": 70}, "Sweet Corn": {"time": 70, "temp": 25, "hum": 60}, "Cauliflower": {"time": 70, "temp": 16, "hum": 55}, "Eggplant": {"time": 70, "temp": 25, "hum": 55}, "Cilantro": {"time": 40, "temp": 21, "hum": 50}, "Cantaloupe": {"time": 90, "temp": 26, "hum": 70}, "Garlic": {"time": 90, "temp": 17, "hum": 55}, "Kale": {"time": 55, "temp": 17, "hum": 50}, "Peas": {"time": 70, "temp": 17, "hum": 50}, "Beetroot": {"time": 60, "temp": 17, "hum": 55}, "Raspberry": {"time": 80, "temp": 21, "hum": 60}, "Blueberry": {"time": 90, "temp": 19, "hum": 55}, "Mint": {"time": 60, "temp": 22, "hum": 50}, "Parsley": {"time": 70, "temp": 17, "hum": 50}, "Cherry": {"time": 70, "temp": 25, "hum": 55}, "Grapes": {"time": 100, "temp": 20, "hum": 65}, "Squash": {"time": 50, "temp": 26, "hum": 60}, "Artichoke": {"time": 85, "temp": 18, "hum": 55}, "Asparagus": {"time": 80, "temp": 21, "hum": 50}, "Brussels Sprouts": {"time": 90, "temp": 18, "hum": 55}, "Celery": {"time": 120, "temp": 18, "hum": 70}, "Collard Greens": {"time": 70, "temp": 21, "hum": 50}, "Green Onion": {"time": 60, "temp": 21, "hum": 55}, "Honeydew Melon": {"time": 100, "temp": 25, "hum": 70}, "Kiwi": {"time": 150, "temp": 21, "hum": 70}, "Lima Beans": {"time": 70, "temp": 23, "hum": 55}, "Mango": {"time": 120, "temp": 28, "hum": 70}, "Peach": {"time": 100, "temp": 21, "hum": 55}, "Pear": {"time": 120, "temp": 19, "hum": 65}, "Pineapple": {"time": 180, "temp": 26, "hum": 70}, "Pomegranate": {"time": 150, "temp": 25, "hum": 55}, "Rhubarb": {"time": 150, "temp": 17, "hum": 50}, "Tomatillo": {"time": 75, "temp": 25, "hum": 55}, "Turnip": {"time": 50, "temp": 17, "hum": 55}, "Watercress": {"time": 60, "temp": 17, "hum": 60}};


function temperaturePenalty(idealTemp, localTemp, daysToGrow) {
	var growthRate = daysToGrow / idealTemp;
	return Math.abs(localTemp - idealTemp) * growthRate;
}


function humidityPenalty(idealHum, localHum, daysToGrow) {
	var growthRate = daysToGrow / idealHum;
	return Math.abs(localHum - idealHum) * growthRate;
}


function daysToMaturity(plantType, localTemp, localHum, daysGrowing = 0) {
	if (!(plantType in plantJSON))
		return -1;
	var plantInfo = plantJSON[plantType];

	var daysToGrow = plantInfo["time"];
	var idealTemp = plantInfo["temp"];
	var idealHum = plantInfo["hum"];

	var totalDays = daysToGrow;
	totalDays += temperaturePenalty(idealTemp, localTemp, daysToGrow);
	totalDays += humidityPenalty(idealHum, localHum, daysToGrow);
	totalDays -= daysGrowing;

	return totalDays;
}


console.log(daysToMaturity("Tomato", 26, 55));

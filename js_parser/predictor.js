const plantJSON = {};


function temperaturePenalty(idealTemp, localTemp, daysToGrow) {
	var growthRate = daysToGrow / idealTemp;
	return localTemp * growthRate;
}


function humidityPenalty(idealHum, localHum, daysToGrow) {
	var growthRate = daysToGrow / idealTemp;
	return localTemp * growthRate;
}


function daysToMaturity(plantType, localTemp, localHum, daysGrowing = 0) {
	if (!(plantType in plantJSON))
		return -1;
	var plantInfo = plantJSON.get(plantType);

	var daysToGrow = plantInfo.get("time");
	var idealTemp = plantInfo.get("temp");
	var idealHum = plantInfo.get("hum");

	var totalDays = daysToGrow;
	totalDays += temperaturePenalty(idealTemp, localTemp, daysToGrow);
	totalDays += humidityPenalty(idealHum, localHum, daysToGrow);

	return daysToGrow - daysGrowing;
}

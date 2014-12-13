var data = require("data");

var getInfo = function(latitude, longitude){
	var url = "http://api.wunderground.com/api/7340a6497ad692ad/conditions/settings/q/40.7127,74.0059.json";
	var xhr = Ti.Network.createHTTPClient();
	xhr.onload = function(){
		var jsonInfo = JSON.parse(this.responseText);
		console.log(JSON.stringify(jsonInfo.current_observation));
		data.saveData(jsonInfo.current_observation,latitude,longitude);
	};
	xhr.onerror = function(){
		alert("Network Required!");
	};
	xhr.open("GET", url);
	xhr.send();
};

exports.getInfo = getInfo;

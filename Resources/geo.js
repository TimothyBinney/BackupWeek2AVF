var api = require("api");

exports.getPosition = function() {
	Ti.Geolocation.purpose = "Application requires coordinates to run";
	if (Ti.Platform.osname === "iphone" || Ti.Platform.osname === "ipad") {
		Ti.Geolocation.getCurrentPosition(function(e) {
			console.log(JSON.stringify(e.source));
			var latitude = e.coords.latitude;
			var longitude = e.coords.longitude;
		}, function() {
			alert("Geo Error!");
		}, {
			timeout : 10000
		});
	} else {
		var latitude = 40.7127;
		var longitude = 74.0059;
	};
	console.log("the latitude is " + latitude);
	api.getInfo(latitude, longitude);
};


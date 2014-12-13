var api = require("api");

exports.getPosition = function(){
	Ti.Geolocation.purpose = "Application requires coordinates to run";
	if(Ti.Platform.osname === "iphone"){
	Ti.Geolocation.getCurrentPosition(function(e){
		console.log(e.source);
		var latitude = 40.7127;
		var longitude = 74.0059;
	});
	}else{
		var latitude = 40.7127;
		var longitude = 74.0059;
};
	api.getInfo(latitude,longitude);
};


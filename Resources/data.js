var ui = require("ui");

exports.saveData = function(json,latitude,longitude){
var data = Ti.Database.open('week2avf');
		data.execute('CREATE TABLE IF NOT EXISTS avfweek2 (id INTEGER PRIMARY KEY, latitude INTEGER, longitude INTEGER, temperature TEXT, icon TEXT, wind TEXT, observation TEXT, weather TEXT)');
		data.execute('INSERT INTO avfweek2 (latitude, longitude,temperature,icon,wind,observation,weather) VALUES (?,?,?,?,?,?,?)', latitude, longitude,json.temperature_string,json.icon_url,json.wind_string,json.observation_time,json.weather);
		data.close();
		
		Cloud.Places.create({
			name: "Kyrgyzstan",
			latitude: 40.7127,
			longitude: 74.0059,
			custom_fields: {
				temp:json.temperature_string,
				icon:json.icon_url,
				wind:json.wind_string,
				observation:json.observation_time,
				weather:json.weather,
			}
		}, function (e){
		if (e.success){
			alert("SAVED TO CLOUD");	
		}else{
			alert(e);
		}
		});
		read();
};
var tblData = [];
var read = function(){
	var db = Ti.Database.open('week2avf');
	var dbRows = db.execute('SELECT * FROM avfweek2');
	while(dbRows.isValidRow()){
		tblData.push({
			id: dbRows.fieldByName('id'),
			lat: dbRows.fieldByName('latitude'),
			lon: dbRows.fieldByName('longitude'),
			temp: dbRows.fieldByName('temperature'),
			icon: dbRows.fieldByName('icon'),
			wind: dbRows.fieldByName('wind'),
			obs: dbRows.fieldByName('observation'),
			weather: dbRows.fieldByName('weather'),
		});
		dbRows.next();
	} 
	dbRows.close();
	db.close();
	ui.createUI(tblData); 
};
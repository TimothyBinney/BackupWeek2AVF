exports.createUI = function(tblData){
	console.log(tblData);
	var win = Ti.UI.createWindow({
		backgroundColor: "grey",
		layout: "vertical",
	});
	
	var view = Ti.UI.createView({
		backgroundColor: "white",
		height: Ti.UI.SIZE.FILL,
		width: Ti.UI.SIZE.FILL, 
	});
	var imageView = Ti.UI.createImageView({
		top: 50,
		align: "center",
		height: 150,
		width: 150,
		image: icon,
	});
	
	var label = Ti.UI.createLabel({
		bottom: 1,
		height: 5,
		font: {fontSize:14},
		text: obs,
	});
	
	var tempLabel = Ti.UI.createLabel({
		top: 210,
		height: 100,
		width: 150,
		font: {fontSize: 26},
		align: "center",
		text: temp,
	});
	
	var weatherLabel = Ti.UI.createLabel({
		top: 315,
		height: 5,
		font: {fontSize: 20},
		text: weather,
	});
	var windLabel = Ti.UI.createLabel({
		top: 335,
		height: 5,
		align: "center",
		font: {fontSize: 20},
		text: "Winds " + wind,
	});
		
		view.add(windLabel);
		view.add(weatherLabel);
		view.add(label);
		view.add(tempLabel);
		view.add(imageView);
		win.add(view);
		win.open();
	
};

var path = require('path');


module.exports = function(app){
	// Basic route that sends the user first to the AJAX Page
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	})

	app.get('/tables', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/tables.html'));
	})

	app.get('/reserve', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/reserve.html'));
	})
};

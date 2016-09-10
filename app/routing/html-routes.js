var tables = require("../data/table-data.js");
var waitings = require("../data/waitinglist-data.js");

module.exports = function(app){
	// Basic route that sends the user first to the AJAX Page
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/app/public/home.html'));
	})

	app.get('/tables', function(req, res){
		res.sendFile(path.join(__dirname + '/app/public/tables.html'));
	})

	app.get('/reserve', function(req, res){
		res.sendFile(path.join(__dirname + '/app/public/reserve.html'));
	})
}
;

var tables = require("../data/table-data.js");
var waitings = require("../data/waitinglist-data.js");


module.exports = function (app){
	app.post('/api/tables', function(req, res){
		console.log("works")
	});

	app.get('/api/waitlist', function(req, res){
		// res.sendFile(path.join(__dirname + '/app/public/reserve.html'));
	});
};
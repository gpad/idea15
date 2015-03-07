'use strict';

var https = require('https');
var parse = require('csv-parse');

var Mood = {};

var options = {
	host: 'api.emotient.com',
	path: '/v1/analytics/1d746ac6-6327-251f-5cbc-a1f8026104af',
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': '4217d623-66bd-4709-ae44-b3dadd3251b8'
	}
};

Mood.get = function(callback) {
	console.log("%j", options);
	https.get(options, function(response) {
		var str = "";
		response.on('data', function (chunk) {
			str += chunk;
		});

		//the whole response has been recieved, so we just print it out here
		response.on('end', function () {
			console.log("%j", str);


// require('should');

// var input = '#Welcome\n"1","2","3","4"\n"a","b","c","d"';
			parse(str, {comment: '#'}, function(err, output){
				callback(null, output);
			});

		});
	});
};

module.exports = Mood;

'use strict';

var https = require('https');
var parse = require('csv-parse');

var Mood = {};

// /v1/analytics/1d746ac6-6327-251f-5cbc-a1f8026104af

var getOptionFor = function(path) {
	var options = {
		host: 'api.emotient.com',
		path: '',
		// method: 'GET',
		headers: {
			// 'Content-Type': 'application/json',
			'Authorization': '4217d623-66bd-4709-ae44-b3dadd3251b8'
		}
	};
	options.path = path;
	return options;
};

Mood.all = function(callback) {
	var options = getOptionFor('/v1/media');
	console.log("%j", options);
	https.get(options, function(response) {
		var str = "";
		response.on('data', function (chunk) {
			str += chunk;
		});

		response.on('end', function () {
			var items = JSON.parse(str);
			callback(null, items);
		});
	});
};

Mood.get = function(callback) {

	Mood.all(function(err, items) {
		var id = items.items[items.items.length-1].id;
		console.log("last items: %j", id);
		var options = getOptionFor('/v1/analytics/' + id);
		console.log("%j", options);
		https.get(options, function(response) {
			var str = "";
			response.on('data', function (chunk) {
				str += chunk;
			});

			//the whole response has been recieved, so we just print it out here
			response.on('end', function () {
				// console.log("%j", str);
				parse(str, {comment: '#'}, function(err, output){
					callback(null, output);
				});
			});
		});
	});
};

module.exports = Mood;

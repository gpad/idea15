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

Mood._index = 0;

Mood.get = function(callback) {

	Mood.all(function(err, items) {
		var id = items.items[items.items.length-1].id;
		console.log("last items: %j", id);
		var options = getOptionFor('/v1/analytics/' + id + '/aggregate?interval=quarter&report=standard&format=csv');
		console.log("%j", options);
		https.get(options, function(response) {
			var str = "";
			response.on('data', function (chunk) {
				str += chunk;
			});

			response.on('end', function () {
				parse(str, {comment: '#'}, function(err, output){

					console.log(output);


					var xxx = {};
					for (var col = 16; col < output[0].length; col++) {
						var name = output[0][col];
						console.log(name);
						for (var row = 1; row < 5; row++) {
							if (xxx[name])
								xxx[name] = 0;
							xxx[name] = xxx[name] + Number(output[row][col]);
						};
					};

					// if (Mood._intervalId)
					// 	clearInterval(Mood._intervalId)

					// Mood._intervalId = setInterval(function() {
					// 	if (Mood._index >= output.length)
					// 		Mood._index = 0;

					// 	Mood._onChange(output[Mood._index]);
					// 	Mood._index = Mood._index + 1;
					// }, 1000)

					// callback(null, output[2]);
					console.log(xxx);
					callback(null, 'joy');
				});
			});
		});
	});
};

Mood.onChange = function(name, callback) {
	Mood._onChange = callback;
};

module.exports = Mood;

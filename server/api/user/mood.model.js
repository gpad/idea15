var options = {
	host: 'api.emotient.com',
	// port: 443,
	path: '/v1/analytics/',
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': '4217d623-66bd-4709-ae44-b3dadd3251b8'
	}
};

// rest.getJSON(options,function(statusCode, result){
//     // I could work with the result html/json here.  I could also just return it
//     console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
//     res.statusCode = statusCode;
//     res.send(result);
// });

var https = require(options, function(response) {
	var str = 
	response.on('data', function (chunk) {
		str += chunk;
	});

	//the whole response has been recieved, so we just print it out here
	response.on('end', function () {
		console.log(str);
	});

});



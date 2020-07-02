let http = require('http');
let url  = require('url');
let Logger = require('./logger');
let logger = new Logger('Server');

let start = function(route,handle){

	function onRequest(request,response){
		let pathName=url.parse(request.url).pathname;
		
		console.log("A request for "+pathName+" has been received");

		route(handle,pathName,response);
	}

	let PORT = process.env.PORT || 8100;
	http.createServer(onRequest).listen(PORT);
	logger.info(`Server has started on port: ${PORT}`);
	console.log(`Server has started on port: ${PORT}`);
}

exports.start = start;
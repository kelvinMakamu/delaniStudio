let fs = require("fs");
let Logger = require('./logger');
let logger = new Logger('Router');

function index(response){
	logger.info("Request handler for index was called");
	console.log("Request handler for index was called");

	fs.readFile("./public/index.html", function(error,data){
		if(error){
			console.log(error);
		}
		response.writeHead(200,{"Content-type":"text/html"});
		response.write(data);
		response.end();
	});
}

function portfolio(response){
	console.log("Handling requests for portfolio");
	response.writeHead(200,{"Content-type":"text/plain"});
	response.write("These are some of my projects");
	response.end();
}

exports.index=index;
exports.portfolio=portfolio;
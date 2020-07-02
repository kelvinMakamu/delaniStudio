let fs = require('fs');
let path = require('path');
let Logger = require('./logger');
let logger = new Logger('Router');

let route = (handle,pathname,response) => {
	logger.info("About to route a request for "+pathname);
	console.log("About to route a request for "+pathname);
	if(typeof handle[pathname] === 'function'){
		handle[pathname](response);
	}else if(pathname.match("\.css$")){
		let cssPath=path.join(__dirname,'public',pathname);
		let cssStream= fs.createReadStream(cssPath);
		response.writeHead(200,{"Content-type":"text/css"});
		cssStream.pipe(response);
	}else if(pathname.match("\.png$") || pathname.match("\.jpg$")){
		let imagePath=path.join(__dirname,'public',pathname);
		let imageStream= fs.createReadStream(imagePath);
		response.writeHead(200,{"Content-type":"image/png"});
		imageStream.pipe(response);
	}else if(pathname.match("\.js$")){
		let jsPath=path.join(__dirname,'public',pathname);
		let jsStream= fs.createReadStream(jsPath);
		response.writeHead(200,{"Content-type":"application/js"});
		jsStream.pipe(response);
	}else{
		console.log("No Handler for request "+pathname);
		response.writeHead(404,{"Content-type":"text/html"});
		response.write("<h2>404 Not FOUND</h2>");
		response.end();
	}
}

exports.route=route;
let fs = require('fs');

class Logger {

	constructor(module){
		this.module;

		let logStream=fs.createWriteStream('./logs',{flags:'a'});

		let info = function(msg){
			let level=`info`.toUpperCase();
			let message=`${new Date()}| ${level} | ${module} | ${msg}`;
			logStream.write(message);
		}

		this.info=info;

		let error = function(msg){
			let level=`error`.toUpperCase();
			let message=`${new Date()}| ${level} | ${module} | ${msg}`;
			logStream.write(message);
		}

		this.error=error;
	}
}

module.exports=Logger
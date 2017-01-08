'use strict';

var fs = require('fs');

//Promisify mkDir
var mkDir = function mkDir(toPath){
	return new Promise(function(resolve, reject){
		fs.mkdir(toPath, function(err){
			if (err){
				reject(err);
			}
			else{
				resolve();
			}
		});
	});
};

module.exports = mkDir;
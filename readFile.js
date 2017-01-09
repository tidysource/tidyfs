'use strict';

var fs = require('fs');

var readFile = function readFile(filePath, options){
	return new Promise(function(resolve, reject){
		fs.readFile(
			filePath,
			options,
			function(err,content){
				if (err){
					reject(err);
					}
				else{
					resolve(content);
				}
			});
	});
};

module.exports = readFile;
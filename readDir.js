'use strict';

var fs = require('fs');

var readDir = function readDir(dirPath, options){
	return new Promise(function(resolve, reject){
		fs.readdir(
			dirPath,
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

module.exports = readDir;
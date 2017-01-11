'use strict';

var fs = require('fs');

var rmDir = function rmDir(dirPath){
	return new Promise(function(resolve, reject){
		fs.rmdir(
				dirPath,
				function(err){
					if (err){
						reject(err);
					}
					else{
						resolve();
					}
				});
	});
};

module.exports = rmDir;
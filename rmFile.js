'use strict';

var fs = require('fs');

var rmFile = function rmFile(filePath){
	return new Promise(function(resolve, reject){
		fs.unlink(
				filePath,
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

module.exports = rmFile;
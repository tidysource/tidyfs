'use strict';

var fs = require('fs');

var writeFile = function writeFile(filePath, content, options){
	return new Promise(function(resolve, reject){
		fs.writeFile(
					filePath,
					content,
					options,
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

module.exports = writeFile;
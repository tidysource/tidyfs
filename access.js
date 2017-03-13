'use strict';

var fs = require('fs');

module.exports = function access(path, mode){
	return new Promise(function(resolve, reject){
		fs.access(
				path,
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
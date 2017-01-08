'use strict';

var fs = require('fs');

var stat = function stat(itemPath){
	return new Promise(function(resolve, reject){
		fs.stat(
			itemPath, 
			function(err, stats){
				if (err){
					reject(err);
				}
				else{
					resolve(stats);
				}
			});
	});
};

module.exports = stat;
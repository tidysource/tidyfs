# tidyfs
Promisify node fs (see https://nodejs.org/api/fs.html).
Improve naming. This is done by adding camel-case for readability and improving consistency.

Available functions:
mkdir ---> mkDir
writeFile ---> mkFile
readdir ---> readDir
readFile ---> readFile
rmdir ---> rmDir
unlink ---> rmFile
stat ---> stat

## Example usage
```javascript
var fs = require('tidyfs');

fs.mkDir('./hello')
	.then(function(){
		console.log('Created directory with name hello.');
	})
	.catch(function(err){
		console.log(err)
	});
```

## Helpful resources
Read more on JS promises: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
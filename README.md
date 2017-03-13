# tidyfs

## Objectives
Promisify node's native fs module (see https://nodejs.org/api/fs.html).
Improve naming. This is done by adding camel-case for readability and improving consistency.

## How to use

### Prerequisite

#### Promises
You should know how to use JS promises.
To get started, here's a few helpful links:
- https://developers.google.com/web/fundamentals/getting-started/primers/promises
- https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise

#### Node JS
https://nodejs.org/

### Overview
The fs module functions are renamed to be more consistent.
Summary of changes:
- `mkdir` ---> `mkDir`
- `writeFile` ---> `mkFile`
- `readdir` ---> `readDir`
- `readFile` ---> `readFile`
- `rmdir` ---> `rmDir`
- `unlink` ---> `rmFile`
- `stat` ---> `stat`
- `access` ---> `access`

## Example usage
Note: all parameters and returning values (passed to promise 
success) are the same as with the [native nodeJS fs module][1].


### Include module
First you should require the module. 

```javascript
var fs = require('tidyfs');
```

### mkDir
Make a directory. 
Returns a promise.

```javascript
//Include module
var fs = require('tidyfs');

//Make a directory (folder)
fs.mkDir('./hello')
	.then(function(){
		console.log('Yay! Created hello folder.');
	})
	.catch(function(err){
		console.log(err)
	});
```

### mkFile
Make a file. 
Returns a promise.

```javascript
//Include module
var fs = require('tidyfs');

//Make a (text) file (with 'Hello World' as content)
fs.mkfile('./hello.txt', 'Hello World', 'UTF-8')
	.then(function(){
		console.log('Yay! Created hello.txt file.');
	})
	.catch(function(err){
		console.log(err)
	});
```

### readDir
Read a directory. 
Returns a promise.

```javascript
//Include module
var fs = require('tidyfs');

//Read dir (folder) content
fs.readDir('./hello')
	.then(function(dirContent){
		console.log(dirContent);
	})
	.catch(function(err){
		console.log(err)
	});
```

### readFile
Read a file. 
Returns a promise.

```javascript
//Include module
var fs = require('tidyfs');

//Read a file
fs.readFile('./hello.txt', 'UTF-8')
	.then(function(fileContent){
		console.log(fileContent);
	})
	.catch(function(err){
		console.log(err)
	});
```

### stat
Get information on an item (file or directory).
Returns a promise.

```javascript
//Include module
var fs = require('tidyfs');

//Get information on a file
fs.stat('./hello.txt')
	.then(function(stats){
		console.log(stats);
	})
	.catch(function(err){
		console.log(err)
	});
	
//Get information on a directory
fs.stat('./hello')
	.then(function(stats){
		console.log(stats);
	})
	.catch(function(err){
		console.log(err)
	});
```

### access
Returns an error if file does not exists, 
otherwise a resolved promise. For rwx
permission check see [nodeJS docs][1].

```javascript
//Include module
var fs = require('tidyfs');

fs.access('./hello/world.txt')
	.then(function(){
		assert.ok(true, 
		'./hello/world.txt exists');
	}) 
	.catch(function(err){
		assert.fail(err);
	});
	
fs.access('.hello/world/foo/bar.txt')
	.then(function(){
		assert.fail('.hello/world/foo/bar.txt does not exists');
	}) 
	.catch(function(err){
		assert.ok(true, '.hello/world/foo/bar.txt does not exists');
	});
```

### rmDir
Remove a directory. 
Returns a promise.

```javascript
//Include module
var fs = require('tidyfs');

//Remove 'hello' directory
fs.rmDir('./hello')
	.then(function(){
		console.log('Removed hello folder');
	})
	.catch(function(err){
		console.log(err)
	});
```

### rmFile
Remove a file. 
Returns a promise.

```javascript
//Include module
var fs = require('tidyfs');

//Remove a file
fs.rmFile('./hello.txt')
	.then(function(){
		console.log('Removed hello.txt file');
	})
	.catch(function(err){
		console.log(err)
	});
```

[1]: https://nodejs.org/api/fs.html
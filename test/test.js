'use strict';

/*
Setup testing environment
=========================
*/
//Testing modules
var test = require('tape');
var colorize = require('tap-colorize');
var colorizeOptions = {
	pass : '#B2D9B5',
	fail : '#FE5A4E',
	info : '#EEEEEE'
};
test.createStream()
	.pipe(colorize(colorizeOptions))
	.pipe(process.stdout);

//Module to test
var fs = require('../index.js');

/*
Tests
=====
*/
test('mkDir()', function(assert){
	assert.plan(1);
	
	fs.mkDir('./hello')
		.then(function(){
			assert.ok(true, 
			'hello folder created');
		}) 
		.catch(function(err){
			assert.fail(err);
		});
});

test('mkFile()', function(assert){
	assert.plan(1);
	
	fs.mkFile('./hello/world.txt', 
				'Hello World', 
				'UTF-8')
		.then(function(){
			assert.ok(true, 
			'./hello/world.txt created');
		}) 
		.catch(function(err){
			assert.fail(err);
		});
});

test('readDir()', function(assert){
	assert.plan(1);
	
	fs.readDir('./hello')
		.then(function(dirContent){
			assert.deepEqual(['world.txt'], dirContent, 
			'./hello folder contains world.txt');
		}) 
		.catch(function(err){
			assert.fail(err);
		});
});

test('readFile()', function(assert){
	assert.plan(1);
	
	fs.readFile('./hello/world.txt', 'UTF-8')
		.then(function(fileContent){
			assert.equal(fileContent, 'Hello World', 
			'./hello/world.txt content: "Hello World"');
		}) 
		.catch(function(err){
			assert.fail(err);
		});
});

test('stat()', function(assert){
	assert.plan(2);
	//Get information on a file
	fs.stat('./hello/world.txt')
		.then(function(stats){
			assert.ok(stats.isFile(),
			'./hello.world.txt is a file');
		})
		.catch(function(err){
			console.log(err)
		});
		
	//Get information on a directory
	fs.stat('./hello')
		.then(function(stats){
			assert.ok(stats.isDirectory(),
			'./hello is a directory');
		})
		.catch(function(err){
			console.log(err)
		});
});

test('rmFile()', function(assert){
	assert.plan(1);
	
	fs.rmFile('./hello/world.txt')
		.then(function(){
			assert.ok(true, 
			'./hello/world.txt removed');
		}) 
		.catch(function(err){
			assert.fail(err);
		});
});

test('rmDir()', function(assert){
	assert.plan(1);
	
	fs.rmDir('./hello')
		.then(function(){
			assert.ok(true, 
			'hello folder removed');
		}) 
		.catch(function(err){
			assert.fail(err);
		});
});
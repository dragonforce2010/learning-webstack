var Promise = require('./promise.js');

var promise = new Promise();

setTimeout(function () {
	promise.resolve();
}, 1000);

setTimeout(function () {
	promise.done(function (data) {
		console.log('Handler added after deferred object is done');
	});	
}, 2000);

promise.done(function (data) {
	console.log('Deferred object has completed');
});

var promise2 = new Promise();

promise2.failed(function () {
	console.log('Promise #2 failed');
}).done(function () {
	console.log('Promise #2 has completed');
});

setTimeout(function () {
	promise2.fail();
}, 1000);


console.log('application completed');
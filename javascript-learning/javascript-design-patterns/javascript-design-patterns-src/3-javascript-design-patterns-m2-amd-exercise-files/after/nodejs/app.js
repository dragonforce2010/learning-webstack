var Calc = require('./calc.js');

Calc
	.add(1)
	.add(2)
	.multiply(3)
	.equals(function (result) {
		console.log(result);
	});

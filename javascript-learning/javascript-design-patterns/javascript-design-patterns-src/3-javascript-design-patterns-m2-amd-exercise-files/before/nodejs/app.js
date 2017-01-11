var Calc = require('./calc.js');

new Calc(0)
	.add(1)
	.add(2)
	.multiply(3)
	.equals(function (result) {
		console.log(result);
	});

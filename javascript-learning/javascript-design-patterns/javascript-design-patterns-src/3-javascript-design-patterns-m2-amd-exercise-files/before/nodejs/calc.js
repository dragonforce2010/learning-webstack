var Calc = function (start) {
	var self = this;

	this.add = function (x) {
		start = start + x;

		return self;
	};

	this.multiply = function (x) {
		start = start * x;

		return self;
	};

	this.equals = function (callback) {
		callback(start);

		return self;
	};
}
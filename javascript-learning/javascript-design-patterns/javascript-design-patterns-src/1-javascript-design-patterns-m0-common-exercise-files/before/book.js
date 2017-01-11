var Book = function (name, price) {
	this.name = function (val) {

	};

	this.price = function (val) {

	};

	this.onPriceChanging = function (callback) {

	};

	this.onPriceChanged = function (callback) {

	};
};

var book = new Book('JavaScript: The Good Parts', 23.99);

console.log('The name is: '+ book.name());

console.log('The price is: $' + book.price());

book.onPriceChanging(function (b, price) {
	if (price > 100) {
		console.log('System error, price has gone unexpectedly high');
		return false;
	}
	return true;
});

book.onPriceChanged(function (b) {
	console.log('The book price has changed to: $' + b.price());
});

book.price(19.99);

book.price(200);
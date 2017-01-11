var Book = function (name, price) {
	var priceChangingCallbacks = [];
		priceChangedCallbacks = [];

	this.name = function (val) {
		if (val && name !== val) {
			name = val;
		}

		return name;
	};

	this.price = function (val) {
		var i, il;
		if (val && price !== val) {
			for (i = 0, il = priceChangingCallbacks.length; i < il; i++) {
				if (!priceChangingCallbacks[i](this, val)) {
					return price;
				}
			}

			price = val;

			for (i = priceChangedCallbacks.length - 1; i >= 0; i--) {
				priceChangedCallbacks[i](this);
			}
		}

		return price;
	};

	this.onPriceChanging = function (callback) {
		priceChangingCallbacks.push(callback);
	};

	this.onPriceChanged = function (callback) {
		priceChangedCallbacks.push(callback);
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
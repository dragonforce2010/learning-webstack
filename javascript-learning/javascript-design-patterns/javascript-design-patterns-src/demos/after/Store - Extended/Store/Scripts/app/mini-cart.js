define(['./pubsub', 'jquery'], function (pubsub, $) {
    var cart, count = 0;
    pubsub.sub('add-to-cart', function () {
        count++;

        cart.find('span').html(count);
    });

    pubsub.sub('remove-from-cart', function () {
        count--;

        cart.find('span').html(count);
    });

    return {
        init: function () {
            cart = $('.mini-cart');
        }
    };
});
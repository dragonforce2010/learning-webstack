define(['./pubsub', 'jquery'], function (pubsub, $) {
    var cart, count = 0;
    pubsub.sub('add-to-cart', function (item) {
        count++;

        cart.find('h1').html(count);

        var li = $('<li />')
            .html(item.name)
            .data('key', item.id);

        cart.find('ul').append(li);
    });

    pubsub.sub('remove-from-cart', function (item) {
        count--;

        cart.find('h1').html(count);

        cart.find('li').filter(function () {
            return $(this).data('key') == item.id;
        }).remove();
    });

    return {
        init: function () {
            cart = $('.big-cart');
        }
    };
});
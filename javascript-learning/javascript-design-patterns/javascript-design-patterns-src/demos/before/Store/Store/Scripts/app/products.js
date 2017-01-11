require(['jquery'], function ($) {
    $(document).ready(function () {
        var productList = $('.products'),
            cartCount = 0;

        productList.on('click', 'i', function () {
            var $this = $(this),
                li;

            if ($this.hasClass('icon-plus')) {
                cartCount++;

                $this.removeClass('icon-plus')
                    .addClass('icon-minus')
                    .attr('title', 'Remove from cart');

                li = $('<li>' + $this.parents('section:first').find('h1').html() + '</li>').data('item', this);
                $('.big-cart ul').append(li);
            } else {
                cartCount--;

                $this.addClass('icon-plus')
                    .removeClass('icon-minus')
                    .attr('title', 'Remove from cart');

                $('.big-cart ul li').filter(function () {
                    return $(this).data('item') === $this[0];
                }).remove();
            }

            $('.mini-cart span').html(cartCount);
            $('.big-cart h1').html(cartCount);

        });
    });
});
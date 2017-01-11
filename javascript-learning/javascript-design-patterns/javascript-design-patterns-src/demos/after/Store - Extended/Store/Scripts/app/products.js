require(['jquery', './big-cart', './mini-cart', './product-list'], function ($, bigCart, miniCart, productList) {
    $(document).ready(function () {
        bigCart.init();
        miniCart.init();
        productList.init();
    });
});
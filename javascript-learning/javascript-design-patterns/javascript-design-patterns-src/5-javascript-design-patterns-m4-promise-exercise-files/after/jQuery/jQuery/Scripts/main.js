require(['twitter/api', 'jquery'], function (api, $) {
    $.fn.blinky = function (args) {
        var opts = { frequency: 1000, count: -1 };
        args = $.extend(true, opts, args);  
        var i = 0;
        var that = this;
        var dfd = $.Deferred();
        function go() {
            if(that.length == 0) {
                return dfd.reject();    
            }
            if(i == args.count) {
                return dfd.resolve();
            }
            i++;
            $(that).fadeOut().fadeIn();
            setTimeout(go, args.frequency); 
        };
        go();
        return dfd.promise();
    };

    $(document).ready(function () {
        $('.load-tweets').submit(function (e) {
            e.preventDefault();
            var user = $(this).find('input').val();
            $.when(api.timeline(user), $(this).find('input').blinky({ count: 2 }))
                .done(function (args) {
                    var el = $('.twitter').empty(),
                            lis = [],
                            tweets = args[0];

                    for (var i = 0, il = tweets.length; i < il; i++) {
                        lis.push($('<li><strong>@' + user + '</strong>: ' + tweets[i].text + '<br /><em>' + tweets[i].created_at + '</em></li>')[0]);
                    }

                    el.append(lis);
                });
        });
    });
});
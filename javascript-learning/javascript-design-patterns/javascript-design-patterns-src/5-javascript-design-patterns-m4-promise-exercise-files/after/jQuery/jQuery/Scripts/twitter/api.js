define(['jquery'], function ($) {
    return {
        timeline: function (user) {
            var dfd = $.Deferred();
            $.getJSON('http://api.twitter.com/1/statuses/user_timeline.json?id=' + user + '&skip_user=true&include_rts=true&include_entities=true&callback=?')
                .success(dfd.resolve)
                .error(function () {
                    dfd.reject('An error occurred when querying twitter');
                });

            return dfd.promise();
        }
    };
});
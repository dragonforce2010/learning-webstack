define(['jquery'], function ($) {
    return {
        timeline: function (user) {
            return $.getJSON('http://api.twitter.com/1/statuses/user_timeline.json?id=' + user + '&skip_user=true&include_rts=true&include_entities=true&callback=?');
        }
    };
});
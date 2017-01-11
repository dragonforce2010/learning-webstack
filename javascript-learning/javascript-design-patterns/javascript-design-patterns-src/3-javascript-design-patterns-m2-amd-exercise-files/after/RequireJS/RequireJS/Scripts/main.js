require(['twitter/api', 'jquery'], function (api, $) {
    $(document).ready(function () {
        $('.load-tweets').submit(function (e) {
            e.preventDefault();
            var user = $(this).find('input').val();
            api.timeline(user)
                .done(function (tweets) {
                    var el = $('.twitter').empty(),
                    lis = [];

                    for (var i = 0, il = tweets.length; i < il; i++) {
                        lis.push($('<li><strong>@' + user + '</strong>: ' + tweets[i].text + '<br /><em>' + tweets[i].created_at + '</em></li>')[0]);
                    }

                    el.append(lis);
                });
        });
    });
});
jQuery.fn.mashup = function(settings){
    this.each(function() {
        settings = jQuery.extend({
            'twitter_username': '',
            'twitter_numposts': 5,
            'github_username': '',
            'lastfm_apikey': '',
            'lastfm_username': '',
            'lastfm_numrectracks': 5,
        }, settings);

        var mashup_dom = this;
        $(mashup_dom).html('');

        /*
         * Twitter
         * Thanks jTwitter for the URL
         */
        var twitter_url = "http://twitter.com/status/user_timeline/"+ settings.twitter_username +
                          '.json?count='+ settings.twitter_numposts +'&callback=?';
        $.getJSON(twitter_url, function(data){
            $(mashup_dom).append('<ul id="mash_tweet"></ul>');
            $.each(data, function(i, item) {
                    $("#mash_tweet").append('<li>'+ item.text +'</li>');
            });
        });

        /*
         * Github
         * FIX: Use google ajax feed api and get the rss feed by user!
         */ 

        /*
         * LastFM
         * You have to register an API Key to use it
         * http://www.lastfm.de/api/
         */
        var lastfm_baseurl = 'http://ws.audioscrobbler.com/2.0/?format=json&callback=?' + 
                             '&user='+ settings.lastfm_username +'&api_key=' +settings.lastfm_apikey;
        var lastfm_recenttracks = lastfm_baseurl+ '&method=user.getrecenttracks&nowplaying=true'+
                                  '&limit='+ settings.lastfm_numrectracks;
        $.getJSON(lastfm_recenttracks, function(data){
            $(mashup_dom).append('<ul id="mash_lastfm"></ul>');
            $.each(data.recenttracks.track, function(i, item) {
                $('#mash_lastfm').append('<li>'+ item.artist['#text']+' - '+ item.name +'</li>');
            });
        });
    });
}

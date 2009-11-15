jquery.MashUp
=============

--
is
--

a jquery plugin which will create a little mashup of various websites.

Supported Sites
---------------

* Twitter
* last.fm

Usage
-----

Given the following HTML:

    <div id="mashup"></div>

The according javascript (remember jquery 1.2+ is required!):
    
    $('#mashup').mashup({'twitter_username': twitter,
                         'lastfm_apikey': apikeyhere,..});

Available Settings:
    * twitter_username
    * twitter_numposts (Default: 5)
    * lastfm_apikey
    * lastfm_username
    * lastfm_numrectracks (Default: 5)

In works:
    * github support

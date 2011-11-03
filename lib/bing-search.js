/*!
 * Bing Search Client for Node.js
 * Copyright(c) 2011 Sujal Shah <sujal@variolabs.com>
 * Source covered by the MIT License
 * 
 * Portions from or inspired by the twitter-node library by
 * Jeff Waugh (https://github.com/jdub/node-twitter)
 * including the constructor/options storage
 *
 */
 
var http = require('http')
  , url = require('url')
  , querystring = require('querystring')
  , _ = require('underscore');
 
exports = module.exports;
 
 
var SearchClient = function(options)
{
  if (!(this instanceof SearchClient)) return new SearchClient(query, options, callback);
 
  var defaults = {
    /*
     * Should be a space delimited list of valid bing sources:
     * Image, News, PhoneBook, RelatedSearch, Spell, Translation,
     * Video, Web
     */
    sourcelist: "web",
    /*
     * API Key from Bing Dev Portal: http://www.bing.com/toolbox/bingdeveloper/
     */
    apikey: null
  };
  
  this.options = _.extend(defaults, options);
 
}

SearchClient.version = 0.1;
module.exports = SearchClient;


 
var bing = require('../lib/bing-search');

var client = new bing.SearchClient({appId: process.env.BING_APP_ID});

client.search("variolabs", function(error, response, data) {
  
  if (!error && response.statusCode == 200)
  {
    console.log(data);
    if (data === null)
    {
      console.log("ERROR executing search: "+error);
    } else {
      console.log("SUCCESS: " + data.SearchResponse.Web.Results.length);
    }
    
  } else {
    console.log("ERROR! " + error + "/" + response.statusCode);
  }
  
});
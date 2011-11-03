var bing = require('../lib/bing-api');
var client = new bing.SearchClient({appId: process.env.BING_APP_ID});
client.search("variolabs", function(error, response, data) {
  
  if (!error && response.statusCode == 200)
  {
    if (data === null || data.SearchResponse === null || (data.SearchResponse.Errors && data.SearchResponse.Errors.length > 0))
    {
      if (error === null)
        error = ""
        
      for (var i = data.SearchResponse.Errors.length - 1; i >= 0; i--){
        error += data.SearchResponse.Errors[i].Message;
        if (data.SearchResponse.Errors[i].Parameter)
        {
          error += " ("+data.SearchResponse.Errors[i].Parameter+")";
        }
      };
            
      console.log("ERROR executing search: "+error);
    } else {
      console.log("SUCCESS: Found " + data.SearchResponse.Web.Results.length + " results");
    }
    
  } else {
    console.log("ERROR! " + error + "/" + response.statusCode);
  }
  
});
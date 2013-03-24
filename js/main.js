// function scope for application
(function ($) {
  
  /*
  * Get a local JSON file by specifying the name and path of the file
  * ex: getFile("data/twitterSample.json")
  */
  function getFile(filename, callback) {
    $.getJSON(filename, function (data) {
      var results = data.results;
      
      callback(results);
    });        
  }
  
  
  function displayQuote(results) {
    var numResults = results.length;
    var elements = []; // This is an array
    var element; // variable to contain HTML text
    var htmlString;
    
    // uncomment to examine the JSON data in the console
    console.log(results);
    
    // add the assembled string to the DOM
    htmlString = "<h3>" + "This is a placeholder" + "<h3>";
    $('.wrapper #quote').html(htmlString);

    //$('wrapper #quote').html(htmlString);

    $('.wrapper #quote').on('click', function() {

      var quoteNum = (Math.floor(Math.random()*numResults));

      console.log("quoteNum:" + quoteNum);

      element = "<h3>" + results[quoteNum].quote + "<h3>";

      htmlString = element;

      // grab a random quote and store it into htmlString
      $('.wrapper #quote').html(htmlString);
    })
  }
  
  // pass the file path and name and the function to be called once the
  // json file has been loaded
  getFile("data/quotes.json", displayQuote);
}(window.jQuery));
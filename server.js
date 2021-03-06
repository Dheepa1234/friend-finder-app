//DEPENDENCIES
//The following are a series of npm packages stored in variables that will give our server useful functionality

var express = require("express");
var bodyParser = require("body-parser");
var path = require ("path")


// This stored variable Tells node that we are creating an "express" server

var app = express();

// This sets up an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// This sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'))


//ROUTER
/// Below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//LISTENER
//The code below effectively "starts" our server

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
  

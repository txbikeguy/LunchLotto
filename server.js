// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Enables local CSS page 
app.use(express.static(__dirname + '/public'));

// Routing **NOTE**: html routing is done, but no api routing currently exists- to be added later
app.use(express.static("app"));
// require("./app/routing/apiRoutes")(app);
 require("./routing/htmlRoutes")(app);

// Listening on port function
app.listen(PORT, function() {
    console.log("listening on port", PORT);
  });
  
// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Requiring our models for syncing

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Enables local CSS page 
// app.use(express.static(__dirname + '/public'));

// Routes
// =============================================================
require("./routing/api-routes.js")(app);
require("./routing/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

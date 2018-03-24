// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models/lunch.js");
var Lunch = require("../models/lunch.js")
var sequelize = require("../config/connection.js");
// Routes
// =============================================================
module.exports = function(app) {


  // Get the matching group from the search query
  app.get("/api/:groups", function(req, res) {
    if (req.params.groups) {
      sequelize.query("SELECT DISTINCT group_name FROM lunches AS lunch WHERE group_name='" + req.params.groups + "'", { raw: true
      }).then(function(results) {
        res.json(results);
      });
    }
  });

  


  app.post("/api/new", function(req, res) {
    console.log("Group Data:");
    console.log(req.body);
    Lunch.create({
      group_name: req.body.group_name,
      user_name: req.body.user_name,
      restaurant_name: ""
    });
  });

};
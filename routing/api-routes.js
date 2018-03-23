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

  // route "/" redirect
  // app.get("/", function(req, res) {
  //   res.redirect("/lunch");
  // });  

  // Get all books from a specific author
  app.get("/api/:groups", function(req, res) {
    if (req.params.groups) {
      sequelize.query("SELECT DISTINCT group_name FROM lunches AS lunch WHERE group_name='" + req.params.groups + "'", { raw: true
      }).then(function(results) {
        res.json(results);
        console.log(results);
        // console.log("group params", req.params.groups)
      });
    }
  });

  
};

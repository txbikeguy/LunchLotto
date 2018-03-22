// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models/lunch.js");
var Lunch = require("../models/lunch.js")
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
      Lunch.findAll({
        where: {
          group_name: req.params.groups
        }
        
      }).then(function(results) {
        res.json(results);
        console.log("group params", req.params.groups)
      });
    }
  });

  
};

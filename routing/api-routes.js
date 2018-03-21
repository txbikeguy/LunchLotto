// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // route "/" redirect
  app.get("/", function(req, res) {
    res.redirect("/lunch");
  });  

  // GET route for getting all of the posts
  app.get("/api/groups/", function(req, res) {
    db.lunch.findAll({
        include: [db.group_name],
        // Here we specifiy we want to return our group names in Ascending order
        order: [
            ["group_name", "ASC"]
        ]
    })
    .then(function(dbLunch) {
      res.json(dbLunch);
    });
  });

  
};

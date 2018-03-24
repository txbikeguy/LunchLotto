
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// Requiring our models
var models = require('../models');
var db = require("../models/lunch.js");
var express = require('express');
// Routes
// =============================================================
module.exports = function (app) {
  // GET all groups
  app.get("/api/groups", function (req, res) {
    db.findAll({attributes: ['group_name'], group: ['group_name']})
      .then(function (data) {
        res.json(data);
        // console.log(data);
      })
  });

  // GET all restaurants of a group
  app.get("/api/groups/:group", function (req, res) {
    db.findAll({attributes: ['group_name', 'user_name'], where: {
      group_name: req.params.group 
    }})
      .then(function (data) {
        res.json(data);
        // console.log(data);
      })
  });

  // POST a new restaurant
  app.post("/api" , function(req, res){
    db.create(
      {
        group_name: req.body.group_name,
        restaurant_name: req.body.restaurant_name
      }
    )
    db.sync();
  });
};
// module.exports = function(app) {


//   // Get the matching group from the search query
//   app.get("/api/:groups", function(req, res) {
//     if (req.params.groups) {
//       sequelize.query("SELECT DISTINCT group_name FROM lunches AS lunch WHERE group_name='" + req.params.groups + "'", { raw: true
//       }).then(function(results) {
//         res.json(results);
//       });
//     }
//   });

  


//   app.post("/api/new", function(req, res) {
//     console.log("Group Data:");
//     console.log(req.body);
//     Lunch.create({
//       group_name: req.body.group_name,
//       user_name: req.body.user_name,
//       restaurant_name: ""
//     });
//   });



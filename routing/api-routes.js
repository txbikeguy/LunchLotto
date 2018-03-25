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
    db.findAll({
      attributes:
      ['group_name'], group: ['group_name']
    })
      .then(function (data) {
        res.json(data);
        // console.log(data);
      })
  });

  // GET all restaurants of a group
  app.get("/api/groups/:group", function (req, res) {
    db.findAll({
      where: {
        group_name: req.params.group
      }
    })
      .then(function (data) {
        res.json(data);
        // console.log(data);
      })
  });

  // POST a new restaurant
  app.post("/api", function (req, res) {
    db.create(
      {
        group_name: req.body.group_name,
        user_name: req.body.user_name,
        restaurant_name: req.body.restaurant_name
      }
    ).then(function (data) {
      res.json(data);
    })
  });

  // POST a new group
  app.post("/api/newGroup", function (req, res) {
    console.log(req.body);
    db.create({
      group_name: req.body.group_name,
      user_name: req.body.user_name
    }).then(function (data) {
      res.json(data);
    });
  });

  // POST a new restaurant to an existing group
  app.post("/api/groups/:id", function (req, res) {
    console.log(req.body);
    db.Post.create({
      group_name: req.body.group_name,
      user_name: req.body.user_name
    })
      .then(function (data) {
        res.json(data);
      });
  });


};



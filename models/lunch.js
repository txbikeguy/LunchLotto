// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Lunch" model that matches up with DB
var Lunch = sequelize.define("Lunch", {
  user_name: {
    type: Sequelize.STRING
  },
  group_name: {
    type: Sequelize.STRING
  },
  restaurant_name: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
Lunch.sync();

// Makes the Lunch Model available for other files (will also create a table)
module.exports = Lunch;

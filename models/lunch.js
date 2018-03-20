var db = require('../config/connection.js'),
  sequelize = db.sequelize;
  Sequelize = db.Sequelize;

// Creates a "Lunch" model that matches up with DB
var Lunch = sequelize.define("lunch", {
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

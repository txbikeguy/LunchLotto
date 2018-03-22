var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {

// Creates a "Lunch" model that matches up with DB
var Lunch = sequelize.define("lunch", {
  user_name: {
    type: DataTypes.STRING
  },
  group_name: {
    type: DataTypes.STRING
  },
  restaurant_name: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
});
return Lunch;
};



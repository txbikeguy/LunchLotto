// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
if (process.env.HEROKU_POSTGRESQL_PUCE_URL) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_PUCE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     5432,
    host:     "ec2-107-20-151-189.compute-1.amazonaws.com",
    logging:  true //false
  })
} else {

  sequelize = new Sequelize("lunch_db", "root", "mySQL", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
};

// Exports the connection for other files to use
module.exports = sequelize;
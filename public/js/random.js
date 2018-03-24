//==================RANDOMIZE AND SELECT RESTAURANT NAMES==================//

//***Note: The html page where the result of these functions will be displayed 
//***currently does not exist. These functions serve as a test.

// Dependencies

var db = require("../models/lunch.js");
var Lunch = require("../models/lunch.js")
var sequelize = require("../config/connection.js");

// An on click function - queries the database for all entries
// with the given group name and pushes them into an array (Sequelize?)
// "Pull all restaurant names from where group_name is Blue Baracuda"

// Note: This function doesn't do anything...yet!
function getRestaurants() {
    $.get("/api/authors", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createAuthorRow(data[i]));
      }
      renderAuthorList(rowsToAdd);
      nameInput.val("");
    });
}


// We create a function with a for loop and abmath.floor function 
// that randomizes the names and then pulls one

// This name is then pushed to and displayed on the given html page
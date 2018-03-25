// When user hits the submit-new-grp button
$("#submit-new-grp").on("click", function (event) {


    // Created a newGroup constructor which holds the values submitted from the forms. 
    var newGroup = {
        group_name: $("#new-group").val().trim(),
        user_name: $("#new-user").val().trim(),
    };


    // send an AJAX POST request with jQuery
    $.post("/api/newGroup", newGroup)
        //on success, run the following code
        .then(function (data) {
            //log the data we found
            console.log("api data: ", data);
            var query = newGroup.group_name;
            searchGroup(query);
    // Clear form values
    $("#new-group-form input").val("");
    // Hide New Group form
    $("#new-group-form").slideUp(0);
    // Toggle Restaurant form
    $("#group-form").slideToggle();
        });




});




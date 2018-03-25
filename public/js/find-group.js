// Search for group - populates group name and its restaurants
// OR searches for all groups if nothing is entered
// new form slides down for user to select from all groups 
$("#find-group").click(function () {
    $("#allGroupsList").empty();
    // Clear form values
    //$("#existing-group-form input").val("");

    // Show all groups form

    var query = $('#existing-group').val().trim();
    searchGroup(query);
});

// Find a specific group
function searchGroup(query) {
    var search = "/api/groups"

    // if a group name was entered, search for group in db
    if (query.length > 0)
        search += "/" + query;
    $.get(search).then(function (data) {
        console.log(data);
        //add error div for no results found.
        if (data.length == 0)
            return;
        // list all restaurants for the group
        // Hide Find Group form
        $("#existing-group-form").slideUp(0);
        // Hide Restaurant form
        $("#group-form").slideUp(0);
        if (query.length > 0) {
            // put group name into #groupName span 
            $("#groupName").html("<p>" + query + "</p>");
            // parse username data into #userNames span
            userList = [];
            for (i = 0; i < data.length; i++) {
                userList.push(data[i].user_name);
            }
            var splitUser = userList.join(", ");
            $("#userNames").text("");
            $("#groupLabel").text("Group: ");
            $("#userNames").text(splitUser);
            $("#user-list").show();
            $("#group-form").slideToggle();
            // if no group name was entered, find all groups
        } else {
            $("#all-groups").slideToggle();
            //// Make a div for each group and add to #all-groups form under #allGroupsList div
            for (i = 0; i < data.length; i++) {
                var div = $("<div class='allGroupsItem'>");
                var group = data[i].group_name;
                var btn = $("<button class='allGroupsItemBtn'>");
                btn.text(group);
                div.append(btn);
                $("#allGroupsList").append(div);
                // add event listener for buttons 
                btn.click(function () {
                    $("#all-groups").slideUp(0);
                    // Show all groups form
                    // $("#group-form").slideToggle();
                    var query = this.innerHTML;
                    searchGroup(query);
                })

                //$("#groupLabel").html("<i>Sorry, that group doesn't exist.</i><br>All Available Groups: <br>");
                //$("#user-list").hide();
                $("#mapContainer").show();
            }
        }
    })
};

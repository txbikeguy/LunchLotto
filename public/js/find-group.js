// Search for group - populates group name and its restaurants
    // OR searches for all groups if nothing is entered
    // new form slides down for user to select from all groups 
    $("#find-group").click(function () {
        $("#allGroupsList").empty();
        // Clear form values
        $("#existing-group-form input").val("");
        // Hide Find Group form
        $("#existing-group-form").slideUp(0);
        // Hide Restaurant form
        $("#group-form").slideUp(0);
        // Show all groups form
        $("#all-groups").slideToggle();
        var query = $('#existing-group').val().trim();
        searchGroup(query);
    });

    // Find a specific group
    function searchGroup(query) {
        var search = "/api/groups"

        if (query.length > 0)
            search += "/" + query;
        $.get(search).then(function (data) {
            console.log(data);

            // if a group name was entered, list all restaurants for the group
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
                // if no group name was entered, find all groups
            } else {
                //// Make a div for each group and add to #all-groups form under #allGroupsList div
                for (i = 0; i < data.length; i++) {
                    var div = $("<div class='allGroupsItem'>");
                    var group = data[i].group_name;
                    //var id = data[i].id;
                    //var p = ("<p>" + group + "</p>");
                    //var p = $("<p>").text("Group " + [i+1] + ": " + group);

                    var btn = $("<button class='allGroupsItemBtn'>");
                    btn.text(group);
                    btn.click(function () {
                        $("#all-groups").slideUp(0);
                        // Show all groups form
                        $("#group-form").slideToggle();

                        //$(this).attr('id');
                        var query = this.innerHTML;
                        searchGroup(query);
                        //var btnText = $(this).text();

                        //console.log(btnText);
                    })
                    //btn.attr('id', id)
                    div.append(btn);
                    $("#allGroupsList").append(div);
                    $("#groupLabel").html("<i>Sorry, that group doesn't exist.</i><br>All Available Groups: <br>");
                    $("#user-list").hide();
                    $("#mapContainer").show();
                }
            }
            })
        };

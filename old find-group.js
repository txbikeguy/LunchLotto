theirs:




$(document).ready(function () {
    $("#find-group").click(function () {   
        var search = "/api/groups"
            var query = $('#existing-group').val().trim();
            if (query.length > 0)
                search += "/" + query;
            $.get(search).then(function (data) {
                // console.log(JSON.stringify(data.length));

                // if a group name was entered, list all restaurants for the group
                if (data.length > 0) {
                    // put group name into #groupName span 
                    $("#groupName").html("<p>" + query + "</p>");
                    // parse restaurant data into #restNames span
                    var userList = [];
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
                    $.get("/api/groups").then(function (data) {
                        console.log(data);
                    var groupList = [];
                    for (i = 0; i < data.length; i++) {
                        groupList.push(data[i].group_name);
                        var groupSplit = groupList.join(", ");

                    };
                    $("#groupLabel").html("<i>Sorry, that group doesn't exist.</i><br>All Available Groups: <br>");
                    $("#groupName").text(groupSplit);
                    $("#user-list").hide();
                });
                }

            });
        });
    });
$(document).ready(function () {
    $("#find-group").click(function () {   
        var search = "/api/groups"
            var query = $('#existing-group').val().trim();
            if (query.length > 0)
                search += "/" + query;
            $.get(search).then(function (data) {
                // console.log(JSON.stringify(data));

                // if a group name was entered, list all restaurants for the group
                if (query.length > 0) {
                    // put group name into #groupName span 
                    $("#groupName").html("<h2>" + query + "</h2>");
                    // parse restaurant data into #restNames span
                    var restList = [];
                    for (i = 0; i < data.length; i++) {
                        restList.push(data[i].restaurant_name);

                    }
                    var splitRest = restList.join(", ");
                    $("#groupLabel").text("Group: ");
                    $("#restNames").text(splitRest);
                    // if no group name was entered, find all groups
                } else {
                    groupList = [];
                    for (i = 0; i < data.length; i++) {
                        groupList.push(data[i].group_name);

                    }
                    $("#groupLabel").text("All Available Groups: ");
                    $("#groupName").text(groupList);
                    $("#rest-list").hide();
                }

            });
        });
    });
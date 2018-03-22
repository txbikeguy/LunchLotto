$(document).ready(function () {

    $("#find-group").click(function () {
        event.preventDefault();
        // capture user input 
        var groupSearch = $("#existing-group").val().trim();
        console.log(groupSearch);

        // Ajax Call To Search Database For Group Name
        $.get("/api/" + groupSearch, function(data) {
            console.log(data);
            renderGroups(data);
    });
});

    function renderGroups(data) {
        if (data.length !== 0) {
    
        $("#display-group").empty();
        $("#display-group").show();
    
        for (var i = 0; i < data.length; i++) {
    
            var div = $("<div>");
    
            div.append("<h2>" + data[i].group_name + "</h2>");
    
            $("#display-group").append(div);
    
            }
        }
    }
});
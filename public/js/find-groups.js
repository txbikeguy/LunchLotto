// When user hits the search-btn
$("#find-group").on("click", function(event) {
    event.preventDefault();
  
    // Save the book they typed into the book-search input
    var groupSearched = $("#existing-group").val().trim();
  
    // Make an AJAX get request to our api, including the user's book in the url
    $.get("/api/" + groupSearched, function(data) {
  
      console.log(data);
      renderGroups(data);
  
    });
  
  });
    function renderGroups(data) {
        if (data.length !== 0) {
    
        $("#display-group").empty();
        $("#display-group").show();
    
    
            var div = $("<div>");
    
            div.append("<h2>" + data.group_name + "</h2>");
            console.log("data", data);
            console.log("data i", data.group_name)
    
            $("#display-group").append(div);
    
            }
        }


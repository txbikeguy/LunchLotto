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
    
        for (var i = 0; i < data.length; i++) {
    
            var div = $("<div>");
    
            div.append("<h2>" + data[i].group_name + "</h2>");
    
            $("#display-group").append(div);
    
            }
        }
    }

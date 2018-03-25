$(document).ready(function () {
    // On page refresh, scroll to top
    $('html, body').animate({ scrollTop: 0 }, 'fast');


    $("#hero-btn").click(function () {
        // On hero button click, scroll to top of form
        $('html, body').animate({ scrollTop: $('.container').offset().top }, 'slow');
    });

    // on make group button, scrolldown form
    $("#make-group-btn").click(function () {
        $("#new-group-form").slideToggle();
        // Hide Find Group form if open
        $("#existing-group-form").slideUp(0);
        // Hide Restaurant form if open
        $("#group-form").slideUp(0);


    });

    // on find group button, scrolldown form
    $("#existing-group-btn").click(function () {
        $("#existing-group-form").slideToggle();
        // Hide New Group form if open
        $("#new-group-form").slideUp(0);
        // Hide Restaurant form if open
        $("#group-form").slideUp(0);

        $("#groupName").val("");
        $("#restNames").val("");

    });

    // on submit new group, pull up restaurant form 
    $("#submit-new-grp").click(function () {
        // Clear form values
        $("#new-group-form input").val("");
        // Hide New Group form
        $("#new-group-form").slideUp(0);
        // Toggle Restaurant form
        $("#group-form").slideToggle();
        $("#mapContainer").show();
    });

    $("#find-group").click(function () {
        // Clear form values
        $("#existing-group-form input").val("");
        // Hide Find Group form
        $("#existing-group-form").slideUp(0);
        // Toggle Restaurant form
        $("#group-form").slideToggle();
    });

    // POST a new restaurant
    $("#submit-pick").click(function () {
        event.preventDefault();
        var restaurant = {
            restaurant_name: $("#restaurant-name").val().trim(),
            group_name: $("#group-name").val().trim()
        }

        $.post('/api', restaurant)
            .then(function (data) {
                console.log(data);
            });

    });

    // //Declare global variables for Google Autocomplete 
    // var globalCity;
    // var globalState;


    // //Function to build the Yelp API call based on user suggestion
    // function yelpSearchSettings(restaurantName) {
    //     return {
    //         "async": true,
    //         "crossDomain": true,
    //         "url": "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + globalCity + "," + globalState + "&term=" + restaurantName + "&limit=8",
    //         "method": "GET",
    //         "headers": {
    //             "authorization": "Bearer UVD6_jknwmi1GkRxFFkWh7HX-JV_TrlieWHvaSMfi69lmcN6MPUUxk5EGJNnUWmLD3TV5vtrZ25whGiC9gmJRUbhEW5lz3Y6hOXT5oAS-WqK7U5TA772Lt4tBqlaWnYx",
    //             "Cache-Control": "no-cache",
    //         }
    //     };
    // }

    // //Google Maps Autocomplete
    // var input = document.getElementById('location');
    // var autocomplete = new google.maps.places.Autocomplete(input, {
    //     types: ['(cities)']
    // });

    // google.maps.event.addListener(autocomplete, 'place_changed', function () {
    //     var place = autocomplete.getPlace();
    //     var city = place.address_components[0].short_name;
    //     var state = place.address_components[2].short_name;
    //     var lat = place.geometry.location.lat();
    //     var lng = place.geometry.location.lng();
    //     globalCity = city;
    //     globalState = state;
    // });


    // YELP SEARCH - calls Yelp API when a user enters a location and restaurant
    // function searchYelp() {
    //     //Grab user input
    //     var restaurantName = $("#restaurant-name").val().trim();
    //     // var city = $("")

    //     //Empty all form values
    //     // $("#existing-group-form")[0].reset();
    //     $("#group-form input").val("");


    //     var settings = yelpSearchSettings(restaurantName);

    //     //Initiating Ajax call
    //     $.ajax(settings).done(function (response) {
    //         //Returns Yelp JSON for a restaurant 
    //         var responseObject = response.businesses[0];
    //         //databaseFunction(responseObject);
    //         console.log(responseObject);
    //     });
    // }
    // searchYelp();



}); // end of document.ready




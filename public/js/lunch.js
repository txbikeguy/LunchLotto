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
        // Hide Restaurant card if open
        $("#restaurant-card").slideUp(0);
        // Hide all groups form if open
        $("#all-groups").slideUp(0);
    });

    // on find group button, scrolldown form
    $("#existing-group-btn").click(function () {
        $("#existing-group-form").slideToggle();
        // Hide New Group form if open
        $("#new-group-form").slideUp(0);
        // Hide Restaurant form if open
        $("#group-form").slideUp(0);
        // Empty group form values if any
        $("#groupName").val("");
        $("#restNames").val("");
        // Hide Restaurant card if open
        $("#restaurant-card").slideUp(0);
        // Hide all groups form if open
        $("#all-groups").slideUp(0);
    });


    // POST a new restaurant
    $("#submit-pick").click(function () {
        event.preventDefault();
        var restaurant = {
            restaurant_name: $("#restaurant-name").val().trim(),
            user_name: $("#username").val().trim(),
            group_name: $("#group-name").val().trim()
        }

        $.post('/api', restaurant)
            .then(function (data) {
                console.log(data);
            });
        searchYelp();
    });









    //Declare global variables for Google Autocomplete 
    var globalCity;
    var globalState;

    //Google Maps Autocomplete
    var input = document.getElementById('location');
    var autocomplete = new google.maps.places.Autocomplete(input, {
        types: ['(cities)']
    });

    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        var place = autocomplete.getPlace();
        var city = place.address_components[0].short_name;
        var state = place.address_components[2].short_name;
        var lat = place.geometry.location.lat();
        var lng = place.geometry.location.lng();
        globalCity = city;
        globalState = state;
    });

    //Function to build the Yelp API call based on user suggestion
    function yelpSearchSettings(restaurant) {
        return {
            "async": true,
            "crossDomain": true,
            "url": "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + globalCity + "," + globalState + "&term=" + restaurant + "&limit=8",
            "method": "GET",
            "headers": {
                "authorization": "Bearer UVD6_jknwmi1GkRxFFkWh7HX-JV_TrlieWHvaSMfi69lmcN6MPUUxk5EGJNnUWmLD3TV5vtrZ25whGiC9gmJRUbhEW5lz3Y6hOXT5oAS-WqK7U5TA772Lt4tBqlaWnYx",
                "Cache-Control": "no-cache",
            }
        }
    };


    // YELP SEARCH - calls Yelp API when a user enters a location and restaurant
    function searchYelp() {
        //Grab user input
        var restaurant = $("#restaurant-name").val().trim();
        //Empty all form values
        $("#group-form input").val("");
        var settings = yelpSearchSettings(restaurant);
        //Initiating Ajax call
        $.ajax(settings).done(function (response) {
            //Returns Yelp JSON for a restaurant 
            var data = response.businesses[0];
            //parseData(data);
            console.log(data);
        })
    };
})// end of document.ready




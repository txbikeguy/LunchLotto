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
});
















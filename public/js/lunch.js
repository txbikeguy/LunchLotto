$(document).ready(function(){
    // On page refresh, scroll to top
    $('html, body').animate({scrollTop: 0}, 'fast');


$("#hero-btn").click(function(){
    // On hero button click, scroll to top of form
    $('html, body').animate({scrollTop: $('.container').offset().top}, 'slow');
});



// on make group button, scrolldown form
$("#make-group-btn").click(function() {
    $("#new-group-form").slideToggle();
    $("#existing-group-form").slideUp(0);

})

// on add to a group button, scrolldown form
$("#existing-group-btn").click(function() {
    $("#existing-group-form").slideToggle();
    $("#new-group-form").slideUp(0);
})


});
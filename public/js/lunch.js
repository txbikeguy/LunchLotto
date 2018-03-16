$(document).ready(function(){
    // On page refresh, scroll to top
    $('html, body').animate({scrollTop: 0}, 'fast');


$("#hero-btn").click(function(){
    // On enter button click, scroll to top of form
    $('html, body').animate({scrollTop: $('#content').offset().top}, 'slow');
});

});

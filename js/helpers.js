// index
// - smooth scroll function goToByScroll(id);
$(document).ready(function() {

});

// -----------------
// helpers functions
// -----------------



// smooth scroll to id jquery plugin  $('#fsetbtn').removeAttr("href").click(function(){ goToByScroll('fireset'); });
function goToByScroll(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top}, 1000);
}

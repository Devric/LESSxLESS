// | index
// | -----------------
// | - document function
// | -----------------

// | -----------------
// | - window function
// | -----------------
// | -- image size controller

// | -----------------
// | - helper function
// | -----------------
// | -- smooth scroll function goToByScroll(id);


// -----------------
// document ready
// -----------------
$(document).ready(function() {

});


// -----------------
// window ready
// -----------------
$(window).load(function(){ 
    // img size controller
    $('.item').each(function(){
        var obj = $(this),
            maxside = obj.width(),
            h = obj.find('img').height();
        if(h > maxside){
            obj.find('img').css({height:maxside / 1.1, width:'auto', 'margin-left': '20%'});
        }
    });
});

// -----------------
// helpers functions
// -----------------

// smooth scroll to id jquery plugin  $('#fsetbtn').removeAttr("href").click(function(){ goToByScroll('fireset'); });
function goToByScroll(id){
    $('html,body').animate({scrollTop: $("#"+id).offset().top}, 1000);
}

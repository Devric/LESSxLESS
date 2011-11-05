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


// | -----------------
// | - plugins
// | -----------------
// | -- lazyload $('img.lazy').lazyload({threshold: 30}); // the threashold is to tell the browser to load when it about 30px close to the content


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

// -----------------
// plugins
// -----------------
// lazyload
(function($){
    $.fn.lazyload = function(options){
        var opts = $.extend($.fn.lazyload.defaults, options);
        var elements = this;
        $(window).bind('scroll', function(e){
            loadAboveTheFoldImages(elements, opts);
        });
        loadAboveTheFoldImages(elements, opts);
        return this;
    };
    
    $.fn.lazyload.defaults = {threshold: 0};

    function aboveTheFold(element, options){
        var fold = $(window).height() + $(window).scrollTop();
        return fold >= $(element).offset().top - (options['threshold']);
    };

    function loadOriginalImage(element){
        $(element).attr('src', $(element).attr('original-src')).removeAttr('original-src');
    };

    function loadAboveTheFoldImages(elements, options){
        elements.each(function(){
            if (aboveTheFold(this, options) && ($(this).attr('original-src'))){
                loadOriginalImage(this);
            }
        });
    };
})(jQuery);

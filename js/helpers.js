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
// | -- devSizing $('selector').devSizing({content:'img'}); // auto height if it longer than width, default selects the images within selector.


// -----------------
// document ready
// -----------------
$(document).ready(function() {

});

// -----------------
// window ready
// -----------------
$(window).load(function(){ 

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

// devSizing
(function($){ 
    $.fn.extend({
        devSizing: function(options){
            var defaults = {
                content : 'img'
            };
            var options = $.extend(defaults, options);
            return this.each(function(){
                var o = options;
                var obj = $(this);
                
                $(window).load(function(){ 
                    var w  = obj.outerWidth(),
                        h  = obj.height();

                    if(h > w){
                        obj.find(o.content).css({
                            'height': w,
                            'width' : 'auto'
                        });

                        // define new width and center the img
                        var newWidth = obj.find(o.content).outerWidth(),
                            center  = (w - newWidth)/2;

                        obj.find(o.content).css({
                            'margin-left': center
                        });
                    }
                }); //end window.load

            });
        }
    });
})(jQuery); //end devSizing

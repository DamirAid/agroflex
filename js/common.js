$(function() {

$(".popup").magnificPopup({type:"image"});
    $(".popup_content").magnificPopup({
        type:"inline",
        midClick: true
    });
});
//DROPDOWN aautorize
$(function(){
    $(".sign-in a, .top_mnu .top_autorize").click(function() {
        if ($(".autorize_mnu").is(":visible")) {
            $(".autorize_mnu").css("opacity", "1");
            $(".autorize_mnu").fadeOut();
            $(".autorize_mnu .aut_wrap").removeClass("fadeIn animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".autorize_mnu").fadeIn();
            $(".autorize_mnu .aut_wrap").addClass("fadeIn animated");

        };

    });
    
    });
//kol
 $(function() {

        $(document).ready(function() {
            $('.minus').click(function () {
                var $input = $(this).parent().find('input');
                var count = parseInt($input.val()) - 1;
                count = count < 1 ? 1 : count;
                $input.val(count);
                $input.change();
                return false;
            });
            $('.plus').click(function () {
                var $input = $(this).parent().find('input');
                $input.val(parseInt($input.val()) + 1);
                $input.change();
                return false;
            });
        });
    }); 

//ACCORDEON
$(function() {
var accordion = function(){
  var data = $('.accordion').attr('data-accordion')
  
  $('.accordion-header').on('click', function(){
        $(this).next('.accordion-body').not(':animated').slideToggle()
  })
}
accordion();    

});
$('.accordion-header').on('click', function(e){
  e.preventDefault();
    $(this)
      .toggleClass('close')
      .siblings('div')
      .slideToggle();  
});

//tabs
$(function() {
$(".tab").click(function() {
    $(".tab ").removeClass("active").eq($(this).index()).addClass("active");
    $(" .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
  });
// HOME SLIDER
$(function() {
$(".owl-slider").owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    loop:true,
    nav:true,
    touchDrag:false,
    mouseDrag:false,
    margin:0,
    stagePadding:0,
    smartSpeed:450,
});
});
// HOME CAROUSEL
$(function() {
$(".slider-new_tovars").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
         520:{
            items:2,
            nav:true
        },
        768:{
           items:3, 
        },
        992:{
            items:4,
        },
        1200:{
            items:5,
        }
    },
   navText : "", 
});
});
$(function() {

    $(".toggle_mnu").click(function() {
        $(".sandwich").toggleClass("active");
    });



    $(".toggle_mnu").click(function() {
        if ($(".top_mnu ul").is(":visible")) {
            $(".top_text").css("opacity", "1");
            $(".top_mnu ul ").fadeOut(600);
            $(".top_mnu ul li a").removeClass("fadeInUp animated");
        } else {
            $(".top_text").css("opacity", ".1");
            $(".top_mnu ul").fadeIn(600);
            $(".top_mnu ul li a").addClass("fadeInUp animated");
        };
    });

});





 

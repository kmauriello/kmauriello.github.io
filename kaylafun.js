/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */
/*
$(window).scroll(function() {

  if ($(window).scrollTop() > 300) {
    $('.main_nav').addClass('sticky');
  } else {
    $('.main_nav').removeClass('sticky');
  }
});

/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */
/*
jQuery(document).ready(function($) {

  $('.smoothscroll').on('click', function(e) {
    e.preventDefault();

    var target = this.hash,
      $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 800, 'swing', function() {
      window.location.hash = target;
    });
  });

});


TweenMax.staggerFrom(".heading", 0.8, {
  opacity: 0,
  y: 20,
  delay: 0.2
}, 0.4);
*/
/*testimonial slider functions*/
$(document).ready(function() {

  $(function() {

    $('.container .slides:gt(0)').hide();
    setInterval(function() {
      $('.container :first-child').fadeOut(500).next('.slides').fadeIn(500)
        .end().appendTo('.container');
    }, 3000);

  });

});
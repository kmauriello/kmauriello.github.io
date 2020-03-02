/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

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

/*testimonial slider functions*/
var current = 1;
var max = $("li").length + 1;

$(".slidercontent").hide();
$(".slidercontent:nth-child(1)").fadeIn("slow");

//function to change to next quote
function changeUp() {
  $(".slidercontent").hide();
  current += 1;
  if (current === max) {
    current = 1;
  }
  $(".slidercontent:nth-child(" + current + ")").fadeIn("slow");
}

function changeDown() {
  $(".slidercontent").hide();
  current -= 1;

  if (current === 0) {
    current = max - 1;
  }

  $(".slidercontent:nth-child(" + current + ")").fadeIn("slow");
}

startChange();

$(".sliderspot2").click(function() {
  stopChange();
  changeUp();
  startChange();
});

$(".sliderspot").click(function() {
  stopChange();
  changeDown();
  startChange();
});

//FUNCTIONS TO CONTROL TIMING CHANGES
function startChange() {
  changeIt = setInterval(function() {
    changeUp();
  }, 10000);
};

function stopChange() {
  clearInterval(changeIt);
}
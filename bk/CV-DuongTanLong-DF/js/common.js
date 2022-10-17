$(document).ready(function () {
  $("a[href*=\\#]").bind("click", function (e) {
    e.preventDefault(); // prevent hard jump, the default behavior

    var target = $(this).attr("href"); // Set the target as variable

    // perform animated scrolling by getting top-position of target-element and set it as scroll target
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(target).offset().top,
        },
        0,
        function () {
          location.hash = target; //attach the hash (#jump target) to the page url
        }
      );

    return false;
  });
});

$(window)
  .scroll(function () {
    var scrollDistance = $(window).scrollTop() + 70;

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scrolling
    $(".page").each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $(".navigation__link.active").removeClass("active");
        $(".navigation__link").eq(i).addClass("active");
      }
    });
  })
  .scroll();
// page scroll
$(window).scroll(function (event) {
  var scroll = $(window).scrollTop();
  $("#section2").toggleClass("active", scroll >= $("#section2").offset().top + 400);
  $("#section2 .box_experience_work").toggleClass("active_timeline", scroll >= $("#section2").offset().top);
  $("#section3").toggleClass("active", scroll >= $("#section3").offset().top - 400);
  $("#section4").toggleClass("active", scroll >= $("#section4").offset().top - 400);
  $("#section5").toggleClass("active", scroll >= $("#section5").offset().top - 400);
});
//trigger the scroll
$(window).scroll();

//back to top
$(document).ready(function() {
    "use strict";
    $("#toTop").hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 120) {
          $(".mainMenu").addClass('fix');
          $(".mainContent").addClass('fix');
      } else {
          $(".mainMenu").removeClass('fix');
          $(".mainContent").removeClass('fix');
      }
  });
});

// FIX scroll smooth behavior IE SAFARI
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 200, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
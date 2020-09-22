//get width extra box
$(document).ready(function() {
    "use strict";
    var headerInner = $(".header > .inner").outerWidth();
    var mainContentExtraViewed = $(".mainContent_extra_viewed").outerWidth();
    $(".mainContent_extra_box").outerWidth(headerInner - mainContentExtraViewed - 30);
});
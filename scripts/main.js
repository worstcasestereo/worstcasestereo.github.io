/* Loading */
$(window).load(function() {
  $(".spinner").delay(500).fadeOut();
  $("#mask").delay(500).fadeOut("slow");
  $("body").addClass("loaded");
});


/*----------------------------------------------
M E N U   A N C H O R S
------------------------------------------------*/
$(function() {
  $('a[href*=#]').on( "click", function(e) {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({scrollTop: targetOffset-42}, 1000);

        // collapse nav
        $('.navbar-collapse.in').removeClass('in').addClass('collapse');

        return false;
      }
    }
  });
});


/*----------------------------------------------
M E N U   F I X E D
------------------------------------------------*/
$(function() {
  $(window).on("scroll", function(){
      if (!$('#jHeader.overflow-video').length) {
        if ($(window).scrollTop() >= 85) {
          $('#jHeader').addClass('overflow');
        } else {
          $('#jHeader').removeClass('overflow');
        }
        if ($(window).scrollTop() >= ($('.jIntro').height()/2)) {
          $('#jHeader').addClass('fixed');
        } else {
          $('#jHeader').removeClass('fixed');
        }
      }
  });
});

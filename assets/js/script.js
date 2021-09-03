// navigation
$(function() {
  $('.nav-sp__toggle').click(function() {
    $(this).toggleClass("active");
    if($(this).hasClass('active')) {
      $('.nav-sp__menu').addClass('active');
    } else {
      $('.nav-sp__menu').removeClass('active');
    }
  });
});

// scroll
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(document).ready(function($) {
  // hamburger menu 
  $('#hamburger-menu').click(function() {
    $(this).toggleClass('is-active');
  });
  // collapsible sections
  $('.projects').find('.collapsible-toggle').click(function(){
    $(this).next().slideToggle('fast');
  });
});
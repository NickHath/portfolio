$(document).ready(function($) {
  $('.projects').find('.collapsible-toggle').click(function(){
    $(this).next().slideToggle('fast');
  });
});
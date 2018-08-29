$(document).ready(function($) {
  // hamburger menu 
  $('#hamburger-menu').click(function() {
    // $(this).toggleClass('is-active');
    $(this).hide(0);
    $('.nav-modal').show(350);
  });
  $('#modal-hamburger-menu').click(function() {
    // $(this).toggleClass('is-active');
    $('#hamburger-menu').show(0);
    $('.nav-modal').hide(250);
  });
  $('.hash-link').click(function() {
    $('#hamburger-menu').show(0);
    $('.nav-modal').hide(0);
  });
});           
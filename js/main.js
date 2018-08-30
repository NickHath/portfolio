// thank you to abradley2 for your great github gist: https://gist.github.com/abradley2/1baa9102969e052f14a02b621fa57b53
$(document).ready(function() {
  // if user has bookmarked a path, need to reset to default... or load page with correct route info
  // intercept urls as well as anchor links

  // requires two back spaces to return to '/'
  window.addEventListener('popstate', navigate);
  attachEventHandlers();

  function initRoutes() {
    attachEventHandlers();
    $(document).scrollTop(0);
  }

  function attachEventHandlers() {
    $('a[spa-link]').on('click', function(e) {
      e.preventDefault();
      history.pushState(null, document.title, e.target.getAttribute('href'));
      navigate();
    });
    // hamburger menu
    $('#hamburger-menu').click(function() {
      // $(this).toggleClass('is-active');
      $(this).hide(0);
      $('.nav-modal').show(350);
    });
    $('#modal-hamburger-menu').click(function() {
      // $(this).toggleClass('is-active');
      $('#hamburger-menu').show(0);
      $('.nav-modal').hide(350);
    });
    $('.hash-link').click(function() {
      $('#hamburger-menu').show(0);
      $('.nav-modal').hide(0);
    });
  }

  function navigate() {
    const path = window.location.pathname;
    const routes = {
      '/': () => { $('body').load('../templates/landing-page.html', attachEventHandlers)},
      '/date-idea-generator': () => { $('body').load('../templates/date-idea-generator.html', initRoutes)},
      '/bread-crumb': () => { $('body').load('../templates/bread-crumb.html', initRoutes)},
      '/peanut-gallery': () => { $('body').load('../templates/peanut-gallery.html', initRoutes)},
      '/hack-yale': () => { $('body').load('../templates/hack-yale.html', initRoutes)}
    };
    routes[path]();
  }
});
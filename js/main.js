// thank you to abradley2 for your great github gist: https://gist.github.com/abradley2/1baa9102969e052f14a02b621fa57b53
$(document).ready(function() {
  // intercept back + forward buttons
  window.addEventListener('popstate', navigate);

  // intercept spa anchor links
  $('a[spa-link]').on('click', function(e) {
    e.preventDefault();
    history.pushState(null, document.title, e.target.getAttribute('href'));
    navigate();
  });

  // $('a[spa-hash-link]').on('click', function(e) {
  //   e.preventDefault();
  //   history.pushState(null, document.title, e.target.getAttribute('href'));
  //   $('.case-study').hide(); 
  //   $('.landing').show();
  // });

  // hamburger menu event listeners
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

  // JQUERY way
  // '/date-idea-generator': () => { $('body').load('../templates/date-idea-generator.html', initRoutes)},

  // depending on url, hide and show correct sections of html
  let yCoordLanding = window.pageYOffset;
  function navigate() {
    // update landing page's y offset
    yCoordLanding = window.pageYOffset;
    
    const path = window.location.pathname;
    const routes = {
      // hide whichever case-study is visible
      '/': () => { $('.case-study').hide(); $('.landing').show(); window.scrollTo(0, yCoordLanding); },

      // for case study routes, hide the landing and show that specific view
      '/date-idea-generator': () => { $('.landing').hide(); $('.date-idea-generator').show(); window.scrollTo(0, 0); },
      '/bread-crumb': () => { $('.landing').hide(); $('.bread-crumb').show(); window.scrollTo(0, 0); },
      '/peanut-gallery': () => { $('.landing').hide(); $('.peanut-gallery').show(); window.scrollTo(0, 0); },
      '/hack-yale': () => { $('.landing').hide(); $('.hack-yale').show(); window.scrollTo(0, 0); }
    };
    routes[path]();
  }
});
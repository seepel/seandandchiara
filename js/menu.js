function animateNavs(navs, i, expand, callback) {
  nav = navs[navs.length - 1 - i];
  nav_opacity = 0;
  if(expand) {
    nav = navs[i];
    nav_opacity = 1;
  } 
  nav.animate({ opacity: nav_opacity }, { 
    duration: 100, 
    easing: 'swing', 
    step: function(now, tw) {
      percent = 1 - now;
      translate = 'translate3d(0, -' + Math.round(percent*50) + '%, 0)';
      nav.css({ transform: translate }); 
    },
    complete: function () {
      if(i+1 >= navs.length) {
        callback();
        return;
      }
      animateNavs(navs, i+1, expand, callback);
    }
  });
}

function toggleNav() {
  $header = $('header');
  $menu = $('#mobile_menu');
  navs = [$('#nav_event'), $('#nav_travel'), $('#nav_accommodation'), $('#nav_tour')];
  if($header.hasClass('expanded')) {
    animateNavs(navs, 0, false, function() {
    });
    $menu.animate({ opacity: 0 }, 50, 'swing', function () {
      $menu.text('MENU');
      $menu.animate({ opacity: 1 }, 50, 'swing', function () {
      });
    });
    $header.animate({ height: '75px' });
    $header.removeClass('expanded');
  } else {
    $header.addClass('expanded');
    $header.animate({ height: '100%' }, 400, 'swing', function() {
          });
    $menu.animate({ opacity: 0 }, 50, 'swing', function () {
      $menu.text('CLOSE');
      $menu.animate({ opacity: 1 }, 50, 'swing', function () {
        animateNavs(navs, 0, true, function() { });
      });
    });
  }
}

function collapseNav() {
  if($('header').hasClass('expanded')) {
    toggleNav();
  }
}

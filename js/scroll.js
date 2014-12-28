$window = $(window);
scrollTop = 0;
titleTrigger = 0;
footerTrigger = 0;
bodyHeight = 0;
didInit = false;

var $trigger;
var $footer;


$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    $target = $(target);

    var offset = $('#content').scrollTop() + $target.offset().top;
    $('#content').stop().animate({
      'scrollTop': offset
    }, 900, 'swing');
  });
  update();
  window.onresize = function(event) {
    init();
  }
});

function init() {
  $title = $('#title_background');
  $footer = $('#footer_background');
  bodyHeight = $('#content').height();
  titleTrigger = $title.height() + 100;;
  footerTrigger = bodyHeight - $(window).height() - $footer.height() - 100;
  if(titleTrigger) {
    console.log(titleTrigger);
    didInit = true;
  }
}

function update() {
  requestAnimationFrame(update);
  newScrollTop = $window.scrollTop();
  if(didInit) {
    if(newScrollTop == scrollTop) {
      return;
    }
  } else {
    init();
  }

  scrollTop = newScrollTop;

  if(scrollTop > titleTrigger) {
    if($title.css('opacity') != '0') {
      $title.css({ opacity: 0});
    }
  } else {
    if($title.css('opacity') != '1') {
      $title.css({ opacity: 1 });
    }
  }

  if(scrollTop > footerTrigger) {
    if($footer.css('opacity') != '1') {
      $footer.css({ opacity: 1 });
    }
  } else {
    if($footer.css('opacity') != '0') {
      $footer.css({ opacity: 0 });
    }
  }
}


(function() {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
  || window[vendors[x]+'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame)
  window.requestAnimationFrame = function(callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function() { callback(currTime + timeToCall); },
      timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };

  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
  }

}());



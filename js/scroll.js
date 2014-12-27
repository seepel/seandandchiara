$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash;
    $target = $(target);

    var offset = $("#content").scrollTop() + $target.offset().top;
    $('#content').stop().animate({
      'scrollTop': offset
    }, 900, 'swing');
  });
});


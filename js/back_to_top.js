$('.back_to_top').css('display', 'none');

$( document ).ready( () => {
  var offset = 250;
  var duration = 300;
  $( window ).scroll( () => {
    if( $(this).scrollTop() > offset ) {
      $('.back_to_top').fadeIn( duration );
    }
    else {
      $('.back_to_top').fadeOut( duration );
    }
  });
});
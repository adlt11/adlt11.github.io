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

  $('.back_to_top').click( (event) => {
    event.preventDefault();
    $('html, body').animate( {scrollTop: 0}, duration );
    return false;
  })
});
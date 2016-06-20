'use strict';

$( document ).ready( function() {
  $( '.spoiler' ).each( function() {
    var text = $( this ).text();
    var blankText = '';
    for( var i = 0; i < text.length; i++ ) {
      blankText += '.';
    }
    $( this ).text( blankText );
    $( this ).data( 'spoiler', text );
    $( this ).on( 'click', function() {
      var spoiler = $( this ).data( 'spoiler' );
      $( this ).text( spoiler );
      $( this ).removeClass( 'spoiler' );
    });
  });
});
$(document).ready(function(){
  $('#rounded').click(function() {
    $('div').css( { 'border-radius': '10em' } );
  });
  $('p').click(function() {
    $('#custom').css({ 'background': 'yellow' });
  });
});

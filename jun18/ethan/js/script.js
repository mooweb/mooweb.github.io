$(document).ready(function(){
  
$('img').fadeIn('slow');

$('#hide').click(function() {
    $('img').hide();
});
  
 $('#rounded').click(function() {
   $('div').css({'border-radius':'10em'});
   
 });
  
  
$('#animate').click(function() {
  $('#custom').css({'background':'pink'});
});
               
});

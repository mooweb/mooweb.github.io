$(document).ready(function(){
$('img').click(function(){
  $('img').hide();
});
  
$('div').click(function(){
  $(this).fadeOut(3000);
});
$('#rounded').click(function(){
  $('div').css({'border-radius':'10em'});
});

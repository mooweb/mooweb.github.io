$(document).ready(function(){
$('#rounded').click(function(){
  $('div').css({'border-radius':'10em'});
               });
  
  $('#animate').click(function(){
    $('p').css({'background':'yellow'});
  });
  
  $('#hide').click(function(){
    $('img').hide();
  });
});

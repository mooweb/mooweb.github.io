$(document).ready(function(){
  $('div').click(function(){
    $(this).hide();
  });
  $('#rounded').click(function(){
    $('div').css({'border-radius':'10em'});
  });
});

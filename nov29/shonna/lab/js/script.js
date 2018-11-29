$(document).ready(function(){
  $('div').click(function(){
    $(this).slideUp();
  });
  
  $('img').click(function(){
    $('img').css({'border-radius':'10em'});
  });
  
  $('button').click(function(){
    $('img').toggle();
  });
});

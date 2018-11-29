$(document).ready(function(){
  $('div').click(function(){
    $(this).toggle('explode');
  });
  
  $('img').click(function(){
    $('img').css({'border-radius':'10em'});
  });
  
  $('button').click(function(){
    $('img').toggle();
  });
});

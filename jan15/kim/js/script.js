$(document).ready(function(){
  $('#rounded').click(function(){
    $('div').css({'border-radius':'10em'});
  });
  
  $('#animate').click(function(){
    $('p').css({'background':'purple'});
  });
  
  $('#hide').click(function(){
    $('img').hide();
  });
});

$(document).ready(function(){
  $('div').click(function(){
    $(this).hide();
  });
    $('img').click(function(){
    $('img').css({'border-radius':'100px'});
    });
  
  $('button').click(function(){
    $('img').hide();
    $('body').css({'background':'grey'});
});
  
});

$(document).ready(function(){
  $('div').click(function(){
    $(this).hide();
    });
    $('img').click(function(){
    $('img').css({'border-radius':'100px'});
    });
    $('button').click(function(){
    $('body').css({background:'#ff80ff'});
    });
  });

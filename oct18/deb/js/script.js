$(document).ready(function(){
  $('img').fadein(slow);
  
  $('button').click(function(){
    $('img').fadeOut(fast);
  });
});

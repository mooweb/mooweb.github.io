$(document).ready(function(){
  $('div').click(function(){
    $div(this).hid();
  });
  $('img').click(function(){
    $('img').css({'border-radius':'100px'});
  });

});

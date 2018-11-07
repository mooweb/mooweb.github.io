$(document).ready(function(){
  $('#hide').click(function(){
    $('img').hide();
  });
  
  $('#animate').click(function(){
    $('div').css({'border-radius':'100px'});
  });
  
  $('p').click(function(){
    $('#custom').css({'background-color':'yellow'});
  });
    
});

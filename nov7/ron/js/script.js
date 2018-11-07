$(document).ready(function(){
  $('#hide').click(function(){
    $('img').hide();
  });
  
  
  $('#animate').click(function(){
    $('div').css({'border-radius':'100px'});
  }); 
 
    $('#rounded').click(function(){
    $('div').css({'border-radius':'10em'});
  }); 
    
    
});

$(document).ready(function(){
$('button').click(function(){
  $('div').css({'border-radius':'10em'});
});
$('p').click(function(){
  $('#custom').css({'background':'green'});
});
  $('div').click(function(){
    $(this).hide();
  });
});


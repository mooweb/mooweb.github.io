$(document).ready(function(){
$('#rounded').click(function(){
  $('div').css({'border-radius':'10em'});
});
 $('div').click(function(){
    $(this).fadeout(3000);
 });
$('img').click(function(){
    $(this).fadeout(3000);
 });
  $("button").click(function(){
    $("p").hide();
});
  
  
  $('p').click(function(){
    $('#custom').css({'bacground-color':'yellow'});
});

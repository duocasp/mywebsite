$(document).ready(function(){
  
  document.getElementById("about").style.display = "none";
  
   
   $('#tile3').click(function() {
        $("#right").hide();
        $("#about").show();
   
     });  
  
  
  
  $('#about').click(function() {
       
    $(this).hide();
    $("#right").show();
     });  
  
  
   });

$(document).ready(function(){
  
  document.getElementById("profile").style.display = "none";
  
   
   $('#about').click(function() {
       // $("#right").hide();
        $("#profile").show();
        $("#welcome").hide();
   
     });  
  
  $('#back').click(function() {
        
        $("#profile").hide();
        $("#welcome").show();
     });  
  
  
  
   });

$(document).ready(function(){
     var quote="Click button for a  random quote...";
    $("#quoteBody").text(quote);
  
  $('#clickMe').click(function() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(result){
      quote = JSON.stringify(result.quoteText)+"--" +         result.quoteAuthor; 
      $("#quoteBody").text(quote);
      
    });
  
 });

  
  $('#tweet').click(function() {   
    var html = "https://twitter.com/intent/tweet?text=" + "\""+ quote + "\"";
   // alert(quote);
    //alert("hi");
    window.open(html, '_blank');
 });
});

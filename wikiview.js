$(document).ready(function(){
  var html="";
  var quote = 'test';
  var quote2="";
  var wikiId=[];
  $('#coords').html(quote);
  var x = document.getElementById("coords");
  
  $('#article').click(function() {
    x=""; wikiId=[];html="";
    x = document.getElementById("mySearch").value;
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch="+x+"&srwhat=text&srprop=snippet&format=json&callback=?", function(result){
     
 //***************************
      var linkWik="";
     for (var key in result.query.search) {
      wikiId.push(result.query.search[key].pageid);
   linkWik += wikiId[key] + " " + "<br>";
     
     $("#coords").html(linkWik+ "<br>");
     }   
     
//***************************
      
    for ( var i=0; i<wikiId.length;i++){
      (function(i){
 $.getJSON("https://en.wikipedia.org/w/api.php?action=query&prop=extracts&exlimit=1&pageids="+wikiId[i]+"&continue=&format=json&explaintext&exsentences=1&callback=?", function(info){
  
   html += '<div class="wik" id='+wikiId[i]+'>'+ '<h3><strong>'+ (info.query.pages[wikiId[i]].title)+'</strong></h3><br>'+(info.query.pages[wikiId[i]].extract)  + "</div><br>";//</a>";
    
  $('#coords').html(html);
   //======================
  $('.wik').click(function() {
    window.open('https://en.wikipedia.org/?curid='+this.id, '_blank');
  });
   //==========================
   });
     })(i); 
   //   $('#coords').html(html);
    }          
    //  $('#coords').append(html);
  //***************************  

 });
   
  });
  
  $('#randomArticle').click(function() {     window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank');
});
});  
    

// id for random button is "random"
// id for search box is "search"
// id for search enter button is "enter"
// id for display area is print, 
$(document).ready(function(){
var searchurl="";  
//random page
   $("#random").on("click", function(){
     var randomurl= "https://en.wikipedia.org/wiki/Special:Random";
     alert("This will link you to an external website.");
    window.open(randomurl, "_blank");                   
    });
   
    // change the code below for search call     
      $("#search").keyup(function() {
        var searchword= $("#search").val();
        var searchurl="https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch="+ searchword + "&callback=?" ;
            $.ajax({
           dataType:"json",
           type:"GET",
           url:searchurl,
           async:true, 
           success:function(data){
           console.log("success");
           
            $("#print").empty();  
             var finalresult = [];
             for (var i=0; i < data.query.search.length; i++){
                var resultTitle=data.query.search[i].title; 
                var resultInfo=data.query.search[i].snippet;
                var resultUrl='<a href="https://en.wikipedia.org/wiki/' + resultTitle + '" target="_blank"><h3>';
                var x= i+1;
                finalresult.push(resultUrl + "<b>" +"<h2>" +"<"+ x + ">" + resultTitle +"</h2>" +"</b>" +resultInfo +"...");

             }
                 console.log(finalresult);
                 document.getElementById("print").innerHTML=finalresult;
             
             
           },
           error:function(e){
           console.log(e.message);
           }
          
         });
        
     
      });
  
 
          
      //change the code above for the search call                   
  

}); 
   
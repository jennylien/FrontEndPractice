$(document).ready(function(){
    // your code here
var testNumberLength= function(number){
  if (number.length>15)
  {
   displaying.text("Out of Range"); 
  }  
}  

var number="";
var oldNumber="";  
var operator="";
var ANSWER;
var displaying=$("#numberDisplay");  
  displaying.text("0");
  
    $("#AC").on("click", function(){
    number="";
    displaying.text("0");
    oldNumber="";
    });
    $("#CE").on("click", function(){
    number="";
    displaying.text("0");
    });
  
     $("#equals").on("click", function(){
    number=parseFloat(number,10);
       console.log(number);
    oldNumber=parseFloat(oldNumber,10);
    if(operator==="+")
      {
        number=oldNumber+number;
        console.log(number);
      }
    if(operator==="-")
      {       
        number=oldNumber-number;
      }       
    if(operator==="*")
      {
      number=oldNumber*number; 
      }
    if(operator==="/")
      {
      number=oldNumber/number;  
      }
    if(operator==="%")
      {
       number=oldNumber/100; 
      }       
     number=number.toString();  
    displaying.text(number);
     testNumberLength(number);  
 
    });
  
  
  $("#add").on("click", function(){ 
    operator = "+";
    oldNumber=number;
    number="";
    displaying.text("+"); 
    });
  
    $("#minus").on("click", function(){
  operator = "-";
    oldNumber=number;
    number="";
    displaying.text("-");
    });
  
     $("#time").on("click", function(){
  operator = "*";
    oldNumber=number;
    number="";
    displaying.text("*");
    });

       $("#divide").on("click", function(){
  operator = "/";
    oldNumber=number;
    number="";
    displaying.text("/");
    });
    $("#remaind").on("click", function(){
  operator = "%";
    oldNumber=number;
    number="";
    displaying.text("%");
    });
  
$("#1").on("click", function(){
  number += "1";
  displaying.text(number);   
  testNumberLength(number);
    });
$("#2").on("click", function(){
   number +="2";
   displaying.text(number);    
   testNumberLength(number);
    });
 $("#3").on("click", function(){
   number +="3";
   displaying.text(number);    
    testNumberLength(number);
    }); 
 $("#4").on("click", function(){
   number +="4";
   displaying.text(number); 
    testNumberLength(number);
    }); 
  
  $("#5").on("click", function(){
   number +="5";
   displaying.text(number); 
     testNumberLength(number);
    });
  
  $("#6").on("click", function(){
   number +="6";
   displaying.text(number);    
     testNumberLength(number);
    });
  
  $("#7").on("click", function(){
   number +="7";
   displaying.text(number);    
     testNumberLength(number);
    });
  
  $("#8").on("click", function(){
   number +="8";
   displaying.text(number);    
     testNumberLength(number);
    });
  
  $("#9").on("click", function(){
   number +="9";
   displaying.text(number);    
     testNumberLength(number);
    });
  
  $("#dot").on("click", function(){
   number +=".";
   displaying.text(number);    
   });
  
  $("#zero").on("click", function(){
   number +="0";
   displaying.text(number); 
     testNumberLength(number);
    });

});  
    
   
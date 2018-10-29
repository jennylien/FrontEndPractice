$(document).ready(function(){

 
$.getJSON('https://api.twitch.tv/kraken/streams/freecodecamp?callback=?', function(data1) {
     if (data1.error)
  {   
    document.getElementById("details1").innerHTML="Account Closed";
  }  
  
  else if (data1.stream) 
  {       
    document.getElementById("details1").innerHTML="ONLINE: "+data1.stream.game;    
     img1.src="http://www.clker.com/cliparts/B/3/A/n/8/A/glossy-green-circle-button-md.png";
    $.getJSON("https://api.twitch.tv/kraken/channels/freecodecamp?callback=?", function (sta1){
       document.getElementById("status1").innerHTML= "STATUS: " +sta1.status;
    }); 
  }
  
  else  if (!data1.stream) 
  { document.getElementById("details1").innerHTML="OFFLINE";  
  }
 
});  
  
$.getJSON('https://api.twitch.tv/kraken/streams/OgamingSC2?callback=?', function(data2) {

    if (data2.error)
  {   
    document.getElementById("details2").innerHTML="Account Closed";
  }  
  
  else if (data2.stream) 
  {       
    document.getElementById("details2").innerHTML="ONLINE: "+data2.stream.game;    
     img2.src="http://www.clker.com/cliparts/B/3/A/n/8/A/glossy-green-circle-button-md.png";
    $.getJSON("https://api.twitch.tv/kraken/channels/OgamingSC2?callback=?", function (sta2){
       document.getElementById("status2").innerHTML= "STATUS: " +sta2.status;
    }); 
  }
  
  else  if (!data2.stream) 
  { document.getElementById("details2").innerHTML="OFFLINE";  
  }
 
});  
$.getJSON('https://api.twitch.tv/kraken/streams/clienjenny?callback=?', function(data3) {
    if (data3.error)
  {  
    document.getElementById("details3").innerHTML="Account Closed";
  }  

  
  else if (data3.stream) 
  {       
    document.getElementById("details3").innerHTML="ONLINE: "+data3.stream.game;    
     img3.src="http://www.clker.com/cliparts/B/3/A/n/8/A/glossy-green-circle-button-md.png";
    $.getJSON("https://api.twitch.tv/kraken/channels/clienjenny?callback=?", function (sta3){
       document.getElementById("status3").innerHTML= "STATUS: " +sta3.status;
    }); 
  }
  
  else  if (!data3.stream) 
  { document.getElementById("details3").innerHTML="OFFLINE";  
  }
 
});  
  
$.getJSON('https://api.twitch.tv/kraken/streams/habathcx?callback=?', function(data4) {
    if (data4.error)
  {
    
    document.getElementById("details4").innerHTML="Account Closed";
  }  
 
  else if (data4.stream) 
  {       
    document.getElementById("details4").innerHTML="ONLINE: "+data4.stream.game;    
     img4.src="http://www.clker.com/cliparts/B/3/A/n/8/A/glossy-green-circle-button-md.png";
    $.getJSON("https://api.twitch.tv/kraken/channels/habathcx?callback=?", function (sta4){
       document.getElementById("status4").innerHTML= "STATUS: " +sta4.status;
    }); 
  }
  
  else  if (!data4.stream) 
  { document.getElementById("details4").innerHTML="OFFLINE";  
  }
  
});  
  
$.getJSON('https://api.twitch.tv/kraken/streams/RobotCaleb?callback=?', function(data5) {
    if (data5.error)
  {
    
    document.getElementById("details5").innerHTML="Account Closed";
  }  
 
  
  else if (data5.stream) 
  {       
    document.getElementById("details5").innerHTML="ONLINE: "+data5.stream.game;    
     img5.src="http://www.clker.com/cliparts/B/3/A/n/8/A/glossy-green-circle-button-md.png";
    $.getJSON("https://api.twitch.tv/kraken/channels/RobotCaleb?callback=?", function (sta5){
       document.getElementById("status5").innerHTML= "STATUS: " +sta5.status;
    }); 
  }
  
  else  if (!data5.stream) 
  { document.getElementById("details5").innerHTML="OFFLINE";  
  }

   
});  
  
$.getJSON('https://api.twitch.tv/kraken/streams/thomasballinger?callback=?', function(data6) {
   if (data6.error)
  {
    
    document.getElementById("details6").innerHTML="Account Closed";
  }  
 
  
  else if (data6.stream) 
  {       
    document.getElementById("details6").innerHTML="ONLINE: "+data6.stream.game;    
     img6.src="http://www.clker.com/cliparts/B/3/A/n/8/A/glossy-green-circle-button-md.png";
    $.getJSON("https://api.twitch.tv/kraken/channels/thomasballinger?callback=?", function (sta6){
       document.getElementById("status6").innerHTML= "STATUS: " +sta6.status;
    }); 
  }
  else  if (!data6.stream) 
  { document.getElementById("details6").innerHTML="OFFLINE";  
  }

});  
  
$.getJSON('https://api.twitch.tv/kraken/streams/ESL_SC2?callback=?', function(data7) {
   if (data7.error)
  {
    
    document.getElementById("details7").innerHTML="Account Closed";
  }  
 
  
  else if (data7.stream) 
  {       
    document.getElementById("details7").innerHTML="ONLINE: "+data7.stream.game;    
     img7.src="http://www.clker.com/cliparts/B/3/A/n/8/A/glossy-green-circle-button-md.png";
    $.getJSON("https://api.twitch.tv/kraken/channels/ESL_SC2?callback=?", function (sta7){
       document.getElementById("status7").innerHTML= "STATUS: " +sta7.status;
    }); 
  }
  
  else  if (!data7.stream) 
  { document.getElementById("details7").innerHTML="OFFLINE";  
  }

});  
  
$.getJSON('https://api.twitch.tv/kraken/stream/brunofin?callback=?', function(data8) {
  if (data8.error)
  {
  
    document.getElementById("details8").innerHTML="Account Closed";
  }  
 
  
   else if (data8.stream) 
  {       
    document.getElementById("details8").innerHTML="ONLINE: "+data8.stream.game;    
     img8.src="http://www.clker.com/cliparts/B/3/A/n/8/A/glossy-green-circle-button-md.png";
    $.getJSON("https://api.twitch.tv/kraken/channels/brunofin?callback=?", function (sta8){
       document.getElementById("status8").innerHTML= "STATUS: " +sta8.status;
    }); 
  }
  
  else  if (!data8.stream) 
  { document.getElementById("details8").innerHTML="OFFLINE";  
  }

});  
  
}); 
   
   
   
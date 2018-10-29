//JavaScript

//Other resources:  
//Country Codes for imperial vs. metric check: 
//http://en.wikipedia.org/wiki/ISO_3166-1#Current_codes
//List of countries that use fahrenheight:
//http://en.wikipedia.org/wiki/Fahrenheit
//     url: "http://ip-api.com/json"
//https://developers.google.com/maps/documentation/javascript/examples/geocoding-reverse
var weatherAPIkey="9081137bda3d87e4";
    
  if(!navigator.geolocation){
  console.log("no location");
  document.getElementbyId("location").innterHTML="Current unavailable to access to the location information. Please try again later ";    
  } 

  else if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
   // $("#location").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
    
   var url = "https://api.wunderground.com/api/" + weatherAPIkey + "/conditions/q/" + position.coords.latitude +"," + position.coords.longitude+".json";
    
         $.ajax({
           crossDomain:true,
           dataType:"json",
           type:"GET",
           url:url,
           success:function(data){
           var city=data.current_observation.display_location.full;
           var weather=data.current_observation.weather;
           var temp_c= data.current_observation.temp_c;
           var temp_f=data.current_observation.temp_c;   
           var temp=temp_c; 
           var weathericon=data.current_observation.icon_url;  		   
           document.getElementById("location").innerHTML= city;
           document.getElementById("weatherinfo").innerHTML= weather;
           document.getElementById("temp").innerHTML=temp;  
           var image = document.getElementById('img');
           image.src= weathericon;  
           $("#degree").on("click",function(){
               if (degree.src.match("celsius")) {
        degree.src = "https://cdn1.iconfinder.com/data/icons/hawcons/32/700300-icon-59-degree-fahrenheit-128.png";
           temp=Math.round(temp_c*1.8+32);
         document.getElementById("temp").innerHTML=temp;  
       
    } else {
        degree.src = "https://cdn1.iconfinder.com/data/icons/hawcons/32/700302-icon-60-degree-celsius-128.png";
        temp=temp_c;
        document.getElementById("temp").innerHTML=temp;  

    }
             });  
           },
           error:function(e){
           console.log("no weather info");
           document.getElementbyId("location").innterHTML="Current unavailable to access to the weather information. Please try again later";  
           }
          
         });
   
    
    
  });
}
  
  
  
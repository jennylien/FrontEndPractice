function sym() { // it was originally sym(args) however it would only take in the first array. therefore changed it to sym()
 
  
   // convert argument to array, can also just write   var args = Array.prototype.slice.call(arguments);
  var arr=[]; 
  var result=[];
  for (var i=0; i< arguments.length; i++)
  {
    arr.push(arguments[i]);    

  }
  
  
  var SymDiff = function symdif(arg1, arg2)
  {
    var SD=[];
    arg1.forEach(function (element){ // loop in arg1, see if arg2 or SD can be found in arr1
      if(arg2.indexOf(element)<0 && SD.indexOf(element)<0) // make sure not only check if the element in arg2 is found in arg1, also check if the element is already in the result so we don't pass it twice
         // The indexOf() method returns the position of the first occurrence of a specified value in a string. This method returns -1 if the value to search for never occurs.
      {SD.push(element);}
      
    });
       arg2.forEach(function (element){ //can also use for loop or others, for example check the solution for Diff Two Array algorithm challenge.
      if(arg1.indexOf(element)<0 && SD.indexOf(element)<0)
          
      {SD.push(element);}
      
    });
    
    
    return SD;
  };
  
  
  
    result=arr.reduce(SymDiff);
 // Copy from notes: You may think that we still have some ways to go, as we only got the symmetric difference for two arrays, but we are actually almost done. Remember our friend reduce? We’ll take advantage of it. Just pass in the symDiff function and apply the reduce method to the args array, this will apply the symDiff function to every array and compare it to the previous value (an ever increasing array of symmetric difference values):
       
   

  return result; 
   
}
 
sym([1, 2, 3], [5, 2, 1, 4]);


//see challenge "Seek and Destroy to refresh memory 
function orbitalPeriod(arr) {
  var array=arr.slice();
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var Alt=[];
  var Name=[];
  var T=[];

  for(var i=0; i < arr.length; i++)
  {
    Alt[i]=arr[i].avgAlt;
    Name[i]=arr[i].name;
    T[i] = Math.round(2 * 3.1415926 * Math.pow((Math.pow(Alt[i]+earthRadius,3))/GM,0.5));
  }  
  
  
  var result=[];
  
   for (var j=0; j < arr.length; j++)
  {
    
    result[j]= {name: Name[j], orbitalPeriod: T[j]};
    
  }

  
  
  return result;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
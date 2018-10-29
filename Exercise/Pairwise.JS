function pairwise(arr, arg) {
 
  var index=[];
  var x=0;
  
  if (arr.length===0   )
  {
    return 0;
  }
  
  for (var i=0; i < arr.length; i++)
  {
      for (var j=i; j < arr.length; j++)
  {
    if (i!=j && arr[i]+arr[j]===arg &&index.indexOf(i)<0 &&index.indexOf(j)<0)   
      //index.indexOf(i)<0 &&index.indexOf(j)<0 These two are to make sure that i & j are not counted twice or more
    { 
     
     index.push(i, j);

      
    }
    
  }
    
    
  }
  
 

  var indexSum=index.reduce(function(a,b)
   {
    return a+b;
  }); 
  

  return indexSum;
}

pairwise([0, 0, 0, 0, 1, 1], 1) ;
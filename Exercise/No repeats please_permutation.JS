// Some hints found:
//The program needs to calculate how many of the permutations do not have consecutive repeated characters in a row.
// Step 1:  use Heap's algorithm to recursively get a list of all the permutations.
//Step 2: Once you have the list then just create a regular expression to catch the repeating characters.
// Note that You will want to have the permutations as an array of joined strings instead of separated characters.
function permAlone(str) {
var string=str.slice();  
var array=[];
array=string.split("");
var permutations = []; 
  function swap(a,indexA, indexB )
  {var temp=a[indexA];
    a[indexA]=a[indexB];
    a[indexB]=temp;
  }
  
  function generate(n,arr)
  {
    if (n===1)
      {
        permutations.push(arr.join(''));      
      }
 
    else 
    {
        for (var i=0; i < n; i++)
          {           
             generate(n-1, arr);
         
              if (n%2 ===0){
               swap(arr,i,n-1);  
               }
      
                else{
                  swap(arr,0,n-1);
               }        
       }  
    }     
       
  }
 
generate(array.length, array);  
  var hasRepeat=[];
  var  repeat= /(.)\1/;
  var deletetrue=0;
  for (var x=0; x<permutations.length; x++)
  {
   hasRepeat[x]=(repeat).test(permutations[x]);
     if (hasRepeat[x])
        {
          deletetrue++;
        }
  }
  
var FinalNumber= permutations.length-deletetrue;
  
  
return FinalNumber;
}

permAlone( "aab");

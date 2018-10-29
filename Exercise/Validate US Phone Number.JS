function telephoneCheck(str) {
  // Good luck!    
 
  // check if (, - and ) are placed at the right place
  
  if (str[0]=="-" )
  {
   return false;
  }
    
  
   for (var i=0; i < str.length; i++)
  {
    if (str[i]=="(" && str[i+4] !==")" )
     {
       return false;
     }
     if (str[i]==")" && str[i-4] !=="(" )
     {
       return false;
     }
  }
  
  
  var strUpdate= str.replace(/\s/g,"").replace(/[-()]/g, "");

  for (var x=0; x<strUpdate.length; x++)  // after remove space, - and (), return false if theres other characters
   {
     if (strUpdate[x]!=='0' && strUpdate[x]!=='1' &&strUpdate[x]!=='2' &&strUpdate[x]!=='3' &&strUpdate[x]!=='4' &&strUpdate[x]!=='5' &&strUpdate[x]!=='6' &&strUpdate[x]!=='7' &&strUpdate[x]!=='8' && strUpdate[x]!=='9')
       {
         return false;
       }
   }
      
  if (strUpdate.length!=10 && strUpdate.length!=11 ) // return false if the number is not 10 or 1 in length
    {
      return false;
      
    }
  
    if (strUpdate.length==11 && strUpdate[0]!=='1') // if the length is 11, return false if the contry code is not 1
    {
      return false;
      
    }

  else 
    {
      
      return true;
      
    }
  
  

}



telephoneCheck("555-555-5555");



/*

Anotehr solution


function telephoneCheck(str) {
  // Good luck!
  var re = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})$/;

  return re.test(str);
}


or 


function telephoneCheck(str) {

   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

   return regex.test(str);
}
Code Explanation:
^ denotes the beginning of the string (1\s?)? checks allows for a "1" or a "1 " at the beginning.
\d{n} checks for exactly n number of digits so (\(\d{3}\)|\d{3}) checks for three digits that are allowed to be between parenthesis.
[\s\-]? checks for spaces or dashes between the groups of digits.
$ denotes the end of the string. In this case the beginning and end of the string are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. "s 555 555 5555 a").
Lastly we use regex.test(str) to test if the string adheres to the regular expression and return true or false.



*/
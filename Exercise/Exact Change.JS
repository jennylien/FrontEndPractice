function checkCashRegister(price, cash, cid)
{
  // Here is your change, ma'am.
var totalcid = TotalCid(cid) * 100; // times 100 just to get rid of the decimals
// get total cash in the drawer
function TotalCid(cid)
  {
  var sum=0;
  for (var i=0; i < cid.length; i++)
 {
   sum += cid[i][1];
 }  
  return sum;
}

  function getCurrencyName(currency){
    switch (currency){
        case "PENNY":
        return 1;
        case "NICKEL":
        return 5;
         case "DIME":
        return 10;
        case "QUARTER":
        return 25;
        case "ONE":
        return 100;
        case "FIVE":
        return 500;
        case "TEN":
        return 1000;
        case "TWENTY":
        return 2000;
        case "ONE HUNDRED":
        return 10000;       
    }
  }    
 var cashGet=cash * 100;
 var priceSet=price * 100;
 var changeDue= (cash - price)* 100;  
 var changeleft=changeDue;
 var toReturn; 
 var current;
 var coinNumberInDrawer;
 var coinName;
 var coinTotal; 
    
  if (changeDue>totalcid) // not enough money in the drawer
    {
      return "Insufficient Funds";
    }
  
  else if (changeDue==totalcid) //the money in the drawer equals to change due
    {
      return "Closed";
    } 
 
  
  /*
 var cashGet=cash * 100;
 var priceSet=price * 100;
 var changeDue= (cash - price)* 100;  
 var changeleft=changeDue;
 var toReturn=0; 
  */
  else{ 

    var result=[];

    for (var x=cid.length-1; x>=0; x--)  // check from the largest to the smallest so we give larger bills back
    {     
    coinName=cid[x][0]; //coin name is the first item of the cid array
    current= getCurrencyName(coinName); // call function  
    coinTotal=cid[x][1]*100;   
    //cash in drawer for that currency divided by currency
    coinNumberInDrawer =(coinTotal/ current);
    toReturn=0; // return =0 needs to be inside of the for loop so it recounts everytime
       while(changeleft>=(current) && (coinNumberInDrawer)>0) 
        { coinTotal=coinTotal-current; // decrease money in the drawer for that bills
          (coinNumberInDrawer)--;      
          changeleft= changeleft - current; // decrease the value of change due 
          toReturn++; // increase the number of the bill given
        }
            
           if (toReturn > 0) 
           {
            result.push([coinName, toReturn * (current/ 100)]);
             
         
        }
     }
   
      if (changeleft>0.0005)   // if there's change left..means no exact change can be refund. 
             {
               
              return "Insufficient Funds"; 
             }
     else {return result;} //else return result
  }
} 
  
 

checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
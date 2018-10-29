  $(document).ready(function() {

var quo = "I told you Jenny is super Cool";
var user= "Turbo Lien";     
        
//change the code below for kitty quotes    
$("#kitty").on("click", function(){      
var catquotes = {
    1: ["If cats looked like frogs we\'d realize what nasty, cruel little bastards they are. Style. That\'s what people remember."," Terry Pratchett, Lords and Ladies"],
    2: ["'Meow' means 'woof' in cat.", "George Carlin"],
    3: ["Cats are intended to teach us that not everything in nature has a purpose.", "Garrison Keillor"],
    4: ["If animals could speak, the dog would be a blundering outspoken fellow; but the cat would have the rare grace of never saying a word too much.","Mark Twain"],
    5: ["What greater gift than the love of a cat.","Charles Dickens"],
    6: ["You cannot live with a paw in each world."," Erin Hunter, Into the Wild"],
    7: ["The smallest feline is a masterpiece.","Leonardo da Vinci"],
    8: ["I love cats because I enjoy my home; and little by little, they become its visible soul.","Jean Cocteau"],
    9: ["Me-EHH-UF-ow","P.C. Cast, Marked"],
    10: ["Cats don't need to be possessed; they're evil on their own.", "Peter Kreeft"],
    11: ["Cats have it all - admiration, an endless sleep, and company only when they want it.", "Rod McKuen"],
    12: ["The only thing a cat worries about is what's happening right now. As we tell the kittens, you can only wash one paw at a time.", "Lloyd Alexander, Time Cat"],
    13: ["God made the cat to give man the pleasure of stroking a tiger.", "Joseph Méry"],
    14: ["In my head, the sky is blue, the grass is green and cats are orange.", "Jim Davis, In Dog Years I'd be Dead: Garfield at 25"],
    15: ["Cats and monkeys - monkeys and cats - all human life is there!", "Henry James, The Madonna of the Future"],
    16: ["I hope people don't take kittens on a whim, like they would a toy, then not care for them.", "Shirley Rousseau Murphy, Cat on the Money"],
    17: ["Cats, like men, are flatterers.", "Walter Savage Landor, Imaginary Conversations"],  
    18: ["Cats tell me without effort all that there is to know.", "Charles Bukowski, On Cats"],
    19: ["I like cats as much as the next person, in the right quantity.", "Justin Cronin, The City of Mirrors"],
    20: ["We may have pets, but when it comes to unconditional love, they are the masters.", "Donald L. Hicks, Look into the stillness"]   
  }
       
 var randomQ = Math.floor(Math.random()*Object.keys(catquotes).length);
// Explaination of the object.key function...see example below
//var foo = { 'alpha' : 'puffin', 'beta' : 'beagle' };
//var keys = Object.keys(foo); // ['alpha', 'beta'] 
      
      
  //this function is not necessary, it's used to avoid getting same quote twice in a row
  var prevQ=0;
      while (randomQ === prevQ) {
    randomQ = Math.floor(Math.random()*Object.keys(catquotes).length); 
      }
  prevQ = randomQ;   
    
  //document.getElementById('quote').innerHTML = catquotes[randomQ][0];
 // document.getElementById('author').innerHTML = '<i>' + "-"+ catquotes[randomQ][1]  + '</i>';
   // Another way of writing the code   
      $('#quote').html(catquotes[randomQ][0]);
      $('#author').html('<i>'+ "-"+ catquotes[randomQ][1] + '</i>');
  quo=catquotes[randomQ][0];
  user=catquotes[randomQ][1];     
  
    });
    
    

    //practice with JSON
   // not sure why it doesn't work again
$("#nextQ").on("click",function(){        
      $.ajax({
            crossDomain : true,
            url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=data&callback",
            dataType: "jsonp",
            jsonp: "jsonp",
            jsonpCallback: "myJsonMethod",
        type:"POST",  
        success:function(data){
           quo=data.quoteText;
           user=data.quoteAuthor;
           document.getElementById('quote').innerHTML = data.quoteText;
           document.getElementById('author').innerHTML = '<i>' + "-"+ data.quoteAuthor  + '</i>';         
        },
        error: function(e) {
       console.log(e.message);
       document.getElementById('quote').innerHTML = "This link is currently unavailable. Try Kitty quotes";
        }
      
      });
     });

    // the following quote put the quote on tweeter 
    $("#tweet").on("click",function(){  
   alert("This link is bringing you to an external page.");
    var twitterLink = 'https://twitter.com/intent/tweet?text=' + quo + ' - ' + user;
    window.open(twitterLink, 'twitter');
    return true;
    });

}); 

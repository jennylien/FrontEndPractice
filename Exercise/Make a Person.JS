//review challenge "Make Object Properties Private "


var Person = function(firstAndLast) {
  var nameArray= firstAndLast.split(" ");
  var firstName=nameArray[0];
  var lastName=nameArray[1];  
  this.getFirstName= function(){ 
    return firstName;
  };
  
  
    this.getLastName= function(){
    return lastName;
  };
  
    this.getFullName= function(){
      
       firstAndLast=firstName+ " " +lastName;
    return firstAndLast;
  };
  
  
    this.setFirstName= function(first){
      firstName=first;
  };
  
      this.setLastName= function(last){
      lastName=last;
  };
  
      this.setFullName= function(firstandLast){
   firstAndLast=firstandLast;
        
  var namearray= firstandLast.split(" ");
  firstName=namearray[0];
  lastName=namearray[1]; 
  };
  
  
};

var bob = new Person('Bob Ross');

bob.getFullName();
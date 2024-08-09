class Person {    
    constructor(FirstName, LastName, Profanity) {
      this.FirstName = FirstName;
      this.LastName = LastName;
      this.Profanity = Profanity;
      console.log("New Person is Created --- FIRSTNAME : ",this.FirstName,"  LASTNAME : ",this.LastName);
    }
  }

  module.exports =  Person ; 
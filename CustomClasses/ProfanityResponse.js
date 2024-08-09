

class  ProfanityResponse {
    constructor() {
        this.Response = "";
      }
      AddProfanity (Person)
      {
          this.Response  += Person.Profanity +" "+ Person.FirstName + " " + Person.LastName ; 
          console.log("Response : " , this.Response);
      }
}

  module.exports =  ProfanityResponse ; 
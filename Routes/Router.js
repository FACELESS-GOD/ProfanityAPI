class Person {    
    constructor(FirstName, LastName) {
      this.FirstName = FirstName;
      this.LastName = LastName;
    }
  }

class  ProfanityResponse {
    constructor() {
        this.Response = "";
      }
      AddProfanity (Person)
      {
          this.Response  += "Fuck you ,   " + Person.FirstName + " " + Person.LastName ; 
      }
}

const express = require('express');

const Router = express.Router();


Router.get(
    '/',
    (req,res)=>{
        const NewPerson = new Person(req.body.FirstName, req.body.LastName); 
        const Response = new ProfanityResponse();
        Response.AddProfanity(NewPerson);
        res.json(Response);
    }
);


module.exports = Router ; 
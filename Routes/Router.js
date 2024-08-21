const Person = require('.././CustomClasses/Person.js');

const ProfanityResponse = require('.././CustomClasses/ProfanityResponse.js');

const RouteSpecificMiddleWare = require('../Middleware/RouteSpecificMiddleWare/GetMiddleWare.js');

const express = require('express');

const Router = express.Router();


Router.get(
    '/',
    (req,res)=>{
        const NewPerson = new Person(req.body.FirstName, req.body.LastName, req.body.Profanity); 
        const Response = new ProfanityResponse();
        Response.AddProfanity(NewPerson);
        res.json(Response);
    }
);

Router.post(
  '/',
  RouteSpecificMiddleWare,
  (req,res)=>{
    const NewPerson = new Person(req.body.FirstName, req.body.LastName, req.body.Profanity); 
        const Response = new ProfanityResponse();
        Response.AddProfanity(NewPerson);
        res.status(201).json(Response);
  }
);


module.exports = Router ; 
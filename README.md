
**Profanity API**

  

This is an api which return a string with **Fuck you** add in the front.

  

***Why did created this ??***

  

-- Nice question, the answer is I am bored.

As of Now I have added only one **get** path : 

***/name/***

Complete URL :   ***http://localhost:3000/name***

The Body of the Request must be in the following format : 


**{
"FirstName":"John",
"LastName":"Smith",
"Profanity":"Fuck you"
}**

The Response that you will get is as follows:


**{
"Response":  "Fuck you Jocn Smith"
}**



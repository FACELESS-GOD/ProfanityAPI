const Zod = require("zod");

const ValidateSchema = Zod.object({
    FirstName:Zod.string(),
    LastName:Zod.string(),
    Profanity:Zod.string()
});

function AppLevelMiddleware(req, res, next)
{
    const validationResponse = ValidateSchema.safeParse(req.body);
    if(validationResponse.success != true)
    {
        res.status(404);
        res.json({"Response":" Invalid Request"});
    }
    if(req.body.FirstName.length > 10)
    {
        res.status(404);
        res.json({"Response":" Invalid Request"});
    }
    else if(req.body.Profanity.length > 10)
    {
        res.status(404);
        res.json({"Response":" Invalid Request"});
    }
    else
    {
        next();
    }
    
    
}




module.exports = AppLevelMiddleware ;
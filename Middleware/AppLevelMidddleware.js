
function AppLevelMiddleware(req, res, next)
{
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
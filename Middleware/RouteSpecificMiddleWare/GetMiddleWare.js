
function GetMiddleWare(req, res, next)
{
    if(req.body.LastName.length > 10)
    {
            res.status(404);
            res.json({"Response":" Invalid Request"});
    }
    else
    {
        next();
    }
}




module.exports = GetMiddleWare ;
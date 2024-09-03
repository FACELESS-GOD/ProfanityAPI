class PerformanceMiddleware
{  
    static StartTime = new Date().getTime()
    constructor()
    {
        this.StartTime = new Date().getTime() ;
    }
    async Start(req, res, next)
    {
        const DateTime = new Date();
        const StartTime = DateTime.getTime();
        PerformanceMiddleware.StartTime = StartTime ;
        next();
    
    }

    async Stop(req, res, next)
    {
        const DateTime = new Date();
        const EndTime = DateTime.getTime();
        const totalTime  = EndTime - PerformanceMiddleware.StartTime ; 
        console.log('Total Time of Execution : ', totalTime);
        next();

    }
}

module.exports = PerformanceMiddleware ;
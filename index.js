const Express = require('express');
const Router = require('./Routes/Router.js');
const AppLevelMiddleware = require('./Middleware/AppLevelMidddleware.js');
const PerformanceMiddleware = require('./Middleware/PerformanceMiddleWare/PerformanceMiddleWare.js');
const port = 3000;

const App = Express();

const PerformanceStat = new PerformanceMiddleware();



App.use(Express.json()); // Body - Parser

App.use( PerformanceStat.Start);

App.use(AppLevelMiddleware);

App.use(
    '/name',
    Router,
    PerformanceStat.Stop
);

App.listen(
    port,
    () => {
        console.log(`Server listening on port ${port}`);  
      }
);


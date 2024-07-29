const Express = require('express');
const Router = require('./Routes/Router.js');
const port = 3000;

const App = Express();

App.use(Express.json()); // Body - Parser

App.use(
    '/name',
    Router
);

App.listen(
    port,
    () => {
        console.log(`Server listening on port ${port}`);  
      }
);


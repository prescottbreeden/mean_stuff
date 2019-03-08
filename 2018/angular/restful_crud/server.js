/* ..................................................................
 * .                                                                .
 * .      Modular Express API Server Using MongoDB and Mongoose     .
 * .                                                                .
 * .                        Prescott Breeden                        .
 * .                                                                .
 * ..................................................................
*/

// - - - - = = = = APP = = = = - - - - //
const express = require('express');
const app = express();


// - - - - = = = = MIDDLEWARE = = = = - - - - //
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));


// - - - - = = = = ROUTES = = = = - - - - //
const routes = require('./server/routes')
routes(app);


// - - - - = = = = PORT = = = = - - - - //
const PORT = 1337;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

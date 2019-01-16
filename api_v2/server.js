const express = require('express');
const bp = require('body-parser');
const app = express();
const routes = require('./backend/routes');

routes(app);

const PORT = 1337;
app.listen(PORT, ()=> console.log('Listening on puerto ' + PORT))

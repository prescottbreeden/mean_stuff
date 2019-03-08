// load dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


// define app
const app = express();


// define middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());


// db


// schemas


// routes
const routes = require('./server/routes');
routes(app);


// define server port
const PORT = 8000;
app.listen(PORT, function() {
  console.log("Power Overwhelming...");
})

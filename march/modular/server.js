// - - - = = = = DEPENDENCIES = = = = - - - //
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var port = 1337;

// - - - = = = = SETTINGS = = = = - - - //
app.use(express.static(path.join(__dirname, "./public")));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.listen(port, () => console.log("Power Underwhelming..."));


require('./backend/routes')(app)
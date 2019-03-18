const express = require('express');
const bp = require('body-parser');
const flash = require('express-flash');
const session = require('express-session');
const app = express();
const port = 1337;

app.use(flash());
app.use(session({ 
  secret: "shh, it's a secret... ",
  resave: false,
  saveUninitialized: false
}));
app.use(express.static('./public'));
app.set('views', './public'); 
app.set('view engine', 'ejs');
app.use(bp.urlencoded({ extended: false }));
app.listen(port, () => console.log(`Express listening on port ${port}`));
require('./backend/routes')(app);
// load dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');


// define app
const app = express();


// define middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


// db
mongoose.connect( 
  'mongodb://localhost/basic_mongoose', 
  { useNewUrlParser: true }
);


// schemas
const UserSchema = new mongoose.Schema({
  name: String,
  email: String
})
mongoose.model('User', UserSchema);
const User = mongoose.model('User');


// routes
app.get('/', function(req, res) {
  const users = [
    {name: "Chuck Norris", email: "chuck@gmail.com"},
    {name: "Bugs Bunny", email: "bugs@gmail.com"}
  ];
  res.render('index', {users: users} );
})

app.post('/process', function(req, res) {
  const DATA = req.body;
  // const user = new User({name: req.body.name, email: req.body.email});
  User.create(DATA, function(err, data) {
    if (err) {
      console.log('whoops', err);
    }
    else {
      console.log('yay!', data);
    }
  });
  res.redirect('/')
})


// define server port
const PORT = 8000;
app.listen(PORT, function() {
  console.log("Power Overwhelming...");
})

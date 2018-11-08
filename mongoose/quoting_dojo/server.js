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
app.use(bodyParser.json());


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
  User.find({})
    .then (data => res.render('index', {users: data} ))
    .catch (err => console.log(err))
})

app.post('/users', function(req, res) {
  // const user = new User({name: req.body.name, email: req.body.email});
  const DATA = req.body;
  User.create(DATA) 
    .then(data => res.redirect('/'))
    .catch(err => console.log(err))
})

app.get('/users', function(req, res) {
  User.find({})
    .then (data => res.json(data))
    .catch (err => console.log(err))
})

app.get('/users/:id', function(req, res) {
  const ID = req.params.id;
  User.find({_id: ID})
    .then (data => res.json(data))
    .catch (err => console.log(err))
})

app.delete('/users/:id', function(req, res) {
  const ID = req.params.id;
  User.find({_id: ID})
    .then (data => data.remove())
    .then (res.redirec('/'))
    .catch (err => console.log(err))
})


// define server port
const PORT = 8000;
app.listen(PORT, function() {
  console.log("Power Overwhelming...");
})

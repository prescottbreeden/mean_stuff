// - - - - = = = = DEPENDENCIES = = = = - - - - //
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');


// - - - - = = = = APP = = = = - - - - //
const app = express();


// - - - - = = = = MIDDLEWARE = = = = - - - - //
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());


// - - - - = = = = DB = = = = - - - - //
mongoose.connect( 
  'mongodb://localhost/basic_mongoose', 
  { useNewUrlParser: true }
);
const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});
mongoose.model('User', UserSchema);
const User = mongoose.model('User');


// - - - - = = = = API = = = = - - - - //
const api = {
  allUsers: function(req, res) {
    User.find({})
      .then(data => res.render ('index', {users: data} ))
      .catch(err => res.json (err))
  },
  getOne: function(req, res) {
    const ID = req.params.id;
    User.find({_id: ID})
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },
  newUser: function(req, res) {
    const DATA = req.body;
    User.find({email: DATA.email})
      .then(user => {
        if (user.length > 0) { throw `${user[0].email} already exists` }
        else { return User.find({name: DATA.name}) }
      })
      .then (user => {
        if (user.length > 0) { throw "User already exists" }
        else { return User.create(DATA) }
      })
      .then(() => res.redirect('/'))
      .catch(err => res.json(err))
  },
  deleteUser: function(req, res) {
    const ID = req.params.id;
    User.deleteOne({_id: ID})
      .then(() => res.redirect('/'))
      .catch(err => res.json(err))
  },
}


// - - - - = = = = Controllers = = = = - - - - //
const controllers = {
  home: function(req, res) {
    res.redirect('/users');
  },
  editUser: function(req, res) {
    const ID = req.params.id;
    user.find({_id: ID})
      .then(user => res.render('edit', {user: user}))
      .catch(err => res.json (err))
  },
  updateUser: function(req, res) {
    
  },
  teapot: function(req, res) {
    res.json({error420: "You're a towel..."})
  }
}

// - - - - = = = = ROUTES = = = = - - - - //
app
  // user interface
  .get('/', controllers.home)
  .get('/users/edit/:id', controllers.editUser)
  .post('/users/edit', controllers.updateUser)

  // pseudo api
  .get('/users', api.allUsers)
  .get('/users/:id', api.getOne)
  .post('/users', api.newUser)
  .get('/users/delete/:id', api.deleteUser)

  // catch all
  .get('*', controllers.teapot)


// - - - - = = = = SERVER PORT = = = = - - - - //
const PORT = 8000;
app.listen(PORT, function() {
  console.log("Power Overwhelming...");
})

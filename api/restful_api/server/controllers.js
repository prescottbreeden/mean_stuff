const mongoose = require('mongoose');
const User = require('./models');

mongoose.connect( 
  'mongodb://localhost/basic_mongoose', 
  { useNewUrlParser: true }
);

x = function () {
  console.log('hi');
}

module.exports = {

  home: function (req, res) {
    User.find({})
      .then(() => console.log('hi'))
      .catch(() => console.log('weird'))
  },

  allUsers: function (req, res) {
    User.find({})
      .then (data => res.render('index', {users: data} ))
      .catch (err => console.log(err))
  },

  oneUser: function (req, res) {
    const ID = req.params.id;
    User.find({_id: ID})
      .then (data => res.json(data))
      .catch (err => res.json(err))
  },

  newUser: function (req, res) {
    // const DATA = req.body;
    //
    const name = req.body.name;
    const email = req.body.email;

    User.create({name: name, email: email}) 
      .then(response_from_promise => res.redirect('/'))
      .catch(err => res.json(err))
  },

  updateUser: function (req, res) {
    const DATA = req.body;
    const ID = req.params.id;
    // User.findByIdAndUpdate(ID, DATA)
    //   .then(() => res.redirect('/'))
    //   .catch(err => res.json(err))
    User.find({ _id: ID })
      .then(user => {
        user.name = DATA.name;
        user.email = DATA.email;
        return user.save();
      })
      .then(() => res.redirect('/'))
      .catch(err => console.log('u fuked up'))
  },

  deleteUser: function (req, res) {
    const ID = req.params.id;

    User.find({_id: ID})
      .then (data => data.remove())
      .then (res.redirect('/'))
      .catch (err => console.log(err))
  },

  error: function (req, res) {
    res.json({error: "I'm a teapot..."})
  }
}




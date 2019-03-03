const Task = require('./models');


module.exports = {

  getAll: function(req, res) {
    Task.find({})
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },
  
  getOne: function(req, res) {
    const ID = req.params.id;
    Task.find({ _id: ID })
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },
  
  createNew: function(req, res) {
    const DATA = req.body;
    console.log(DATA);

    Task.create(DATA)
      .then((new_object) => res.json(new_object))
      .catch(err => res.json(err))
  },
  
  updateOne: function(req, res) {
    const DATA = req.body;
    const ID = req.params.id;

    Task.findByIdAndUpdate(ID, DATA)
      .then(() => res.json("success"))
      .catch(err => res.json(err))
  },
  
  deleteOne: function(req, res) {
    const ID = req.params.id;
    Task.find({ _id: ID }).remove()
      .then(() => res.json("success"))
      .catch(err => res.json(err))
  },
  
  error: function(req, res) {
    res.json("Error 418: I'm a Teapot!")
  }
}


// =============================================== //
//       EXAMPLE METHODS RETURNING PROMISES        //
// =============================================== //
/*
 
*** "throw" is a method in javascript to create custom error messages ***

*/
// example with chaining promises for validations
function validateAndCreate(req, res) {
  const DATA = req.body;

  Task.find({ email: DATA.email })
    .then(data_from_db => {
      if (data_from_db.length > 0) { throw "Task email already exists" }
      else { return User.find({ name: DATA.name }) }
    })
    .then(data_from_db => {
      if (data_from_db.length > 0) { throw "User name already exists" }
      else { return User.create(DATA) }
    })
    .then((user) => res.json(user))
    .catch(err => res.json(err))
}

// example with long form to access specific properties during update
function updateOneAccessingProperties(req, res) {
  const DATA = req.body;
  const ID = req.params.id;

  User.findOne({ _id: ID })
    .then(user => {
      user.name = DATA.name;
      user.email = DATA.email;
      return user.save();
    })
    .then(() => res.json("success"))
    .catch(err => res.json(err))
}

// example where update returns the new object
function updateOneAndReturn(req, res) {
  const DATA = req.body;
  const ID = req.params.id;

  User.findByIdAndUpdate(ID, DATA)
    .then(() => {
      return User.findOne({ _id: ID })
    })
    .then((user => res.json(user)))
    .catch(err => res.json(err))
}

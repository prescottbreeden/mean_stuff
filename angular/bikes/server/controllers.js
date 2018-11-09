const Bike = require('./models');

module.exports = {

  home: function(req, res) {
    Bike.find({})
      .then(allBikes => res.render('index', {bikes: allBikes}))
      .catch(err => res.json(err))
  },

  getAll: function(req, res) {
    Bike.find({})
      .then(usersData => res.json(usersData))
      .catch(err => res.json(err))
  },
  
  getOne: function(req, res) {
    const ID = req.params.id;
    Bike.find({ _id: ID })
      .then(bike => res.json(bike))
      .catch(err => res.json(err))
  },
  
  newBike: function(req, res) {
    const DATA = req.body;

    Bike.create(DATA)
      .then((bike) => res.json(bike))
      .catch(err => res.json(err))
  },
  
  updateBike: function(req, res) {
    const DATA = req.body;
    const ID = req.params.id;

    Bike.findByIdAndUpdate(ID, DATA)
      .then(() => res.json("success"))
      .catch(err => res.json(err))
  },
  
  deleteBike: function(req, res) {
    const ID = req.params.id;
    Bike.find({ _id: ID }).remove()
      .then(() => res.json({status: "success"}))
      .catch(err => res.json(err))
  },
  
  error: function(req, res) {
    res.json("Error 420: you're a towel!")
  }
}
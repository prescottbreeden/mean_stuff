const SuperHero = require('./models');

module.exports = {

  getAllSuperHeros: (req, res) => {
    SuperHero.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getOneSuperHeros: (req, res) => {
    const ID = req.params.id;
    SuperHero.findOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
  createSuperHero: (req, res) => {
    const DATA = req.body;
    SuperHero.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
  updateSuperHero: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    SuperHero.findOneAndUpdate({_id:ID}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
  deleteSuperHero: (req, res) => {
    const ID = req.params.id;
    SuperHero.deleteOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
}

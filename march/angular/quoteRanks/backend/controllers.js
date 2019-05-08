const Model = require('./models');

module.exports = {

  getAllModels: (req, res) => {
    Model.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getOneModels: (req, res) => {
    const ID = req.params.id;
    Model.findOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
  createModel: (req, res) => {
    const DATA = req.body;
    Model.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
  updateModel: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Model.findOneAndUpdate({_id:UD}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
  deleteModel: (req, res) => {
    const ID = req.params.id;
    Model.deleteOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
  
}

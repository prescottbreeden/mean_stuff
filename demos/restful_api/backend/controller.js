const Task = require('./models');

module.exports = {

  getAll: (req, res) => {
    Task.find({})
      .then(results => {
        res.json(results);        
      })
      .catch(err => {
        res.json(err);        
      })
  },
  getOne: (req, res) => {
    const id = req.params.id;
    Task.findById(id)
      .then(results => {
        res.json(results);        
      })
      .catch(err => {
        res.json(err);        
      })
  },
  create: (req, res) => {
    const data = req.body;
    Task.create(data)
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        res.json(err);
      })
  },
  update: (req, res) => {
    const id = req.params.id;
    const data = req.body;
    Task.findByIdAndUpdate(id, data)
      .then(results => {
        res.json(results);        
      })
      .catch(err => {
        res.json(err);        
      })

  },
  delete: (req, res) => {
    const id = req.params.id;
    Task.findByIdAndDelete(id)
      .then(results => {
        res.json(results);        
      })
      .catch(err => {
        res.json(err);        
      })
  },
}
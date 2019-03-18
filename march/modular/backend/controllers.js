const { Quote, Author } = require('./models');

module.exports = {

  index: (req, res) => res.render('index'),

  getAllQuotes: (req, res) => {
    Quote.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createQuote: (req, res) => { 
    const DATA = req.body;

    Quote.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateQuote: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;

    Quote.findOneAndUpdate({_id: ID}, DATA, { runValidators: true })
      .then(data => res.json(data))
      .catch(err => res.json(err));

  }
}




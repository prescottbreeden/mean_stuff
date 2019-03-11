const { Message, Comment } = require('./models');

module.exports = {

  home: (req, res) => {
    res.sendFile('./index.html');
  },

  all: (req, res, next) => {
    Message.find()
      .then(results => res.json('index', { data: results }))
      .catch(err => next(err));
  },

  newMessage: (req, res, next) => {
    const data = req.body;
    Message.create(data)
      .then(() => res.redirect('/'))
      .catch(err => {
        generateErrors(req, err, 'newMessage');
        res.redirect('/');
      })
      .catch(err => next(err));
  },

  newComment: (req, res) => {
    const data = req.body;
    Message.updateOne({ _id: data._id }, {
      $push: {
        comments: {
          postedBy: data.postedBy, 
          content: data.content
        }
      }, 
    }, {runValidators: true})
      .then(result => res.redirect('/'))
      .catch(err => {
        generateErrors(req, err, 'newComment');
        res.redirect('/');
      });
  },

  error: (req, res) => {
    res.json('im a little teapot');
  }
}

function generateErrors(req, err, type) {
  // implement error logic
}

const { Message, Comment } = require('./models');

module.exports = {

  home: (req, res, next) => {
    Message.find()
      .then(results => res.render('index', { data: results }))
      .catch(err => next(err));
  },

  newMessage: (req, res, next) => {
    const data = req.body;
    Message.create(data)
      .then(() => res.redirect('/'))
      .catch(err => {
        generateErrors(req, err, 'newMessage');
        res.redirect('/');
      });
  },

  newComment: (req, res) => {
    const data = req.body;
    Comment.create({ postedBy: data.postedBy, content: data.content })
      .then(newComment => {
        return Message.findOneAndUpdate({_id: data._id}, 
          {$push: {comments: newComment}}, 
          {runValidators: true})
      })
      .then(() => res.redirect('/'))
      .catch(err => {
        generateErrors(req, err, 'newComment');
        res.redirect('/');
      });
  },

  error: (req, res) => {
    res.json('im a little teapot... and you broke me');
  }
}

function generateErrors(req, err, type) {
  let errors = Object.keys(err.errors);
    for (let key of errors) {
      req.flash(type, err.errors[key].message)
    } 
}

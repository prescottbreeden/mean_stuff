const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/wall', { useNewUrlParser: true })
  .then(() => console.log('Connected to the database'))
  .catch(() => console.log('Unable to connect to database'))

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true }
});

module.exports = mongoose.model('Post', postSchema);


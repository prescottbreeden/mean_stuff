const mongoose = require('mongoose');
const DB = 'msg_board4';

mongoose.connect(
  'mongodb://localhost:27017/' + DB, 
  { useNewUrlParser: true }
)
.then(() => console.log('Connected to Mongo database ' + DB))
.catch(err => console.log(err.name));

const CommentSchema = new mongoose.Schema({
  postedBy: { type: String, required: [ true, 'Name is required.' ] },
  content: { type: String, required: [ true, 'Message is required.' ] }
}, { timestamps: true });

const MessageSchema = new mongoose.Schema({
  postedBy: { type: String, required: [ true, 'Name is required.' ] },
  content: { type: String, required: [ true, 'Comment is required.' ] },
  comments: [CommentSchema]
}, { timestamps: true });

module.exports = {
  Message: mongoose.model('Message', MessageSchema),
  Comment: mongoose.model('Comment', CommentSchema)
};
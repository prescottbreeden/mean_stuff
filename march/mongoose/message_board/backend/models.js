const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost:27017/msg_board3', 
  { useNewUrlParser: true }
);

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
const mongoose = require('mongoose');
const mongo_connection = 'mongodb://localhost:27017/quoting_dojo';
mongoose.connect(mongo_connection, { useNewUrlParser: true });

const AuthorSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: [true, 'Name is required']
  },
  dob: Date
}, { timestamps: true});

const QuoteSchema = new mongoose.Schema({
  author: Author,
  quote: { type: String, minlength: 10 }
}, { timestamps: true });

const Quote = mongoose.model('Quote', QuoteSchema);
const Author = mongoose.model('Author', AuthorSchema);

module.exports = { Quote, Author };

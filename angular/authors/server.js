const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static( path.join(__dirname, './public/dist/public') ));

// - - - - = = = = MONGOOSE ORM = = = = - - - - //
mongoose.connect('mongodb://localhost:27017/authors', (err) => {
  if (err) { console.log(err) }
  else { console.log('connected to DB') }
});

const QuoteSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, 'Quote cannot be empty'],
    minlength: [3, 'A quote must contain at least three characters']
  }
})

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: [true, 'Authors must have a name'], 
    minlength: [3, 'Author names must contain at least three characters']
  },
  quotes: [QuoteSchema]
}, {timestamps: true})

const Author = mongoose.model('Author', AuthorSchema);

// - - - - = = = = API ROUTES = = = = - - - - //
app.get('/api/authors', (req, res) => {
  res.json("all authors")
})

app.get('/api/authors/:id', (req, res) => {
  res.json("one authors")
})

app.post('/api/authors', (req, res) => {
  res.json("new author")
})

app.put('/api/authors/:id', (req, res) => {
  res.json("update author")
})

app.delete('/api/authors/:id', (req, res) => {
  res.json("delete author")
})

const PORT = 8080;
app.listen(PORT, () => { 
  console.log('Listening on port: ' + PORT);
})


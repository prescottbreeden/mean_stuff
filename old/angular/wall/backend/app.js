const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Posts = require('./models/post');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.setHeader(
    "Access-Control-Allow-Methods", 
    "GET, POST, PATCH, DELETE, PUT, OPTIONS"
  );
  next();
});

app.get('/api/posts', (req, res, next) => {
  Posts.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(418).json(err))
});

app.post('/api/posts', (req, res) => {
  const DATA = req.body;
  Posts.create(DATA)
  .then(newPost => res.status(201).json(newPost) )
  .catch(err => res.status(418).json(err))
});

app.delete('/api/posts/:id', (req, res) => {
  const ID = req.params.id;
  Posts.deleteOne({ _id: ID })
    .then((result) => { console.log(result); })
    .catch(err => res.status(418).json(err))
});


module.exports = app;

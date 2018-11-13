const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Post = require('./models/post');

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
  Post.find()
    .then(data => res.status(200).json({
      message: 'posts fetched successfully',
      posts: data
    }))
    .catch(err => res.status(418).json({
      message: 'I can\'t make coffee... I\'m a teapot!',
      posts: err
    }))
});

app.post('/api/posts', (req, res, next) => {
  const DATA = req.body;
  Post.create(DATA)
  .then(newPost => {
    res.status(201).json({
      message: 'Post added successfully',
      posts: newPost
    });
  })
  .catch(err => res.status(418).json({
    message: 'I can\'t make coffee... I\'m a teapot!',
    posts: err
  }))
})


module.exports = app;

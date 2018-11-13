const express = require('express');
const bodyParser = require('body-parser');
const app = express();

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
  const posts = [
    { id: 'fad134145i',
      title: 'First server-side post',
      content: 'this is coming from the server...' 
    },
    { id: 'z2gh34195i',
      title: 'Second server-side post',
      content: 'this is coming from the server...' 
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

app.post('/api/posts', (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added successfully',
    posts: post
  });
});



module.exports = app;

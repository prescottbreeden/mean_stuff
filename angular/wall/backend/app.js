const express = require('express');
const app = express();

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
})

app.use('/api/posts', (req, res, next) => {
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


module.exports = app;

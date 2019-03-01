const express = require('express');
// const mongoose = require('mongoose');
const bp = require('body-parser');
const routes = require('./backend/routes');

const app = express();
app.use(bp.json());
// app.use(bp.urlencoded({ urlencoded: true }));

routes(app);

app.listen(8000, ()=> console.log('express listening on port 8000'));

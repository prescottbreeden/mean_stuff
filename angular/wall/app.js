const express = require('express');
const app = express();

const bp = require('body-parser');
app.use(bp.json());

const routes = require('./server/routes');
routes(app);

const PORT = 1337;
app.listen(PORT, function() {
  console.log('listening on port: ' + PORT);
})

const express = require('express');
const bp = require('body-parser');
const port = 9999;
const app = express();

app.use(express.static(__dirname + '/public/dist/public'));
app.use(bp.json());
app.listen(port, () => console.log(`Listening on port ${port}`));
require('./backend/routes')(app);

const express = require('express');
const bp = require('body-parser');
const app = express();

app.use(bp.json());
app.listen(8000, () => console.log('Listening to porto numbero eight-thousando'));

require('./server/routes')(app);

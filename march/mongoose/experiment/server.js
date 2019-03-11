const express = require('express');
const bp = require('body-parser');
const app = express();
const port = 1337;

app.use(express.static('./public'));
app.set('views', './public'); 
app.use(bp.urlencoded({ extended: false }));
app.listen(port, () => console.log(`Express listening on port ${port}`));
require('./backend/routes')(app);

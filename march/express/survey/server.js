const express = require('express');
const bp = require('body-parser');

const app = express();

app.use(bp.urlencoded({extended: true}));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index'); 
})

app.post('/process', (req, res) => {
  res.render('results', { data: req.body });
})

const port = 8080;
app.listen(port, () => console.log('listening on port ' + port));
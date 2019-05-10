const express = require('express');
const app = express();
const port = 1337;

// settings
app.listen(port, () => console.log(`listening on port ${port}`))
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// routes
app.get('/', (req, res) => {
  var users = [
    {name: "Bugs Bunny", email: "bugs@gmail.com"},
    {name: "Elmer Fud", email: "elmer@gmail.com"},
    {name: "Tucan Sam", email: "followyournose@gmail.com"},
    {name: "Foghorn Leghorn", email: "isayisay@gmail.com"},
  ]
  res.render('users', {users: users});
})



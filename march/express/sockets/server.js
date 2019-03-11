const express = require('express');

const app = express();
const server = app.listen(1337, () => console.log('Listening on port 1337'));
const io = require('socket.io')(server);
app.use(express.static(__dirname + "/public"));

var counter = 0;

io.on('connection', (socket) => {

  socket.emit('greeting', 
    { msg: 'Greetings, from server Node, brought to you by Sockets!' });

  socket.on('thankyou', (data) => {
    console.log(data.msg); 
  });

});

app.get('/', (req, res) => {
  res.render("index");
})

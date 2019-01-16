const express = require('express');
const app = express();

app.use(express.static(__dirname + "/public"));

const server = app.listen(1337, () => {
  console.log('Server listening on elite port number');
});
const io = require('socket.io')(server);
const state = {
  msg: 'Greetings, from server Node, you will be assimilated.',
  silly: 'How many roads must a socket walk down... before you can call it an emit?'
}

app.use('/', (req, res) => {
  res.render('index');
});

io.on('connection', (socket) => {

  socket.emit('greeting', state.msg);

  socket.on('thankyou', (data) => {
    console.log(data.msg);
  });

  socket.on('silly', (data) => {
    socket.broadcast.emit('silly')
  })

});

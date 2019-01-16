const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(8080, () => {
 console.log('listening to the worst app ever created on port 8080... sad panda') 
});
const io = require('socket.io')(server);
var counter = 0;
    

var obj = { 
  msg: 'Greetings, from server Node, brought to you by Sockets! -Server',
  polite: 'Wow, your outfit looks terrific today!',
  create: function() {
    return "omg I'm a string!!";
  }
}
io.on('connection', function (socket) { //2
  
  socket.emit('greeting', obj); //3
  socket.on('thankyou', function (data) { //7
    console.log(data.msg); //8 (note: this log will be on your server's terminal)
  });
});

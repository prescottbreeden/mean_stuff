const http = require('http');
const fs = require('fs');
const options = {}
const server = http.createServer(options, otherRequest).listen(1337);
console.log('running on localhost port 1337');

function handleRequest(req, res) {
  res.writeHead(200);
  res.end("Hello world\n");
}

const header = {
  'Content-Type': 'text/html',
  'Handle': 'Rubber baby buggy bumpers',
  'Warning': 'Objects in overhead bins can shift during flight',
  'Server': 'Chuck Norris',
}

function otherRequest(req, res) {

  if(req.url === '/') {
    fs.readFile('index.html', 'utf8', function(errors, contents) {
      res.writeHead(200, header );
      res.write(contents);
      res.end();
    });
  } else {
    res.writeHead(404);
    res.end('I\'m a little tea-pot');
  }
}

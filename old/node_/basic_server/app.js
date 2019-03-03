const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
  console.log('client request URL: ', request.url);
  if (request.url === '/') {
    fs.readFile('index.html', 'utf-8', function (err, contents) {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents)
      response.end();
    })
  } else {
    response.writeHead(404);
    response.end('File not found!!!');
  }
});


server.listen(6789);
console.log("Power overwhelming...");

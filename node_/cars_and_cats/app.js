const http = require('http');
const fs = require('fs');
const server = http.createServer(function(request, response) {
    console.log('client request URL: ', request.url);

    if(request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/cats') {
        fs.readFile('./views/cats.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/cars/new') {
        fs.readFile('./views/newcar.html', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents) {
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === "/images/boss429.jpg") {
        fs.readFile("./images/boss429.jpg", function(errors, contents) {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === "/images/boss429.jpg") {
        fs.readFile("./images/boss429.jpg", function(errors, contents) {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === "/images/fordGT.jpg") {
        fs.readFile("./images/fordGT.jpg", function(errors, contents) {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === "/images/shelbygt500.jpg") {
        fs.readFile("./images/shelbygt500.jpg", function(errors, contents) {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === "/images/ferrari-racing-pirelli.jpeg") {
        fs.readFile("./images/ferrari-racing-pirelli.jpeg" , function(errors, contents) {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === "/images/reallystupidcat.jpg") {
        fs.readFile("./images/reallystupidcat.jpg", function(errors, contents) {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === "/images/grumpycat.jpg") {
        fs.readFile("./images/grumpycat.jpg", function(errors, contents) {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === "/images/stupidcat1.jpg") {
        fs.readFile("./images/stupidcat1.jpg", function(errors, contents) {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === "/images/stupidcat2.jpg") {
        fs.readFile("./images/stupidcat2.jpg", function(errors, contents) {
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else {
        response.writeHead(418);
        response.end("I'm a teapot");
    }
});

server.listen(7077);

console.log("Power Overwhelming....");

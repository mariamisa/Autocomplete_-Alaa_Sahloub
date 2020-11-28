const http = require('http');

const port = 3000;
const path = require('path');
const fs = require('fs');

const router = (request, response) => {
  const endpoint = request.url;
  if (endpoint === '/') {
    const filepath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filepath, (error, file) => {
      if (error) {
        response.writeHead(500, { 'content-Type': 'text/html' });
        response.end('<h1>internal server error</h1>');
      } else {
        response.writeHead(200, { 'content-Type': 'text/html' });
        response.end(file);
      }
    });
  } else if (endpoint.includes('public')) {
    const extention = endpoint.split('.')[1];
    const extensionType = {
      css: 'text/css',
      js: 'application/javascript',
      ico: 'image/x-ico',
      png: 'image/png',
      html: 'text/html',
      jpeg: 'image/jpeg',
      jpg: 'image/jpg',
    };
    const filepath = path.join(__dirname, '..', endpoint);
    fs.readFile(filepath, (error, file) => {
      if (error) {
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.end('<h1>Internal server error.</h1>');
      } else {
        response.writeHead(200, { 'content-Type': extensionType[extention] });
        response.end(file);
      }
    });
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.write('note found');
    response.end();
  }
};

const server = http.createServer(router);
server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

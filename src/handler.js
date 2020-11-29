const path = require('path');
const fs = require('fs');
const querystring = require('querystring');
// const { request } = require('http');

const handleMain = (response)=>{
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
};

const handleAsset = (response, endpoint)=>{
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
};

const handleSearch = ( response,endpoint)=>{
    const queryEndPoint = endpoint.split('?')[1];
    const {query} = querystring.parse(queryEndPoint);
    const filepath = path.join(__dirname, '.', 'words.txt');
    fs.readFile(filepath, 'utf8' , (error ,contents)=>{
      if(error){
        response.writeHead(500, { 'Content-Type': 'text/html' });
        response.end('<h1>Internal server error.</h1>');
      }else{
       const wordsArr = contents.split("\n");
        const result = wordsArr.filter((word)=> word.startsWith(query)).slice(0,20)
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(result));
      }
    });
};

const handleError = (response)=>{
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.write('note found');
    response.end();
};


module.exports = {
    handleMain,
    handleAsset,
    handleSearch,
    handleError
};
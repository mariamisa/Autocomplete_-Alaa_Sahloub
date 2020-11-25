const http = require('http');

const port = 3000;

const router = (request, response)=>{
    const endpoint = request.url;
    if(endpoint === '/'){
        
    })

}
const server = http.createServer(router);
server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
});
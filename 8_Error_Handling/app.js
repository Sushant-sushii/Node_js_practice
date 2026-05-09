const testingSyntax=require('./syntax');
const logical=require('./syntax');
const http = require('http');
const server = http.createServer((req, res) => {
    console.log("request :",req.url,req.method);
    testingSyntax();
    logical();
});

server.listen(3002, () => {
    console.log("server running at http://localhost:3002");
});

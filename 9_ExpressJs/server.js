// Core Module
const http = require('http');
// External Module
const express=require('express');
const app=express();
// use is used to register the middleware in express js
// a middleware is a function that has access to the request and response objects and can modify them or perform some operations before passing control to the next middleware function in the stack.
// next passes control to the next middleware function in the stack. It is used to indicate that the current middleware function has completed its task and the next middleware function can be executed.
app.use((req,res,next)=>
{    console.log("came in first middleware",req.url,req.method);
    res.send("<h1>Hello from first middleware</h1>");
    next();
// the order of the middleware is important for flow of request systematically.
});
app.use((req,res,next)=>
{    console.log("came in second middleware");
    next();

});
app.use((req,res,next)=>
{    console.log("came in third middleware");
    
    

});
// Internal Module
// const requestHandler = require('./requestHandler');

const server = http.createServer(app);
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});
const express=require('express');
const app=express();
// use is used to register the middleware in express js
app.use("/",(req,res,next)=>{
    console.log("came in first middleware",req.url,req.method);
    res.send("<h1>Hello from first middleware</h1>");
    next();
// the order of the middleware is important for flow of request systematically.
});

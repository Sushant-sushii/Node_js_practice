// no req to use http module as express internally uses it to create server
const express=require('express');
const app=express();
// use is used to register the middleware in express js


app.post("/",(req,res,next)=>{
    console.log("came in first middleware",req.url,req.method);
    res.send("<h1>Hello from first middleware</h1>");
    next();
// the order of the middleware is important for flow of request systematically.
});

// Get and post can be used instead of use for strict matching of url and method
app.get("/submit-details",(req,res,next)=>{
    console.log("came in last middleware",req.url,req.method);
    res.send("<h1>Hello from last middleware</h1>");
    
});
app.post("/",(req,res,next)=>{
    console.log("came in last middleware",req.url,req.method);
    res.send("<h1>Hello from last middleware</h1>");
    
});
app.use("/",(req,res,next)=>{
    console.log("came in last middleware",req.url,req.method);
    res.send("<h1>Hello from last middleware</h1>");
   
});

PORT=2000;
// directly use app object to listen to the port instead of creating server using http module as express internally uses it to create server
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});

// # Cannot send next() after res.send()
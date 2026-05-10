// External module
const express=require('express');


const app=express();

app.get('/',(req,res,next)=>{
    console.log(req.url,req.method);
    res.send(`<h1>Welcome to airbnb</h1>
        
        <a href="/add-home">Add Home</a>
        `);
});

app.get('/add-home',(req,res,next)=>{
    console.log(req.url,req.method);
   
});



const PORT=3000;
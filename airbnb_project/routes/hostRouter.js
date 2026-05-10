const express = require('express');
const hostRouter = express.Router();

hostRouter.get('/add-home',(req,res,next)=>{
      res.send(`<h1>Resgister your home here</h1>
    <form action="/add-home" method="post">
        <input type="text" name="home-name" placeholder="Home Name">
        <input type="text" name="home-location" placeholder="Home Location">
        <button type="submit">Add Home</button>
       
    </form>`);
});
// app.use(bodyParser.urlencoded({extended:true}));
hostRouter.post('/add-home',(req,res,next)=>{
    res.send(`<h1>Home added successfully</h1>
        <a href="/">Go back to home</a>
    <p>Home Name: ${req.body['home-name']}</p>
    <p>Home Location: ${req.body['home-location']}</p>
    `);
    console.log(req.body);
});


module.exports = hostRouter;
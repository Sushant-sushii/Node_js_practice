// core module
const path=require('path')//it is used to work with directory file (html,css,js)


// external modules
const express = require('express');
const userRouter = express.Router();

// Local Module
const {regHomes}=require('./hostRouter');
const {regLocation}=require('./hostRouter');


userRouter.get('/',(req,res,next)=>{

    console.log(regHomes,regLocation);
    //now we can use sendFile instead of send and dir is used to get the current directory and then we can use it to get the path of the html file
    res.render('home',{regHomes,regLocation});
});

module.exports = userRouter;
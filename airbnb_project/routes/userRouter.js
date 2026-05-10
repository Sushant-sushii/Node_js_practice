// core module
const path=require('path')//it is used to work with directory file (html,css,js)


// external modules
const express = require('express');
const userRouter = express.Router();


userRouter.get('/',(req,res,next)=>{
    //now we can use sendFile instead of send and dir is used to get the current directory and then we can use it to get the path of the html file
    res.sendFile(path.join(__dirname, '../views', 'home.html'));
});

module.exports = userRouter;
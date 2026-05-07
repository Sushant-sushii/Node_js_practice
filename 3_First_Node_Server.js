// Require KeyWord

// const modeuleName=require('module');//for in built module
// const express = require('express');
// //for external module

// const myModule=require('./ModuleName')//path for internal module must be specified

// Writing in text file using fs module

const fs=require('fs');
fs.writeFile("output.txt","Hello World",(err)=>{
    if(err) console.log("Failed loading file , error :",err);
    else console.log('file written successfully');
    
});

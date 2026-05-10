//10.1) body parser: it is a middleware that parses incoming request bodies in a middleware before your handlers, available under the req.body property.

// 10.2)Express Router:
// this is a mini express application that can be used to handle routes for a specific part of your application, it helps in organizing your routes and making your code more modular. It can be used to create a separate router for each resource in your application, such as users, products, etc. This way you can keep your main app.js file clean and organized.
const express=require('express');
const userRouter=express.Router();

userRouter.get("/",(req,res,next)=>{
    res.send("<h1>Welcome to user page</h1>");
});
modele.exports=userRouter;
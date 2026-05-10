const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use((req,res,next)=>{
    console.log(req.url);
    next();
});
app.use((req,res,next)=>{
    console.log(req.method);
    next();
});
// app.use(function(req,res,next){
//     res.send("<h1>Hello from third middleware</h1>");
//     next();
// });
// routes handling
app.use("/",(req,res,next)=>{
    console.log("came in home page");
    next();
})


app.get("/contact-us",(req,res,next)=>{
    res.send("<form method='POST' action='/contact-us'><input type='text' name='name' placeholder='Name'><input type='email' name='email' placeholder='Email'><button type='submit'>Submit</button></form>")
})
// to parse the incoming request body, we need to use body-parser middleware
// extended: true means that we can parse nested objects in the request body, if set to false, it will only parse simple key-value pairs.
app.use(bodyParser.urlencoded({extended:true})); 


// for parsing application/x-www-form-urlencoded
app.post("/contact-us",(req,res,next)=>{
    console.log("form data :", req.body);
    res.send(`<h1>Form submitted successfully</h1>`);
});

PORT=2002;
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
}); 
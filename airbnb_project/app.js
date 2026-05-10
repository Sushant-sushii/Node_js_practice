// External module
const express=require('express');
const bodyParser=require('body-parser');
// core mpdule
const path=require('path');

const app=express();
// Local module
const userRouter=require('./routes/userRouter');
const hostRouter=require('./routes/hostRouter');
const rootDir=require('./utils/pathUtil');

// we can also parse using express buit-in middleware, it is a part of express and we don't need to install it separately

app.use(express.urlencoded());

// user Router
app.use(userRouter);
// host Router
// we can give the base path here instead of writing again and again in hostRouter
app.use("/host",hostRouter);

// it should be at the end of all the routes, because it will catch all the requests that are not handled by any of the above routes, and it will send a 404 response to the client.
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
}
);



const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});
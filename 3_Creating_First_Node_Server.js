//hhtp module for request response

const http=require('http');

// creation of server and catching and using request and response.
//server is stored in server variable so that it listen continuously
const server=http.createServer(function(req,res){
    console.log(req);
})
// server is made to listen at port 3000
// syntax for server.listen---->server.listen(PORT,Callback()=>{})
const PORT=3000
server.listen(PORT,()=>{console.log(`server running at http://localhost:${PORT}`);
});
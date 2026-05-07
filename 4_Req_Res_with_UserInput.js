const http=require('http')
const fs=require('fs')

const server=http.createServer(function(req,res){
    console.log(req.url,req.method,req.headers);
    
    // making different url routes functions
    if(req.url=='/')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><body><h1>User Input Form</h1><h2>Enter Your Details:</h2><form action="/submit-details" method="POST"><label for="username">Name</label><input type="text" name="username" id="username"  placeholder="Enter Your Name"><input type="radio" id="male" name="gender" value="male"><label for="male">Male</label><input type="radio" id="female" name="gender" value="female"><label for="female">Female</label><input type="submit" value="Submit"></form></body><></html>')
        
       
    }
    else if(req.url.toLowerCase()==="/submit-details" && req.method=="POST")
    {
      fs.writeFileSync('user.txt','sushant| gender:male');
      res.statusCode=302;
      res.setHeader("Location","/");

    }
   return res.end();
   
});
const PORT=3000
server.listen(PORT,()=>{console.log(`server running at http://localhost:${PORT}`);
});
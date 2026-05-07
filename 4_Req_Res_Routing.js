const http=require('http')
const server=http.createServer(function(req,res){
    console.log(req.url,req.method,req.headers);
    
    // making different url routes functions
    if(req.url=='/')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html><body><h1>This us root Route</h1></body></html>')
        
    }
    else if(req.url=='/node')
    {
        res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Node Js Learning</title>');
    res.write('<body>');
    res.write('<h1>First Node js response from server</h1>');
    res.write('</body>'); 
    res.write('</head>');
    res.write('</html>');
    
    }
    else
    {
        res.setHeader('Content-Type','text/html')
       res.write("<html><body style='bg-color:#0000'><h1>This is other route</h1></body></html>")
    //    once we use res.end we cannot set Header next time as response is already sent to client....keep in mind
       return res.end();
       
    }
});
const PORT=3000
server.listen(PORT,()=>{console.log(`server running at http://localhost:${PORT}`);
});
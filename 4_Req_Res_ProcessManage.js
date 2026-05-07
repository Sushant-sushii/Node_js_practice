const http=require('http')
const server=http.createServer(function(req,res){
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Node Js Learning</title>');
    res.write('<body>');
    res.write('<h1>First Node js response from server</h1>');
    res.write('</body>'); 
    res.write('</head>');
    res.write('</html>');
    res.end();
    // process.exit();//Stops event loop in case of any error or any bug.
});
const PORT=3000
server.listen(PORT,()=>{console.log(`server running at http://localhost:${PORT}`);
});
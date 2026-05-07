// data is transferred with the stream 
// Socket: The localhost:3000 acts as socket 
// Chunk-->Input|Chunk1|Chunk2||Node.js Program||chunk3|Chunk4|Chunk5|OUTPUT(stream of chunks is transmitted).

// each chunk is processed as soon as first chunk is received

// buffer hold the chunks and helps in sequencing the chunk.

//node works in event driven way.

const http=require('http')
const fs=require('fs')

const server=http.createServer(function(req,res){
    console.log(req.url,req.method);
    
    // making different url routes functions
    if(req.url=='/')
    {
        res.setHeader('Content-Type','text/html');
        res.write('<html><head><body><h1>User Input Form</h1><h2>Enter Your Details:</h2><form action="/submit-details" method="POST"><label for="username">Name</label><input type="text" name="username" id="username"  placeholder="Enter Your Name"><input type="radio" id="male" name="gender" value="male"><label for="male">Male</label><input type="radio" id="female" name="gender" value="female"><label for="female">Female</label><input type="submit" value="Submit"></form></body><></html>')
        
       
    }
    else if(req.url.toLowerCase()==="/submit-details" && req.method=="POST")
    {   
        // buffer is used to hold the chunks and helps in sequencing the chunk.
        const buffers=[];
        // data is transferred with the stream(jab bhi data aaye mujhe bata dena)  
         req.on('data',chunk=>{
        console.log(chunk);
        // push each chunk in the buffer
        buffers.push(chunk);
      });
        // jab data ka stream khatam ho jaye to mujhe bata dena
        req.on('end',()=>{
        // buffer me jo chunks hai unko sequence me jod do matlab buffer jod kar string me convert kar do
        const data=Buffer.concat(buffers).toString();
        console.log(data);
        // URLSearchParams is used to parse the data in the form of key value pair 
        // hume pehle jo data milta hai wo url encoded form me hota hai isliye usko URLSearchParams se parse karna padta hai.
        const params=new URLSearchParams(data);
    //     const bodyObject={};
    //     for(const [key,value] of params.entries())
    //     {
    //         bodyObject[key]=value;
    //     }
    //     console.log(bodyObject);

    const bodyObject=Object.fromEntries(params.entries());//same as above code but in one line
            console.log(bodyObject);

            
    //   WriteFileSync is used to write the data in the file synchronously mean jab tak data file me write nahi ho jata tab tak aage ka code execute nahi hoga.
      fs.writeFileSync('user.txt',JSON.stringify(bodyObject));
      res.statusCode=302;
      


      });

            


    }
   return res.end();
   
});
const PORT=3001
server.listen(PORT,()=>{console.log(`server running at http://localhost:${PORT}`);
});
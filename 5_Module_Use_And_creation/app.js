const http = require('http');
const requestHandler=require('./request_handler')//.js extenstion automatically add ho jata hai. we can also give any name to the variable like handler but it is a good practice to give the same name as the file name. 

const server = http.createServer(requestHandler);

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// 1.Install Material Icons
// 2.Npm init
// Node pacakage manager-->facilitate dependency ,manage third party packages,run scripts and more
// 3.npm Scripts
// 4.npm Packages
// 5.Installing Packages
// 6.Installing nodemon
// 7.Using nodemon

// ----------------------------------------------------------------------------

const http = require('http');
const server = http.createServer((req, res) => {
    console.log("request :",req);
});

server.listen(3004, () => {
    console.log("server running at http://localhost:3004");
});

// ----------------------------------------------------------------------------
// 2.Npm init
//----------------------------------------------------------------------------
// 3.npm Scripts
// open package.josn you will find scripts section ,here you can define custom scripts that can be run using npm run <script-name>

//  "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "start":"node 7_NPM_and_Tools.js",
//     "khul":"node 7_NPM_and_Tools.js" yaha par npm run khul use karo but npm start ke liye run use nahi karna padta wo standard hai
//   }
// -----------------------------------------------------------------------------
// nodemon installation--> npm install nodemon --save-dev(add only for development env.)
// nodemon is a development tool that automatically restarts the node application when file changes in the directory are detected.

// ----------------------------------------------------------------------------
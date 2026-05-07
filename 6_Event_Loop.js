// Event Driven Programming in Node.js
// click-->Event Listener-->event Loop-->Event Handler(kahi event hoga phir uske hisaab se kam karenge)
//----------------------------------------------------------------------------

// Single Threaded-->One command at a time
// but node perform non-blocking I/O operations-->event loop-->event handler
// event loop continuously checks for events and executes the corresponding event handlers when an event occurs.
// This allows Node.js to handle multiple operations concurrently without blocking the main thread, making it efficient for I/O-bound tasks.
// baki i/o wale kaam worker thread me chala jata hai aur main thread free ho jata hai dusre kam ke liye

//----------------------------------------------------------------------------

// V8 Engine-->Google Chrome me use hota hai-->Node.js me bhi use hota hai
// libuv-->C library-->Node.js me use hota hai-->event loop and asynchronous I/O operations ke liye responsible hai(real hero of node.js)

//----------------------------------------------------------------------------
// Node Runtime
console.log("Starting Node js"); //to v8 engine
db.query("SELECT * FROM users", (err, result) => {
    if (err) {
        console.error("Error fetching users:", err);
    }
    console.log("Users fetched:", result);
});//to libuv engine
console.log("before query result");//to v8 engine

// Output:
// Starting Node js
// before query result
// Users fetched: [/* result from database */]

// ----------------------------------------------------------------------------

// Priority of events in event loop
// 1. Timers (setTimeout, setInterval)
// 2. I/O Callbacks (network requests, file system operations)
// 3. Idle, Prepare
// 4. Poll (checking for new I/O events)
// 5. Check (setImmediate)
// 6. Close Callbacks (e.g., socket.on('close', ...))

// ----------------------------------------------------------------------------

// AsyncCode
// in calculator we made focus on req.on()

const body = [];
let result;
req.on('data', (chunk) => {
    body.push(chunk);
});     
req.on('end', () => {
    const parsedBody = Buffer.concat(body).toString();  
    const params = new URLSearchParams(parsedBody);
    const value1 = parseFloat(params.get('value1')) || 0;
    const value2 = parseFloat(params.get('value2')) || 0;
    result = value1 + value2;
    console.log("Result:", result);
});
// jab tak data receive nahi hua tha tab tak wo wait nahi karwga instead wo aage ke code ko execute kar dega aur jab data receive ho jayega tabhi req.on('end') wala code execute hoga aur result calculate hoga but jab result calculate hoga tab tak res.end() execute ho chuka hoga isliye result undefined aayega
res.setHeader('Content-Type', 'text/html');
res.write(`<h1>Result: ${result}</h1>`); //undefined because req.on() is async
res.end();  


// isko resolve async await ya callback(promise[.then(),.catch()]) se kar sakte hai
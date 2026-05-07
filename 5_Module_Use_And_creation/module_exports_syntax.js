// multiple exports using object
module.exports={
    handler:requestHandler,
    extra:"Extra data"
};

// Setting multiple properties on exports object
exports.handler=requestHandler;
exports.extra="Extra data";

// Shortcut 
exports.handler=requestHandler;
exports.extra="Extra data";

const routing=require('./routes');


const requestHandler=(req,res)=>{
    console.log(req.url,req.method);
    routing(req,res);

}
module.exports=requestHandler;
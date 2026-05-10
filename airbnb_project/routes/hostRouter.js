const express = require('express');
const path = require('path');
const hostRouter = express.Router();
const bodyParser = require('body-parser');

app=express();
hostRouter.get('/add-home', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'addHome.html'));
});
app.use(express.urlencoded());


hostRouter.post('/add-home', (req, res, next) => {
    
    
    
   res.sendFile(path.join(__dirname, '../views', 'homeAdded.html'));
});

module.exports = hostRouter;


module.exports = hostRouter;
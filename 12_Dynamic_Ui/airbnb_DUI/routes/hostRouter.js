const express = require('express');
const path = require('path');
const hostRouter = express.Router();
const bodyParser = require('body-parser');

app=express();
hostRouter.get('/add-home', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'addHome.html'));
});
app.use(express.urlencoded());

const regHomes=[];
const regLocation=[];

hostRouter.post('/add-home', (req, res, next) => {   

    regHomes.push({'homeName':req.body.homeName});
    regLocation.push({'homeLocation':req.body.homeLocation});

    console.log(regHomes,regLocation);

    // Send variable to ejs and render the ejs as response
    
     res.render('homeAdded',{regHomes,regLocation});
});

exports.hostRouter = hostRouter;
exports.regHomes=regHomes;
exports.regLocation=regLocation;
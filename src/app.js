const express= require ("express");
const app = express ();

const index = require ("./routes/index");
const games= require ("./routes/gamesRouter");

app.use(express.json());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With, Content-Type, Accept"
    )
    next()
});

app.use (express.static('public'));

app.use ('/',index);
app.use('/games',games);

module.exports=app
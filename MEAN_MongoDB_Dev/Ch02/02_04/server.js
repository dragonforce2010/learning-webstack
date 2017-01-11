var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;

var database;

app.use(bodyParser.json());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
})

app.post('/api/message', function(req,res){
    console.log(req.body);
    database.collection('messages').insertOne(req.body);

    res.status(200);
})

mongo.connect("mongodb://localhost:27017/test", function(err,db){
    if(!err){
        console.log("we are connected to mongo");
        database = db;
    }
})

var server = app.listen(5000, function(){
    console.log('listening on port ', server.address().port)
})

var http = require('http');
var express = require('express');
var app = express();
var port = 3000;

app.get('/get-server-name', (req,res)=> {
    res.send('welcome to server '+ process.env.SERVER_NAME);
})

app.listen(port);
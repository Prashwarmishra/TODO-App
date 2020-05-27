const express = require('express');
const port = 7000;

const db = require('./config/mongoose');
const ToDo = require('./models/todoSchema');

const app = express();

// app.post('/create-description', function(req, res){

// })

app.listen(port, function(err){
    if (err){
        console.log(`There's an error in connecting to the server: ${err}`);
        return
    }
    console.log(`The server is up and running at the port: ${port}`);
})
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var index = require('./routes/index');
var toDo = require('./routes/toDoList');


app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json()); // specific for angular requests


app.use('/todolist', toDo);

app.use('/', index);

var databaseUri = 'mongodb://localhost:27017/todolist';
mongoose.connect(databaseUri); //This creates the connection




app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Listening on port: ', app.get('port'));
});

var express = require('express');
var router = express.Router();
var List = require('../models/todo.schema.js');
console.log('Inside toDoList.js router');

router.get('/', function(req, res) {
  console.log('inside the List get');
  List.find().then(function(todolist) {
    res.send(todolist);
    console.log(todolist);
  });
});




module.exports = router;

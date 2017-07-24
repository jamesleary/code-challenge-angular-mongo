var mongoose = require('mongoose');
var Schema = mongoose.Schema;  //capitalized since we will be using it as a constructor

// create the Schema
var toDoSchema = new Schema ({
  name: {type: String},
  message: {type: String}
});



//export
module.exports = mongoose.model('list', toDoSchema);  //sending the Person object

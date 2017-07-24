app.controller('TodoController',['$http' , function($http){
  var tc = this;

getToDoList();

function getToDoList() {
  console.log('getToDoList');
  $http.get('/todolist').then(function(response){
  console.log(response);
  // NOTE: Angular responses are put in a data object

  tc.listing = response.data;
});
}
}]);

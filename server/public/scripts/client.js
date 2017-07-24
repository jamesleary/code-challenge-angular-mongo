console.log('js');
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
  //define our routes, point them at a controller
  $routeProvider
  .when('/todolist', {
    controller: 'TodoController as tc',
    templateUrl: 'views/todo.html'
  })

  .otherwise({
    redirectTo: 'todolist'
  });
});

var app=angular.module("app",['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "/login.html"
               
            })
            .when('/states', {
                templateUrl: "/states.html"         
            })
         
            .otherwise({ redirectTo: '/login.html' });
    }]);
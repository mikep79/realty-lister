var myApp = angular.module('myApp', ['ngRoute']);

// set up controllers for views when URL's hit
myApp.config(function ($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController as HC'
    }).when('/rent', {
        templateUrl: 'views/rent.html',
        controller: 'RentController as RC'
    }).when('/sale', {
        templateUrl: 'views/sale.html',
        controller: 'SaleController as SC'
    }).otherwise({
        redirectTo: '/'
    });
});
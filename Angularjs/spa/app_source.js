var angular = require('angular');
var route = require('angular-route');

var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
    .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        }
    )

        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

    .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
    })
});

myApp.service('nameService', function(){

    this.name = 'john doe';
    this.nameLength = function() {
        return this.name.length;
    }.bind(this);


});

myApp.controller('mainController', function($scope, $location, $log, nameService){
    $scope.name = nameService.name;

    $scope.$watch('name',function(newVal){
        nameService.name = newVal;
    })

    $log.warn(nameService.nameLength());

});

myApp.controller('secondController', function($scope, $routeParams,$log,nameService){
    $scope.num = $routeParams.num || 'default';
    $scope.name = nameService.name;

    $scope.$watch('name',function(newVal){
        nameService.name = newVal;
    })
});


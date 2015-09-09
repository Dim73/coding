var angular = require('angular');


var myApp = angular.module('myApp',[]);
/*
myApp.controller('mainController', function($scope, $filter, $timeout){

/!*
    $timeout(function(){
        $scope.name = "sjphn";
    },3000);*!/

    /!* $scope.$watch('handle',function(newvalue, oldvalue){
     console.log('changed',oldvalue,newvalue);
     })

     setTimeout(function(){//async, digest loop not watch
     //dont need with $timeout
     $scope.$apply(function(){
     $scope.handle = 'new';
     })
     },3000)*!/

    $scope.handle = 'default';
    $scope.toLowerCase = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;

    $scope.rules = [

        {
            rulename: 'must be 5 char'
        },
        {
            rulename: 'must be cool'
        },
        {
            rulename: 'must be be'
        }
    ]


});*/

myApp.controller('mainController', function($scope, $http){

    /*var rulesrequest = new XMLHttpRequest();
    rulesrequest.onreadystatechange = function() {
        if (rulesrequest.readyState === 4 && rulesrequest.status === 200) {
            $scope.rules = JSON.parse(rulesrequest.responseText);
        }
    };
    rulesrequest.open('GET', "http://localhost:8080", true);
    rulesrequest.send();*/

    $http.get('/api')
        .success(function(result){

            $scope.rules = result;
        })
        .error(function(data, status){
            console.log(data);
        })

    $scope.addRule = function () {
        $http.post('/api', {newRule : $scope.newRule})
        .success(function(result){
                $scope.rules = result;
                $scope.newRule = '';
            })
            .error(function(data, status){
                console.log(data);
            })
    }
});
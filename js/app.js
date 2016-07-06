var app = angular.module('app', []);

app.controller('MainCtrl', ['$scope',  MainCtrl])

function MainCtrl($scope) {
    $scope.name = "wolfgang";
}

console.log(`app.js has loaded!`)
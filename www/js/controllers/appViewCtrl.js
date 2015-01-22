angular.module('starter')
    .controller('AppViewCtrl', function ($scope) {
      $scope.login = function (auth) {
        console.log(auth.password);
      }
    });

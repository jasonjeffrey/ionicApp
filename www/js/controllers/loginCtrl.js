angular.module('starter')
    .controller('LoginCtrl', function ($scope, $location) {
      $scope.auth = {
        password: ''
      };

      $scope.errorMsg = '';

      $scope.login = function () {
        if($scope.auth.password === 'open') {
          $scope.errorMsg = '';

          $location.url('/camera');
        } else {
          $scope.errorMsg = 'Incorrect Password';
        }
      }
    });

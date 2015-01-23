angular.module('starter')
    .controller('AppViewCtrl', function ($scope) {
      $scope.auth = {
        password: ''
      };

      $scope.errorMsg = '';

      $scope.login = function () {
        if($scope.auth.password === 'open') {
          $scope.errorMsg = '';
          //load new view
        } else {
          $scope.errorMsg = 'Incorrect Password';
        }
      }
    });

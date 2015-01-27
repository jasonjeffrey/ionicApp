angular.module('starter')
    .controller('LoginCtrl', function ($scope, $location, $ionicPlatform, $cordovaSplashscreen) {
      $ionicPlatform.ready(function () {
        $cordovaSplashscreen.hide();
      });

      $scope.auth = {};

      $scope.errorMsg = '';

      $scope.login = function () {
        if ($scope.auth.password === 'open') {
          $scope.errorMsg = '';

          $location.url('/camera');
        } else {
          $scope.errorMsg = 'Incorrect Password';
        }
      };
    });

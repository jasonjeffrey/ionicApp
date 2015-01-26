angular.module('starter')
    .controller('CameraCtrl', function ($scope, $ionicPlatform, $cordovaCapture) {
      $scope.loadCamera = function () {
        var options = {limit: 3};
        $cordovaCapture.captureImage(options).then(function (imageData) {
          // Success! Image data is here
          console.log('success');
        }, function (err) {
          // An error occurred. Show a message to the user
          console.log('error');
        });
      };
    });

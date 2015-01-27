angular.module('starter')
    .controller('CameraCtrl', function ($scope, $ionicPlatform, $cordovaCapture) {
      $scope.imageArray = [];

      $scope.loadCamera = function () {
        var options = {limit: 3};
        $cordovaCapture.captureImage(options).then(function (imageData) {
          var i;
          for(i = 0; i < imageData.length; i++) {
            $scope.imageArray.push(imageData[i]);
          }
        }, function (err) {
          console.log('error', err);
        });
      };
    });

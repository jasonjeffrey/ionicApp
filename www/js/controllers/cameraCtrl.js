angular.module('starter')
    .controller('CameraCtrl', function ($scope, $ionicPlatform, $cordovaCamera) {
      $scope.imageArray = [];

      $scope.loadCamera = function () {
        var options = {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          allowEdit: true,
          encodingType: Camera.EncodingType.JPEG,
          targetWidth: 100,
          targetHeight: 100,
          popoverOptions: CameraPopoverOptions,
          saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {

          var src = "data:image/jpeg;base64," + imageData;

          console.log(src);

        }, function(err) {
          console.log('error', err);
        });
      };
    });

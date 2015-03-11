angular.module('starter')
    .controller('GalleryCtrl', function ($scope, cameraService) {
      $scope.imageArray = [];

      $scope.takePicture = function () {
        cameraService.getPictureFromCamera().then(function (picture) {
          console.log(picture);
          $scope.imageArray.push(picture);
        });
      }
    });

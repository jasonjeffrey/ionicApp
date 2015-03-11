angular.module('starter')
    .controller('GalleryCtrl', function ($scope, cameraService, localStorageService) {
      var galleryStorageKey = 'gallery';

      $scope.imageArray = [];
      $scope.takePicture = function () {
        cameraService.getPictureFromCamera().then(function (picture) {
          $scope.imageArray.push(picture);
          saveImagesToLocalStorage();
        });
      };

      function initialiseGallery() {
        $scope.imageArray = getImagesFromLocalStorage();
      }

      function saveImagesToLocalStorage() {
        localStorageService.setItem(galleryStorageKey, $scope.imageArray);
      }

      function getImagesFromLocalStorage() {
        var storedImageArray = localStorageService.getItem(galleryStorageKey);

        if(!angular.isArray(storedImageArray)) {
          storedImageArray = [];
        }

        return storedImageArray;
      }

      initialiseGallery();
    });

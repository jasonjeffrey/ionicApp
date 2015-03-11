angular.module('starter')
    .service('cameraService', function ($q, $ionicPlatform, $cordovaCamera) {
        var options = {
            quality: 100,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            saveToPhotoAlbum: false
        };


        this.getPictureFromCamera = function () {
            var defer = $q.defer();

            $ionicPlatform.ready(function () {
                $cordovaCamera.getPicture(options)
                    .then(function (imageData) {
                        defer.resolve("data:image/jpeg;base64," + imageData);
                    }, function (err) {
                        defer.reject('error: ' + err);
                    });
            });

            return defer.promise;
        }
    });

angular.module('starter')
    .service('cameraService', function ($q, $ionicPlatform, $cordovaCamera) {
        var options = {
            quality: 100,
            allowEdit: true,
            saveToPhotoAlbum: false
        };

        $ionicPlatform.ready(function () {
            options.destinationType = Camera.DestinationType.DATA_URL;
            options.sourceType = Camera.PictureSourceType.CAMERA;
            options.encodingType = Camera.EncodingType.JPEG;
        });

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

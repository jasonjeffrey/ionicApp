angular.module('starter')
    .service('databaseService', function ($ionicPlatform, $cordovaSQLite) {
      var dbInstance;

      this.openConnection = function (dbName) {
        $ionicPlatform.ready(function () {
          dbInstance = $cordovaSQLite.openDB(dbName);
          console.log(dbInstance);
        });
      };

      this.execute = function (querySql, data) {
          return $cordovaSQLite.execute(dbInstance, querySql, data);
      }
    });
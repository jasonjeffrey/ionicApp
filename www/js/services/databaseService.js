angular.module('starter')
    .service('databaseService', function ($ionicPlatform, $cordovaSQLite, $exceptionHandler) {
      var dbInstance;

      this.openConnection = function (dbName) {
        $ionicPlatform.ready(function () {
          try {
            dbInstance = $cordovaSQLite.openDB(dbName);
          } catch (error) {
            $exceptionHandler(error);
          }
        });
      };

      this.executeSql = function (querySql, data) {
          return $cordovaSQLite.execute(dbInstance, querySql, data);
      }
    });
angular.module('starter')
    .service('localStorageService', function () {
      this.setItem = function (key, value) {
        window.localStorage.setItem(key, angular.toJson(value));
      };

      this.getItem  = function (key) {
        return angular.fromJson(window.localStorage.getItem(key));
      };
    });
angular.module('starter', ['ionic', 'ngCordova'])

    .run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
      });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      });

      $stateProvider.state('camera', {
        url: '/camera',
        templateUrl: 'templates/gallery.html',
        controller: 'GalleryCtrl'
      });

      $urlRouterProvider.otherwise('/login');
    });
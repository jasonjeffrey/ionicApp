describe('GalleryCtrl', function () {
  var controllerLoader, scope,
      localStorageService;

  beforeEach(function () {
    module('ionic', function ($stateProvider, $urlRouterProvider) {
      sinon.stub($stateProvider, 'state');
      sinon.stub($urlRouterProvider, 'otherwise');
    });
    module('ngCordova', 'ngCordovaMocks');
    module('starter');
  });

  beforeEach(inject(function($controller, $rootScope, _localStorageService_) {
    scope = $rootScope.$new();
    localStorageService = _localStorageService_;

    controllerLoader = $controller;
  }));

  describe('initialisation', function () {
    it('should not be undefined', function () {
      var controller = controllerLoader('GalleryCtrl', {
        $scope: scope
      });

      expect(controller).to.be.ok;
    });

    it('should start with an empty imageArray', function () {
      sinon.stub(localStorageService,'getItem', function () {
        return [];
      });

      controllerLoader('GalleryCtrl', {
        $scope: scope
      });

      expect(scope.imageArray.length).to.equal(0);

      localStorageService.getItem.restore();
    });

    it('should fill imageArray with stored Images', function () {
      sinon.stub(localStorageService,'getItem', function () {
        return ['image1.jpg','image2.jpg', 'image3.jpg'];
      });

      controllerLoader('GalleryCtrl', {
        $scope: scope
      });

      expect(scope.imageArray.length).to.equal(3);

      localStorageService.getItem.restore();
    });
  });

  describe('takePicture', function () {
    var q, cameraService, controller;

    beforeEach(inject(function (_cameraService_, $q) {
      q = $q;
      cameraService = _cameraService_;

      sinon.stub(localStorageService,'getItem', function () {
        return [];
      });

      sinon.stub(localStorageService, 'setItem');

      controller = controllerLoader('GalleryCtrl', {
        $scope: scope
      });

    }));

    afterEach(function () {
      localStorageService.getItem.restore();
      localStorageService.setItem.restore();
      cameraService.getPictureFromCamera.restore();
    });


    it('should successfully get a picture from the camera, update imageArray and save to localStorage ', function () {
      sinon.stub(cameraService, 'getPictureFromCamera', function () {
        var defer = q.defer();

        defer.resolve();

        return defer.promise;
      });

      scope.$apply(scope.takePicture());

      expect(cameraService.getPictureFromCamera.called).to.be.ok;
      expect(scope.imageArray.length).to.equal(1);
      expect(localStorageService.setItem.called).to.be.ok;
      expect(localStorageService.setItem.args[0][0]).to.equal('gallery');
    });

    it('should fail to get a picture from the camera and console log out an error message ', function () {
      sinon.stub(cameraService, 'getPictureFromCamera', function () {
        var defer = q.defer();

        defer.reject();

        return defer.promise;
      });

      sinon.stub(console, 'log');

      scope.$apply(scope.takePicture());

      expect(cameraService.getPictureFromCamera.called).to.be.ok;
      expect(scope.imageArray.length).to.equal(0);
      expect(console.log.calledOnce).to.be.ok;

      console.log.restore();
    });

  });
});
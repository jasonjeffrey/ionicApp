describe('cameraService', function () {
  var cameraService,
      $cordovaCamera,
      $scope;

  beforeEach(function () {
    module('ionic', function ($stateProvider, $urlRouterProvider) {
      sinon.stub($stateProvider, 'state');
      sinon.stub($urlRouterProvider, 'otherwise');
    });

    module('ngCordova', 'ngCordovaMocks');
    module('starter');
  });

  beforeEach(inject(function(_cameraService_, $rootScope, _$cordovaCamera_) {
    cameraService = _cameraService_;
    $scope = $rootScope.$new();
    $cordovaCamera = _$cordovaCamera_;
  }));

  describe('initialisation', function () {
    it('should not be undefined', function () {
      expect(cameraService).to.be.ok;
    });
  });

  describe('getPictureFromCamera', function () {

    it('should successfully get a picture', function (done) {
      var successSpy = sinon.spy(function () {
            expect(successSpy.called).to.be.ok;
            expect(failedSpy.called).to.not.be.ok;
            done();
          }),
          failedSpy = sinon.spy();

      $scope.$apply(cameraService.getPictureFromCamera().then(successSpy, failedSpy));
    });

    it('should fail to to take a picture', function (done) {
      var successSpy = sinon.spy(),
          failedSpy =  sinon.spy(function () {
            expect(successSpy.called).to.not.be.ok;
            expect(failedSpy.called).to.be.ok;
            done();
          });

      $cordovaCamera.throwsError = true;

      $scope.$apply(cameraService.getPictureFromCamera().then(successSpy, failedSpy));
    });
  });
});
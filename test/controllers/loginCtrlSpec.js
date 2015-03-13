describe('LoginCtrl', function () {
  var controller, scope,
      locationUrlStub;

  beforeEach(function () {
    module('ngCordova', 'ngCordovaMocks');
    module('starter');
  });

  beforeEach(inject(function($controller, $rootScope, $location) {
    scope = $rootScope.$new();
    controller = $controller('LoginCtrl', {
      $scope: scope
    });

    locationUrlStub = sinon.stub($location, 'url');
  }));

  describe('initialisation', function () {
    it('should not be undefined', function () {
      expect(controller).to.be.ok;
    });
  });

  describe('public method: login', function () {
    it('should successfully log in the user', function () {

      scope.auth.password = 'open';

      scope.login();

      expect(locationUrlStub.called).to.be.ok;
      expect(scope.errorMsg).to.be.empty;
    });

    it('should fail log in the user', function () {

      scope.auth.password = 'test1';

      scope.login();

      expect(locationUrlStub.called).to.not.be.ok;
      expect(scope.errorMsg).to.not.be.empty;
    });
  });
});
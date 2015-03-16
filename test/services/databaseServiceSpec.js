describe('databaseService', function () {
  var databaseService, $cordovaSQLite, $exceptionHandler;

  beforeEach(function () {
    module(function($exceptionHandlerProvider) {
      $exceptionHandlerProvider.mode('log');
    });
  });

  beforeEach(module('starter'));

  beforeEach(inject(function(_databaseService_, _$cordovaSQLite_, _$exceptionHandler_) {
    databaseService = _databaseService_;
    $cordovaSQLite = _$cordovaSQLite_;
    $exceptionHandler = _$exceptionHandler_;
  }));



  describe('initialisation', function () {
    it('should not be undefined', function () {
        expect(databaseService).to.be.ok;
    });
  });

  describe('openConnection', function () {

    afterEach(function () {
      $cordovaSQLite.openDB.restore();
    });

    it('should open a local database using default background setting', function () {
      var dbName = 'app.db';

        sinon.stub($cordovaSQLite, 'openDB');

        databaseService.openConnection(dbName);

        expect($cordovaSQLite.openDB.called).to.be.ok;
        expect($cordovaSQLite.openDB.args[0][0]).to.equal(dbName);
    });

    it('should throw error to open a local database by not passing a DB name', function () {
      var dbException = 'no DB Name';

      sinon.stub($cordovaSQLite, 'openDB', function () {
        throw dbException;
      });

      databaseService.openConnection();

      expect($cordovaSQLite.openDB.called).to.be.ok;
      expect($exceptionHandler.errors[0]).to.equal(dbException);
    });
  });
});
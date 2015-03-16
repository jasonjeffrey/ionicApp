describe('databaseService', function () {
  var databaseService;

  beforeEach(module('starter'));

  beforeEach(inject(function(_databaseService_, _$cordovaSQLite_) {
    databaseService = _databaseService_;
    $cordovaSQLite = _$cordovaSQLite_;
  }));

  describe('initialisation', function () {
    it('should not be undefined', function () {
        expect(databaseService).to.be.ok;
    });
  });

  describe('openConnection', function () {

    beforeEach(function () {
      sinon.stub($cordovaSQLite, 'openDB');
    });

    afterEach(function () {
      $cordovaSQLite.openDB.restore();
    });

    it('should open a local database using default background setting', function () {
      var dbName = 'app.db';

        databaseService.openConnection(dbName);

        expect($cordovaSQLite.openDB.called).to.be.ok;
        expect($cordovaSQLite.openDB.args[0][0]).to.equal(dbName);
    });

    it('should fail to open a local database by not passing a DB name', function () {
      var dbName = 'error.db';

      databaseService.openDatabase();

      expect($cordovaSQLite.openDB.called).to.be.ok;
      expect($cordovaSQLite.openDB.args[0][0]).to.equal(dbName);
    });
  });
});
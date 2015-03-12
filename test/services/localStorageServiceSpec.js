describe('localStorageService', function () {
  var localStorageService,
      localStorageStub;

  beforeEach(module('starter'));

  beforeEach(inject(function(_localStorageService_) {
    localStorageService = _localStorageService_;
  }));

  describe('initialisation', function () {
    it('should not be undefined', function () {
      expect(localStorageService).to.be.ok;
    });
  });

  describe('getItem', function () {
    beforeEach(function () {
      localStorageStub = sinon.stub(window.localStorage, "getItem", function (key) {
        var store = {
          'test': '["test123"]'
        };

        return store[key];
      });
    });

    afterEach(function () {
      localStorageStub.restore();
    });

    it('should get the correct item from key: test', function () {
      var result = localStorageService.getItem('test');
      expect(result[0]).to.equal("test123");
    });

    it('should return null from item that does not exist: test2', function () {
      var result = localStorageService.getItem('test2');
      expect(result).to.not.be.ok;
    });

  });

  describe('setItem', function () {
    beforeEach(function () {
      localStorageStub = sinon.stub(window.localStorage, "setItem");
    });

    afterEach(function () {
      localStorageStub.restore();
    });

    it('should pass a Json parsed string to window.localStorage - string', function () {
      localStorageService.setItem('test1','string');

      expect(localStorageStub.called).to.be.ok;
      expect(localStorageStub.args[0][0]).to.equal('test1');
      expect(localStorageStub.args[0][1]).to.equal('"string"');
    });

    it('should pass a Json parsed string to window.localStorage - object', function () {
      localStorageService.setItem('test1',{t1:0,t2:1,t3:2});

      expect(localStorageStub.called).to.be.ok;
      expect(localStorageStub.args[0][0]).to.equal('test1');
      expect(localStorageStub.args[0][1]).to.equal('{"t1":0,"t2":1,"t3":2}');
    });

    it('should pass a Json parsed string to window.localStorage - array', function () {
      localStorageService.setItem('test1',[0,'text',2]);

      expect(localStorageStub.called).to.be.ok;
      expect(localStorageStub.args[0][0]).to.equal('test1');
      expect(localStorageStub.args[0][1]).to.equal('[0,"text",2]');
    });
  });
});
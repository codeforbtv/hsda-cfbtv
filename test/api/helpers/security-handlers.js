var should = require('should');
const securityHandlers = require('../../../api/helpers/security-handlers');

describe('securityHandlers', function() {
  describe('appid', function() {
    it('should pass authenticate', function(done) {
      securityHandlers.appid(
        {
          headers: {
            'x-appid': 'social-safety-net',
          }
        },
        {
          type: 'apikey',
          in: 'header',
          name: 'x-appid',
        },
        null,
        (args) => {
          if (args != null) {
            throw new Error(`Authentication didn't succeed`);
          }
          done();
        }
      );
    });

    it('should fail authentication', function(done) {
      securityHandlers.appid(
        {
          headers: {
            'x-appid': null,
          }
        },
        {
          type: 'apikey',
          in: 'header',
          name: 'x-appid',
        },
        null,
        (args) => {
          if (args == null) {
            throw new Error(`Authentication didn't fail`);
          }
          done();
        }
      );
    });
  });

  describe('appkey', function() {
    it('should pass authenticate', function(done) {
      securityHandlers.appkey(
        {
          headers: {
            'x-appkey': 'alohomora',
          }
        },
        {
          type: 'apikey',
          in: 'header',
          name: 'x-appkey',
        },
        null,
        (args) => {
          if (args != null) {
            throw new Error(`Authentication didn't succeed`);
          }
          done();
        }
      );
    });

    it('should fail authentication', function(done) {
      securityHandlers.appkey(
        {
          headers: {
            'x-appkey': null,
          }
        },
        {
          type: 'apikey',
          in: 'header',
          name: 'x-appkey',
        },
        null,
        (args) => {
          if (args == null) {
            throw new Error(`Authentication didn't fail`);
          }
          done();
        }
      );
    });
  });
});

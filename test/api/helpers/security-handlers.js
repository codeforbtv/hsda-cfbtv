const request = require('supertest');
const should = require('should');
const server = require('../../../index');
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

  describe('api test', function() {
    it('should pass authenticate with appkey', function(done) {
      request(server)
        .post('/contacts')
        .send({ firstName: 'Jane', lastName: 'Doe'})
        .set('Content-Type', 'application/json')
        .set('X-APPKEY', 'alohomora')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('should pass authenticate with appid', function(done) {
      request(server)
        .post('/contacts')
        .send({ firstName: 'Jane', lastName: 'Doe'})
        .set('Content-Type', 'application/json')
        .set('X-APPID', 'social-safety-net')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });

    it('should fail authenticate with wrong appkey', function(done) {
      request(server)
        .post('/contacts')
        .send({ firstName: 'Jane', lastName: 'Doe'})
        .set('Content-Type', 'application/json')
        .set('X-APPKEY', 'BAD-APPKEY')
        .expect('Content-Type', /json/)
        .expect(401, done);
    });

    it('should fail authenticate with wrong appid', function(done) {
      request(server)
        .post('/contacts')
        .send({ firstName: 'Jane', lastName: 'Doe'})
        .set('Content-Type', 'application/json')
        .set('X-APPID', 'BAD-APPID')
        .expect('Content-Type', /json/)
        .expect(401, done);
    });

    it('should fail authenticate with no security headers passed', function(done) {
      request(server)
        .post('/contacts')
        .send({ firstName: 'Jane', lastName: 'Doe'})
        .set('Content-Type', 'application/json')
        .expect('Content-Type', /json/)
        .expect(401, done);
    });
  });
});

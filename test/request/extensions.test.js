var chai = require('chai')
  , extensions = require('../../lib/request/extensions')
  , qs = require('querystring')


describe('authorization request extensions', function() {
  
  describe('module', function() {
    var mod = extensions();
    
    it('should be wildcard', function() {
      expect(mod.name).to.equal('*');
    });
    
    it('should expose request and response functions', function() {
      expect(mod.request).to.be.a('function');
      expect(mod.response).to.be.undefined;
    });
  });
  
  describe('request parsing', function() {
    
    describe('request with response_mode parameter', function() {
      var err, ext;
      
      before(function(done) {
        chai.oauth2orize.grant(extensions())
          .req(function(req) {
            req.query = {};
            req.query.response_mode = 'form_post';
          })
          .parse(function(e, o) {
            err = e;
            ext = o;
            done();
          })
          .authorize();
      });
      
      it('should not error', function() {
        expect(err).to.be.null;
      });
      
      it('should parse request', function() {
        expect(ext.responseMode).to.equal('form_post');
      });
    });
    
    describe('request without response_mode parameter', function() {
      var err, ext;
      
      before(function(done) {
        chai.oauth2orize.grant(extensions())
          .req(function(req) {
            req.query = {};
          })
          .parse(function(e, o) {
            err = e;
            ext = o;
            done();
          })
          .authorize();
      });
      
      it('should not error', function() {
        expect(err).to.be.null;
      });
      
      it('should parse request', function() {
        expect(ext.responseMode).to.be.undefined;
      });
    });
    
  });

});
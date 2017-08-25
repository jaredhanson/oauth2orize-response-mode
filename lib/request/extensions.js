/**
 * Parse request parameters defined by multiple response type encoding
 * practices.
 *
 * This module is a wildcard parser that parses authorization requests for
 * extensions parameters defined by multiple response type encoding practices.
 * In particular, `response_mode` paratmeter is defined which informs the
 * authorization server of the mechanism to be used for returning the
 * authorization response.
 *
 * Examples:
 *
 *     server.grant(mode.extensions());
 *
 * References:
 *  - [OAuth 2.0 Multiple Response Type Encoding Practices](http://openid.net/specs/oauth-v2-multiple-response-types-1_0.html)
 *
 * @return {Object} module
 * @api public
 */
module.exports = function() {
  
  function request(req) {
    var q = req.query
      , ext = {};
    
    if (q.response_mode) {
      ext.responseMode = q.response_mode;
    }
    
    return ext;
  }
  
  var mod = {};
  mod.name = '*';
  mod.request = request;
  return mod;
}

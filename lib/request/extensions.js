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

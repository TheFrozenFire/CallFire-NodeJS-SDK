var response = require('../response'),
    util = require('util');

var resource = function(document) {
    response.call(this, document);
}
util.inherits(resource, response);
with({proto: resource.prototype}) {
    
}

module.exports = resource;

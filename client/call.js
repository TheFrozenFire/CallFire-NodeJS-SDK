var client = require('../client'),
    util = require('util');

var call = function() {
    client.apply(this, arguments);
}
util.inherits(call, client);
with({proto: call.prototype}) {
    
}

module.exports = call;

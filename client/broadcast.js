var client = require('../client'),
    util = require('util');

var broadcast = function() {
    client.apply(this, arguments);
}
util.inherits(broadcast, client);
with({proto: broadcast.prototype}) {
    
}

module.exports = broadcast;

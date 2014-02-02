var Client = require('../Client'),
    util = require('util');

var Broadcast = function() {
    Client.apply(this, arguments);
}
util.inherits(Broadcast, Client);
with({proto: Broadcast.prototype}) {
    
}

module.exports = Broadcast;

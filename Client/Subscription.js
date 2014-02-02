var Client = require('../Client'),
    util = require('util');

var Subscription = function() {
    Client.apply(this, arguments);
}
util.inherits(Subscription, Client);
with({proto: Subscription.prototype}) {
    
}

module.exports = Subscription;

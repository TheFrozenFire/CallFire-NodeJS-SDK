var client = require('../client'),
    util = require('util');

var subscription = function() {
    client.apply(this, arguments);
}
util.inherits(subscription, client);
with({proto: subscription.prototype}) {
    
}

module.exports = subscription;

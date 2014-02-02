var util = require('util');
var Resource = require('../Resource');

var SubscriptionFilter = function() {
    Resource.apply(this, arguments);
}
util.inherits(SubscriptionFilter, Resource);
module.exports = SubscriptionFilter;
with({proto: SubscriptionFilter.prototype}) {
    proto.types = [
        'SubscriptionFilter'
    ]

    proto.broadcastId = null;
    proto.batchId = null;
    proto.fromNumber = null;
    proto.toNumber = null;
    proto.inbound = null;
}

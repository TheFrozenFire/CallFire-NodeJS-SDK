var util = require('util');
var Resource = require('../Resource');

var Subscription = function() {
    Resource.apply(this, arguments);
}
util.inherits(Subscription, Resource);
module.exports = Subscription;
with({proto: Subscription.prototype}) {
    proto.types = [
        'Subscription'
    ]

    proto.id = null;
    proto.enabled = null;
    proto.endpoint = null;
    proto.notificationFormat = null;
    proto.triggerEvent = null;
    proto.subscriptionFilter = null;
}

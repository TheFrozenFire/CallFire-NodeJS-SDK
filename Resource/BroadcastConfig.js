var util = require('util');
var Resource = require('../Resource');

var BroadcastConfig = function() {
    Resource.apply(this, arguments);
}
util.inherits(BroadcastConfig, Resource);
with({proto: BroadcastConfig.prototype}) {
    proto.types = [
        'BroadcastConfig'
    ]

    proto.id = null;
    proto.created = null;
    proto.fromNumber = null;
    proto.localTimeZoneRestriction = null;
    proto.retryConfig = null;
}

module.exports = BroadcastConfig;


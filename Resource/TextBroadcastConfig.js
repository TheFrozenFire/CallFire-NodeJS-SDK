var util = require('util');
var BroadcastConfig = require('./BroadcastConfig');

var TextBroadcastConfig = function() {
    BroadcastConfig.apply(this, arguments);
}
util.inherits(TextBroadcastConfig, BroadcastConfig);
with({proto: TextBroadcastConfig.prototype}) {
    proto.types = [
        'TextBroadcastConfig',
        'BroadcastConfig'
    ]

    proto.message = null;
    proto.bigMessageStrategy = null;
    proto.id = null;
    proto.created = null;
    proto.fromNumber = null;
    proto.localTimeZoneRestriction = null;
    proto.retryConfig = null;
}

module.exports = TextBroadcastConfig;


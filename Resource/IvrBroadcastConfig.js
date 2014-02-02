var util = require('util');
var BroadcastConfig = require('./BroadcastConfig');

var IvrBroadcastConfig = function() {
    BroadcastConfig.apply(this, arguments);
}
util.inherits(IvrBroadcastConfig, BroadcastConfig);
module.exports = IvrBroadcastConfig;
with({proto: IvrBroadcastConfig.prototype}) {
    proto.types = [
        'IvrBroadcastConfig',
        'BroadcastConfig'
    ]

    proto.dialplanXml = null;
    proto.id = null;
    proto.created = null;
    proto.fromNumber = null;
    proto.localTimeZoneRestriction = null;
    proto.retryConfig = null;
}

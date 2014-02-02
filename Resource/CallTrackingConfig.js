var util = require('util');
var InboundConfig = require('./InboundConfig');

var CallTrackingConfig = function() {
    InboundConfig.apply(this, arguments);
}
util.inherits(CallTrackingConfig, InboundConfig);
with({proto: CallTrackingConfig.prototype}) {
    proto.types = [
        'CallTrackingConfig',
        'InboundConfig'
    ]

    proto.screen = null;
    proto.record = null;
    proto.introSoundId = null;
    proto.whisperSoundId = null;
    proto.transferNumber = null;
    proto.id = null;
}

module.exports = CallTrackingConfig;


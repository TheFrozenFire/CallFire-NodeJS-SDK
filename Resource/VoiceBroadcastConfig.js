var util = require('util');
var BroadcastConfig = require('./BroadcastConfig');

var VoiceBroadcastConfig = function() {
    BroadcastConfig.apply(this, arguments);
}
util.inherits(VoiceBroadcastConfig, BroadcastConfig);
module.exports = VoiceBroadcastConfig;
with({proto: VoiceBroadcastConfig.prototype}) {
    proto.types = [
        'VoiceBroadcastConfig',
        'BroadcastConfig'
    ]

    proto.answeringMachineConfig = null;
    proto.transferDigit = null;
    proto.transferNumber = null;
    proto.dncDigit = null;
    proto.maxActiveTransfers = null;
    proto.liveSoundText = null;
    proto.liveSoundId = null;
    proto.machineSoundText = null;
    proto.machineSoundId = null;
    proto.transferSoundText = null;
    proto.transferSoundId = null;
    proto.dncSoundText = null;
    proto.dncSoundId = null;
    proto.id = null;
    proto.created = null;
    proto.fromNumber = null;
    proto.localTimeZoneRestriction = null;
    proto.retryConfig = null;
}

(function() {
    'use strict';
    
    var CreateBroadcast = function() {
        
    };
    module.exports = CreateBroadcast;
    var proto = CreateBroadcast.prototype;
    
    proto.requestId = null;

    proto.name = null;

    proto.type = null;

    proto.from = null;

    proto.localRestrictBegin = null;

    proto.localRestrictEnd = null;

    proto.maxAttempts = null;

    proto.minutesBetweenAttempts = null;

    proto.retryResults = null;

    proto.answeringMachineConfig = null;

    proto.liveSoundText = null;

    proto.liveSoundId = null;

    proto.machineSoundText = null;

    proto.machineSoundId = null;

    proto.transferSoundText = null;

    proto.transferSoundId = null;

    proto.transferDigit = null;

    proto.transferNumber = null;

    proto.dncSoundText = null;

    proto.dncSoundId = null;

    proto.dncDigit = null;

    proto.maxActiveTransfers = null;

    proto.message = null;

    proto.bigMessageStrategy = null;

    proto.dialplanXml = null;

}) ();

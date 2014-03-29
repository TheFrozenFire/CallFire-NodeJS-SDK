(function() {
    'use strict';
    
    var SendText = function() {
        
    };
    module.exports = SendText;
    var proto = SendText.prototype;
    
    proto.requestId = null;

    proto.type = null;

    proto.broadcastName = null;

    proto.to = null;

    proto.scrubBroadcastDuplicates = null;

    proto.from = null;

    proto.localRestrictBegin = null;

    proto.localRestrictEnd = null;

    proto.maxAttempts = null;

    proto.minutesBetweenAttempts = null;

    proto.retryResults = null;

    proto.message = null;

    proto.bigMessageStrategy = null;

}) ();

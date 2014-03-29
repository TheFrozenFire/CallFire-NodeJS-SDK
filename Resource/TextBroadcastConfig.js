var util = require('util');
var BroadcastConfig = require('./BroadcastConfig');

(function() {
    'use strict';
    
    var TextBroadcastConfig = function() {
        BroadcastConfig.apply(this, arguments);
    };
    module.exports = TextBroadcastConfig;
    util.inherits(TextBroadcastConfig, BroadcastConfig);
    var proto = TextBroadcastConfig.prototype;
    
    proto.types = [
        'TextBroadcastConfig',
        'BroadcastConfig'
    ];

    proto.message = null;
    proto.bigMessageStrategy = null;
    proto.id = null;
    proto.created = null;
    proto.fromNumber = null;
    proto.localTimeZoneRestriction = null;
    proto.retryConfig = null;
}) ();

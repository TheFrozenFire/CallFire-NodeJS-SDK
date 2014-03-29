var util = require('util');
var BroadcastConfig = require('./BroadcastConfig');

(function() {
    'use strict';
    
    var IvrBroadcastConfig = function() {
        BroadcastConfig.apply(this, arguments);
    };
    module.exports = IvrBroadcastConfig;
    util.inherits(IvrBroadcastConfig, BroadcastConfig);
    var proto = IvrBroadcastConfig.prototype;
    
    proto.types = [
        'IvrBroadcastConfig',
        'BroadcastConfig'
    ];

    proto.dialplanXml = null;
    proto.id = null;
    proto.created = null;
    proto.fromNumber = null;
    proto.localTimeZoneRestriction = null;
    proto.retryConfig = null;
}) ();

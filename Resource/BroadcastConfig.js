var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var BroadcastConfig = function() {
        Resource.apply(this, arguments);
    };
    module.exports = BroadcastConfig;
    util.inherits(BroadcastConfig, Resource);
    var proto = BroadcastConfig.prototype;
    
    proto.types = [
        'BroadcastConfig'
    ];

    proto.id = null;
    proto.created = null;
    proto.fromNumber = null;
    proto.localTimeZoneRestriction = null;
    proto.retryConfig = null;
}) ();

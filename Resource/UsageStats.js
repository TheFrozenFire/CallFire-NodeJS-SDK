var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var UsageStats = function() {
        Resource.apply(this, arguments);
    };
    module.exports = UsageStats;
    util.inherits(UsageStats, Resource);
    var proto = UsageStats.prototype;
    
    proto.types = [
        'UsageStats'
    ];

    proto.duration = null;
    proto.billedDuration = null;
    proto.billedAmount = null;
    proto.attempts = null;
    proto.actions = null;
}) ();

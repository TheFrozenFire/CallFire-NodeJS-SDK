var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var BroadcastStats = function() {
        Resource.apply(this, arguments);
    };
    module.exports = BroadcastStats;
    util.inherits(BroadcastStats, Resource);
    var proto = BroadcastStats.prototype;
    
    proto.types = [
        'BroadcastStats'
    ];

    proto.usageStats = null;
    proto.resultStats = [];
    proto.actionStatistics = null;
}) ();

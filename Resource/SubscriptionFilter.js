var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var SubscriptionFilter = function() {
        Resource.apply(this, arguments);
    };
    module.exports = SubscriptionFilter;
    util.inherits(SubscriptionFilter, Resource);
    var proto = SubscriptionFilter.prototype;
    
    proto.types = [
        'SubscriptionFilter'
    ];

    proto.broadcastId = null;
    proto.batchId = null;
    proto.fromNumber = null;
    proto.toNumber = null;
    proto.inbound = null;
}) ();

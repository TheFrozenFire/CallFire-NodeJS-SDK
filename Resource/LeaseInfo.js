var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var LeaseInfo = function() {
        Resource.apply(this, arguments);
    };
    module.exports = LeaseInfo;
    util.inherits(LeaseInfo, Resource);
    var proto = LeaseInfo.prototype;
    
    proto.types = [
        'LeaseInfo'
    ];

    proto.leaseBegin = null;
    proto.leaseEnd = null;
    proto.autoRenew = null;
}) ();

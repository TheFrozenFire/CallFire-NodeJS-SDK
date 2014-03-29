var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var RetryConfig = function() {
        Resource.apply(this, arguments);
    };
    module.exports = RetryConfig;
    util.inherits(RetryConfig, Resource);
    var proto = RetryConfig.prototype;
    
    proto.types = [
        'RetryConfig'
    ];

    proto.maxAttempts = null;
    proto.minutesBetweenAttempts = null;
    proto.retryResults = null;
}) ();

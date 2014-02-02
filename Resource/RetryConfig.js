var util = require('util');
var Resource = require('../Resource');

var RetryConfig = function() {
    Resource.apply(this, arguments);
}
util.inherits(RetryConfig, Resource);
with({proto: RetryConfig.prototype}) {
    proto.types = [
        'RetryConfig'
    ]

    proto.maxAttempts = null;
    proto.minutesBetweenAttempts = null;
    proto.retryResults = null;
}

module.exports = RetryConfig;


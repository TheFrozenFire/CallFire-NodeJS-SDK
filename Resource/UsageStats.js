var util = require('util');
var Resource = require('../Resource');

var UsageStats = function() {
    Resource.apply(this, arguments);
}
util.inherits(UsageStats, Resource);
module.exports = UsageStats;
with({proto: UsageStats.prototype}) {
    proto.types = [
        'UsageStats'
    ]

    proto.duration = null;
    proto.billedDuration = null;
    proto.billedAmount = null;
    proto.attempts = null;
    proto.actions = null;
}

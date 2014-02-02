var util = require('util');
var Resource = require('../Resource');

var BroadcastStats = function() {
    Resource.apply(this, arguments);
}
util.inherits(BroadcastStats, Resource);
module.exports = BroadcastStats;
with({proto: BroadcastStats.prototype}) {
    proto.types = [
        'BroadcastStats'
    ]

    proto.usageStats = null;
    proto.resultStats = null;
    proto.actionStatistics = null;
}

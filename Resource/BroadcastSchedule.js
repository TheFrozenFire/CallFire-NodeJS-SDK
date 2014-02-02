var util = require('util');
var Resource = require('../Resource');

var BroadcastSchedule = function() {
    Resource.apply(this, arguments);
}
util.inherits(BroadcastSchedule, Resource);
with({proto: BroadcastSchedule.prototype}) {
    proto.types = [
        'BroadcastSchedule'
    ]

    proto.id = null;
    proto.startTimeOfDay = null;
    proto.stopTimeOfDay = null;
    proto.timeZone = null;
    proto.beginDate = null;
    proto.endDate = null;
    proto.daysOfWeek = null;
}

module.exports = BroadcastSchedule;


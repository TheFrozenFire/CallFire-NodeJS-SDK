var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var BroadcastSchedule = function() {
        Resource.apply(this, arguments);
    };
    module.exports = BroadcastSchedule;
    util.inherits(BroadcastSchedule, Resource);
    var proto = BroadcastSchedule.prototype;
    
    proto.types = [
        'BroadcastSchedule'
    ];

    proto.id = null;
    proto.startTimeOfDay = null;
    proto.stopTimeOfDay = null;
    proto.timeZone = null;
    proto.beginDate = null;
    proto.endDate = null;
    proto.daysOfWeek = null;
}) ();

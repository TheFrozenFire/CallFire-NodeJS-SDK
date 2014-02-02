var util = require('util');
var Resource = require('../Resource');

var LocalTimeZoneRestriction = function() {
    Resource.apply(this, arguments);
}
util.inherits(LocalTimeZoneRestriction, Resource);
with({proto: LocalTimeZoneRestriction.prototype}) {
    proto.types = [
        'LocalTimeZoneRestriction'
    ]

    proto.beginTime = null;
    proto.endTime = null;
}

module.exports = LocalTimeZoneRestriction;


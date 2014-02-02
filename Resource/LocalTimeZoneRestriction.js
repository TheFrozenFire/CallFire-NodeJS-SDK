var util = require('util');
var Resource = require('../Resource');

var LocalTimeZoneRestriction = function() {
    Resource.apply(this, arguments);
}
util.inherits(LocalTimeZoneRestriction, Resource);
module.exports = LocalTimeZoneRestriction;
with({proto: LocalTimeZoneRestriction.prototype}) {
    proto.types = [
        'LocalTimeZoneRestriction'
    ]

    proto.beginTime = null;
    proto.endTime = null;
}

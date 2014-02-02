var util = require('util');
var Resource = require('../Resource');

var Region = function() {
    Resource.apply(this, arguments);
}
util.inherits(Region, Resource);
with({proto: Region.prototype}) {
    proto.types = [
        'Region'
    ]

    proto.prefix = null;
    proto.city = null;
    proto.state = null;
    proto.zipcode = null;
    proto.country = null;
    proto.lata = null;
    proto.rateCenter = null;
    proto.latitude = null;
    proto.longitude = null;
    proto.timeZone = null;
}

module.exports = Region;


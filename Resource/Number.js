var util = require('util');
var Resource = require('../Resource');

var Number = function() {
    Resource.apply(this, arguments);
}
util.inherits(Number, Resource);
module.exports = Number;
with({proto: Number.prototype}) {
    proto.types = [
        'Number'
    ]

    proto.number = null;
    proto.nationalFormat = null;
    proto.tollFree = null;
    proto.status = null;
}

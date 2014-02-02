var util = require('util');
var Resource = require('../Resource');

var DaysOfWeek = function() {
    Resource.apply(this, arguments);
}
util.inherits(DaysOfWeek, Resource);
with({proto: DaysOfWeek.prototype}) {
    proto.types = [
        'DaysOfWeek'
    ]

}

module.exports = DaysOfWeek;


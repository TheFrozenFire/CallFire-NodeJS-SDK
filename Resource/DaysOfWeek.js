var util = require('util');
var Resource = require('../Resource');

var DaysOfWeek = function() {
    Resource.apply(this, arguments);
}
util.inherits(DaysOfWeek, Resource);
module.exports = DaysOfWeek;
with({proto: DaysOfWeek.prototype}) {
    proto.types = [
        'DaysOfWeek'
    ]

}

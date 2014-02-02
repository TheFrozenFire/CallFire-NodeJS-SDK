var util = require('util');
var Resource = require('../Resource');

var ToNumber = function() {
    Resource.apply(this, arguments);
}
util.inherits(ToNumber, Resource);
module.exports = ToNumber;
with({proto: ToNumber.prototype}) {
    proto.types = [
        'ToNumber'
    ]

}

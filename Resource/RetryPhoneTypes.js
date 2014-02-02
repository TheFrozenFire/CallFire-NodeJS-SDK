var util = require('util');
var Resource = require('../Resource');

var RetryPhoneTypes = function() {
    Resource.apply(this, arguments);
}
util.inherits(RetryPhoneTypes, Resource);
module.exports = RetryPhoneTypes;
with({proto: RetryPhoneTypes.prototype}) {
    proto.types = [
        'RetryPhoneTypes'
    ]

}

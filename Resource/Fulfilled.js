var util = require('util');
var Resource = require('../Resource');

var Fulfilled = function() {
    Resource.apply(this, arguments);
}
util.inherits(Fulfilled, Resource);
with({proto: Fulfilled.prototype}) {
    proto.types = [
        'Fulfilled'
    ]

}

module.exports = Fulfilled;


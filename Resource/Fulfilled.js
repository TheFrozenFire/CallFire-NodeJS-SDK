var util = require('util');
var Resource = require('../Resource');

var Fulfilled = function() {
    Resource.apply(this, arguments);
}
util.inherits(Fulfilled, Resource);
module.exports = Fulfilled;
with({proto: Fulfilled.prototype}) {
    proto.types = [
        'Fulfilled'
    ]

}

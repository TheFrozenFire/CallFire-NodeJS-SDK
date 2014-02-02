var util = require('util');
var Resource = require('../Resource');

var NumberOrderItem = function() {
    Resource.apply(this, arguments);
}
util.inherits(NumberOrderItem, Resource);
module.exports = NumberOrderItem;
with({proto: NumberOrderItem.prototype}) {
    proto.types = [
        'NumberOrderItem'
    ]

    proto.ordered = null;
    proto.unitCost = null;
    proto.fulfilled = null;
}

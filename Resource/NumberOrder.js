var util = require('util');
var Resource = require('../Resource');

var NumberOrder = function() {
    Resource.apply(this, arguments);
}
util.inherits(NumberOrder, Resource);
module.exports = NumberOrder;
with({proto: NumberOrder.prototype}) {
    proto.types = [
        'NumberOrder'
    ]

    proto.id = null;
    proto.status = null;
    proto.created = null;
    proto.totalCost = null;
    proto.localNumbers = null;
    proto.tollFreeNumbers = null;
    proto.keywords = null;
}

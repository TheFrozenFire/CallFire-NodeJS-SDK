var util = require('util');
var Resource = require('../Resource');

var TransferNumber = function() {
    Resource.apply(this, arguments);
}
util.inherits(TransferNumber, Resource);
with({proto: TransferNumber.prototype}) {
    proto.types = [
        'TransferNumber'
    ]

}

module.exports = TransferNumber;


var util = require('util');
var Resource = require('../Resource');

var TransferNumber = function() {
    Resource.apply(this, arguments);
}
util.inherits(TransferNumber, Resource);
module.exports = TransferNumber;
with({proto: TransferNumber.prototype}) {
    proto.types = [
        'TransferNumber'
    ]

}

var util = require('util');
var Resource = require('../Resource');

var LeaseInfo = function() {
    Resource.apply(this, arguments);
}
util.inherits(LeaseInfo, Resource);
module.exports = LeaseInfo;
with({proto: LeaseInfo.prototype}) {
    proto.types = [
        'LeaseInfo'
    ]

    proto.leaseBegin = null;
    proto.leaseEnd = null;
    proto.autoRenew = null;
}

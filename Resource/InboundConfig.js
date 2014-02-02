var util = require('util');
var Resource = require('../Resource');

var InboundConfig = function() {
    Resource.apply(this, arguments);
}
util.inherits(InboundConfig, Resource);
module.exports = InboundConfig;
with({proto: InboundConfig.prototype}) {
    proto.types = [
        'InboundConfig'
    ]

    proto.id = null;
}

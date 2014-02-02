var util = require('util');
var Resource = require('../Resource');

var InboundConfig = function() {
    Resource.apply(this, arguments);
}
util.inherits(InboundConfig, Resource);
with({proto: InboundConfig.prototype}) {
    proto.types = [
        'InboundConfig'
    ]

    proto.id = null;
}

module.exports = InboundConfig;


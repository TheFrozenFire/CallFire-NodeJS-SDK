var util = require('util');
var Resource = require('../Resource');

var InboundCallConfiguration = function() {
    Resource.apply(this, arguments);
}
util.inherits(InboundCallConfiguration, Resource);
with({proto: InboundCallConfiguration.prototype}) {
    proto.types = [
        'InboundCallConfiguration'
    ]

}

module.exports = InboundCallConfiguration;


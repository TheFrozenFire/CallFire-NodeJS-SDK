var util = require('util');
var Resource = require('../Resource');

var InboundCallConfiguration = function() {
    Resource.apply(this, arguments);
}
util.inherits(InboundCallConfiguration, Resource);
module.exports = InboundCallConfiguration;
with({proto: InboundCallConfiguration.prototype}) {
    proto.types = [
        'InboundCallConfiguration'
    ]

}

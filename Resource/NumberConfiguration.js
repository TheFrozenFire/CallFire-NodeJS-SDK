var util = require('util');
var Resource = require('../Resource');

var NumberConfiguration = function() {
    Resource.apply(this, arguments);
}
util.inherits(NumberConfiguration, Resource);
module.exports = NumberConfiguration;
with({proto: NumberConfiguration.prototype}) {
    proto.types = [
        'NumberConfiguration'
    ]

    proto.callFeature = null;
    proto.textFeature = null;
    proto.inboundCallConfigurationType = null;
    proto.inboundCallConfiguration = null;
}

var util = require('util');
var InboundConfig = require('./InboundConfig');

var IvrInboundConfig = function() {
    InboundConfig.apply(this, arguments);
}
util.inherits(IvrInboundConfig, InboundConfig);
with({proto: IvrInboundConfig.prototype}) {
    proto.types = [
        'IvrInboundConfig',
        'InboundConfig'
    ]

    proto.dialplanXml = null;
    proto.id = null;
}

module.exports = IvrInboundConfig;


var util = require('util');
var InboundConfig = require('./InboundConfig');

(function() {
    'use strict';
    
    var IvrInboundConfig = function() {
        InboundConfig.apply(this, arguments);
    };
    module.exports = IvrInboundConfig;
    util.inherits(IvrInboundConfig, InboundConfig);
    var proto = IvrInboundConfig.prototype;
    
    proto.types = [
        'IvrInboundConfig',
        'InboundConfig'
    ];

    proto.dialplanXml = null;
    proto.id = null;
}) ();

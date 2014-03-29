var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var InboundConfig = function() {
        Resource.apply(this, arguments);
    };
    module.exports = InboundConfig;
    util.inherits(InboundConfig, Resource);
    var proto = InboundConfig.prototype;
    
    proto.types = [
        'InboundConfig'
    ];

    proto.id = null;
}) ();

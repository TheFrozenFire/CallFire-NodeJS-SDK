var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var NumberConfiguration = function() {
        Resource.apply(this, arguments);
    };
    module.exports = NumberConfiguration;
    util.inherits(NumberConfiguration, Resource);
    var proto = NumberConfiguration.prototype;
    
    proto.types = [
        'NumberConfiguration'
    ];

    proto.callFeature = null;
    proto.textFeature = null;
    proto.inboundCallConfigurationType = null;
    proto.inboundCallConfiguration = null;
}) ();

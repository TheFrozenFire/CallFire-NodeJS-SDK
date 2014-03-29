var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var InboundCallConfiguration = function() {
        Resource.apply(this, arguments);
    };
    module.exports = InboundCallConfiguration;
    util.inherits(InboundCallConfiguration, Resource);
    var proto = InboundCallConfiguration.prototype;
    
    proto.types = [
        'InboundCallConfiguration'
    ];

}) ();

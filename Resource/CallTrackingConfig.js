var util = require('util');
var InboundConfig = require('./InboundConfig');

(function() {
    'use strict';
    
    var CallTrackingConfig = function() {
        InboundConfig.apply(this, arguments);
    };
    module.exports = CallTrackingConfig;
    util.inherits(CallTrackingConfig, InboundConfig);
    var proto = CallTrackingConfig.prototype;
    
    proto.types = [
        'CallTrackingConfig',
        'InboundConfig'
    ];

    proto.screen = null;
    proto.record = null;
    proto.introSoundId = null;
    proto.whisperSoundId = null;
    proto.transferNumber = null;
    proto.id = null;
}) ();

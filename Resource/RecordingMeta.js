var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var RecordingMeta = function() {
        Resource.apply(this, arguments);
    };
    module.exports = RecordingMeta;
    util.inherits(RecordingMeta, Resource);
    var proto = RecordingMeta.prototype;
    
    proto.types = [
        'RecordingMeta'
    ];

    proto.id = null;
    proto.name = null;
    proto.created = null;
    proto.lengthInSeconds = null;
}) ();

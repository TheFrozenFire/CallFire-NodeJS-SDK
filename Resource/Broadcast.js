var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var Broadcast = function() {
        Resource.apply(this, arguments);
    };
    module.exports = Broadcast;
    util.inherits(Broadcast, Resource);
    var proto = Broadcast.prototype;
    
    proto.types = [
        'Broadcast'
    ];

    proto.id = null;
    proto.name = null;
    proto.status = null;
    proto.lastModified = null;
    proto.type = null;
    proto.voiceBroadcastConfig = null;
    proto.textBroadcastConfig = null;
    proto.ivrBroadcastConfig = null;
}) ();

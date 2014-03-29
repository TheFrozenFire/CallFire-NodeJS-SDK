var util = require('util');
var Action = require('./Action');

(function() {
    'use strict';
    
    var Text = function() {
        Action.apply(this, arguments);
    };
    module.exports = Text;
    util.inherits(Text, Action);
    var proto = Text.prototype;
    
    proto.types = [
        'Text',
        'Action'
    ];

    proto.message = null;
    proto.textRecords = [];
    proto.id = null;
    proto.fromNumber = null;
    proto.toNumber = null;
    proto.state = null;
    proto.batchId = null;
    proto.broadcastId = null;
    proto.contactId = null;
    proto.inbound = null;
    proto.created = null;
    proto.modified = null;
    proto.finalResult = null;
}) ();

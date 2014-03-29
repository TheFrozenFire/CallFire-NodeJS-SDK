var util = require('util');
var Action = require('./Action');

(function() {
    'use strict';
    
    var Call = function() {
        Action.apply(this, arguments);
    };
    module.exports = Call;
    util.inherits(Call, Action);
    var proto = Call.prototype;
    
    proto.types = [
        'Call',
        'Action'
    ];

    proto.callRecords = [];
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

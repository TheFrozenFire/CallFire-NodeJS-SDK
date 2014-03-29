var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var Action = function() {
        Resource.apply(this, arguments);
    };
    module.exports = Action;
    util.inherits(Action, Resource);
    var proto = Action.prototype;
    
    proto.types = [
        'Action'
    ];

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

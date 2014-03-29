var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var ContactBatch = function() {
        Resource.apply(this, arguments);
    };
    module.exports = ContactBatch;
    util.inherits(ContactBatch, Resource);
    var proto = ContactBatch.prototype;
    
    proto.types = [
        'ContactBatch'
    ];

    proto.id = null;
    proto.name = null;
    proto.status = null;
    proto.broadcastId = null;
    proto.created = null;
    proto.size = null;
    proto.remaining = null;
}) ();

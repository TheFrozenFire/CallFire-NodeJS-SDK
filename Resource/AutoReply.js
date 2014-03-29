var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var AutoReply = function() {
        Resource.apply(this, arguments);
    };
    module.exports = AutoReply;
    util.inherits(AutoReply, Resource);
    var proto = AutoReply.prototype;
    
    proto.types = [
        'AutoReply'
    ];

    proto.id = null;
    proto.number = null;
    proto.keyword = null;
    proto.match = null;
    proto.message = null;
}) ();

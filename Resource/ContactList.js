var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var ContactList = function() {
        Resource.apply(this, arguments);
    };
    module.exports = ContactList;
    util.inherits(ContactList, Resource);
    var proto = ContactList.prototype;
    
    proto.types = [
        'ContactList'
    ];

    proto.id = null;
    proto.name = null;
    proto.size = null;
    proto.created = null;
}) ();

var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var Contact = function() {
        Resource.apply(this, arguments);
    };
    module.exports = Contact;
    util.inherits(Contact, Resource);
    var proto = Contact.prototype;
    
    proto.types = [
        'Contact'
    ];

    proto.id = null;
    proto.firstName = null;
    proto.lastName = null;
    proto.zipcode = null;
    proto.homePhone = null;
    proto.workPhone = null;
    proto.mobilePhone = null;
    proto.attributes = [];
}) ();

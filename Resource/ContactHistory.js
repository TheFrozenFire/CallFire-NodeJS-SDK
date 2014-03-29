var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var ContactHistory = function() {
        Resource.apply(this, arguments);
    };
    module.exports = ContactHistory;
    util.inherits(ContactHistory, Resource);
    var proto = ContactHistory.prototype;
    
    proto.types = [
        'ContactHistory'
    ];

}) ();

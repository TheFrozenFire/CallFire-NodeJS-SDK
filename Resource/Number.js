var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var Number = function() {
        Resource.apply(this, arguments);
    };
    module.exports = Number;
    util.inherits(Number, Resource);
    var proto = Number.prototype;
    
    proto.types = [
        'Number'
    ];

    proto.number = null;
    proto.nationalFormat = null;
    proto.tollFree = null;
    proto.status = null;
}) ();

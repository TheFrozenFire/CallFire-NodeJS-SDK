var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var ToNumber = function() {
        Resource.apply(this, arguments);
    };
    module.exports = ToNumber;
    util.inherits(ToNumber, Resource);
    var proto = ToNumber.prototype;
    
    proto.types = [
        'ToNumber'
    ];

}) ();

var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var Fulfilled = function() {
        Resource.apply(this, arguments);
    };
    module.exports = Fulfilled;
    util.inherits(Fulfilled, Resource);
    var proto = Fulfilled.prototype;
    
    proto.types = [
        'Fulfilled'
    ];

}) ();

var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var DaysOfWeek = function() {
        Resource.apply(this, arguments);
    };
    module.exports = DaysOfWeek;
    util.inherits(DaysOfWeek, Resource);
    var proto = DaysOfWeek.prototype;
    
    proto.types = [
        'DaysOfWeek'
    ];

}) ();

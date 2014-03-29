var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var LocalTimeZoneRestriction = function() {
        Resource.apply(this, arguments);
    };
    module.exports = LocalTimeZoneRestriction;
    util.inherits(LocalTimeZoneRestriction, Resource);
    var proto = LocalTimeZoneRestriction.prototype;
    
    proto.types = [
        'LocalTimeZoneRestriction'
    ];

    proto.beginTime = null;
    proto.endTime = null;
}) ();

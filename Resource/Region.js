var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var Region = function() {
        Resource.apply(this, arguments);
    };
    module.exports = Region;
    util.inherits(Region, Resource);
    var proto = Region.prototype;
    
    proto.types = [
        'Region'
    ];

    proto.prefix = null;
    proto.city = null;
    proto.state = null;
    proto.zipcode = null;
    proto.country = null;
    proto.lata = null;
    proto.rateCenter = null;
    proto.latitude = null;
    proto.longitude = null;
    proto.timeZone = null;
}) ();

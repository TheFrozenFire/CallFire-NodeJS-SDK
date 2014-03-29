var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var NumberOrderItem = function() {
        Resource.apply(this, arguments);
    };
    module.exports = NumberOrderItem;
    util.inherits(NumberOrderItem, Resource);
    var proto = NumberOrderItem.prototype;
    
    proto.types = [
        'NumberOrderItem'
    ];

    proto.ordered = null;
    proto.unitCost = null;
    proto.fulfilled = null;
}) ();

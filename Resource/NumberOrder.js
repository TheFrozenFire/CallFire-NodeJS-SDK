var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var NumberOrder = function() {
        Resource.apply(this, arguments);
    };
    module.exports = NumberOrder;
    util.inherits(NumberOrder, Resource);
    var proto = NumberOrder.prototype;
    
    proto.types = [
        'NumberOrder'
    ];

    proto.id = null;
    proto.status = null;
    proto.created = null;
    proto.totalCost = null;
    proto.localNumbers = null;
    proto.tollFreeNumbers = null;
    proto.keywords = null;
}) ();

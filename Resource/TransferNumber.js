var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var TransferNumber = function() {
        Resource.apply(this, arguments);
    };
    module.exports = TransferNumber;
    util.inherits(TransferNumber, Resource);
    var proto = TransferNumber.prototype;
    
    proto.types = [
        'TransferNumber'
    ];

}) ();

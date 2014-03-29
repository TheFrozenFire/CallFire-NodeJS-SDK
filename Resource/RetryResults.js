var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var RetryResults = function() {
        Resource.apply(this, arguments);
    };
    module.exports = RetryResults;
    util.inherits(RetryResults, Resource);
    var proto = RetryResults.prototype;
    
    proto.types = [
        'RetryResults'
    ];

}) ();

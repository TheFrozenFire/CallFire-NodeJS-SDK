var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var ResultStat = function() {
        Resource.apply(this, arguments);
    };
    module.exports = ResultStat;
    util.inherits(ResultStat, Resource);
    var proto = ResultStat.prototype;
    
    proto.types = [
        'ResultStat'
    ];

    proto.result = null;
    proto.attempts = null;
    proto.actions = null;
}) ();

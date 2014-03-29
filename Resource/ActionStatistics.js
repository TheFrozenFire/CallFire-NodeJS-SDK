var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var ActionStatistics = function() {
        Resource.apply(this, arguments);
    };
    module.exports = ActionStatistics;
    util.inherits(ActionStatistics, Resource);
    var proto = ActionStatistics.prototype;
    
    proto.types = [
        'ActionStatistics'
    ];

    proto.unattempted = null;
    proto.retryWait = null;
    proto.finished = null;
}) ();

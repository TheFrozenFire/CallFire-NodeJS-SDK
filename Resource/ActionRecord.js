var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var ActionRecord = function() {
        Resource.apply(this, arguments);
    };
    module.exports = ActionRecord;
    util.inherits(ActionRecord, Resource);
    var proto = ActionRecord.prototype;
    
    proto.types = [
        'ActionRecord'
    ];

    proto.id = null;
    proto.result = null;
    proto.finishTime = null;
    proto.billedAmount = null;
    proto.questionResponses = [];
}) ();

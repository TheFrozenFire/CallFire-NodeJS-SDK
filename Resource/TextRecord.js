var util = require('util');
var ActionRecord = require('./ActionRecord');

(function() {
    'use strict';
    
    var TextRecord = function() {
        ActionRecord.apply(this, arguments);
    };
    module.exports = TextRecord;
    util.inherits(TextRecord, ActionRecord);
    var proto = TextRecord.prototype;
    
    proto.types = [
        'TextRecord',
        'ActionRecord'
    ];

    proto.message = null;
    proto.id = null;
    proto.result = null;
    proto.finishTime = null;
    proto.billedAmount = null;
    proto.questionResponses = [];
}) ();

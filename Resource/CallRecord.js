var util = require('util');
var ActionRecord = require('./ActionRecord');

(function() {
    'use strict';
    
    var CallRecord = function() {
        ActionRecord.apply(this, arguments);
    };
    module.exports = CallRecord;
    util.inherits(CallRecord, ActionRecord);
    var proto = CallRecord.prototype;
    
    proto.types = [
        'CallRecord',
        'ActionRecord'
    ];

    proto.originateTime = null;
    proto.answerTime = null;
    proto.duration = null;
    proto.recordingMetas = [];
    proto.id = null;
    proto.result = null;
    proto.finishTime = null;
    proto.billedAmount = null;
    proto.questionResponses = [];
}) ();

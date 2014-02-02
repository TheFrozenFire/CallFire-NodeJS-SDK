var util = require('util');
var ActionRecord = require('./ActionRecord');

var CallRecord = function() {
    ActionRecord.apply(this, arguments);
}
util.inherits(CallRecord, ActionRecord);
with({proto: CallRecord.prototype}) {
    proto.types = [
        'CallRecord',
        'ActionRecord'
    ]

    proto.originateTime = null;
    proto.answerTime = null;
    proto.duration = null;
    proto.recordingMetas = null;
    proto.id = null;
    proto.result = null;
    proto.finishTime = null;
    proto.billedAmount = null;
    proto.questionResponses = null;
}

module.exports = CallRecord;


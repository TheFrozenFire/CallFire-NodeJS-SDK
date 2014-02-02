var util = require('util');
var ActionRecord = require('./ActionRecord');

var TextRecord = function() {
    ActionRecord.apply(this, arguments);
}
util.inherits(TextRecord, ActionRecord);
module.exports = TextRecord;
with({proto: TextRecord.prototype}) {
    proto.types = [
        'TextRecord',
        'ActionRecord'
    ]

    proto.message = null;
    proto.id = null;
    proto.result = null;
    proto.finishTime = null;
    proto.billedAmount = null;
    proto.questionResponses = null;
}

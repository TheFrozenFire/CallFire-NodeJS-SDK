var util = require('util');
var Action = require('./Action');

var Text = function() {
    Action.apply(this, arguments);
}
util.inherits(Text, Action);
with({proto: Text.prototype}) {
    proto.types = [
        'Text',
        'Action'
    ]

    proto.message = null;
    proto.textRecords = null;
    proto.id = null;
    proto.fromNumber = null;
    proto.toNumber = null;
    proto.state = null;
    proto.batchId = null;
    proto.broadcastId = null;
    proto.contactId = null;
    proto.inbound = null;
    proto.created = null;
    proto.modified = null;
    proto.finalResult = null;
}

module.exports = Text;


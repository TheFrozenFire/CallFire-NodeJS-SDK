var util = require('util');
var Resource = require('../Resource');

var Action = function() {
    Resource.apply(this, arguments);
}
util.inherits(Action, Resource);
module.exports = Action;
with({proto: Action.prototype}) {
    proto.types = [
        'Action'
    ]

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

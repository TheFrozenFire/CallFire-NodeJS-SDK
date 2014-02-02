var util = require('util');
var Resource = require('../Resource');

var Broadcast = function() {
    Resource.apply(this, arguments);
}
util.inherits(Broadcast, Resource);
module.exports = Broadcast;
with({proto: Broadcast.prototype}) {
    proto.types = [
        'Broadcast'
    ]

    proto.id = null;
    proto.name = null;
    proto.status = null;
    proto.lastModified = null;
    proto.type = null;
    proto.voiceBroadcastConfig = null;
    proto.textBroadcastConfig = null;
    proto.ivrBroadcastConfig = null;
}

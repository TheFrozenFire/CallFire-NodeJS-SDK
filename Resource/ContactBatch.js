var util = require('util');
var Resource = require('../Resource');

var ContactBatch = function() {
    Resource.apply(this, arguments);
}
util.inherits(ContactBatch, Resource);
module.exports = ContactBatch;
with({proto: ContactBatch.prototype}) {
    proto.types = [
        'ContactBatch'
    ]

    proto.id = null;
    proto.name = null;
    proto.status = null;
    proto.broadcastId = null;
    proto.created = null;
    proto.size = null;
    proto.remaining = null;
}

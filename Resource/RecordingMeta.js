var util = require('util');
var Resource = require('../Resource');

var RecordingMeta = function() {
    Resource.apply(this, arguments);
}
util.inherits(RecordingMeta, Resource);
module.exports = RecordingMeta;
with({proto: RecordingMeta.prototype}) {
    proto.types = [
        'RecordingMeta'
    ]

    proto.id = null;
    proto.name = null;
    proto.created = null;
    proto.lengthInSeconds = null;
    proto.link = null;
}

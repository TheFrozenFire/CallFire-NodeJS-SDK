var util = require('util');
var Resource = require('../Resource');

var RecordingMeta = function() {
    Resource.apply(this, arguments);
}
util.inherits(RecordingMeta, Resource);
with({proto: RecordingMeta.prototype}) {
    proto.types = [
        'RecordingMeta'
    ]

    proto.id = null;
    proto.name = null;
    proto.created = null;
    proto.lengthInSeconds = null;
}

module.exports = RecordingMeta;


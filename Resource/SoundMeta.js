var util = require('util');
var Resource = require('../Resource');

var SoundMeta = function() {
    Resource.apply(this, arguments);
}
util.inherits(SoundMeta, Resource);
with({proto: SoundMeta.prototype}) {
    proto.types = [
        'SoundMeta'
    ]

    proto.id = null;
    proto.status = null;
    proto.name = null;
    proto.created = null;
    proto.lengthInSeconds = null;
}

module.exports = SoundMeta;


var util = require('util');
var Resource = require('../Resource');

var AutoReply = function() {
    Resource.apply(this, arguments);
}
util.inherits(AutoReply, Resource);
module.exports = AutoReply;
with({proto: AutoReply.prototype}) {
    proto.types = [
        'AutoReply'
    ]

    proto.id = null;
    proto.number = null;
    proto.keyword = null;
    proto.match = null;
    proto.message = null;
}

var util = require('util');
var Resource = require('../Resource');

var Keyword = function() {
    Resource.apply(this, arguments);
}
util.inherits(Keyword, Resource);
module.exports = Keyword;
with({proto: Keyword.prototype}) {
    proto.types = [
        'Keyword'
    ]

    proto.shortCode = null;
    proto.keyword = null;
    proto.status = null;
}

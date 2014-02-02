var util = require('util');
var Resource = require('../Resource');

var ContactHistory = function() {
    Resource.apply(this, arguments);
}
util.inherits(ContactHistory, Resource);
module.exports = ContactHistory;
with({proto: ContactHistory.prototype}) {
    proto.types = [
        'ContactHistory'
    ]

}

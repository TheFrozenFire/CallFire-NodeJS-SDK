var util = require('util');
var Resource = require('../Resource');

var Label = function() {
    Resource.apply(this, arguments);
}
util.inherits(Label, Resource);
module.exports = Label;
with({proto: Label.prototype}) {
    proto.types = [
        'Label'
    ]

    proto.name = null;
}

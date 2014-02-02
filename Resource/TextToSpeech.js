var util = require('util');
var Resource = require('../Resource');

var TextToSpeech = function() {
    Resource.apply(this, arguments);
}
util.inherits(TextToSpeech, Resource);
module.exports = TextToSpeech;
with({proto: TextToSpeech.prototype}) {
    proto.types = [
        'TextToSpeech'
    ]

}

var util = require('util');
var Resource = require('../Resource');

var TextToSpeech = function() {
    Resource.apply(this, arguments);
}
util.inherits(TextToSpeech, Resource);
with({proto: TextToSpeech.prototype}) {
    proto.types = [
        'TextToSpeech'
    ]

}

module.exports = TextToSpeech;


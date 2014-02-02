var util = require('util');
var Resource = require('../Resource');

var QuestionResponse = function() {
    Resource.apply(this, arguments);
}
util.inherits(QuestionResponse, Resource);
with({proto: QuestionResponse.prototype}) {
    proto.types = [
        'QuestionResponse'
    ]

    proto.question = null;
    proto.response = null;
}

module.exports = QuestionResponse;


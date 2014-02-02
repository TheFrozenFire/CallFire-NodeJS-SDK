var util = require('util');
var Resource = require('../Resource');

var RetryResults = function() {
    Resource.apply(this, arguments);
}
util.inherits(RetryResults, Resource);
with({proto: RetryResults.prototype}) {
    proto.types = [
        'RetryResults'
    ]

}

module.exports = RetryResults;


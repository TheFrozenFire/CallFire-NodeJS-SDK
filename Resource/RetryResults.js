var util = require('util');
var Resource = require('../Resource');

var RetryResults = function() {
    Resource.apply(this, arguments);
}
util.inherits(RetryResults, Resource);
module.exports = RetryResults;
with({proto: RetryResults.prototype}) {
    proto.types = [
        'RetryResults'
    ]

}

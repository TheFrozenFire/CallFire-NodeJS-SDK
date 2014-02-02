var util = require('util');
var Resource = require('../Resource');

var ResultStat = function() {
    Resource.apply(this, arguments);
}
util.inherits(ResultStat, Resource);
with({proto: ResultStat.prototype}) {
    proto.types = [
        'ResultStat'
    ]

    proto.result = null;
    proto.attempts = null;
    proto.actions = null;
}

module.exports = ResultStat;


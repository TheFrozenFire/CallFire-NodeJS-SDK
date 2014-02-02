var util = require('util');
var Resource = require('../Resource');

var ActionStatistics = function() {
    Resource.apply(this, arguments);
}
util.inherits(ActionStatistics, Resource);
module.exports = ActionStatistics;
with({proto: ActionStatistics.prototype}) {
    proto.types = [
        'ActionStatistics'
    ]

    proto.unattempted = null;
    proto.retryWait = null;
    proto.finished = null;
}

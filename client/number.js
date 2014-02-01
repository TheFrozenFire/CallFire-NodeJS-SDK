var client = require('../client'),
    util = require('util');

var number = function() {
    client.apply(this, arguments);
}
util.inherits(number, client);
with({proto: number.prototype}) {
    proto.get_number = function(username, password, number, callback) {
        
    }
}

module.exports = number;

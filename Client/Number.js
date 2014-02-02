var Client = require('../Client'),
    util = require('util');

var Number = function() {
    Client.apply(this, arguments);
}
util.inherits(Number, Client);
with({proto: Number.prototype}) {
    proto.get_number = function(username, password, number, callback) {
        
    }
}

module.exports = Number;

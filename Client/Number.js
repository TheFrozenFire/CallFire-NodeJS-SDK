var Client = require('../Client'),
    util = require('util');

var Number = function() {
    Client.apply(this, arguments);
}
util.inherits(Number, Client);
with({proto: Number.prototype}) {
    proto.get_number = function(number, callback) {
        var uri = this.get_uri('/number/%s', number);
        return this.get(uri, {}, callback);
    }
}

module.exports = Number;

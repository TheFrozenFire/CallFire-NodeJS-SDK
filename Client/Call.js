var Client = require('../Client'),
    util = require('util');

var Call = function() {
    Client.apply(this, arguments);
}
util.inherits(Call, Client);
with({proto: Call.prototype}) {
    
}

module.exports = Call;

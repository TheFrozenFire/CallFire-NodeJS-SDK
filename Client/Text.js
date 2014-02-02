var Client = require('../Client'),
    util = require('util');

var Text = function() {
    Client.apply(this, arguments);
}
util.inherits(Text, Client);
with({proto: Text.prototype}) {
    
}

module.exports = Text;

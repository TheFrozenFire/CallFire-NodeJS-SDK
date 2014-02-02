var Client = require('../Client'),
    util = require('util');

var Label = function() {
    Client.apply(this, arguments);
}
util.inherits(Label, Client);
with({proto: Label.prototype}) {
    
}

module.exports = Label;

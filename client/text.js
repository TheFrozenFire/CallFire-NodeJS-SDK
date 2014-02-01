var client = require('../client'),
    util = require('util');

var text = function() {
    client.apply(this, arguments);
}
util.inherits(text, client);
with({proto: text.prototype}) {
    
}

module.exports = text;

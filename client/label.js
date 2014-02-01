var client = require('../client'),
    util = require('util');

var label = function() {
    client.apply(this, arguments);
}
util.inherits(label, client);
with({proto: label.prototype}) {
    
}

module.exports = label;

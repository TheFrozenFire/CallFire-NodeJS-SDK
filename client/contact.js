var client = require('../client'),
    util = require('util');

var contact = function() {
    client.apply(this, arguments);
}
util.inherits(contact, client);
with({proto: contact.prototype}) {
    
}

module.exports = contact;

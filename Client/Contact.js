var Client = require('../Client'),
    util = require('util');

var Contact = function() {
    Client.apply(this, arguments);
}
util.inherits(Contact, Client);
with({proto: Contact.prototype}) {
    
}

module.exports = Contact;

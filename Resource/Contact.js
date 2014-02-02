var util = require('util');
var Resource = require('../Resource');

var Contact = function() {
    Resource.apply(this, arguments);
}
util.inherits(Contact, Resource);
module.exports = Contact;
with({proto: Contact.prototype}) {
    proto.types = [
        'Contact'
    ]

    proto.id = null;
    proto.firstName = null;
    proto.lastName = null;
    proto.zipcode = null;
    proto.homePhone = null;
    proto.workPhone = null;
    proto.mobilePhone = null;
    proto.externalId = null;
    proto.externalSystem = null;
    proto.attributes = [];
}

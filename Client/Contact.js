var Client = require('../Client'),
    util = require('util');

var Contact = function() {
    Client.apply(this, arguments);
}
util.inherits(Contact, Client);
module.exports = Contact;
with({proto: Contact.prototype}) {
    proto.QueryContacts = function(QueryContacts, callback) {
        var uri = this.get_uri('/contact');
        return this.get(uri, QueryContacts, callback);
    }

    proto.UpdateContacts = function(Id, callback) {
        var uri = this.get_uri('/contact', Id);
        return this.put(uri, {}, callback);
    }

    proto.RemoveContacts = function(RemoveContacts, callback) {
        var uri = this.get_uri('/contact');
        return this.delete(uri, RemoveContacts, callback);
    }

    proto.GetContact = function(Id, callback) {
        var uri = this.get_uri('/contact/%s', Id);
        return this.get(uri, {}, callback);
    }

    proto.GetContactHistory = function(ContactId, GetContactHistory, callback) {
        var uri = this.get_uri('/contact/%s/history', ContactId);
        return this.get(uri, GetContactHistory, callback);
    }

    proto.CreateContactList = function(CreateContactList, callback) {
        var uri = this.get_uri('/contact/list');
        return this.post(uri, CreateContactList, callback);
    }

    proto.QueryContactLists = function(QueryContactLists, callback) {
        var uri = this.get_uri('/contact/list');
        return this.get(uri, QueryContactLists, callback);
    }

    proto.DeleteContactList = function(Id, callback) {
        var uri = this.get_uri('/contact/list/%s', Id);
        return this.delete(uri, {}, callback);
    }

    proto.AddContactsToList = function(ContactListId, AddContactsToList, callback) {
        var uri = this.get_uri('/contact/list/%s/add', ContactListId);
        return this.post(uri, AddContactsToList, callback);
    }

    proto.RemoveContactsFromList = function(ContactListId, RemoveContactsFromList, callback) {
        var uri = this.get_uri('/contact/list/%s/remove', ContactListId);
        return this.post(uri, RemoveContactsFromList, callback);
    }

}

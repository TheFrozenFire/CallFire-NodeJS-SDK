var Client = require('../Client'),
    util = require('util');

var Subscription = function() {
    Client.apply(this, arguments);
}
util.inherits(Subscription, Client);
module.exports = Subscription;
with({proto: Subscription.prototype}) {
    proto.CreateSubscription = function(CreateSubscription, callback) {
        var uri = this.get_uri('/subscription');
        return this.post(uri, CreateSubscription, callback);
    }

    proto.QuerySubscriptions = function(QuerySubscriptions, callback) {
        var uri = this.get_uri('/subscription');
        return this.get(uri, QuerySubscriptions, callback);
    }

    proto.GetSubscription = function(Id, callback) {
        var uri = this.get_uri('/subscription/%s', Id);
        return this.get(uri, {}, callback);
    }

    proto.UpdateSubscription = function(Id, UpdateSubscription, callback) {
        var uri = this.get_uri('/subscription/%s', Id);
        return this.put(uri, UpdateSubscription, callback);
    }

    proto.DeleteSubscription = function(Id, callback) {
        var uri = this.get_uri('/subscription/%s', Id);
        return this.delete(uri, {}, callback);
    }

}

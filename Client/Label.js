var Client = require('../Client'),
    util = require('util');

var Label = function() {
    Client.apply(this, arguments);
}
util.inherits(Label, Client);
module.exports = Label;
with({proto: Label.prototype}) {
    proto.DeleteLabel = function(DeleteLabel, callback) {
        var uri = this.get_uri('/label');
        return this.delete(uri, DeleteLabel, callback);
    }

    proto.QueryLabels = function(QueryLabels, callback) {
        var uri = this.get_uri('/label');
        return this.get(uri, QueryLabels, callback);
    }

    proto.LabelBroadcast = function(Id, LabelBroadcast, callback) {
        var uri = this.get_uri('/label/broadcast/%s', Id);
        return this.post(uri, LabelBroadcast, callback);
    }

    proto.UnlabelBroadcast = function(Id, UnlabelBroadcast, callback) {
        var uri = this.get_uri('/label/broadcast/%s', Id);
        return this.delete(uri, UnlabelBroadcast, callback);
    }

    proto.LabelNumber = function(Number, LabelNumber, callback) {
        var uri = this.get_uri('/label/number/%s', Number);
        return this.post(uri, LabelNumber, callback);
    }

    proto.UnlabelNumber = function(Number, UnlabelNumber, callback) {
        var uri = this.get_uri('/label/number/%s', Number);
        return this.delete(uri, UnlabelNumber, callback);
    }

}

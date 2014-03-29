var Client = require('../Client'),
    util = require('util');

(function() {
    'use strict';
    
    var Text = function() {
        Client.apply(this, arguments);
    };
    module.exports = Text;
    util.inherits(Text, Client);
    var proto = Text.prototype;

    proto.SendText = function(SendText, callback) {
        var uri = this.get_uri('/text');
        return this.post(uri, SendText, callback);
    };

    proto.QueryTexts = function(QueryTexts, callback) {
        var uri = this.get_uri('/text');
        return this.get(uri, QueryTexts, callback);
    };

    proto.GetText = function(Id, callback) {
        var uri = this.get_uri('/text/%s', Id);
        return this.get(uri, {}, callback);
    };

    proto.CreateAutoReply = function(CreateAutoReply, callback) {
        var uri = this.get_uri('/text/auto-reply');
        return this.post(uri, CreateAutoReply, callback);
    };

    proto.QueryAutoReplies = function(QueryAutoReplies, callback) {
        var uri = this.get_uri('/text/auto-reply');
        return this.get(uri, QueryAutoReplies, callback);
    };

    proto.GetAutoReply = function(Id, callback) {
        var uri = this.get_uri('/text/auto-reply/%s', Id);
        return this.get(uri, {}, callback);
    };

    proto.DeleteAutoReply = function(Id, callback) {
        var uri = this.get_uri('/text/auto-reply/%s', Id);
        return this.delete(uri, {}, callback);
    };

}) ();

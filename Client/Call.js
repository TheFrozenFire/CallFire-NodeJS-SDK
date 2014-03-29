var Client = require('../Client'),
    util = require('util');

(function() {
    'use strict';
    
    var Call = function() {
        Client.apply(this, arguments);
    };
    module.exports = Call;
    util.inherits(Call, Client);
    var proto = Call.prototype;

    proto.SendCall = function(SendCall, callback) {
        var uri = this.get_uri('/call');
        return this.post(uri, SendCall, callback);
    };

    proto.QueryCalls = function(QueryCalls, callback) {
        var uri = this.get_uri('/call');
        return this.get(uri, QueryCalls, callback);
    };

    proto.GetCall = function(Id, callback) {
        var uri = this.get_uri('/call/%s', Id);
        return this.get(uri, {}, callback);
    };

    proto.CreateSound = function(CreateSound, callback) {
        var uri = this.get_uri('/call/sound');
        return this.post(uri, CreateSound, callback);
    };

    proto.QuerySoundMeta = function(QuerySoundMeta, callback) {
        var uri = this.get_uri('/call/sound');
        return this.get(uri, QuerySoundMeta, callback);
    };

    proto.GetSoundMeta = function(Id, callback) {
        var uri = this.get_uri('/call/sound/%s', Id);
        return this.get(uri, {}, callback);
    };

}) ();

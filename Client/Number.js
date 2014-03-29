var Client = require('../Client'),
    util = require('util');

(function() {
    'use strict';
    
    var Number = function() {
        Client.apply(this, arguments);
    };
    module.exports = Client;
    util.inherits(Number, Client);
    var proto = Number.prototype;

    proto.QueryRegions = function(QueryRegions, callback) {
        var uri = this.get_uri('/number/regions');
        return this.get(uri, QueryRegions, callback);
    };

    proto.QueryNumbers = function(QueryNumbers, callback) {
        var uri = this.get_uri('/number');
        return this.get(uri, QueryNumbers, callback);
    };

    proto.GetNumber = function(Number, GetNumber, callback) {
        var uri = this.get_uri('/number/%s', Number);
        return this.get(uri, GetNumber, callback);
    };

    proto.ConfigureNumber = function(Number, ConfigureNumber, callback) {
        var uri = this.get_uri('/number/%s', Number);
        return this.put(uri, ConfigureNumber, callback);
    };

    proto.SearchAvailableNumbers = function(SearchAvailableNumbers, callback) {
        var uri = this.get_uri('/number/search');
        return this.get(uri, SearchAvailableNumbers, callback);
    };

    proto.QueryKeywords = function(QueryKeywords, callback) {
        var uri = this.get_uri('/number/keyword');
        return this.get(uri, QueryKeywords, callback);
    };

    proto.SearchAvailableKeywords = function(SearchAvailableKeywords, callback) {
        var uri = this.get_uri('/number/keyword/search');
        return this.get(uri, SearchAvailableKeywords, callback);
    };

    proto.CreateNumberOrder = function(CreateNumberOrder, callback) {
        var uri = this.get_uri('/number/order');
        return this.post(uri, CreateNumberOrder, callback);
    };

    proto.GetNumberOrder = function(Id, callback) {
        var uri = this.get_uri('/number/order/%s', Id);
        return this.get(uri, {}, callback);
    };

    proto.Release = function(Id, Release, callback) {
        var uri = this.get_uri('/number/release', Id);
        return this.put(uri, Release, callback);
    };

}) ();

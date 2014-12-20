var callfire = require('./callfire');

(function() {
    'use strict';
    
    var Response = function(document) {
        this.load_xml(document);
    };
    module.exports = Response;
    var proto = Response.prototype;
    
    proto.type = null;

    proto.load_xml = function(document) {
        return;
    };
}) ();

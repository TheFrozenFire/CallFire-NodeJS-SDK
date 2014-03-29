var Response = require('../Response'),
    util = require('util'),
    callfire = require('../callfire');

(function() {
    'use strict';
    
    var ResourceException = function(document) {
        Response.call(this, document);
    };
    module.exports = ResourceException;
    var proto = ResourceException.prototype;
    
    proto.type = 'ResourceException';
    proto.httpStatus = null;
    proto.message = null;

    proto.load_xml = function(root) {
        var http_status = root.get('r:HttpStatus', callfire.namespaces);
        var message = root.get('r:Message', callfire.namespaces);
        
        if(http_status !== undefined) {
            this.httpStatus = http_status.text();
        }
        
        if(message !== undefined) {
            this.message = message.text();
        }
    };
}) ();

var Response = require('../Response'),
    util = require('util'),
    callfire = require('../callfire');

(function() {
    'use strict';
    
    var Resource = function(document) {
        Response.call(this, document);
    };
    module.exports = Resource;
    var proto = Resource.prototype;
    
    proto.type = 'Resource';
    proto.resource = null;

    proto.load_xml = function(root) {
        var resource_node = root.get('*', callfire.namespaces);
        var resource;
        
        if(resource_node !== undefined) {
            resource = callfire.parse_resource_node(resource_node);
            
            if(resource !== undefined) {
                this.resource = resource;
            }
        }
    };
}) ();

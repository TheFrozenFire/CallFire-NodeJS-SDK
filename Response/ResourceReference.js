var Response = require('../Response'),
    util = require('util'),
    callfire = require('../callfire');

(function() {
    'use strict';
    
    var ResourceReference = function(document) {
        Response.call(this, document);
    };
    module.exports = ResourceReference;
    var proto = ResourceReference.prototype;
    
    proto.type = 'ResourceReference';
    proto.id = null;
    proto.location = null;

    proto.load_xml = function(root) {
        var id_node = root.get('r:Id', callfire.namespaces);
        var location_node = root.get('r:Location', callfire.namespaces);
        
        if(id_node !== undefined) {
            this.id = id_node.text();
        }
        
        if(location_node !== undefined) {
            this.location = location_node.text();
        }
    };
}) ();

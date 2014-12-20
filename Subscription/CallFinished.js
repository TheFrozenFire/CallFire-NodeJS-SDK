var util = require('util'),
    callfire = require('../callfire'),
    Subscription = require('../Subscription');

(function() {
    'use strict';
    
    var CallFinished = function(document) {
        Subscription.call(this, document);
    };
    module.exports = CallFinished;
    var proto = CallFinished.prototype;
    
    proto.type = 'CallFinished';
    proto.call = null;
    
    proto.load_xml = function(root) {
        Subscription.prototype.load_xml.call(this, root);
    
        var resource_node = root.get('Call', callfire.namespaces);
        var resource;
        
        if(resource_node !== undefined) {
            call = callfire.parse_resource_node(resource_node);
            
            if(resource !== undefined) {
                this.call = call;
            }
        }
    };
}) ();

var util = require('util'),
    callfire = require('../callfire'),
    Subscription = require('../Subscription');

(function() {
    'use strict';
    
    var TextNotification = function(document) {
        Subscription.call(this, document);
    };
    module.exports = TextNotification;
    var proto = TextNotification.prototype;
    
    proto.type = 'TextNotification';
    proto.text = null;
    
    proto.load_xml = function(root) {
        Subscription.prototype.load_xml.call(this, root);
    
        var resource_node = root.get('_:Text', callfire.namespaces);
        var text;
        
        if(resource_node !== undefined) {
            text = callfire.parse_resource_node(resource_node);
            
            if(text !== undefined) {
                this.text = text;
            }
        }
    };
}) ();

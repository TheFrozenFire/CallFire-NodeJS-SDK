var callfire = require('./callfire');

(function() {
    'use strict';
    
    var Subscription = function(document) {
        this.load_xml(document);
    };
    module.exports = Subscription;
    var proto = Subscription.prototype;
    
    proto.type = null;
    proto.subscriptionId = null;
    
    proto.load_xml = function(root) {
        var subscriptionIdNode = root.get('n:SubscriptionId', callfire.namespaces);
        var subscriptionId = subscriptionIdNode.text();
        
        this.subscriptionId = subscriptionId;
    };
}) ();

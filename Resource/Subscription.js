var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var Subscription = function() {
        Resource.apply(this, arguments);
    };
    module.exports = Subscription;
    util.inherits(Subscription, Resource);
    var proto = Subscription.prototype;
    
    proto.types = [
        'Subscription'
    ];

    proto.id = null;
    proto.enabled = null;
    proto.endpoint = null;
    proto.notificationFormat = null;
    proto.triggerEvent = null;
    proto.subscriptionFilter = null;
}) ();

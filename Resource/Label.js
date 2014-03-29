var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var Label = function() {
        Resource.apply(this, arguments);
    };
    module.exports = Label;
    util.inherits(Label, Resource);
    var proto = Label.prototype;
    
    proto.types = [
        'Label'
    ];

    proto.name = null;
}) ();

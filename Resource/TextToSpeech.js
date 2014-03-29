var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var TextToSpeech = function() {
        Resource.apply(this, arguments);
    };
    module.exports = TextToSpeech;
    util.inherits(TextToSpeech, Resource);
    var proto = TextToSpeech.prototype;
    
    proto.types = [
        'TextToSpeech'
    ];

}) ();

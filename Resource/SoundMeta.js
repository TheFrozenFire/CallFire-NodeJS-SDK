var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var SoundMeta = function() {
        Resource.apply(this, arguments);
    };
    module.exports = SoundMeta;
    util.inherits(SoundMeta, Resource);
    var proto = SoundMeta.prototype;
    
    proto.types = [
        'SoundMeta'
    ];

    proto.id = null;
    proto.status = null;
    proto.name = null;
    proto.created = null;
    proto.lengthInSeconds = null;
}) ();

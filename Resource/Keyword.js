var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var Keyword = function() {
        Resource.apply(this, arguments);
    };
    module.exports = Keyword;
    util.inherits(Keyword, Resource);
    var proto = Keyword.prototype;
    
    proto.types = [
        'Keyword'
    ];

    proto.shortCode = null;
    proto.keyword = null;
    proto.status = null;
}) ();

var util = require('util');
var Resource = require('../Resource');

(function() {
    'use strict';
    
    var QuestionResponse = function() {
        Resource.apply(this, arguments);
    };
    module.exports = QuestionResponse;
    util.inherits(QuestionResponse, Resource);
    var proto = QuestionResponse.prototype;
    
    proto.types = [
        'QuestionResponse'
    ];

    proto.question = null;
    proto.response = null;
}) ();

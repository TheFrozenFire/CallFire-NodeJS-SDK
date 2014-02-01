var libxmljs = require('libxmljs');

var callfire = function() {
}; with({proto: callfire}) { // Not a prototyped object
    proto.broadcast = require('./client/broadcast');
    proto.subscription = require('./client/subscription');
    proto.text = require('./client/text');
    proto.call = require('./client/call');
    proto.contact = require('./client/contact');
    proto.number = require('./client/number');
    proto.label = require('./client/label');
    
    proto.resource_list = require('./resource/resource_list');
    proto.resource = require('./resource/resource');
    proto.resource_reference = require('./resource/resource_reference');
    proto.resource_exception = require('./resource/resource_exception');
    
    proto.verify_credentials = function(username, password, callback) {
        this.number.query_numbers(username, password, { MaxResults: 1 }, function(resource_list, exception) {
            if(resource_list !== undefined) {
                callback(true);
            } else {
                callback(false);
            }
        }, function() {
            callback();
        });
    }
    
    proto.is_phone_number = function(number) {
        if(isNaN(parseFloat(number)) || !isFinite(number) || (number % 1 != 0)) {
            return false;
        }
        
        return true;
    }
    
    proto.response = function(response) {
        var document = libxmljs.parseXml(response);
        var response_object;
        
        if(document !== undefined) {
            switch(Object.keys(document)[0]) {
                case 'r:ResourceList':
                    response_object = new callfire.resource_list(document);
                    break;
                case 'r:Resource':
                    response_object = new callfire.resource(document);
                    break;
                case 'r:ResourceReference':
                    response_object = new callfire.resource_reference(document);
                    break;
                case 'r:ResourceException':
                    response_object = new callfire.resource_exception(document);
                    break;
            }
        }
        
        return response_object;
    }

    proto.AMCONFIG_AM_ONLY = 'AM_ONLY';
    proto.AMCONFIG_AM_AND_LIVE = 'AM_AND_LIVE';
    proto.AMCONFIG_LIVE_WITH_AMD = 'LIVE_WITH_AMD';
    proto.AMCONFIG_LIVE_IMMEDIATE = 'LIVE_IMMEDIATE';

    proto.BROADCAST_VOICE = 'VOICE';
    proto.BROADCAST_IVR = 'IVR';
    proto.BROADCAST_TEXT = 'TEXT';

    proto.COMMAND_START = 'START';
    proto.COMMAND_STOP = 'STOP';
    proto.COMMAND_ARCHIVE = 'ARCHIVE';

    proto.EVENT_UNDEFINED_EVENT = 'UNDEFINED_EVENT';
    proto.EVENT_INBOUND_CALL_FINISHED = 'INBOUND_CALL_FINISHED';
    proto.EVENT_INBOUND_TEXT_FINISHED = 'INBOUND_TEXT_FINISHED';
    proto.EVENT_OUTBOUND_CALL_FINISHED = 'OUTBOUND_CALL_FINISHED';
    proto.EVENT_OUTBOUND_TEXT_FINISHED = 'OUTBOUND_TEXT_FINISHED';
    proto.EVENT_CAMPAIGN_STARTED = 'CAMPAIGN_STARTED';
    proto.EVENT_CAMPAIGN_STOPPED = 'CAMPAIGN_STOPPED';
    proto.EVENT_CAMPAIGN_FINISHED = 'CAMPAIGN_FINISHED';

    proto.FEATURE_UNSUPPORTED = 'UNSUPPORTED';
    proto.FEATURE_PENDING = 'PENDING';
    proto.FEATURE_DISABLED = 'DISABLED';
    proto.FEATURE_ENABLED = 'ENABLED';

    proto.FORMAT_XML = 'XML';
    proto.FORMAT_JSON = 'JSON';
    proto.FORMAT_SOAP = 'SOAP';
    proto.FORMAT_EMAIL = 'EMAIL';

    proto.INBOUND_TRACKING = 'TRACKING';
    proto.INBOUND_IVR = 'IVR';

    proto.RESULT_ANSWER_MACHINE = "AM";
    proto.RESULT_BUSY = "BUSY";
    proto.RESULT_DO_NOT_CALL = "DNC";
    proto.RESULT_TRANSFER = "XFER";
    proto.RESULT_TRANSFER_LEG = "XFER_LEG";
    proto.RESULT_NO_ANSWER = "NO_ANS";
    proto.RESULT_UNDIALED = "UNDIALED";
    proto.RESULT_SENT = "SENT";
    proto.RESULT_RECEIVED = "RECEIVED";
    proto.RESULT_DID_NOT_TRY = "DNT";
    proto.RESULT_TOO_BIG = "TOO_BIG";
    proto.RESULT_INTERNAL_ERROR = "INTERNAL_ERROR";
    proto.RESULT_CARRIER_ERROR = "CARRIER_ERROR";
    proto.RESULT_CARRIER_TEMP_ERROR = "CARRIER_TEMP_ERROR";

    proto.STATE_READY = "READY";
    proto.STATE_SELECTED = "SELECTED";
    proto.STATE_FINISHED = "FINISHED";
    proto.STATE_DO_NOT_CALL = "DNC";
    proto.STATE_DUPLICATE = "DUP";
    proto.STATE_INVALID = "INVALID";
    proto.STATE_TIMEOUT = "TIMEOUT";

    proto.STRATEGY_SEND_MULTIPLE = 'SEND_MULTIPLE';
    proto.STRATEGY_DO_NOT_SEND = 'DO_NOT_SEND';
    proto.STRATEGY_TRIM = 'TRIM';
}

module.exports = callfire;

var libxmljs = require('libxmljs');

var callfire = function() {
}
module.exports = callfire;
with({proto: callfire}) { // singleton
    proto.verify_credentials = function(username, password, callback) {
        this.Number.query_numbers(username, password, { MaxResults: 1 }, function(resource_list, exception) {
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
    
    proto.client = function(type) {
        return new this.client[type];
    }
    
    proto.response = function(response) {
        var document = libxmljs.parseXml(response);
        
        if(document === undefined) {
            return null;
        }
        
        var root = document.root();
        var response_object = null;
        
        if(root !== undefined) {
            switch(root.name()) {
                case 'ResourceList':
                    response_object = new this.response.ResourceList(root);
                    break;
                case 'Resource':
                    response_object = new this.response.Resource(root);
                    break;
                case 'ResourceReference':
                    response_object = new this.response.ResourceReference(root);
                    break;
                case 'ResourceException':
                    response_object = new this.response.ResourceException(root);
                    break;
            }
        }
        
        return response_object;
    }
    
    proto.resource = function(type) {
        return new this.resource[type];
    }
    
    proto.namespaces = {
        _: 'http://api.callfire.com/data',
        r: 'http://api.callfire.com/resource'
    }
    
    proto.client.Client = require('./Client');
    proto.client.Broadcast = require('./Client/Broadcast');
    proto.client.Subscription = require('./Client/Subscription');
    proto.client.Text = require('./Client/Text');
    proto.client.Call = require('./Client/Call');
    proto.client.Contact = require('./Client/Contact');
    proto.client.Number = require('./Client/Number');
    proto.client.Label = require('./Client/Label');
    
    proto.response.Response = require('./Response');
    proto.response.ResourceList = require('./Response/ResourceList');
    proto.response.Resource = require('./Response/Resource');
    proto.response.ResourceReference = require('./Response/ResourceReference');
    proto.response.ResourceException = require('./Response/ResourceException');
    
    proto.resource.Resource = require('./Resource');
    proto.resource.Action = require('./Resource/Action');
    proto.resource.ActionRecord = require('./Resource/ActionRecord');
    proto.resource.ActionStatistics = require('./Resource/ActionStatistics');
    proto.resource.AutoReply = require('./Resource/AutoReply');
    proto.resource.Broadcast = require('./Resource/Broadcast');
    proto.resource.BroadcastConfig = require('./Resource/BroadcastConfig');
    proto.resource.BroadcastSchedule = require('./Resource/BroadcastSchedule');
    proto.resource.BroadcastStats = require('./Resource/BroadcastStats');
    proto.resource.Call = require('./Resource/Call');
    proto.resource.CallRecord = require('./Resource/CallRecord');
    proto.resource.CallTrackingConfig = require('./Resource/CallTrackingConfig');
    proto.resource.Contact = require('./Resource/Contact');
    proto.resource.ContactBatch = require('./Resource/ContactBatch');
    proto.resource.ContactHistory = require('./Resource/ContactHistory');
    proto.resource.ContactList = require('./Resource/ContactList');
    proto.resource.DaysOfWeek = require('./Resource/DaysOfWeek');
    proto.resource.Fulfilled = require('./Resource/Fulfilled');
    proto.resource.InboundCallConfiguration = require('./Resource/InboundCallConfiguration');
    proto.resource.InboundConfig = require('./Resource/InboundConfig');
    proto.resource.IvrBroadcastConfig = require('./Resource/IvrBroadcastConfig');
    proto.resource.IvrInboundConfig = require('./Resource/IvrInboundConfig');
    proto.resource.Keyword = require('./Resource/Keyword');
    proto.resource.Label = require('./Resource/Label');
    proto.resource.LeaseInfo = require('./Resource/LeaseInfo');
    proto.resource.LocalTimeZoneRestriction = require('./Resource/LocalTimeZoneRestriction');
    proto.resource.Number = require('./Resource/Number');
    proto.resource.NumberConfiguration = require('./Resource/NumberConfiguration');
    proto.resource.NumberOrder = require('./Resource/NumberOrder');
    proto.resource.NumberOrderItem = require('./Resource/NumberOrderItem');
    proto.resource.QuestionResponse = require('./Resource/QuestionResponse');
    proto.resource.RecordingMeta = require('./Resource/RecordingMeta');
    proto.resource.Region = require('./Resource/Region');
    proto.resource.ResultStat = require('./Resource/ResultStat');
    proto.resource.RetryConfig = require('./Resource/RetryConfig');
    proto.resource.RetryResults = require('./Resource/RetryResults');
    proto.resource.SoundMeta = require('./Resource/SoundMeta');
    proto.resource.Subscription = require('./Resource/Subscription');
    proto.resource.SubscriptionFilter = require('./Resource/SubscriptionFilter');
    proto.resource.Text = require('./Resource/Text');
    proto.resource.TextBroadcastConfig = require('./Resource/TextBroadcastConfig');
    proto.resource.TextRecord = require('./Resource/TextRecord');
    proto.resource.TextToSpeech = require('./Resource/TextToSpeech');
    proto.resource.ToNumber = require('./Resource/ToNumber');
    proto.resource.TransferNumber = require('./Resource/TransferNumber');
    proto.resource.UsageStats = require('./Resource/UsageStats');
    proto.resource.VoiceBroadcastConfig = require('./Resource/VoiceBroadcastConfig');

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

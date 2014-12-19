(function() {
    'use strict';
    
    var callfire = function(username, password, type) {
        return callfire.client(username, password, type);
    };
    module.exports = callfire;
    var proto = callfire; // Singleton facade
    
    proto.verify_credentials = function(username, password, callback) {
        var numberClient = callfire(username, password, 'Number');
        numberClient.QueryNumbers({ MaxResults: 1 }, function(resource_list, exception) {
            if(resource_list !== undefined) {
                callback(true);
            } else {
                callback(false);
            }
        }, function() {
            callback();
        });
    };
    
    proto.is_phone_number = function(number) {
        if(isNaN(parseFloat(number)) || !isFinite(number) || (number % 1 !== 0)) {
            return false;
        }
        
        return true;
    };
    
    proto.client = function(username, password, type) {
        return new this.client[type](username, password);
    };
    
    proto.response = function(type, node) {
        return new this.response[type](node);
    };
    
    proto.request = function(type) {
        return new this.request[type]();
    };
    
    proto.resource = function(type) {
        return new this.resource[type]();
    };
    
    proto.namespaces = {
        _: 'http://api.callfire.com/data',
        r: 'http://api.callfire.com/resource'
    };
    
    proto.client.Broadcast = require('./Client/Broadcast');
    proto.client.Call = require('./Client/Call');
    proto.client.Contact = require('./Client/Contact');
    proto.client.Label = require('./Client/Label');
    proto.client.Number = require('./Client/Number');
    proto.client.Subscription = require('./Client/Subscription');
    proto.client.Text = require('./Client/Text');

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

    proto.request.AddContactsToList = require('./Request/AddContactsToList');
    proto.request.ConfigureNumber = require('./Request/ConfigureNumber');
    proto.request.ControlBroadcast = require('./Request/ControlBroadcast');
    proto.request.ControlContactBatch = require('./Request/ControlContactBatch');
    proto.request.CreateAutoReply = require('./Request/CreateAutoReply');
    proto.request.CreateBroadcast = require('./Request/CreateBroadcast');
    proto.request.CreateBroadcastSchedule = require('./Request/CreateBroadcastSchedule');
    proto.request.CreateContactBatch = require('./Request/CreateContactBatch');
    proto.request.CreateContactList = require('./Request/CreateContactList');
    proto.request.CreateNumberOrder = require('./Request/CreateNumberOrder');
    proto.request.CreateSound = require('./Request/CreateSound');
    proto.request.CreateSubscription = require('./Request/CreateSubscription');
    proto.request.DeleteLabel = require('./Request/DeleteLabel');
    proto.request.GetBroadcastStats = require('./Request/GetBroadcastStats');
    proto.request.GetContactHistory = require('./Request/GetContactHistory');
    proto.request.GetNumber = require('./Request/GetNumber');
    proto.request.LabelBroadcast = require('./Request/LabelBroadcast');
    proto.request.LabelNumber = require('./Request/LabelNumber');
    proto.request.QueryAutoReplies = require('./Request/QueryAutoReplies');
    proto.request.QueryBroadcastSchedule = require('./Request/QueryBroadcastSchedule');
    proto.request.QueryBroadcasts = require('./Request/QueryBroadcasts');
    proto.request.QueryCalls = require('./Request/QueryCalls');
    proto.request.QueryContactBatches = require('./Request/QueryContactBatches');
    proto.request.QueryContactLists = require('./Request/QueryContactLists');
    proto.request.QueryContacts = require('./Request/QueryContacts');
    proto.request.QueryKeywords = require('./Request/QueryKeywords');
    proto.request.QueryLabels = require('./Request/QueryLabels');
    proto.request.QueryNumbers = require('./Request/QueryNumbers');
    proto.request.QueryRegions = require('./Request/QueryRegions');
    proto.request.QuerySoundMeta = require('./Request/QuerySoundMeta');
    proto.request.QuerySubscriptions = require('./Request/QuerySubscriptions');
    proto.request.QueryTexts = require('./Request/QueryTexts');
    proto.request.Release = require('./Request/Release');
    proto.request.RemoveContacts = require('./Request/RemoveContacts');
    proto.request.RemoveContactsFromList = require('./Request/RemoveContactsFromList');
    proto.request.SearchAvailableKeywords = require('./Request/SearchAvailableKeywords');
    proto.request.SearchAvailableNumbers = require('./Request/SearchAvailableNumbers');
    proto.request.SendCall = require('./Request/SendCall');
    proto.request.SendText = require('./Request/SendText');
    proto.request.UnlabelBroadcast = require('./Request/UnlabelBroadcast');
    proto.request.UnlabelNumber = require('./Request/UnlabelNumber');
    proto.request.UpdateBroadcast = require('./Request/UpdateBroadcast');
    proto.request.UpdateSubscription = require('./Request/UpdateSubscription');
    
    proto.response.Resource = require('./Response/Resource');
    proto.response.ResourceException = require('./Response/ResourceException');
    proto.response.ResourceList = require('./Response/ResourceList');
    proto.response.ResourceReference = require('./Response/ResourceReference');
    
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
}) ();

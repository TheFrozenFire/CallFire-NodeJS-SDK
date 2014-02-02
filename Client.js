var http = require('http'),
    querystring = require('querystring'),
    util = require('util');

var Client = function() {
};
with({proto: Client.prototype}) {
    proto.base_path = 'https://www.callfire.com/api/1.1/rest';
    
    proto.get_uri = function(path) {
        return this.base_path + util.format.apply(util, [path].concat(arguments.slice(1)));
    }
    
    proto.get = function(uri, parameters, callback) {
        var request;
        var response_data = '';
    
        if(parameters !== undefined && parameters.length > 0) {
            path = path + '?' + querystring.stringify(parameters);
        }
    
        request = this.request({
            hostname: uri,
            method: 'GET'
        }, function (response) {
            response.on('data', function(chunk) {
                response_data += chunk;
            });
        });
        
        request.on('error', function(error) {
            var exception = new callfire.resource_exception(undefined, error.message);
            callback(undefined, exception);
        });
        
        request.on('end', function() {
            callback(response);
        });
        
        request.end();
    }
}

module.exports = Client;

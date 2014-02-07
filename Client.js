var http = require('http'),
    https = require('https'),
    querystring = require('querystring'),
    url = require('url'),
    util = require('util'),
    callfire = require('callfire'),
    libxmljs = require('libxmljs');

var Client = function(username, password) {
    this.username = username;
    this.password = password;
}
module.exports = Client;
with({proto: Client.prototype}) {
    proto.base_path = 'https://www.callfire.com/api/1.1/rest';
    
    proto.username = null;
    proto.password = null;
    
    proto.get_uri = function(path) {
        if(arguments.length > 1) {
          return this.base_path + util.format.apply(util, [path].concat(Array.prototype.slice.call(arguments, 1)));
        } else {
          return this.base_path + path;
        }
    }
    
    proto.basic_auth_string = function(username, password) {
        return new Buffer(username + ':' + password).toString('base64');
    }
    
    proto.get = function(uri, parameters, callback) {
        var request;
        var response_data = '';
        var options;
        var handler;
        
        if(parameters != undefined && Object.keys(parameters).length > 0) {
            uri = uri + '?' + querystring.stringify(parameters);
        }
        
        options = url.parse(uri);
        options.method = 'GET';
        options.headers = {
            'Authorization': 'Basic ' + this.basic_auth_string(this.username, this.password)
        }
        
        handler = (options.protocol == 'https:') ? https : http;
    
        request = handler.request(options, function (response) {
            response.on('data', function(chunk) {
                response_data += chunk.toString();
            });
            
            response.on('end', function() {
                callback(response_data);
            });
        });
        
        request.on('error', function(error) {
            var exception = new callfire.response.ResourceException;
            exception.message = error.message;
            callback(exception);
        });
        
        request.end();
        
        return request;
    }
    
    proto.post = function(uri, parameters, callback) {
        var request;
        var response_data = '';
        var options;
        var handler;
        
        options = url.parse(uri);
        options.method = 'POST';
        options.headers = {
            'Authorization': 'Basic ' + this.basic_auth_string(this.username, this.password)
        }
        
        handler = (options.protocol == 'https:') ? https : http;
    
        request = handler.request(options, function (response) {
            response.on('data', function(chunk) {
                response_data += chunk.toString();
            });
            
            response.on('end', function() {
                callback(response_data);
            });
        });
        
        request.on('error', function(error) {
            var exception = new callfire.response.ResourceException;
            exception.message = error.message;
            callback(exception);
        });
        
            
        if(parameters !== undefined && Object.keys(parameters).length > 0) {
            request.write(querystring.stringify(parameters));
        }
        
        request.end();
        
        return request;
    }
    
    proto.put = function(uri, parameters, callback) {
        var request;
        var response_data = '';
        var options;
        var handler;
        
        options = url.parse(uri);
        options.method = 'PUT';
        options.headers = {
            'Authorization': 'Basic ' + this.basic_auth_string(this.username, this.password)
        }
        
        handler = (options.protocol == 'https:') ? https : http;
    
        request = handler.request(options, function (response) {
            response.on('data', function(chunk) {
                response_data += chunk.toString();
            });
            
            response.on('end', function() {
                callback(response_data);
            });
        });
        
        request.on('error', function(error) {
            var exception = new callfire.response.ResourceException;
            exception.message = error.message;
            callback(exception);
        });
        
            
        if(parameters !== undefined && Object.keys(parameters).length > 0) {
            request.write(querystring.stringify(parameters));
        }
        
        request.end();
        
        return request;
    }
    
    proto.delete = function(uri, parameters, callback) {
        var request;
        var response_data = '';
        var options;
        var handler;
        
        options = url.parse(uri);
        options.method = 'DELETE';
        options.headers = {
            'Authorization': 'Basic ' + this.basic_auth_string(this.username, this.password)
        }
        
        handler = (options.protocol == 'https:') ? https : http;
    
        request = handler.request(options, function (response) {
            response.on('data', function(chunk) {
                response_data += chunk.toString();
            });
            
            response.on('end', function() {
                callback(response_data);
            });
        });
        
        request.on('error', function(error) {
            var exception = new callfire.response.ResourceException;
            exception.message = error.message;
            callback(exception);
        });
        
            
        if(parameters !== undefined && Object.keys(parameters).length > 0) {
            request.write(querystring.stringify(parameters));
        }
        
        request.end();
        
        return request;
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
                    response_object = callfire.response('ResourceList', root);
                    break;
                case 'Resource':
                    response_object = callfire.response('Resource', root);
                    break;
                case 'ResourceReference':
                    response_object = callfire.response('ResourceReference', root);
                    break;
                case 'ResourceException':
                    response_object = callfire.response('ResourceException', root);
                    break;
            }
        }
        
        return response_object;
    }
}

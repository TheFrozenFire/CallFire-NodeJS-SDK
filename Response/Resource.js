var Response = require('../Response'),
    util = require('util');

var Resource = function(document) {
    Response.call(this, document);
}
util.inherits(Resource, Response);
with({proto: Resource.prototype}) {
    proto.resource = null;

    proto.load_xml = function(root) {
        var resource_node = root.get('*');
        var resource;
        
        if(resource_node !== undefined) {
            resource = this.parse_resource_node(resource_node);
            
            if(resource !== undefined) {
                this.resource = resource;
            }
        }
    }
}

module.exports = Resource;

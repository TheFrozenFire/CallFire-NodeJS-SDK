var callfire = require('./callfire');

var Response = function(document) {
    if(document !== undefined) {
        this.load_xml(document);
    }
}
module.exports = Response;
with({proto: Response.prototype}) {
    proto.queryMap = require('./querymap.json');

    proto.load_xml = function(document) {
        return;
    }
    
    proto.parse_resource_node = function(element) {
        var resource_name = element.name();
        var resource_map = {};
        var child_resource_map = {};
        var resource;
        var unbounded = false;
        
        if(this.queryMap[resource_name] !== undefined) {
            resource = new callfire.resource[resource_name];
            
            if(resource !== undefined) {
                for(i in resource.types) {
                    for(key in this.queryMap[resource.types[i]]) {
                        if(key[0] == '#') {
                            child_resource_map[key.slice(1)] = resource_map[key];
                        } else {
                            resource_map[key] = this.queryMap[resource.types[i]][key];
                        }
                    }
                }
                
                for(key in resource_map) {
                    var resource_field = element.get('_' + resource_map[key], callfire.namespaces);
                    if(resource_field !== undefined) {
                        resource[key] = resource_field.text();
                    }
                }
                
                for(key in child_resource_map) {
                    var child_resource_element = element.get(child_resource_map[key], callfire.namespaces);
                    if(child_resource_element !== undefined) {
                        resource[key] = child_resource_element.text();
                    }
                }
            }
        }
        
        return resource;
    }
}

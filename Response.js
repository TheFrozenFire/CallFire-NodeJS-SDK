var callfire = module.parent;

var Response = function(document) {
    if(document !== undefined) {
        this.load_xml(document);
    }
}; with({proto: Response.prototype}) {
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
            resource = new callfire.exports.resource[resource_name]; // callfire refers to module, instead of class itself
            
            console.log(callfire.exports.resource[resource_name].prototype);
            return;
            
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
                    resource[key] = element.get(resource_map[key]).text();
                }
            }
        }
        
        return resource;
    }
}

module.exports = Response;

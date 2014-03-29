var callfire = require('./callfire');

(function() {
    'use strict';
    
    var Response = function(document) {
        this.load_xml(document);
    };
    module.exports = Response;
    var proto = Response.prototype;
    
    proto.type = null;
    proto.queryMap = require('./querymap.json');

    proto.load_xml = function(document) {
        return;
    };
    
    proto.parse_resource_node = function(element) {
        var resource_name = element.name();
        var resource_map = {};
        var child_resource_map = {};
        var resource,
            key,
            property,
            i,
            child_resource_element;
        
        if(this.queryMap[resource_name] !== undefined) {
            resource = new callfire.resource[resource_name]();
            
            if(resource !== undefined) {
                for(i in resource.types) {
                    for(key in this.queryMap[resource.types[i]]) {
                        if(key.charAt(0) == '#') {
                            child_resource_map[key.slice(1)] = this.queryMap[resource.types[i]][key];
                        } else {
                            resource_map[key] = this.queryMap[resource.types[i]][key];
                        }
                    }
                }
                
                for(key in resource_map) {
                    var resource_field = element.get(resource_map[key], callfire.namespaces);
                    property = key.charAt(0).toLowerCase() + key.slice(1);
                    if(resource_field !== undefined) {
                        if(resource_map[key].charAt(0) == '@') {
                            resource[property] = resource_field.value();
                        } else {
                            resource[property] = resource_field.text();
                        }
                    }
                }
                
                for(key in child_resource_map) {
                    if(key.charAt(0) == '@') {
                        var child_resource_elements = element.find(child_resource_map[key], callfire.namespaces);
                        property = key.charAt(1).toLowerCase() + key.slice(2);
                        if(child_resource_elements !== undefined && child_resource_elements.length > 0) {
                            for(i in child_resource_elements) {
                                child_resource_element = child_resource_elements[i];
                                if(child_resource_element !== undefined) {
                                    child_resource_element = this.parse_resource_node(child_resource_element);
                                    resource[property].push(child_resource_element);
                                }
                            }
                        }
                    } else {
                        child_resource_element = element.get(child_resource_map[key], callfire.namespaces);
                        property = key.charAt(0).toLowerCase() + key.slice(1);
                        if(child_resource_element !== undefined) {
                            resource[property] = this.parse_resource_node(child_resource_element);
                        }
                    }
                }
            }
        }
        
        return resource;
    };
}) ();

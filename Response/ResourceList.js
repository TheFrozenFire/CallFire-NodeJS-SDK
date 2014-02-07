var Response = require('../Response'),
    util = require('util'),
    callfire = require('../callfire');

var ResourceList = function(document) {
    Response.call(this, document);
}
util.inherits(ResourceList, Response);
module.exports = ResourceList;
with({proto: ResourceList.prototype}) {
    proto.type = 'ResourceList';
    proto.totalResults = 0;
    proto.resources = [];

    proto.load_xml = function(root) {
        var resource_list = root.find('*', callfire.namespaces);
        var total_results_node = root.get('@totalResults', callfire.namespaces);
        this.resources = [];
        
        if(total_results_node !== undefined) {
            this.totalResults = total_results_node.value();
        }
        
        if(resource_list !== undefined) {
            for(var i in resource_list) {
                var resource = this.parse_resource_node(resource_list[i]);
                
                if(resource !== undefined) {
                    this.resources.push(resource);
                }
            }
        }
    }
}

var response = function(document) {
    if(document !== undefined) {
        this.loadXml(document);
    }
} with({proto: response.prototype}) {
    proto.loadXml = function(document) {
        
    }
}

module.exports = response;

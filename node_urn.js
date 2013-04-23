var NodeUrn = function(nodeUrnString) {

	this.nodeUrnString = nodeUrnString;

	this.getSuffix = function() {
		return this.nodeUrnString.substring(this.nodeUrnString.lastIndexOf(':') + 1);
	}
	this.getMac = function() {
		return parseInt(this.getSuffix());
	}
};
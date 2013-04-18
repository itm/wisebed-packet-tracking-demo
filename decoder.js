// =============================== DECODER ===============================

var PTPacket = function(buffer) {

	this.buffer = buffer;
	this.packetType = buffer[0];
	this.source = (buffer[1] << 8) + buffer[2];
	this.destination = (buffer[3] << 8) + buffer[4];
	this.linkMetric = (buffer[5] << 8) + buffer[6];
	this.length = (buffer[7] << 8) + buffer[8];
	this.payload = new Uint8Array(this.length);
	for (var pos = 9; pos<buffer.length; pos++) {
		this.payload[pos-9] = buffer[pos];
	}

	this.toString = function() {
		
		var bufferToString = function(buffer) {
			var ret = "[";
			for (var i=0; i<buffer.length; i++) {
				ret += ("0x" + buffer[i].toString(16));
				if (i<buffer.length-1) {
					ret += ",";
				}
			}
			ret += "]";
			return ret;
		};

		return "{"+
			"packetType=0x"+this.packetType.toString(16)+","+
			"source=0x"+this.source.toString(16)+","+
			"destination=0x"+this.destination.toString(16)+","+
			"linkMetric=0x"+this.linkMetric.toString(16)+","+
			"length=0x"+this.length.toString(16)+","+
			"payload="+bufferToString(this.payload)+
		"}";
	}
}

// =============================== APP ===============================

WiseGuiUserScript = function() {
  console.log("WiseGuiUserScript instantiated...");
  this.testbedId = null;
  this.experimentId = null;
  this.webSocket = null;
  this.outputDiv = null;
  this.outputTextArea = null;
};

WiseGuiUserScript.prototype.start = function(env) {
  console.log("Starting user script...");
  this.testbedId = env.testbedId;
  this.experimentId = env.experimentId;
  this.outputDiv = env.outputDiv;
  this.outputDiv.empty();
  this.outputTextArea = $("<textarea class='span12' style='height:500px'/>");
  this.outputDiv.append(this.outputTextArea);
  
  /*
  var self = this;
  this.webSocket = new Wisebed.WebSocket(
      this.testbedId,
      this.experimentId,
      function() {self.onmessage(arguments);},
      function() {self.onopen(arguments);},
      function() {self.onclosed(arguments);}
  );
*/
  // TODO implement me
};

WiseGuiUserScript.prototype.stop = function() {
  console.log("Stopping user script...");
  //this.webSocket.close();
  // TODO implement me
};

WiseGuiUserScript.prototype.onmessage = function(message) {
  console.log(message);
  this.outputTextArea.html(this.outputTextArea.html() + "\n" + JSON.stringify(message));
  // TODO implement me
};

WiseGuiUserScript.prototype.onopen = function(event) {
  console.log(event);
  this.outputTextArea.html(this.outputTextArea.html() + "\nConnection opened!");
  // TODO implement me
};

WiseGuiUserScript.prototype.onclosed = function(event) {
  console.log(event);
  this.outputTextArea.html(this.outputTextArea.html() + "\nConnection closed!");
  // TODO implement me
};


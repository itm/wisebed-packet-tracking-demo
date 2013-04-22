// =============================== DECODER ===============================

var PTPacket = function(buffer) {
	this.buffer         = buffer;
	this.getBuffer      = function() { return buffer; }
	this.getPacketType  = function() { return buffer[0]; }
	this.getSource      = function() { return (buffer[1] << 8) + buffer[2]; }
	this.getDestination = function() { return (buffer[3] << 8) + buffer[4]; }
	this.getLinkMetric  = function() { return (buffer[5] << 8) + buffer[6]; }
	this.getLength      = function() { return (buffer[7] << 8) + buffer[8]; }
	this.getTag         = function() { return (buffer[9] << 8) + buffer[10]; } // TODO anpassing
	this.getPayload     = function() {
		var payload = new Uint8Array(buffer.length - 9);
		for (var pos = 9; pos<buffer.length; pos++) {
			payload[pos-9] = buffer[pos];
		}
		return payload;
	}

	this.toString       = function() {
		
		var uint8ArrayToString = function(buffer) {
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

		var payload = this.getPayload();

		return "{"+
			"packetType=0x"+this.getPacketType().toString(16)+","+
			"source=0x"+this.getSource().toString(16)+","+
			"destination=0x"+this.getDestination().toString(16)+","+
			"linkMetric=0x"+this.getLinkMetric().toString(16)+","+
			"length=0x"+payload.length.toString(16)+","+
			"payload="+uint8ArrayToString(payload)+
		"}";
	}
}

PTPacket.PACKET_TYPE = 108;

// "constructor" to parse packets
PTPacket.parse = function(buffer) {
	if (Array.isArray(buffer)) {
		var buf = new Uint8Array(buffer.length);
		for (var i=0; i<buffer.length; i++) {
			buf[i] = buffer[i];
		}
		return new PTPacket(buf);
	}
	return new PTPacket(buffer);
}


// "constructor" to create packets
PTPacket.create = function(src,dst,payload) {
	var buffer = new Uint8Array(9+payload.length);
	buffer[0] = 108;
	buffer[1] = (src >> 8) & 255;
	buffer[2] = (src >> 0) & 255;
	buffer[3] = (dst >> 8) & 255;
	buffer[4] = (dst >> 0) & 255;
	buffer[5] = 0;
	buffer[6] = 0;
	buffer[7] = (payload.length >> 8) & 255;
	buffer[8] = (payload.length >> 0) & 255;
	for (var i=9; i<9+payload.length; i++) {
		buffer[i] = payload[i-9];
	}
	return new PTPacket(buffer);
}

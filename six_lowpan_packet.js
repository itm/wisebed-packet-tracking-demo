var SixLowPanPacket = function(buffer) {
	
	this.buffer = buffer;
	
	this.getHeaders = function() {
		return {

			tf   : (((this.buffer[0] & 0x18) & 0xFF) >> 3), // 0b00011000
			nh   : (((this.buffer[0] & 0x04) & 0xFF) >> 2), // 0b00000100
			hlim : (((this.buffer[0] & 0x03) & 0xFF) >> 0), // 0b00000011

			cid  : (((this.buffer[1] & 0x80) & 0xFF) >> 7), // 0b10000000
			sac  : (((this.buffer[1] & 0x40) & 0xFF) >> 6), // 0b01000000
			sam  : (((this.buffer[1] & 0x30) & 0xFF) >> 4), // 0b00110000
			m    : (((this.buffer[1] & 0x08) & 0xFF) >> 4), // 0b00001000
			dac  : (((this.buffer[1] & 0x04) & 0xFF) >> 3), // 0b00000100
			dam  : (((this.buffer[1] & 0x03) & 0xFF) >> 0)  // 0b00000011
		};
	}
	
	this.getFlowLabel = function() {
		var tf = this.getHeaders().tf;
		if (tf == 0) {
			return  ((this.buffer[3] & 0x0F) << 16) + // 0b00001111
					((this.buffer[4] & 0xFF) <<  8) + // 0b11111111
					((this.buffer[5] & 0xFF) <<  0);  // 0b11111111
		} else if (tf == 1) {
			return  ((this.buffer[2] & 0x0F) << 16) + // 0b00001111
					((this.buffer[3] & 0xFF) <<  8) + // 0b11111111
					((this.buffer[4] & 0xFF) <<  0);  // 0b11111111
		} else {
			return undefined;
		}
	}

	this.setFlowLabel = function(flowLabel) {
		var tf = this.getHeaders().tf;
		if (tf == 0) {
			this.buffer[3] = ((flowLabel >> 16) & 0x0F) | (this.buffer[3] & 0xF0);
			this.buffer[4] = ((flowLabel >> 8) & 0xFF);
			this.buffer[5] = ((flowLabel >> 0) & 0xFF);
		} else if (tf == 1) {
			this.buffer[2] = ((flowLabel >> 16) & 0x0F) | (this.buffer[2] & 0xF0);
			this.buffer[3] = ((flowLabel >> 8) & 0xFF);
			this.buffer[4] = ((flowLabel >> 0) & 0xFF);
		} else {
			throw {
				description : "No flow label allowed if tf = " + tf
			};
		}
	}

	// { source: [...], destination: [...] }
	this.getSourceAndDestination = function() {
		
		var source = [];
		var destination = [];

		var buffer = this.buffer;
		var headers = this.getHeaders();
		var pos = 2;
		
		if (headers.tf == 0) {
			pos += 4;
		} else if (headers.tf == 1) {
			pos += 3;
		} else if (headers.tf == 2) {
			pos += 1;
		} else {
			throw {
				description : "Error while parsing SixLowPanPacket: tf > 2 not a valid value"
			};
		}

		if (headers.nh == 0) {
			pos += 1;
		}

		if (headers.hlim == 0) {
			pos += 1;
		}

		if(headers.sac == 0){ // stateless compression
			
			if(headers.sam == 0){
				// 128 bits
				source = buffer.subarray(pos, pos + 16);
				pos += 16;
			} else if (headers.sam == 1){
				// 64 bits
				source = buffer.subarray(pos, pos + 8);
				pos += 8;
			} else if (headers.sam == 2){
				// 16 bits
				source = buffer.subarray(pos, pos + 2);
				pos += 2;
			} else {
				// 0 bits
				source = new Uint8Array(0);
				pos += 0;
			} 

		} else { // stateful compression

			if(headers.sam == 0){
				// "unspecified address"
				source = new Uint8Array(16);
				pos += 0;
			} else if (headers.sam == 1){
				// 64 bits
				source = buffer.subarray(pos, pos + 8);
				pos += 8;
			} else if (headers.sam == 2){
				// 16 bits
				source = buffer.subarray(pos, pos + 2);
				pos += 2;
			} else {
				// 0 bits
				source = new Uint8Array(0);
				pos += 0;
			}
		}
		
		if(headers.m == 0){ // no multicast

			if(headers.dac == 0){ // stateless compression

				if(headers.dam == 0){
					// 128 bits
					destination = buffer.subarray(pos, pos + 16);
					pos += 16;
				} else if (headers.dam == 1){
					// 64 bits
					destination = buffer.subarray(pos, pos + 8);
					pos += 8;
				} else if (headers.dam == 2){
					// 16 bits
					destination = buffer.subarray(pos, pos + 2);
					pos += 2;
				} else {
					// 0 bits
					destination = new Uint8Array(0);
					pos += 0;
				}

			} else { // stateful compression

				if(headers.dam == 0){ 
					// "reserved"
					destination = undefined;
					pos += 0;
				} else if (headers.dam == 1){
					// 64 bits
					destination = buffer.subarray(pos, pos + 8);
					pos += 8;
				} else if (headers.dam == 2){
					// 16 bits
					destination = buffer.subarray(pos, pos + 2);
					pos += 2;
				} else {
					// 0 bits
					destination = new Uint8Array(0);
					pos += 0;
				}
			}

		} else { // destination is multicast

			if(!headers.dac){ // stateless compression

				if(headers.dam == 0){
					// 128 bits
					destination = buffer.subarray(pos, pos + 16);
					pos += 16;
				} else if (headers.dam == 1){
					// 48 bits
					destination = buffer.subarray(pos, pos + 6);
					pos += 6;
				} else if (headers.dam == 2){
					// 32 bits
					destination = buffer.subarray(pos, pos + 4);
					pos += 4;
				} else {
					// 8 bits
					destination = buffer.subarray(pos, pos + 1);
					pos += 1;
				}

			} else { // stateful compression

				if(headers.dam == 0){
					// 48 bits
					destination = buffer.subarray(pos, pos + 6);
					pos += 6;
				} else {
					// else dam = 1/2/3 --> reserved
					destination = undefined;
					pos += 0;
				}
			}
		}

		return {
			source: source,
			destination: destination
		}
	}

	this.getSource = function() {
		return this.bufferToInt(this.getSourceAndDestination().source);
	}

	this.getDestination = function() {
		return this.bufferToInt(this.getSourceAndDestination().destination);
	}

	this.bufferToInt = function(buffer) {
		var sum = 0;
		for (var i=buffer.length-1; i>=0; i--) {
			if (i != buffer.length-1) {
				sum *= 10;
			}
			sum += (buffer[i] & 0xFF);
		}
		return sum;
	}

	this.toString = function() {
		
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

		var headers = this.getHeaders();
		var sourceAndDestination = this.getSourceAndDestination();
		var source = uint8ArrayToString(sourceAndDestination.source);
		var destination = uint8ArrayToString(sourceAndDestination.destination);

		return "SixLowPanPacket{" +
			"tf=" + headers.tf + "," +
			"nh=" + headers.nh + "," + 
			"hlim=" + headers.hlim + "," + 
			"cid=" + headers.cid + "," + 
			"sac=" + headers.sac + "," + 
			"sam=" + headers.sam + "," + 
			"dac=" + headers.dac + "," + 
			"dam=" + headers.dam + "," + 
			"src=" + source + "," + 
			"dst=" + destination + "," +
			"flowlabel=0x" + this.getFlowLabel().toString(16) +
		"}";
	}
}

// "constructor" to parse packets
SixLowPanPacket.parse = function(buffer) {
	if (Array.isArray(buffer)) {
		var buf = new Uint8Array(buffer.length);
		for (var i=0; i<buffer.length; i++) {
			buf[i] = buffer[i];
		}
		return new SixLowPanPacket(buf);
	}
	return new SixLowPanPacket(buffer);
}

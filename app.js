WiseGuiUserScript = function() {
	console.log("WiseGuiUserScript instantiated...");
	this.testbedId = null;
	this.experimentId = null;
	this.webSocket = null;
	this.outputDiv = null;
	this.nodeToD3Node = {};
	this.macToNode = {};
	this.lastLinkId = 0;
	this.colors = 12;
	this.wiseml = null;
	this.wisemlBoundingBox = {
		minX : Number.MAX_VALUE,
		minY : Number.MAX_VALUE,
		maxX : Number.MIN_VALUE,
		maxY : Number.MIN_VALUE,
		width : undefined,
		height : undefined
	};
	this.scaleFactors = { x : 1, y : 1, offsetX : 0, offsetY : 0 };
};

WiseGuiUserScript.prototype.start = function(env) {
	
	console.log("WiseGuiUserScript.start()");

	this.env = env;
	this.testbedId = env.testbedId;
	this.experimentId = env.experimentId;
	this.outputDiv = env.outputDiv;
	this.outputDiv.addClass('DemoCanvas');

	this.scriptsBaseUrl = 'http://itm.github.io/wisebed-packet-tracking-demo/';
	this.scriptsToLoad = [
		{loaded:false, src: this.scriptsBaseUrl + 'pt_packet.js'},
		{loaded:false, src: this.scriptsBaseUrl + 'six_lowpan_packet.js'},
		{loaded:false, src: this.scriptsBaseUrl + 'd3.v3.js'},
		{loaded:false, src: this.scriptsBaseUrl + 'node_urn.js'}
	];
	this.scriptsLoaded = [];
	this.scriptsToLoad.reverse().forEach(function(script) {
		
		var self = this;

		this.loadScript(script, function(scriptNode) {

			script.loaded = true;
			self.scriptsLoaded.push(scriptNode);

			if (self.ready()) {
				self.loadWiseML();
			}
		});

	}, this);

	this.loadCss(this.scriptsBaseUrl + 'packet_tracking_demo.css', function() {}, function(url) {
		window.alert('Failed to load css file: ' + url);
	});
}

WiseGuiUserScript.prototype.loadCss = function(url, success, error) {
	
	console.log('Loading CSS ' + url + '...');

	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.media = 'screen';
	link.href = url;

	link.onerror = function(){
		error(url);
	}
	link.onload = function(){
		console.log('Loading CSS ' + url + ' done.');
        success(link);
    };

    document.head.appendChild(link);
}

WiseGuiUserScript.prototype.loadScript = function(script, callback){

	console.log('Loading script ' + script.src + '...');

    var scriptNode = document.createElement('script');
    scriptNode.type = 'text/javascript';

    if (scriptNode.readyState){  //IE

        scriptNode.onreadystatechange = function(){
        	if (scriptNode.readyState == "loaded" || scriptNode.readyState == "complete"){
        		console.log('Loading script ' + script.src + ' done.');
                scriptNode.onreadystatechange = null;
                callback(scriptNode);
            }
        };
    } else {  //Others
    	scriptNode.onerror = function(){
    		window.alert('Failed to load script: ' + script.src);
    	}
        scriptNode.onload = function(){
        	console.log('Loading script ' + script.src + ' done.');
            callback(scriptNode);
        };
    }

    scriptNode.src = script.src;
    document.head.appendChild(scriptNode);
}

WiseGuiUserScript.prototype.ready = function() {
	var reduceFun = function(previousValue, currentValue, index, array){
		return previousValue + (currentValue.loaded ? 1 : 0);
	};
	var reduced = this.scriptsToLoad.reduce(reduceFun, 0);
	var ready = reduced == this.scriptsToLoad.length;
	if (ready) {
		console.log("All scripts loaded!");
	}
	return ready;
}

WiseGuiUserScript.prototype.loadWiseML = function() {

	console.log('WiseGuiUserScript.loadWiseML()');

	if (typeof WiseGui == 'undefined') {
		this.wiseml = wiseml;
		this.startDemo();
	} else {
		var self = this;
		Wisebed.getWiseMLAsJSON(
			this.testbedId,
			this.experimentId,
			function(wiseml) {
				self.wiseml = wiseml;
				self.startDemo();
			},
			function() {alert('Could not load WiseML');}
		);
	}
}

WiseGuiUserScript.prototype.startDemo = function() {

	console.log('WiseGuiUserScript.startDemo()');

	var width = this.outputDiv.width() - 10;
	var height = this.outputDiv.height() - 10;

	this.nodes = [];
	this.links = [];

	this.force = d3.layout.force()
	    .size([width, height])
	    .nodes(this.nodes)
	    .links(this.links)
	    .linkDistance(30)
	    .charge(-60)
	    .start();

	this.svg = d3
		.select('#' + this.outputDiv.attr('id'))
		.append("svg")
	    .attr("width", width)
	    .attr("height", height);

	this.svg
		.append("svg:defs")
		.selectAll("marker")
		.data(["marker0", "marker1", "marker2", "marker3", "marker4", "marker5", "marker6", "marker7", "marker8", "marker9", "marker10", "marker11"])
		.enter()
		.append("svg:marker")
		.attr("id", String)
		.attr("viewBox", "0 -5 10 10")
		.attr("refX", 5)
		.attr("markerWidth", 3)
		.attr("markerHeight", 3)
		.attr("orient", "auto")
		.attr("class", "arrow")
		.append("svg:path")
		.attr("d", "M 0 -5 L 10 0 L 0 5");

	var self = this;
	var experimentNodes = this.wiseml.setup.node.filter(function(node) { return node.nodeType == "isense48"; });

	// determine max x,y coordinates in wiseml
	experimentNodes.forEach(function(node) {
		if (node.position.x < this.wisemlBoundingBox.minX) { this.wisemlBoundingBox.minX = node.position.x; }
		if (node.position.y < this.wisemlBoundingBox.minY) { this.wisemlBoundingBox.minY = node.position.y; }
		if (node.position.x > this.wisemlBoundingBox.maxX) { this.wisemlBoundingBox.maxX = node.position.x; }
		if (node.position.y > this.wisemlBoundingBox.maxY) { this.wisemlBoundingBox.maxY = node.position.y; }
	}, this);

	console.log(this.wisemlBoundingBox);

	this.wisemlBoundingBox.width = this.wisemlBoundingBox.maxX - this.wisemlBoundingBox.minX;
	this.wisemlBoundingBox.height = this.wisemlBoundingBox.maxY - this.wisemlBoundingBox.minY;

	this.scaleFactors.x = (- (width / this.wisemlBoundingBox.width)) * 0.9; // negative because origin in UZL testbed is on upper right corner
	this.scaleFactors.y = (height / this.wisemlBoundingBox.height) * 0.9;
	this.scaleFactors.offsetX = width;
	this.scaleFactors.offsetY = 0;

	// add nodes to visualization
	experimentNodes.forEach(function(node) {
			self.addNode(node);
			var mac = new NodeUrn(node.id).getMac();
			self.macToNode[''+mac] = node;
		});

	if (typeof WiseGui != 'undefined') {
		
		var self = this;

		this.webSocket = new Wisebed.WebSocket(
			this.testbedId,
			this.experimentId,
			function() {self.onmessage(arguments);},
			function() {self.onopen(arguments);},
			function() {self.onclosed(arguments);}
		);
	}
};

WiseGuiUserScript.prototype.mapPosXY = function(node) {
	return {
		x : node.position.x * this.scaleFactors.x + this.scaleFactors.offsetX,
		y : node.position.y * this.scaleFactors.y + this.scaleFactors.offsetY
	};
}

WiseGuiUserScript.prototype.addNode = function (sourceNode) {
	
	var pos = this.mapPosXY(sourceNode);
	var node = {x: pos.x, y: pos.y, fixed: true, nodeUrn: sourceNode.id};
	
	this.nodeToD3Node[sourceNode.id] = node;
	this.nodes.push(node);
	
	this.svg.selectAll('.node')
		.data(this.nodes, this.nodeIdFun)
		.enter()
		.insert("circle", ".circle")
		.attr("class", "node")
		.attr("r", 10)
		.attr("cx", function(d) { return d.x; })
		.attr("cy", function(d) { return d.y; });

	this.force.start();
}

WiseGuiUserScript.prototype.nodeIdFun = function(node) { return node.nodeUrn; }
WiseGuiUserScript.prototype.linkIdFun = function(o) { return o.linkId; }

WiseGuiUserScript.prototype.addLink = function (sourceNode,targetNode,cssClass,markerId) {
	
	this.lastLinkId = (this.lastLinkId + 1) % Number.MAX_VALUE;
	var newLink = {
		linkId: this.lastLinkId,
		source: this.nodeToD3Node[sourceNode.id],
		target: this.nodeToD3Node[targetNode.id],
		cssClass: cssClass
	};

	this.links.push(newLink);

	var link = this.svg
		.selectAll('.link')
		.data(this.links, this.linkIdFun)
		.enter()
		.insert("line", ".link")
		.attr("x1", function(d) { return d.source.x; })
		.attr("y1", function(d) { return d.source.y; })
		.attr("x2", function(d) { return d.target.x; })
		.attr("y2", function(d) { return d.target.y; })
		.attr("class", function(d) { return "link " + d.cssClass; })
		.attr("marker-end", function(d) { return "url(#"+ markerId +")"; });

	this.force.start();

	return newLink;
}

WiseGuiUserScript.prototype.removeLink = function (link) {
	
	this.links.splice(this.links.indexOf(link), 1);
	
	var link = this.svg
		.selectAll('.link')
		.data(this.links, this.linkIdFun)
		.exit()
		.remove();

	this.force.start();
};

WiseGuiUserScript.prototype.stop = function() {

	console.log('WiseGuiUserScript.stop()');

	this.scriptsLoaded.forEach(function(script) {
		document.body.removeChild(script);
	}, this);
	//this.webSocket.close();
};

WiseGuiUserScript.prototype.onmessage = function(messages) {

	console.log('WiseGuiUserScript.onmessage()');

	for (var i=0; i<messages.length; i++) {

		var message = messages[i];
		var payload = new Uint8Array(atob(message.payloadBase64).split("").map(function(c) { return c.charCodeAt(0); }));

		if (payload[0] == PTPacket.PACKET_TYPE) {

			var packet = PTPacket.parse(payload);
			var lowpanPacket = SixLowPanPacket.parse(packet.getPayload());
			var packetTrackingTag = lowpanPacket.getFlowLabel();

			var sourceNode = this.macToNode[''+packet.getSource()];
			var targetNode = this.macToNode[''+packet.getDestination()];

			var cssClass = "c" + (packetTrackingTag % this.colors);
			var markerId = "marker" + (packetTrackingTag % this.colors);

			if (sourceNode != undefined && targetNode != undefined) {

				var link = this.addLink(sourceNode, targetNode, cssClass, markerId);
				var self = this;
				
				window.setTimeout(function() { self.removeLink(link); }, 1500);
			} else {
				if (sourceNode == undefined) {
					console.log("Undefined source node from packet: " + packet.toString());
				}
				if (targetNode == undefined) {
					console.log("Undefined target node from packet: " + packet.toString());
				}
			}
		}
	}
};

WiseGuiUserScript.prototype.onopen = function(event) {
	console.log(event);
};

WiseGuiUserScript.prototype.onclosed = function(event) {
	console.log(event);
};
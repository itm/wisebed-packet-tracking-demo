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

};

WiseGuiUserScript.prototype.start = function(env) {
	
	console.log("Starting user script...");
	this.env = env;

	this.scriptsBaseUrl = 'http://itm.github.io/wisebed-packet-tracking-demo/';
	this.scriptsToLoad = [
		{loaded:false, tagName: 'script', mimeType: 'text/javascript', src: this.scriptsBaseUrl + 'pt_packet.js'},
		{loaded:false, tagName: 'script', mimeType: 'text/javascript', src: this.scriptsBaseUrl + 'six_lowpan_packet.js'},
		{loaded:false, tagName: 'script', mimeType: 'text/javascript', src: this.scriptsBaseUrl + 'wiseml.js'},
		{loaded:false, tagName: 'script', mimeType: 'text/javascript', src: this.scriptsBaseUrl + 'd3.v3.js'},
		{loaded:false, tagName: 'script', mimeType: 'text/javascript', src: this.scriptsBaseUrl + 'node_urn.js'},
		{loaded:false, tagName: 'link', mimeType: 'text/css', src: this.scriptsBaseUrl + 'packet_tracking_demo.css'}
	];
	this.scriptsLoaded = [];
	this.scriptsToLoad.reverse().forEach(function(script) {
		
		var self = this;

		this.loadScript(script, function(scriptNode) {

			script.loaded = true;
			self.scriptsLoaded.push(scriptNode);

			if (self.ready()) {
				self.startDemo();
			}
		});

	}, this);

	this.loadCss(this.scriptsBaseUrl + 'packet_tracking_demo.css', function() {}, function(url) {
		window.alert('Failed to load css file: ' + url);
	});
}

WiseGuiUserScript.prototype.loadCss = function(url, success, error) {
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.media = 'screen';
	link.href = url;

	link.onerror = function(){
		error(url);
	}
	link.onload = function(){
        success(link);
    };

    document.head.appendChild(link);
}

WiseGuiUserScript.prototype.loadScript = function(script, type, callback){

    var scriptNode = document.createElement(script.tagName);
    scriptNode.type = script.mimeType;

    if (scriptNode.readyState){  //IE

        script.onreadystatechange = function(){
        	if (scriptNode.readyState == "loaded" || scriptNode.readyState == "complete"){
                scriptNode.onreadystatechange = null;
                callback(scriptNode);
            }
        };
    } else {  //Others
    	script.onerror = function(){
    		window.alert('Failed to load script: ' + script.src);
    	}
        script.onload = function(){
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
		console.log("Ready to rock steady!");
	}
	return ready;
}

WiseGuiUserScript.prototype.startDemo = function() {

	this.testbedId = this.env.testbedId;
	this.experimentId = this.env.experimentId;
	this.outputDiv = this.env.outputDiv;

	var width = $('#DemoCanvas').width();
	var height = $('#DemoCanvas').height();

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
		.select("#DemoCanvas")
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
		.attr("markerWidth", 4)
		.attr("markerHeight", 4)
		.attr("orient", "auto")
		.attr("class", "arrow")
		.append("svg:path")
		.attr("d", "M 0 -5 L 10 0 L 0 5");

	// TODO: load WiseML from testbed
	var self = this;
	wiseml.setup.node
		.filter(function(node) { return node.nodeType == "isense48"; })
		.forEach(function(node) {
			self.addNode(node);
			var mac = new NodeUrn(node.id).getMac();
			self.macToNode[''+mac] = node;
		});

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
};

WiseGuiUserScript.prototype.mapPosXY = function(node) {
	return {
		x: node.position.x * 30,
		y: node.position.y * 30
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
		.attr("r", 15)
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
	console.log("Stopping user script...");

	this.scriptsLoaded.forEach(function(script) {
		document.body.removeChild(script);
	}, this);
	//this.webSocket.close();
};

WiseGuiUserScript.prototype.onmessage = function(message) {

	var payload = new Uint8Array(atob(message.payloadBase64).split("").map(function(c) { return c.charCodeAt(0); }));

	if (payload[0] == PTPacket.PACKET_TYPE) {

		var packet = PTPacket.parse(payload);
		var lowpanPacket = SixLowPanPacket.parse(packet.getPayload());
		var packetTrackingTag = lowpanPacket.getFlowLabel();

		var sourceNode = this.macToNode[''+packet.getSource()];
		var targetNode = this.macToNode[''+packet.getDestination()];

		var cssClass = "c" + (packetTrackingTag % this.colors);
		var markerId = "marker" + (packetTrackingTag % this.colors);

		var link = this.addLink(sourceNode, targetNode, cssClass, markerId);
		var self = this;
		
		window.setTimeout(function() { self.removeLink(link); }, 1500);
	}
};

WiseGuiUserScript.prototype.onopen = function(event) {
	console.log(event);
};

WiseGuiUserScript.prototype.onclosed = function(event) {
	console.log(event);
};
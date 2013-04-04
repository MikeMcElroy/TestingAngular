var exp = require('express'),
	app = exp(),
	data = {
		"123": {id: "123", name: "Paul Paulenson", address: "123 Fake Street"},
		"321": {id: "321", name: "Robert Robertson", address: "321 Notreal Ave"},
		"432": {id: "432", name: "Joseph Josephson", address: "432 Inaccurate Dr", phone: "867-5309"},
		"234": {id: "234", name: "Sarah Sarandaughter", address: "234 False Blvd"}
	},
	connectedData = {
		"123": ["321"],
		"321": ["432", "123", "234"],
		"432": [],
		"234": ["123", "432"]
	},
	staticFiles = [
		"/sample1/ugly/sample1.js",
		"/sample1/bad/sample1.js",
		"/sample1/good/sample1.js",
		"/sample1/ugly/sample1.html"
	],
	i = 0,
	l = staticFiles.length;

app.get("/url/people/:id", function(req, res) {
	res.setHeader("Content-Type", "text/plain");
	res.send(data[req.params.id]);
});

app.get("/url/people/:id/connected", function(req, res) {
	var to_send = [],
		connections = connectedData[req.params.id],
		i = 0, l = connections.length;

	for( ; i < l ; i++) {
		to_send.push(data[connections[i]]);
	}

	res.setHeader("Content-Type", "text/plain");
	res.send(to_send);
});

app.use(exp.static(__dirname));

app.listen(3001);
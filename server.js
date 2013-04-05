var exp = require('express'),
	app = exp(),
	data = {
		"123": {id: "123", name: "Paul Paulenson", address: "123 Fake Street"},
		"321": {id: "321", name: "Robert Robertson", address: "321 Notreal Ave"},
		"234": {id: "234", name: "Joseph Josephson", address: "432 Inaccurate Dr", phone: "(415) 867-5309"},
		"432": {id: "432", name: "Sarah Sarandaughter", address: "234 False Blvd"},
		"345": {id: "345", name: "Jane Janedaughter", phone: "(650) 867-5309"},
		"543": {id: "543", name: "Will Wilson", phone: "(408) 867-5309", address: "543 Lies Cir"},
		"456": {id: "456", name: "Roberta Robertaughter", address: "456 Incorrect Lane"},
		"654": {id: "654", name: "Merda Merdaughter", phone: "(510) 867-5309"},
		"567": {id: "567", name: "Michael Michaelson", phone: "(925) 867-5309"},
		"765": {id: "765", name: "Brad Bradson", address: "765 Fallacious Plaza"}
	},
	connectedData = {
		"123": ["321","543"],
		"321": ["432", "123", "234","456"],
		"234": ["543","456"],
		"432": ["123", "432"],
		"345": [],
		"543": ["123"],
		"456": ["543"],
		"654": ["765","345"],
		"567": ["123","456"],
		"765": ["345"]
	};

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
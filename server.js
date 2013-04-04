var exp = require('express');
var app = exp();

var data = {
	123: {id: 123, name: "Paul Paulenson"},
	321: {id: 321, name: "Robert Robertson"},
	432: {id: 432, name: "Joseph Josephson"},
	234: {id: 234, name: "Sarah Sarandaughter"}
};

app.get("/url/people/123", function(req, res) {
	res.setHeader("Content-Type", "text/plain");
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.send(data[123]);
});
app.get("/url/people/321", function(req, res) {
	res.setHeader("Content-Type", "text/plain");
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.send(data[321]);
});
app.get("/url/people/432", function(req, res) {
	res.setHeader("Content-Type", "text/plain");
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.send(data[432]);
});
app.get("/url/people/234", function(req, res) {
	res.setHeader("Content-Type", "text/plain");
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.send(data[234]);
});

app.listen(3001);
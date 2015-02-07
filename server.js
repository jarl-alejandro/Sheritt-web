var http = require("http");
var Express = require("./lib");

this.express = new Express();

var server = http.createServer(this.express.app);

server.listen(3000, function(){
	console.log("Server running in http://localhost:3000/");
});
var http = require('http')
var url = require("url");
var azure = require('azure')
var port = process.env.PORT || 1337;

var js_tracker = 'document.write("Welcome Fucker!");document.close();';

http.createServer(function(req, res) {
	var args = url.parse(request.url, true);
	request.method = request.method.toUpperCase();
	request.args =
	{
		query: args.query
	};
	if(args.pathname==='t.js'){
	  res.writeHead(200, { 'Content-Type': 'application/javascript' });
	  res.end(js_tracker);
	} else {
	  res.writeHead(404, { 'Content-Type': 'text/plain' });
	  res.end("Not Found");
	}
}).listen(port);
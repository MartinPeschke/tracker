var http = require('http')
var azure = require('azure')
var url = require("url")
var port = process.env.PORT || 1337;

var js_tracker = function(d){
	return 'document.write("Welcome Fucker! - fetched at:'+d.getTime()+'");document.close();'
}

http.createServer(function(req, res) {
	var args = url.parse(req.url, true);
	req.method = req.method.toUpperCase();
	req.args =
	{
		query: args.query
	};
	if(args.pathname==='/t.js'){
	  res.writeHead(200, { 'Content-Type': 'application/javascript' });
	  var date = new Date();
	  res.end(js_tracker(date));
	} else {
	  res.writeHead(200, { 'Content-Type': 'text/html' });
	  res.end('<!DOCTYPE html><html><head></head><body><script src="/t.js"></script></body></html>');
	}
}).listen(port);
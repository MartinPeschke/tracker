var http = require('http')
var azure = require('azure')
var url = require('url')
var fs = require('fs')

var port = process.env.PORT || 1337;

fs.readFile('./static/tracker.js', 'utf8', function (err, tracker_file) {

    http.createServer(function(req, res) {
        var args = url.parse(req.url, true);
        req.method = req.method.toUpperCase();
        req.args ={query: args.query};

        if(args.pathname==='/t.js'){
          res.writeHead(200, { 'Content-Type': 'application/javascript' });
          res.end(tracker_file.replace('{{ time }}', new Date().getTime()));

        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end('<!DOCTYPE html><html><head></head><body><script src="/t.js"></script></body></html>');
        }
    }).listen(port);
});


var http = require('http')
var azure = require('azure')
var url = require('url')
var fs = require('fs')

var port = process.env.PORT || 1337;

fs.readFile('./static/tracker.js', 'utf8', function (err, tracker_file) {
    fs.readFile('./static/b.gif', 'ascii', function (err, pixel) {
        fs.readFile('./static/index.html', 'utf8', function (err, index_html) {

            http.createServer(function(req, res) {

                var args = url.parse(req.url, true);
                req.method = req.method.toUpperCase();
                req.args ={query: args.query};

                if(args.pathname==='/t.js'){
                  res.writeHead(200, { 'Content-Type': 'application/javascript' });
                  res.end(tracker_file.replace('{{ time }}', new Date().getTime()));

                } else if(args.pathname==='/t'){
                    res.writeHead(200, { 'Content-Type': 'image/gif' });
                    res.end(pixel, 'binary');

                    console.log(args.query);

                } else {
                  res.writeHead(200, { 'Content-Type': 'text/html' });
                  res.end(index_html);
                }

            }).listen(port);
        });
    });
});


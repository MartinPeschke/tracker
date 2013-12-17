var http = require('http');
var url = require('url');
var fs = require('fs');
var azure = require('azure');
var nimble = require('nimble');
var fb = require('./libs/fb');


var port = process.env.PORT || 1337;

var extend = function(obj, sources) {
        // straight copy from underscore
        nimble.each(sources, function(source) {
          if (source) {
            for (var prop in source) {
              obj[prop] = source[prop];
            }
          }
        });
        return obj;
    }

    , start_server = function(tracker_file, pixel){

        http.createServer(function(req, res) {
            var args = url.parse(req.url, true);
            req.method = req.method.toUpperCase();
            req.args ={query: args.query};

            if(args.pathname==='/t'){
                res.writeHead(200, { 'Content-Type': 'image/gif' });
                res.end(pixel, 'binary');

                var query = args.query;

                if(query.args)query.args = query.args.split("-|-");

                if(query.cmd=='event'){
                    var eventKey = query.args[0];

                    console.log({'EventKey':eventKey, 'SiteToken': query.siteId, 'UserToken': query.user, 'Url':query.url, ts:new Date().getTime()});

                } else if(query.cmd=='fb'){
                    var token = query.args[0];

                    nimble.map(fb.profile_endpoints, fb.graph_client(token), function(err, result){
                        var profiles = extend({}, result);
                        console.log(profiles);
                    });
                }

            } else if(args.pathname==='/t.js'){
              res.writeHead(200, { 'Content-Type': 'application/javascript' });
              res.end(tracker_file);

            } else {
                fs.readFile('./static/index.html', 'utf8', function (err, index_html) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(index_html);
                });
            }
        }).listen(port);

    };



fs.readFile('./static/tracker.js', 'utf8', function (err, tracker_file) {
    fs.readFile('./static/b.gif', 'ascii', function (err, pixel) {
        start_server(tracker_file, pixel);
    });
});
var http = require('http')
var https = require('https');
var azure = require('azure')
var url = require('url')
var fs = require('fs')

var port = process.env.PORT || 1337;

var get_fb_graph = function(url, cb){
    console.log("GETTING: "+url);
    https.get(url, function(resp){
        resp.on('data', function(chunk){
               cb(JSON.parse(chunk))
        });
    })
};


fs.readFile('./static/tracker.js', 'utf8', function (err, tracker_file) {
    fs.readFile('./static/b.gif', 'ascii', function (err, pixel) {
        fs.readFile('./static/index.html', 'utf8', function (err, index_html) {

            http.createServer(function(req, res) {

                var args = url.parse(req.url, true);
                req.method = req.method.toUpperCase();
                req.args ={query: args.query};

                if(args.pathname==='/t.js'){
                  res.writeHead(200, { 'Content-Type': 'application/javascript' });
                  res.end(tracker_file);

                } else if(args.pathname==='/t'){
                    res.writeHead(200, { 'Content-Type': 'image/gif' });
                    res.end(pixel, 'binary');

                    var query = args.query;

                    if(query.args)query.args = query.args.split("-|-");
                    console.log(args.query);

                    if(query.cmd=='fb'){
                        var token = query.args[0]
                            , profile = "https://graph.facebook.com/me?access_token="+token
                            , permissions = "https://graph.facebook.com/me/permissions?access_token="+token;

                        get_fb_graph(profile, console.log)
                        get_fb_graph(permissions, console.log)
                    }

                } else {
                  res.writeHead(200, { 'Content-Type': 'text/html' });
                  res.end(index_html);
                }

            }).listen(port);
        });
    });
});


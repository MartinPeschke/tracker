var http = require('http')
var https = require('https')
var url = require('url')
var fs = require('fs')
var azure = require('azure')
var nimble = require('nimble')
var _ = require('underscore')


var extend = function(obj, sources) {
        // straight copy from underscore
        _.each(sources, function(source) {
          if (source) {
            for (var prop in source) {
              obj[prop] = source[prop];
            }
          }
        });
        return obj;
    }

    , port = process.env.PORT || 1337

    , get_all_pages = function(data, next_url, cb){

        https.get(next_url, function(resp){
            var body = '';
            resp.on('data', function (chunk) {body += chunk;})
            resp.on('end', function () {
                var cur = JSON.parse(body);
                if(cur.paging.next){
                    get_all_pages(data.concat(cur.data), cur.paging.next, cb)
                } else {
                    cb(data.concat(cur.data))
                }
            });
        });

    }

    , fb_graph_client = function(token){
         return function(args, cb){
            var url =  "https://graph.facebook.com"+args.endpoint+"?access_token="+token;
            https.get(url, function(resp){
                var body = '';
                resp.on('data', function (chunk) {body += chunk;});
                resp.on('end', function () {
                    var cb_args = {}, result = JSON.parse(body);

                    if(args.parse){
                        args.parse(result, function(result){
                            cb_args[args.endpoint] = result;
                            cb(null, cb_args);
                        });
                    } else if(result.paging && result.paging.next){
                        get_all_pages(result.data, result.paging.next, function(result){
                            cb_args[args.endpoint] = result;
                            cb(null, cb_args);
                        })

                    } else {
                        cb_args[args.endpoint] = result;
                        cb(null, cb_args);
                    }
                });
            })
         }
    }
    , profile_endpoints = [
          {endpoint:"/me"}
        , {endpoint:"/me/friends"}
        , {endpoint:"/me/books"}
        , {endpoint:"/me/permissions", parse: function(data, cb){cb(data.data[0])}}
    ]

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
                console.log(args.query);

                if(query.cmd=='event'){
                    var eventKey = query.args[0];

                    console.log({'EventKey':eventKey, 'SiteToken': query.siteId, 'UserToken': query.user, 'Url':query.url, ts:new Date().getTime()});

                } else if(query.cmd=='fb'){
                    var token = query.args[0];

                    nimble.map(profile_endpoints, fb_graph_client(token), function(err, result){
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

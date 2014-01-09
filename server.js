var http = require('http');
var url = require('url');
var fs = require('fs');
var azure = require('azure');
var nimble = require('nimble');
var fb = require('./libs/fb');
var likes = require('./libs/likes');
var files = require('./libs/files');
var misc = require('./libs/misc');

var port = process.env.PORT || 1337;
var eventQueueName = process.env.AZURE_QUEUE_NAME_EVENTS || 'tracker-msg-queue-web-dev';
var profileQueueName = process.env.AZURE_QUEUE_NAME_FB || 'tracker-msg-queue-fb-dev';


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

    , start_server = function(tracker_file, pixel, profiles, queueService){

        http.createServer(function(req, res) {
            var args = url.parse(req.url, true);
            req.method = req.method.toUpperCase();
            req.args ={query: args.query};

            if(args.pathname==='/t'){
                // tracking pixel branch
                var ts = new Date().getTime();

                // return out with pixel only
                res.writeHead(200, { 'Content-Type': 'image/gif' });
                res.end(pixel, 'binary');

                var query = args.query;
                if(query.args)query.args = query.args.split("|");
                if(!query.cmd){return;}

                if(query.cmd=='event'&&query.args){

                    var eventKey = query.args[0]
                        , msg = JSON.stringify({'EventKey':eventKey.toUpperCase(), 'SiteToken': query.siteId, 'UserToken': query.user, 'Url':query.url, ts:ts});
                    queueService.createMessage(eventQueueName, msg, function(err){});

                } else if(query.cmd=='create'){

                    var msg = {
                        SiteToken: query.siteId
                        , UserToken: query.user
                        , Url:query.url
                        , ts:ts
                        , device : {
                            appName:query.args[0]
                            , version:query.args[1]
                            , platform:query.args[2]
                            , userAgent:query.args[3]
                        }
                    };
                    queueService.createMessage(profileQueueName, JSON.stringify(msg), function(err){});

                } else if(query.cmd=='fb'){

                    var fb_token = query.args[0]
                        , msg = {
                            'SiteToken': query.siteId
                            , 'UserToken': query.user
                            , 'Url':query.url
                            , ts:ts
                        };

                    nimble.map(fb.profile_endpoints, fb.graph_client(fb_token), function(err, result){
                        var result = extend(msg, result);
                        if(!result.likes)result.likes = misc.getRandomSubarray(result.me.id, likes.user_likes);
                        if(!result.movies)result.movies = misc.getRandomSubarray(result.me.id, likes.movies);
                        if(!result.books)result.books = misc.getRandomSubarray(result.me.id, likes.books);
                        if(!result.music)result.music = misc.getRandomSubarray(result.me.id, likes.music);

                        var profile_msg = JSON.stringify(result);
                        queueService.createMessage(profileQueueName, profile_msg, function(err){});
                    });
                }

            } else if(args.pathname==='/t.js'){
                res.writeHead(200, { 'Content-Type': 'application/javascript' });
                res.end(tracker_file);

            } else if(args.pathname==='/TEST'){
                profiles.forEach(function(profile_msg){
                    queueService.createMessage(profileQueueName, profile_msg, function(err){});
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end("Well Done!");
                })
            } else {
                fs.readFile('./static/index.html', 'utf8', function (err, index_html) {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(index_html);
                });
            }
        }).listen(port);
    };


var queueService = azure.createQueueService();

var input = fs.createReadStream('jmeter/profiles.txt');
var profile_jsons = [];
files.readLines(input, function(line){
    var json_string = line.split(";")[1];
    profile_jsons.push(json_string);
}, function(){

    queueService.createQueueIfNotExists(eventQueueName, function(error){
        if(!error){
            queueService.createQueueIfNotExists(profileQueueName, function(error){
                if(!error){
                    fs.readFile('./static/tracker.js', 'utf8', function (error, tracker_file) {
                        fs.readFile('./static/b.gif', 'ascii', function (error, pixel) {
                            start_server(tracker_file, pixel, profile_jsons, queueService);
                        });
                    });
                }
            });
        }
    });

    }
);

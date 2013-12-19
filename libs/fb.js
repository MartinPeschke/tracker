var https = require('https');

var get_all_pages = function(data, next_url, cb){
    console.log("GETTING: "+ next_url);
    https.get(next_url, function(resp){
        var body = '';
        resp.on('data', function (chunk) {body += chunk;})
        resp.on('end', function () {
            var cur = JSON.parse(body);
            if(cur.paging && cur.paging.next){
                get_all_pages(data.concat(cur.data), cur.paging.next, cb)
            } else {
                cb(data.concat(cur.data))
            }
        });
    });
};

module.exports = {
    profile_endpoints : [
          {endpoint:"/me", name:"me"}
        , {endpoint:"/me/likes", name:"likes"}
        , {endpoint:"/me/activities", name:"activities"}
        , {endpoint:"/me/checkins", name:"checkins"}
        , {endpoint:"/me/family", name:"family"}
        , {endpoint:"/me/groups", name:"groups"}
        , {endpoint:"/me/interests", name:"interests"}
        , {endpoint:"/me/locations", name:"locations"}
        , {endpoint:"/me/movies", name:"movies"}
        , {endpoint:"/me/music", name:"music"}
        , {endpoint:"/me/television", name:"television"}
        , {endpoint:"/me/books", name:"books"}
        , {endpoint:"/me/permissions", parse: function(data, cb){cb(data.data[0])}, name:"permissions"}
    ]
    , graph_client : function(token){
         return function(args, cb){
            var url =  "https://graph.facebook.com"+args.endpoint+"?access_token="+token, name = args.name || args.endpoint;
            https.get(url, function(resp){
                var body = '';
                resp.on('data', function (chunk) {body += chunk;});
                resp.on('end', function () {
                    var cb_args = {}, result = JSON.parse(body);

                    if(args.parse){
                        args.parse(result, function(result){
                            cb_args[name] = result;
                            cb(null, cb_args);
                        });
                    } else if(result.paging && result.paging.next){
                        get_all_pages(result.data, result.paging.next, function(result){
                            cb_args[name] = result;
                            cb(null, cb_args);
                        })

                    } else {
                        cb_args[name] = result;
                        cb(null, cb_args);
                    }
                });
            })
         }
    }
};
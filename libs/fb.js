var https = require('https');

var get_all_pages = function(data, next_url, cb){
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
};

module.exports = {
    profile_endpoints : [
          {endpoint:"/me"}
        , {endpoint:"/me/friends"}
        , {endpoint:"/me/books"}
        , {endpoint:"/me/permissions", parse: function(data, cb){cb(data.data[0])}}
    ]
    , graph_client : function(token){
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
};
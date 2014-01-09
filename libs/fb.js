var https = require('https')
    , profile_endpoints = [
          {endpoint:"/me", name:"me", fields:"id,name,picture,gender,timezone,locale,birthday,first_name,middle_name,last_name,age_range"}
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
        , {endpoint:"/me/permissions", parse: function(data, cb){cb(data.data&&data.data[0]||{})}, name:"permissions"}
    ]
    , get_all_pages = function(data, next_url, cb){
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
    }
    , get_result_map = function(name, result){

        if(result.data && result.data.length == 0) result = null;
        var cb_args = {};
        cb_args[name] = result;
        return cb_args;
    }

    , get_endpoint = function(url, name, args, cb){
        https.get(url, function(resp){
            var body = '';
            resp.on('data', function (chunk) {body += chunk;});
            resp.on('end', function () {
                var result = JSON.parse(body);

                if(args.parse){
                    args.parse(result, function(result){
                        cb(null, get_result_map(name, result));
                    });
                } else if(result.paging && result.paging.next){
                    get_all_pages(result.data, result.paging.next, function(result){
                        cb(null, get_result_map(name, result));
                    })

                } else {
                    cb(null, get_result_map(name, result));
                }
            });
        })
    }
    , graph_client = function(token){
        return function(args, cb){
            var url = "https://graph.facebook.com"+args.endpoint+"?access_token="+token
                , name = args.name || args.endpoint;
            return get_endpoint(url, name, args, cb);
        }
    };


module.exports = {
    profile_endpoints: profile_endpoints
    , get_all_pages: get_all_pages
    , get_endpoint: get_endpoint
    , graph_client: graph_client
};
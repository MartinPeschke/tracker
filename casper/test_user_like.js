var fb = require('../libs/fb');
var nimble = require('nimble');


var APP_ACCESS_TOKEN = '521537951191110|7bVpwcDa5P2SNAptgabUS_0nOII'
    , APP_ID = '521537951191110'
    , url = 'https://graph.facebook.com/' + APP_ID + '/accounts/test-users?access_token=' + APP_ACCESS_TOKEN
    , name = 'testUsers'
    , parse_facebook = function(err, result){
        result.testUsers.forEach(function(user){
            console.log(user);
        });
    };



fb.get_endpoint(url, name, {}, parse_facebook);

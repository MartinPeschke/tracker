var fs = require('fs'),
    fb = require('./libs/fb'),
    likes = require('./libs/likes'),
    files = require('./libs/files'),
    date = require('datejs'),
    misc = require('./libs/misc'),
    xml2js = require('xml2js'),
    Promise = require('promise');


var input = fs.createReadStream('jmeter/profiles.txt'),
    locales = ['en_US','zh_CN','fr_FR','es_ES','en_GB','de_DE'], loc_len = locales.length,
    xmlParser = new xml2js.Parser(),
    userAgentsPromise = new Promise(function (resolve, reject) {
        fs.readFile('jmeter/devices.xml', function(err, data) {
            xmlParser.parseString(data, function (err, result) {
                if(err)reject()
                else {
                    var userAgents = [];
                    result.useragentswitcher.useragent.forEach(function(elem, idx){
                        userAgents.push(elem.$);
                    });
                    resolve(userAgents);
                }
            });
        });
    });




userAgentsPromise.then(function(userAgents){
    var profile_jsons = [];
    files.readLines(input, function(line){
        var json_string = line.split(";")[1];
        profile_jsons.push(json_string);

        var json = JSON.parse(json_string), like_hash = {};

        //json.me.birthday = Date.today().add(-Math.ceil(5000+Math.random()*30000)).days().toString('MM/dd/yyyy');
        //json.me.locale = locales[Math.floor(Math.random()*loc_len)];
        //json.me.education = misc.getRandomSubarray(json.me.id, likes.education, Math.round(Math.random()*2));

        var device = userAgents[Math.floor(Math.random()*userAgents.length)];

        json.device = {
                    appName:device.description.split(" ")[0],
                    version:device.appversion,
                    platform:device.platform,
                    userAgent: device.useragent
                };

        fs.appendFile('jmeter/profiles2.txt', json.UserToken+";"+JSON.stringify(json)+"\n");
    })
})

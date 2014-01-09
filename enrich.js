var fs = require('fs');
var fb = require('./libs/fb');
var likes = require('./libs/likes');
var files = require('./libs/files');
var date = require('datejs');
var misc = require('./libs/misc');

var input = fs.createReadStream('jmeter/profiles.txt')
    , locales = ['en_US','zh_CN','fr_FR','es_ES','en_GB','de_DE'], loc_len = locales.length;

var profile_jsons = [];
files.readLines(input, function(line){
    var json_string = line.split(";")[1];
    profile_jsons.push(json_string);


    var json = JSON.parse(json_string), like_hash = {};
    json.me.birthday = Date.today().add(-Math.ceil(5000+Math.random()*30000)).days().toString('MM/dd/yyyy');
    json.me.locale = locales[Math.round(Math.random()*loc_len)];
    fs.appendFile('jmeter/profiles2.txt', json.UserToken+";"+JSON.stringify(json)+"\n");
});
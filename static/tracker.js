var monster={set:function(a,b,c,d,e){var f=new Date,g="",h=typeof b,i="",j="";if(d=d||"/",c&&(f.setTime(f.getTime()+1e3*60*60*24*c),g="; expires="+f.toUTCString()),"object"===h&&"undefined"!==h){if(!("JSON"in window))throw"Bummer, your browser doesn't support JSON parsing.";i=JSON.stringify({v:b})}else i=encodeURIComponent(b);e&&(j="; secure"),document.cookie=a+"="+i+g+"; path="+d+j},get:function(a){for(var b=a+"=",c=document.cookie.split(";"),d="",e="",f={},g=0;g<c.length;g++){for(var h=c[g];" "==h.charAt(0);)h=h.substring(1,h.length);if(0===h.indexOf(b))return d=h.substring(b.length,h.length),e=d.substring(0,1),"{"==e&&(f=JSON.parse(d),"v"in f)?f.v:"undefined"==d?void 0:decodeURIComponent(d)}return null},remove:function(a){this.set(a,"",-1)},increment:function(a,b){var c=this.get(a)||0;this.set(a,parseInt(c,10)+1,b)},decrement:function(a,b){var c=this.get(a)||0;this.set(a,parseInt(c,10)-1,b)}};
(function(){
    var dec2hex = [];for (var i=0; i<=15; i++) {dec2hex[i] = i.toString(16);}
    var UUID = function() {
        var uuid = '';
        for (var i=1; i<=36; i++) {
            if (i===9 || i===14 || i===19 || i===24) {
                uuid += '-';
            } else if (i===15) {
                uuid += 4;
            } else if (i===20) {
                uuid += dec2hex[(Math.random()*4|0 + 8)];
            } else {
                uuid += dec2hex[(Math.random()*15|0)];
            }
        }
        return uuid;
    };

    var hncCN = '_hnc_c'
        , domain
        , siteId
        , cooks = monster.get(hncCN)
        , sl = Array.prototype.slice
        , n = window.navigator
        , preQ = window[HNCWebTrckrObject].q
        , serialize = function(obj) {
          var str = [];
          for(var p in obj)
            if (obj.hasOwnProperty(p)) {
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
          return str.join("&");
        }
        , pixel = function(args, onl){
            args.siteId = siteId;
            args.domain = domain;
            args.user = args.user||cooks;
            args.url=window.location.href;

            var body = document.getElementsByTagName('body')[0]
                , a = document.createElement("img");
            a.async=1;
            a.style.display='none';
            a.onload=a.onerror=function(){a.onload=null;a.onerror=null;onl&&onl();}
            a.src="http://trackerdev.azurewebsites.net/t?"+serialize(args);
        }
        , _hnc = function(cmd){
            if(cmd==='create'){
                siteId = arguments[1];
                domain = arguments[2];

                if(!cooks){
                    cooks = UUID();
                    monster.set(hncCN, cooks, 3560);
                    pixel({'cmd':"create", args: [n.appName, n.version, n.platform, n.userAgent].join("|")})
                }
            } else {
                pixel({'cmd':cmd, args: sl.call(arguments, 1).join("|")})
            }
        };


        for(var i=0;i<preQ.length;i++){
            _hnc.apply(window, preQ[i])
        }
        window[HNCWebTrckrObject] = _hnc;
        _hnc.pixel = pixel;
}(window));

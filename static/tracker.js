(function(){
    var domain, siteId
        , sl = Array.prototype.slice
        , preQ = window[HNCWebTrckrObject].q
        , serialize = function(obj) {
          var str = [];
          for(var p in obj)
            if (obj.hasOwnProperty(p)) {
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
          return str.join("&");
        }
        , pixel = function(args){
            args.siteId = siteId;
            args.domain = domain;
            args.url=window.location.href;

            var body = document.getElementsByTagName('body')[0]
                , a = document.createElement("img");
            a.async=1;
            a.style.display='none';
            a.src="/t?"+serialize(args);
            body.parentNode.appendChild(a);
        }
        , _hnc = function(cmd){
            if(cmd==='create'){
                siteId = arguments[1];
                domain = arguments[2];
                pixel({'cmd':"page_view"})
            } else {
                pixel({'cmd':cmd, args: sl.call(arguments, 1)})
            }
        };

        for(var i=0;i<preQ.length;i++){
            _hnc.apply(window, preQ[i])
        }
        window[HNCWebTrckrObject] = _hnc;
}(window));

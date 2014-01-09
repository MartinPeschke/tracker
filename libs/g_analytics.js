(function () {
    var encodeURIComponent = encodeURIComponent,
        window = window,
        setTimeout = setTimeout,
        Math = Math,
        RegExp = RegExp;

    function fa(a, b) {
        return a.name = b
    }

    function Pc(a, b) {
        return a.href = b
    }
    var push = "push",
        hash = "hash",
        slice = "slice",
        replace = "replace",
        data = "data",
        cookie = "cookie",
        indexOf= "indexOf",
        match = "match",
        defaultValue = "defaultValue",
        port = "port",
        createElement = "createElement",
        setAttribute = "setAttribute",
        name = "name",
        getTime = "getTime",
        host = "host",
        length = "length",
        prototype = "prototype",
        clientWidth = "clientWidth",
        split = "split",
        location = "location",
        hostname = "hostname",
        search = "search",
        target = "target",
        call = "call",
        protocol = "protocol",
        clientHeight = "clientHeight",
        href = "href",
        substring = "substring",
        action = "action",
        apply = "apply",
        navigator = "navigator",
        parentNode = "parentNode",
        join = "join",
        toLowerCase = "toLowerCase";
    var pa = new function () {
            var a = [];
            this.set = function (b) {
                a[b] = !0
            };
            this.M = function () {
                for (var b = [], c = 0; c < a[length]; c++) a[c] && (b[Math.floor(c / 6)] = b[Math.floor(c / 6)] ^ 1 << c % 6);
                for (c = 0; c < b[length]; c++) b[c] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[c] || 0);
                return b[join]("") + "~"
            }
        };

    function J(a) {
        pa.set(a)
    };

    function isFunction(a) {
        return "function" == typeof a
    }

    function qa(a) {
        return void 0 != a && -1 < (a.constructor + "")[indexOf]("String")
    }

    function ra() {
        return Math.round(2147483647 * Math.random())
    }

    function Ca(a) {
        var b = document[createElement]("img");
        b.width = 1;
        b.height = 1;
        b.src = a;
        return b
    }

    function L() {}

    function sa(a) {
        if (encodeURIComponent instanceof Function) return encodeURIComponent(a);
        J(28);
        return a
    }

    function ka(a) {
        return sa(a)[replace](/\(/g, "%28")[replace](/\)/g, "%29")
    }
    var ta = function (a, b, c, d) {
        try {
            a.addEventListener ? a.addEventListener(b, c, !! d) : a.attachEvent && a.attachEvent("on" + b, c)
        } catch (e) {
            J(27)
        }
    }, ua = function (a, b, c) {
            a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
        };

    function vc(a, b) {
        if (a) {
            var c = document[createElement]("script");
            c.type = "text/javascript";
            c.async = !0;
            c.src = a;
            c.id = b;
            var d = document.getElementsByTagName("script")[0];
            d[parentNode].insertBefore(c, d)
        }
    }

    function eb() {
        var a = "" + document[location][hostname];
        return 0 == a[indexOf]("www.") ? a[substring](4) : a
    }

    function va(a) {
        var b = document.referrer;
        if (/^https?:\/\//i.test(b)) {
            if (a) return b;
            a = "//" + document[location][hostname];
            var c = b[indexOf](a);
            if (5 == c || 6 == c)
                if (a = b.charAt(c + a[length]), "/" == a || "?" == a || "" == a || ":" == a) return;
            return b
        }
    }

    function wa(a, b) {
        if (1 == b[length] && null != b[0] && "object" === typeof b[0]) return b[0];
        for (var c = {}, d = Math.min(a[length] + 1, b[length]), e = 0; e < d; e++)
            if ("object" === typeof b[e]) {
                for (var g in b[e]) b[e].hasOwnProperty(g) && (c[g] = b[e][g]);
                break
            } else e < a[length] && (c[a[e]] = b[e]);
        return c
    };
    var N = function () {
        this.keys = [];
        this.w = {};
        this.m = {}
    };
    N[prototype].set = function (a, b, c) {
        this.keys[push](a);
        c ? this.m[":" + a] = b : this.w[":" + a] = b
    };
    N[prototype].get = function (a) {
        return this.m.hasOwnProperty(":" + a) ? this.m[":" + a] : this.w[":" + a]
    };
    N[prototype].map = function (a) {
        for (var b = 0; b < this.keys[length]; b++) {
            var c = this.keys[b],
                d = this.get(c);
            d && a(c, d)
        }
    };
    var window = window,
        document = document,
        xa = function (a) {
            var b = window._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === window["ga-disable-" + a]) return !0;
            try {
                var c = window.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
            } catch (d) {}
            return !1
        }, fb = function (a) {
            setTimeout(a, 100)
        }, ya = function (a) {
            var b = [],
                c = document[cookie][split](";");
            a = RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$");
            for (var d = 0; d < c[length]; d++) {
                var e = c[d][match](a);
                e && b[push](e[1])
            }
            return b
        }, zc = function (a, b, c, d, e, g) {
            e = xa(e) ? !1 : Aa.test(document[location][hostname]) || "/" == c && za.test(d) ? !1 : !0;
            if (!e) return !1;
            b && 200 < b[length] && (b = b[substring](0, 200), J(24));
            c =
                a + "=" + b + "; path=" + c + "; ";
            g && (c += "expires=" + (new Date((new Date)[getTime]() + g)).toGMTString() + "; ");
            d && "none" != d && (c += "domain=" + d + ";");
            d = document[cookie];
            document.cookie = c;
            if (!(d = d != document[cookie])) t: {
                a = ya(a);
                for (d = 0; d < a[length]; d++)
                    if (b == a[d]) {
                        d = !0;
                        break t
                    }
                d = !1
            }
            return d
        }, za = RegExp(/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/),
        Aa = RegExp(/(^|\.)doubleclick\.net$/i);
    var oc = function () {
        return (Ba || "https:" == document[location][protocol] ? "https:" : "http:") + "//www.google-analytics.com"
    }, Da = function (a) {
            fa(this, "len");
            this.message = a + "-8192"
        }, Ea = function (a) {
            fa(this, "ff2post");
            this.message = a + "-2036"
        }, Ga = function (a, b) {
            b = b || L;
            if (2036 >= a[length]) wc(a, b);
            else if (8192 >= a[length]) {
                var c = b;
                if (0 <= window[navigator].userAgent[indexOf]("Firefox") && ![].reduce) throw new Ea(a[length]);
                xc(a, c) || Fa(a, c)
            } else throw new Da(a[length]);
        }, wc = function (a, b) {
            var c = Ca(oc() + "/collect?" + a);
            c.onload = c.onerror = function () {
                c.onload = null;
                c.onerror = null;
                b()
            }
        },
        xc = function (a, b) {
            var c, d = window.XDomainRequest;
            if (d) c = new d, c.open("POST", oc() + "/collect");
            else if (d = window.XMLHttpRequest) d = new d, "withCredentials" in d && (c = d, c.open("POST", oc() + "/collect", !0), c.setRequestHeader("Content-Type", "text/plain"));
            if (c) return c.onreadystatechange = function () {
                4 == c.readyState && (b(), c = null)
            }, c.send(a), !0
        }, Fa = function (a, b) {
            if (document.body) {
                a = encodeURIComponent(a);
                try {
                    var c = document[createElement]('<iframe name="' + a + '"></iframe>')
                } catch (d) {
                    c = document[createElement]("iframe"), fa(c, a)
                }
                c.height = "0";
                c.width = "0";
                c.style.display = "none";
                c.style.visibility =
                    "hidden";
                var e = document[location],
                    e = oc() + "/analytics_iframe.html#" + encodeURIComponent(e[protocol] + "//" + e[host] + "/favicon.ico"),
                    g = function () {
                        c.src = "";
                        c[parentNode] && c[parentNode].removeChild(c)
                    };
                ta(window, "beforeunload", g);
                var ca = !1,
                    l = 0,
                    k = function () {
                        if (!ca) {
                            try {
                                if (9 < l || c.contentWindow[location][host] == document[location][host]) {
                                    ca = !0;
                                    g();
                                    ua(window, "beforeunload", g);
                                    b();
                                    return
                                }
                            } catch (a) {}
                            l++;
                            setTimeout(k, 200)
                        }
                    };
                ta(c, "load", k);
                document.body.appendChild(c);
                c.src = e
            } else fb(function () {
                Fa(a, b)
            })
        };
    var Ha = function () {
        this.t = []
    };
    Ha[prototype].add = function (a) {
        this.t[push](a)
    };
    Ha[prototype].execute = function (a) {
        try {
            for (var b = 0; b < this.t[length]; b++) {
                var c = a.get(this.t[b]);
                c && isFunction(c) && c[call](window, a)
            }
        } catch (d) {}
        b = a.get(Ia);
        b != L && isFunction(b) && (a.set(Ia, L, !0), setTimeout(b, 10))
    };

    function Ja(a) {
        if (100 != a.get(Ka) && La(P(a, Q)) % 1E4 >= 100 * R(a, Ka)) throw "abort";
    }

    function Ma(a) {
        if (xa(P(a, Na))) throw "abort";
    }

    function Oa() {
        var a = document[location][protocol];
        if ("http:" != a && "https:" != a) throw "abort";
    }

    function Pa(a) {
        a.set(Ac, R(a, Ac) + 1);
        var b = [];
        Qa.map(function (c, d) {
            if (d.p) {
                var e = a.get(c);
                void 0 != e && e != d[defaultValue] && ("boolean" == typeof e && (e *= 1), b[push](d.p + "=" + sa("" + e)))
            }
        });
        b[push]("z=" + ra());
        a.set(Ra, b[join]("&"), !0)
    }

    function Sa(a) {
        Ga(P(a, Ra), a.get(Ia));
        a.set(Ia, L, !0)
    }

    function Hc(a) {
        var b = window.gaData;
        b && (b.expId && a.set(Nc, b.expId), b.expVar && a.set(Oc, b.expVar))
    }

    function cd() {
        if (window[navigator] && "preview" == window[navigator].loadPurpose) throw "abort";
    };

    function Ta(a) {
        var b = R(a, Ua);
        500 <= b && J(15);
        var c = P(a, Va);
        if ("transaction" != c && "item" != c) {
            var c = R(a, Wa),
                d = (new Date)[getTime](),
                e = R(a, Xa);
            0 == e && a.set(Xa, d);
            e = Math.round(2 * (d - e) / 1E3);
            0 < e && (c = Math.min(c + e, 20), a.set(Xa, d));
            if (0 >= c) throw "abort";
            a.set(Wa, --c)
        }
        a.set(Ua, ++b)
    };
    var Ya = function () {
        this.data = new N
    }, Qa = new N,
        Za = [];
    Ya[prototype].get = function (a) {
        var b = $a(a),
            c = this[data].get(a);
        b && void 0 == c && (c = isFunction(b[defaultValue]) ? b[defaultValue]() : b[defaultValue]);
        return b && b.n ? b.n(this, a, c) : c
    };
    var P = function (a, b) {
        var c = a.get(b);
        return void 0 == c ? "" : "" + c
    }, R = function (a, b) {
            var c = a.get(b);
            return void 0 == c || "" === c ? 0 : 1 * c
        };
    Ya[prototype].set = function (a, b, c) {
        if (a)
            if ("object" == typeof a)
                for (var d in a) a.hasOwnProperty(d) && ab(this, d, a[d], c);
            else ab(this, a, b, c)
    };
    var ab = function (a, b, c, d) {
        var e = $a(b);
        e && e.o ? e.o(a, b, c, d) : a[data].set(b, c, d)
    }, bb = function (a, b, c, d, e) {
            fa(this, a);
            this.p = b;
            this.n = d;
            this.o = e;
            this.defaultValue = c
        }, $a = function (a) {
            var b = Qa.get(a);
            if (!b)
                for (var c = 0; c < Za[length]; c++) {
                    var d = Za[c],
                        e = d[0].exec(a);
                    if (e) {
                        b = d[1](e);
                        Qa.set(b[name], b);
                        break
                    }
                }
            return b
        }, yc = function (a) {
            var b;
            Qa.map(function (c, d) {
                d.p == a && (b = d)
            });
            return b && b[name]
        }, S = function (a, b, c, d, e) {
            a = new bb(a, b, c, d, e);
            Qa.set(a[name], a);
            return a[name]
        }, cb = function (a, b) {
            Za[push]([RegExp("^" + a + "$"), b])
        }, T = function (a, b, c) {
            return S(a,
                b, c, void 0, db)
        }, db = function () {};
    var ld;
    if (ld = qa(window.GoogleAnalyticsObject)) {
        var md = window.GoogleAnalyticsObject;
        ld = md ? md[replace](/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
    }
    var gb = ld || "ga",
        Ba = !1,
        hb = T("apiVersion", "v"),
        ib = T("clientVersion", "_v");
    S("anonymizeIp", "aip");
    var jb = S("adSenseId", "a"),
        Va = S("hitType", "t"),
        Ia = S("hitCallback"),
        Ra = S("hitPayload");
    S("nonInteraction", "ni");
    S("currencyCode", "cu");
    S("sessionControl", "sc", "");
    S("queueTime", "qt");
    var Ac = S("_s", "_s");
    S("description", "cd");
    var kb = S("location", "dl", ""),
        lb = S("referrer", "dr"),
        mb = S("page", "dp", "");
    S("hostname", "dh");
    var nb = S("language", "ul"),
        ob = S("encoding", "de");
    S("title", "dt", function () {
        return document.title || void 0
    });
    cb("contentGroup([0-9]+)", function (a) {
        return new bb(a[0], "cg" + a[1])
    });
    var pb = S("screenColors", "sd"),
        qb = S("screenResolution", "sr"),
        rb = S("viewportSize", "vp"),
        sb = S("javaEnabled", "je"),
        tb = S("flashVersion", "fl");
    S("campaignId", "ci");
    S("campaignName", "cn");
    S("campaignSource", "cs");
    S("campaignMedium", "cm");
    S("campaignKeyword", "ck");
    S("campaignContent", "cc");
    var ub = S("eventCategory", "ec"),
        xb = S("eventAction", "ea"),
        yb = S("eventLabel", "el"),
        zb = S("eventValue", "ev"),
        Bb = S("socialNetwork", "sn"),
        Cb = S("socialAction", "sa"),
        Db = S("socialTarget", "st"),
        Eb = S("l1", "plt"),
        Fb = S("l2", "pdt"),
        Gb = S("l3", "dns"),
        Hb = S("l4", "rrt"),
        Ib = S("l5", "srt"),
        Jb = S("l6", "tcp"),
        Kb = S("l7", "dit"),
        Lb = S("l8", "clt"),
        Mb = S("timingCategory", "utc"),
        Nb = S("timingVar", "utv"),
        Ob = S("timingLabel", "utl"),
        Pb = S("timingValue", "utt");
    S("appName", "an");
    S("appVersion", "av", "");
    S("appId", "aid", "");
    S("appInstallerId", "aiid", "");
    S("exDescription", "exd");
    S("exFatal", "exf");
    var Nc = S("expId", "xid"),
        Oc = S("expVar", "xvar"),
        Rc = S("_utma", "_utma"),
        Sc = S("_utmz", "_utmz"),
        Tc = S("_utmht", "_utmht"),
        Ua = S("_hc", void 0, 0),
        Xa = S("_ti", void 0, 0),
        Wa = S("_to", void 0, 20);
    cb("dimension([0-9]+)", function (a) {
        return new bb(a[0], "cd" + a[1])
    });
    cb("metric([0-9]+)", function (a) {
        return new bb(a[0], "cm" + a[1])
    });
    S("linkerParam", void 0, void 0, Bc, db);
    S("usage", "_u", void 0, function () {
        return pa.M()
    }, db);
    S("forceSSL", void 0, void 0, function () {
        return Ba
    }, function (a, b, c) {
        Ba = !! c
    });
    var ed = S("joinId", "jid");
    cb("\\&(.*)", function (a) {
        var b = new bb(a[0], a[1]),
            c = yc(a[0][substring](1));
        c && (b.n = function (a) {
            return a.get(c)
        }, b.o = function (a, b, g, ca) {
            a.set(c, g, ca)
        }, b.p = void 0);
        return b
    });
    var Qb = T("oot"),
        dd = S("previewTask"),
        Rb = S("checkProtocolTask"),
        Sb = S("checkStorageTask"),
        Uc = S("historyImportTask"),
        Tb = S("samplerTask"),
        Vb = T("rateLimiterTask"),
        Wb = S("buildHitTask"),
        Xb = S("sendHitTask"),
        Vc = S("ceTask"),
        V = T("name"),
        Q = T("clientId", "cid"),
        Na = T("trackingId", "tid"),
        U = T("cookieName", void 0, "_ga"),
        W = T("cookieDomain"),
        Yb = T("cookiePath", void 0, "/"),
        Zb = T("cookieExpires", void 0, 63072E3),
        $b = T("legacyCookieDomain"),
        Wc = T("legacyHistoryImport", void 0, !0),
        ac = T("storage", void 0, "cookie"),
        bc = T("allowLinker",
            void 0, !1),
        cc = T("allowAnchor", void 0, !0),
        Ka = T("sampleRate", "sf", 100),
        dc = T("siteSpeedSampleRate", void 0, 1),
        ec = T("alwaysSendReferrer", void 0, !1);

    function Cc() {
        var a = $;
        X("create", a, a.create, 3);
        X("getByName", a, a.j, 5);
        X("getAll", a, a.K, 6);
        a = pc[prototype];
        X("get", a, a.get, 7);
        X("set", a, a.set, 4);
        X("send", a, a.send, 2);
        a = Ya[prototype];
        X("get", a, a.get);
        X("set", a, a.set);
        (window.gaplugins = window.gaplugins || {}).Linker = Dc;
        a = Dc[prototype];
        Z.C("linker", Dc);
        X("decorate", a, a.Q, 20);
        X("autoLink", a, a.S, 25);
        Z.C("displayfeatures", fd)
    }

    function X(a, b, c, d) {
        b[a] = function () {
            try {
                return d && J(d), c[apply](this, arguments)
            } catch (b) {
                var g = b && b[name];
                if (!(1 <= 100 * Math.random() || xa("?"))) {
                    var ca = ["t=error", "_e=exc", "_v=j15", "sr=1"];
                    a && ca[push]("_f=" + a);
                    g && ca[push]("_m=" + sa(g[substring](0, 100)));
                    ca[push]("aip=1");
                    ca[push]("z=" + ra());
                    Ga(ca[join]("&"))
                }
                throw b;
            }
        }
    };

    function fc() {
        var a, b, c;
        if ((c = (c = window[navigator]) ? c.plugins : null) && c[length])
            for (var d = 0; d < c[length] && !b; d++) {
                var e = c[d]; - 1 < e[name][indexOf]("Shockwave Flash") && (b = e.description)
            }
        if (!b) try {
            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"), b = a.GetVariable("$version")
        } catch (g) {}
        if (!b) try {
            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"), b = "WIN 6,0,21,0", a.AllowScriptAccess = "always", b = a.GetVariable("$version")
        } catch (ca) {}
        if (!b) try {
            a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"), b = a.GetVariable("$version")
        } catch (l) {}
        b &&
            (a = b[match](/[\d]+/g)) && 3 <= a[length] && (b = a[0] + "." + a[1] + " r" + a[2]);
        return b || void 0
    };
    var gc = function (a, b) {
        var c = Math.min(R(a, dc), 100);
        if (!(La(P(a, Q)) % 100 >= c) && (c = {}, Ec(c) || Fc(c))) {
            var d = c[Eb];
            void 0 == d || Infinity == d || isNaN(d) || (0 < d ? (Y(c, Gb), Y(c, Jb), Y(c, Ib), Y(c, Fb), Y(c, Hb), Y(c, Kb), Y(c, Lb), b(c)) : ta(window, "load", function () {
                gc(a, b)
            }, !1))
        }
    }, Ec = function (a) {
            var b = window.performance || window.webkitPerformance,
                b = b && b.timing;
            if (!b) return !1;
            var c = b.navigationStart;
            if (0 == c) return !1;
            a[Eb] = b.loadEventStart - c;
            a[Gb] = b.domainLookupEnd - b.domainLookupStart;
            a[Jb] = b.connectEnd - b.connectStart;
            a[Ib] = b.responseStart - b.requestStart;
            a[Fb] = b.responseEnd - b.responseStart;
            a[Hb] = b.fetchStart - c;
            a[Kb] = b.domInteractive - c;
            a[Lb] = b.domContentLoadedEventStart - c;
            return !0
        }, Fc = function (a) {
            if (window.top != window) return !1;
            var b = window.external,
                c = b && b.onloadT;
            b && !b.isValidLoadTime && (c = void 0);
            2147483648 < c && (c = void 0);
            0 < c && b.setPageReadyTime();
            if (void 0 == c) return !1;
            a[Eb] = c;
            return !0
        }, Y = function (a, b) {
            var c = a[b];
            if (isNaN(c) || Infinity == c || 0 > c) a[b] = void 0
        };
    var hc = !1,
        mc = function (a) {
            if ("cookie" == P(a, ac)) {
                var b = P(a, U),
                    c = nd(a),
                    d = kc(P(a, Yb)),
                    e = lc(P(a, W)),
                    g = 1E3 * R(a, Zb),
                    ca = P(a, Na);
                if ("auto" != e) zc(b, c, d, e, ca, g) && (hc = !0);
                else {
                    J(32);
                    var l;
                    t: {
                        c = [];
                        e = eb()[split](".");
                        if (4 == e[length] && (l = e[e[length] - 1], parseInt(l, 10) == l)) {
                            l = ["none"];
                            break t
                        }
                        for (l = e[length] - 2; 0 <= l; l--) c[push](e[slice](l)[join]("."));
                        c[push]("none");
                        l = c
                    }
                    for (var k = 0; k < l[length]; k++)
                        if (e = l[k], a[data].set(W, e), c = nd(a), zc(b, c, d, e, ca, g)) {
                            hc = !0;
                            return
                        }
                    a[data].set(W, "auto")
                }
            }
        }, nc = function (a) {
            if ("cookie" == P(a, ac) && !hc && (mc(a), !hc)) throw "abort";
        },
        Yc = function (a) {
            if (a.get(Wc)) {
                var b = P(a, W),
                    c = P(a, $b) || eb(),
                    d = Xc("__utma", c, b);
                d && (J(19), a.set(Tc, (new Date)[getTime](), !0), a.set(Rc, d.R), (b = Xc("__utmz", c, b)) && d[hash] == b[hash] && a.set(Sc, b.R))
            }
        }, nd = function (a) {
            var b = ka(P(a, Q)),
                c = ic(P(a, W));
            a = jc(P(a, Yb));
            1 < a && (c += "-" + a);
            return ["GA1", c, b][join](".")
        }, Gc = function (a, b, c) {
            for (var d = [], e = [], g, ca = 0; ca < a[length]; ca++) {
                var l = a[ca];
                if (l.r[c] == b) d[push](l);
                else void 0 == g || l.r[c] < g ? (e = [l], g = l.r[c]) : l.r[c] == g && e[push](l)
            }
            return 0 < d[length] ? d : e
        }, lc = function (a) {
            return 0 == a[indexOf](".") ? a.substr(1) :
                a
        }, ic = function (a) {
            return lc(a)[split](".")[length]
        }, kc = function (a) {
            if (!a) return "/";
            1 < a[length] && a.lastIndexOf("/") == a[length] - 1 && (a = a.substr(0, a[length] - 1));
            0 != a[indexOf]("/") && (a = "/" + a);
            return a
        }, jc = function (a) {
            a = kc(a);
            return "/" == a ? 1 : a[split]("/")[length]
        };

    function Xc(a, b, c) {
        "none" == b && (b = "");
        var d = [],
            e = ya(a);
        a = "__utma" == a ? 6 : 2;
        for (var g = 0; g < e[length]; g++) {
            var ca = ("" + e[g])[split](".");
            ca[length] >= a && d[push]({
                hash: ca[0],
                R: e[g],
                O: ca
            })
        }
        return 0 == d[length] ? void 0 : 1 == d[length] ? d[0] : Zc(b, d) || Zc(c, d) || Zc(null, d) || d[0]
    }

    function Zc(a, b) {
        var c, d;
        null == a ? c = d = 1 : (c = La(a), d = La(0 == a[indexOf](".") ? a[substring](1) : "." + a));
        for (var e = 0; e < b[length]; e++)
            if (b[e][hash] == c || b[e][hash] == d) return b[e]
    };
    var od = RegExp(/^https?:\/\/([^\/:]+)/),
        pd = /(.*)([?&#])(?:_ga=[^&]*)(?:&?)(.*)/;

    function Bc(a) {
        a = a.get(Q);
        var b = Ic(a, 0);
        return "_ga=1." + sa(b + "." + a)
    }

    function Ic(a, b) {
        for (var c = new Date, d = window.screen || {}, e = window[navigator], g = e.plugins || [], c = [a, e.userAgent, d.width, d.height, c.getTimezoneOffset(), c.getYear(), c.getDate(), c.getHours(), c.getMinutes() + b], d = 0; d < g[length]; ++d) c[push](g[d].description);
        return La(c[join]("."))
    }
    var Dc = function (a) {
        this.target = a;
        this.T = !1
    };
    Dc[prototype].Q = function (a, b) {
        if (a.tagName) {
            if ("a" == a.tagName[toLowerCase]()) {
                a[href] && Pc(a, qd(this, a[href], b));
                return
            }
            if ("form" == a.tagName[toLowerCase]()) return rd(this, a)
        }
        if ("string" == typeof a) return qd(this, a, b)
    };
    var qd = function (a, b, c) {
        var d = pd.exec(b);
        d && 3 <= d[length] && (b = d[1] + (d[3] ? d[2] + d[3] : ""));
        a = a[target].get("linkerParam");
        var e = b[indexOf]("?"),
            d = b[indexOf]("#");
        c ? b += (-1 == d ? "#" : "&") + a : (c = -1 == e ? "?" : "&", b = -1 == d ? b + (c + a) : b[substring](0, d) + c + a + b[substring](d));
        return b
    }, rd = function (a, b) {
            if (b && b[action]) {
                var c = a[target].get("linkerParam")[split]("=")[1];
                if ("get" == b.method[toLowerCase]()) {
                    for (var d = b.childNodes || [], e = 0; e < d[length]; e++)
                        if ("_ga" == d[e][name]) {
                            d[e][setAttribute]("value", c);
                            return
                        }
                    d = document[createElement]("input");
                    d[setAttribute]("type", "hidden");
                    d[setAttribute]("name", "_ga");
                    d[setAttribute]("value", c);
                    b.appendChild(d)
                } else "post" ==
                    b.method[toLowerCase]() && (b.action = qd(a, b[action]))
            }
        };
    Dc[prototype].S = function (a, b, c) {
        function d(c) {
            try {
                c = c || window.event;
                var d;
                t: {
                    var g = c[target] || c.srcElement;
                    for (c = 100; g && 0 < c;) {
                        if (g[href] && g.nodeName[match](/^a(?:rea)?$/i)) {
                            d = g;
                            break t
                        }
                        g = g[parentNode];
                        c--
                    }
                    d = {}
                }("http:" == d[protocol] || "https:" == d[protocol]) && sd(a, d[hostname] || "") && d[href] && Pc(d, qd(e, d[href], b))
            } catch (w) {
                J(26)
            }
        }
        var e = this;
        this.T || (this.T = !0, ta(document, "mousedown", d, !1), ta(document, "touchstart", d, !1), ta(document, "keyup", d, !1));
        if (c) {
            c = function (c) {
                c = c || window.event;
                if ((c = c[target] || c.srcElement) && c[action]) {
                    var b = c[action][match](od);
                    b && sd(a, b[1]) && rd(e, c)
                }
            };
            for (var g = 0; g < document.forms[length]; g++) ta(document.forms[g],
                "submit", c)
        }
    };

    function sd(a, b) {
        if (b == document[location][hostname]) return !1;
        for (var c = 0; c < a[length]; c++)
            if (0 <= b[indexOf](a[c])) return !0;
        return !1
    };
    var gd = function (a) {
        return a.get(V) && "t0" != a.get(V) ? "_dc_" + ka(a.get(V)) : "_dc"
    }, hd = function (a) {
            if (a.get(ed)) {
                var b = new N,
                    c = function (c) {
                        b.set($a(c).p, a.get(c))
                    };
                c(hb);
                c(ib);
                c(Na);
                c(Q);
                c(ed);
                var d = R(a, "forceSSL") || "https:" == document[location][protocol] ? "https:" : "http:",
                    d = d + "//stats.g.doubleclick.net/collect?t=dc&aip=1&";
                b.map(function (a, c) {
                    d += sa(a) + "=" + sa("" + c) + "&"
                });
                d += "z=" + ra();
                Ca(d);
                a.set(ed, "", !0)
            }
        }, fd = function (a) {
            J(29);
            a = a.b;
            var b = a.get(Wb);
            a.set(Wb, function (a) {
                a.get(ed) || (-1 != document[cookie][indexOf](gd(a) + "=1") ? a.set(ed, "", !0) : (gd(a),
                    zc(gd(a), "1", a.get(Yb), a.get(W), a.get(Na), 6E5) ? a.set(ed, "" + ra(), !0) : J(30)));
                return b(a)
            });
            var c = a.get(Xb);
            a.set(Xb, function (a) {
                var b = c(a);
                hd(a);
                return b
            })
        };

    function $c() {
        var a = window.gaGlobal = window.gaGlobal || {};
        return a.hid = a.hid || ra()
    };
    var ad, bd = function (a, b, c) {
            if (!ad) {
                var d;
                d = document[location][hash];
                var e = window[name],
                    g = /^#?gaso=([^&]*)/;
                if (e = (d = (d = d && d[match](g) || e && e[match](g)) ? d[1] : ya("GASO")[0] || "") && d[match](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i)) zc("GASO", "" + d, c, b, a, 0), window._udo || (window._udo = b), window._utcp || (window._utcp = c), a = e[1], vc("https://www.google.com/analytics/web/inpage/pub/inpage.js?" + (a ? "prefix=" + a + "&" : "") + ra(), "_gasojs");
                ad = !0
            }
        };
    var pc = function (a) {
        function b(a, c) {
            d.b[data].set(a, c)
        }

        function c(a, c) {
            b(a, c);
            d.filters.add(a)
        }
        var d = this;
        this.b = new Ya;
        this.filters = new Ha;
        b(V, a[V]);
        b(Na, a[Na]);
        b(U, a[U]);
        b(W, a[W] || eb());
        b(Yb, a[Yb]);
        b(Zb, a[Zb]);
        b($b, a[$b]);
        b(Wc, a[Wc]);
        b(bc, a[bc]);
        b(cc, a[cc]);
        b(Ka, a[Ka]);
        b(dc, a[dc]);
        b(ec, a[ec]);
        b(ac, a[ac]);
        b(hb, 1);
        b(ib, "j15");
        c(Qb, Ma);
        c(dd, cd);
        c(Rb, Oa);
        c(Sb, nc);
        c(Uc, Yc);
        c(Tb, Ja);
        c(Vb, Ta);
        c(Vc, Hc);
        c(Wb, Pa);
        c(Xb, Sa);
        Jc(this.b, a[Q]);
        Kc(this.b);
        this.b.set(jb, $c());
        bd(this.b.get(Na), this.b.get(W), this.b.get(Yb))
    },
        Jc = function (a, b) {
            if ("cookie" == P(a, ac)) {
                hc = !1;
                var c;
                i: {
                    var d = ya(P(a, U));
                    if (d && !(1 > d[length])) {
                        c = [];
                        for (var e = 0; e < d[length]; e++) {
                            var g;
                            g = d[e][split](".");
                            var ca = g.shift();
                            ("GA1" == ca || "1" == ca) && 1 < g[length] ? (ca = g.shift()[split]("-"), 1 == ca[length] && (ca[1] = "1"), ca[0] *= 1, ca[1] *= 1, g = {
                                r: ca,
                                s: g[join](".")
                            }) : g = void 0;
                            g && c[push](g)
                        }
                        if (1 == c[length]) {
                            J(13);
                            c = c[0].s;
                            break i
                        }
                        if (0 == c[length]) J(12);
                        else {
                            J(14);
                            d = ic(P(a, W));
                            c = Gc(c, d, 0);
                            if (1 == c[length]) {
                                c = c[0].s;
                                break i
                            }
                            d = jc(P(a, Yb));
                            c = Gc(c, d, 1);
                            c = c[0] && c[0].s;
                            break i
                        }
                    }
                    c = void 0
                }
                c || (c = P(a, W), d = P(a, $b) || eb(), c = Xc("__utma",
                    d, c), (c = void 0 == c ? void 0 : c.O[1] + "." + c.O[2]) && J(10));
                c && (a[data].set(Q, c), hc = !0)
            }
            c = a.get(cc);
            if (e = (c = document[location][c ? "href" : "search"][match]("(?:&|#|\\?)" + sa("_ga")[replace](/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == c[length] ? c[1] : "") a.get(bc) ? (c = e[indexOf]("."), -1 == c ? J(22) : (d = e[substring](c + 1), "1" != e[substring](0, c) ? J(22) : (c = d[indexOf]("."), -1 == c ? J(22) : (e = d[substring](0, c), c = d[substring](c + 1), e != Ic(c, 0) && e != Ic(c, -1) && e != Ic(c, -2) ? J(23) : (J(11), a[data].set(Q, c)))))) : J(21);
            b && (J(9), a[data].set(Q, sa(b)));
            if (!a.get(Q))
                if (c = (c = window.gaGlobal && window.gaGlobal.vid) && -1 != c[search](/^(?:utma\.)?\d+\.\d+$/) ?
                    c : void 0) J(17), a[data].set(Q, c);
                else {
                    J(8);
                    c = window[navigator];
                    c = c.appName + c.version + c.platform + c.userAgent + (document[cookie] ? document[cookie] : "") + (document.referrer ? document.referrer : "");
                    d = c[length];
                    for (e = window.history[length]; 0 < e;) c += e-- ^ d++;
                    a[data].set(Q, [ra() ^ La(c) & 2147483647, Math.round((new Date)[getTime]() / 1E3)][join]("."))
                }
            mc(a)
        }, Kc = function (a) {
            var b = window[navigator],
                c = window.screen,
                d = document[location];
            a.set(lb, va(a.get(ec)));
            if (d) {
                var e = d.pathname || "";
                "/" != e.charAt(0) && (J(31), e = "/" + e);
                a.set(kb, d[protocol] + "//" + d[hostname] + e + d[search])
            }
            c && a.set(qb, c.width + "x" + c.height);
            c && a.set(pb, c.colorDepth + "-bit");
            var c = document.documentElement,
                g = (e = document.body) && e[clientWidth] && e[clientHeight],
                ca = [];
            c && c[clientWidth] && c[clientHeight] && ("CSS1Compat" === document.compatMode || !g) ? ca = [c[clientWidth], c[clientHeight]] : g && (ca = [e[clientWidth], e[clientHeight]]);
            c = 0 >= ca[0] || 0 >= ca[1] ? "" : ca[join]("x");
            a.set(rb, c);
            a.set(tb, fc());
            a.set(ob, document.characterSet || document.charset);
            a.set(sb, b && "function" === typeof b.javaEnabled && b.javaEnabled() || !1);
            a.set(nb, (b && (b.language || b.browserLanguage) || "")[toLowerCase]());
            if (d && a.get(cc) && (b = document[location][hash])) {
                b = b[substring](1);
                b = b[split]("&");
                d = [];
                for (c = 0; c < b[length]; ++c) 0 != b[c][indexOf]("utm_id") && 0 != b[c][indexOf]("utm_campaign") && 0 != b[c][indexOf]("utm_source") && 0 != b[c][indexOf]("utm_medium") &&
                    0 != b[c][indexOf]("utm_term") && 0 != b[c][indexOf]("utm_content") || d[push](b[c]);
                0 < d[length] && (b = "#" + d[join]("&"), a.set(kb, a.get(kb) + b))
            }
        };
    pc[prototype].get = function (a) {
        return this.b.get(a)
    };
    pc[prototype].set = function (a, b) {
        this.b.set(a, b)
    };
    var qc = {
        pageview: [mb],
        event: [ub, xb, yb, zb],
        social: [Bb, Cb, Db],
        timing: [Mb, Nb, Pb, Ob]
    };
    pc[prototype].send = function (a) {
        if (!(1 > arguments[length])) {
            var b, c;
            "string" === typeof arguments[0] ? (b = arguments[0], c = [][slice][call](arguments, 1)) : (b = arguments[0] && arguments[0][Va], c = arguments);
            b && (c = wa(qc[b] || [], c), c[Va] = b, this.b.set(c, void 0, !0), this.filters.execute(this.b), "pageview" == b && Lc(this), this.b[data].m = {})
        }
    };
    var Lc = function (a) {
        a.I || (a.I = !0, gc(a.b, function (b) {
            a.send("timing", b)
        }))
    };
    var rc = function (a) {
        if ("prerender" == document.webkitVisibilityState) return !1;
        a();
        return !0
    }, Mc = function (a) {
            if (!rc(a)) {
                J(16);
                var b = !1,
                    c = function () {
                        !b && rc(a) && (b = !0, ua(document, "webkitvisibilitychange", c))
                    };
                ta(document, "webkitvisibilitychange", c)
            }
        };
    var Z = {
        F: "/plugins/ua/",
        D: /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/
    };
    Z.k = new N;
    Z.f = [];
    var sc = function (a) {
        if (isFunction(a[0])) this.u = a[0];
        else {
            var b = Z.D.exec(a[0]);
            null != b && 4 == b[length] && (this.c = b[1] || "t0", this.e = b[2] || "", this.d = b[3], this.a = [][slice][call](a, 1), this.e || (this.A = "create" == this.d, this.i = "require" == this.d, this.g = "provide" == this.d));
            if (!isFunction(a[0])) {
                b = a[1];
                a = a[2];
                if (!this.d) throw "abort";
                if (this.i && (!qa(b) || "" == b)) throw "abort";
                if (this.g && (!qa(b) || "" == b || !isFunction(a))) throw "abort";
                if (0 <= this.c[indexOf](".") || 0 <= this.c[indexOf](":") || 0 <= this.e[indexOf](".") || 0 <= this.e[indexOf](":")) throw "abort";
                if (this.g && "t0" != this.c) throw "abort";
            }
        }
    };
    Z.B = function (a, b, c) {
        var d = Z.k.get(a);
        if (!isFunction(d)) return !1;
        b.plugins_ = b.plugins_ || new N;
        b.plugins_.set(a, new d(b, c || {}));
        return !0
    };
    Z.C = function (a, b) {
        Z.k.set(a, b)
    };
    Z.execute = function (a) {
        var b = Z.J[apply](Z, arguments),
            b = Z.f.concat(b);
        for (Z.f = []; 0 < b[length] && !Z.v(b[0]) && !(b.shift(), 0 < Z.f[length]););
        Z.f = Z.f.concat(b)
    };
    Z.J = function (a) {
        for (var b = [], c = 0; c < arguments[length]; c++) try {
            var d = new sc(arguments[c]);
            if (d.g) Z.v(d);
            else {
                if (d.i) {
                    var e = d.a[1];
                    if (!isFunction(Z.k.get(d.a[0])) && !d.H && e) {
                        var g = e + "",
                            e = g && 0 <= g[indexOf]("/") ? g : "//www.google-analytics.com" + Z.F + g;
                        var ca = tc("" + e),
                            l;
                        var k = ca[protocol],
                            w = document[location][protocol];
                        l = "https:" == k || k == w ? !0 : "http:" != k ? !1 : "http:" == w;
                        var s;
                        if (s = l) {
                            var g = ca,
                                D = tc(document[location][href]);
                            if (g.G || 0 <= g.url[indexOf]("?") || 0 <= g.path[indexOf]("://")) s = !1;
                            else if (g[host] == D[host] && g[port] == D[port]) s = !0;
                            else {
                                var vb = "http:" == g[protocol] ? 80 : 443;
                                s = "www.google-analytics.com" == g[host] &&
                                    (g[port] || vb) == vb && 0 == g.path[indexOf]("/plugins/") ? !0 : !1
                            }
                        }
                        s && (d.H = !! vc(ca.url))
                    }
                }
                b[push](d)
            }
        } catch (wb) {}
        return b
    };
    Z.v = function (a) {
        try {
            if (a.u) a.u[call](window, $.j("t0"));
            else if (a.g) Z.C(a.a[0], a.a[1]);
            else {
                var b = a.c == gb ? $ : $.j(a.c);
                if (a.A) "t0" == a.c && $.create[apply]($, a.a);
                else if (b)
                    if (a.i) {
                        if (!Z.B(a.a[0], b, a.a[2])) return !0
                    } else a.e && (b = b.plugins_.get(a.e)), b[a.d][apply](b, a.a)
            }
        } catch (c) {}
    };

    function tc(a) {
        function b(a) {
            var c = (a[hostname] || "")[split](":")[0][toLowerCase](),
                b = (a[protocol] || "")[toLowerCase](),
                b = 1 * a[port] || ("http:" == b ? 80 : "https:" == b ? 443 : "");
            a = a.pathname || "";
            0 == a[indexOf]("/") || (a = "/" + a);
            return [c, "" + b, a]
        }
        var c = document[createElement]("a");
        Pc(c, document[location][href]);
        var d = (c[protocol] || "")[toLowerCase](),
            e = b(c),
            g = c[search] || "",
            ca = d + "//" + e[0] + (e[1] ? ":" + e[1] : "");
        0 == a[indexOf]("//") ? a = d + a : 0 == a[indexOf]("/") ? a = ca + a : a && 0 != a[indexOf]("?") ? 0 > a[split]("/")[0][indexOf](":") && (a = ca + e[2][substring](0, e[2].lastIndexOf("/")) + "/" + a) : a = ca + e[2] + (a || g);
        Pc(c, a);
        d = b(c);
        return {
            protocol: (c[protocol] || "")[toLowerCase](),
            host: d[0],
            port: d[1],
            path: d[2],
            G: c[search] || "",
            url: a || ""
        }
    };
    var $ = function (a) {
        J(1);
        Z.execute[apply](Z, [arguments])
    };
    $.h = {};
    $.P = [];
    $.L = 0;
    $.answer = 42;
    var uc = [Na, W, V];
    $.create = function (a) {
        var b = wa(uc, [][slice][call](arguments));
        b[V] || (b[V] = "t0");
        var c = "" + b[V];
        if ($.h[c]) return $.h[c];
        b = new pc(b);
        $.h[c] = b;
        $.P[push](b);
        return b
    };
    $.j = function (a) {
        return $.h[a]
    };
    $.K = function () {
        return $.P[slice](0)
    };
    $.N = function () {
        var a = window[gb];
        if (!a || 42 != a.answer) {
            $.L = a && a.l;
            $.loaded = !0;
            window[gb] = $;
            Cc();
            var b = a && a.q;
            "[object Array]" == Object[prototype].toString[call](Object(b)) && Mc(function () {
                Z.execute[apply]($, b)
            })
        }
    };
    $.N();

    function La(a) {
        var b = 1,
            c = 0,
            d;
        if (a)
            for (b = 0, d = a[length] - 1; 0 <= d; d--) c = a.charCodeAt(d), b = (b << 6 & 268435455) + c + (c << 14), c = b & 266338304, b = 0 != c ? b ^ c >> 21 : b;
        return b
    };
})(window);
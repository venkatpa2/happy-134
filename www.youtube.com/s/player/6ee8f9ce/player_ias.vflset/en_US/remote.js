(function(g) {
    var window = this;
    'use strict';
    var a8 = function(a) {
            g.Hp(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.ob()).toString(36));
            return a
        },
        b8 = function(a, b, c) {
            Array.isArray(c) || (c = [String(c)]);
            g.Cga(a.B, b, c)
        },
        ryb = function(a) {
            if (a instanceof g.qt) return a;
            if ("function" == typeof a.Bk) return a.Bk(!1);
            if (g.bb(a)) {
                var b = 0,
                    c = new g.qt;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return g.M2;
                        if (b in a) return g.rt(a[b++]);
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        syb = function(a, b, c) {
            if (g.bb(a)) g.bc(a, b, c);
            else
                for (a = ryb(a);;) {
                    var d = a.next();
                    if (d.done) break;
                    b.call(c, d.value, void 0, a)
                }
        },
        tyb = function(a, b) {
            var c = [];
            syb(b, function(d) {
                try {
                    var e = g.Mv.prototype.B.call(this, d, !0)
                } catch (f) {
                    if ("Storage: Invalid value was encountered" == f) return;
                    throw f;
                }
                void 0 === e ? c.push(d) : g.rla(e) && c.push(d)
            }, a);
            return c
        },
        uyb = function(a, b) {
            tyb(a, b).forEach(function(c) {
                g.Mv.prototype.remove.call(this, c)
            }, a)
        },
        vyb = function(a) {
            if (a.ma) {
                if (a.ma.locationOverrideToken) return {
                    locationOverrideToken: a.ma.locationOverrideToken
                };
                if (null != a.ma.latitudeE7 && null != a.ma.longitudeE7) return {
                    latitudeE7: a.ma.latitudeE7,
                    longitudeE7: a.ma.longitudeE7
                }
            }
            return null
        },
        wyb = function(a, b) {
            g.Hb(a, b) || a.push(b)
        },
        xyb = function(a) {
            var b = 0,
                c;
            for (c in a) b++;
            return b
        },
        yyb = function(a, b) {
            return g.kd(a, b)
        },
        zyb = function(a) {
            try {
                return g.Sa.JSON.parse(a)
            } catch (b) {}
            a = String(a);
            if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + a + ")")
            } catch (b) {}
            throw Error("Invalid JSON string: " + a);
        },
        c8 = function(a) {
            if (g.Sa.JSON) try {
                return g.Sa.JSON.parse(a)
            } catch (b) {}
            return zyb(a)
        },
        Ayb = function(a) {
            if (a.Xl && "function" == typeof a.Xl) return a.Xl();
            if ("undefined" !== typeof Map && a instanceof Map || "undefined" !== typeof Set && a instanceof Set) return Array.from(a.values());
            if ("string" === typeof a) return a.split("");
            if (g.bb(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return g.hd(a)
        },
        Byb = function(a) {
            if (a.qp && "function" == typeof a.qp) return a.qp();
            if (!a.Xl || "function" != typeof a.Xl) {
                if ("undefined" !== typeof Map && a instanceof Map) return Array.from(a.keys());
                if (!("undefined" !== typeof Set && a instanceof Set)) {
                    if (g.bb(a) || "string" === typeof a) {
                        var b = [];
                        a = a.length;
                        for (var c = 0; c < a; c++) b.push(c);
                        return b
                    }
                    return g.id(a)
                }
            }
        },
        Cyb = function(a, b) {
            if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);
            else if (g.bb(a) || "string" === typeof a) Array.prototype.forEach.call(a, b, void 0);
            else
                for (var c = Byb(a), d = Ayb(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a)
        },
        Dyb = function(a, b, c, d) {
            var e = new g.zp(null);
            a && g.Ap(e, a);
            b && g.Bp(e, b);
            c && g.Cp(e, c);
            d && (e.C = d);
            return e
        },
        Eyb = function() {
            this.j = d8();
            this.j.Ck("/client_streamz/youtube/living_room/mdx/channel/opened", {
                Xe: 3,
                We: "channel_type"
            })
        },
        Fyb = function(a, b) {
            a.j.Mm("/client_streamz/youtube/living_room/mdx/channel/opened", b)
        },
        Gyb = function() {
            this.j = d8();
            this.j.Ck("/client_streamz/youtube/living_room/mdx/channel/closed", {
                Xe: 3,
                We: "channel_type"
            })
        },
        Hyb = function(a, b) {
            a.j.Mm("/client_streamz/youtube/living_room/mdx/channel/closed", b)
        },
        Iyb = function() {
            this.j = d8();
            this.j.Ck("/client_streamz/youtube/living_room/mdx/channel/message_received", {
                Xe: 3,
                We: "channel_type"
            })
        },
        Jyb = function(a, b) {
            a.j.Mm("/client_streamz/youtube/living_room/mdx/channel/message_received", b)
        },
        Kyb = function() {
            this.j = d8();
            this.j.Ck("/client_streamz/youtube/living_room/mdx/channel/error", {
                Xe: 3,
                We: "channel_type"
            })
        },
        Lyb = function(a, b) {
            a.j.Mm("/client_streamz/youtube/living_room/mdx/channel/error", b)
        },
        Myb = function() {
            this.j = d8();
            this.j.Ck("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        Nyb = function() {
            this.j = d8();
            this.j.Ck("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        Ryb = function(a) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new g.uv;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            a && (this.id = a.id || a.name, this.name = a.name, this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.app = a.app, this.type =
                a.type || "REMOTE_CONTROL", this.username = a.user || "", this.avatar = a.userAvatarUri || "", this.obfuscatedGaiaId = a.obfuscatedGaiaId || "", this.theme = a.theme || "u", Oyb(this, a.capabilities || ""), Pyb(this, a.compatibleSenderThemes || ""), Qyb(this, a.experiments || ""), this.brand = a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN", a = a.deviceInfo) && (a = JSON.parse(a), this.brand =
                a.brand || "", this.model = a.model || "", this.year = a.year || 0, this.os = a.os || "", this.osVersion = a.osVersion || "", this.chipset = a.chipset || "", this.clientName = a.clientName ? a.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = a.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        Oyb = function(a, b) {
            a.capabilities.clear();
            g.wt(b.split(","), g.kb(yyb, Syb)).forEach(function(c) {
                a.capabilities.add(c)
            })
        },
        Pyb = function(a, b) {
            a.compatibleSenderThemes.clear();
            g.wt(b.split(","), g.kb(yyb, Tyb)).forEach(function(c) {
                a.compatibleSenderThemes.add(c)
            })
        },
        Qyb = function(a, b) {
            a.experiments.clear();
            b.split(",").forEach(function(c) {
                a.experiments.add(c)
            })
        },
        e8 = function(a) {
            a = a || {};
            this.name = a.name || "";
            this.id = a.id || a.screenId || "";
            this.token = a.token || a.loungeToken || "";
            this.uuid = a.uuid || a.dialId || "";
            this.idType = a.screenIdType || "normal"
        },
        f8 = function(a, b) {
            return !!b && (a.id == b || a.uuid == b)
        },
        Uyb = function(a) {
            return {
                name: a.name,
                screenId: a.id,
                loungeToken: a.token,
                dialId: a.uuid,
                screenIdType: a.idType
            }
        },
        Vyb = function(a) {
            return new e8(a)
        },
        Wyb = function(a) {
            return Array.isArray(a) ? g.Lr(a, Vyb) : []
        },
        g8 = function(a) {
            return a ? '{name:"' + a.name + '",id:' + a.id.substr(0, 6) + "..,token:" + ((a.token ? ".." + a.token.slice(-6) : "-") + ",uuid:" + (a.uuid ? ".." + a.uuid.slice(-6) : "-") + ",idType:" + a.idType + "}") : "null"
        },
        Xyb = function(a) {
            return Array.isArray(a) ? "[" + g.Lr(a, g8).join(",") + "]" : "null"
        },
        Yyb = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(a) {
                    var b = 16 * Math.random() | 0;
                    return ("x" == a ? b : b & 3 | 8).toString(16)
                })
        },
        Zyb = function(a) {
            return g.Lr(a, function(b) {
                return {
                    key: b.id,
                    name: b.name
                }
            })
        },
        $yb = function(a, b) {
            return g.Eb(a, function(c) {
                return c || b ? !c != !b ? !1 : c.id == b.id : !0
            })
        },
        h8 = function(a, b) {
            return g.Eb(a, function(c) {
                return f8(c, b)
            })
        },
        azb = function() {
            var a = (0, g.iD)();
            a && uyb(a, a.j.Bk(!0))
        },
        i8 = function() {
            var a = g.kD("yt-remote-connected-devices") || [];
            g.Zb(a);
            return a
        },
        bzb = function(a) {
            if (0 == a.length) return [];
            var b = a[0].indexOf("#"),
                c = -1 == b ? a[0] : a[0].substring(0, b);
            return g.Lr(a, function(d, e) {
                return 0 == e ? d : d.substring(c.length)
            })
        },
        czb = function(a) {
            g.jD("yt-remote-connected-devices", a, 86400)
        },
        j8 = function() {
            if (dzb) return dzb;
            var a = g.kD("yt-remote-device-id");
            a || (a = Yyb(), g.jD("yt-remote-device-id", a, 31536E3));
            for (var b = i8(), c = 1, d = a; g.Hb(b, d);) c++, d = a + "#" + c;
            return dzb = d
        },
        ezb = function() {
            var a = i8(),
                b = j8();
            g.mD() && g.ac(a, b);
            a = bzb(a);
            if (0 == a.length) try {
                g.Qoa("remote_sid")
            } catch (c) {} else try {
                g.BC("remote_sid", a.join(","), -1)
            } catch (c) {}
        },
        fzb = function() {
            return g.kD("yt-remote-session-browser-channel")
        },
        gzb = function() {
            return g.kD("yt-remote-local-screens") || []
        },
        hzb = function() {
            g.jD("yt-remote-lounge-token-expiration", !0, 86400)
        },
        izb = function(a) {
            5 < a.length && (a = a.slice(a.length - 5));
            var b = g.Lr(gzb(), function(d) {
                    return d.loungeToken
                }),
                c = g.Lr(a, function(d) {
                    return d.loungeToken
                });
            g.Mr(c, function(d) {
                return !g.Hb(b, d)
            }) && hzb();
            g.jD("yt-remote-local-screens", a, 31536E3)
        },
        k8 = function(a) {
            a || (g.lD("yt-remote-session-screen-id"), g.lD("yt-remote-session-video-id"));
            ezb();
            a = i8();
            g.Jb(a, j8());
            czb(a)
        },
        jzb = function() {
            if (!l8) {
                var a = g.Wv();
                a && (l8 = new g.Jv(a))
            }
        },
        kzb = function() {
            jzb();
            return l8 ? !!l8.get("yt-remote-use-staging-server") : !1
        },
        m8 = function(a, b) {
            g.XE[a] = !0;
            var c = g.VE();
            c && c.publish.apply(c, arguments);
            g.XE[a] = !1
        },
        lzb = function() {},
        d8 = function() {
            if (!n8) {
                n8 = new g.qg(new lzb);
                var a = g.YB("client_streamz_web_flush_count", -1); - 1 !== a && (n8.D = a)
            }
            return n8
        },
        mzb = function() {
            var a = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return a ? parseInt(a[1], 10) : 0
        },
        nzb = function(a) {
            return !!document.currentScript && (-1 != document.currentScript.src.indexOf("?" + a) || -1 != document.currentScript.src.indexOf("&" + a))
        },
        ozb = function() {
            return "function" == typeof window.__onGCastApiAvailable ? window.__onGCastApiAvailable : null
        },
        o8 = function(a) {
            a.length ? pzb(a.shift(), function() {
                o8(a)
            }) : qzb()
        },
        rzb = function(a) {
            return "chrome-extension://" + a + "/cast_sender.js"
        },
        pzb = function(a, b, c) {
            var d = document.createElement("script");
            d.onerror = b;
            c && (d.onload = c);
            g.so(d, g.Kw(a));
            (document.head || document.documentElement).appendChild(d)
        },
        szb = function() {
            var a = mzb(),
                b = [];
            if (1 < a) {
                var c = a - 1;
                b.push("//www.gstatic.com/eureka/clank/" + a + "/cast_sender.js");
                b.push("//www.gstatic.com/eureka/clank/" + c + "/cast_sender.js")
            }
            return b
        },
        qzb = function() {
            var a = ozb();
            a && a(!1, "No cast extension found")
        },
        uzb = function() {
            if (tzb) {
                var a = 2,
                    b = ozb(),
                    c = function() {
                        a--;
                        0 == a && b && b(!0)
                    };
                window.__onGCastApiAvailable = c;
                pzb("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", qzb, c)
            }
        },
        vzb = function() {
            uzb();
            var a = szb();
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            o8(a)
        },
        xzb = function() {
            uzb();
            var a = szb();
            a.push.apply(a, g.oa(wzb.map(rzb)));
            a.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            o8(a)
        },
        p8 = function(a, b, c) {
            g.I.call(this);
            this.K = null != c ? (0, g.jb)(a, c) : a;
            this.Zi = b;
            this.G = (0, g.jb)(this.s2, this);
            this.j = !1;
            this.B = 0;
            this.C = this.jd = null;
            this.D = []
        },
        q8 = function(a, b, c) {
            g.I.call(this);
            this.D = null != c ? a.bind(c) : a;
            this.Zi = b;
            this.C = null;
            this.j = !1;
            this.B = 0;
            this.jd = null
        },
        yzb = function(a) {
            a.jd = g.fg(function() {
                a.jd = null;
                a.j && !a.B && (a.j = !1, yzb(a))
            }, a.Zi);
            var b = a.C;
            a.C = null;
            a.D.apply(null, b)
        },
        r8 = function() {},
        zzb = function() {
            g.Bb.call(this, "p")
        },
        Azb = function() {
            g.Bb.call(this, "o")
        },
        Czb = function() {
            return Bzb = Bzb || new g.Md
        },
        Dzb = function(a) {
            g.Bb.call(this, "serverreachability", a)
        },
        s8 = function(a) {
            var b = Czb();
            b.dispatchEvent(new Dzb(b, a))
        },
        Ezb = function(a) {
            g.Bb.call(this, "statevent", a)
        },
        t8 = function(a) {
            var b = Czb();
            b.dispatchEvent(new Ezb(b, a))
        },
        Fzb = function(a, b, c, d) {
            g.Bb.call(this, "timingevent", a);
            this.size = b;
            this.retries = d
        },
        u8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Sa.setTimeout(function() {
                a()
            }, b)
        },
        v8 = function() {},
        w8 = function(a, b, c, d) {
            this.G = a;
            this.D = b;
            this.Jc = c;
            this.ac = d || 1;
            this.bb = new g.Mp(this);
            this.ub = 45E3;
            a = g.IS ? 125 : void 0;
            this.jb = new g.eg(a);
            this.Na = null;
            this.C = !1;
            this.W = this.Za = this.Z = this.Ta = this.Ba = this.Jb = this.ma = null;
            this.ra = [];
            this.j = null;
            this.K = 0;
            this.N = this.Ea = null;
            this.Db = -1;
            this.Ka = !1;
            this.qb = 0;
            this.Xa = null;
            this.Xb = this.Ua = this.Rb = this.Ga = !1;
            this.B = new Gzb
        },
        Gzb = function() {
            this.C = null;
            this.j = "";
            this.B = !1
        },
        Izb = function(a, b, c) {
            a.Ta = 1;
            a.Z = a8(b.clone());
            a.W = c;
            a.Ga = !0;
            Hzb(a, null)
        },
        Hzb = function(a, b) {
            a.Ba = Date.now();
            x8(a);
            a.Za = a.Z.clone();
            b8(a.Za, "t", a.ac);
            a.K = 0;
            var c = a.G.Ta;
            a.B = new Gzb;
            a.j = Jzb(a.G, c ? b : null, !a.W);
            0 < a.qb && (a.Xa = new q8((0, g.jb)(a.SS, a, a.j), a.qb));
            a.bb.Ra(a.j, "readystatechange", a.w2);
            b = a.Na ? g.qd(a.Na) : {};
            a.W ? (a.Ea || (a.Ea = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.j.send(a.Za, a.Ea, a.W, b)) : (a.Ea = "GET", a.j.send(a.Za, a.Ea, null, b));
            s8(1)
        },
        Kzb = function(a) {
            return a.j ? "GET" == a.Ea && 2 != a.Ta && a.G.Bf : !1
        },
        Pzb = function(a, b, c) {
            for (var d = !0, e; !a.Ka && a.K < c.length;)
                if (e = Lzb(a, c), e == Mzb) {
                    4 == b &&
                        (a.N = 4, t8(14), d = !1);
                    break
                } else if (e == Nzb) {
                a.N = 4;
                t8(15);
                d = !1;
                break
            } else Ozb(a, e);
            Kzb(a) && 0 != a.K && (a.B.j = a.B.j.slice(a.K), a.K = 0);
            4 != b || 0 != c.length || a.B.B || (a.N = 1, t8(16), d = !1);
            a.C = a.C && d;
            d ? 0 < c.length && !a.Xb && (a.Xb = !0, a.G.SP(a)) : (y8(a), z8(a))
        },
        Lzb = function(a, b) {
            var c = a.K,
                d = b.indexOf("\n", c);
            if (-1 == d) return Mzb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return Nzb;
            d += 1;
            if (d + c > b.length) return Mzb;
            b = b.slice(d, d + c);
            a.K = d + c;
            return b
        },
        x8 = function(a) {
            a.Jb = Date.now() + a.ub;
            Qzb(a, a.ub)
        },
        Qzb = function(a, b) {
            if (null != a.ma) throw Error("WatchDog timer not null");
            a.ma = u8((0, g.jb)(a.t2, a), b)
        },
        A8 = function(a) {
            a.ma && (g.Sa.clearTimeout(a.ma), a.ma = null)
        },
        z8 = function(a) {
            a.G.Og() || a.Ka || Rzb(a.G, a)
        },
        y8 = function(a) {
            A8(a);
            g.vb(a.Xa);
            a.Xa = null;
            a.jb.stop();
            a.bb.yf();
            if (a.j) {
                var b = a.j;
                a.j = null;
                b.abort();
                b.dispose()
            }
        },
        Ozb = function(a, b) {
            try {
                var c = a.G;
                if (0 != c.Dh && (c.j == a || Szb(c.B, a)))
                    if (!a.Ua && Szb(c.B, a) && 3 == c.Dh) {
                        try {
                            var d = c.Cf.j.parse(b)
                        } catch (x) {
                            d = null
                        }
                        if (Array.isArray(d) && 3 == d.length) {
                            var e = d;
                            if (0 == e[0]) a: {
                                if (!c.Z) {
                                    if (c.j)
                                        if (c.j.Ba + 3E3 < a.Ba) B8(c), C8(c);
                                        else break a;
                                    Tzb(c);
                                    t8(18)
                                }
                            }
                            else c.Wd = e[1], 0 < c.Wd - c.Xa && 37500 > e[2] && c.Ua && 0 == c.ra && !c.ma && (c.ma = u8((0, g.jb)(c.z2, c), 6E3));
                            if (1 >= Uzb(c.B) && c.kd) {
                                try {
                                    c.kd()
                                } catch (x) {}
                                c.kd = void 0
                            }
                        } else D8(c, 11)
                    } else if ((a.Ua || c.j == a) && B8(c), !g.fc(b))
                    for (e = c.Cf.j.parse(b), b = 0; b < e.length; b++) {
                        var f = e[b];
                        c.Xa = f[0];
                        f = f[1];
                        if (2 == c.Dh)
                            if ("c" == f[0]) {
                                c.D = f[1];
                                c.Xb = f[2];
                                var h = f[3];
                                null != h && (c.US = h);
                                var l = f[5];
                                null != l && "number" === typeof l && 0 < l && (c.bb = 1.5 * l);
                                d = c;
                                var m = a.jO();
                                if (m) {
                                    var n = g.Pn(m, "X-Client-Wire-Protocol");
                                    if (n) {
                                        var p = d.B;
                                        !p.j && (g.hc(n, "spdy") || g.hc(n, "quic") || g.hc(n, "h2")) && (p.D = p.G, p.j = new Set, p.B && (Vzb(p, p.B), p.B = null))
                                    }
                                    if (d.Ga) {
                                        var q = g.Pn(m, "X-HTTP-Session-Id");
                                        q && (d.Ke = q, g.Hp(d.Na, d.Ga, q))
                                    }
                                }
                                c.Dh = 3;
                                c.G && c.G.aT();
                                c.Nc && (c.Rd = Date.now() - a.Ba);
                                d = c;
                                var r = a;
                                d.xd = Wzb(d, d.Ta ? d.Xb : null, d.ac);
                                if (r.Ua) {
                                    Xzb(d.B,
                                        r);
                                    var t = r,
                                        v = d.bb;
                                    v && t.setTimeout(v);
                                    t.ma && (A8(t), x8(t));
                                    d.j = r
                                } else Yzb(d);
                                0 < c.C.length && E8(c)
                            } else "stop" != f[0] && "close" != f[0] || D8(c, 7);
                        else 3 == c.Dh && ("stop" == f[0] || "close" == f[0] ? "stop" == f[0] ? D8(c, 7) : c.disconnect() : "noop" != f[0] && c.G && c.G.ZS(f), c.ra = 0)
                    }
                s8(4)
            } catch (x) {}
        },
        Zzb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        $zb = function(a) {
            this.G = a || 10;
            g.Sa.PerformanceNavigationTiming ? (a = g.Sa.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(g.Sa.chrome && g.Sa.chrome.loadTimes && g.Sa.chrome.loadTimes() && g.Sa.chrome.loadTimes().wasFetchedViaSpdy);
            this.D = a ? this.G : 1;
            this.j = null;
            1 < this.D && (this.j = new Set);
            this.B = null;
            this.C = []
        },
        aAb = function(a) {
            return a.B ? !0 : a.j ? a.j.size >= a.D : !1
        },
        Uzb = function(a) {
            return a.B ? 1 : a.j ? a.j.size : 0
        },
        Szb = function(a, b) {
            return a.B ? a.B == b : a.j ? a.j.has(b) : !1
        },
        Vzb =
        function(a, b) {
            a.j ? a.j.add(b) : a.B = b
        },
        Xzb = function(a, b) {
            a.B && a.B == b ? a.B = null : a.j && a.j.has(b) && a.j.delete(b)
        },
        bAb = function(a) {
            if (null != a.B) return a.C.concat(a.B.ra);
            if (null != a.j && 0 !== a.j.size) {
                var b = a.C;
                a = g.u(a.j.values());
                for (var c = a.next(); !c.done; c = a.next()) b = b.concat(c.value.ra);
                return b
            }
            return g.Mb(a.C)
        },
        cAb = function(a, b) {
            var c = new v8;
            if (g.Sa.Image) {
                var d = new Image;
                d.onload = g.kb(F8, c, d, "TestLoadImage: loaded", !0, b);
                d.onerror = g.kb(F8, c, d, "TestLoadImage: error", !1, b);
                d.onabort = g.kb(F8, c, d, "TestLoadImage: abort", !1, b);
                d.ontimeout = g.kb(F8, c, d, "TestLoadImage: timeout", !1, b);
                g.Sa.setTimeout(function() {
                    if (d.ontimeout) d.ontimeout()
                }, 1E4);
                d.src = a
            } else b(!1)
        },
        F8 = function(a, b, c, d, e) {
            try {
                b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d)
            } catch (f) {}
        },
        dAb = function() {
            this.j = new r8
        },
        eAb = function(a, b, c) {
            var d = c || "";
            try {
                Cyb(a, function(e, f) {
                    var h = e;
                    g.cb(e) && (h = g.Mm(e));
                    b.push(d + f + "=" + encodeURIComponent(h))
                })
            } catch (e) {
                throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
            }
        },
        G8 = function(a, b, c) {
            return c && c.P7 ? c.P7[a] || b : b
        },
        fAb = function(a) {
            this.C = [];
            this.Xb = this.xd = this.Na = this.ac = this.j = this.Ke = this.Ga = this.Ka = this.N = this.Jb = this.W = null;
            this.Of = this.Za = 0;
            this.Mf = G8("failFast", !1, a);
            this.Ua = this.ma = this.Z = this.K = this.G = null;
            this.Jc = !0;
            this.Wd = this.Xa = -1;
            this.Rb = this.ra = this.Ba = 0;
            this.kh = G8("baseRetryDelayMs", 5E3, a);
            this.Pf = G8("retryDelaySeedMs", 1E4, a);
            this.Nf = G8("forwardChannelMaxRetries", 2, a);
            this.Je = G8("forwardChannelRequestTimeoutMs", 2E4, a);
            this.ze = a && a.Hnb || void 0;
            this.Bf = a && a.Dnb || !1;
            this.bb = void 0;
            this.Ta = a && a.qca || !1;
            this.D = "";
            this.B =
                new $zb(a && a.Kkb);
            this.Cf = new dAb;
            this.ub = a && a.blb || !1;
            this.qb = a && a.Qkb || !1;
            this.ub && this.qb && (this.qb = !1);
            this.Qf = a && a.Ckb || !1;
            a && a.dlb && (this.Jc = !1);
            this.Nc = !this.ub && this.Jc && a && a.Okb || !1;
            this.md = void 0;
            a && a.fY && 0 < a.fY && (this.md = a.fY);
            this.kd = void 0;
            this.Rd = 0;
            this.jb = !1;
            this.Db = this.Ea = null
        },
        C8 = function(a) {
            a.j && (gAb(a), a.j.cancel(), a.j = null)
        },
        hAb = function(a) {
            C8(a);
            a.Z && (g.Sa.clearTimeout(a.Z), a.Z = null);
            B8(a);
            a.B.cancel();
            a.K && ("number" === typeof a.K && g.Sa.clearTimeout(a.K), a.K = null)
        },
        E8 = function(a) {
            aAb(a.B) || a.K || (a.K = !0, g.Uf(a.WS, a), a.Ba = 0)
        },
        jAb = function(a, b) {
            if (Uzb(a.B) >= a.B.D - (a.K ? 1 : 0)) return !1;
            if (a.K) return a.C = b.ra.concat(a.C), !0;
            if (1 == a.Dh || 2 == a.Dh || a.Ba >= (a.Mf ? 0 : a.Nf)) return !1;
            a.K = u8((0, g.jb)(a.WS, a, b), iAb(a, a.Ba));
            a.Ba++;
            return !0
        },
        lAb = function(a, b) {
            var c;
            b ? c = b.Jc : c = a.Za++;
            var d = a.Na.clone();
            g.Hp(d, "SID", a.D);
            g.Hp(d, "RID", c);
            g.Hp(d, "AID", a.Xa);
            H8(a, d);
            a.N && a.W && g.Lp(d, a.N, a.W);
            c = new w8(a, a.D, c, a.Ba + 1);
            null === a.N && (c.Na = a.W);
            b && (a.C = b.ra.concat(a.C));
            b = kAb(a, c, 1E3);
            c.setTimeout(Math.round(.5 * a.Je) + Math.round(.5 * a.Je * Math.random()));
            Vzb(a.B, c);
            Izb(c, d, b)
        },
        H8 = function(a, b) {
            a.Ka && g.ad(a.Ka, function(c, d) {
                g.Hp(b, d, c)
            });
            a.G && Cyb({}, function(c, d) {
                g.Hp(b, d, c)
            })
        },
        kAb = function(a, b, c) {
            c = Math.min(a.C.length, c);
            var d = a.G ? (0, g.jb)(a.G.A2, a.G, a) : null;
            a: for (var e = a.C, f = -1;;) {
                var h = ["count=" + c]; - 1 == f ? 0 < c ? (f = e[0].j, h.push("ofs=" + f)) : f = 0 : h.push("ofs=" + f);
                for (var l = !0, m = 0; m < c; m++) {
                    var n = e[m].j,
                        p = e[m].map;
                    n -= f;
                    if (0 > n) f = Math.max(0, e[m].j - 100), l = !1;
                    else try {
                        eAb(p, h, "req" + n + "_")
                    } catch (q) {
                        d && d(p)
                    }
                }
                if (l) {
                    d = h.join("&");
                    break a
                }
            }
            a = a.C.splice(0, c);
            b.ra = a;
            return d
        },
        Yzb = function(a) {
            a.j || a.Z || (a.Rb = 1, g.Uf(a.VS, a), a.ra = 0)
        },
        Tzb = function(a) {
            if (a.j || a.Z || 3 <= a.ra) return !1;
            a.Rb++;
            a.Z = u8((0, g.jb)(a.VS, a), iAb(a, a.ra));
            a.ra++;
            return !0
        },
        gAb = function(a) {
            null != a.Ea && (g.Sa.clearTimeout(a.Ea), a.Ea = null)
        },
        mAb = function(a) {
            a.j = new w8(a, a.D, "rpc", a.Rb);
            null === a.N && (a.j.Na = a.W);
            a.j.qb = 0;
            var b = a.xd.clone();
            g.Hp(b, "RID", "rpc");
            g.Hp(b, "SID", a.D);
            g.Hp(b, "AID", a.Xa);
            g.Hp(b, "CI", a.Ua ? "0" : "1");
            !a.Ua && a.md && g.Hp(b, "TO", a.md);
            g.Hp(b, "TYPE", "xmlhttp");
            H8(a, b);
            a.N && a.W && g.Lp(b, a.N, a.W);
            a.bb && a.j.setTimeout(a.bb);
            var c = a.j;
            a = a.Xb;
            c.Ta = 1;
            c.Z = a8(b.clone());
            c.W = null;
            c.Ga = !0;
            Hzb(c, a)
        },
        B8 = function(a) {
            null != a.ma && (g.Sa.clearTimeout(a.ma), a.ma = null)
        },
        Rzb = function(a, b) {
            var c = null;
            if (a.j == b) {
                B8(a);
                gAb(a);
                a.j = null;
                var d = 2
            } else if (Szb(a.B, b)) c = b.ra, Xzb(a.B, b), d = 1;
            else return;
            if (0 != a.Dh)
                if (b.C)
                    if (1 == d) {
                        c = b.W ? b.W.length : 0;
                        b = Date.now() - b.Ba;
                        var e = a.Ba;
                        d = Czb();
                        d.dispatchEvent(new Fzb(d, c, b, e));
                        E8(a)
                    } else Yzb(a);
            else {
                var f = b.Db;
                e = b.getLastError();
                if (3 == e || 0 == e && 0 < f || !(1 == d && jAb(a, b) || 2 == d && Tzb(a))) switch (c && 0 < c.length && (b = a.B, b.C = b.C.concat(c)), e) {
                    case 1:
                        D8(a, 5);
                        break;
                    case 4:
                        D8(a, 10);
                        break;
                    case 3:
                        D8(a, 6);
                        break;
                    default:
                        D8(a, 2)
                }
            }
        },
        iAb = function(a, b) {
            var c = a.kh + Math.floor(Math.random() *
                a.Pf);
            a.isActive() || (c *= 2);
            return c * b
        },
        D8 = function(a, b) {
            if (2 == b) {
                var c = null;
                a.G && (c = null);
                var d = (0, g.jb)(a.wca, a);
                c || (c = new g.zp("//www.google.com/images/cleardot.gif"), g.Sa.location && "http" == g.Sa.location.protocol || g.Ap(c, "https"), a8(c));
                cAb(c.toString(), d)
            } else t8(2);
            a.Dh = 0;
            a.G && a.G.YS(b);
            nAb(a);
            hAb(a)
        },
        nAb = function(a) {
            a.Dh = 0;
            a.Db = [];
            if (a.G) {
                var b = bAb(a.B);
                if (0 != b.length || 0 != a.C.length) g.Ob(a.Db, b), g.Ob(a.Db, a.C), a.B.C.length = 0, g.Mb(a.C), a.C.length = 0;
                a.G.XS()
            }
        },
        oAb = function(a) {
            if (0 == a.Dh) return a.Db;
            var b = [];
            g.Ob(b, bAb(a.B));
            g.Ob(b, a.C);
            return b
        },
        Wzb = function(a, b, c) {
            var d = g.Ip(c);
            "" != d.j ? (b && g.Bp(d, b + "." + d.j), g.Cp(d, d.D)) : (d = g.Sa.location, d = Dyb(d.protocol, b ? b + "." + d.hostname : d.hostname, +d.port, c));
            b = a.Ga;
            c = a.Ke;
            b && c && g.Hp(d, b, c);
            g.Hp(d, "VER", a.US);
            H8(a, d);
            return d
        },
        Jzb = function(a, b, c) {
            if (b && !a.Ta) throw Error("Can't create secondary domain capable XhrIo object.");
            b = a.Bf && !a.ze ? new g.dn(new g.Lo({
                I_: c
            })) : new g.dn(a.ze);
            b.K = a.Ta;
            return b
        },
        pAb = function() {},
        qAb = function() {
            if (g.mf && !g.Uc(10)) throw Error("Environmental error: no available transport.");
        },
        J8 = function(a, b) {
            g.Md.call(this);
            this.j = new fAb(b);
            this.G = a;
            this.B = b && b.F8 || null;
            a = b && b.E8 || null;
            b && b.Ikb && (a ? a["X-Client-Protocol"] = "webchannel" : a = {
                "X-Client-Protocol": "webchannel"
            });
            this.j.W = a;
            a = b && b.fmb || null;
            b && b.nY && (a ? a["X-WebChannel-Content-Type"] = b.nY : a = {
                "X-WebChannel-Content-Type": b.nY
            });
            b && b.vV && (a ? a["X-WebChannel-Client-Profile"] = b.vV : a = {
                "X-WebChannel-Client-Profile": b.vV
            });
            this.j.Jb = a;
            (a = b && b.dmb) && !g.fc(a) && (this.j.N = a);
            this.K = b && b.qca || !1;
            this.D = b && b.cnb || !1;
            (b = b && b.K7) && !g.fc(b) && (this.j.Ga = b, g.jd(this.B, b) && (a = this.B,
                b in a && delete a[b]));
            this.C = new I8(this)
        },
        rAb = function(a) {
            zzb.call(this);
            a.__headers__ && (this.headers = a.__headers__, this.statusCode = a.__status__, delete a.__headers__, delete a.__status__);
            var b = a.__sm__;
            b ? this.data = (this.j = g.ed(b)) ? g.od(b, this.j) : b : this.data = a
        },
        sAb = function(a) {
            Azb.call(this);
            this.status = 1;
            this.errorCode = a
        },
        I8 = function(a) {
            this.j = a
        },
        tAb = function(a, b) {
            this.B = a;
            this.j = b
        },
        uAb = function(a) {
            return oAb(a.j).map(function(b) {
                var c = a.B;
                b = b.map;
                "__data__" in b ? (b = b.__data__, c = c.D ? zyb(b) : b) : c = b;
                return c
            })
        },
        K8 = function(a, b) {
            if ("function" !== typeof a) throw Error("Fn must not be null and must be a function");
            return g.Sa.setTimeout(function() {
                a()
            }, b)
        },
        M8 = function(a) {
            L8.dispatchEvent(new vAb(L8, a))
        },
        vAb = function(a) {
            g.Bb.call(this, "statevent", a)
        },
        N8 = function(a, b, c, d) {
            this.j = a;
            this.D = b;
            this.N = c;
            this.K = d || 1;
            this.B = 45E3;
            this.C = new g.Mp(this);
            this.G = new g.eg;
            this.G.setInterval(250)
        },
        xAb = function(a, b, c) {
            a.Fx = 1;
            a.Mr = a8(b.clone());
            a.Eu = c;
            a.Ga = !0;
            wAb(a, null)
        },
        yAb = function(a, b, c, d, e) {
            a.Fx = 1;
            a.Mr = a8(b.clone());
            a.Eu = null;
            a.Ga = c;
            e && (a.m_ = !1);
            wAb(a, d)
        },
        wAb = function(a, b) {
            a.Ex = Date.now();
            O8(a);
            a.Or = a.Mr.clone();
            b8(a.Or, "t", a.K);
            a.nG = 0;
            a.lj = a.j.xL(a.j.MB() ? b : null);
            0 < a.vL && (a.lG = new q8((0, g.jb)(a.bT, a, a.lj), a.vL));
            a.C.Ra(a.lj, "readystatechange", a.C2);
            b = a.Du ? g.qd(a.Du) : {};
            a.Eu ? (a.mG = "POST", b["Content-Type"] = "application/x-www-form-urlencoded", a.lj.send(a.Or, a.mG, a.Eu, b)) : (a.mG = "GET", a.m_ && !g.Vc && (b.Connection = "close"), a.lj.send(a.Or, a.mG, null, b));
            a.j.Kn(1)
        },
        BAb = function(a, b) {
            var c = a.nG,
                d = b.indexOf("\n", c);
            if (-1 == d) return zAb;
            c = Number(b.substring(c, d));
            if (isNaN(c)) return AAb;
            d += 1;
            if (d + c > b.length) return zAb;
            b = b.slice(d, d + c);
            a.nG = d + c;
            return b
        },
        DAb = function(a, b) {
            a.Ex = Date.now();
            O8(a);
            var c = b ? window.location.hostname : "";
            a.Or = a.Mr.clone();
            g.Hp(a.Or, "DOMAIN", c);
            g.Hp(a.Or, "t", a.K);
            try {
                a.oo = new ActiveXObject("htmlfile")
            } catch (m) {
                P8(a);
                a.Nr = 7;
                M8(22);
                Q8(a);
                return
            }
            var d = "<html><body>";
            if (b) {
                var e = "";
                for (b = 0; b < c.length; b++) {
                    var f = c.charAt(b);
                    if ("<" == f) f = e + "\\x3c";
                    else if (">" == f) f = e + "\\x3e";
                    else {
                        if (f in R8) f = R8[f];
                        else if (f in CAb) f = R8[f] = CAb[f];
                        else {
                            var h = f.charCodeAt(0);
                            if (31 < h && 127 > h) var l = f;
                            else {
                                if (256 > h) {
                                    if (l = "\\x", 16 > h || 256 < h) l += "0"
                                } else l = "\\u", 4096 > h && (l += "0");
                                l += h.toString(16).toUpperCase()
                            }
                            f =
                                R8[f] = l
                        }
                        f = e + f
                    }
                    e = f
                }
                d += '<script>document.domain="' + e + '"\x3c/script>'
            }
            c = g.ue(d + "</body></html>");
            a.oo.open();
            a.oo.write(g.te(c));
            a.oo.close();
            a.oo.parentWindow.m = (0, g.jb)(a.yaa, a);
            a.oo.parentWindow.d = (0, g.jb)(a.kZ, a, !0);
            a.oo.parentWindow.rpcClose = (0, g.jb)(a.kZ, a, !1);
            c = a.oo.createElement("DIV");
            a.oo.parentWindow.document.body.appendChild(c);
            d = g.lo(a.Or.toString());
            d = g.Me(g.ke(d));
            d = g.ue('<iframe src="' + d + '"></iframe>');
            g.Lba(c, d);
            a.j.Kn(1)
        },
        O8 = function(a) {
            a.wL = Date.now() + a.B;
            EAb(a, a.B)
        },
        EAb = function(a, b) {
            if (null != a.Gx) throw Error("WatchDog timer not null");
            a.Gx = K8((0, g.jb)(a.B2, a), b)
        },
        FAb = function(a) {
            a.Gx && (g.Sa.clearTimeout(a.Gx), a.Gx = null)
        },
        Q8 = function(a) {
            a.j.Og() || a.Cu || a.j.oG(a)
        },
        P8 = function(a) {
            FAb(a);
            g.vb(a.lG);
            a.lG = null;
            a.G.stop();
            a.C.yf();
            if (a.lj) {
                var b = a.lj;
                a.lj = null;
                b.abort();
                b.dispose()
            }
            a.oo && (a.oo = null)
        },
        GAb = function(a, b) {
            try {
                a.j.cT(a, b), a.j.Kn(4)
            } catch (c) {}
        },
        IAb = function(a, b, c, d, e) {
            if (0 == d) c(!1);
            else {
                var f = e || 0;
                d--;
                HAb(a, b, function(h) {
                    h ? c(!0) : g.Sa.setTimeout(function() {
                        IAb(a, b, c, d, f)
                    }, f)
                })
            }
        },
        HAb = function(a, b, c) {
            var d = new Image;
            d.onload = function() {
                try {
                    S8(d), c(!0)
                } catch (e) {}
            };
            d.onerror = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            d.onabort = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            d.ontimeout = function() {
                try {
                    S8(d), c(!1)
                } catch (e) {}
            };
            g.Sa.setTimeout(function() {
                if (d.ontimeout) d.ontimeout()
            }, b);
            d.src = a
        },
        S8 = function(a) {
            a.onload = null;
            a.onerror = null;
            a.onabort = null;
            a.ontimeout = null
        },
        JAb = function(a) {
            this.j = a;
            this.B = new r8
        },
        KAb = function(a) {
            var b = T8(a.j, a.zC, "/mail/images/cleardot.gif");
            a8(b);
            IAb(b.toString(), 5E3, (0, g.jb)(a.l5, a), 3, 2E3);
            a.Kn(1)
        },
        LAb = function(a) {
            var b = a.j.K;
            if (null != b) M8(5), b ? (M8(11), U8(a.j, a, !1)) : (M8(12), U8(a.j, a, !0));
            else if (a.Mj = new N8(a), a.Mj.Du = a.yL, b = a.j, b = T8(b, b.MB() ? a.LB : null, a.zL), M8(5), !g.mf || g.Uc(10)) b8(b, "TYPE", "xmlhttp"), yAb(a.Mj, b, !1, a.LB, !1);
            else {
                b8(b, "TYPE", "html");
                var c = a.Mj;
                a = !!a.LB;
                c.Fx = 3;
                c.Mr = a8(b.clone());
                DAb(c, a)
            }
        },
        MAb = function(a, b, c) {
            this.j = 1;
            this.B = [];
            this.C = [];
            this.G = new r8;
            this.W = a || null;
            this.K = null != b ? b : null;
            this.Z = c || !1
        },
        NAb = function(a, b) {
            this.j = a;
            this.map = b;
            this.context = null
        },
        OAb = function(a, b, c, d) {
            g.Bb.call(this, "timingevent", a);
            this.size = b;
            this.retries = d
        },
        PAb = function(a) {
            g.Bb.call(this, "serverreachability", a)
        },
        RAb = function(a) {
            a.D2(1, 0);
            a.pG = T8(a, null, a.AL);
            QAb(a)
        },
        SAb = function(a) {
            a.ls && (a.ls.abort(), a.ls = null);
            a.Jg && (a.Jg.cancel(), a.Jg = null);
            a.gq && (g.Sa.clearTimeout(a.gq), a.gq = null);
            V8(a);
            a.Xj && (a.Xj.cancel(), a.Xj = null);
            a.Pr && (g.Sa.clearTimeout(a.Pr), a.Pr = null)
        },
        TAb = function(a, b) {
            if (0 == a.j) throw Error("Invalid operation: sending map when state is closed");
            a.B.push(new NAb(a.E2++, b));
            2 != a.j && 3 != a.j || QAb(a)
        },
        UAb = function(a) {
            var b = 0;
            a.Jg && b++;
            a.Xj && b++;
            return b
        },
        QAb = function(a) {
            a.Xj || a.Pr || (a.Pr = K8((0, g.jb)(a.gT, a), 0), a.Ix = 0)
        },
        XAb = function(a, b) {
            if (1 == a.j) {
                if (!b) {
                    a.OB = Math.floor(1E5 * Math.random());
                    b = a.OB++;
                    var c = new N8(a, "", b);
                    c.Du = a.Co;
                    var d = VAb(a),
                        e = a.pG.clone();
                    g.Hp(e, "RID", b);
                    g.Hp(e, "CVER", "1");
                    W8(a, e);
                    xAb(c, e, d);
                    a.Xj = c;
                    a.j = 2
                }
            } else 3 == a.j && (b ? WAb(a, b) : 0 == a.B.length || a.Xj || WAb(a))
        },
        WAb = function(a, b) {
            if (b)
                if (6 < a.Fu) {
                    a.B = a.C.concat(a.B);
                    a.C.length = 0;
                    var c = a.OB - 1;
                    b = VAb(a)
                } else c = b.N, b = b.Eu;
            else c = a.OB++, b = VAb(a);
            var d = a.pG.clone();
            g.Hp(d, "SID", a.D);
            g.Hp(d, "RID", c);
            g.Hp(d, "AID", a.Jx);
            W8(a, d);
            c = new N8(a, a.D, c, a.Ix + 1);
            c.Du = a.Co;
            c.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            a.Xj = c;
            xAb(c, d, b)
        },
        W8 = function(a, b) {
            a.Oi && (a = a.Oi.kT()) && g.ad(a, function(c, d) {
                g.Hp(b, d, c)
            })
        },
        VAb = function(a) {
            var b = Math.min(a.B.length, 1E3),
                c = ["count=" + b];
            if (6 < a.Fu && 0 < b) {
                var d = a.B[0].j;
                c.push("ofs=" + d)
            } else d = 0;
            for (var e = {}, f = 0; f < b; e = {
                    hE: void 0
                }, f++) {
                e.hE = a.B[f].j;
                var h = a.B[f].map;
                e.hE = 6 >= a.Fu ? f : e.hE - d;
                try {
                    g.ad(h, function(l) {
                        return function(m, n) {
                            c.push("req" + l.hE + "_" + n + "=" + encodeURIComponent(m))
                        }
                    }(e))
                } catch (l) {
                    c.push("req" + e.hE + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            a.C = a.C.concat(a.B.splice(0, b));
            return c.join("&")
        },
        YAb = function(a) {
            a.Jg || a.gq || (a.N = 1, a.gq = K8((0, g.jb)(a.fT, a), 0), a.Hx = 0)
        },
        $Ab = function(a) {
            if (a.Jg || a.gq || 3 <= a.Hx) return !1;
            a.N++;
            a.gq = K8((0, g.jb)(a.fT, a), ZAb(a, a.Hx));
            a.Hx++;
            return !0
        },
        U8 = function(a, b, c) {
            a.UK = null == a.K ? c : !a.K;
            a.Do = b.fq;
            a.Z || RAb(a)
        },
        V8 = function(a) {
            null != a.Gu && (g.Sa.clearTimeout(a.Gu), a.Gu = null)
        },
        ZAb = function(a, b) {
            var c = 5E3 + Math.floor(1E4 * Math.random());
            a.isActive() || (c *= 2);
            return c * b
        },
        X8 = function(a, b) {
            if (2 == b || 9 == b) {
                var c = null;
                a.Oi && (c = null);
                var d = (0, g.jb)(a.vca, a);
                c || (c = new g.zp("//www.google.com/images/cleardot.gif"), a8(c));
                HAb(c.toString(), 1E4, d)
            } else M8(2);
            aBb(a, b)
        },
        aBb = function(a, b) {
            a.j = 0;
            a.Oi && a.Oi.hT(b);
            bBb(a);
            SAb(a)
        },
        bBb = function(a) {
            a.j = 0;
            a.Do = -1;
            if (a.Oi)
                if (0 == a.C.length && 0 == a.B.length) a.Oi.BL();
                else {
                    var b = g.Mb(a.C),
                        c = g.Mb(a.B);
                    a.C.length = 0;
                    a.B.length = 0;
                    a.Oi.BL(b, c)
                }
        },
        T8 = function(a, b, c) {
            var d = g.Ip(c);
            if ("" != d.j) b && g.Bp(d, b + "." + d.j), g.Cp(d, d.D);
            else {
                var e = window.location;
                d = Dyb(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c)
            }
            a.NB && g.ad(a.NB, function(f, h) {
                g.Hp(d, h, f)
            });
            g.Hp(d, "VER", a.Fu);
            W8(a, d);
            return d
        },
        cBb = function() {},
        dBb = function() {
            this.j = [];
            this.B = []
        },
        eBb = function(a) {
            g.Bb.call(this, "channelMessage");
            this.message = a
        },
        fBb = function(a) {
            g.Bb.call(this, "channelError");
            this.error = a
        },
        gBb = function(a, b) {
            this.action = a;
            this.params = b || {}
        },
        Y8 = function(a, b) {
            g.I.call(this);
            this.j = new g.cv(this.qaa, 0, this);
            g.M(this, this.j);
            this.Zi = 5E3;
            this.B = 0;
            if ("function" === typeof a) b && (a = (0, g.jb)(a, b));
            else if (a && "function" === typeof a.handleEvent) a = (0, g.jb)(a.handleEvent, a);
            else throw Error("Invalid listener argument");
            this.C = a
        },
        hBb = function(a, b, c, d, e) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? function() {
                return ""
            } : d;
            e = void 0 === e ? !1 : e;
            this.Ba = a;
            this.N = b;
            this.C = new g.Iv;
            this.B = new Y8(this.Jba, this);
            this.j = null;
            this.ma = !1;
            this.K = null;
            this.W = "";
            this.Z = this.G = 0;
            this.D = [];
            this.Ta = c;
            this.ra = d;
            this.Ua = e;
            this.Na = new Eyb;
            this.Ea = new Gyb;
            this.Ka = new Iyb;
            this.Ga = new Kyb;
            this.Xa = new Myb;
            this.Za = new Nyb
        },
        iBb = function(a) {
            if (a.j) {
                var b = a.ra(),
                    c = a.j.Co || {};
                b ? c["x-youtube-lounge-xsrf-token"] = b : delete c["x-youtube-lounge-xsrf-token"];
                a.j.Co = c
            }
        },
        Z8 = function(a) {
            this.scheme = "https";
            this.port = this.domain = "";
            this.j = "/api/lounge";
            this.B = !0;
            a = a || document.location.href;
            var b = Number(g.Tm(4, a)) || "";
            b && (this.port = ":" + b);
            this.domain = g.Um(a) || "";
            a = g.oc();
            0 <= a.search("MSIE") && (a = a.match(/MSIE ([\d.]+)/)[1], 0 > g.mc(a, "10.0") && (this.B = !1))
        },
        $8 = function(a, b) {
            var c = a.j;
            a.B && (c = a.scheme + "://" + a.domain + a.port + a.j);
            return g.$m(c + b, {})
        },
        jBb = function(a, b, c, d, e) {
            a = {
                format: "JSON",
                method: "POST",
                context: a,
                timeout: 5E3,
                withCredentials: !1,
                onSuccess: g.kb(a.D, d, !0),
                onError: g.kb(a.C, e),
                onTimeout: g.kb(a.G, e)
            };
            c && (a.postParams = c, a.headers = {
                "Content-Type": "application/x-www-form-urlencoded"
            });
            return g.sC(b, a)
        },
        kBb = function(a, b) {
            g.Md.call(this);
            var c = this;
            this.Ed = a();
            this.Ed.subscribe("handlerOpened", this.I2, this);
            this.Ed.subscribe("handlerClosed", this.G2, this);
            this.Ed.subscribe("handlerError", function(d, e) {
                c.onError(e)
            });
            this.Ed.subscribe("handlerMessage", this.H2, this);
            this.j = b
        },
        lBb = function(a, b, c) {
            var d = this;
            c = void 0 === c ? function() {
                return ""
            } : c;
            var e = void 0 === e ? new qAb : e;
            var f = void 0 === f ? new g.Iv : f;
            this.pathPrefix = a;
            this.j = b;
            this.Ba = c;
            this.G = f;
            this.Z = null;
            this.W = this.N = 0;
            this.channel = null;
            this.K = 0;
            this.C = new Y8(function() {
                d.C.isActive();
                var h;
                0 === (null == (h = d.channel) ? void 0 : Uzb((new tAb(h, h.j)).j.B)) && d.connect(d.Z, d.N)
            });
            this.D = {};
            this.B = {};
            this.ma = !1;
            this.logger = null;
            this.ra = [];
            this.Cg = void 0;
            this.Na = new Eyb;
            this.Ea = new Gyb;
            this.Ka = new Iyb;
            this.Ga = new Kyb
        },
        mBb = function(a) {
            g.Bd(a.channel, "m", function() {
                a.K = 3;
                a.C.reset();
                a.Z = null;
                a.N = 0;
                for (var b = g.u(a.ra), c = b.next(); !c.done; c = b.next()) c = c.value, a.channel && a.channel.send(c);
                a.ra = [];
                a.oa("webChannelOpened");
                Fyb(a.Na, "WEB_CHANNEL")
            });
            g.Bd(a.channel, "n", function() {
                a.K = 0;
                a.C.isActive() || a.oa("webChannelClosed");
                var b, c = null == (b = a.channel) ? void 0 : uAb(new tAb(b, b.j));
                c && (a.ra = [].concat(g.oa(c)));
                Hyb(a.Ea, "WEB_CHANNEL")
            });
            g.Bd(a.channel, "p", function(b) {
                var c = b.data;
                "gracefulReconnect" === c[0] ? (a.C.start(), a.channel && a.channel.close()) : a.oa("webChannelMessage", new gBb(c[0], c[1]));
                a.Cg = b.statusCode;
                Jyb(a.Ka, "WEB_CHANNEL")
            });
            g.Bd(a.channel, "o", function() {
                401 === a.Cg || a.C.start();
                a.oa("webChannelError");
                Lyb(a.Ga, "WEB_CHANNEL")
            })
        },
        nBb = function(a) {
            var b = a.Ba();
            b ? a.D["x-youtube-lounge-xsrf-token"] = b : delete a.D["x-youtube-lounge-xsrf-token"]
        },
        oBb = function(a) {
            g.Md.call(this);
            this.j = a();
            this.j.subscribe("webChannelOpened", this.L2, this);
            this.j.subscribe("webChannelClosed", this.J2, this);
            this.j.subscribe("webChannelError", this.onError, this);
            this.j.subscribe("webChannelMessage", this.K2, this)
        },
        pBb = function(a, b, c, d, e) {
            function f() {
                return new hBb($8(a, "/bc"), b, !1, c, d)
            }
            c = void 0 === c ? function() {
                return ""
            } : c;
            return g.XB("enable_mdx_web_channel_desktop") ? new oBb(function() {
                return new lBb($8(a, "/wc"), b, c)
            }) : new kBb(f, e)
        },
        tBb = function() {
            var a = qBb;
            rBb();
            a9.push(a);
            sBb()
        },
        b9 = function(a, b) {
            rBb();
            var c = uBb(a, String(b));
            0 == a9.length ? vBb(c) : (sBb(), g.bc(a9, function(d) {
                d(c)
            }))
        },
        c9 = function(a) {
            b9("CP", a)
        },
        rBb = function() {
            a9 || (a9 = g.Va("yt.mdx.remote.debug.handlers_") || [], g.Ua("yt.mdx.remote.debug.handlers_", a9))
        },
        vBb = function(a) {
            var b = (d9 + 1) % 50;
            d9 = b;
            e9[b] = a;
            f9 || (f9 = 49 == b)
        },
        sBb = function() {
            var a = a9;
            if (e9[0]) {
                var b = f9 ? d9 : -1;
                do {
                    b = (b + 1) % 50;
                    var c = e9[b];
                    g.bc(a, function(d) {
                        d(c)
                    })
                } while (b != d9);
                e9 = Array(50);
                d9 = -1;
                f9 = !1
            }
        },
        uBb = function(a, b) {
            var c = (Date.now() - wBb) / 1E3;
            c.toFixed && (c = c.toFixed(3));
            var d = [];
            d.push("[", c + "s", "] ");
            d.push("[", "yt.mdx.remote", "] ");
            d.push(a + ": " + b, "\n");
            return d.join("")
        },
        g9 = function(a) {
            g.uG.call(this);
            this.K = a;
            this.screens = []
        },
        xBb = function(a, b) {
            var c = a.get(b.uuid) || a.get(b.id);
            if (c) return a = c.name, c.id = b.id || c.id, c.name = b.name, c.token = b.token, c.uuid = b.uuid || c.uuid, c.name != a;
            a.screens.push(b);
            return !0
        },
        yBb = function(a, b) {
            var c = a.screens.length != b.length;
            a.screens = g.wt(a.screens, function(f) {
                return !!$yb(b, f)
            });
            for (var d = 0, e = b.length; d < e; d++) c = xBb(a, b[d]) || c;
            return c
        },
        zBb = function(a, b) {
            var c = a.screens.length;
            a.screens = g.wt(a.screens, function(d) {
                return !(d || b ? !d != !b ? 0 : d.id == b.id : 1)
            });
            return a.screens.length < c
        },
        ABb = function(a, b, c, d, e) {
            g.uG.call(this);
            this.C = a;
            this.N = b;
            this.D = c;
            this.K = d;
            this.G = e;
            this.B = 0;
            this.j = null;
            this.jd = NaN
        },
        i9 = function(a) {
            g9.call(this, "LocalScreenService");
            this.B = a;
            this.j = NaN;
            h9(this);
            this.info("Initializing with " + Xyb(this.screens))
        },
        BBb = function(a) {
            if (a.screens.length) {
                var b = g.Lr(a.screens, function(d) {
                        return d.id
                    }),
                    c = $8(a.B, "/pairing/get_lounge_token_batch");
                jBb(a.B, c, {
                    screen_ids: b.join(",")
                }, (0, g.jb)(a.i7, a), (0, g.jb)(a.h7, a))
            }
        },
        h9 = function(a) {
            if (g.XB("deprecate_pair_servlet_enabled")) return yBb(a, []);
            var b = Wyb(gzb());
            b = g.wt(b, function(c) {
                return !c.uuid
            });
            return yBb(a, b)
        },
        j9 = function(a, b) {
            izb(g.Lr(a.screens, Uyb));
            b && hzb()
        },
        DBb = function(a, b) {
            g.uG.call(this);
            this.K = b;
            b = (b = g.kD("yt-remote-online-screen-ids") || "") ? b.split(",") : [];
            for (var c = {}, d = this.K(), e = d.length, f = 0; f < e; ++f) {
                var h = d[f].id;
                c[h] = g.Hb(b, h)
            }
            this.j = c;
            this.G = a;
            this.C = this.D = NaN;
            this.B = null;
            CBb("Initialized with " + g.Mm(this.j))
        },
        EBb = function(a, b, c) {
            var d = $8(a.G, "/pairing/get_screen_availability");
            jBb(a.G, d, {
                lounge_token: b.token
            }, (0, g.jb)(function(e) {
                e = e.screens || [];
                for (var f = e.length, h = 0; h < f; ++h)
                    if (e[h].loungeToken == b.token) {
                        c("online" == e[h].status);
                        return
                    }
                c(!1)
            }, a), (0, g.jb)(function() {
                c(!1)
            }, a))
        },
        GBb = function(a, b) {
            a: if (xyb(b) != xyb(a.j)) var c = !1;
                else {
                    c = g.id(b);
                    for (var d = c.length, e = 0; e < d; ++e)
                        if (!a.j[c[e]]) {
                            c = !1;
                            break a
                        }
                    c = !0
                }c || (CBb("Updated online screens: " + g.Mm(a.j)), a.j = b, a.oa("screenChange"));FBb(a)
        },
        k9 = function(a) {
            isNaN(a.C) || g.pC(a.C);
            a.C = g.nC((0, g.jb)(a.ZQ, a), 0 < a.D && a.D < g.ob() ? 2E4 : 1E4)
        },
        CBb = function(a) {
            b9("OnlineScreenService", a)
        },
        HBb = function(a) {
            var b = {};
            g.bc(a.K(), function(c) {
                c.token ? b[c.token] = c.id : this.cg("Requesting availability of screen w/o lounge token.")
            });
            return b
        },
        FBb = function(a) {
            a = g.id(g.bd(a.j, function(b) {
                return b
            }));
            g.Zb(a);
            a.length ? g.jD("yt-remote-online-screen-ids", a.join(","), 60) : g.lD("yt-remote-online-screen-ids")
        },
        l9 = function(a, b) {
            b = void 0 === b ? !1 : b;
            g9.call(this, "ScreenService");
            this.D = a;
            this.N = b;
            this.j = this.B = null;
            this.C = [];
            this.G = {};
            IBb(this)
        },
        KBb = function(a, b, c, d, e, f) {
            a.info("getAutomaticScreenByIds " + c + " / " + b);
            c || (c = a.G[b]);
            var h = a.Nk(),
                l = c ? h8(h, c) : null;
            c && (a.N || l) || (l = h8(h, b));
            if (l) {
                l.uuid = b;
                var m = m9(a, l);
                EBb(a.j, m, function(n) {
                    e(n ? m : null)
                })
            } else c ? JBb(a, c, (0, g.jb)(function(n) {
                var p = m9(this, new e8({
                    name: d,
                    screenId: c,
                    loungeToken: n,
                    dialId: b || ""
                }));
                EBb(this.j, p, function(q) {
                    e(q ? p : null)
                })
            }, a), f) : e(null)
        },
        LBb = function(a, b) {
            for (var c = a.screens.length, d = 0; d < c; ++d)
                if (a.screens[d].name == b) return a.screens[d];
            return null
        },
        MBb = function(a, b, c) {
            EBb(a.j, b, c)
        },
        JBb = function(a, b, c, d) {
            a.info("requestLoungeToken_ for " + b);
            var e = {
                postParams: {
                    screen_ids: b
                },
                method: "POST",
                context: a,
                onSuccess: function(f, h) {
                    f = h && h.screens || [];
                    f[0] && f[0].screenId == b ? c(f[0].loungeToken) : d(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    d(Error("Request screen lounge token failed"))
                }
            };
            g.sC($8(a.D, "/pairing/get_lounge_token_batch"), e)
        },
        NBb = function(a) {
            a.screens = a.B.Nk();
            var b = a.G,
                c = {},
                d;
            for (d in b) c[b[d]] = d;
            b = a.screens.length;
            for (d = 0; d < b; ++d) {
                var e = a.screens[d];
                e.uuid = c[e.id] || ""
            }
            a.info("Updated manual screens: " + Xyb(a.screens))
        },
        IBb = function(a) {
            OBb(a);
            a.B = new i9(a.D);
            a.B.subscribe("screenChange", (0, g.jb)(a.s7, a));
            NBb(a);
            a.N || (a.C = Wyb(g.kD("yt-remote-automatic-screen-cache") || []));
            OBb(a);
            a.info("Initializing automatic screens: " + Xyb(a.C));
            a.j = new DBb(a.D, (0, g.jb)(a.Nk, a, !0));
            a.j.subscribe("screenChange", (0, g.jb)(function() {
                this.oa("onlineScreenChange")
            }, a))
        },
        m9 = function(a, b) {
            var c = a.get(b.id);
            c ? (c.uuid = b.uuid, b = c) : ((c = h8(a.C, b.uuid)) ? (c.id = b.id, c.token = b.token, b = c) : a.C.push(b), a.N || PBb(a));
            OBb(a);
            a.G[b.uuid] = b.id;
            g.jD("yt-remote-device-id-map", a.G, 31536E3);
            return b
        },
        PBb = function(a) {
            a = g.wt(a.C, function(b) {
                return "shortLived" != b.idType
            });
            g.jD("yt-remote-automatic-screen-cache", g.Lr(a, Uyb))
        },
        OBb = function(a) {
            a.G = g.kD("yt-remote-device-id-map") || {}
        },
        n9 = function(a, b, c) {
            g.uG.call(this);
            this.Ga = c;
            this.D = a;
            this.B = b;
            this.j = null
        },
        o9 = function(a, b) {
            a.j = b;
            a.oa("sessionScreen", a.j)
        },
        QBb = function(a, b) {
            a.j && (a.j.token = b, m9(a.D, a.j));
            a.oa("sessionScreen", a.j)
        },
        p9 = function(a, b) {
            b9(a.Ga, b)
        },
        q9 = function(a, b, c) {
            n9.call(this, a, b, "CastSession");
            var d = this;
            this.config_ = c;
            this.C = null;
            this.ra = (0, g.jb)(this.Q2, this);
            this.Ea = (0, g.jb)(this.Gaa, this);
            this.ma = g.nC(function() {
                RBb(d, null)
            }, 12E4);
            this.N = this.G = this.K = this.Z = 0;
            this.Ba = !1;
            this.W = "unknown"
        },
        TBb = function(a, b) {
            g.pC(a.N);
            a.N = 0;
            0 == b ? SBb(a) : a.N = g.nC(function() {
                SBb(a)
            }, b)
        },
        SBb = function(a) {
            UBb(a, "getLoungeToken");
            g.pC(a.G);
            a.G = g.nC(function() {
                VBb(a, null)
            }, 3E4)
        },
        UBb = function(a, b) {
            a.info("sendYoutubeMessage_: " + b + " " + g.Mm());
            var c = {};
            c.type = b;
            a.C ? a.C.sendMessage("urn:x-cast:com.google.youtube.mdx", c, function() {}, (0, g.jb)(function() {
                p9(this, "Failed to send message: " + b + ".")
            }, a)) : p9(a, "Sending yt message without session: " + g.Mm(c))
        },
        WBb = function(a, b) {
            b ? (a.info("onConnectedScreenId_: Received screenId: " + b), a.j && a.j.id == b || a.GW(b, function(c) {
                o9(a, c)
            }, function() {
                return a.Dj()
            }, 5)) : a.Dj(Error("Waiting for session status timed out."))
        },
        YBb = function(a, b, c) {
            a.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(b));
            var d = new e8(b);
            XBb(a, d, function(e) {
                e ? (a.Ba = !0, m9(a.D, d), o9(a, d), a.W = "unknown", TBb(a, c)) : (g.$B(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online.")), a.Dj())
            }, 5)
        },
        RBb = function(a, b) {
            g.pC(a.ma);
            a.ma = 0;
            b ? a.config_.enableCastLoungeToken && b.loungeToken ? b.deviceId ? a.j && a.j.uuid == b.deviceId || (b.loungeTokenRefreshIntervalMs ? YBb(a, {
                    name: a.B.friendlyName,
                    screenId: b.screenId,
                    loungeToken: b.loungeToken,
                    dialId: b.deviceId,
                    screenIdType: "shortLived"
                }, b.loungeTokenRefreshIntervalMs) : (g.$B(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), WBb(a, b.screenId))) : (g.$B(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(b) + ".")), WBb(a, b.screenId)) :
                WBb(a, b.screenId) : a.Dj(Error("Waiting for session status timed out."))
        },
        VBb = function(a, b) {
            g.pC(a.G);
            a.G = 0;
            var c = null;
            if (b)
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
            else c = "noLoungeTokenResponse";
            c ? (a.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(b) + ", error: " + c)), a.W = c, TBb(a, 3E4)) : (QBb(a, b.loungeToken), a.Ba = !1, a.W = "unknown", TBb(a, b.loungeTokenRefreshIntervalMs))
        },
        XBb = function(a, b, c, d) {
            g.pC(a.K);
            a.K = 0;
            MBb(a.D, b, function(e) {
                e || 0 > d ? c(e) : a.K = g.nC(function() {
                    XBb(a, b, c, d - 1)
                }, 300)
            })
        },
        ZBb = function(a) {
            g.pC(a.Z);
            a.Z = 0;
            g.pC(a.K);
            a.K = 0;
            g.pC(a.ma);
            a.ma = 0;
            g.pC(a.G);
            a.G = 0;
            g.pC(a.N);
            a.N = 0
        },
        r9 = function(a, b, c, d) {
            n9.call(this, a, b, "DialSession");
            this.config_ = d;
            this.C = this.Z = null;
            this.Ea = "";
            this.Ta = c;
            this.Na = null;
            this.ma = function() {};
            this.W = NaN;
            this.Ka = (0, g.jb)(this.R2, this);
            this.G = function() {};
            this.N = this.K = 0;
            this.ra = !1;
            this.Ba = "unknown"
        },
        s9 = function(a) {
            var b;
            return !!(a.config_.enableDialLoungeToken && (null == (b = a.C) ? 0 : b.getDialAppInfo))
        },
        $Bb = function(a) {
            a.G = a.D.mT(a.Ea, a.B.label, a.B.friendlyName, s9(a), function(b, c) {
                a.G = function() {};
                a.ra = !0;
                o9(a, b);
                "shortLived" == b.idType && 0 < c && t9(a, c)
            }, function(b) {
                a.G = function() {};
                a.Dj(b)
            })
        },
        aCb = function(a) {
            var b = {};
            b.pairingCode = a.Ea;
            b.theme = a.Ta;
            kzb() && (b.env_useStageMdx = 1);
            return g.Zm(b)
        },
        bCb = function(a) {
            return new Promise(function(b) {
                a.Ea = Yyb();
                if (a.Na) {
                    var c = new chrome.cast.DialLaunchResponse(!0, aCb(a));
                    b(c);
                    $Bb(a)
                } else a.ma = function() {
                    g.pC(a.W);
                    a.ma = function() {};
                    a.W = NaN;
                    var d = new chrome.cast.DialLaunchResponse(!0, aCb(a));
                    b(d);
                    $Bb(a)
                }, a.W = g.nC(function() {
                    a.ma()
                }, 100)
            })
        },
        dCb = function(a, b, c) {
            a.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(b));
            var d = new e8(b);
            return (new Promise(function(e) {
                cCb(a, d, function(f) {
                    f ? (a.ra = !0, m9(a.D, d), o9(a, d), t9(a, c)) : g.$B(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(b) + " is not online."));
                    e(f)
                }, 5)
            })).then(function(e) {
                return e ? new chrome.cast.DialLaunchResponse(!1) : bCb(a)
            })
        },
        eCb = function(a, b) {
            var c = a.Z.receiver.label,
                d = a.B.friendlyName;
            return (new Promise(function(e) {
                KBb(a.D, c, b, d, function(f) {
                    f && f.token && o9(a, f);
                    e(f)
                }, function(f) {
                    p9(a, "Failed to get DIAL screen: " + f);
                    e(null)
                })
            })).then(function(e) {
                return e && e.token ? new chrome.cast.DialLaunchResponse(!1) : bCb(a)
            })
        },
        cCb = function(a, b, c, d) {
            g.pC(a.K);
            a.K = 0;
            MBb(a.D, b, function(e) {
                e || 0 > d ? c(e) : a.K = g.nC(function() {
                    cCb(a, b, c, d - 1)
                }, 300)
            })
        },
        t9 = function(a, b) {
            a.info("getDialAppInfoWithTimeout_ " + b);
            s9(a) && (g.pC(a.N), a.N = 0, 0 == b ? fCb(a) : a.N = g.nC(function() {
                fCb(a)
            }, b))
        },
        fCb = function(a) {
            s9(a) && a.C.getDialAppInfo(function(b) {
                a.info("getDialAppInfo dialLaunchData: " + JSON.stringify(b));
                b = b.extraData || {};
                var c = null;
                if (b.loungeToken) {
                    var d;
                    (null == (d = a.j) ? void 0 : d.token) == b.loungeToken && (c = "staleLoungeToken")
                } else c = "missingLoungeToken";
                c ? (a.Ba = c, t9(a, 3E4)) : (a.ra = !1, a.Ba = "unknown", QBb(a, b.loungeToken), t9(a, b.loungeTokenRefreshIntervalMs))
            }, function(b) {
                a.info("getDialAppInfo error: " + b);
                a.Ba = "noLoungeTokenResponse";
                t9(a, 3E4)
            })
        },
        gCb = function(a) {
            g.pC(a.K);
            a.K = 0;
            g.pC(a.N);
            a.N = 0;
            a.G();
            a.G = function() {};
            g.pC(a.W)
        },
        u9 = function(a, b) {
            n9.call(this, a, b, "ManualSession");
            this.C = g.nC((0, g.jb)(this.Mz, this, null), 150)
        },
        v9 = function(a, b) {
            g.uG.call(this);
            this.config_ = b;
            this.B = a;
            this.Z = b.appId || "233637DE";
            this.D = b.theme || "cl";
            this.W = b.disableCastApi || !1;
            this.K = b.forceMirroring || !1;
            this.j = null;
            this.N = !1;
            this.C = [];
            this.G = (0, g.jb)(this.z$, this)
        },
        hCb = function(a, b) {
            return b ? g.Eb(a.C, function(c) {
                return f8(b, c.label)
            }, a) : null
        },
        w9 = function(a) {
            b9("Controller", a)
        },
        qBb = function(a) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(a)
        },
        x9 = function(a) {
            return a.N || !!a.C.length || !!a.j
        },
        y9 = function(a, b, c) {
            b != a.j && (g.vb(a.j), (a.j = b) ? (c ? a.oa("yt-remote-cast2-receiver-resumed",
                b.B) : a.oa("yt-remote-cast2-receiver-selected", b.B), b.subscribe("sessionScreen", (0, g.jb)(a.iZ, a, b)), b.subscribe("sessionFailed", function() {
                return iCb(a, b)
            }), b.j ? a.oa("yt-remote-cast2-session-change", b.j) : c && a.j.Mz(null)) : a.oa("yt-remote-cast2-session-change", null))
        },
        iCb = function(a, b) {
            a.j == b && a.oa("yt-remote-cast2-session-failed")
        },
        jCb = function(a) {
            var b = a.B.lT(),
                c = a.j && a.j.B;
            a = g.Lr(b, function(d) {
                c && f8(d, c.label) && (c = null);
                var e = d.uuid ? d.uuid : d.id,
                    f = hCb(this, d);
                f ? (f.label = e, f.friendlyName = d.name) : (f = new chrome.cast.Receiver(e, d.name), f.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return f
            }, a);
            c && (c.receiverType != chrome.cast.ReceiverType.CUSTOM && (c = new chrome.cast.Receiver(c.label, c.friendlyName), c.receiverType = chrome.cast.ReceiverType.CUSTOM), a.push(c));
            return a
        },
        qCb = function(a, b, c, d) {
            d.disableCastApi ? z9("Cannot initialize because disabled by Mdx config.") : kCb() ? lCb(b, d) && (mCb(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? nCb(a, c) : (window.__onGCastApiAvailable = function(e, f) {
                e ? nCb(a, c) : (A9("Failed to load cast API: " + f), oCb(!1), mCb(!1), g.lD("yt-remote-cast-available"), g.lD("yt-remote-cast-receiver"),
                    pCb(), c(!1))
            }, d.loadCastApiSetupScript ? g.Osa("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : 0 <= window.navigator.userAgent.indexOf("Android") && 0 <= window.navigator.userAgent.indexOf("Chrome/") && window.navigator.presentation ? 60 <= mzb() && vzb() : !window.chrome || !window.navigator.presentation || 0 <= window.navigator.userAgent.indexOf("Edge") ? qzb() : 89 <= mzb() ? xzb() : (uzb(), o8(wzb.map(rzb))))) : z9("Cannot initialize because not running Chrome")
        },
        pCb = function() {
            z9("dispose");
            var a = B9();
            a && a.dispose();
            g.Ua("yt.mdx.remote.cloudview.instance_", null);
            rCb(!1);
            g.$E(sCb);
            sCb.length = 0
        },
        C9 = function() {
            return !!g.kD("yt-remote-cast-installed")
        },
        tCb = function() {
            var a = g.kD("yt-remote-cast-receiver");
            return a ? a.friendlyName : null
        },
        uCb = function() {
            z9("clearCurrentReceiver");
            g.lD("yt-remote-cast-receiver")
        },
        vCb = function() {
            return C9() ? B9() ? B9().getCastSession() : (A9("getCastSelector: Cast is not initialized."), null) : (A9("getCastSelector: Cast API is not installed!"), null)
        },
        wCb = function() {
            C9() ? B9() ? D9() ? (z9("Requesting cast selector."), B9().requestSession()) : (z9("Wait for cast API to be ready to request the session."), sCb.push(g.ZE("yt-remote-cast2-api-ready", wCb))) : A9("requestCastSelector: Cast is not initialized.") : A9("requestCastSelector: Cast API is not installed!")
        },
        E9 = function(a, b) {
            D9() ? B9().setConnectedScreenStatus(a, b) : A9("setConnectedScreenStatus called before ready.")
        },
        kCb = function() {
            var a = 0 <= g.oc().search(/ (CrMo|Chrome|CriOS)\//);
            return g.fL || a
        },
        xCb = function(a, b) {
            B9().init(a, b)
        },
        lCb = function(a, b) {
            var c = !1;
            B9() || (a = new v9(a, b), a.subscribe("yt-remote-cast2-availability-change", function(d) {
                g.jD("yt-remote-cast-available", d);
                m8("yt-remote-cast2-availability-change", d)
            }), a.subscribe("yt-remote-cast2-receiver-selected", function(d) {
                z9("onReceiverSelected: " + d.friendlyName);
                g.jD("yt-remote-cast-receiver", d);
                m8("yt-remote-cast2-receiver-selected", d)
            }), a.subscribe("yt-remote-cast2-receiver-resumed", function(d) {
                z9("onReceiverResumed: " + d.friendlyName);
                g.jD("yt-remote-cast-receiver", d);
                m8("yt-remote-cast2-receiver-resumed", d)
            }), a.subscribe("yt-remote-cast2-session-change", function(d) {
                z9("onSessionChange: " + g8(d));
                d || g.lD("yt-remote-cast-receiver");
                m8("yt-remote-cast2-session-change", d)
            }), g.Ua("yt.mdx.remote.cloudview.instance_", a), c = !0);
            z9("cloudview.createSingleton_: " + c);
            return c
        },
        B9 = function() {
            return g.Va("yt.mdx.remote.cloudview.instance_")
        },
        nCb = function(a, b) {
            oCb(!0);
            mCb(!1);
            xCb(a, function(c) {
                c ? (rCb(!0), g.aF("yt-remote-cast2-api-ready")) : (A9("Failed to initialize cast API."), oCb(!1), g.lD("yt-remote-cast-available"), g.lD("yt-remote-cast-receiver"), pCb());
                b(c)
            })
        },
        z9 = function(a) {
            b9("cloudview", a)
        },
        A9 = function(a) {
            b9("cloudview", a)
        },
        oCb = function(a) {
            z9("setCastInstalled_ " + a);
            g.jD("yt-remote-cast-installed", a)
        },
        D9 = function() {
            return !!g.Va("yt.mdx.remote.cloudview.apiReady_")
        },
        rCb = function(a) {
            z9("setApiReady_ " + a);
            g.Ua("yt.mdx.remote.cloudview.apiReady_", a)
        },
        mCb = function(a) {
            g.Ua("yt.mdx.remote.cloudview.initializing_", a)
        },
        F9 = function(a) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.K = this.N = 0;
            this.trackData = null;
            this.Qk = this.yp = !1;
            this.Z = this.G = this.j = this.D = 0;
            this.C = NaN;
            this.B = !1;
            this.reset(a)
        },
        yCb = function(a) {
            a.audioTrackId = null;
            a.trackData = null;
            a.playerState = -1;
            a.yp = !1;
            a.Qk = !1;
            a.N = 0;
            a.K = g.ob();
            a.D = 0;
            a.j = 0;
            a.G = 0;
            a.Z = 0;
            a.C = NaN;
            a.B = !1
        },
        G9 = function(a) {
            return a.isPlaying() ? (g.ob() - a.K) / 1E3 : 0
        },
        H9 = function(a, b) {
            a.N = b;
            a.K = g.ob()
        },
        I9 = function(a) {
            switch (a.playerState) {
                case 1:
                case 1081:
                    return (g.ob() - a.K) / 1E3 + a.N;
                case -1E3:
                    return 0
            }
            return a.N
        },
        J9 = function(a, b, c) {
            var d = a.videoId;
            a.videoId = b;
            a.index = c;
            b != d && yCb(a)
        },
        zCb = function(a) {
            var b = {};
            b.index = a.index;
            b.listId = a.listId;
            b.videoId = a.videoId;
            b.playerState = a.playerState;
            b.volume = a.volume;
            b.muted = a.muted;
            b.audioTrackId = a.audioTrackId;
            b.trackData = g.rd(a.trackData);
            b.hasPrevious = a.yp;
            b.hasNext = a.Qk;
            b.playerTime = a.N;
            b.playerTimeAt = a.K;
            b.seekableStart = a.D;
            b.seekableEnd = a.j;
            b.duration = a.G;
            b.loadedTime = a.Z;
            b.liveIngestionTime = a.C;
            return b
        },
        L9 = function(a, b) {
            g.uG.call(this);
            var c = this;
            this.C = 0;
            this.D = a;
            this.K = [];
            this.G = new dBb;
            this.B = this.j = null;
            this.W = (0, g.jb)(this.p9, this);
            this.N = (0, g.jb)(this.rE, this);
            this.Z = (0, g.jb)(this.o9, this);
            this.ma = (0, g.jb)(this.s9, this);
            var d = 0;
            a ? (d = a.getProxyState(), 3 != d && (a.subscribe("proxyStateChange", this.wR, this), ACb(this))) : d = 3;
            0 != d && (b ? this.wR(d) : g.nC(function() {
                c.wR(d)
            }, 0));
            (a = vCb()) && K9(this, a);
            this.subscribe("yt-remote-cast2-session-change", this.ma)
        },
        M9 = function(a) {
            return new F9(a.D.getPlayerContextData())
        },
        ACb = function(a) {
            g.bc("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(b) {
                this.K.push(this.D.subscribe(b, g.kb(this.x$, b), this))
            }, a)
        },
        BCb = function(a) {
            g.bc(a.K, function(b) {
                this.D.unsubscribeByKey(b)
            }, a);
            a.K.length = 0
        },
        N9 = function(a) {
            return 1 == a.getState()
        },
        O9 = function(a, b) {
            var c = a.G;
            50 > c.j.length + c.B.length && a.G.B.push(b)
        },
        CCb = function(a, b, c) {
            var d = M9(a);
            H9(d, c); - 1E3 != d.playerState && (d.playerState = b);
            P9(a, d)
        },
        Q9 = function(a, b, c) {
            a.D.sendMessage(b, c)
        },
        P9 = function(a, b) {
            BCb(a);
            a.D.setPlayerContextData(zCb(b));
            ACb(a)
        },
        K9 = function(a, b) {
            a.B && (a.B.removeUpdateListener(a.W), a.B.removeMediaListener(a.N), a.rE(null));
            a.B = b;
            a.B && (c9("Setting cast session: " + a.B.sessionId), a.B.addUpdateListener(a.W), a.B.addMediaListener(a.N), a.B.media.length && a.rE(a.B.media[0]))
        },
        DCb = function(a) {
            var b = a.j.media,
                c = a.j.customData;
            if (b && c) {
                var d = M9(a);
                b.contentId != d.videoId && c9("Cast changing video to: " + b.contentId);
                d.videoId = b.contentId;
                d.playerState = c.playerState;
                H9(d, a.j.getEstimatedTime());
                P9(a, d)
            } else c9("No cast media video. Ignoring state update.")
        },
        R9 = function(a, b, c) {
            return (0, g.jb)(function(d) {
                this.cg("Failed to " + b + " with cast v2 channel. Error code: " + d.code);
                d.code != chrome.cast.ErrorCode.TIMEOUT && (this.cg("Retrying " + b + " using MDx browser channel."), Q9(this, b, c))
            }, a)
        },
        U9 = function(a, b, c, d) {
            d = void 0 === d ? !1 : d;
            g.uG.call(this);
            var e = this;
            this.K = NaN;
            this.Ea = !1;
            this.W = this.Z = this.ra = this.Ba = NaN;
            this.ma = [];
            this.G = this.N = this.D = this.j = this.B = null;
            this.Na = a;
            this.Ka = d;
            this.ma.push(g.aD(window, "beforeunload", function() {
                e.Ty(2)
            }));
            this.C = [];
            this.j = new F9;
            this.Ta = b.id;
            this.Ga = b.idType;
            this.B = pBb(this.Na, c, this.qT, "shortLived" == this.Ga, this.Ta);
            this.B.Ra("channelOpened", function() {
                ECb(e)
            });
            this.B.Ra("channelClosed", function() {
                S9("Channel closed");
                isNaN(e.K) ? k8(!0) : k8();
                e.dispose()
            });
            this.B.Ra("channelError", function(f) {
                k8();
                isNaN(e.tD()) ? (1 == f && "shortLived" == e.Ga && e.oa("browserChannelAuthError", f), S9("Channel error: " + f + " without reconnection"), e.dispose()) : (e.Ea = !0, S9("Channel error: " + f + " with reconnection in " + e.tD() + " ms"), T9(e, 2))
            });
            this.B.Ra("channelMessage", function(f) {
                FCb(e, f)
            });
            this.B.xr(b.token);
            this.subscribe("remoteQueueChange", function() {
                var f = e.j.videoId;
                g.mD() && g.jD("yt-remote-session-video-id", f)
            })
        },
        GCb = function(a) {
            return g.Eb(a.C, function(b) {
                return "LOUNGE_SCREEN" == b.type
            })
        },
        S9 = function(a) {
            b9("conn", a)
        },
        T9 = function(a, b) {
            a.oa("proxyStateChange", b)
        },
        HCb = function(a) {
            a.K = g.nC(function() {
                S9("Connecting timeout");
                a.Ty(1)
            }, 2E4)
        },
        ICb = function(a) {
            g.pC(a.K);
            a.K = NaN
        },
        JCb = function(a) {
            g.pC(a.Ba);
            a.Ba = NaN
        },
        LCb = function(a) {
            KCb(a);
            a.ra = g.nC(function() {
                V9(a, "getNowPlaying")
            }, 2E4)
        },
        KCb = function(a) {
            g.pC(a.ra);
            a.ra = NaN
        },
        ECb = function(a) {
            S9("Channel opened");
            a.Ea && (a.Ea = !1, JCb(a), a.Ba = g.nC(function() {
                S9("Timing out waiting for a screen.");
                a.Ty(1)
            }, 15E3))
        },
        NCb = function(a, b) {
            var c = null;
            if (b) {
                var d = GCb(a);
                d && (c = {
                    clientName: d.clientName,
                    deviceMake: d.brand,
                    deviceModel: d.model,
                    osVersion: d.osVersion
                })
            }
            g.Ua("yt.mdx.remote.remoteClient_", c);
            b && (ICb(a), JCb(a));
            c = a.B.Bz() && isNaN(a.K);
            b == c ? b && (T9(a, 1), V9(a, "getSubtitlesTrack")) : b ? (a.zW() && a.j.reset(), T9(a, 1), V9(a, "getNowPlaying"), MCb(a)) : a.Ty(1)
        },
        OCb = function(a, b) {
            var c = b.params.videoId;
            delete b.params.videoId;
            c == a.j.videoId && (g.nd(b.params) ? a.j.trackData = null : a.j.trackData = b.params, a.oa("remotePlayerChange"))
        },
        PCb = function(a, b, c) {
            var d = b.params.videoId || b.params.video_id,
                e = parseInt(b.params.currentIndex, 10);
            a.j.listId = b.params.listId || a.j.listId;
            J9(a.j, d, e);
            a.oa("remoteQueueChange", c)
        },
        RCb = function(a, b) {
            b.params = b.params || {};
            PCb(a, b, "NOW_PLAYING_MAY_CHANGE");
            QCb(a, b);
            a.oa("autoplayDismissed")
        },
        QCb = function(a, b) {
            var c = parseInt(b.params.currentTime || b.params.current_time, 10);
            H9(a.j, isNaN(c) ? 0 : c);
            c = parseInt(b.params.state, 10);
            c = isNaN(c) ? -1 : c; - 1 == c && -1E3 == a.j.playerState && (c = -1E3);
            a.j.playerState = c;
            c = Number(b.params.loadedTime);
            a.j.Z = isNaN(c) ? 0 : c;
            a.j.ql(Number(b.params.duration));
            c = a.j;
            var d = Number(b.params.liveIngestionTime);
            c.C = d;
            c.B = isNaN(d) ? !1 : !0;
            c = a.j;
            d = Number(b.params.seekableStartTime);
            b = Number(b.params.seekableEndTime);
            c.D = isNaN(d) ? 0 : d;
            c.j = isNaN(b) ? 0 : b;
            1 == a.j.playerState ? LCb(a) : KCb(a);
            a.oa("remotePlayerChange")
        },
        SCb = function(a, b) {
            if (-1E3 != a.j.playerState) {
                var c =
                    1085;
                switch (parseInt(b.params.adState, 10)) {
                    case 1:
                        c = 1081;
                        break;
                    case 2:
                        c = 1084;
                        break;
                    case 0:
                        c = 1083
                }
                a.j.playerState = c;
                b = parseInt(b.params.currentTime, 10);
                H9(a.j, isNaN(b) ? 0 : b);
                a.oa("remotePlayerChange")
            }
        },
        TCb = function(a, b) {
            var c = "true" == b.params.muted;
            a.j.volume = parseInt(b.params.volume, 10);
            a.j.muted = c;
            a.oa("remotePlayerChange")
        },
        UCb = function(a, b) {
            a.N = b.params.videoId;
            a.oa("nowAutoplaying", parseInt(b.params.timeout, 10))
        },
        VCb = function(a, b) {
            a.N = b.params.videoId || null;
            a.oa("autoplayUpNext", a.N)
        },
        WCb = function(a, b) {
            a.G = b.params.autoplayMode;
            a.oa("autoplayModeChange", a.G);
            "DISABLED" == a.G && a.oa("autoplayDismissed")
        },
        XCb = function(a, b) {
            var c = "true" == b.params.hasNext;
            a.j.yp = "true" == b.params.hasPrevious;
            a.j.Qk = c;
            a.oa("previousNextChange")
        },
        FCb = function(a, b) {
            b = b.message;
            b.params ? S9("Received: action=" + b.action + ", params=" + g.Mm(b.params)) : S9("Received: action=" + b.action + " {}");
            switch (b.action) {
                case "loungeStatus":
                    b = c8(b.params.devices);
                    a.C = g.Lr(b, function(d) {
                        return new Ryb(d)
                    });
                    b = !!g.Eb(a.C, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    NCb(a, b);
                    b = a.EX("mlm");
                    a.oa("multiStateLoopEnabled", b);
                    break;
                case "loungeScreenDisconnected":
                    g.Kb(a.C, function(d) {
                        return "LOUNGE_SCREEN" == d.type
                    });
                    NCb(a, !1);
                    break;
                case "remoteConnected":
                    var c = new Ryb(c8(b.params.device));
                    g.Eb(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    }) || wyb(a.C, c);
                    break;
                case "remoteDisconnected":
                    c = new Ryb(c8(b.params.device));
                    g.Kb(a.C, function(d) {
                        return c ? d.id == c.id : !1
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    PCb(a, b, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    RCb(a, b);
                    break;
                case "onStateChange":
                    QCb(a, b);
                    break;
                case "onAdStateChange":
                    SCb(a, b);
                    break;
                case "onVolumeChanged":
                    TCb(a, b);
                    break;
                case "onSubtitlesTrackChanged":
                    OCb(a, b);
                    break;
                case "nowAutoplaying":
                    UCb(a, b);
                    break;
                case "autoplayDismissed":
                    a.oa("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    VCb(a, b);
                    break;
                case "onAutoplayModeChanged":
                    WCb(a, b);
                    break;
                case "onHasPreviousNextChanged":
                    XCb(a, b);
                    break;
                case "requestAssistedSignIn":
                    a.oa("assistedSignInRequested", b.params.authCode);
                    break;
                case "onLoopModeChanged":
                    a.oa("loopModeChange", b.params.loopMode);
                    break;
                default:
                    S9("Unrecognized action: " + b.action)
            }
        },
        MCb = function(a) {
            g.pC(a.W);
            a.W = g.nC(function() {
                a.Ty(1)
            }, 864E5)
        },
        V9 = function(a, b, c) {
            c ? S9("Sending: action=" + b + ", params=" + g.Mm(c)) : S9("Sending: action=" + b);
            a.B.sendMessage(b, c)
        },
        YCb = function(a) {
            g9.call(this, "ScreenServiceProxy");
            this.Zg = a;
            this.j = [];
            this.j.push(this.Zg.$_s("screenChange", (0, g.jb)(this.V2, this)));
            this.j.push(this.Zg.$_s("onlineScreenChange", (0, g.jb)(this.f$, this)))
        },
        cDb = function(a, b) {
            jzb();
            if (!l8 || !l8.get("yt-remote-disable-remote-module-for-dev")) {
                b = g.VB("MDX_CONFIG") || b;
                azb();
                ezb();
                W9 || (W9 = new Z8(b ? b.loungeApiHost : void 0), kzb() && (W9.j = "/api/loungedev"));
                X9 || (X9 = g.Va("yt.mdx.remote.deferredProxies_") || [], g.Ua("yt.mdx.remote.deferredProxies_", X9));
                ZCb();
                var c = Y9();
                if (!c) {
                    var d = new l9(W9, b ? b.disableAutomaticScreenCache || !1 : !1);
                    g.Ua("yt.mdx.remote.screenService_", d);
                    c = Y9();
                    var e = {};
                    b && (e = {
                        appId: b.appId,
                        disableDial: b.disableDial,
                        theme: b.theme,
                        loadCastApiSetupScript: b.loadCastApiSetupScript,
                        disableCastApi: b.disableCastApi,
                        enableDialLoungeToken: b.enableDialLoungeToken,
                        enableCastLoungeToken: b.enableCastLoungeToken,
                        forceMirroring: b.forceMirroring
                    });
                    g.Ua("yt.mdx.remote.enableConnectWithInitialState_", b ? b.enableConnectWithInitialState || !1 : !1);
                    qCb(a, d, function(f) {
                        f ? Z9() && E9(Z9(), "YouTube TV") : d.subscribe("onlineScreenChange", function() {
                            m8("yt-remote-receiver-availability-change")
                        })
                    }, e)
                }
                b && !g.Va("yt.mdx.remote.initialized_") && (g.Ua("yt.mdx.remote.initialized_", !0), $9("Initializing: " + g.Mm(b)),
                    a$.push(g.ZE("yt-remote-cast2-api-ready", function() {
                        m8("yt-remote-api-ready")
                    })), a$.push(g.ZE("yt-remote-cast2-availability-change", function() {
                        m8("yt-remote-receiver-availability-change")
                    })), a$.push(g.ZE("yt-remote-cast2-receiver-selected", function() {
                        b$(null);
                        m8("yt-remote-auto-connect", "cast-selector-receiver")
                    })), a$.push(g.ZE("yt-remote-cast2-receiver-resumed", function() {
                        m8("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), a$.push(g.ZE("yt-remote-cast2-session-change", $Cb)), a$.push(g.ZE("yt-remote-connection-change", function(f) {
                        f ? E9(Z9(), "YouTube TV") : c$() || (E9(null, null), uCb())
                    })), a$.push(g.ZE("yt-remote-cast2-session-failed", function() {
                        m8("yt-remote-connection-failed")
                    })), a = aDb(), b.isAuto && (a.id += "#dial"), e = b.capabilities || [], g.XB("desktop_enable_autoplay") &&
                    e.push("atp"), 0 < e.length && (a.capabilities = e), a.name = b.device, a.app = b.app, (b = b.theme) && (a.theme = b), $9(" -- with channel params: " + g.Mm(a)), a ? (g.jD("yt-remote-session-app", a.app), g.jD("yt-remote-session-name", a.name)) : (g.lD("yt-remote-session-app"), g.lD("yt-remote-session-name")), g.Ua("yt.mdx.remote.channelParams_", a), c.start(), Z9() || bDb())
            }
        },
        dDb = function() {
            var a = Y9().Zg.$_gos();
            var b = d$();
            b && e$() && ($yb(a, b) || a.push(b));
            return Zyb(a)
        },
        fDb = function() {
            var a = eDb();
            !a && C9() && tCb() && (a = {
                key: "cast-selector-receiver",
                name: tCb()
            });
            return a
        },
        eDb = function() {
            var a = dDb(),
                b = d$();
            b || (b = c$());
            return g.Eb(a, function(c) {
                return b && f8(b, c.key) ? !0 : !1
            })
        },
        d$ = function() {
            var a = Z9();
            if (!a) return null;
            var b = Y9().Nk();
            return h8(b, a)
        },
        $Cb = function(a) {
            $9("remote.onCastSessionChange_: " + g8(a));
            if (a) {
                var b = d$();
                if (b && b.id == a.id) {
                    if (E9(b.id, "YouTube TV"), "shortLived" == a.idType && (a = a.token)) f$ && (f$.token = a), (b = e$()) && b.xr(a)
                } else b && g$(), h$(a, 1)
            } else e$() && g$()
        },
        g$ = function() {
            D9() ? B9().stopSession() : A9("stopSession called before API ready.");
            var a = e$();
            a && (a.disconnect(1), gDb(null))
        },
        hDb = function() {
            var a = e$();
            return !!a && 3 != a.getProxyState()
        },
        $9 = function(a) {
            b9("remote", a)
        },
        Y9 = function() {
            if (!iDb) {
                var a = g.Va("yt.mdx.remote.screenService_");
                iDb = a ? new YCb(a) : null
            }
            return iDb
        },
        Z9 = function() {
            return g.Va("yt.mdx.remote.currentScreenId_")
        },
        jDb = function(a) {
            g.Ua("yt.mdx.remote.currentScreenId_", a)
        },
        kDb = function() {
            return g.Va("yt.mdx.remote.connectData_")
        },
        b$ = function(a) {
            g.Ua("yt.mdx.remote.connectData_", a)
        },
        e$ = function() {
            return g.Va("yt.mdx.remote.connection_")
        },
        gDb = function(a) {
            var b = e$();
            b$(null);
            a || jDb("");
            g.Ua("yt.mdx.remote.connection_", a);
            X9 && (g.bc(X9, function(c) {
                c(a)
            }), X9.length = 0);
            b && !a ? m8("yt-remote-connection-change", !1) : !b && a && m8("yt-remote-connection-change", !0)
        },
        c$ = function() {
            var a = g.mD();
            if (!a) return null;
            var b = Y9();
            if (!b) return null;
            b = b.Nk();
            return h8(b, a)
        },
        h$ = function(a, b) {
            Z9();
            d$() && d$();
            if (i$) f$ = a;
            else {
                jDb(a.id);
                var c = g.Va("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                a = new U9(W9, a, aDb(), c);
                a.connect(b, kDb());
                a.subscribe("beforeDisconnect", function(d) {
                    m8("yt-remote-before-disconnect", d)
                });
                a.subscribe("beforeDispose", function() {
                    e$() && (e$(), gDb(null))
                });
                a.subscribe("browserChannelAuthError", function() {
                    var d = d$();
                    d && "shortLived" == d.idType && (D9() ? B9().handleBrowserChannelAuthError() : A9("refreshLoungeToken called before API ready."))
                });
                gDb(a)
            }
        },
        bDb = function() {
            var a = c$();
            a ? ($9("Resume connection to: " + g8(a)), h$(a, 0)) : (k8(), uCb(), $9("Skipping connecting because no session screen found."))
        },
        ZCb = function() {
            var a = aDb();
            if (g.nd(a)) {
                a = j8();
                var b = g.kD("yt-remote-session-name") || "",
                    c = g.kD("yt-remote-session-app") || "";
                a = {
                    device: "REMOTE_CONTROL",
                    id: a,
                    name: b,
                    app: c,
                    mdxVersion: 3
                };
                a.authuser = String(g.VB("SESSION_INDEX", "0"));
                (b = g.VB("DELEGATED_SESSION_ID")) && (a.pageId = String(b));
                g.Ua("yt.mdx.remote.channelParams_", a)
            }
        },
        aDb = function() {
            return g.Va("yt.mdx.remote.channelParams_") || {}
        },
        nDb = function(a, b, c) {
            g.I.call(this);
            var d = this;
            this.module = a;
            this.J = b;
            this.Fc = c;
            this.events = new g.hL(this);
            this.W = this.events.T(this.J, "onVolumeChange", function(e) {
                lDb(d, e)
            });
            this.D = !1;
            this.G = new g.UL(64);
            this.j = new g.cv(this.E_, 500, this);
            this.B = new g.cv(this.F_, 1E3, this);
            this.N = new p8(this.Tca, 0, this);
            this.C = {};
            this.Z = new g.cv(this.x0, 1E3, this);
            this.K = new q8(this.seekTo, 1E3, this);
            g.M(this, this.events);
            this.events.T(b, "onCaptionsTrackListChanged", this.Q9);
            this.events.T(b, "captionschanged", this.m9);
            this.events.T(b, "captionssettingschanged", this.N_);
            this.events.T(b, "videoplayerreset", this.AJ);
            this.events.T(b, "mdxautoplaycancel", function() {
                d.Fc.NV()
            });
            b.L("enable_mdx_video_play_directly") && this.events.T(b, "videodatachange", function() {
                mDb(d.module) || j$(d) || k$(d, 0)
            });
            a = this.Fc;
            a.isDisposed();
            a.subscribe("proxyStateChange", this.fZ, this);
            a.subscribe("remotePlayerChange", this.xE, this);
            a.subscribe("remoteQueueChange", this.AJ, this);
            a.subscribe("previousNextChange", this.cZ, this);
            a.subscribe("nowAutoplaying", this.XY, this);
            a.subscribe("autoplayDismissed", this.CY, this);
            g.M(this, this.j);
            g.M(this, this.B);
            g.M(this, this.N);
            g.M(this, this.Z);
            g.M(this, this.K);
            this.N_();
            this.AJ();
            this.xE()
        },
        lDb = function(a, b) {
            if (j$(a)) {
                a.Fc.unsubscribe("remotePlayerChange", a.xE, a);
                var c = Math.round(b.volume);
                b = !!b.muted;
                var d = M9(a.Fc);
                if (c !== d.volume || b !== d.muted) a.Fc.setVolume(c, b), a.Z.start();
                a.Fc.subscribe("remotePlayerChange", a.xE, a)
            }
        },
        oDb = function(a) {
            a.Mc(0);
            a.j.stop();
            a.Cc(new g.UL(64))
        },
        pDb = function(a, b) {
            if (j$(a) && !a.D) {
                var c = null;
                b && (c = {
                    style: a.J.getSubtitlesUserSettings()
                }, g.sd(c, b));
                a.Fc.pT(a.J.getVideoData(1).videoId, c);
                a.C = M9(a.Fc).trackData
            }
        },
        k$ = function(a, b) {
            var c = a.J.getPlaylist();
            if (null == c ? 0 : c.listId) {
                var d = c.index;
                var e = c.listId.toString()
            }
            c = a.J.getVideoData(1);
            a.Fc.playVideo(c.videoId, b, d, e, c.playerParams, c.Ba, vyb(c));
            a.Cc(new g.UL(1))
        },
        qDb = function(a, b) {
            if (b) {
                var c = a.J.getOption("captions", "tracklist", {
                    sX: 1
                });
                c && c.length ? (a.J.setOption("captions", "track", b), a.D = !1) : (a.J.loadModule("captions"), a.D = !0)
            } else a.J.setOption("captions", "track", {})
        },
        j$ = function(a) {
            return M9(a.Fc).videoId === a.J.getVideoData(1).videoId
        },
        l$ = function() {
            g.V.call(this, {
                I: "div",
                S: "ytp-mdx-popup-dialog",
                Y: {
                    role: "dialog"
                },
                V: [{
                    I: "div",
                    S: "ytp-mdx-popup-dialog-inner-content",
                    V: [{
                        I: "div",
                        S: "ytp-mdx-popup-title",
                        ya: "You're signed out"
                    }, {
                        I: "div",
                        S: "ytp-mdx-popup-description",
                        ya: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        I: "div",
                        S: "ytp-mdx-privacy-popup-buttons",
                        V: [{
                            I: "button",
                            Ma: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            ya: "Cancel"
                        }, {
                            I: "button",
                            Ma: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            ya: "Confirm"
                        }]
                    }]
                }]
            });
            this.j = new g.dH(this, 250);
            this.cancelButton = this.Ha("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.Ha("ytp-mdx-privacy-popup-confirm");
            g.M(this, this.j);
            this.T(this.cancelButton, "click", this.B);
            this.T(this.confirmButton, "click", this.C)
        },
        m$ = function(a) {
            g.V.call(this, {
                I: "div",
                S: "ytp-remote",
                V: [{
                    I: "div",
                    S: "ytp-remote-display-status",
                    V: [{
                        I: "div",
                        S: "ytp-remote-display-status-icon",
                        V: [g.Ova()]
                    }, {
                        I: "div",
                        S: "ytp-remote-display-status-text",
                        ya: "{{statustext}}"
                    }]
                }]
            });
            this.api = a;
            this.j = new g.dH(this, 250);
            g.M(this, this.j);
            this.T(a, "presentingplayerstatechange", this.onStateChange);
            this.Dc(a.Ub())
        },
        n$ = function(a, b) {
            g.SX.call(this, "Play on", 1, a, b);
            this.J = a;
            this.Ot = {};
            this.T(a, "onMdxReceiversChange", this.D);
            this.T(a, "presentingplayerstatechange", this.D);
            this.D()
        },
        rDb = function(a) {
            g.YV.call(this, a);
            this.Fp = {
                key: Yyb(),
                name: "This computer"
            };
            this.Ml = null;
            this.subscriptions = [];
            this.EQ = this.Fc = null;
            this.Ot = [this.Fp];
            this.ws = this.Fp;
            this.Fe = new g.UL(64);
            this.QX = 0;
            this.Ph = -1;
            this.PE = !1;
            this.NE = this.IA = null;
            if (!g.wS(this.player.U()) && !g.BH(this.player.U())) {
                a = this.player;
                var b = g.yU(a);
                b && (b = b.tp()) && (b = new n$(a, b), g.M(this, b));
                b = new m$(a);
                g.M(this, b);
                g.KU(a, b.element, 4);
                this.IA = new l$;
                g.M(this, this.IA);
                g.KU(a, this.IA.element, 4);
                this.PE = !!c$()
            }
        },
        o$ = function(a) {
            a.NE && (a.player.removeEventListener("presentingplayerstatechange",
                a.NE), a.NE = null)
        },
        sDb = function(a, b, c) {
            a.Fe = c;
            a.player.oa("presentingplayerstatechange", new g.jH(c, b))
        },
        p$ = function(a, b) {
            if (b.key !== a.ws.key)
                if (b.key === a.Fp.key) g$();
                else if (mDb(a) && tDb(a), a.ws = b, !a.player.U().L("disable_mdx_connection_in_mdx_module_for_music_web") || !g.BH(a.player.U())) {
                var c = a.player.getPlaylistId();
                var d = a.player.getVideoData(1);
                var e = d.videoId;
                if (!c && !e || (2 === a.player.getAppState() || 1 === a.player.getAppState()) && a.player.U().L("should_clear_video_data_on_player_cued_unstarted")) d = null;
                else {
                    var f = a.player.getPlaylist();
                    if (f) {
                        var h = [];
                        for (var l = 0; l < f.getLength(); l++) h[l] = g.VV(f, l).videoId
                    } else h = [e];
                    f = a.player.getCurrentTime(1);
                    a = {
                        videoIds: h,
                        listId: c,
                        videoId: e,
                        playerParams: d.playerParams,
                        clickTrackingParams: d.Ba,
                        index: Math.max(a.player.getPlaylistIndex(), 0),
                        currentTime: 0 === f ? void 0 : f
                    };
                    (d = vyb(d)) && (a.locationInfo = d);
                    d = a
                }
                $9("Connecting to: " + g.Mm(b));
                "cast-selector-receiver" == b.key ? (b$(d || null), b = d || null, D9() ? B9().setLaunchParams(b) : A9("setLaunchParams called before ready.")) : !d && hDb() && Z9() == b.key ? m8("yt-remote-connection-change", !0) : (g$(), b$(d || null), d = Y9().Nk(), (b = h8(d, b.key)) && h$(b, 1))
            }
        },
        mDb = function(a) {
            var b = a.player.U();
            return !b.L("mdx_enable_privacy_disclosure_ui") || a.isLoggedIn() || a.PE || !a.IA ? !1 : g.FS(b) || g.HS(b)
        },
        tDb = function(a) {
            a.player.Ub().isPlaying() ? a.player.pauseVideo() : (a.NE = function(b) {
                !a.PE && g.mH(b, 8) && (a.player.pauseVideo(), o$(a))
            }, a.player.addEventListener("presentingplayerstatechange", a.NE));
            a.IA && a.IA.qd();
            e$() || (i$ = !0)
        };
    g.Ry.prototype.Js = g.ea(0, function() {
        return g.Oj(this, 6)
    });
    var CAb = {
            "\x00": "\\0",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\v": "\\x0B",
            '"': '\\"',
            "\\": "\\\\",
            "<": "\\u003C"
        },
        R8 = {
            "'": "\\'"
        },
        Syb = {
            roa: "atp",
            e5a: "ska",
            z1a: "que",
            MTa: "mus",
            d5a: "sus",
            WEa: "dsp",
            n3a: "seq",
            oSa: "mic",
            Sva: "dpa",
            Mpa: "cds",
            CTa: "mlm",
            Gva: "dsdtr",
            mUa: "ntb",
            Ngb: "vsp",
            Hwa: "scn",
            N1a: "rpe",
            Dva: "dcn",
            Eva: "dcp",
            bZa: "pas",
            Fva: "drq"
        },
        Tyb = {
            x4: "u",
            CLASSIC: "cl",
            e4: "k",
            E1: "i",
            j1: "cr",
            m4: "m",
            B1: "g",
            AU: "up"
        },
        dzb = "",
        l8 = null;
    lzb.prototype.flush = function(a, b) {
        a = void 0 === a ? [] : a;
        b = void 0 === b ? !1 : b;
        if (g.XB("enable_client_streamz_web")) {
            a = g.u(a);
            for (var c = a.next(); !c.done; c = a.next()) c = g.Nea(c.value), c = {
                serializedIncrementBatch: g.tg(c.j())
            }, g.DD("streamzIncremented", c, {
                sendIsolatedPayload: b
            })
        }
    };
    var n8, tzb = nzb("loadCastFramework") || nzb("loadCastApplicationFramework"),
        wzb = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.pb(p8, g.I);
    g.k = p8.prototype;
    g.k.q2 = function(a) {
        this.D = arguments;
        this.j = !1;
        this.jd ? this.C = g.ob() + this.Zi : this.jd = g.fg(this.G, this.Zi)
    };
    g.k.stop = function() {
        this.jd && (g.Sa.clearTimeout(this.jd), this.jd = null);
        this.C = null;
        this.j = !1;
        this.D = []
    };
    g.k.pause = function() {
        ++this.B
    };
    g.k.resume = function() {
        this.B && (--this.B, !this.B && this.j && (this.j = !1, this.K.apply(null, this.D)))
    };
    g.k.xa = function() {
        this.stop();
        p8.Lf.xa.call(this)
    };
    g.k.s2 = function() {
        this.jd && (g.Sa.clearTimeout(this.jd), this.jd = null);
        this.C ? (this.jd = g.fg(this.G, this.C - g.ob()), this.C = null) : this.B ? this.j = !0 : (this.j = !1, this.K.apply(null, this.D))
    };
    g.w(q8, g.I);
    g.k = q8.prototype;
    g.k.uL = function(a) {
        this.C = arguments;
        this.jd || this.B ? this.j = !0 : yzb(this)
    };
    g.k.stop = function() {
        this.jd && (g.Sa.clearTimeout(this.jd), this.jd = null, this.j = !1, this.C = null)
    };
    g.k.pause = function() {
        this.B++
    };
    g.k.resume = function() {
        this.B--;
        this.B || !this.j || this.jd || (this.j = !1, yzb(this))
    };
    g.k.xa = function() {
        g.I.prototype.xa.call(this);
        this.stop()
    };
    r8.prototype.stringify = function(a) {
        return g.Sa.JSON.stringify(a, void 0)
    };
    r8.prototype.parse = function(a) {
        return g.Sa.JSON.parse(a, void 0)
    };
    g.pb(zzb, g.Bb);
    g.pb(Azb, g.Bb);
    var Bzb = null;
    g.pb(Dzb, g.Bb);
    g.pb(Ezb, g.Bb);
    g.pb(Fzb, g.Bb);
    v8.prototype.debug = function() {};
    v8.prototype.info = function() {};
    v8.prototype.warning = function() {};
    var Nzb = {},
        Mzb = {};
    g.k = w8.prototype;
    g.k.setTimeout = function(a) {
        this.ub = a
    };
    g.k.w2 = function(a) {
        a = a.target;
        var b = this.Xa;
        b && 3 == g.Ln(a) ? b.uL() : this.SS(a)
    };
    g.k.SS = function(a) {
        try {
            if (a == this.j) a: {
                var b = g.Ln(this.j),
                    c = this.j.B,
                    d = this.j.getStatus();
                if (!(3 > b) && (3 != b || g.IS || this.j && (this.B.B || g.Nn(this.j) || g.On(this.j)))) {
                    this.Ka || 4 != b || 7 == c || (8 == c || 0 >= d ? s8(3) : s8(2));
                    A8(this);
                    var e = this.j.getStatus();
                    this.Db = e;
                    b: if (Kzb(this)) {
                        var f = g.On(this.j);
                        a = "";
                        var h = f.length,
                            l = 4 == g.Ln(this.j);
                        if (!this.B.C) {
                            if ("undefined" === typeof TextDecoder) {
                                y8(this);
                                z8(this);
                                var m = "";
                                break b
                            }
                            this.B.C = new g.Sa.TextDecoder
                        }
                        for (c = 0; c < h; c++) this.B.B = !0, a += this.B.C.decode(f[c], {
                            stream: l &&
                                c == h - 1
                        });
                        f.length = 0;
                        this.B.j += a;
                        this.K = 0;
                        m = this.B.j
                    } else m = g.Nn(this.j);
                    if (this.C = 200 == e) {
                        if (this.Rb && !this.Ua) {
                            b: {
                                if (this.j) {
                                    var n = g.Pn(this.j, "X-HTTP-Initial-Response");
                                    if (n && !g.fc(n)) {
                                        var p = n;
                                        break b
                                    }
                                }
                                p = null
                            }
                            if (e = p) this.Ua = !0,
                            Ozb(this, e);
                            else {
                                this.C = !1;
                                this.N = 3;
                                t8(12);
                                y8(this);
                                z8(this);
                                break a
                            }
                        }
                        this.Ga ? (Pzb(this, b, m), g.IS && this.C && 3 == b && (this.bb.Ra(this.jb, "tick", this.v2), this.jb.start())) : Ozb(this, m);
                        4 == b && y8(this);
                        this.C && !this.Ka && (4 == b ? Rzb(this.G, this) : (this.C = !1, x8(this)))
                    } else g.Cfa(this.j),
                        400 == e && 0 < m.indexOf("Unknown SID") ? (this.N = 3, t8(12)) : (this.N = 0, t8(13)), y8(this), z8(this)
                }
            }
        } catch (q) {} finally {}
    };
    g.k.v2 = function() {
        if (this.j) {
            var a = g.Ln(this.j),
                b = g.Nn(this.j);
            this.K < b.length && (A8(this), Pzb(this, a, b), this.C && 4 != a && x8(this))
        }
    };
    g.k.cancel = function() {
        this.Ka = !0;
        y8(this)
    };
    g.k.t2 = function() {
        this.ma = null;
        var a = Date.now();
        0 <= a - this.Jb ? (2 != this.Ta && (s8(3), t8(17)), y8(this), this.N = 2, z8(this)) : Qzb(this, this.Jb - a)
    };
    g.k.getLastError = function() {
        return this.N
    };
    g.k.jO = function() {
        return this.j
    };
    $zb.prototype.cancel = function() {
        this.C = bAb(this);
        if (this.B) this.B.cancel(), this.B = null;
        else if (this.j && 0 !== this.j.size) {
            for (var a = g.u(this.j.values()), b = a.next(); !b.done; b = a.next()) b.value.cancel();
            this.j.clear()
        }
    };
    g.k = fAb.prototype;
    g.k.US = 8;
    g.k.Dh = 1;
    g.k.connect = function(a, b, c, d) {
        t8(0);
        this.ac = a;
        this.Ka = b || {};
        c && void 0 !== d && (this.Ka.OSID = c, this.Ka.OAID = d);
        this.Ua = this.Jc;
        this.Na = Wzb(this, null, this.ac);
        E8(this)
    };
    g.k.disconnect = function() {
        hAb(this);
        if (3 == this.Dh) {
            var a = this.Za++,
                b = this.Na.clone();
            g.Hp(b, "SID", this.D);
            g.Hp(b, "RID", a);
            g.Hp(b, "TYPE", "terminate");
            H8(this, b);
            a = new w8(this, this.D, a);
            a.Ta = 2;
            a.Z = a8(b.clone());
            b = !1;
            if (g.Sa.navigator && g.Sa.navigator.sendBeacon) try {
                b = g.Sa.navigator.sendBeacon(a.Z.toString(), "")
            } catch (c) {}!b && g.Sa.Image && ((new Image).src = a.Z, b = !0);
            b || (a.j = Jzb(a.G, null), a.j.send(a.Z));
            a.Ba = Date.now();
            x8(a)
        }
        nAb(this)
    };
    g.k.Og = function() {
        return 0 == this.Dh
    };
    g.k.getState = function() {
        return this.Dh
    };
    g.k.WS = function(a) {
        if (this.K)
            if (this.K = null, 1 == this.Dh) {
                if (!a) {
                    this.Za = Math.floor(1E5 * Math.random());
                    a = this.Za++;
                    var b = new w8(this, "", a),
                        c = this.W;
                    this.Jb && (c ? (c = g.qd(c), g.sd(c, this.Jb)) : c = this.Jb);
                    null !== this.N || this.qb || (b.Na = c, c = null);
                    var d;
                    if (this.ub) a: {
                        for (var e = d = 0; e < this.C.length; e++) {
                            b: {
                                var f = this.C[e];
                                if ("__data__" in f.map && (f = f.map.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b
                                }
                                f = void 0
                            }
                            if (void 0 === f) break;d += f;
                            if (4096 < d) {
                                d = e;
                                break a
                            }
                            if (4096 === d || e === this.C.length - 1) {
                                d = e + 1;
                                break a
                            }
                        }
                        d =
                        1E3
                    }
                    else d = 1E3;
                    d = kAb(this, b, d);
                    e = this.Na.clone();
                    g.Hp(e, "RID", a);
                    g.Hp(e, "CVER", 22);
                    this.Ga && g.Hp(e, "X-HTTP-Session-Id", this.Ga);
                    H8(this, e);
                    c && (this.qb ? d = "headers=" + g.Ke(g.Dga(c)) + "&" + d : this.N && g.Lp(e, this.N, c));
                    Vzb(this.B, b);
                    this.Qf && g.Hp(e, "TYPE", "init");
                    this.ub ? (g.Hp(e, "$req", d), g.Hp(e, "SID", "null"), b.Rb = !0, Izb(b, e, null)) : Izb(b, e, d);
                    this.Dh = 2
                }
            } else 3 == this.Dh && (a ? lAb(this, a) : 0 == this.C.length || aAb(this.B) || lAb(this))
    };
    g.k.VS = function() {
        this.Z = null;
        mAb(this);
        if (this.Nc && !(this.jb || null == this.j || 0 >= this.Rd)) {
            var a = 2 * this.Rd;
            this.Ea = u8((0, g.jb)(this.l9, this), a)
        }
    };
    g.k.l9 = function() {
        this.Ea && (this.Ea = null, this.Ua = !1, this.jb = !0, t8(10), C8(this), mAb(this))
    };
    g.k.SP = function(a) {
        this.j == a && this.Nc && !this.jb && (gAb(this), this.jb = !0, t8(11))
    };
    g.k.z2 = function() {
        null != this.ma && (this.ma = null, C8(this), Tzb(this), t8(19))
    };
    g.k.wca = function(a) {
        a ? t8(2) : t8(1)
    };
    g.k.isActive = function() {
        return !!this.G && this.G.isActive(this)
    };
    g.k = pAb.prototype;
    g.k.aT = function() {};
    g.k.ZS = function() {};
    g.k.YS = function() {};
    g.k.XS = function() {};
    g.k.isActive = function() {
        return !0
    };
    g.k.A2 = function() {};
    g.pb(J8, g.Md);
    J8.prototype.open = function() {
        this.j.G = this.C;
        this.K && (this.j.Ta = !0);
        this.j.connect(this.G, this.B || void 0)
    };
    J8.prototype.close = function() {
        this.j.disconnect()
    };
    J8.prototype.send = function(a) {
        var b = this.j;
        if ("string" === typeof a) {
            var c = {};
            c.__data__ = a;
            a = c
        } else this.D && (c = {}, c.__data__ = g.Mm(a), a = c);
        b.C.push(new Zzb(b.Of++, a));
        3 == b.Dh && E8(b)
    };
    J8.prototype.xa = function() {
        this.j.G = null;
        delete this.C;
        this.j.disconnect();
        delete this.j;
        J8.Lf.xa.call(this)
    };
    g.pb(rAb, zzb);
    g.pb(sAb, Azb);
    g.pb(I8, pAb);
    I8.prototype.aT = function() {
        this.j.dispatchEvent("m")
    };
    I8.prototype.ZS = function(a) {
        this.j.dispatchEvent(new rAb(a))
    };
    I8.prototype.YS = function(a) {
        this.j.dispatchEvent(new sAb(a))
    };
    I8.prototype.XS = function() {
        this.j.dispatchEvent("n")
    };
    var L8 = new g.Md;
    g.w(vAb, g.Bb);
    g.k = N8.prototype;
    g.k.Du = null;
    g.k.eq = !1;
    g.k.Gx = null;
    g.k.wL = null;
    g.k.Ex = null;
    g.k.Fx = null;
    g.k.Mr = null;
    g.k.Or = null;
    g.k.Eu = null;
    g.k.lj = null;
    g.k.nG = 0;
    g.k.oo = null;
    g.k.mG = null;
    g.k.Nr = null;
    g.k.KB = -1;
    g.k.m_ = !0;
    g.k.Cu = !1;
    g.k.vL = 0;
    g.k.lG = null;
    var AAb = {},
        zAb = {};
    g.k = N8.prototype;
    g.k.setTimeout = function(a) {
        this.B = a
    };
    g.k.C2 = function(a) {
        a = a.target;
        var b = this.lG;
        b && 3 == g.Ln(a) ? b.uL() : this.bT(a)
    };
    g.k.bT = function(a) {
        try {
            if (a == this.lj) a: {
                var b = g.Ln(this.lj),
                    c = this.lj.B,
                    d = this.lj.getStatus();
                if (g.mf && !g.Uc(10) || g.Vc && !g.Sc("420+")) {
                    if (4 > b) break a
                } else if (3 > b || 3 == b && !g.Nn(this.lj)) break a;this.Cu || 4 != b || 7 == c || (8 == c || 0 >= d ? this.j.Kn(3) : this.j.Kn(2));FAb(this);
                var e = this.lj.getStatus();this.KB = e;
                var f = g.Nn(this.lj);
                if (this.eq = 200 == e) {
                    4 == b && P8(this);
                    if (this.Ga) {
                        for (a = !0; !this.Cu && this.nG < f.length;) {
                            var h = BAb(this, f);
                            if (h == zAb) {
                                4 == b && (this.Nr = 4, M8(15), a = !1);
                                break
                            } else if (h == AAb) {
                                this.Nr = 4;
                                M8(16);
                                a = !1;
                                break
                            } else GAb(this, h)
                        }
                        4 == b && 0 == f.length && (this.Nr = 1, M8(17), a = !1);
                        this.eq = this.eq && a;
                        a || (P8(this), Q8(this))
                    } else GAb(this, f);
                    this.eq && !this.Cu && (4 == b ? this.j.oG(this) : (this.eq = !1, O8(this)))
                } else 400 == e && 0 < f.indexOf("Unknown SID") ? (this.Nr = 3, M8(13)) : (this.Nr = 0, M8(14)),
                P8(this),
                Q8(this)
            }
        } catch (l) {} finally {}
    };
    g.k.yaa = function(a) {
        K8((0, g.jb)(this.xaa, this, a), 0)
    };
    g.k.xaa = function(a) {
        this.Cu || (FAb(this), GAb(this, a), O8(this))
    };
    g.k.kZ = function(a) {
        K8((0, g.jb)(this.waa, this, a), 0)
    };
    g.k.waa = function(a) {
        this.Cu || (P8(this), this.eq = a, this.j.oG(this), this.j.Kn(4))
    };
    g.k.cancel = function() {
        this.Cu = !0;
        P8(this)
    };
    g.k.B2 = function() {
        this.Gx = null;
        var a = Date.now();
        0 <= a - this.wL ? (2 != this.Fx && this.j.Kn(3), P8(this), this.Nr = 2, M8(18), Q8(this)) : EAb(this, this.wL - a)
    };
    g.k.getLastError = function() {
        return this.Nr
    };
    g.k = JAb.prototype;
    g.k.yL = null;
    g.k.Mj = null;
    g.k.XJ = !1;
    g.k.G_ = null;
    g.k.CH = null;
    g.k.eP = null;
    g.k.zL = null;
    g.k.Kl = null;
    g.k.fq = -1;
    g.k.LB = null;
    g.k.zC = null;
    g.k.connect = function(a) {
        this.zL = a;
        a = T8(this.j, null, this.zL);
        M8(3);
        this.G_ = Date.now();
        var b = this.j.W;
        null != b ? (this.LB = b[0], (this.zC = b[1]) ? (this.Kl = 1, KAb(this)) : (this.Kl = 2, LAb(this))) : (b8(a, "MODE", "init"), this.Mj = new N8(this), this.Mj.Du = this.yL, yAb(this.Mj, a, !1, null, !0), this.Kl = 0)
    };
    g.k.l5 = function(a) {
        if (a) this.Kl = 2, LAb(this);
        else {
            M8(4);
            var b = this.j;
            b.Do = b.ls.fq;
            X8(b, 9)
        }
        a && this.Kn(2)
    };
    g.k.xL = function(a) {
        return this.j.xL(a)
    };
    g.k.abort = function() {
        this.Mj && (this.Mj.cancel(), this.Mj = null);
        this.fq = -1
    };
    g.k.Og = function() {
        return !1
    };
    g.k.cT = function(a, b) {
        this.fq = a.KB;
        if (0 == this.Kl)
            if (b) {
                try {
                    var c = this.B.parse(b)
                } catch (d) {
                    a = this.j;
                    a.Do = this.fq;
                    X8(a, 2);
                    return
                }
                this.LB = c[0];
                this.zC = c[1]
            } else a = this.j, a.Do = this.fq, X8(a, 2);
        else if (2 == this.Kl)
            if (this.XJ) M8(7), this.eP = Date.now();
            else if ("11111" == b) {
            if (M8(6), this.XJ = !0, this.CH = Date.now(), a = this.CH - this.G_, !g.mf || g.Uc(10) || 500 > a) this.fq = 200, this.Mj.cancel(), M8(12), U8(this.j, this, !0)
        } else M8(8), this.CH = this.eP = Date.now(), this.XJ = !1
    };
    g.k.oG = function() {
        this.fq = this.Mj.KB;
        if (this.Mj.eq) 0 == this.Kl ? this.zC ? (this.Kl = 1, KAb(this)) : (this.Kl = 2, LAb(this)) : 2 == this.Kl && ((!g.mf || g.Uc(10) ? !this.XJ : 200 > this.eP - this.CH) ? (M8(11), U8(this.j, this, !1)) : (M8(12), U8(this.j, this, !0)));
        else {
            0 == this.Kl ? M8(9) : 2 == this.Kl && M8(10);
            var a = this.j;
            this.Mj.getLastError();
            a.Do = this.fq;
            X8(a, 2)
        }
    };
    g.k.MB = function() {
        return this.j.MB()
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.Kn = function(a) {
        this.j.Kn(a)
    };
    g.k = MAb.prototype;
    g.k.Co = null;
    g.k.NB = null;
    g.k.Xj = null;
    g.k.Jg = null;
    g.k.AL = null;
    g.k.pG = null;
    g.k.dT = null;
    g.k.qG = null;
    g.k.OB = 0;
    g.k.E2 = 0;
    g.k.Oi = null;
    g.k.Pr = null;
    g.k.gq = null;
    g.k.Gu = null;
    g.k.ls = null;
    g.k.UK = null;
    g.k.Jx = -1;
    g.k.eT = -1;
    g.k.Do = -1;
    g.k.Ix = 0;
    g.k.Hx = 0;
    g.k.Fu = 8;
    g.pb(OAb, g.Bb);
    g.pb(PAb, g.Bb);
    g.k = MAb.prototype;
    g.k.connect = function(a, b, c, d, e) {
        M8(0);
        this.AL = b;
        this.NB = c || {};
        d && void 0 !== e && (this.NB.OSID = d, this.NB.OAID = e);
        this.Z ? (K8((0, g.jb)(this.xV, this, a), 100), RAb(this)) : this.xV(a)
    };
    g.k.disconnect = function() {
        SAb(this);
        if (3 == this.j) {
            var a = this.OB++,
                b = this.pG.clone();
            g.Hp(b, "SID", this.D);
            g.Hp(b, "RID", a);
            g.Hp(b, "TYPE", "terminate");
            W8(this, b);
            a = new N8(this, this.D, a);
            a.Fx = 2;
            a.Mr = a8(b.clone());
            (new Image).src = a.Mr.toString();
            a.Ex = Date.now();
            O8(a)
        }
        bBb(this)
    };
    g.k.xV = function(a) {
        this.ls = new JAb(this);
        this.ls.yL = this.Co;
        this.ls.B = this.G;
        this.ls.connect(a)
    };
    g.k.Og = function() {
        return 0 == this.j
    };
    g.k.getState = function() {
        return this.j
    };
    g.k.gT = function(a) {
        this.Pr = null;
        XAb(this, a)
    };
    g.k.fT = function() {
        this.gq = null;
        this.Jg = new N8(this, this.D, "rpc", this.N);
        this.Jg.Du = this.Co;
        this.Jg.vL = 0;
        var a = this.dT.clone();
        g.Hp(a, "RID", "rpc");
        g.Hp(a, "SID", this.D);
        g.Hp(a, "CI", this.UK ? "0" : "1");
        g.Hp(a, "AID", this.Jx);
        W8(this, a);
        if (!g.mf || g.Uc(10)) g.Hp(a, "TYPE", "xmlhttp"), yAb(this.Jg, a, !0, this.qG, !1);
        else {
            g.Hp(a, "TYPE", "html");
            var b = this.Jg,
                c = !!this.qG;
            b.Fx = 3;
            b.Mr = a8(a.clone());
            DAb(b, c)
        }
    };
    g.k.cT = function(a, b) {
        if (0 != this.j && (this.Jg == a || this.Xj == a))
            if (this.Do = a.KB, this.Xj == a && 3 == this.j)
                if (7 < this.Fu) {
                    try {
                        var c = this.G.parse(b)
                    } catch (d) {
                        c = null
                    }
                    if (Array.isArray(c) && 3 == c.length)
                        if (a = c, 0 == a[0]) a: {
                            if (!this.gq) {
                                if (this.Jg)
                                    if (this.Jg.Ex + 3E3 < this.Xj.Ex) V8(this), this.Jg.cancel(), this.Jg = null;
                                    else break a;
                                $Ab(this);
                                M8(19)
                            }
                        }
                    else this.eT = a[1], 0 < this.eT - this.Jx && 37500 > a[2] && this.UK && 0 == this.Hx && !this.Gu && (this.Gu = K8((0, g.jb)(this.F2, this), 6E3));
                    else X8(this, 11)
                } else null != b && X8(this, 11);
        else if (this.Jg ==
            a && V8(this), !g.fc(b))
            for (a = this.G.parse(b), b = 0; b < a.length; b++) c = a[b], this.Jx = c[0], c = c[1], 2 == this.j ? "c" == c[0] ? (this.D = c[1], this.qG = c[2], c = c[3], null != c ? this.Fu = c : this.Fu = 6, this.j = 3, this.Oi && this.Oi.jT(), this.dT = T8(this, this.MB() ? this.qG : null, this.AL), YAb(this)) : "stop" == c[0] && X8(this, 7) : 3 == this.j && ("stop" == c[0] ? X8(this, 7) : "noop" != c[0] && this.Oi && this.Oi.iT(c), this.Hx = 0)
    };
    g.k.F2 = function() {
        null != this.Gu && (this.Gu = null, this.Jg.cancel(), this.Jg = null, $Ab(this), M8(20))
    };
    g.k.oG = function(a) {
        if (this.Jg == a) {
            V8(this);
            this.Jg = null;
            var b = 2
        } else if (this.Xj == a) this.Xj = null, b = 1;
        else return;
        this.Do = a.KB;
        if (0 != this.j)
            if (a.eq)
                if (1 == b) {
                    b = a.Eu ? a.Eu.length : 0;
                    a = Date.now() - a.Ex;
                    var c = L8;
                    c.dispatchEvent(new OAb(c, b, a, this.Ix));
                    QAb(this);
                    this.C.length = 0
                } else YAb(this);
        else {
            c = a.getLastError();
            var d;
            if (!(d = 3 == c || 7 == c || 0 == c && 0 < this.Do)) {
                if (d = 1 == b) this.Xj || this.Pr || 1 == this.j || 2 <= this.Ix ? d = !1 : (this.Pr = K8((0, g.jb)(this.gT, this, a), ZAb(this, this.Ix)), this.Ix++, d = !0);
                d = !(d || 2 == b && $Ab(this))
            }
            if (d) switch (c) {
                case 1:
                    X8(this,
                        5);
                    break;
                case 4:
                    X8(this, 10);
                    break;
                case 3:
                    X8(this, 6);
                    break;
                case 7:
                    X8(this, 12);
                    break;
                default:
                    X8(this, 2)
            }
        }
    };
    g.k.D2 = function(a) {
        if (!g.Hb(arguments, this.j)) throw Error("Unexpected channel state: " + this.j);
    };
    g.k.vca = function(a) {
        a ? M8(2) : (M8(1), aBb(this, 8))
    };
    g.k.xL = function(a) {
        if (a) throw Error("Can't create secondary domain capable XhrIo object.");
        a = new g.dn;
        a.K = !1;
        return a
    };
    g.k.isActive = function() {
        return !!this.Oi && this.Oi.isActive(this)
    };
    g.k.Kn = function(a) {
        var b = L8;
        b.dispatchEvent(new PAb(b, a))
    };
    g.k.MB = function() {
        return !(!g.mf || g.Uc(10))
    };
    g.k = cBb.prototype;
    g.k.jT = function() {};
    g.k.iT = function() {};
    g.k.hT = function() {};
    g.k.BL = function() {};
    g.k.kT = function() {
        return {}
    };
    g.k.isActive = function() {
        return !0
    };
    g.k = dBb.prototype;
    g.k.isEmpty = function() {
        return 0 === this.j.length && 0 === this.B.length
    };
    g.k.clear = function() {
        this.j = [];
        this.B = []
    };
    g.k.contains = function(a) {
        return g.Hb(this.j, a) || g.Hb(this.B, a)
    };
    g.k.remove = function(a) {
        var b = this.j;
        var c = (0, g.Nfb)(b, a);
        0 <= c ? (g.Ib(b, c), b = !0) : b = !1;
        return b || g.Jb(this.B, a)
    };
    g.k.Xl = function() {
        for (var a = [], b = this.j.length - 1; 0 <= b; --b) a.push(this.j[b]);
        var c = this.B.length;
        for (b = 0; b < c; ++b) a.push(this.B[b]);
        return a
    };
    g.w(eBb, g.Bb);
    g.w(fBb, g.Bb);
    g.pb(Y8, g.I);
    g.k = Y8.prototype;
    g.k.qaa = function() {
        this.Zi = Math.min(3E5, 2 * this.Zi);
        this.C();
        this.B && this.start()
    };
    g.k.start = function() {
        var a = this.Zi + 15E3 * Math.random();
        g.dv(this.j, a);
        this.B = Date.now() + a
    };
    g.k.stop = function() {
        this.j.stop();
        this.B = 0
    };
    g.k.isActive = function() {
        return this.j.isActive()
    };
    g.k.reset = function() {
        this.j.stop();
        this.Zi = 5E3
    };
    g.pb(hBb, cBb);
    g.k = hBb.prototype;
    g.k.subscribe = function(a, b, c) {
        return this.C.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.C.unsubscribe(a, b, c)
    };
    g.k.Ch = function(a) {
        return this.C.Ch(a)
    };
    g.k.oa = function(a, b) {
        return this.C.oa.apply(this.C, arguments)
    };
    g.k.dispose = function() {
        this.ma || (this.ma = !0, g.vb(this.C), this.disconnect(), g.vb(this.B), this.B = null, this.ra = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ma
    };
    g.k.connect = function(a, b, c) {
        if (!this.j || 2 != this.j.getState()) {
            this.W = "";
            this.B.stop();
            this.K = a || null;
            this.G = b || 0;
            a = this.Ba + "/test";
            b = this.Ba + "/bind";
            var d = new MAb(c ? c.firstTestResults : null, c ? c.secondTestResults : null, this.Ta),
                e = this.j;
            e && (e.Oi = null);
            d.Oi = this;
            this.j = d;
            iBb(this);
            if (this.j) {
                d = g.VB("ID_TOKEN");
                var f = this.j.Co || {};
                d ? f["x-youtube-identity-token"] = d : delete f["x-youtube-identity-token"];
                this.j.Co = f
            }
            e ? (3 != e.getState() && 0 == UAb(e) || e.getState(), this.j.connect(a, b, this.N, e.D, e.Jx)) : c ? this.j.connect(a,
                b, this.N, c.sessionId, c.arrayId) : this.j.connect(a, b, this.N)
        }
    };
    g.k.disconnect = function(a) {
        this.Z = a || 0;
        this.B.stop();
        iBb(this);
        this.j && (3 == this.j.getState() && XAb(this.j), this.j.disconnect());
        this.Z = 0
    };
    g.k.sendMessage = function(a, b) {
        a = {
            _sc: a
        };
        b && g.sd(a, b);
        this.B.isActive() || 2 == (this.j ? this.j.getState() : 0) ? this.D.push(a) : this.Bz() && (iBb(this), TAb(this.j, a))
    };
    g.k.jT = function() {
        this.B.reset();
        this.K = null;
        this.G = 0;
        if (this.D.length) {
            var a = this.D;
            this.D = [];
            for (var b = 0, c = a.length; b < c; ++b) TAb(this.j, a[b])
        }
        this.oa("handlerOpened");
        Fyb(this.Na, "BROWSER_CHANNEL")
    };
    g.k.hT = function(a) {
        var b = 2 == a && 401 == this.j.Do;
        4 == a || b || this.B.start();
        this.oa("handlerError", a, b);
        Lyb(this.Ga, "BROWSER_CHANNEL")
    };
    g.k.BL = function(a, b) {
        if (!this.B.isActive()) this.oa("handlerClosed");
        else if (b)
            for (var c = 0, d = b.length; c < d; ++c) {
                var e = b[c].map;
                e && this.D.push(e)
            }
        Hyb(this.Ea, "BROWSER_CHANNEL");
        a && this.Xa.j.CL("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", a.length);
        b && this.Za.j.CL("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", b.length)
    };
    g.k.kT = function() {
        var a = {
            v: 2
        };
        this.W && (a.gsessionid = this.W);
        0 != this.G && (a.ui = "" + this.G);
        0 != this.Z && (a.ui = "" + this.Z);
        this.K && g.sd(a, this.K);
        return a
    };
    g.k.iT = function(a) {
        "S" == a[0] ? this.W = a[1] : "gracefulReconnect" == a[0] ? (this.B.start(), this.j.disconnect()) : this.oa("handlerMessage", new gBb(a[0], a[1]));
        Jyb(this.Ka, "BROWSER_CHANNEL")
    };
    g.k.Bz = function() {
        return !!this.j && 3 == this.j.getState()
    };
    g.k.xr = function(a) {
        (this.N.loungeIdToken = a) || this.B.stop();
        if (this.Ua && this.j) {
            var b = this.j.Co || {};
            a ? b["X-YouTube-LoungeId-Token"] = a : delete b["X-YouTube-LoungeId-Token"];
            this.j.Co = b
        }
    };
    g.k.Js = function() {
        return this.N.id
    };
    g.k.Os = function() {
        return this.B.isActive() ? this.B.B - Date.now() : NaN
    };
    g.k.Pw = function() {
        var a = this.B;
        g.ev(a.j);
        a.start()
    };
    g.k.Jba = function() {
        this.B.isActive();
        0 == UAb(this.j) && this.connect(this.K, this.G)
    };
    Z8.prototype.D = function(a, b, c, d) {
        b ? a(d) : a({
            text: c.responseText
        })
    };
    Z8.prototype.C = function(a, b) {
        a(Error("Request error: " + b.status))
    };
    Z8.prototype.G = function(a) {
        a(Error("request timed out"))
    };
    g.w(kBb, g.Md);
    g.k = kBb.prototype;
    g.k.connect = function(a, b, c) {
        this.Ed.connect(a, b, c)
    };
    g.k.disconnect = function(a) {
        this.Ed.disconnect(a)
    };
    g.k.Pw = function() {
        this.Ed.Pw()
    };
    g.k.Js = function() {
        return this.Ed.Js()
    };
    g.k.Os = function() {
        return this.Ed.Os()
    };
    g.k.Bz = function() {
        return this.Ed.Bz()
    };
    g.k.I2 = function() {
        this.dispatchEvent("channelOpened");
        var a = this.Ed,
            b = this.j;
        g.jD("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !a.j.UK,
            sessionId: a.j.D,
            arrayId: a.j.Jx
        });
        g.jD("yt-remote-session-screen-id", b);
        a = i8();
        b = j8();
        g.Hb(a, b) || a.push(b);
        czb(a);
        ezb()
    };
    g.k.G2 = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.H2 = function(a) {
        this.dispatchEvent(new eBb(a))
    };
    g.k.onError = function(a) {
        this.dispatchEvent(new fBb(a ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.Ed.sendMessage(a, b)
    };
    g.k.xr = function(a) {
        this.Ed.xr(a)
    };
    g.k.dispose = function() {
        this.Ed.dispose()
    };
    g.k = lBb.prototype;
    g.k.connect = function(a, b) {
        a = void 0 === a ? {} : a;
        b = void 0 === b ? 0 : b;
        2 !== this.K && (this.C.stop(), this.Z = a, this.N = b, nBb(this), (a = g.VB("ID_TOKEN")) ? this.D["x-youtube-identity-token"] = a : delete this.D["x-youtube-identity-token"], this.j && (this.B.device = this.j.device, this.B.name = this.j.name, this.B.app = this.j.app, this.B.id = this.j.id, this.j.A8 && (this.B.mdxVersion = "" + this.j.A8), this.j.theme && (this.B.theme = this.j.theme), this.j.capabilities && (this.B.capabilities = this.j.capabilities), this.j.B5 && (this.B.cst = this.j.B5),
            this.j.authuser && (this.B.authuser = this.j.authuser), this.j.pageId && (this.B.pageId = this.j.pageId)), 0 !== this.N ? this.B.ui = "" + this.N : delete this.B.ui, Object.assign(this.B, this.Z), this.channel = new J8(this.pathPrefix, {
            K7: "gsessionid",
            E8: this.D,
            F8: this.B
        }), this.channel.open(), this.K = 2, mBb(this))
    };
    g.k.disconnect = function(a) {
        this.W = void 0 === a ? 0 : a;
        this.C.stop();
        nBb(this);
        this.channel && (0 !== this.W ? this.B.ui = "" + this.W : delete this.B.ui, this.channel.close());
        this.W = 0
    };
    g.k.Os = function() {
        return this.C.isActive() ? this.C.B - Date.now() : NaN
    };
    g.k.Pw = function() {
        var a = this.C;
        g.ev(a.j);
        a.start()
    };
    g.k.sendMessage = function(a, b) {
        this.channel && (nBb(this), a = Object.assign({}, {
            _sc: a
        }, b), this.channel.send(a))
    };
    g.k.xr = function(a) {
        a || this.C.stop();
        a ? this.D["X-YouTube-LoungeId-Token"] = a : delete this.D["X-YouTube-LoungeId-Token"]
    };
    g.k.Js = function() {
        return this.j ? this.j.id : ""
    };
    g.k.oa = function(a) {
        return this.G.oa.apply(this.G, [a].concat(g.oa(g.Ia.apply(1, arguments))))
    };
    g.k.subscribe = function(a, b, c) {
        return this.G.subscribe(a, b, c)
    };
    g.k.unsubscribe = function(a, b, c) {
        return this.G.unsubscribe(a, b, c)
    };
    g.k.Ch = function(a) {
        return this.G.Ch(a)
    };
    g.k.dispose = function() {
        this.ma || (this.ma = !0, g.vb(this.G), this.disconnect(), g.vb(this.C), this.Ba = function() {
            return ""
        })
    };
    g.k.isDisposed = function() {
        return this.ma
    };
    g.w(oBb, g.Md);
    g.k = oBb.prototype;
    g.k.connect = function(a, b) {
        this.j.connect(a, b)
    };
    g.k.disconnect = function(a) {
        this.j.disconnect(a)
    };
    g.k.Pw = function() {
        this.j.Pw()
    };
    g.k.Js = function() {
        return this.j.Js()
    };
    g.k.Os = function() {
        return this.j.Os()
    };
    g.k.Bz = function() {
        return 3 === this.j.K
    };
    g.k.L2 = function() {
        this.dispatchEvent("channelOpened")
    };
    g.k.J2 = function() {
        this.dispatchEvent("channelClosed")
    };
    g.k.K2 = function(a) {
        this.dispatchEvent(new eBb(a))
    };
    g.k.onError = function() {
        this.dispatchEvent(new fBb(401 === this.j.Cg ? 1 : 0))
    };
    g.k.sendMessage = function(a, b) {
        this.j.sendMessage(a, b)
    };
    g.k.xr = function(a) {
        this.j.xr(a)
    };
    g.k.dispose = function() {
        this.j.dispose()
    };
    var wBb = Date.now(),
        a9 = null,
        e9 = Array(50),
        d9 = -1,
        f9 = !1;
    g.pb(g9, g.uG);
    g9.prototype.Nk = function() {
        return this.screens
    };
    g9.prototype.contains = function(a) {
        return !!$yb(this.screens, a)
    };
    g9.prototype.get = function(a) {
        return a ? h8(this.screens, a) : null
    };
    g9.prototype.info = function(a) {
        b9(this.K, a)
    };
    g.w(ABb, g.uG);
    g.k = ABb.prototype;
    g.k.start = function() {
        !this.j && isNaN(this.jd) && this.CZ()
    };
    g.k.stop = function() {
        this.j && (this.j.abort(), this.j = null);
        isNaN(this.jd) || (g.pC(this.jd), this.jd = NaN)
    };
    g.k.xa = function() {
        this.stop();
        g.uG.prototype.xa.call(this)
    };
    g.k.CZ = function() {
        this.jd = NaN;
        this.j = g.sC($8(this.C, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.N
            },
            timeout: 5E3,
            onSuccess: (0, g.jb)(this.N2, this),
            onError: (0, g.jb)(this.M2, this),
            onTimeout: (0, g.jb)(this.O2, this)
        })
    };
    g.k.N2 = function(a, b) {
        this.j = null;
        a = b.screen || {};
        a.dialId = this.D;
        a.name = this.K;
        b = -1;
        this.G && a.shortLivedLoungeToken && a.shortLivedLoungeToken.value && a.shortLivedLoungeToken.refreshIntervalMs && (a.screenIdType = "shortLived", a.loungeToken = a.shortLivedLoungeToken.value, b = a.shortLivedLoungeToken.refreshIntervalMs);
        this.oa("pairingComplete", new e8(a), b)
    };
    g.k.M2 = function(a) {
        this.j = null;
        a.status && 404 == a.status ? this.B >= uDb.length ? this.oa("pairingFailed", Error("DIAL polling timed out")) : (a = uDb[this.B], this.jd = g.nC((0, g.jb)(this.CZ, this), a), this.B++) : this.oa("pairingFailed", Error("Server error " + a.status))
    };
    g.k.O2 = function() {
        this.j = null;
        this.oa("pairingFailed", Error("Server not responding"))
    };
    var uDb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.pb(i9, g9);
    g.k = i9.prototype;
    g.k.start = function() {
        h9(this) && this.oa("screenChange");
        !g.kD("yt-remote-lounge-token-expiration") && BBb(this);
        g.pC(this.j);
        this.j = g.nC((0, g.jb)(this.start, this), 1E4)
    };
    g.k.add = function(a, b) {
        h9(this);
        xBb(this, a);
        j9(this, !1);
        this.oa("screenChange");
        b(a);
        a.token || BBb(this)
    };
    g.k.remove = function(a, b) {
        var c = h9(this);
        zBb(this, a) && (j9(this, !1), c = !0);
        b(a);
        c && this.oa("screenChange")
    };
    g.k.TK = function(a, b, c, d) {
        var e = h9(this),
            f = this.get(a.id);
        f ? (f.name != b && (f.name = b, j9(this, !1), e = !0), c(a)) : d(Error("no such local screen."));
        e && this.oa("screenChange")
    };
    g.k.xa = function() {
        g.pC(this.j);
        i9.Lf.xa.call(this)
    };
    g.k.i7 = function(a) {
        h9(this);
        var b = this.screens.length;
        a = a && a.screens || [];
        for (var c = 0, d = a.length; c < d; ++c) {
            var e = a[c],
                f = this.get(e.screenId);
            f && (f.token = e.loungeToken, --b)
        }
        j9(this, !b);
        b && b9(this.K, "Missed " + b + " lounge tokens.")
    };
    g.k.h7 = function(a) {
        b9(this.K, "Requesting lounge tokens failed: " + a)
    };
    g.w(DBb, g.uG);
    g.k = DBb.prototype;
    g.k.start = function() {
        var a = parseInt(g.kD("yt-remote-fast-check-period") || "0", 10);
        (this.D = g.ob() - 144E5 < a ? 0 : a) ? k9(this): (this.D = g.ob() + 3E5, g.jD("yt-remote-fast-check-period", this.D), this.ZQ())
    };
    g.k.isEmpty = function() {
        return g.nd(this.j)
    };
    g.k.update = function() {
        CBb("Updating availability on schedule.");
        var a = this.K(),
            b = g.bd(this.j, function(c, d) {
                return c && !!h8(a, d)
            }, this);
        GBb(this, b)
    };
    g.k.xa = function() {
        g.pC(this.C);
        this.C = NaN;
        this.B && (this.B.abort(), this.B = null);
        g.uG.prototype.xa.call(this)
    };
    g.k.ZQ = function() {
        g.pC(this.C);
        this.C = NaN;
        this.B && this.B.abort();
        var a = HBb(this);
        if (xyb(a)) {
            var b = $8(this.G, "/pairing/get_screen_availability");
            this.B = jBb(this.G, b, {
                lounge_token: g.id(a).join(",")
            }, (0, g.jb)(this.T$, this, a), (0, g.jb)(this.S$, this))
        } else GBb(this, {}), k9(this)
    };
    g.k.T$ = function(a, b) {
        this.B = null;
        var c = g.id(HBb(this));
        if (g.$b(c, g.id(a))) {
            b = b.screens || [];
            c = {};
            for (var d = b.length, e = 0; e < d; ++e) c[a[b[e].loungeToken]] = "online" == b[e].status;
            GBb(this, c);
            k9(this)
        } else this.cg("Changing Screen set during request."), this.ZQ()
    };
    g.k.S$ = function(a) {
        this.cg("Screen availability failed: " + a);
        this.B = null;
        k9(this)
    };
    g.k.cg = function(a) {
        b9("OnlineScreenService", a)
    };
    g.pb(l9, g9);
    g.k = l9.prototype;
    g.k.start = function() {
        this.B.start();
        this.j.start();
        this.screens.length && (this.oa("screenChange"), this.j.isEmpty() || this.oa("onlineScreenChange"))
    };
    g.k.add = function(a, b, c) {
        this.B.add(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.B.remove(a, b, c);
        this.j.update()
    };
    g.k.TK = function(a, b, c, d) {
        this.B.contains(a) ? this.B.TK(a, b, c, d) : (a = "Updating name of unknown screen: " + a.name, b9(this.K, a), d(Error(a)))
    };
    g.k.Nk = function(a) {
        return a ? this.screens : g.Lb(this.screens, g.wt(this.C, function(b) {
            return !this.contains(b)
        }, this))
    };
    g.k.lT = function() {
        return g.wt(this.Nk(!0), function(a) {
            return !!this.j.j[a.id]
        }, this)
    };
    g.k.mT = function(a, b, c, d, e, f) {
        var h = this;
        this.info("getDialScreenByPairingCode " + a + " / " + b);
        var l = new ABb(this.D, a, b, c, d);
        l.subscribe("pairingComplete", function(m, n) {
            g.vb(l);
            e(m9(h, m), n)
        });
        l.subscribe("pairingFailed", function(m) {
            g.vb(l);
            f(m)
        });
        l.start();
        return (0, g.jb)(l.stop, l)
    };
    g.k.P2 = function(a, b, c, d) {
        g.sC($8(this.D, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: a
            },
            timeout: 5E3,
            onSuccess: (0, g.jb)(function(e, f) {
                e = new e8(f.screen || {});
                if (!e.name || LBb(this, e.name)) {
                    a: {
                        f = e.name;
                        for (var h = 2, l = b(f, h); LBb(this, l);) {
                            h++;
                            if (20 < h) break a;
                            l = b(f, h)
                        }
                        f = l
                    }
                    e.name = f
                }
                c(m9(this, e))
            }, this),
            onError: (0, g.jb)(function(e) {
                d(Error("pairing request failed: " + e.status))
            }, this),
            onTimeout: (0, g.jb)(function() {
                d(Error("pairing request timed out."))
            }, this)
        })
    };
    g.k.xa = function() {
        g.vb(this.B);
        g.vb(this.j);
        l9.Lf.xa.call(this)
    };
    g.k.s7 = function() {
        NBb(this);
        this.oa("screenChange");
        this.j.update()
    };
    l9.prototype.dispose = l9.prototype.dispose;
    g.pb(n9, g.uG);
    g.k = n9.prototype;
    g.k.Dj = function(a) {
        this.isDisposed() || (a && (p9(this, "" + a), this.oa("sessionFailed")), this.j = null, this.oa("sessionScreen", null))
    };
    g.k.info = function(a) {
        b9(this.Ga, a)
    };
    g.k.nT = function() {
        return null
    };
    g.k.rR = function(a) {
        var b = this.B;
        a ? (b.displayStatus = new chrome.cast.ReceiverDisplayStatus(a, []), b.displayStatus.showStop = !0) : b.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(b, (0, g.jb)(function() {
            this.info("Updated receiver status for " + b.friendlyName + ": " + a)
        }, this), (0, g.jb)(function() {
            p9(this, "Failed to update receiver status for: " + b.friendlyName)
        }, this))
    };
    g.k.xa = function() {
        this.rR("");
        n9.Lf.xa.call(this)
    };
    g.w(q9, n9);
    g.k = q9.prototype;
    g.k.pR = function(a) {
        if (this.C) {
            if (this.C == a) return;
            p9(this, "Overriding cast session with new session object");
            ZBb(this);
            this.Ba = !1;
            this.W = "unknown";
            this.C.removeUpdateListener(this.ra);
            this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea)
        }
        this.C = a;
        this.C.addUpdateListener(this.ra);
        this.C.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea);
        UBb(this, "getMdxSessionStatus")
    };
    g.k.Mz = function(a) {
        this.info("launchWithParams no-op for Cast: " + g.Mm(a))
    };
    g.k.stop = function() {
        this.C ? this.C.stop((0, g.jb)(function() {
            this.Dj()
        }, this), (0, g.jb)(function() {
            this.Dj(Error("Failed to stop receiver app."))
        }, this)) : this.Dj(Error("Stopping cast device without session."))
    };
    g.k.rR = function() {};
    g.k.xa = function() {
        this.info("disposeInternal");
        ZBb(this);
        this.C && (this.C.removeUpdateListener(this.ra), this.C.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.Ea));
        this.C = null;
        n9.prototype.xa.call(this)
    };
    g.k.Gaa = function(a, b) {
        if (!this.isDisposed())
            if (b)
                if (b = c8(b), g.cb(b)) switch (a = "" + b.type, b = b.data || {}, this.info("onYoutubeMessage_: " + a + " " + g.Mm(b)), a) {
                    case "mdxSessionStatus":
                        RBb(this, b);
                        break;
                    case "loungeToken":
                        VBb(this, b);
                        break;
                    default:
                        p9(this, "Unknown youtube message: " + a)
                } else p9(this, "Unable to parse message.");
                else p9(this, "No data in message.")
    };
    g.k.GW = function(a, b, c, d) {
        g.pC(this.Z);
        this.Z = 0;
        KBb(this.D, this.B.label, a, this.B.friendlyName, (0, g.jb)(function(e) {
            e ? b(e) : 0 <= d ? (p9(this, "Screen " + a + " appears to be offline. " + d + " retries left."), this.Z = g.nC((0, g.jb)(this.GW, this, a, b, c, d - 1), 300)) : c(Error("Unable to fetch screen."))
        }, this), c)
    };
    g.k.nT = function() {
        return this.C
    };
    g.k.Q2 = function(a) {
        this.isDisposed() || a || (p9(this, "Cast session died."), this.Dj())
    };
    g.w(r9, n9);
    g.k = r9.prototype;
    g.k.pR = function(a) {
        this.C = a;
        this.C.addUpdateListener(this.Ka)
    };
    g.k.Mz = function(a) {
        this.Na = a;
        this.ma()
    };
    g.k.stop = function() {
        gCb(this);
        this.C ? this.C.stop((0, g.jb)(this.Dj, this, null), (0, g.jb)(this.Dj, this, "Failed to stop DIAL device.")) : this.Dj()
    };
    g.k.xa = function() {
        gCb(this);
        this.C && this.C.removeUpdateListener(this.Ka);
        this.C = null;
        n9.prototype.xa.call(this)
    };
    g.k.R2 = function(a) {
        this.isDisposed() || a || (p9(this, "DIAL session died."), this.G(), this.G = function() {}, this.Dj())
    };
    g.w(u9, n9);
    u9.prototype.stop = function() {
        this.Dj()
    };
    u9.prototype.pR = function() {};
    u9.prototype.Mz = function() {
        g.pC(this.C);
        this.C = NaN;
        var a = h8(this.D.Nk(), this.B.label);
        a ? o9(this, a) : this.Dj(Error("No such screen"))
    };
    u9.prototype.xa = function() {
        g.pC(this.C);
        this.C = NaN;
        n9.prototype.xa.call(this)
    };
    g.w(v9, g.uG);
    g.k = v9.prototype;
    g.k.init = function(a, b) {
        chrome.cast.timeout.requestSession = 3E4;
        var c = new chrome.cast.SessionRequest(this.Z, [chrome.cast.Capability.AUDIO_OUT]);
        this.W || (c.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var d = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        a = a || this.K ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var e = (0, g.jb)(this.C$, this);
        c = new chrome.cast.ApiConfig(c, (0, g.jb)(this.gZ, this), e, d, a);
        c.customDialLaunchCallback = (0, g.jb)(this.z9, this);
        chrome.cast.initialize(c, (0, g.jb)(function() {
            this.isDisposed() || (chrome.cast.addReceiverActionListener(this.G), tBb(), this.B.subscribe("onlineScreenChange", (0, g.jb)(this.oT, this)), this.C = jCb(this), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.jb)(function(f) {
                this.cg("Failed to set initial custom receivers: " + g.Mm(f))
            }, this)), this.oa("yt-remote-cast2-availability-change", x9(this)), b(!0))
        }, this), (0, g.jb)(function(f) {
            this.cg("Failed to initialize API: " + g.Mm(f));
            b(!1)
        }, this))
    };
    g.k.Sba = function(a, b) {
        w9("Setting connected screen ID: " + a + " -> " + b);
        if (this.j) {
            var c = this.j.j;
            if (!a || c && c.id != a) w9("Unsetting old screen status: " + this.j.B.friendlyName), y9(this, null)
        }
        if (a && b) {
            if (!this.j) {
                a = h8(this.B.Nk(), a);
                if (!a) {
                    w9("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if ("shortLived" == a.idType) {
                    w9("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                c = hCb(this, a);
                c || (w9("setConnectedScreenStatus: Connected receiver not custom..."), c = new chrome.cast.Receiver(a.uuid ?
                    a.uuid : a.id, a.name), c.receiverType = chrome.cast.ReceiverType.CUSTOM, this.C.push(c), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.jb)(function(d) {
                    this.cg("Failed to set initial custom receivers: " + g.Mm(d))
                }, this)));
                w9("setConnectedScreenStatus: new active receiver: " + c.friendlyName);
                y9(this, new u9(this.B, c), !0)
            }
            this.j.rR(b)
        } else w9("setConnectedScreenStatus: no screen.")
    };
    g.k.Vba = function(a) {
        this.isDisposed() ? this.cg("Setting connection data on disposed cast v2") : this.j ? this.j.Mz(a) : this.cg("Setting connection data without a session")
    };
    g.k.T2 = function() {
        this.isDisposed() ? this.cg("Stopping session on disposed cast v2") : this.j ? (this.j.stop(), y9(this, null)) : w9("Stopping non-existing session")
    };
    g.k.requestSession = function() {
        chrome.cast.requestSession((0, g.jb)(this.gZ, this), (0, g.jb)(this.W$, this))
    };
    g.k.xa = function() {
        this.B.unsubscribe("onlineScreenChange", (0, g.jb)(this.oT, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.G);
        var a = qBb,
            b = g.Va("yt.mdx.remote.debug.handlers_");
        g.Jb(b || [], a);
        g.vb(this.j);
        g.uG.prototype.xa.call(this)
    };
    g.k.cg = function(a) {
        b9("Controller", a)
    };
    g.k.iZ = function(a, b) {
        this.j == a && (b || y9(this, null), this.oa("yt-remote-cast2-session-change", b))
    };
    g.k.z$ = function(a, b) {
        if (!this.isDisposed())
            if (a) switch (a.friendlyName = chrome.cast.unescape(a.friendlyName), w9("onReceiverAction_ " + a.label + " / " + a.friendlyName + "-- " + b), b) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.j)
                        if (this.j.B.label != a.label) w9("onReceiverAction_: Stopping active receiver: " + this.j.B.friendlyName), this.j.stop();
                        else {
                            w9("onReceiverAction_: Casting to active receiver.");
                            this.j.j && this.oa("yt-remote-cast2-session-change", this.j.j);
                            break
                        }
                    switch (a.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            y9(this,
                                new u9(this.B, a));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            y9(this, new r9(this.B, a, this.D, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            y9(this, new q9(this.B, a, this.config_));
                            break;
                        default:
                            this.cg("Unknown receiver type: " + a.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.j && this.j.B.label == a.label ? this.j.stop() : this.cg("Stopping receiver w/o session: " + a.friendlyName)
            } else this.cg("onReceiverAction_ called without receiver.")
    };
    g.k.z9 = function(a) {
        if (this.isDisposed()) return Promise.reject(Error("disposed"));
        var b = a.receiver;
        b.receiverType != chrome.cast.ReceiverType.DIAL && (this.cg("Not DIAL receiver: " + b.friendlyName), b.receiverType = chrome.cast.ReceiverType.DIAL);
        var c = this.j ? this.j.B : null;
        if (!c || c.label != b.label) return this.cg("Receiving DIAL launch request for non-clicked DIAL receiver: " + b.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (c && c.label == b.label && c.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.j.j) return w9("Reselecting dial screen."),
                this.oa("yt-remote-cast2-session-change", this.j.j), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.cg('Changing CAST intent from "' + c.receiverType + '" to "dial" for ' + b.friendlyName);
            y9(this, new r9(this.B, b, this.D, this.config_))
        }
        b = this.j;
        b.Z = a;
        b.Z.appState == chrome.cast.DialAppState.RUNNING ? (a = b.Z.extraData || {}, c = a.screenId || null, s9(b) && a.loungeToken ? a.loungeTokenRefreshIntervalMs ? a = dCb(b, {
                name: b.B.friendlyName,
                screenId: a.screenId,
                loungeToken: a.loungeToken,
                dialId: b.Z.receiver.label,
                screenIdType: "shortLived"
            },
            a.loungeTokenRefreshIntervalMs) : (g.$B(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(a) + ".")), a = eCb(b, c)) : a = eCb(b, c)) : a = bCb(b);
        return a
    };
    g.k.gZ = function(a) {
        var b = this;
        if (!this.isDisposed() && !this.K) {
            w9("New cast session ID: " + a.sessionId);
            var c = a.receiver;
            if (c.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.j)
                    if (c.receiverType == chrome.cast.ReceiverType.CAST) w9("Got resumed cast session before resumed mdx connection."), c.friendlyName = chrome.cast.unescape(c.friendlyName), y9(this, new q9(this.B, c, this.config_), !0);
                    else {
                        this.cg("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var d = this.j.B,
                    e = h8(this.B.Nk(),
                        d.label);
                e && f8(e, c.label) && d.receiverType != chrome.cast.ReceiverType.CAST && c.receiverType == chrome.cast.ReceiverType.CAST && (w9("onSessionEstablished_: manual to cast session change " + c.friendlyName), g.vb(this.j), this.j = new q9(this.B, c, this.config_), this.j.subscribe("sessionScreen", (0, g.jb)(this.iZ, this, this.j)), this.j.subscribe("sessionFailed", function() {
                    return iCb(b, b.j)
                }), this.j.Mz(null));
                this.j.pR(a)
            }
        }
    };
    g.k.S2 = function() {
        return this.j ? this.j.nT() : null
    };
    g.k.W$ = function(a) {
        this.isDisposed() || (this.cg("Failed to estabilish a session: " + g.Mm(a)), a.code != chrome.cast.ErrorCode.CANCEL && y9(this, null), this.oa("yt-remote-cast2-session-failed"))
    };
    g.k.C$ = function(a) {
        w9("Receiver availability updated: " + a);
        if (!this.isDisposed()) {
            var b = x9(this);
            this.N = a == chrome.cast.ReceiverAvailability.AVAILABLE;
            x9(this) != b && this.oa("yt-remote-cast2-availability-change", x9(this))
        }
    };
    g.k.oT = function() {
        this.isDisposed() || (this.C = jCb(this), w9("Updating custom receivers: " + g.Mm(this.C)), chrome.cast.setCustomReceivers(this.C, function() {}, (0, g.jb)(function() {
            this.cg("Failed to set custom receivers.")
        }, this)), this.oa("yt-remote-cast2-availability-change", x9(this)))
    };
    v9.prototype.setLaunchParams = v9.prototype.Vba;
    v9.prototype.setConnectedScreenStatus = v9.prototype.Sba;
    v9.prototype.stopSession = v9.prototype.T2;
    v9.prototype.getCastSession = v9.prototype.S2;
    v9.prototype.requestSession = v9.prototype.requestSession;
    v9.prototype.init = v9.prototype.init;
    v9.prototype.dispose = v9.prototype.dispose;
    var sCb = [];
    g.k = F9.prototype;
    g.k.reset = function(a) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        yCb(this);
        this.volume = -1;
        this.muted = !1;
        a && (this.index = a.index, this.listId = a.listId, this.videoId = a.videoId, this.playerState = a.playerState, this.volume = a.volume, this.muted = a.muted, this.audioTrackId = a.audioTrackId, this.trackData = a.trackData, this.yp = a.hasPrevious, this.Qk = a.hasNext, this.N = a.playerTime, this.K = a.playerTimeAt, this.D = a.seekableStart, this.j = a.seekableEnd, this.G = a.duration, this.Z = a.loadedTime, this.C = a.liveIngestionTime, this.B = !isNaN(this.C))
    };
    g.k.isPlaying = function() {
        return 1 == this.playerState
    };
    g.k.ql = function(a) {
        this.G = isNaN(a) ? 0 : a
    };
    g.k.getDuration = function() {
        return this.B ? this.G + G9(this) : this.G
    };
    g.k.clone = function() {
        return new F9(zCb(this))
    };
    g.w(L9, g.uG);
    g.k = L9.prototype;
    g.k.getState = function() {
        return this.C
    };
    g.k.Os = function() {
        return this.D.getReconnectTimeout()
    };
    g.k.Pw = function() {
        this.D.reconnect()
    };
    g.k.play = function() {
        N9(this) ? (this.j ? this.j.play(null, g.Td, R9(this, "play")) : Q9(this, "play"), CCb(this, 1, I9(M9(this))), this.oa("remotePlayerChange")) : O9(this, this.play)
    };
    g.k.pause = function() {
        N9(this) ? (this.j ? this.j.pause(null, g.Td, R9(this, "pause")) : Q9(this, "pause"), CCb(this, 2, I9(M9(this))), this.oa("remotePlayerChange")) : O9(this, this.pause)
    };
    g.k.seekTo = function(a) {
        if (N9(this)) {
            if (this.j) {
                var b = M9(this),
                    c = new chrome.cast.media.SeekRequest;
                c.currentTime = a;
                b.isPlaying() || 3 == b.playerState ? c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : c.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.j.seek(c, g.Td, R9(this, "seekTo", {
                    newTime: a
                }))
            } else Q9(this, "seekTo", {
                newTime: a
            });
            CCb(this, 3, a);
            this.oa("remotePlayerChange")
        } else O9(this, g.kb(this.seekTo, a))
    };
    g.k.stop = function() {
        if (N9(this)) {
            this.j ? this.j.stop(null, g.Td, R9(this, "stopVideo")) : Q9(this, "stopVideo");
            var a = M9(this);
            a.index = -1;
            a.videoId = "";
            yCb(a);
            P9(this, a);
            this.oa("remotePlayerChange")
        } else O9(this, this.stop)
    };
    g.k.setVolume = function(a, b) {
        if (N9(this)) {
            var c = M9(this);
            if (this.B) {
                if (c.volume != a) {
                    var d = Math.round(a) / 100;
                    this.B.setReceiverVolumeLevel(d, (0, g.jb)(function() {
                        c9("set receiver volume: " + d)
                    }, this), (0, g.jb)(function() {
                        this.cg("failed to set receiver volume.")
                    }, this))
                }
                c.muted != b && this.B.setReceiverMuted(b, (0, g.jb)(function() {
                    c9("set receiver muted: " + b)
                }, this), (0, g.jb)(function() {
                    this.cg("failed to set receiver muted.")
                }, this))
            } else {
                var e = {
                    volume: a,
                    muted: b
                }; - 1 != c.volume && (e.delta = a - c.volume);
                Q9(this, "setVolume", e)
            }
            c.muted = b;
            c.volume = a;
            P9(this, c)
        } else O9(this, g.kb(this.setVolume, a, b))
    };
    g.k.pT = function(a, b) {
        if (N9(this)) {
            var c = M9(this);
            a = {
                videoId: a
            };
            b && (c.trackData = {
                trackName: b.name,
                languageCode: b.languageCode,
                sourceLanguageCode: b.translationLanguage ? b.translationLanguage.languageCode : "",
                languageName: b.languageName,
                kind: b.kind
            }, a.style = g.Mm(b.style), g.sd(a, c.trackData));
            Q9(this, "setSubtitlesTrack", a);
            P9(this, c)
        } else O9(this, g.kb(this.pT, a, b))
    };
    g.k.setAudioTrack = function(a, b) {
        N9(this) ? (b = b.getLanguageInfo().getId(), Q9(this, "setAudioTrack", {
            videoId: a,
            audioTrackId: b
        }), a = M9(this), a.audioTrackId = b, P9(this, a)) : O9(this, g.kb(this.setAudioTrack, a, b))
    };
    g.k.playVideo = function(a, b, c, d, e, f, h) {
        d = void 0 === d ? null : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? null : f;
        h = void 0 === h ? null : h;
        var l = M9(this),
            m = {
                videoId: a
            };
        void 0 !== c && (m.currentIndex = c);
        J9(l, a, c || 0);
        void 0 !== b && (H9(l, b), m.currentTime = b);
        d && (m.listId = d);
        e && (m.playerParams = e);
        f && (m.clickTrackingParams = f);
        h && (m.locationInfo = g.Mm(h));
        Q9(this, "setPlaylist", m);
        d || P9(this, l)
    };
    g.k.RJ = function(a, b) {
        if (N9(this)) {
            if (a && b) {
                var c = M9(this);
                J9(c, a, b);
                P9(this, c)
            }
            Q9(this, "previous")
        } else O9(this, g.kb(this.RJ, a, b))
    };
    g.k.nextVideo = function(a, b) {
        if (N9(this)) {
            if (a && b) {
                var c = M9(this);
                J9(c, a, b);
                P9(this, c)
            }
            Q9(this, "next")
        } else O9(this, g.kb(this.nextVideo, a, b))
    };
    g.k.VG = function() {
        if (N9(this)) {
            Q9(this, "clearPlaylist");
            var a = M9(this);
            a.reset();
            P9(this, a);
            this.oa("remotePlayerChange")
        } else O9(this, this.VG)
    };
    g.k.NV = function() {
        N9(this) ? Q9(this, "dismissAutoplay") : O9(this, this.NV)
    };
    g.k.dispose = function() {
        if (3 != this.C) {
            var a = this.C;
            this.C = 3;
            this.oa("proxyStateChange", a, this.C)
        }
        g.uG.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        BCb(this);
        this.D = null;
        this.G.clear();
        K9(this, null);
        g.uG.prototype.xa.call(this)
    };
    g.k.wR = function(a) {
        if ((a != this.C || 2 == a) && 3 != this.C && 0 != a) {
            var b = this.C;
            this.C = a;
            this.oa("proxyStateChange", b, a);
            if (1 == a)
                for (; !this.G.isEmpty();) b = a = this.G, 0 === b.j.length && (b.j = b.B, b.j.reverse(), b.B = []), a.j.pop().apply(this);
            else 3 == a && this.dispose()
        }
    };
    g.k.x$ = function(a, b) {
        this.oa(a, b)
    };
    g.k.p9 = function(a) {
        if (!a) this.rE(null), K9(this, null);
        else if (this.B.receiver.volume) {
            a = this.B.receiver.volume;
            var b = M9(this),
                c = Math.round(100 * a.level || 0);
            if (b.volume != c || b.muted != a.muted) c9("Cast volume update: " + a.level + (a.muted ? " muted" : "")), b.volume = c, b.muted = !!a.muted, P9(this, b)
        }
    };
    g.k.rE = function(a) {
        c9("Cast media: " + !!a);
        this.j && this.j.removeUpdateListener(this.Z);
        if (this.j = a) this.j.addUpdateListener(this.Z), DCb(this), this.oa("remotePlayerChange")
    };
    g.k.o9 = function(a) {
        a ? (DCb(this), this.oa("remotePlayerChange")) : this.rE(null)
    };
    g.k.UR = function() {
        Q9(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.k.s9 = function() {
        var a = vCb();
        a && K9(this, a)
    };
    g.k.cg = function(a) {
        b9("CP", a)
    };
    g.w(U9, g.uG);
    g.k = U9.prototype;
    g.k.connect = function(a, b) {
        if (b) {
            var c = b.listId,
                d = b.videoId,
                e = b.videoIds,
                f = b.playerParams,
                h = b.clickTrackingParams,
                l = b.index,
                m = {
                    videoId: d
                },
                n = b.currentTime,
                p = b.locationInfo;
            b = b.loopMode;
            void 0 !== n && (m.currentTime = 5 >= n ? 0 : n);
            f && (m.playerParams = f);
            p && (m.locationInfo = p);
            h && (m.clickTrackingParams = h);
            c && (m.listId = c);
            e && 0 < e.length && (m.videoIds = e.join(","));
            void 0 !== l && (m.currentIndex = l);
            this.Ka && (m.loopMode = b || "LOOP_MODE_OFF");
            c && (this.j.listId = c);
            this.j.videoId = d;
            this.j.index = l || 0;
            this.j.state = 3;
            H9(this.j,
                n);
            this.G = "UNSUPPORTED";
            c = this.Ka ? "setInitialState" : "setPlaylist";
            S9("Connecting with " + c + " and params: " + g.Mm(m));
            this.B.connect({
                method: c,
                params: g.Mm(m)
            }, a, fzb())
        } else S9("Connecting without params"), this.B.connect({}, a, fzb());
        HCb(this)
    };
    g.k.xr = function(a) {
        this.B.xr(a)
    };
    g.k.dispose = function() {
        this.isDisposed() || (g.Ua("yt.mdx.remote.remoteClient_", null), this.oa("beforeDispose"), T9(this, 3));
        g.uG.prototype.dispose.call(this)
    };
    g.k.xa = function() {
        ICb(this);
        KCb(this);
        JCb(this);
        g.pC(this.Z);
        this.Z = NaN;
        g.pC(this.W);
        this.W = NaN;
        this.D = null;
        g.bD(this.ma);
        this.ma.length = 0;
        this.B.dispose();
        g.uG.prototype.xa.call(this);
        this.G = this.N = this.C = this.j = this.B = null
    };
    g.k.EX = function(a) {
        if (!this.C || 0 === this.C.length) return !1;
        for (var b = g.u(this.C), c = b.next(); !c.done; c = b.next())
            if (!c.value.capabilities.has(a)) return !1;
        return !0
    };
    g.k.O6 = function() {
        var a = 3;
        this.isDisposed() || (a = 0, isNaN(this.tD()) ? this.B.Bz() && isNaN(this.K) && (a = 1) : a = 2);
        return a
    };
    g.k.Ty = function(a) {
        S9("Disconnecting with " + a);
        g.Ua("yt.mdx.remote.remoteClient_", null);
        ICb(this);
        this.oa("beforeDisconnect", a);
        1 == a && k8();
        this.B.disconnect(a);
        this.dispose()
    };
    g.k.J6 = function() {
        var a = this.j;
        this.D && (a = this.j.clone(), J9(a, this.D, a.index));
        return zCb(a)
    };
    g.k.Xba = function(a) {
        var b = this,
            c = new F9(a);
        c.videoId && c.videoId != this.j.videoId && (this.D = c.videoId, g.pC(this.Z), this.Z = g.nC(function() {
            if (b.D) {
                var e = b.D;
                b.D = null;
                b.j.videoId != e && V9(b, "getNowPlaying")
            }
        }, 5E3));
        var d = [];
        this.j.listId == c.listId && this.j.videoId == c.videoId && this.j.index == c.index || d.push("remoteQueueChange");
        this.j.playerState == c.playerState && this.j.volume == c.volume && this.j.muted == c.muted && I9(this.j) == I9(c) && g.Mm(this.j.trackData) == g.Mm(c.trackData) || d.push("remotePlayerChange");
        this.j.reset(a);
        g.bc(d, function(e) {
            this.oa(e)
        }, this)
    };
    g.k.zW = function() {
        var a = this.B.Js(),
            b = g.Eb(this.C, function(c) {
                return "REMOTE_CONTROL" == c.type && c.id != a
            });
        return b ? b.id : ""
    };
    g.k.tD = function() {
        return this.B.Os()
    };
    g.k.s6 = function() {
        return this.G || "UNSUPPORTED"
    };
    g.k.t6 = function() {
        return this.N || ""
    };
    g.k.U2 = function() {
        !isNaN(this.tD()) && this.B.Pw()
    };
    g.k.Qba = function(a, b) {
        V9(this, a, b);
        MCb(this)
    };
    g.k.qT = function() {
        var a = g.CC("SID", "") || "",
            b = g.CC("SAPISID", "") || "",
            c = g.CC("__Secure-3PAPISID", "") || "";
        if (!a && !b && !c) return "";
        a = g.tg(g.sg(a), 2);
        b = g.tg(g.sg(b), 2);
        c = g.tg(g.sg(c), 2);
        return g.tg(g.sg(a + "," + b + "," + c), 2)
    };
    U9.prototype.subscribe = U9.prototype.subscribe;
    U9.prototype.unsubscribeByKey = U9.prototype.Ch;
    U9.prototype.getProxyState = U9.prototype.O6;
    U9.prototype.disconnect = U9.prototype.Ty;
    U9.prototype.getPlayerContextData = U9.prototype.J6;
    U9.prototype.setPlayerContextData = U9.prototype.Xba;
    U9.prototype.getOtherConnectedRemoteId = U9.prototype.zW;
    U9.prototype.getReconnectTimeout = U9.prototype.tD;
    U9.prototype.getAutoplayMode = U9.prototype.s6;
    U9.prototype.getAutoplayVideoId = U9.prototype.t6;
    U9.prototype.reconnect = U9.prototype.U2;
    U9.prototype.sendMessage = U9.prototype.Qba;
    U9.prototype.getXsrfToken = U9.prototype.qT;
    U9.prototype.isCapabilitySupportedOnConnectedDevices = U9.prototype.EX;
    g.w(YCb, g9);
    g.k = YCb.prototype;
    g.k.Nk = function(a) {
        return this.Zg.$_gs(a)
    };
    g.k.contains = function(a) {
        return !!this.Zg.$_c(a)
    };
    g.k.get = function(a) {
        return this.Zg.$_g(a)
    };
    g.k.start = function() {
        this.Zg.$_st()
    };
    g.k.add = function(a, b, c) {
        this.Zg.$_a(a, b, c)
    };
    g.k.remove = function(a, b, c) {
        this.Zg.$_r(a, b, c)
    };
    g.k.TK = function(a, b, c, d) {
        this.Zg.$_un(a, b, c, d)
    };
    g.k.xa = function() {
        for (var a = 0, b = this.j.length; a < b; ++a) this.Zg.$_ubk(this.j[a]);
        this.j.length = 0;
        this.Zg = null;
        g9.prototype.xa.call(this)
    };
    g.k.V2 = function() {
        this.oa("screenChange")
    };
    g.k.f$ = function() {
        this.oa("onlineScreenChange")
    };
    l9.prototype.$_st = l9.prototype.start;
    l9.prototype.$_gspc = l9.prototype.P2;
    l9.prototype.$_gsppc = l9.prototype.mT;
    l9.prototype.$_c = l9.prototype.contains;
    l9.prototype.$_g = l9.prototype.get;
    l9.prototype.$_a = l9.prototype.add;
    l9.prototype.$_un = l9.prototype.TK;
    l9.prototype.$_r = l9.prototype.remove;
    l9.prototype.$_gs = l9.prototype.Nk;
    l9.prototype.$_gos = l9.prototype.lT;
    l9.prototype.$_s = l9.prototype.subscribe;
    l9.prototype.$_ubk = l9.prototype.Ch;
    var f$ = null,
        i$ = !1,
        W9 = null,
        X9 = null,
        iDb = null,
        a$ = [];
    g.w(nDb, g.I);
    g.k = nDb.prototype;
    g.k.xa = function() {
        g.I.prototype.xa.call(this);
        this.j.stop();
        this.B.stop();
        this.N.stop();
        var a = this.Fc;
        a.unsubscribe("proxyStateChange", this.fZ, this);
        a.unsubscribe("remotePlayerChange", this.xE, this);
        a.unsubscribe("remoteQueueChange", this.AJ, this);
        a.unsubscribe("previousNextChange", this.cZ, this);
        a.unsubscribe("nowAutoplaying", this.XY, this);
        a.unsubscribe("autoplayDismissed", this.CY, this);
        this.Fc = this.module = null
    };
    g.k.Pk = function(a) {
        var b = g.Ia.apply(1, arguments);
        if (2 != this.Fc.C)
            if (j$(this)) {
                if (1081 != M9(this.Fc).playerState || "control_seek" !== a) switch (a) {
                    case "control_toggle_play_pause":
                        M9(this.Fc).isPlaying() ? this.Fc.pause() : this.Fc.play();
                        break;
                    case "control_play":
                        this.Fc.play();
                        break;
                    case "control_pause":
                        this.Fc.pause();
                        break;
                    case "control_seek":
                        this.K.uL(b[0], b[1]);
                        break;
                    case "control_subtitles_set_track":
                        pDb(this, b[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(b[0])
                }
            } else switch (a) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    b =
                        this.J.getCurrentTime();
                    k$(this, 0 === b ? void 0 : b);
                    break;
                case "control_seek":
                    k$(this, b[0]);
                    break;
                case "control_subtitles_set_track":
                    pDb(this, b[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(b[0])
            }
    };
    g.k.m9 = function(a) {
        this.N.q2(a)
    };
    g.k.Tca = function(a) {
        this.Pk("control_subtitles_set_track", g.nd(a) ? null : a)
    };
    g.k.N_ = function() {
        var a = this.J.getOption("captions", "track");
        g.nd(a) || pDb(this, a)
    };
    g.k.Mc = function(a) {
        this.module.Mc(a, this.J.getVideoData().lengthSeconds)
    };
    g.k.Q9 = function() {
        g.nd(this.C) || qDb(this, this.C);
        this.D = !1
    };
    g.k.fZ = function(a, b) {
        this.B.stop();
        2 === b && this.F_()
    };
    g.k.xE = function() {
        if (j$(this)) {
            this.j.stop();
            var a = M9(this.Fc);
            switch (a.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.Ph = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.Ph = 0;
                    break;
                default:
                    this.module.Ph = -1
            }
            switch (a.playerState) {
                case 1081:
                case 1:
                    this.Cc(new g.UL(8));
                    this.E_();
                    break;
                case 1085:
                case 3:
                    this.Cc(new g.UL(9));
                    break;
                case 1083:
                case 0:
                    this.Cc(new g.UL(2));
                    this.K.stop();
                    this.Mc(this.J.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Cc(new g.UL(4));
                    break;
                case 2:
                    this.Cc(new g.UL(4));
                    this.Mc(I9(a));
                    break;
                case -1:
                    this.Cc(new g.UL(64));
                    break;
                case -1E3:
                    this.Cc(new g.UL(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        wH: 2
                    }))
            }
            a = M9(this.Fc).trackData;
            var b = this.C;
            (a || b ? a && b && a.trackName == b.trackName && a.languageCode == b.languageCode && a.languageName == b.languageName && a.kind == b.kind : 1) || (this.C = a, qDb(this, a));
            a = M9(this.Fc); - 1 === a.volume || Math.round(this.J.getVolume()) === a.volume && this.J.isMuted() === a.muted || this.Z.isActive() || this.x0()
        } else oDb(this)
    };
    g.k.cZ = function() {
        this.J.oa("mdxpreviousnextchange")
    };
    g.k.AJ = function() {
        j$(this) || oDb(this)
    };
    g.k.XY = function(a) {
        isNaN(a) || this.J.oa("mdxnowautoplaying", a)
    };
    g.k.CY = function() {
        this.J.oa("mdxautoplaycanceled")
    };
    g.k.setAudioTrack = function(a) {
        j$(this) && this.Fc.setAudioTrack(this.J.getVideoData(1).videoId, a)
    };
    g.k.seekTo = function(a, b) {
        -1 === M9(this.Fc).playerState ? k$(this, a) : b && this.Fc.seekTo(a)
    };
    g.k.x0 = function() {
        var a = this;
        if (j$(this)) {
            var b = M9(this.Fc);
            this.events.Pc(this.W);
            b.muted ? this.J.mute() : this.J.unMute();
            this.J.setVolume(b.volume);
            this.W = this.events.T(this.J, "onVolumeChange", function(c) {
                lDb(a, c)
            })
        }
    };
    g.k.E_ = function() {
        this.j.stop();
        if (!this.Fc.isDisposed()) {
            var a = M9(this.Fc);
            a.isPlaying() && this.Cc(new g.UL(8));
            this.Mc(I9(a));
            this.j.start()
        }
    };
    g.k.F_ = function() {
        this.B.stop();
        this.j.stop();
        var a = this.Fc.Os();
        2 == this.Fc.C && !isNaN(a) && this.B.start()
    };
    g.k.Cc = function(a) {
        this.B.stop();
        var b = this.G;
        if (!g.mCa(b, a)) {
            var c = g.kH(a, 2);
            c !== g.kH(this.G, 2) && this.J.cB(c);
            this.G = a;
            sDb(this.module, b, a)
        }
    };
    g.w(l$, g.V);
    l$.prototype.qd = function() {
        this.j.show()
    };
    l$.prototype.Pb = function() {
        this.j.hide()
    };
    l$.prototype.B = function() {
        m8("mdx-privacy-popup-cancel");
        this.Pb()
    };
    l$.prototype.C = function() {
        m8("mdx-privacy-popup-confirm");
        this.Pb()
    };
    g.w(m$, g.V);
    m$.prototype.onStateChange = function(a) {
        this.Dc(a.state)
    };
    m$.prototype.Dc = function(a) {
        if (3 === this.api.getPresentingPlayerType()) {
            var b = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            a = g.kH(a, 128) ? g.BK("Error on $RECEIVER_NAME", b) : a.isPlaying() || a.isPaused() ? g.BK("Playing on $RECEIVER_NAME", b) : g.BK("Connected to $RECEIVER_NAME", b);
            this.updateValue("statustext", a);
            this.j.show()
        } else this.j.hide()
    };
    g.w(n$, g.SX);
    n$.prototype.D = function() {
        var a = this.J.getOption("remote", "receivers");
        a && 1 < a.length && !this.J.getOption("remote", "quickCast") ? (this.Ot = g.cc(a, this.j, this), g.TX(this, g.Lr(a, this.j)), a = this.J.getOption("remote", "currentReceiver"), a = this.j(a), this.options[a] && this.Nj(a), this.enable(!0)) : this.enable(!1)
    };
    n$.prototype.j = function(a) {
        return a.key
    };
    n$.prototype.Ak = function(a) {
        return "cast-selector-receiver" === a ? "Cast..." : this.Ot[a].name
    };
    n$.prototype.jh = function(a) {
        g.SX.prototype.jh.call(this, a);
        this.J.setOption("remote", "currentReceiver", this.Ot[a]);
        this.Gb.Pb()
    };
    g.w(rDb, g.YV);
    g.k = rDb.prototype;
    g.k.create = function() {
        var a = this.player.U(),
            b = g.vS(a);
        a = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: a.L("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: a.L("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: a.L("enable_cast_short_lived_lounge_token")
        };
        cDb(b, a);
        this.subscriptions.push(g.ZE("yt-remote-before-disconnect", this.k9, this));
        this.subscriptions.push(g.ZE("yt-remote-connection-change", this.D$, this));
        this.subscriptions.push(g.ZE("yt-remote-receiver-availability-change", this.eZ,
            this));
        this.subscriptions.push(g.ZE("yt-remote-auto-connect", this.B$, this));
        this.subscriptions.push(g.ZE("yt-remote-receiver-resumed", this.A$, this));
        this.subscriptions.push(g.ZE("mdx-privacy-popup-confirm", this.cba, this));
        this.subscriptions.push(g.ZE("mdx-privacy-popup-cancel", this.bba, this));
        this.eZ()
    };
    g.k.load = function() {
        this.player.cancelPlayback();
        g.YV.prototype.load.call(this);
        this.Ml = new nDb(this, this.player, this.Fc);
        var a = (a = kDb()) ? a.currentTime : 0;
        var b = hDb() ? new L9(e$(), void 0) : null;
        0 == a && b && (a = I9(M9(b)));
        0 !== a && this.Mc(a);
        sDb(this, this.Fe, this.Fe);
        this.player.Sp(6)
    };
    g.k.unload = function() {
        this.player.oa("mdxautoplaycanceled");
        this.ws = this.Fp;
        g.wb(this.Ml, this.Fc);
        this.Fc = this.Ml = null;
        g.YV.prototype.unload.call(this);
        this.player.Sp(5);
        o$(this)
    };
    g.k.xa = function() {
        g.$E(this.subscriptions);
        g.YV.prototype.xa.call(this)
    };
    g.k.tE = function(a) {
        var b = g.Ia.apply(1, arguments);
        this.loaded && this.Ml.Pk.apply(this.Ml, [a].concat(g.oa(b)))
    };
    g.k.getAdState = function() {
        return this.Ph
    };
    g.k.yp = function() {
        return this.Fc ? M9(this.Fc).yp : !1
    };
    g.k.Qk = function() {
        return this.Fc ? M9(this.Fc).Qk : !1
    };
    g.k.Mc = function(a, b) {
        this.QX = a || 0;
        this.player.oa("progresssync", a, b);
        this.player.xc("onVideoProgress", a || 0)
    };
    g.k.getCurrentTime = function() {
        return this.QX
    };
    g.k.getProgressState = function() {
        var a = M9(this.Fc),
            b = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: 1081 != a.playerState && this.player.Oh(),
            clipEnd: b.clipEnd,
            clipStart: b.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: a.getDuration(),
            ingestionTime: a.B ? a.C + G9(a) : a.C,
            isAtLiveHead: 1 >= (a.B ? a.j + G9(a) : a.j) - this.getCurrentTime(),
            loaded: a.Z,
            seekableEnd: a.B ? a.j + G9(a) : a.j,
            seekableStart: 0 < a.D ? a.D + G9(a) : a.D,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    };
    g.k.nextVideo = function() {
        this.Fc && this.Fc.nextVideo()
    };
    g.k.RJ = function() {
        this.Fc && this.Fc.RJ()
    };
    g.k.k9 = function(a) {
        1 === a && (this.EQ = this.Fc ? M9(this.Fc) : null)
    };
    g.k.D$ = function() {
        var a = hDb() ? new L9(e$(), void 0) : null;
        if (a) {
            var b = this.ws;
            this.loaded && this.unload();
            this.Fc = a;
            this.EQ = null;
            b.key !== this.Fp.key && (this.ws = b, this.load())
        } else g.vb(this.Fc), this.Fc = null, this.loaded && (this.unload(), (a = this.EQ) && a.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(a.videoId, I9(a)));
        this.player.oa("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.k.eZ = function() {
        var a = [this.Fp],
            b = a.concat,
            c = dDb();
        C9() && g.kD("yt-remote-cast-available") && c.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.Ot = b.call(a, c);
        a = fDb() || this.Fp;
        p$(this, a);
        this.player.xc("onMdxReceiversChange")
    };
    g.k.B$ = function() {
        var a = fDb();
        p$(this, a)
    };
    g.k.A$ = function() {
        this.ws = fDb()
    };
    g.k.cba = function() {
        this.PE = !0;
        o$(this);
        i$ = !1;
        f$ && h$(f$, 1);
        f$ = null
    };
    g.k.bba = function() {
        this.PE = !1;
        o$(this);
        p$(this, this.Fp);
        this.ws = this.Fp;
        i$ = !1;
        f$ = null;
        this.player.playVideo()
    };
    g.k.Eh = function(a, b) {
        switch (a) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.Ot;
            case "currentReceiver":
                return b && ("cast-selector-receiver" === b.key ? wCb() : p$(this, b)), this.loaded ? this.ws : this.Fp;
            case "quickCast":
                return 2 === this.Ot.length && "cast-selector-receiver" === this.Ot[1].key ? (b && wCb(), !0) : !1
        }
    };
    g.k.UR = function() {
        this.Fc.UR()
    };
    g.k.rl = function() {
        return !1
    };
    g.k.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.k.isLoggedIn = function() {
        var a, b;
        return void 0 !== (null == (a = g.VB("PLAYER_CONFIG")) ? void 0 : null == (b = a.args) ? void 0 : b.authuser) ? !0 : !(!g.VB("SESSION_INDEX") && !g.VB("LOGGED_IN"))
    };
    g.XV("remote", rDb);
})(_yt_player);
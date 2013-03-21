/*
 * CSS INJECTION
 */
var s = document.createElement('link');
s.setAttribute('href', "http://hugeen.github.com/1gam_sorter/1gam-sorter.css");
s.setAttribute('rel', 'stylesheet');
s.setAttribute('type', 'text/css');
document.getElementsByTagName('head')[0].appendChild(s);

/*
 * SORTER
 */
 
function initSorter(angular, _) {
    
    angular.element("body").attr({
        "ng-app": "sorter"
    });
    
    var months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    
    // Remove the last h1
    angular.element(".walloftext .h1:last").remove();
    
    var h1count = angular.element(".walloftext .h1").length;
    var gamesByMonth = [];
    
    
    var totalGames = 0;
    for(var i = 0; i < h1count-1; i++) {
        
        var $gadivs = angular.element(".walloftext .h1:last ~ div.gadiv");
        var $theme = angular.element(".walloftext .h1:last ~ p.center:first");
        
        gamesByMonth.push({
            month: months[i],
            theme: $theme.text(),
            games: $gadivs,
        });
        
        totalGames += $gadivs.length;
        
        $gadivs.remove();
        $theme.remove();
        
        angular.element(".walloftext .h1:last").remove();
        
    }
    
    angular.element("#bootl").append("<a href='#' id='gamesProcessed'></a>");
    var games = [];
    
    var gamesProcessed = 0;
    var procBy100 = 0;
    
    angular.forEach(gamesByMonth, function(monthData) {
        
        _.defer(function() {
            
            angular.forEach(monthData.games, function(game) {
                _.defer(function() {
                    var $game = angular.element(game);
                    games.push({
                        link: $game.find(".ga").attr("href"),
                        title: $game.find(".ga").attr("title"),
                        name: $game.find(".ganame").text(),
                        description: $game.find(".gabyli").text(),
                        credits: $game.find(".gacred").text(),
                        tags: $game.find(".gatags").text(),
                        about: $game.find(".gabout").text(),
                        author: $game.find(".gauser a").text(),
                        authorLink: $game.find(".gauser a").attr("href"),
                        icon: $game.find(".gaicon").attr("src"),
                        month: monthData.month
                    });
                    gamesProcessed++;
                    procBy100++;
                    if(procBy100 === 100 || gamesProcessed === totalGames) {
                        angular.element("#gamesProcessed").text(gamesProcessed+"/"+totalGames);
                        procBy100 = 0
                    }
                });
            });
            
        });
        
    });

    window.games = games;
    window.gamesByMonth = gamesByMonth;
    window.totalGames = totalGames;
}
 
/*
 * ANGULARJS
 */
 
(function(X, Y, q) {
    'use strict';

    function n(b, a, c) {
        var d;
        if (b) if (H(b)) for (d in b) d != "prototype" && d != "length" && d != "name" && b.hasOwnProperty(d) && a.call(c, b[d], d);
        else if (b.forEach && b.forEach !== n) b.forEach(a, c);
        else if (!b || typeof b.length !== "number" ? 0 : typeof b.hasOwnProperty != "function" && typeof b.constructor != "function" || b instanceof L || ca && b instanceof ca || xa.call(b) !== "[object Object]" || typeof b.callee === "function") for (d = 0; d < b.length; d++) a.call(c, b[d], d);
        else for (d in b) b.hasOwnProperty(d) && a.call(c, b[d], d);
        return b
    }

    function mb(b) {
        var a = [],
            c;
        for (c in b) b.hasOwnProperty(c) && a.push(c);
        return a.sort()
    }

    function fc(b, a, c) {
        for (var d = mb(b), e = 0; e < d.length; e++) a.call(c, b[d[e]], d[e]);
        return d
    }

    function nb(b) {
        return function(a, c) {
            b(c, a)
        }
    }

    function ya() {
        for (var b = aa.length, a; b;) {
            b--;
            a = aa[b].charCodeAt(0);
            if (a == 57) return aa[b] = "A", aa.join("");
            if (a == 90) aa[b] = "0";
            else return aa[b] = String.fromCharCode(a + 1), aa.join("")
        }
        aa.unshift("0");
        return aa.join("")
    }

    function v(b) {
        n(arguments, function(a) {
            a !== b && n(a, function(a, d) {
                b[d] = a
            })
        });
        return b
    }

    function E(b) {
        return parseInt(b, 10)
    }

    function za(b, a) {
        return v(new(v(function() {}, {
            prototype: b
        })), a)
    }

    function C() {}

    function na(b) {
        return b
    }

    function I(b) {
        return function() {
            return b
        }
    }

    function w(b) {
        return typeof b == "undefined"
    }

    function x(b) {
        return typeof b != "undefined"
    }

    function M(b) {
        return b != null && typeof b == "object"
    }

    function A(b) {
        return typeof b == "string"
    }

    function Ra(b) {
        return typeof b == "number"
    }

    function oa(b) {
        return xa.apply(b) == "[object Date]"
    }

    function B(b) {
        return xa.apply(b) == "[object Array]"
    }

    function H(b) {
        return typeof b == "function"
    }

    function pa(b) {
        return b && b.document && b.location && b.alert && b.setInterval
    }

    function O(b) {
        return A(b) ? b.replace(/^\s*/, "").replace(/\s*$/, "") : b
    }

    function gc(b) {
        return b && (b.nodeName || b.bind && b.find)
    }

    function Sa(b, a, c) {
        var d = [];
        n(b, function(b, g, h) {
            d.push(a.call(c, b, g, h))
        });
        return d
    }

    function Aa(b, a) {
        if (b.indexOf) return b.indexOf(a);
        for (var c = 0; c < b.length; c++) if (a === b[c]) return c;
        return -1
    }

    function Ta(b, a) {
        var c = Aa(b, a);
        c >= 0 && b.splice(c, 1);
        return a
    }

    function U(b, a) {
        if (pa(b) || b && b.$evalAsync && b.$watch) throw Error("Can't copy Window or Scope");
        if (a) {
            if (b === a) throw Error("Can't copy equivalent objects or arrays");
            if (B(b)) for (var c = a.length = 0; c < b.length; c++) a.push(U(b[c]));
            else for (c in n(a, function(b, c) {
                delete a[c]
            }), b) a[c] = U(b[c])
        } else(a = b) && (B(b) ? a = U(b, []) : oa(b) ? a = new Date(b.getTime()) : M(b) && (a = U(b, {})));
        return a
    }

    function hc(b, a) {
        var a = a || {},
            c;
        for (c in b) b.hasOwnProperty(c) && c.substr(0, 2) !== "$$" && (a[c] = b[c]);
        return a
    }

    function ga(b, a) {
        if (b === a) return !0;
        if (b === null || a === null) return !1;
        if (b !== b && a !== a) return !0;
        var c = typeof b,
            d;
        if (c == typeof a && c == "object") if (B(b)) {
            if ((c = b.length) == a.length) {
                for (d = 0; d < c; d++) if (!ga(b[d], a[d])) return !1;
                return !0
            }
        } else if (oa(b)) return oa(a) && b.getTime() == a.getTime();
        else {
            if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || pa(b) || pa(a)) return !1;
            c = {};
            for (d in b) if (!(d.charAt(0) === "$" || H(b[d]))) {
                if (!ga(b[d], a[d])) return !1;
                c[d] = !0
            }
            for (d in a) if (!c[d] && d.charAt(0) !== "$" && a[d] !== q && !H(a[d])) return !1;
            return !0
        }
        return !1
    }

    function Ua(b, a) {
        var c = arguments.length > 2 ? ha.call(arguments, 2) : [];
        return H(a) && !(a instanceof RegExp) ? c.length ?
        function() {
            return arguments.length ? a.apply(b, c.concat(ha.call(arguments, 0))) : a.apply(b, c)
        } : function() {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        } : a
    }

    function ic(b, a) {
        var c = a;
        /^\$+/.test(b) ? c = q : pa(a) ? c = "$WINDOW" : a && Y === a ? c = "$DOCUMENT" : a && a.$evalAsync && a.$watch && (c = "$SCOPE");
        return c
    }

    function da(b, a) {
        return JSON.stringify(b, ic, a ? "  " : null)
    }

    function ob(b) {
        return A(b) ? JSON.parse(b) : b
    }

    function Va(b) {
        b && b.length !== 0 ? (b = y("" + b), b = !(b == "f" || b == "0" || b == "false" || b == "no" || b == "n" || b == "[]")) : b = !1;
        return b
    }

    function qa(b) {
        b = u(b).clone();
        try {
            b.html("")
        } catch (a) {}
        var c = u("<div>").append(b).html();
        try {
            return b[0].nodeType === 3 ? y(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                return "<" + y(b)
            })
        } catch (d) {
            return y(c)
        }
    }

    function Wa(b) {
        var a = {},
            c, d;
        n((b || "").split("&"), function(b) {
            b && (c = b.split("="), d = decodeURIComponent(c[0]), a[d] = x(c[1]) ? decodeURIComponent(c[1]) : !0)
        });
        return a
    }

    function pb(b) {
        var a = [];
        n(b, function(b, d) {
            a.push(Xa(d, !0) + (b === !0 ? "" : "=" + Xa(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }

    function Ya(b) {
        return Xa(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Xa(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(a ? null : /%20/g, "+")
    }

    function jc(b, a) {
        function c(a) {
            a && d.push(a)
        }
        var d = [b],
            e, g, h = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
            f = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        n(h, function(a) {
            h[a] = !0;
            c(Y.getElementById(a));
            a = a.replace(":", "\\:");
            b.querySelectorAll && (n(b.querySelectorAll("." + a), c), n(b.querySelectorAll("." + a + "\\:"), c), n(b.querySelectorAll("[" + a + "]"), c))
        });
        n(d, function(a) {
            if (!e) {
                var b = f.exec(" " + a.className + " ");
                b ? (e = a, g = (b[2] || "").replace(/\s+/g, ",")) : n(a.attributes, function(b) {
                    if (!e && h[b.name]) e = a, g = b.value
                })
            }
        });
        e && a(e, g ? [g] : [])
    }

    function qb(b, a) {
        b = u(b);
        a = a || [];
        a.unshift(["$provide", function(a) {
            a.value("$rootElement", b)
        }]);
        a.unshift("ng");
        var c = rb(a);
        c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function(a, b, c, h) {
            a.$apply(function() {
                b.data("$injector", h);
                c(b)(a)
            })
        }]);
        return c
    }

    function Za(b, a) {
        a = a || "_";
        return b.replace(kc, function(b, d) {
            return (d ? a : "") + b.toLowerCase()
        })
    }

    function $a(b, a, c) {
        if (!b) throw Error("Argument '" + (a || "?") + "' is " + (c || "required"));
        return b
    }

    function ra(b, a, c) {
        c && B(b) && (b = b[b.length - 1]);
        $a(H(b), a, "not a function, got " + (b && typeof b == "object" ? b.constructor.name || "Object" : typeof b));
        return b
    }

    function lc(b) {
        function a(a, b, e) {
            return a[b] || (a[b] = e())
        }
        return a(a(b, "angular", Object), "module", function() {
            var b = {};
            return function(d, e, g) {
                e && b.hasOwnProperty(d) && (b[d] = null);
                return a(b, d, function() {
                    function a(c, d, e) {
                        return function() {
                            b[e || "push"]([c, d, arguments]);
                            return k
                        }
                    }
                    if (!e) throw Error("No module: " + d);
                    var b = [],
                        c = [],
                        i = a("$injector", "invoke"),
                        k = {
                            _invokeQueue: b,
                            _runBlocks: c,
                            requires: e,
                            name: d,
                            provider: a("$provide", "provider"),
                            factory: a("$provide", "factory"),
                            service: a("$provide", "service"),
                            value: a("$provide", "value"),
                            constant: a("$provide", "constant", "unshift"),
                            filter: a("$filterProvider", "register"),
                            controller: a("$controllerProvider", "register"),
                            directive: a("$compileProvider", "directive"),
                            config: i,
                            run: function(a) {
                                c.push(a);
                                return this
                            }
                        };
                    g && i(g);
                    return k
                })
            }
        })
    }

    function sb(b) {
        return b.replace(mc, function(a, b, d, e) {
            return e ? d.toUpperCase() : d
        }).replace(nc, "Moz$1")
    }

    function ab(b, a) {
        function c() {
            var e;
            for (var b = [this], c = a, h, f, j, i, k, m; b.length;) {
                h = b.shift();
                f = 0;
                for (j = h.length; f < j; f++) {
                    i = u(h[f]);
                    c ? i.triggerHandler("$destroy") : c = !c;
                    k = 0;
                    for (e = (m = i.children()).length, i = e; k < i; k++) b.push(ca(m[k]))
                }
            }
            return d.apply(this, arguments)
        }
        var d = ca.fn[b],
            d = d.$original || d;
        c.$original = d;
        ca.fn[b] = c
    }

    function L(b) {
        if (b instanceof L) return b;
        if (!(this instanceof L)) {
            if (A(b) && b.charAt(0) != "<") throw Error("selectors not implemented");
            return new L(b)
        }
        if (A(b)) {
            var a = Y.createElement("div");
            a.innerHTML = "<div>&#160;</div>" + b;
            a.removeChild(a.firstChild);
            bb(this, a.childNodes);
            this.remove()
        } else bb(this, b)
    }

    function cb(b) {
        return b.cloneNode(!0)
    }

    function sa(b) {
        tb(b);
        for (var a = 0, b = b.childNodes || []; a < b.length; a++) sa(b[a])
    }

    function ub(b, a, c) {
        var d = ba(b, "events");
        ba(b, "handle") && (w(a) ? n(d, function(a, c) {
            db(b, c, a);
            delete d[c]
        }) : w(c) ? (db(b, a, d[a]), delete d[a]) : Ta(d[a], c))
    }

    function tb(b) {
        var a = b[Ba],
            c = Ca[a];
        c && (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), ub(b)), delete Ca[a], b[Ba] = q)
    }

    function ba(b, a, c) {
        var d = b[Ba],
            d = Ca[d || -1];
        if (x(c)) d || (b[Ba] = d = ++oc, d = Ca[d] = {}), d[a] = c;
        else return d && d[a]
    }

    function vb(b, a, c) {
        var d = ba(b, "data"),
            e = x(c),
            g = !e && x(a),
            h = g && !M(a);
        !d && !h && ba(b, "data", d = {});
        if (e) d[a] = c;
        else if (g) if (h) return d && d[a];
        else v(d, a);
        else return d
    }

    function Da(b, a) {
        return (" " + b.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") > -1
    }

    function wb(b, a) {
        a && n(a.split(" "), function(a) {
            b.className = O((" " + b.className + " ").replace(/[\n\t]/g, " ").replace(" " + O(a) + " ", " "))
        })
    }

    function xb(b, a) {
        a && n(a.split(" "), function(a) {
            if (!Da(b, a)) b.className = O(b.className + " " + O(a))
        })
    }

    function bb(b, a) {
        if (a) for (var a = !a.nodeName && x(a.length) && !pa(a) ? a : [a], c = 0; c < a.length; c++) b.push(a[c])
    }

    function yb(b, a) {
        return Ea(b, "$" + (a || "ngController") + "Controller")
    }

    function Ea(b, a, c) {
        b = u(b);
        for (b[0].nodeType == 9 && (b = b.find("html")); b.length;) {
            if (c = b.data(a)) return c;
            b = b.parent()
        }
    }

    function zb(b, a) {
        var c = Fa[a.toLowerCase()];
        return c && Ab[b.nodeName] && c
    }

    function pc(b, a) {
        var c = function(c, e) {
                if (!c.preventDefault) c.preventDefault = function() {
                    c.returnValue = !1
                };
                if (!c.stopPropagation) c.stopPropagation = function() {
                    c.cancelBubble = !0
                };
                if (!c.target) c.target = c.srcElement || Y;
                if (w(c.defaultPrevented)) {
                    var g = c.preventDefault;
                    c.preventDefault = function() {
                        c.defaultPrevented = !0;
                        g.call(c)
                    };
                    c.defaultPrevented = !1
                }
                c.isDefaultPrevented = function() {
                    return c.defaultPrevented
                };
                n(a[e || c.type], function(a) {
                    a.call(b, c)
                });
                Z <= 8 ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented)
            };
        c.elem = b;
        return c
    }

    function fa(b) {
        var a = typeof b,
            c;
        if (a == "object" && b !== null) if (typeof(c = b.$$hashKey) == "function") c = b.$$hashKey();
        else {
            if (c === q) c = b.$$hashKey = ya()
        } else c = b;
        return a + ":" + c
    }

    function Ga(b) {
        n(b, this.put, this)
    }

    function eb() {}

    function Bb(b) {
        var a, c;
        if (typeof b == "function") {
            if (!(a = b.$inject)) a = [], c = b.toString().replace(qc, ""), c = c.match(rc), n(c[1].split(sc), function(b) {
                b.replace(tc, function(b, c, d) {
                    a.push(d)
                })
            }), b.$inject = a
        } else B(b) ? (c = b.length - 1, ra(b[c], "fn"), a = b.slice(0, c)) : ra(b, "fn", !0);
        return a
    }

    function rb(b) {
        function a(a) {
            return function(b, c) {
                if (M(b)) n(b, nb(a));
                else return a(b, c)
            }
        }

        function c(a, b) {
            if (H(b) || B(b)) b = m.instantiate(b);
            if (!b.$get) throw Error("Provider " + a + " must define $get factory method.");
            return k[a + f] = b
        }

        function d(a, b) {
            return c(a, {
                $get: b
            })
        }

        function e(a) {
            var b = [];
            n(a, function(a) {
                if (!i.get(a)) if (i.put(a, !0), A(a)) {
                    var c = ta(a);
                    b = b.concat(e(c.requires)).concat(c._runBlocks);
                    try {
                        for (var d = c._invokeQueue, c = 0, f = d.length; c < f; c++) {
                            var g = d[c],
                                h = g[0] == "$injector" ? m : m.get(g[0]);
                            h[g[1]].apply(h, g[2])
                        }
                    } catch (j) {
                        throw j.message && (j.message += " from " + a), j;
                    }
                } else if (H(a)) try {
                    b.push(m.invoke(a))
                } catch (o) {
                    throw o.message && (o.message += " from " + a), o;
                } else if (B(a)) try {
                    b.push(m.invoke(a))
                } catch (k) {
                    throw k.message && (k.message += " from " + String(a[a.length - 1])), k;
                } else ra(a, "module")
            });
            return b
        }

        function g(a, b) {
            function c(d) {
                if (typeof d !== "string") throw Error("Service name expected");
                if (a.hasOwnProperty(d)) {
                    if (a[d] === h) throw Error("Circular dependency: " + j.join(" <- "));
                    return a[d]
                } else try {
                    return j.unshift(d), a[d] = h, a[d] = b(d)
                } finally {
                    j.shift()
                }
            }

            function d(a, b, e) {
                var f = [],
                    i = Bb(a),
                    g, h, j;
                h = 0;
                for (g = i.length; h < g; h++) j = i[h], f.push(e && e.hasOwnProperty(j) ? e[j] : c(j));
                a.$inject || (a = a[g]);
                switch (b ? -1 : f.length) {
                case 0:
                    return a();
                case 1:
                    return a(f[0]);
                case 2:
                    return a(f[0], f[1]);
                case 3:
                    return a(f[0], f[1], f[2]);
                case 4:
                    return a(f[0], f[1], f[2], f[3]);
                case 5:
                    return a(f[0], f[1], f[2], f[3], f[4]);
                case 6:
                    return a(f[0], f[1], f[2], f[3], f[4], f[5]);
                case 7:
                    return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6]);
                case 8:
                    return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7]);
                case 9:
                    return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8]);
                case 10:
                    return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9]);
                default:
                    return a.apply(b, f)
                }
            }
            return {
                invoke: d,
                instantiate: function(a, b) {
                    var c = function() {},
                        e;
                    c.prototype = (B(a) ? a[a.length - 1] : a).prototype;
                    c = new c;
                    e = d(a, c, b);
                    return M(e) ? e : c
                },
                get: c,
                annotate: Bb
            }
        }
        var h = {},
            f = "Provider",
            j = [],
            i = new Ga,
            k = {
                $provide: {
                    provider: a(c),
                    factory: a(d),
                    service: a(function(a, b) {
                        return d(a, ["$injector", function(a) {
                            return a.instantiate(b)
                        }])
                    }),
                    value: a(function(a, b) {
                        return d(a, I(b))
                    }),
                    constant: a(function(a, b) {
                        k[a] = b;
                        l[a] = b
                    }),
                    decorator: function(a, b) {
                        var c = m.get(a + f),
                            d = c.$get;
                        c.$get = function() {
                            var a = t.invoke(d, c);
                            return t.invoke(b, null, {
                                $delegate: a
                            })
                        }
                    }
                }
            },
            m = g(k, function() {
                throw Error("Unknown provider: " + j.join(" <- "));
            }),
            l = {},
            t = l.$injector = g(l, function(a) {
                a = m.get(a + f);
                return t.invoke(a.$get, a)
            });
        n(e(b), function(a) {
            t.invoke(a || C)
        });
        return t
    }

    function uc() {
        var b = !0;
        this.disableAutoScrolling = function() {
            b = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function(a, c, d) {
            function e(a) {
                var b = null;
                n(a, function(a) {
                    !b && y(a.nodeName) === "a" && (b = a)
                });
                return b
            }

            function g() {
                var b = c.hash(),
                    d;
                b ? (d = h.getElementById(b)) ? d.scrollIntoView() : (d = e(h.getElementsByName(b))) ? d.scrollIntoView() : b === "top" && a.scrollTo(0, 0) : a.scrollTo(0, 0)
            }
            var h = a.document;
            b && d.$watch(function() {
                return c.hash()
            }, function() {
                d.$evalAsync(g)
            });
            return g
        }]
    }

    function vc(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, ha.call(arguments, 1))
            } finally {
                if (o--, o === 0) for (; p.length;) try {
                    p.pop()()
                } catch (b) {
                    c.error(b)
                }
            }
        }

        function g(a, b) {
            (function R() {
                n(s, function(a) {
                    a()
                });
                J = b(R, a)
            })()
        }

        function h() {
            F != f.url() && (F = f.url(), n(V, function(a) {
                a(f.url())
            }))
        }
        var f = this,
            j = a[0],
            i = b.location,
            k = b.history,
            m = b.setTimeout,
            l = b.clearTimeout,
            t = {};
        f.isMock = !1;
        var o = 0,
            p = [];
        f.$$completeOutstandingRequest = e;
        f.$$incOutstandingRequestCount = function() {
            o++
        };
        f.notifyWhenNoOutstandingRequests = function(a) {
            n(s, function(a) {
                a()
            });
            o === 0 ? a() : p.push(a)
        };
        var s = [],
            J;
        f.addPollFn = function(a) {
            w(J) && g(100, m);
            s.push(a);
            return a
        };
        var F = i.href,
            z = a.find("base");
        f.url = function(a, b) {
            if (a) {
                if (F != a) return F = a, d.history ? b ? k.replaceState(null, "", a) : (k.pushState(null, "", a), z.attr("href", z.attr("href"))) : b ? i.replace(a) : i.href = a, f
            } else return i.href.replace(/%27/g, "'")
        };
        var V = [],
            K = !1;
        f.onUrlChange = function(a) {
            K || (d.history && u(b).bind("popstate", h), d.hashchange ? u(b).bind("hashchange", h) : f.addPollFn(h), K = !0);
            V.push(a);
            return a
        };
        f.baseHref = function() {
            var a = z.attr("href");
            return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : ""
        };
        var r = {},
            $ = "",
            P = f.baseHref();
        f.cookies = function(a, b) {
            var d, e, f, i;
            if (a) if (b === q) j.cookie = escape(a) + "=;path=" + P + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
            else {
                if (A(b)) d = (j.cookie = escape(a) + "=" + escape(b) + ";path=" + P).length + 1, d > 4096 && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")
            } else {
                if (j.cookie !== $) {
                    $ = j.cookie;
                    d = $.split("; ");
                    r = {};
                    for (f = 0; f < d.length; f++) e = d[f], i = e.indexOf("="), i > 0 && (r[unescape(e.substring(0, i))] = unescape(e.substring(i + 1)))
                }
                return r
            }
        };
        f.defer = function(a, b) {
            var c;
            o++;
            c = m(function() {
                delete t[c];
                e(a)
            }, b || 0);
            t[c] = !0;
            return c
        };
        f.defer.cancel = function(a) {
            return t[a] ? (delete t[a], l(a), e(C), !0) : !1
        }
    }

    function wc() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function(b, a, c, d) {
            return new vc(b, d, a, c)
        }]
    }

    function xc() {
        this.$get = function() {
            function b(b, d) {
                function e(a) {
                    if (a != m) {
                        if (l) {
                            if (l == a) l = a.n
                        } else l = a;
                        g(a.n, a.p);
                        g(a, m);
                        m = a;
                        m.n = null
                    }
                }

                function g(a, b) {
                    if (a != b) {
                        if (a) a.p = b;
                        if (b) b.n = a
                    }
                }
                if (b in a) throw Error("cacheId " + b + " taken");
                var h = 0,
                    f = v({}, d, {
                        id: b
                    }),
                    j = {},
                    i = d && d.capacity || Number.MAX_VALUE,
                    k = {},
                    m = null,
                    l = null;
                return a[b] = {
                    put: function(a, b) {
                        var c = k[a] || (k[a] = {
                            key: a
                        });
                        e(c);
                        w(b) || (a in j || h++, j[a] = b, h > i && this.remove(l.key))
                    },
                    get: function(a) {
                        var b = k[a];
                        if (b) return e(b), j[a]
                    },
                    remove: function(a) {
                        var b = k[a];
                        if (b) {
                            if (b == m) m = b.p;
                            if (b == l) l = b.n;
                            g(b.n, b.p);
                            delete k[a];
                            delete j[a];
                            h--
                        }
                    },
                    removeAll: function() {
                        j = {};
                        h = 0;
                        k = {};
                        m = l = null
                    },
                    destroy: function() {
                        k = f = j = null;
                        delete a[b]
                    },
                    info: function() {
                        return v({}, f, {
                            size: h
                        })
                    }
                }
            }
            var a = {};
            b.info = function() {
                var b = {};
                n(a, function(a, e) {
                    b[e] = a.info()
                });
                return b
            };
            b.get = function(b) {
                return a[b]
            };
            return b
        }
    }

    function yc() {
        this.$get = ["$cacheFactory", function(b) {
            return b("templates")
        }]
    }

    function Cb(b) {
        var a = {},
            c = "Directive",
            d = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
            e = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/,
            g = "Template must have exactly one root element. was: ",
            h = /^\s*(https?|ftp|mailto):/;
        this.directive = function j(d, e) {
            A(d) ? ($a(e, "directive"), a.hasOwnProperty(d) || (a[d] = [], b.factory(d + c, ["$injector", "$exceptionHandler", function(b, c) {
                var e = [];
                n(a[d], function(a) {
                    try {
                        var g = b.invoke(a);
                        if (H(g)) g = {
                            compile: I(g)
                        };
                        else if (!g.compile && g.link) g.compile = I(g.link);
                        g.priority = g.priority || 0;
                        g.name = g.name || d;
                        g.require = g.require || g.controller && g.name;
                        g.restrict = g.restrict || "A";
                        e.push(g)
                    } catch (h) {
                        c(h)
                    }
                });
                return e
            }])), a[d].push(e)) : n(d, nb(j));
            return this
        };
        this.urlSanitizationWhitelist = function(a) {
            return x(a) ? (h = a, this) : h
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", function(b, i, k, m, l, t, o, p, s) {
            function J(a, b, c) {
                a instanceof u || (a = u(a));
                n(a, function(b, c) {
                    b.nodeType == 3 && b.nodeValue.match(/\S+/) && (a[c] = u(b).wrap("<span></span>").parent()[0])
                });
                var d = z(a, b, a, c);
                return function(b, c) {
                    $a(b, "scope");
                    for (var e = c ? va.clone.call(a) : a, g = 0, i = e.length; g < i; g++) {
                        var h = e[g];
                        (h.nodeType == 1 || h.nodeType == 9) && e.eq(g).data("$scope", b)
                    }
                    F(e, "ng-scope");
                    c && c(e, b);
                    d && d(b, e, e);
                    return e
                }
            }

            function F(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {}
            }

            function z(a, b, c, d) {
                function e(a, c, d, i) {
                    var h, j, k, o, l, m, t, s = [];
                    l = 0;
                    for (m = c.length; l < m; l++) s.push(c[l]);
                    t = l = 0;
                    for (m = g.length; l < m; t++) j = s[t], c = g[l++], h = g[l++], c ? (c.scope ? (k = a.$new(M(c.scope)), u(j).data("$scope", k)) : k = a, (o = c.transclude) || !i && b ? c(h, k, j, d, function(b) {
                        return function(c) {
                            var d = a.$new();
                            d.$$transcluded = !0;
                            return b(d, c).bind("$destroy", Ua(d, d.$destroy))
                        }
                    }(o || b)) : c(h, k, j, q, i)) : h && h(a, j.childNodes, q, i)
                }
                for (var g = [], i, h, j, k = 0; k < a.length; k++) h = new ia, i = V(a[k], [], h, d), h = (i = i.length ? K(i, a[k], h, b, c) : null) && i.terminal || !a[k].childNodes.length ? null : z(a[k].childNodes, i ? i.transclude : b), g.push(i), g.push(h), j = j || i || h;
                return j ? e : null
            }

            function V(a, b, c, i) {
                var g = c.$attr,
                    h;
                switch (a.nodeType) {
                case 1:
                    r(b, ea(fb(a).toLowerCase()), "E", i);
                    var j, k, l;
                    h = a.attributes;
                    for (var o = 0, m = h && h.length; o < m; o++) if (j = h[o], j.specified) k = j.name, l = ea(k.toLowerCase()), g[l] = k, c[l] = j = O(Z && k == "href" ? decodeURIComponent(a.getAttribute(k, 2)) : j.value), zb(a, l) && (c[l] = !0), R(a, b, j, l), r(b, l, "A", i);
                    a = a.className;
                    if (A(a) && a !== "") for (; h = e.exec(a);) l = ea(h[2]), r(b, l, "C", i) && (c[l] = O(h[3])), a = a.substr(h.index + h[0].length);
                    break;
                case 3:
                    x(b, a.nodeValue);
                    break;
                case 8:
                    try {
                        if (h = d.exec(a.nodeValue)) l = ea(h[1]), r(b, l, "M", i) && (c[l] = O(h[2]))
                    } catch (t) {}
                }
                b.sort(G);
                return b
            }

            function K(a, b, c, d, e) {
                function i(a, b) {
                    if (a) a.require = r.require, m.push(a);
                    if (b) b.require = r.require, s.push(b)
                }

                function h(a, b) {
                    var c, d = "data",
                        e = !1;
                    if (A(a)) {
                        for (;
                        (c = a.charAt(0)) == "^" || c == "?";) a = a.substr(1), c == "^" && (d = "inheritedData"), e = e || c == "?";
                        c = b[d]("$" + a + "Controller");
                        if (!c && !e) throw Error("No controller: " + a);
                    } else B(a) && (c = [], n(a, function(a) {
                        c.push(h(a, b))
                    }));
                    return c
                }

                function j(a, d, e, i, g) {
                    var l, p, r, D, F;
                    l = b === e ? c : hc(c, new ia(u(e), c.$attr));
                    p = l.$$element;
                    if (K) {
                        var J = /^\s*([@=&])\s*(\w*)\s*$/,
                            ja = d.$parent || d;
                        n(K.scope, function(a, b) {
                            var c = a.match(J) || [],
                                e = c[2] || b,
                                c = c[1],
                                i, g, h;
                            d.$$isolateBindings[b] = c + e;
                            switch (c) {
                            case "@":
                                l.$observe(e, function(a) {
                                    d[b] = a
                                });
                                l.$$observers[e].$$scope = ja;
                                break;
                            case "=":
                                g = t(l[e]);
                                h = g.assign ||
                                function() {
                                    i = d[b] = g(ja);
                                    throw Error(Db + l[e] + " (directive: " + K.name + ")");
                                };
                                i = d[b] = g(ja);
                                d.$watch(function() {
                                    var a = g(ja);
                                    a !== d[b] && (a !== i ? i = d[b] = a : h(ja, a = i = d[b]));
                                    return a
                                });
                                break;
                            case "&":
                                g = t(l[e]);
                                d[b] = function(a) {
                                    return g(ja, a)
                                };
                                break;
                            default:
                                throw Error("Invalid isolate scope definition for directive " + K.name + ": " + a);
                            }
                        })
                    }
                    x && n(x, function(a) {
                        var b = {
                            $scope: d,
                            $element: p,
                            $attrs: l,
                            $transclude: g
                        };
                        F = a.controller;
                        F == "@" && (F = l[a.name]);
                        p.data("$" + a.name + "Controller", o(F, b))
                    });
                    i = 0;
                    for (r = m.length; i < r; i++) try {
                        D = m[i], D(d, p, l, D.require && h(D.require, p))
                    } catch (z) {
                        k(z, qa(p))
                    }
                    a && a(d, e.childNodes, q, g);
                    i = 0;
                    for (r = s.length; i < r; i++) try {
                        D = s[i], D(d, p, l, D.require && h(D.require, p))
                    } catch (zc) {
                        k(zc, qa(p))
                    }
                }
                for (var l = -Number.MAX_VALUE, m = [], s = [], p = null, K = null, z = null, D = c.$$element = u(b), r, G, S, ka, R = d, x, w, W, v = 0, y = a.length; v < y; v++) {
                    r = a[v];
                    S = q;
                    if (l > r.priority) break;
                    if (W = r.scope) ua("isolated scope", K, r, D), M(W) && (F(D, "ng-isolate-scope"), K = r), F(D, "ng-scope"), p = p || r;
                    G = r.name;
                    if (W = r.controller) x = x || {}, ua("'" + G + "' controller", x[G], r, D), x[G] = r;
                    if (W = r.transclude) ua("transclusion", ka, r, D), ka = r, l = r.priority, W == "element" ? (S = u(b), D = c.$$element = u(Y.createComment(" " + G + ": " + c[G] + " ")), b = D[0], C(e, u(S[0]), b), R = J(S, d, l)) : (S = u(cb(b)).contents(), D.html(""), R = J(S, d));
                    if (W = r.template) if (ua("template", z, r, D), z = r, W = Eb(W), r.replace) {
                        S = u("<div>" + O(W) + "</div>").contents();
                        b = S[0];
                        if (S.length != 1 || b.nodeType !== 1) throw Error(g + W);
                        C(e, D, b);
                        G = {
                            $attr: {}
                        };
                        a = a.concat(V(b, a.splice(v + 1, a.length - (v + 1)), G));
                        $(c, G);
                        y = a.length
                    } else D.html(W);
                    if (r.templateUrl) ua("template", z, r, D), z = r, j = P(a.splice(v, a.length - v), j, D, c, e, r.replace, R), y = a.length;
                    else if (r.compile) try {
                        w = r.compile(D, c, R), H(w) ? i(null, w) : w && i(w.pre, w.post)
                    } catch (E) {
                        k(E, qa(D))
                    }
                    if (r.terminal) j.terminal = !0, l = Math.max(l, r.priority)
                }
                j.scope = p && p.scope;
                j.transclude = ka && R;
                return j
            }

            function r(d, e, i, g) {
                var h = !1;
                if (a.hasOwnProperty(e)) for (var l, e = b.get(e + c), o = 0, m = e.length; o < m; o++) try {
                    if (l = e[o], (g === q || g > l.priority) && l.restrict.indexOf(i) != -1) d.push(l), h = !0
                } catch (t) {
                    k(t)
                }
                return h
            }

            function $(a, b) {
                var c = b.$attr,
                    d = a.$attr,
                    e = a.$$element;
                n(a, function(d, e) {
                    e.charAt(0) != "$" && (b[e] && (d += (e === "style" ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                });
                n(b, function(b, i) {
                    i == "class" ? (F(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : i == "style" ? e.attr("style", e.attr("style") + ";" + b) : i.charAt(0) != "$" && !a.hasOwnProperty(i) && (a[i] = b, d[i] = c[i])
                })
            }

            function P(a, b, c, d, e, i, h) {
                var j = [],
                    k, o, t = c[0],
                    s = a.shift(),
                    p = v({}, s, {
                        controller: null,
                        templateUrl: null,
                        transclude: null,
                        scope: null
                    });
                c.html("");
                m.get(s.templateUrl, {
                    cache: l
                }).success(function(l) {
                    var m, s, l = Eb(l);
                    if (i) {
                        s = u("<div>" + O(l) + "</div>").contents();
                        m = s[0];
                        if (s.length != 1 || m.nodeType !== 1) throw Error(g + l);
                        l = {
                            $attr: {}
                        };
                        C(e, c, m);
                        V(m, a, l);
                        $(d, l)
                    } else m = t, c.html(l);
                    a.unshift(p);
                    k = K(a, m, d, h);
                    for (o = z(c.contents(), h); j.length;) {
                        var ia = j.pop(),
                            l = j.pop();
                        s = j.pop();
                        var r = j.pop(),
                            D = m;
                        s !== t && (D = cb(m), C(l, u(s), D));
                        k(function() {
                            b(o, r, D, e, ia)
                        }, r, D, e, ia)
                    }
                    j = null
                }).error(function(a, b, c, d) {
                    throw Error("Failed to load template: " + d.url);
                });
                return function(a, c, d, e, i) {
                    j ? (j.push(c), j.push(d), j.push(e), j.push(i)) : k(function() {
                        b(o, c, d, e, i)
                    }, c, d, e, i)
                }
            }

            function G(a, b) {
                return b.priority - a.priority
            }

            function ua(a, b, c, d) {
                if (b) throw Error("Multiple directives [" + b.name + ", " + c.name + "] asking for " + a + " on: " + qa(d));
            }

            function x(a, b) {
                var c = i(b, !0);
                c && a.push({
                    priority: 0,
                    compile: I(function(a, b) {
                        var d = b.parent(),
                            e = d.data("$binding") || [];
                        e.push(c);
                        F(d.data("$binding", e), "ng-binding");
                        a.$watch(c, function(a) {
                            b[0].nodeValue = a
                        })
                    })
                })
            }

            function R(a, b, c, d) {
                var e = i(c, !0);
                e && b.push({
                    priority: 100,
                    compile: I(function(a, b, c) {
                        b = c.$$observers || (c.$$observers = {});
                        d === "class" && (e = i(c[d], !0));
                        c[d] = q;
                        (b[d] || (b[d] = [])).$$inter = !0;
                        (c.$$observers && c.$$observers[d].$$scope || a).$watch(e, function(a) {
                            c.$set(d, a)
                        })
                    })
                })
            }

            function C(a, b, c) {
                var d = b[0],
                    e = d.parentNode,
                    i, g;
                if (a) {
                    i = 0;
                    for (g = a.length; i < g; i++) if (a[i] == d) {
                        a[i] = c;
                        break
                    }
                }
                e && e.replaceChild(c, d);
                c[u.expando] = d[u.expando];
                b[0] = c
            }
            var ia = function(a, b) {
                    this.$$element = a;
                    this.$attr = b || {}
                };
            ia.prototype = {
                $normalize: ea,
                $set: function(a, b, c, d) {
                    var e = zb(this.$$element[0], a),
                        i = this.$$observers;
                    e && (this.$$element.prop(a, b), d = e);
                    this[a] = b;
                    d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = Za(a, "-"));
                    if (fb(this.$$element[0]) === "A" && a === "href") D.setAttribute("href", b), e = D.href, e.match(h) || (this[a] = b = "unsafe:" + e);
                    c !== !1 && (b === null || b === q ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
                    i && n(i[a], function(a) {
                        try {
                            a(b)
                        } catch (c) {
                            k(c)
                        }
                    })
                },
                $observe: function(a, b) {
                    var c = this,
                        d = c.$$observers || (c.$$observers = {}),
                        e = d[a] || (d[a] = []);
                    e.push(b);
                    p.$evalAsync(function() {
                        e.$$inter || b(c[a])
                    });
                    return b
                }
            };
            var D = s[0].createElement("a"),
                S = i.startSymbol(),
                ka = i.endSymbol(),
                Eb = S == "{{" || ka == "}}" ? na : function(a) {
                    return a.replace(/\{\{/g, S).replace(/}}/g, ka)
                };
            return J
        }]
    }

    function ea(b) {
        return sb(b.replace(Ac, ""))
    }

    function Bc() {
        var b = {};
        this.register = function(a, c) {
            M(a) ? v(b, a) : b[a] = c
        };
        this.$get = ["$injector", "$window", function(a, c) {
            return function(d, e) {
                if (A(d)) {
                    var g = d,
                        d = b.hasOwnProperty(g) ? b[g] : gb(e.$scope, g, !0) || gb(c, g, !0);
                    ra(d, g, !0)
                }
                return a.instantiate(d, e)
            }
        }]
    }

    function Cc() {
        this.$get = ["$window", function(b) {
            return u(b.document)
        }]
    }

    function Dc() {
        this.$get = ["$log", function(b) {
            return function(a, c) {
                b.error.apply(b, arguments)
            }
        }]
    }

    function Ec() {
        var b = "{{",
            a = "}}";
        this.startSymbol = function(a) {
            return a ? (b = a, this) : b
        };
        this.endSymbol = function(b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$parse", function(c) {
            function d(d, f) {
                for (var j, i, k = 0, m = [], l = d.length, t = !1, o = []; k < l;)(j = d.indexOf(b, k)) != -1 && (i = d.indexOf(a, j + e)) != -1 ? (k != j && m.push(d.substring(k, j)), m.push(k = c(t = d.substring(j + e, i))), k.exp = t, k = i + g, t = !0) : (k != l && m.push(d.substring(k)), k = l);
                if (!(l = m.length)) m.push(""), l = 1;
                if (!f || t) return o.length = l, k = function(a) {
                    for (var b = 0, c = l, d; b < c; b++) {
                        if (typeof(d = m[b]) == "function") d = d(a), d == null || d == q ? d = "" : typeof d != "string" && (d = da(d));
                        o[b] = d
                    }
                    return o.join("")
                }, k.exp = d, k.parts = m, k
            }
            var e = b.length,
                g = a.length;
            d.startSymbol = function() {
                return b
            };
            d.endSymbol = function() {
                return a
            };
            return d
        }]
    }

    function Fb(b) {
        for (var b = b.split("/"), a = b.length; a--;) b[a] = Ya(b[a]);
        return b.join("/")
    }

    function wa(b, a) {
        var c = Gb.exec(b),
            c = {
                protocol: c[1],
                host: c[3],
                port: E(c[5]) || Hb[c[1]] || null,
                path: c[6] || "/",
                search: c[8],
                hash: c[10]
            };
        if (a) a.$$protocol = c.protocol, a.$$host = c.host, a.$$port = c.port;
        return c
    }

    function la(b, a, c) {
        return b + "://" + a + (c == Hb[b] ? "" : ":" + c)
    }

    function Fc(b, a, c) {
        var d = wa(b);
        return decodeURIComponent(d.path) != a || w(d.hash) || d.hash.indexOf(c) !== 0 ? b : la(d.protocol, d.host, d.port) + a.substr(0, a.lastIndexOf("/")) + d.hash.substr(c.length)
    }

    function Gc(b, a, c) {
        var d = wa(b);
        if (decodeURIComponent(d.path) == a) return b;
        else {
            var e = d.search && "?" + d.search || "",
                g = d.hash && "#" + d.hash || "",
                h = a.substr(0, a.lastIndexOf("/")),
                f = d.path.substr(h.length);
            if (d.path.indexOf(h) !== 0) throw Error('Invalid url "' + b + '", missing path prefix "' + h + '" !');
            return la(d.protocol, d.host, d.port) + a + "#" + c + f + e + g
        }
    }

    function hb(b, a, c) {
        a = a || "";
        this.$$parse = function(b) {
            var c = wa(b, this);
            if (c.path.indexOf(a) !== 0) throw Error('Invalid url "' + b + '", missing path prefix "' + a + '" !');
            this.$$path = decodeURIComponent(c.path.substr(a.length));
            this.$$search = Wa(c.search);
            this.$$hash = c.hash && decodeURIComponent(c.hash) || "";
            this.$$compose()
        };
        this.$$compose = function() {
            var b = pb(this.$$search),
                c = this.$$hash ? "#" + Ya(this.$$hash) : "";
            this.$$url = Fb(this.$$path) + (b ? "?" + b : "") + c;
            this.$$absUrl = la(this.$$protocol, this.$$host, this.$$port) + a + this.$$url
        };
        this.$$rewriteAppUrl = function(a) {
            if (a.indexOf(c) == 0) return a
        };
        this.$$parse(b)
    }

    function Ha(b, a, c) {
        var d;
        this.$$parse = function(b) {
            var c = wa(b, this);
            if (c.hash && c.hash.indexOf(a) !== 0) throw Error('Invalid url "' + b + '", missing hash prefix "' + a + '" !');
            d = c.path + (c.search ? "?" + c.search : "");
            c = Hc.exec((c.hash || "").substr(a.length));
            this.$$path = c[1] ? (c[1].charAt(0) == "/" ? "" : "/") + decodeURIComponent(c[1]) : "";
            this.$$search = Wa(c[3]);
            this.$$hash = c[5] && decodeURIComponent(c[5]) || "";
            this.$$compose()
        };
        this.$$compose = function() {
            var b = pb(this.$$search),
                c = this.$$hash ? "#" + Ya(this.$$hash) : "";
            this.$$url = Fb(this.$$path) + (b ? "?" + b : "") + c;
            this.$$absUrl = la(this.$$protocol, this.$$host, this.$$port) + d + (this.$$url ? "#" + a + this.$$url : "")
        };
        this.$$rewriteAppUrl = function(a) {
            if (a.indexOf(c) == 0) return a
        };
        this.$$parse(b)
    }

    function Ib(b, a, c, d) {
        Ha.apply(this, arguments);
        this.$$rewriteAppUrl = function(b) {
            if (b.indexOf(c) == 0) return c + d + "#" + a + b.substr(c.length)
        }
    }

    function Ia(b) {
        return function() {
            return this[b]
        }
    }

    function Jb(b, a) {
        return function(c) {
            if (w(c)) return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }

    function Ic() {
        var b = "",
            a = !1;
        this.hashPrefix = function(a) {
            return x(a) ? (b = a, this) : b
        };
        this.html5Mode = function(b) {
            return x(b) ? (a = b, this) : a
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function(c, d, e, g) {
            function h(a) {
                c.$broadcast("$locationChangeSuccess", f.absUrl(), a)
            }
            var f, j, i, k = d.url(),
                m = wa(k);
            a ? (j = d.baseHref() || "/", i = j.substr(0, j.lastIndexOf("/")), m = la(m.protocol, m.host, m.port) + i + "/", f = e.history ? new hb(Fc(k, j, b), i, m) : new Ib(Gc(k, j, b), b, m, j.substr(i.length + 1))) : (m = la(m.protocol, m.host, m.port) + (m.path || "") + (m.search ? "?" + m.search : "") + "#" + b + "/", f = new Ha(k, b, m));
            g.bind("click", function(a) {
                if (!a.ctrlKey && !(a.metaKey || a.which == 2)) {
                    for (var b = u(a.target); y(b[0].nodeName) !== "a";) if (b[0] === g[0] || !(b = b.parent())[0]) return;
                    var d = b.prop("href"),
                        e = f.$$rewriteAppUrl(d);
                    d && !b.attr("target") && e && (f.$$parse(e), c.$apply(), a.preventDefault(), X.angular["ff-684208-preventDefault"] = !0)
                }
            });
            f.absUrl() != k && d.url(f.absUrl(), !0);
            d.onUrlChange(function(a) {
                f.absUrl() != a && (c.$evalAsync(function() {
                    var b = f.absUrl();
                    f.$$parse(a);
                    h(b)
                }), c.$$phase || c.$digest())
            });
            var l = 0;
            c.$watch(function() {
                var a = d.url(),
                    b = f.$$replace;
                if (!l || a != f.absUrl()) l++, c.$evalAsync(function() {
                    c.$broadcast("$locationChangeStart", f.absUrl(), a).defaultPrevented ? f.$$parse(a) : (d.url(f.absUrl(), b), h(a))
                });
                f.$$replace = !1;
                return l
            });
            return f
        }]
    }

    function Jc() {
        this.$get = ["$window", function(b) {
            function a(a) {
                a instanceof Error && (a.stack ? a = a.message && a.stack.indexOf(a.message) === -1 ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function c(c) {
                var e = b.console || {},
                    g = e[c] || e.log || C;
                return g.apply ?
                function() {
                    var b = [];
                    n(arguments, function(c) {
                        b.push(a(c))
                    });
                    return g.apply(e, b)
                } : function(a, b) {
                    g(a, b)
                }
            }
            return {
                log: c("log"),
                warn: c("warn"),
                info: c("info"),
                error: c("error")
            }
        }]
    }

    function Kc(b, a) {
        function c(a) {
            return a.indexOf(s) != -1
        }

        function d() {
            return o + 1 < b.length ? b.charAt(o + 1) : !1
        }

        function e(a) {
            return "0" <= a && a <= "9"
        }

        function g(a) {
            return a == " " || a == "\r" || a == "\t" || a == "\n" || a == "\u000b" || a == "\u00a0"
        }

        function h(a) {
            return "a" <= a && a <= "z" || "A" <= a && a <= "Z" || "_" == a || a == "$"
        }

        function f(a) {
            return a == "-" || a == "+" || e(a)
        }

        function j(a, c, d) {
            d = d || o;
            throw Error("Lexer Error: " + a + " at column" + (x(c) ? "s " + c + "-" + o + " [" + b.substring(c, d) + "]" : " " + d) + " in expression [" + b + "].");
        }

        function i() {
            for (var a = "", c = o; o < b.length;) {
                var i = y(b.charAt(o));
                if (i == "." || e(i)) a += i;
                else {
                    var g = d();
                    if (i == "e" && f(g)) a += i;
                    else if (f(i) && g && e(g) && a.charAt(a.length - 1) == "e") a += i;
                    else if (f(i) && (!g || !e(g)) && a.charAt(a.length - 1) == "e") j("Invalid exponent");
                    else break
                }
                o++
            }
            a *= 1;
            l.push({
                index: c,
                text: a,
                json: !0,
                fn: function() {
                    return a
                }
            })
        }

        function k() {
            for (var c = "", d = o, f, i, j; o < b.length;) {
                var k = b.charAt(o);
                if (k == "." || h(k) || e(k)) k == "." && (f = o), c += k;
                else break;
                o++
            }
            if (f) for (i = o; i < b.length;) {
                k = b.charAt(i);
                if (k == "(") {
                    j = c.substr(f - d + 1);
                    c = c.substr(0, f - d);
                    o = i;
                    break
                }
                if (g(k)) i++;
                else break
            }
            d = {
                index: d,
                text: c
            };
            if (Ja.hasOwnProperty(c)) d.fn = d.json = Ja[c];
            else {
                var m = Kb(c, a);
                d.fn = v(function(a, b) {
                    return m(a, b)
                }, {
                    assign: function(a, b) {
                        return Lb(a, c, b)
                    }
                })
            }
            l.push(d);
            j && (l.push({
                index: f,
                text: ".",
                json: !1
            }), l.push({
                index: f + 1,
                text: j,
                json: !1
            }))
        }

        function m(a) {
            var c = o;
            o++;
            for (var d = "", e = a, f = !1; o < b.length;) {
                var i = b.charAt(o);
                e += i;
                if (f) i == "u" ? (i = b.substring(o + 1, o + 5), i.match(/[\da-f]{4}/i) || j("Invalid unicode escape [\\u" + i + "]"), o += 4, d += String.fromCharCode(parseInt(i, 16))) : (f = Lc[i], d += f ? f : i), f = !1;
                else if (i == "\\") f = !0;
                else if (i == a) {
                    o++;
                    l.push({
                        index: c,
                        text: e,
                        string: d,
                        json: !0,
                        fn: function() {
                            return d
                        }
                    });
                    return
                } else d += i;
                o++
            }
            j("Unterminated quote", c)
        }
        for (var l = [], t, o = 0, p = [], s, J = ":"; o < b.length;) {
            s = b.charAt(o);
            if (c("\"'")) m(s);
            else if (e(s) || c(".") && e(d())) i();
            else if (h(s)) {
                if (k(), "{,".indexOf(J) != -1 && p[0] == "{" && (t = l[l.length - 1])) t.json = t.text.indexOf(".") == -1
            } else if (c("(){}[].,;:")) l.push({
                index: o,
                text: s,
                json: ":[,".indexOf(J) != -1 && c("{[") || c("}]:,")
            }), c("{[") && p.unshift(s), c("}]") && p.shift(), o++;
            else if (g(s)) {
                o++;
                continue
            } else {
                var n = s + d(),
                    z = Ja[s],
                    V = Ja[n];
                V ? (l.push({
                    index: o,
                    text: n,
                    fn: V
                }), o += 2) : z ? (l.push({
                    index: o,
                    text: s,
                    fn: z,
                    json: "[,:".indexOf(J) != -1 && c("+-")
                }), o += 1) : j("Unexpected next character ", o, o + 1)
            }
            J = s
        }
        return l
    }

    function Mc(b, a, c, d) {
        function e(a, c) {
            throw Error("Syntax Error: Token '" + c.text + "' " + a + " at column " + (c.index + 1) + " of the expression [" + b + "] starting at [" + b.substring(c.index) + "].");
        }

        function g() {
            if (P.length === 0) throw Error("Unexpected end of expression: " + b);
            return P[0]
        }

        function h(a, b, c, d) {
            if (P.length > 0) {
                var e = P[0],
                    f = e.text;
                if (f == a || f == b || f == c || f == d || !a && !b && !c && !d) return e
            }
            return !1
        }

        function f(b, c, d, f) {
            return (b = h(b, c, d, f)) ? (a && !b.json && e("is not valid json", b), P.shift(), b) : !1
        }

        function j(a) {
            f(a) || e("is unexpected, expecting [" + a + "]", h())
        }

        function i(a, b) {
            return function(c, d) {
                return a(c, d, b)
            }
        }

        function k(a, b, c) {
            return function(d, e) {
                return b(d, e, a, c)
            }
        }

        function m() {
            for (var a = [];;) if (P.length > 0 && !h("}", ")", ";", "]") && a.push(w()), !f(";")) return a.length == 1 ? a[0] : function(b, c) {
                for (var d, e = 0; e < a.length; e++) {
                    var f = a[e];
                    f && (d = f(b, c))
                }
                return d
            }
        }

        function l() {
            for (var a = f(), b = c(a.text), d = [];;) if (a = f(":")) d.push(G());
            else {
                var e = function(a, c, e) {
                        for (var e = [e], f = 0; f < d.length; f++) e.push(d[f](a, c));
                        return b.apply(a, e)
                    };
                return function() {
                    return e
                }
            }
        }

        function t() {
            for (var a = o(), b;;) if (b = f("||")) a = k(a, b.fn, o());
            else return a
        }

        function o() {
            var a = p(),
                b;
            if (b = f("&&")) a = k(a, b.fn, o());
            return a
        }

        function p() {
            var a = s(),
                b;
            if (b = f("==", "!=")) a = k(a, b.fn, p());
            return a
        }

        function s() {
            var a;
            a = J();
            for (var b; b = f("+", "-");) a = k(a, b.fn, J());
            if (b = f("<", ">", "<=", ">=")) a = k(a, b.fn, s());
            return a
        }

        function J() {
            for (var a = n(), b; b = f("*", "/", "%");) a = k(a, b.fn, n());
            return a
        }

        function n() {
            var a;
            return f("+") ? z() : (a = f("-")) ? k(r, a.fn, n()) : (a = f("!")) ? i(a.fn, n()) : z()
        }

        function z() {
            var a;
            if (f("(")) a = w(), j(")");
            else if (f("[")) a = V();
            else if (f("{")) a = K();
            else {
                var b = f();
                (a = b.fn) || e("not a primary expression", b)
            }
            for (var c; b = f("(", "[", ".");) b.text === "(" ? (a = x(a, c), c = null) : b.text === "[" ? (c = a, a = R(a)) : b.text === "." ? (c = a, a = u(a)) : e("IMPOSSIBLE");
            return a
        }

        function V() {
            var a = [];
            if (g().text != "]") {
                do a.push(G());
                while (f(","))
            }
            j("]");
            return function(b, c) {
                for (var d = [], e = 0; e < a.length; e++) d.push(a[e](b, c));
                return d
            }
        }

        function K() {
            var a = [];
            if (g().text != "}") {
                do {
                    var b = f(),
                        b = b.string || b.text;
                    j(":");
                    var c = G();
                    a.push({
                        key: b,
                        value: c
                    })
                } while (f(","))
            }
            j("}");
            return function(b, c) {
                for (var d = {}, e = 0; e < a.length; e++) {
                    var f = a[e],
                        i = f.value(b, c);
                    d[f.key] = i
                }
                return d
            }
        }
        var r = I(0),
            $, P = Kc(b, d),
            G = function() {
                var a = t(),
                    c, d;
                return (d = f("=")) ? (a.assign || e("implies assignment but [" + b.substring(0, d.index) + "] can not be assigned to", d), c = t(), function(b, d) {
                    return a.assign(b, c(b, d), d)
                }) : a
            },
            x = function(a, b) {
                var c = [];
                if (g().text != ")") {
                    do c.push(G());
                    while (f(","))
                }
                j(")");
                return function(d, e) {
                    for (var f = [], i = b ? b(d, e) : d, g = 0; g < c.length; g++) f.push(c[g](d, e));
                    g = a(d, e) || C;
                    return g.apply ? g.apply(i, f) : g(f[0], f[1], f[2], f[3], f[4])
                }
            },
            u = function(a) {
                var b = f().text,
                    c = Kb(b, d);
                return v(function(b, d) {
                    return c(a(b, d), d)
                }, {
                    assign: function(c, d, e) {
                        return Lb(a(c, e), b, d)
                    }
                })
            },
            R = function(a) {
                var b = G();
                j("]");
                return v(function(c, d) {
                    var e = a(c, d),
                        f = b(c, d),
                        i;
                    if (!e) return q;
                    if ((e = e[f]) && e.then) {
                        i = e;
                        if (!("$$v" in e)) i.$$v = q, i.then(function(a) {
                            i.$$v = a
                        });
                        e = e.$$v
                    }
                    return e
                }, {
                    assign: function(c, d, e) {
                        return a(c, e)[b(c, e)] = d
                    }
                })
            },
            w = function() {
                for (var a = G(), b;;) if (b = f("|")) a = k(a, b.fn, l());
                else return a
            };
        a ? (G = t, x = u = R = w = function() {
            e("is not valid json", {
                text: b,
                index: 0
            })
        }, $ = z()) : $ = m();
        P.length !== 0 && e("is an unexpected token", P[0]);
        return $
    }

    function Lb(b, a, c) {
        for (var a = a.split("."), d = 0; a.length > 1; d++) {
            var e = a.shift(),
                g = b[e];
            g || (g = {}, b[e] = g);
            b = g
        }
        return b[a.shift()] = c
    }

    function gb(b, a, c) {
        if (!a) return b;
        for (var a = a.split("."), d, e = b, g = a.length, h = 0; h < g; h++) d = a[h], b && (b = (e = b)[d]);
        return !c && H(b) ? Ua(e, b) : b
    }

    function Mb(b, a, c, d, e) {
        return function(g, h) {
            var f = h && h.hasOwnProperty(b) ? h : g,
                j;
            if (f === null || f === q) return f;
            if ((f = f[b]) && f.then) {
                if (!("$$v" in f)) j = f, j.$$v = q, j.then(function(a) {
                    j.$$v = a
                });
                f = f.$$v
            }
            if (!a || f === null || f === q) return f;
            if ((f = f[a]) && f.then) {
                if (!("$$v" in f)) j = f, j.$$v = q, j.then(function(a) {
                    j.$$v = a
                });
                f = f.$$v
            }
            if (!c || f === null || f === q) return f;
            if ((f = f[c]) && f.then) {
                if (!("$$v" in f)) j = f, j.$$v = q, j.then(function(a) {
                    j.$$v = a
                });
                f = f.$$v
            }
            if (!d || f === null || f === q) return f;
            if ((f = f[d]) && f.then) {
                if (!("$$v" in f)) j = f, j.$$v = q, j.then(function(a) {
                    j.$$v = a
                });
                f = f.$$v
            }
            if (!e || f === null || f === q) return f;
            if ((f = f[e]) && f.then) {
                if (!("$$v" in f)) j = f, j.$$v = q, j.then(function(a) {
                    j.$$v = a
                });
                f = f.$$v
            }
            return f
        }
    }

    function Kb(b, a) {
        if (ib.hasOwnProperty(b)) return ib[b];
        var c = b.split("."),
            d = c.length,
            e;
        if (a) e = d < 6 ? Mb(c[0], c[1], c[2], c[3], c[4]) : function(a, b) {
            var e = 0,
                i;
            do i = Mb(c[e++], c[e++], c[e++], c[e++], c[e++])(a, b), b = q, a = i;
            while (e < d);
            return i
        };
        else {
            var g = "var l, fn, p;\n";
            n(c, function(a, b) {
                g += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (b ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'
            });
            g += "return s;";
            e = Function("s", "k", g);
            e.toString = function() {
                return g
            }
        }
        return ib[b] = e
    }

    function Nc() {
        var b = {};
        this.$get = ["$filter", "$sniffer", function(a, c) {
            return function(d) {
                switch (typeof d) {
                case "string":
                    return b.hasOwnProperty(d) ? b[d] : b[d] = Mc(d, !1, a, c.csp);
                case "function":
                    return d;
                default:
                    return C
                }
            }
        }]
    }

    function Oc() {
        this.$get = ["$rootScope", "$exceptionHandler", function(b, a) {
            return Pc(function(a) {
                b.$evalAsync(a)
            }, a)
        }]
    }

    function Pc(b, a) {
        function c(a) {
            return a
        }

        function d(a) {
            return h(a)
        }
        var e = function() {
                var f = [],
                    j, i;
                return i = {
                    resolve: function(a) {
                        if (f) {
                            var c = f;
                            f = q;
                            j = g(a);
                            c.length && b(function() {
                                for (var a, b = 0, d = c.length; b < d; b++) a = c[b], j.then(a[0], a[1])
                            })
                        }
                    },
                    reject: function(a) {
                        i.resolve(h(a))
                    },
                    promise: {
                        then: function(b, i) {
                            var g = e(),
                                h = function(d) {
                                    try {
                                        g.resolve((b || c)(d))
                                    } catch (e) {
                                        a(e), g.reject(e)
                                    }
                                },
                                o = function(b) {
                                    try {
                                        g.resolve((i || d)(b))
                                    } catch (c) {
                                        a(c), g.reject(c)
                                    }
                                };
                            f ? f.push([h, o]) : j.then(h, o);
                            return g.promise
                        }
                    }
                }
            },
            g = function(a) {
                return a && a.then ? a : {
                    then: function(c) {
                        var d = e();
                        b(function() {
                            d.resolve(c(a))
                        });
                        return d.promise
                    }
                }
            },
            h = function(a) {
                return {
                    then: function(c, i) {
                        var g = e();
                        b(function() {
                            g.resolve((i || d)(a))
                        });
                        return g.promise
                    }
                }
            };
        return {
            defer: e,
            reject: h,
            when: function(f, j, i) {
                var k = e(),
                    m, l = function(b) {
                        try {
                            return (j || c)(b)
                        } catch (d) {
                            return a(d), h(d)
                        }
                    },
                    t = function(b) {
                        try {
                            return (i || d)(b)
                        } catch (c) {
                            return a(c), h(c)
                        }
                    };
                b(function() {
                    g(f).then(function(a) {
                        m || (m = !0, k.resolve(g(a).then(l, t)))
                    }, function(a) {
                        m || (m = !0, k.resolve(t(a)))
                    })
                });
                return k.promise
            },
            all: function(a) {
                var b = e(),
                    c = a.length,
                    d = [];
                c ? n(a, function(a, e) {
                    g(a).then(function(a) {
                        e in d || (d[e] = a, --c || b.resolve(d))
                    }, function(a) {
                        e in d || b.reject(a)
                    })
                }) : b.resolve(d);
                return b.promise
            }
        }
    }

    function Qc() {
        var b = {};
        this.when = function(a, c) {
            b[a] = v({
                reloadOnSearch: !0
            }, c);
            if (a) {
                var d = a[a.length - 1] == "/" ? a.substr(0, a.length - 1) : a + "/";
                b[d] = {
                    redirectTo: a
                }
            }
            return this
        };
        this.otherwise = function(a) {
            this.when(null, a);
            return this
        };
        this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", function(a, c, d, e, g, h, f) {
            function j(a, b) {
                for (var b = "^" + b.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "$", c = "", d = [], e = {}, f = /:(\w+)/g, i, g = 0;
                (i = f.exec(b)) !== null;) c += b.slice(g, i.index), c += "([^\\/]*)", d.push(i[1]), g = f.lastIndex;
                c += b.substr(g);
                var h = a.match(RegExp(c));
                h && n(d, function(a, b) {
                    e[a] = h[b + 1]
                });
                return h ? e : null
            }

            function i() {
                var b = k(),
                    i = t.current;
                if (b && i && b.$route === i.$route && ga(b.pathParams, i.pathParams) && !b.reloadOnSearch && !l) i.params = b.params, U(i.params, d), a.$broadcast("$routeUpdate", i);
                else if (b || i) l = !1, a.$broadcast("$routeChangeStart", b, i), (t.current = b) && b.redirectTo && (A(b.redirectTo) ? c.path(m(b.redirectTo, b.params)).search(b.params).replace() : c.url(b.redirectTo(b.pathParams, c.path(), c.search())).replace()), e.when(b).then(function() {
                    if (b) {
                        var a = [],
                            c = [],
                            d;
                        n(b.resolve || {}, function(b, d) {
                            a.push(d);
                            c.push(A(b) ? g.get(b) : g.invoke(b))
                        });
                        if (!x(d = b.template)) if (x(d = b.templateUrl)) d = h.get(d, {
                            cache: f
                        }).then(function(a) {
                            return a.data
                        });
                        x(d) && (a.push("$template"), c.push(d));
                        return e.all(c).then(function(b) {
                            var c = {};
                            n(b, function(b, d) {
                                c[a[d]] = b
                            });
                            return c
                        })
                    }
                }).then(function(c) {
                    if (b == t.current) {
                        if (b) b.locals = c, U(b.params, d);
                        a.$broadcast("$routeChangeSuccess", b, i)
                    }
                }, function(c) {
                    b == t.current && a.$broadcast("$routeChangeError", b, i, c)
                })
            }

            function k() {
                var a, d;
                n(b, function(b, e) {
                    if (!d && (a = j(c.path(), e))) d = za(b, {
                        params: v({}, c.search(), a),
                        pathParams: a
                    }), d.$route = b
                });
                return d || b[null] && za(b[null], {
                    params: {},
                    pathParams: {}
                })
            }

            function m(a, b) {
                var c = [];
                n((a || "").split(":"), function(a, d) {
                    if (d == 0) c.push(a);
                    else {
                        var e = a.match(/(\w+)(.*)/),
                            f = e[1];
                        c.push(b[f]);
                        c.push(e[2] || "");
                        delete b[f]
                    }
                });
                return c.join("")
            }
            var l = !1,
                t = {
                    routes: b,
                    reload: function() {
                        l = !0;
                        a.$evalAsync(i)
                    }
                };
            a.$on("$locationChangeSuccess", i);
            return t
        }]
    }

    function Rc() {
        this.$get = I({})
    }

    function Sc() {
        var b = 10;
        this.digestTtl = function(a) {
            arguments.length && (b = a);
            return b
        };
        this.$get = ["$injector", "$exceptionHandler", "$parse", function(a, c, d) {
            function e() {
                this.$id = ya();
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this["this"] = this.$root = this;
                this.$$destroyed = !1;
                this.$$asyncQueue = [];
                this.$$listeners = {};
                this.$$isolateBindings = {}
            }

            function g(a) {
                if (j.$$phase) throw Error(j.$$phase + " already in progress");
                j.$$phase = a
            }

            function h(a, b) {
                var c = d(a);
                ra(c, b);
                return c
            }

            function f() {}
            e.prototype = {
                $new: function(a) {
                    if (H(a)) throw Error("API-CHANGE: Use $controller to instantiate controllers.");
                    a ? (a = new e, a.$root = this.$root) : (a = function() {}, a.prototype = this, a = new a, a.$id = ya());
                    a["this"] = a;
                    a.$$listeners = {};
                    a.$parent = this;
                    a.$$asyncQueue = [];
                    a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null;
                    a.$$prevSibling = this.$$childTail;
                    this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
                    return a
                },
                $watch: function(a, b, c) {
                    var d = h(a, "watch"),
                        e = this.$$watchers,
                        g = {
                            fn: b,
                            last: f,
                            get: d,
                            exp: a,
                            eq: !! c
                        };
                    if (!H(b)) {
                        var j = h(b || C, "listener");
                        g.fn = function(a, b, c) {
                            j(c)
                        }
                    }
                    if (!e) e = this.$$watchers = [];
                    e.unshift(g);
                    return function() {
                        Ta(e, g)
                    }
                },
                $digest: function() {
                    var a, d, e, h, t, o, p, s = b,
                        n, F = [],
                        z, q;
                    g("$digest");
                    do {
                        p = !1;
                        n = this;
                        do {
                            for (t = n.$$asyncQueue; t.length;) try {
                                n.$eval(t.shift())
                            } catch (K) {
                                c(K)
                            }
                            if (h = n.$$watchers) for (o = h.length; o--;) try {
                                if (a = h[o], (d = a.get(n)) !== (e = a.last) && !(a.eq ? ga(d, e) : typeof d == "number" && typeof e == "number" && isNaN(d) && isNaN(e))) p = !0, a.last = a.eq ? U(d) : d, a.fn(d, e === f ? d : e, n), s < 5 && (z = 4 - s, F[z] || (F[z] = []), q = H(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp, q += "; newVal: " + da(d) + "; oldVal: " + da(e), F[z].push(q))
                            } catch (r) {
                                c(r)
                            }
                            if (!(h = n.$$childHead || n !== this && n.$$nextSibling)) for (; n !== this && !(h = n.$$nextSibling);) n = n.$parent
                        } while (n = h);
                        if (p && !s--) throw j.$$phase = null, Error(b + " $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: " + da(F));
                    } while (p || t.length);
                    j.$$phase = null
                },
                $destroy: function() {
                    if (!(j == this || this.$$destroyed)) {
                        var a = this.$parent;
                        this.$broadcast("$destroy");
                        this.$$destroyed = !0;
                        if (a.$$childHead == this) a.$$childHead = this.$$nextSibling;
                        if (a.$$childTail == this) a.$$childTail = this.$$prevSibling;
                        if (this.$$prevSibling) this.$$prevSibling.$$nextSibling = this.$$nextSibling;
                        if (this.$$nextSibling) this.$$nextSibling.$$prevSibling = this.$$prevSibling;
                        this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null
                    }
                },
                $eval: function(a, b) {
                    return d(a)(this, b)
                },
                $evalAsync: function(a) {
                    this.$$asyncQueue.push(a)
                },
                $apply: function(a) {
                    try {
                        return g("$apply"), this.$eval(a)
                    } catch (b) {
                        c(b)
                    } finally {
                        j.$$phase = null;
                        try {
                            j.$digest()
                        } catch (d) {
                            throw c(d), d;
                        }
                    }
                },
                $on: function(a, b) {
                    var c = this.$$listeners[a];
                    c || (this.$$listeners[a] = c = []);
                    c.push(b);
                    return function() {
                        c[Aa(c, b)] = null
                    }
                },
                $emit: function(a, b) {
                    var d = [],
                        e, f = this,
                        g = !1,
                        h = {
                            name: a,
                            targetScope: f,
                            stopPropagation: function() {
                                g = !0
                            },
                            preventDefault: function() {
                                h.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        j = [h].concat(ha.call(arguments, 1)),
                        n, q;
                    do {
                        e = f.$$listeners[a] || d;
                        h.currentScope = f;
                        n = 0;
                        for (q = e.length; n < q; n++) if (e[n]) try {
                            if (e[n].apply(null, j), g) return h
                        } catch (z) {
                            c(z)
                        } else e.splice(n, 1), n--, q--;
                        f = f.$parent
                    } while (f);
                    return h
                },
                $broadcast: function(a, b) {
                    var d = this,
                        e = this,
                        f = {
                            name: a,
                            targetScope: this,
                            preventDefault: function() {
                                f.defaultPrevented = !0
                            },
                            defaultPrevented: !1
                        },
                        g = [f].concat(ha.call(arguments, 1)),
                        h, j;
                    do {
                        d = e;
                        f.currentScope = d;
                        e = d.$$listeners[a] || [];
                        h = 0;
                        for (j = e.length; h < j; h++) if (e[h]) try {
                            e[h].apply(null, g)
                        } catch (n) {
                            c(n)
                        } else e.splice(h, 1), h--, j--;
                        if (!(e = d.$$childHead || d !== this && d.$$nextSibling)) for (; d !== this && !(e = d.$$nextSibling);) d = d.$parent
                    } while (d = e);
                    return f
                }
            };
            var j = new e;
            return j
        }]
    }

    function Tc() {
        this.$get = ["$window", function(b) {
            var a = {},
                c = E((/android (\d+)/.exec(y(b.navigator.userAgent)) || [])[1]);
            return {
                history: !(!b.history || !b.history.pushState || c < 4),
                hashchange: "onhashchange" in b && (!b.document.documentMode || b.document.documentMode > 7),
                hasEvent: function(c) {
                    if (c == "input" && Z == 9) return !1;
                    if (w(a[c])) {
                        var e = b.document.createElement("div");
                        a[c] = "on" + c in e
                    }
                    return a[c]
                },
                csp: !1
            }
        }]
    }

    function Uc() {
        this.$get = I(X)
    }

    function Nb(b) {
        var a = {},
            c, d, e;
        if (!b) return a;
        n(b.split("\n"), function(b) {
            e = b.indexOf(":");
            c = y(O(b.substr(0, e)));
            d = O(b.substr(e + 1));
            c && (a[c] ? a[c] += ", " + d : a[c] = d)
        });
        return a
    }

    function Ob(b) {
        var a = M(b) ? b : q;
        return function(c) {
            a || (a = Nb(b));
            return c ? a[y(c)] || null : a
        }
    }

    function Pb(b, a, c) {
        if (H(c)) return c(b, a);
        n(c, function(c) {
            b = c(b, a)
        });
        return b
    }

    function Vc() {
        var b = /^\s*(\[|\{[^\{])/,
            a = /[\}\]]\s*$/,
            c = /^\)\]\}',?\n/,
            d = this.defaults = {
                transformResponse: [function(d) {
                    A(d) && (d = d.replace(c, ""), b.test(d) && a.test(d) && (d = ob(d, !0)));
                    return d
                }],
                transformRequest: [function(a) {
                    return M(a) && xa.apply(a) !== "[object File]" ? da(a) : a
                }],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*",
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    post: {
                        "Content-Type": "application/json;charset=utf-8"
                    },
                    put: {
                        "Content-Type": "application/json;charset=utf-8"
                    }
                }
            },
            e = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function(a, b, c, j, i, k) {
            function m(a) {
                function c(a) {
                    var b = v({}, a, {
                        data: Pb(a.data, a.headers, f)
                    });
                    return 200 <= a.status && a.status < 300 ? b : i.reject(b)
                }
                a.method = ma(a.method);
                var e = a.transformRequest || d.transformRequest,
                    f = a.transformResponse || d.transformResponse,
                    g = d.headers,
                    g = v({
                        "X-XSRF-TOKEN": b.cookies()["XSRF-TOKEN"]
                    }, g.common, g[y(a.method)], a.headers),
                    e = Pb(a.data, Ob(g), e),
                    j;
                w(a.data) && delete g["Content-Type"];
                j = l(a, e, g);
                j = j.then(c, c);
                n(p, function(a) {
                    j = a(j)
                });
                j.success = function(b) {
                    j.then(function(c) {
                        b(c.data, c.status, c.headers, a)
                    });
                    return j
                };
                j.error = function(b) {
                    j.then(null, function(c) {
                        b(c.data, c.status, c.headers, a)
                    });
                    return j
                };
                return j
            }

            function l(b, c, d) {
                function e(a, b, c) {
                    n && (200 <= a && a < 300 ? n.put(q, [a, b, Nb(c)]) : n.remove(q));
                    f(b, a, c);
                    j.$apply()
                }

                function f(a, c, d) {
                    c = Math.max(c, 0);
                    (200 <= c && c < 300 ? k.resolve : k.reject)({
                        data: a,
                        status: c,
                        headers: Ob(d),
                        config: b
                    })
                }

                function h() {
                    var a = Aa(m.pendingRequests, b);
                    a !== -1 && m.pendingRequests.splice(a, 1)
                }
                var k = i.defer(),
                    l = k.promise,
                    n, p, q = t(b.url, b.params);
                m.pendingRequests.push(b);
                l.then(h, h);
                b.cache && b.method == "GET" && (n = M(b.cache) ? b.cache : o);
                if (n) if (p = n.get(q)) if (p.then) return p.then(h, h), p;
                else B(p) ? f(p[1], p[0], U(p[2])) : f(p, 200, {});
                else n.put(q, l);
                p || a(b.method, q, c, e, d, b.timeout, b.withCredentials);
                return l
            }

            function t(a, b) {
                if (!b) return a;
                var c = [];
                fc(b, function(a, b) {
                    a == null || a == q || (M(a) && (a = da(a)), c.push(encodeURIComponent(b) + "=" + encodeURIComponent(a)))
                });
                return a + (a.indexOf("?") == -1 ? "?" : "&") + c.join("&")
            }
            var o = c("$http"),
                p = [];
            n(e, function(a) {
                p.push(A(a) ? k.get(a) : k.invoke(a))
            });
            m.pendingRequests = [];
            (function(a) {
                n(arguments, function(a) {
                    m[a] = function(b, c) {
                        return m(v(c || {}, {
                            method: a,
                            url: b
                        }))
                    }
                })
            })("get", "delete", "head", "jsonp");
            (function(a) {
                n(arguments, function(a) {
                    m[a] = function(b, c, d) {
                        return m(v(d || {}, {
                            method: a,
                            url: b,
                            data: c
                        }))
                    }
                })
            })("post", "put");
            m.defaults = d;
            return m
        }]
    }

    function Wc() {
        this.$get = ["$browser", "$window", "$document", function(b, a, c) {
            return Xc(b, Yc, b.defer, a.angular.callbacks, c[0], a.location.protocol.replace(":", ""))
        }]
    }

    function Xc(b, a, c, d, e, g) {
        function h(a, b) {
            var c = e.createElement("script"),
                d = function() {
                    e.body.removeChild(c);
                    b && b()
                };
            c.type = "text/javascript";
            c.src = a;
            Z ? c.onreadystatechange = function() {
                /loaded|complete/.test(c.readyState) && d()
            } : c.onload = c.onerror = d;
            e.body.appendChild(c)
        }
        return function(e, j, i, k, m, l, t) {
            function o(a, c, d, e) {
                c = (j.match(Gb) || ["", g])[1] == "file" ? d ? 200 : 404 : c;
                a(c == 1223 ? 204 : c, d, e);
                b.$$completeOutstandingRequest(C)
            }
            b.$$incOutstandingRequestCount();
            j = j || b.url();
            if (y(e) == "jsonp") {
                var p = "_" + (d.counter++).toString(36);
                d[p] = function(a) {
                    d[p].data = a
                };
                h(j.replace("JSON_CALLBACK", "angular.callbacks." + p), function() {
                    d[p].data ? o(k, 200, d[p].data) : o(k, -2);
                    delete d[p]
                })
            } else {
                var s = new a;
                s.open(e, j, !0);
                n(m, function(a, b) {
                    a && s.setRequestHeader(b, a)
                });
                var q;
                s.onreadystatechange = function() {
                    if (s.readyState == 4) {
                        var a = s.getAllResponseHeaders(),
                            b = ["Cache-Control", "Content-Language", "Content-Type", "Expires", "Last-Modified", "Pragma"];
                        a || (a = "", n(b, function(b) {
                            var c = s.getResponseHeader(b);
                            c && (a += b + ": " + c + "\n")
                        }));
                        o(k, q || s.status, s.responseText, a)
                    }
                };
                if (t) s.withCredentials = !0;
                s.send(i || "");
                l > 0 && c(function() {
                    q = -1;
                    s.abort()
                }, l)
            }
        }
    }

    function Zc() {
        this.$get = function() {
            return {
                id: "en-us",
                NUMBER_FORMATS: {
                    DECIMAL_SEP: ".",
                    GROUP_SEP: ",",
                    PATTERNS: [{
                        minInt: 1,
                        minFrac: 0,
                        maxFrac: 3,
                        posPre: "",
                        posSuf: "",
                        negPre: "-",
                        negSuf: "",
                        gSize: 3,
                        lgSize: 3
                    }, {
                        minInt: 1,
                        minFrac: 2,
                        maxFrac: 2,
                        posPre: "\u00a4",
                        posSuf: "",
                        negPre: "(\u00a4",
                        negSuf: ")",
                        gSize: 3,
                        lgSize: 3
                    }],
                    CURRENCY_SYM: "$"
                },
                DATETIME_FORMATS: {
                    MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                    SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                    DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                    SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                    AMPMS: ["AM", "PM"],
                    medium: "MMM d, y h:mm:ss a",
                    "short": "M/d/yy h:mm a",
                    fullDate: "EEEE, MMMM d, y",
                    longDate: "MMMM d, y",
                    mediumDate: "MMM d, y",
                    shortDate: "M/d/yy",
                    mediumTime: "h:mm:ss a",
                    shortTime: "h:mm a"
                },
                pluralCat: function(b) {
                    return b === 1 ? "one" : "other"
                }
            }
        }
    }

    function $c() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function(b, a, c, d) {
            function e(e, f, j) {
                var i = c.defer(),
                    k = i.promise,
                    m = x(j) && !j,
                    f = a.defer(function() {
                        try {
                            i.resolve(e())
                        } catch (a) {
                            i.reject(a), d(a)
                        }
                        m || b.$apply()
                    }, f),
                    j = function() {
                        delete g[k.$$timeoutId]
                    };
                k.$$timeoutId = f;
                g[f] = i;
                k.then(j, j);
                return k
            }
            var g = {};
            e.cancel = function(b) {
                return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), a.defer.cancel(b.$$timeoutId)) : !1
            };
            return e
        }]
    }

    function Qb(b) {
        function a(a, e) {
            return b.factory(a + c, e)
        }
        var c = "Filter";
        this.register = a;
        this.$get = ["$injector", function(a) {
            return function(b) {
                return a.get(b + c)
            }
        }];
        a("currency", Rb);
        a("date", Sb);
        a("filter", ad);
        a("json", bd);
        a("limitTo", cd);
        a("lowercase", dd);
        a("number", Tb);
        a("orderBy", Ub);
        a("uppercase", ed)
    }

    function ad() {
        return function(b, a) {
            if (!B(b)) return b;
            var c = [];
            c.check = function(a) {
                for (var b = 0; b < c.length; b++) if (!c[b](a)) return !1;
                return !0
            };
            var d = function(a, b) {
                    if (b.charAt(0) === "!") return !d(a, b.substr(1));
                    switch (typeof a) {
                    case "boolean":
                    case "number":
                    case "string":
                        return ("" + a).toLowerCase().indexOf(b) > -1;
                    case "object":
                        for (var c in a) if (c.charAt(0) !== "$" && d(a[c], b)) return !0;
                        return !1;
                    case "array":
                        for (c = 0; c < a.length; c++) if (d(a[c], b)) return !0;
                        return !1;
                    default:
                        return !1
                    }
                };
            switch (typeof a) {
            case "boolean":
            case "number":
            case "string":
                a = {
                    $: a
                };
            case "object":
                for (var e in a) e == "$" ?
                function() {
                    var b = ("" + a[e]).toLowerCase();
                    b && c.push(function(a) {
                        return d(a, b)
                    })
                }() : function() {
                    var b = e,
                        f = ("" + a[e]).toLowerCase();
                    f && c.push(function(a) {
                        return d(gb(a, b), f)
                    })
                }();
                break;
            case "function":
                c.push(a);
                break;
            default:
                return b
            }
            for (var g = [], h = 0; h < b.length; h++) {
                var f = b[h];
                c.check(f) && g.push(f)
            }
            return g
        }
    }

    function Rb(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            if (w(d)) d = a.CURRENCY_SYM;
            return Vb(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d)
        }
    }

    function Tb(b) {
        var a = b.NUMBER_FORMATS;
        return function(b, d) {
            return Vb(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }

    function Vb(b, a, c, d, e) {
        if (isNaN(b) || !isFinite(b)) return "";
        var g = b < 0,
            b = Math.abs(b),
            h = b + "",
            f = "",
            j = [],
            i = !1;
        if (h.indexOf("e") !== -1) {
            var k = h.match(/([\d\.]+)e(-?)(\d+)/);
            k && k[2] == "-" && k[3] > e + 1 ? h = "0" : (f = h, i = !0)
        }
        if (!i) {
            h = (h.split(Wb)[1] || "").length;
            w(e) && (e = Math.min(Math.max(a.minFrac, h), a.maxFrac));
            var h = Math.pow(10, e),
                b = Math.round(b * h) / h,
                b = ("" + b).split(Wb),
                h = b[0],
                b = b[1] || "",
                i = 0,
                k = a.lgSize,
                m = a.gSize;
            if (h.length >= k + m) for (var i = h.length - k, l = 0; l < i; l++)(i - l) % m === 0 && l !== 0 && (f += c), f += h.charAt(l);
            for (l = i; l < h.length; l++)(h.length - l) % k === 0 && l !== 0 && (f += c), f += h.charAt(l);
            for (; b.length < e;) b += "0";
            e && e !== "0" && (f += d + b.substr(0, e))
        }
        j.push(g ? a.negPre : a.posPre);
        j.push(f);
        j.push(g ? a.negSuf : a.posSuf);
        return j.join("")
    }

    function jb(b, a, c) {
        var d = "";
        b < 0 && (d = "-", b = -b);
        for (b = "" + b; b.length < a;) b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }

    function N(b, a, c, d) {
        return function(e) {
            e = e["get" + b]();
            if (c > 0 || e > -c) e += c;
            e === 0 && c == -12 && (e = 12);
            return jb(e, a, d)
        }
    }

    function Ka(b, a) {
        return function(c, d) {
            var e = c["get" + b](),
                g = ma(a ? "SHORT" + b : b);
            return d[g][e]
        }
    }

    function Sb(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                var a = new Date(0),
                    g = 0,
                    h = 0;
                b[9] && (g = E(b[9] + b[10]), h = E(b[9] + b[11]));
                a.setUTCFullYear(E(b[1]), E(b[2]) - 1, E(b[3]));
                a.setUTCHours(E(b[4] || 0) - g, E(b[5] || 0) - h, E(b[6] || 0), E(b[7] || 0))
            }
            return a
        }
        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function(c, e) {
            var g = "",
                h = [],
                f, j, e = e || "mediumDate",
                e = b.DATETIME_FORMATS[e] || e;
            A(c) && (c = fd.test(c) ? E(c) : a(c));
            Ra(c) && (c = new Date(c));
            if (!oa(c)) return c;
            for (; e;)(j = gd.exec(e)) ? (h = h.concat(ha.call(j, 1)), e = h.pop()) : (h.push(e), e = null);
            n(h, function(a) {
                f = hd[a];
                g += f ? f(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function bd() {
        return function(b) {
            return da(b, !0)
        }
    }

    function cd() {
        return function(b, a) {
            if (!(b instanceof Array)) return b;
            var a = E(a),
                c = [],
                d, e;
            if (!b || !(b instanceof Array)) return c;
            a > b.length ? a = b.length : a < -b.length && (a = -b.length);
            a > 0 ? (d = 0, e = a) : (d = b.length + a, e = b.length);
            for (; d < e; d++) c.push(b[d]);
            return c
        }
    }

    function Ub(b) {
        return function(a, c, d) {
            function e(a, b) {
                return Va(b) ?
                function(b, c) {
                    return a(c, b)
                } : a
            }
            if (!B(a)) return a;
            if (!c) return a;
            for (var c = B(c) ? c : [c], c = Sa(c, function(a) {
                var c = !1,
                    d = a || na;
                if (A(a)) {
                    if (a.charAt(0) == "+" || a.charAt(0) == "-") c = a.charAt(0) == "-", a = a.substring(1);
                    d = b(a)
                }
                return e(function(a, b) {
                    var c;
                    c = d(a);
                    var e = d(b),
                        f = typeof c,
                        g = typeof e;
                    f == g ? (f == "string" && (c = c.toLowerCase()), f == "string" && (e = e.toLowerCase()), c = c === e ? 0 : c < e ? -1 : 1) : c = f < g ? -1 : 1;
                    return c
                }, c)
            }), g = [], h = 0; h < a.length; h++) g.push(a[h]);
            return g.sort(e(function(a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (e !== 0) return e
                }
                return 0
            }, d))
        }
    }

    function Q(b) {
        H(b) && (b = {
            link: b
        });
        b.restrict = b.restrict || "AC";
        return I(b)
    }

    function Xb(b, a) {
        function c(a, c) {
            c = c ? "-" + Za(c, "-") : "";
            b.removeClass((a ? La : Ma) + c).addClass((a ? Ma : La) + c)
        }
        var d = this,
            e = b.parent().controller("form") || Na,
            g = 0,
            h = d.$error = {};
        d.$name = a.name;
        d.$dirty = !1;
        d.$pristine = !0;
        d.$valid = !0;
        d.$invalid = !1;
        e.$addControl(d);
        b.addClass(Oa);
        c(!0);
        d.$addControl = function(a) {
            a.$name && !d.hasOwnProperty(a.$name) && (d[a.$name] = a)
        };
        d.$removeControl = function(a) {
            a.$name && d[a.$name] === a && delete d[a.$name];
            n(h, function(b, c) {
                d.$setValidity(c, !0, a)
            })
        };
        d.$setValidity = function(a, b, i) {
            var k = h[a];
            if (b) {
                if (k && (Ta(k, i), !k.length)) {
                    g--;
                    if (!g) c(b), d.$valid = !0, d.$invalid = !1;
                    h[a] = !1;
                    c(!0, a);
                    e.$setValidity(a, !0, d)
                }
            } else {
                g || c(b);
                if (k) {
                    if (Aa(k, i) != -1) return
                } else h[a] = k = [], g++, c(!1, a), e.$setValidity(a, !1, d);
                k.push(i);
                d.$valid = !1;
                d.$invalid = !0
            }
        };
        d.$setDirty = function() {
            b.removeClass(Oa).addClass(Yb);
            d.$dirty = !0;
            d.$pristine = !1;
            e.$setDirty()
        }
    }

    function T(b) {
        return w(b) || b === "" || b === null || b !== b
    }

    function Pa(b, a, c, d, e, g) {
        var h = function() {
                var c = O(a.val());
                d.$viewValue !== c && b.$apply(function() {
                    d.$setViewValue(c)
                })
            };
        if (e.hasEvent("input")) a.bind("input", h);
        else {
            var f;
            a.bind("keydown", function(a) {
                a = a.keyCode;
                a === 91 || 15 < a && a < 19 || 37 <= a && a <= 40 || f || (f = g.defer(function() {
                    h();
                    f = null
                }))
            });
            a.bind("change", h)
        }
        d.$render = function() {
            a.val(T(d.$viewValue) ? "" : d.$viewValue)
        };
        var j = c.ngPattern,
            i = function(a, b) {
                return T(b) || a.test(b) ? (d.$setValidity("pattern", !0), b) : (d.$setValidity("pattern", !1), q)
            };
        j && (j.match(/^\/(.*)\/$/) ? (j = RegExp(j.substr(1, j.length - 2)), e = function(a) {
            return i(j, a)
        }) : e = function(a) {
            var c = b.$eval(j);
            if (!c || !c.test) throw Error("Expected " + j + " to be a RegExp but was " + c);
            return i(c, a)
        }, d.$formatters.push(e), d.$parsers.push(e));
        if (c.ngMinlength) {
            var k = E(c.ngMinlength),
                e = function(a) {
                    return !T(a) && a.length < k ? (d.$setValidity("minlength", !1), q) : (d.$setValidity("minlength", !0), a)
                };
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
        if (c.ngMaxlength) {
            var m = E(c.ngMaxlength),
                c = function(a) {
                    return !T(a) && a.length > m ? (d.$setValidity("maxlength", !1), q) : (d.$setValidity("maxlength", !0), a)
                };
            d.$parsers.push(c);
            d.$formatters.push(c)
        }
    }

    function kb(b, a) {
        b = "ngClass" + b;
        return Q(function(c, d, e) {
            function g(b) {
                if (a === !0 || c.$index % 2 === a) j && b !== j && h(j), f(b);
                j = b
            }

            function h(a) {
                M(a) && !B(a) && (a = Sa(a, function(a, b) {
                    if (a) return b
                }));
                d.removeClass(B(a) ? a.join(" ") : a)
            }

            function f(a) {
                M(a) && !B(a) && (a = Sa(a, function(a, b) {
                    if (a) return b
                }));
                a && d.addClass(B(a) ? a.join(" ") : a)
            }
            var j = q;
            c.$watch(e[b], g, !0);
            e.$observe("class", function() {
                var a = c.$eval(e[b]);
                g(a, a)
            });
            b !== "ngClass" && c.$watch("$index", function(d, g) {
                var j = d % 2;
                j !== g % 2 && (j == a ? f(c.$eval(e[b])) : h(c.$eval(e[b])))
            })
        })
    }
    var y = function(b) {
            return A(b) ? b.toLowerCase() : b
        },
        ma = function(b) {
            return A(b) ? b.toUpperCase() : b
        },
        Z = E((/msie (\d+)/.exec(y(navigator.userAgent)) || [])[1]),
        u, ca, ha = [].slice,
        Qa = [].push,
        xa = Object.prototype.toString,
        Zb = X.angular || (X.angular = {}),
        ta, fb, aa = ["0", "0", "0"];
    C.$inject = [];
    na.$inject = [];
    fb = Z < 9 ?
    function(b) {
        b = b.nodeName ? b : b[0];
        return b.scopeName && b.scopeName != "HTML" ? ma(b.scopeName + ":" + b.nodeName) : b.nodeName
    } : function(b) {
        return b.nodeName ? b.nodeName : b[0].nodeName
    };
    var kc = /[A-Z]/g,
        id = {
            full: "1.0.5",
            major: 1,
            minor: 0,
            dot: 5,
            codeName: "flatulent-propulsion"
        },
        Ca = L.cache = {},
        Ba = L.expando = "ng-" + (new Date).getTime(),
        oc = 1,
        $b = X.document.addEventListener ?
    function(b, a, c) {
        b.addEventListener(a, c, !1)
    } : function(b, a, c) {
        b.attachEvent("on" + a, c)
    }, db = X.document.removeEventListener ?
    function(b, a, c) {
        b.removeEventListener(a, c, !1)
    } : function(b, a, c) {
        b.detachEvent("on" + a, c)
    }, mc = /([\:\-\_]+(.))/g, nc = /^moz([A-Z])/, va = L.prototype = {
        ready: function(b) {
            function a() {
                c || (c = !0, b())
            }
            var c = !1;
            this.bind("DOMContentLoaded", a);
            L(X).bind("load", a)
        },
        toString: function() {
            var b = [];
            n(this, function(a) {
                b.push("" + a)
            });
            return "[" + b.join(", ") + "]"
        },
        eq: function(b) {
            return b >= 0 ? u(this[b]) : u(this[this.length + b])
        },
        length: 0,
        push: Qa,
        sort: [].sort,
        splice: [].splice
    }, Fa = {};
    n("multiple,selected,checked,disabled,readOnly,required".split(","), function(b) {
        Fa[y(b)] = b
    });
    var Ab = {};
    n("input,select,option,textarea,button,form".split(","), function(b) {
        Ab[ma(b)] = !0
    });
    n({
        data: vb,
        inheritedData: Ea,
        scope: function(b) {
            return Ea(b, "$scope")
        },
        controller: yb,
        injector: function(b) {
            return Ea(b, "$injector")
        },
        removeAttr: function(b, a) {
            b.removeAttribute(a)
        },
        hasClass: Da,
        css: function(b, a, c) {
            a = sb(a);
            if (x(c)) b.style[a] = c;
            else {
                var d;
                Z <= 8 && (d = b.currentStyle && b.currentStyle[a], d === "" && (d = "auto"));
                d = d || b.style[a];
                Z <= 8 && (d = d === "" ? q : d);
                return d
            }
        },
        attr: function(b, a, c) {
            var d = y(a);
            if (Fa[d]) if (x(c)) c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d));
            else return b[a] || (b.attributes.getNamedItem(a) || C).specified ? d : q;
            else if (x(c)) b.setAttribute(a, c);
            else if (b.getAttribute) return b = b.getAttribute(a, 2), b === null ? q : b
        },
        prop: function(b, a, c) {
            if (x(c)) b[a] = c;
            else return b[a]
        },
        text: v(Z < 9 ?
        function(b, a) {
            if (b.nodeType == 1) {
                if (w(a)) return b.innerText;
                b.innerText = a
            } else {
                if (w(a)) return b.nodeValue;
                b.nodeValue = a
            }
        } : function(b, a) {
            if (w(a)) return b.textContent;
            b.textContent = a
        }, {
            $dv: ""
        }),
        val: function(b, a) {
            if (w(a)) return b.value;
            b.value = a
        },
        html: function(b, a) {
            if (w(a)) return b.innerHTML;
            for (var c = 0, d = b.childNodes; c < d.length; c++) sa(d[c]);
            b.innerHTML = a
        }
    }, function(b, a) {
        L.prototype[a] = function(a, d) {
            var e, g;
            if ((b.length == 2 && b !== Da && b !== yb ? a : d) === q) if (M(a)) {
                for (e = 0; e < this.length; e++) if (b === vb) b(this[e], a);
                else for (g in a) b(this[e], g, a[g]);
                return this
            } else {
                if (this.length) return b(this[0], a, d)
            } else {
                for (e = 0; e < this.length; e++) b(this[e], a, d);
                return this
            }
            return b.$dv
        }
    });
    n({
        removeData: tb,
        dealoc: sa,
        bind: function a(c, d, e) {
            var g = ba(c, "events"),
                h = ba(c, "handle");
            g || ba(c, "events", g = {});
            h || ba(c, "handle", h = pc(c, g));
            n(d.split(" "), function(d) {
                var j = g[d];
                if (!j) {
                    if (d == "mouseenter" || d == "mouseleave") {
                        var i = 0;
                        g.mouseenter = [];
                        g.mouseleave = [];
                        a(c, "mouseover", function(a) {
                            i++;
                            i == 1 && h(a, "mouseenter")
                        });
                        a(c, "mouseout", function(a) {
                            i--;
                            i == 0 && h(a, "mouseleave")
                        })
                    } else $b(c, d, h), g[d] = [];
                    j = g[d]
                }
                j.push(e)
            })
        },
        unbind: ub,
        replaceWith: function(a, c) {
            var d, e = a.parentNode;
            sa(a);
            n(new L(c), function(c) {
                d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
                d = c
            })
        },
        children: function(a) {
            var c = [];
            n(a.childNodes, function(a) {
                a.nodeType === 1 && c.push(a)
            });
            return c
        },
        contents: function(a) {
            return a.childNodes || []
        },
        append: function(a, c) {
            n(new L(c), function(c) {
                a.nodeType === 1 && a.appendChild(c)
            })
        },
        prepend: function(a, c) {
            if (a.nodeType === 1) {
                var d = a.firstChild;
                n(new L(c), function(c) {
                    d ? a.insertBefore(c, d) : (a.appendChild(c), d = c)
                })
            }
        },
        wrap: function(a, c) {
            var c = u(c)[0],
                d = a.parentNode;
            d && d.replaceChild(c, a);
            c.appendChild(a)
        },
        remove: function(a) {
            sa(a);
            var c = a.parentNode;
            c && c.removeChild(a)
        },
        after: function(a, c) {
            var d = a,
                e = a.parentNode;
            n(new L(c), function(a) {
                e.insertBefore(a, d.nextSibling);
                d = a
            })
        },
        addClass: xb,
        removeClass: wb,
        toggleClass: function(a, c, d) {
            w(d) && (d = !Da(a, c));
            (d ? xb : wb)(a, c)
        },
        parent: function(a) {
            return (a = a.parentNode) && a.nodeType !== 11 ? a : null
        },
        next: function(a) {
            if (a.nextElementSibling) return a.nextElementSibling;
            for (a = a.nextSibling; a != null && a.nodeType !== 1;) a = a.nextSibling;
            return a
        },
        find: function(a, c) {
            return a.getElementsByTagName(c)
        },
        clone: cb,
        triggerHandler: function(a, c) {
            var d = (ba(a, "events") || {})[c];
            n(d, function(c) {
                c.call(a, null)
            })
        }
    }, function(a, c) {
        L.prototype[c] = function(c, e) {
            for (var g, h = 0; h < this.length; h++) g == q ? (g = a(this[h], c, e), g !== q && (g = u(g))) : bb(g, a(this[h], c, e));
            return g == q ? this : g
        }
    });
    Ga.prototype = {
        put: function(a, c) {
            this[fa(a)] = c
        },
        get: function(a) {
            return this[fa(a)]
        },
        remove: function(a) {
            var c = this[a = fa(a)];
            delete this[a];
            return c
        }
    };
    eb.prototype = {
        push: function(a, c) {
            var d = this[a = fa(a)];
            d ? d.push(c) : this[a] = [c]
        },
        shift: function(a) {
            var c = this[a = fa(a)];
            if (c) return c.length == 1 ? (delete this[a], c[0]) : c.shift()
        },
        peek: function(a) {
            if (a = this[fa(a)]) return a[0]
        }
    };
    var rc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        sc = /,/,
        tc = /^\s*(_?)(\S+?)\1\s*$/,
        qc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,
        Db = "Non-assignable model expression: ";
    Cb.$inject = ["$provide"];
    var Ac = /^(x[\:\-_]|data[\:\-_])/i,
        Gb = /^([^:]+):\/\/(\w+:{0,1}\w*@)?([\w\.-]*)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/,
        ac = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/,
        Hc = ac,
        Hb = {
            http: 80,
            https: 443,
            ftp: 21
        };
    hb.prototype = {
        $$replace: !1,
        absUrl: Ia("$$absUrl"),
        url: function(a, c) {
            if (w(a)) return this.$$url;
            var d = ac.exec(a);
            d[1] && this.path(decodeURIComponent(d[1]));
            if (d[2] || d[1]) this.search(d[3] || "");
            this.hash(d[5] || "", c);
            return this
        },
        protocol: Ia("$$protocol"),
        host: Ia("$$host"),
        port: Ia("$$port"),
        path: Jb("$$path", function(a) {
            return a.charAt(0) == "/" ? a : "/" + a
        }),
        search: function(a, c) {
            if (w(a)) return this.$$search;
            x(c) ? c === null ? delete this.$$search[a] : this.$$search[a] = c : this.$$search = A(a) ? Wa(a) : a;
            this.$$compose();
            return this
        },
        hash: Jb("$$hash", na),
        replace: function() {
            this.$$replace = !0;
            return this
        }
    };
    Ha.prototype = za(hb.prototype);
    Ib.prototype = za(Ha.prototype);
    var Ja = {
        "null": function() {
            return null
        },
        "true": function() {
            return !0
        },
        "false": function() {
            return !1
        },
        undefined: C,
        "+": function(a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return x(d) ? x(e) ? d + e : d : x(e) ? e : q
        },
        "-": function(a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return (x(d) ? d : 0) - (x(e) ? e : 0)
        },
        "*": function(a, c, d, e) {
            return d(a, c) * e(a, c)
        },
        "/": function(a, c, d, e) {
            return d(a, c) / e(a, c)
        },
        "%": function(a, c, d, e) {
            return d(a, c) % e(a, c)
        },
        "^": function(a, c, d, e) {
            return d(a, c) ^ e(a, c)
        },
        "=": C,
        "==": function(a, c, d, e) {
            return d(a, c) == e(a, c)
        },
        "!=": function(a, c, d, e) {
            return d(a, c) != e(a, c)
        },
        "<": function(a, c, d, e) {
            return d(a, c) < e(a, c)
        },
        ">": function(a, c, d, e) {
            return d(a, c) > e(a, c)
        },
        "<=": function(a, c, d, e) {
            return d(a, c) <= e(a, c)
        },
        ">=": function(a, c, d, e) {
            return d(a, c) >= e(a, c)
        },
        "&&": function(a, c, d, e) {
            return d(a, c) && e(a, c)
        },
        "||": function(a, c, d, e) {
            return d(a, c) || e(a, c)
        },
        "&": function(a, c, d, e) {
            return d(a, c) & e(a, c)
        },
        "|": function(a, c, d, e) {
            return e(a, c)(a, c, d(a, c))
        },
        "!": function(a, c, d) {
            return !d(a, c)
        }
    },
        Lc = {
            n: "\n",
            f: "\u000c",
            r: "\r",
            t: "\t",
            v: "\u000b",
            "'": "'",
            '"': '"'
        },
        ib = {},
        Yc = X.XMLHttpRequest ||
    function() {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (a) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (c) {}
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (d) {}
        throw Error("This browser does not support XMLHttpRequest.");
    };
    Qb.$inject = ["$provide"];
    Rb.$inject = ["$locale"];
    Tb.$inject = ["$locale"];
    var Wb = ".",
        hd = {
            yyyy: N("FullYear", 4),
            yy: N("FullYear", 2, 0, !0),
            y: N("FullYear", 1),
            MMMM: Ka("Month"),
            MMM: Ka("Month", !0),
            MM: N("Month", 2, 1),
            M: N("Month", 1, 1),
            dd: N("Date", 2),
            d: N("Date", 1),
            HH: N("Hours", 2),
            H: N("Hours", 1),
            hh: N("Hours", 2, -12),
            h: N("Hours", 1, -12),
            mm: N("Minutes", 2),
            m: N("Minutes", 1),
            ss: N("Seconds", 2),
            s: N("Seconds", 1),
            EEEE: Ka("Day"),
            EEE: Ka("Day", !0),
            a: function(a, c) {
                return a.getHours() < 12 ? c.AMPMS[0] : c.AMPMS[1]
            },
            Z: function(a) {
                var a = -1 * a.getTimezoneOffset(),
                    c = a >= 0 ? "+" : "";
                c += jb(a / 60, 2) + jb(Math.abs(a % 60), 2);
                return c
            }
        },
        gd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,
        fd = /^\d+$/;
    Sb.$inject = ["$locale"];
    var dd = I(y),
        ed = I(ma);
    Ub.$inject = ["$parse"];
    var jd = I({
        restrict: "E",
        compile: function(a, c) {
            Z <= 8 && (!c.href && !c.name && c.$set("href", ""), a.append(Y.createComment("IE fix")));
            return function(a, c) {
                c.bind("click", function(a) {
                    c.attr("href") || a.preventDefault()
                })
            }
        }
    }),
        lb = {};
    n(Fa, function(a, c) {
        var d = ea("ng-" + c);
        lb[d] = function() {
            return {
                priority: 100,
                compile: function() {
                    return function(a, g, h) {
                        a.$watch(h[d], function(a) {
                            h.$set(c, !! a)
                        })
                    }
                }
            }
        }
    });
    n(["src", "href"], function(a) {
        var c = ea("ng-" + a);
        lb[c] = function() {
            return {
                priority: 99,
                link: function(d, e, g) {
                    g.$observe(c, function(c) {
                        c && (g.$set(a, c), Z && e.prop(a, g[a]))
                    })
                }
            }
        }
    });
    var Na = {
        $addControl: C,
        $removeControl: C,
        $setValidity: C,
        $setDirty: C
    };
    Xb.$inject = ["$element", "$attrs", "$scope"];
    var Qa = function(a) {
            return ["$timeout", function(c) {
                var d = {
                    name: "form",
                    restrict: "E",
                    controller: Xb,
                    compile: function() {
                        return {
                            pre: function(a, d, h, f) {
                                if (!h.action) {
                                    var j = function(a) {
                                            a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                        };
                                    $b(d[0], "submit", j);
                                    d.bind("$destroy", function() {
                                        c(function() {
                                            db(d[0], "submit", j)
                                        }, 0, !1)
                                    })
                                }
                                var i = d.parent().controller("form"),
                                    k = h.name || h.ngForm;
                                k && (a[k] = f);
                                i && d.bind("$destroy", function() {
                                    i.$removeControl(f);
                                    k && (a[k] = q);
                                    v(f, Na)
                                })
                            }
                        }
                    }
                };
                return a ? v(U(d), {
                    restrict: "EAC"
                }) : d
            }]
        },
        kd = Qa(),
        ld = Qa(!0),
        md = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        nd = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
        od = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
        bc = {
            text: Pa,
            number: function(a, c, d, e, g, h) {
                Pa(a, c, d, e, g, h);
                e.$parsers.push(function(a) {
                    var c = T(a);
                    return c || od.test(a) ? (e.$setValidity("number", !0), a === "" ? null : c ? a : parseFloat(a)) : (e.$setValidity("number", !1), q)
                });
                e.$formatters.push(function(a) {
                    return T(a) ? "" : "" + a
                });
                if (d.min) {
                    var f = parseFloat(d.min),
                        a = function(a) {
                            return !T(a) && a < f ? (e.$setValidity("min", !1), q) : (e.$setValidity("min", !0), a)
                        };
                    e.$parsers.push(a);
                    e.$formatters.push(a)
                }
                if (d.max) {
                    var j = parseFloat(d.max),
                        d = function(a) {
                            return !T(a) && a > j ? (e.$setValidity("max", !1), q) : (e.$setValidity("max", !0), a)
                        };
                    e.$parsers.push(d);
                    e.$formatters.push(d)
                }
                e.$formatters.push(function(a) {
                    return T(a) || Ra(a) ? (e.$setValidity("number", !0), a) : (e.$setValidity("number", !1), q)
                })
            },
            url: function(a, c, d, e, g, h) {
                Pa(a, c, d, e, g, h);
                a = function(a) {
                    return T(a) || md.test(a) ? (e.$setValidity("url", !0), a) : (e.$setValidity("url", !1), q)
                };
                e.$formatters.push(a);
                e.$parsers.push(a)
            },
            email: function(a, c, d, e, g, h) {
                Pa(a, c, d, e, g, h);
                a = function(a) {
                    return T(a) || nd.test(a) ? (e.$setValidity("email", !0), a) : (e.$setValidity("email", !1), q)
                };
                e.$formatters.push(a);
                e.$parsers.push(a)
            },
            radio: function(a, c, d, e) {
                w(d.name) && c.attr("name", ya());
                c.bind("click", function() {
                    c[0].checked && a.$apply(function() {
                        e.$setViewValue(d.value)
                    })
                });
                e.$render = function() {
                    c[0].checked = d.value == e.$viewValue
                };
                d.$observe("value", e.$render)
            },
            checkbox: function(a, c, d, e) {
                var g = d.ngTrueValue,
                    h = d.ngFalseValue;
                A(g) || (g = !0);
                A(h) || (h = !1);
                c.bind("click", function() {
                    a.$apply(function() {
                        e.$setViewValue(c[0].checked)
                    })
                });
                e.$render = function() {
                    c[0].checked = e.$viewValue
                };
                e.$formatters.push(function(a) {
                    return a === g
                });
                e.$parsers.push(function(a) {
                    return a ? g : h
                })
            },
            hidden: C,
            button: C,
            submit: C,
            reset: C
        },
        cc = ["$browser", "$sniffer", function(a, c) {
            return {
                restrict: "E",
                require: "?ngModel",
                link: function(d, e, g, h) {
                    h && (bc[y(g.type)] || bc.text)(d, e, g, h, c, a)
                }
            }
        }],
        Ma = "ng-valid",
        La = "ng-invalid",
        Oa = "ng-pristine",
        Yb = "ng-dirty",
        pd = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", function(a, c, d, e, g) {
            function h(a, c) {
                c = c ? "-" + Za(c, "-") : "";
                e.removeClass((a ? La : Ma) + c).addClass((a ? Ma : La) + c)
            }
            this.$modelValue = this.$viewValue = Number.NaN;
            this.$parsers = [];
            this.$formatters = [];
            this.$viewChangeListeners = [];
            this.$pristine = !0;
            this.$dirty = !1;
            this.$valid = !0;
            this.$invalid = !1;
            this.$name = d.name;
            var f = g(d.ngModel),
                j = f.assign;
            if (!j) throw Error(Db + d.ngModel + " (" + qa(e) + ")");
            this.$render = C;
            var i = e.inheritedData("$formController") || Na,
                k = 0,
                m = this.$error = {};
            e.addClass(Oa);
            h(!0);
            this.$setValidity = function(a, c) {
                if (m[a] !== !c) {
                    if (c) {
                        if (m[a] && k--, !k) h(!0), this.$valid = !0, this.$invalid = !1
                    } else h(!1), this.$invalid = !0, this.$valid = !1, k++;
                    m[a] = !c;
                    h(c, a);
                    i.$setValidity(a, c, this)
                }
            };
            this.$setViewValue = function(d) {
                this.$viewValue = d;
                if (this.$pristine) this.$dirty = !0, this.$pristine = !1, e.removeClass(Oa).addClass(Yb), i.$setDirty();
                n(this.$parsers, function(a) {
                    d = a(d)
                });
                if (this.$modelValue !== d) this.$modelValue = d, j(a, d), n(this.$viewChangeListeners, function(a) {
                    try {
                        a()
                    } catch (d) {
                        c(d)
                    }
                })
            };
            var l = this;
            a.$watch(function() {
                var c = f(a);
                if (l.$modelValue !== c) {
                    var d = l.$formatters,
                        e = d.length;
                    for (l.$modelValue = c; e--;) c = d[e](c);
                    if (l.$viewValue !== c) l.$viewValue = c, l.$render()
                }
            })
        }],
        qd = function() {
            return {
                require: ["ngModel", "^?form"],
                controller: pd,
                link: function(a, c, d, e) {
                    var g = e[0],
                        h = e[1] || Na;
                    h.$addControl(g);
                    c.bind("$destroy", function() {
                        h.$removeControl(g)
                    })
                }
            }
        },
        rd = I({
            require: "ngModel",
            link: function(a, c, d, e) {
                e.$viewChangeListeners.push(function() {
                    a.$eval(d.ngChange)
                })
            }
        }),
        dc = function() {
            return {
                require: "?ngModel",
                link: function(a, c, d, e) {
                    if (e) {
                        d.required = !0;
                        var g = function(a) {
                                if (d.required && (T(a) || a === !1)) e.$setValidity("required", !1);
                                else return e.$setValidity("required", !0), a
                            };
                        e.$formatters.push(g);
                        e.$parsers.unshift(g);
                        d.$observe("required", function() {
                            g(e.$viewValue)
                        })
                    }
                }
            }
        },
        sd = function() {
            return {
                require: "ngModel",
                link: function(a, c, d, e) {
                    var g = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
                    e.$parsers.push(function(a) {
                        var c = [];
                        a && n(a.split(g), function(a) {
                            a && c.push(O(a))
                        });
                        return c
                    });
                    e.$formatters.push(function(a) {
                        return B(a) ? a.join(", ") : q
                    })
                }
            }
        },
        td = /^(true|false|\d+)$/,
        ud = function() {
            return {
                priority: 100,
                compile: function(a, c) {
                    return td.test(c.ngValue) ?
                    function(a, c, g) {
                        g.$set("value", a.$eval(g.ngValue))
                    } : function(a, c, g) {
                        a.$watch(g.ngValue, function(a) {
                            g.$set("value", a, !1)
                        })
                    }
                }
            }
        },
        vd = Q(function(a, c, d) {
            c.addClass("ng-binding").data("$binding", d.ngBind);
            a.$watch(d.ngBind, function(a) {
                c.text(a == q ? "" : a)
            })
        }),
        wd = ["$interpolate", function(a) {
            return function(c, d, e) {
                c = a(d.attr(e.$attr.ngBindTemplate));
                d.addClass("ng-binding").data("$binding", c);
                e.$observe("ngBindTemplate", function(a) {
                    d.text(a)
                })
            }
        }],
        xd = [function() {
            return function(a, c, d) {
                c.addClass("ng-binding").data("$binding", d.ngBindHtmlUnsafe);
                a.$watch(d.ngBindHtmlUnsafe, function(a) {
                    c.html(a || "")
                })
            }
        }],
        yd = kb("", !0),
        zd = kb("Odd", 0),
        Ad = kb("Even", 1),
        Bd = Q({
            compile: function(a, c) {
                c.$set("ngCloak", q);
                a.removeClass("ng-cloak")
            }
        }),
        Cd = [function() {
            return {
                scope: !0,
                controller: "@"
            }
        }],
        Dd = ["$sniffer", function(a) {
            return {
                priority: 1E3,
                compile: function() {
                    a.csp = !0
                }
            }
        }],
        ec = {};
    n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave".split(" "), function(a) {
        var c = ea("ng-" + a);
        ec[c] = ["$parse", function(d) {
            return function(e, g, h) {
                var f = d(h[c]);
                g.bind(y(a), function(a) {
                    e.$apply(function() {
                        f(e, {
                            $event: a
                        })
                    })
                })
            }
        }]
    });
    var Ed = Q(function(a, c, d) {
        c.bind("submit", function() {
            a.$apply(d.ngSubmit)
        })
    }),
        Fd = ["$http", "$templateCache", "$anchorScroll", "$compile", function(a, c, d, e) {
            return {
                restrict: "ECA",
                terminal: !0,
                compile: function(g, h) {
                    var f = h.ngInclude || h.src,
                        j = h.onload || "",
                        i = h.autoscroll;
                    return function(g, h) {
                        var l = 0,
                            n, o = function() {
                                n && (n.$destroy(), n = null);
                                h.html("")
                            };
                        g.$watch(f, function(f) {
                            var s = ++l;
                            f ? a.get(f, {
                                cache: c
                            }).success(function(a) {
                                s === l && (n && n.$destroy(), n = g.$new(), h.html(a), e(h.contents())(n), x(i) && (!i || g.$eval(i)) && d(), n.$emit("$includeContentLoaded"), g.$eval(j))
                            }).error(function() {
                                s === l && o()
                            }) : o()
                        })
                    }
                }
            }
        }],
        Gd = Q({
            compile: function() {
                return {
                    pre: function(a, c, d) {
                        a.$eval(d.ngInit)
                    }
                }
            }
        }),
        Hd = Q({
            terminal: !0,
            priority: 1E3
        }),
        Id = ["$locale", "$interpolate", function(a, c) {
            var d = /{}/g;
            return {
                restrict: "EA",
                link: function(e, g, h) {
                    var f = h.count,
                        j = g.attr(h.$attr.when),
                        i = h.offset || 0,
                        k = e.$eval(j),
                        m = {},
                        l = c.startSymbol(),
                        t = c.endSymbol();
                    n(k, function(a, e) {
                        m[e] = c(a.replace(d, l + f + "-" + i + t))
                    });
                    e.$watch(function() {
                        var c = parseFloat(e.$eval(f));
                        return isNaN(c) ? "" : (k[c] || (c = a.pluralCat(c - i)), m[c](e, g, !0))
                    }, function(a) {
                        g.text(a)
                    })
                }
            }
        }],
        Jd = Q({
            transclude: "element",
            priority: 1E3,
            terminal: !0,
            compile: function(a, c, d) {
                return function(a, c, h) {
                    var f = h.ngRepeat,
                        h = f.match(/^\s*(.+)\s+in\s+(.*)\s*$/),
                        j, i, k;
                    if (!h) throw Error("Expected ngRepeat in form of '_item_ in _collection_' but got '" + f + "'.");
                    f = h[1];
                    j = h[2];
                    h = f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
                    if (!h) throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '" + f + "'.");
                    i = h[3] || h[1];
                    k = h[2];
                    var m = new eb;
                    a.$watch(function(a) {
                        var e, f, h = a.$eval(j),
                            n = c,
                            q = new eb,
                            x, z, u, w, r, v;
                        if (B(h)) r = h || [];
                        else {
                            r = [];
                            for (u in h) h.hasOwnProperty(u) && u.charAt(0) != "$" && r.push(u);
                            r.sort()
                        }
                        x = r.length;
                        e = 0;
                        for (f = r.length; e < f; e++) {
                            u = h === r ? e : r[e];
                            w = h[u];
                            if (v = m.shift(w)) {
                                z = v.scope;
                                q.push(w, v);
                                if (e !== v.index) v.index = e, n.after(v.element);
                                n = v.element
                            } else z = a.$new();
                            z[i] = w;
                            k && (z[k] = u);
                            z.$index = e;
                            z.$first = e === 0;
                            z.$last = e === x - 1;
                            z.$middle = !(z.$first || z.$last);
                            v || d(z, function(a) {
                                n.after(a);
                                v = {
                                    scope: z,
                                    element: n = a,
                                    index: e
                                };
                                q.push(w, v)
                            })
                        }
                        for (u in m) if (m.hasOwnProperty(u)) for (r = m[u]; r.length;) w = r.pop(), w.element.remove(), w.scope.$destroy();
                        m = q
                    })
                }
            }
        }),
        Kd = Q(function(a, c, d) {
            a.$watch(d.ngShow, function(a) {
                c.css("display", Va(a) ? "" : "none")
            })
        }),
        Ld = Q(function(a, c, d) {
            a.$watch(d.ngHide, function(a) {
                c.css("display", Va(a) ? "none" : "")
            })
        }),
        Md = Q(function(a, c, d) {
            a.$watch(d.ngStyle, function(a, d) {
                d && a !== d && n(d, function(a, d) {
                    c.css(d, "")
                });
                a && c.css(a)
            }, !0)
        }),
        Nd = I({
            restrict: "EA",
            require: "ngSwitch",
            controller: ["$scope", function() {
                this.cases = {}
            }],
            link: function(a, c, d, e) {
                var g, h, f;
                a.$watch(d.ngSwitch || d.on, function(j) {
                    h && (f.$destroy(), h.remove(), h = f = null);
                    if (g = e.cases["!" + j] || e.cases["?"]) a.$eval(d.change), f = a.$new(), g(f, function(a) {
                        h = a;
                        c.append(a)
                    })
                })
            }
        }),
        Od = Q({
            transclude: "element",
            priority: 500,
            require: "^ngSwitch",
            compile: function(a, c, d) {
                return function(a, g, h, f) {
                    f.cases["!" + c.ngSwitchWhen] = d
                }
            }
        }),
        Pd = Q({
            transclude: "element",
            priority: 500,
            require: "^ngSwitch",
            compile: function(a, c, d) {
                return function(a, c, h, f) {
                    f.cases["?"] = d
                }
            }
        }),
        Qd = Q({
            controller: ["$transclude", "$element", function(a, c) {
                a(function(a) {
                    c.append(a)
                })
            }]
        }),
        Rd = ["$http", "$templateCache", "$route", "$anchorScroll", "$compile", "$controller", function(a, c, d, e, g, h) {
            return {
                restrict: "ECA",
                terminal: !0,
                link: function(a, c, i) {
                    function k() {
                        var i = d.current && d.current.locals,
                            k = i && i.$template;
                        if (k) {
                            c.html(k);
                            m && (m.$destroy(), m = null);
                            var k = g(c.contents()),
                                n = d.current;
                            m = n.scope = a.$new();
                            if (n.controller) i.$scope = m, i = h(n.controller, i), c.children().data("$ngControllerController", i);
                            k(m);
                            m.$emit("$viewContentLoaded");
                            m.$eval(l);
                            e()
                        } else c.html(""), m && (m.$destroy(), m = null)
                    }
                    var m, l = i.onload || "";
                    a.$on("$routeChangeSuccess", k);
                    k()
                }
            }
        }],
        Sd = ["$templateCache", function(a) {
            return {
                restrict: "E",
                terminal: !0,
                compile: function(c, d) {
                    d.type == "text/ng-template" && a.put(d.id, c[0].text)
                }
            }
        }],
        Td = I({
            terminal: !0
        }),
        Ud = ["$compile", "$parse", function(a, c) {
            var d = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/,
                e = {
                    $setViewValue: C
                };
            return {
                restrict: "E",
                require: ["select", "?ngModel"],
                controller: ["$element", "$scope", "$attrs", function(a, c, d) {
                    var j = this,
                        i = {},
                        k = e,
                        m;
                    j.databound = d.ngModel;
                    j.init = function(a, c, d) {
                        k = a;
                        m = d
                    };
                    j.addOption = function(c) {
                        i[c] = !0;
                        k.$viewValue == c && (a.val(c), m.parent() && m.remove())
                    };
                    j.removeOption = function(a) {
                        this.hasOption(a) && (delete i[a], k.$viewValue == a && this.renderUnknownOption(a))
                    };
                    j.renderUnknownOption = function(c) {
                        c = "? " + fa(c) + " ?";
                        m.val(c);
                        a.prepend(m);
                        a.val(c);
                        m.prop("selected", !0)
                    };
                    j.hasOption = function(a) {
                        return i.hasOwnProperty(a)
                    };
                    c.$on("$destroy", function() {
                        j.renderUnknownOption = C
                    })
                }],
                link: function(e, h, f, j) {
                    function i(a, c, d, e) {
                        d.$render = function() {
                            var a = d.$viewValue;
                            e.hasOption(a) ? (y.parent() && y.remove(), c.val(a), a === "" && v.prop("selected", !0)) : w(a) && v ? c.val("") : e.renderUnknownOption(a)
                        };
                        c.bind("change", function() {
                            a.$apply(function() {
                                y.parent() && y.remove();
                                d.$setViewValue(c.val())
                            })
                        })
                    }

                    function k(a, c, d) {
                        var e;
                        d.$render = function() {
                            var a = new Ga(d.$viewValue);
                            n(c.find("option"), function(c) {
                                c.selected = x(a.get(c.value))
                            })
                        };
                        a.$watch(function() {
                            ga(e, d.$viewValue) || (e = U(d.$viewValue), d.$render())
                        });
                        c.bind("change", function() {
                            a.$apply(function() {
                                var a = [];
                                n(c.find("option"), function(c) {
                                    c.selected && a.push(c.value)
                                });
                                d.$setViewValue(a)
                            })
                        })
                    }

                    function m(e, f, g) {
                        function h() {
                            var a = {
                                "": []
                            },
                                c = [""],
                                d, i, p, u, v;
                            p = g.$modelValue;
                            u = t(e) || [];
                            var w = l ? mb(u) : u,
                                x, y, A;
                            y = {};
                            v = !1;
                            var B, E;
                            if (o) v = new Ga(p);
                            else if (p === null || s) a[""].push({
                                selected: p === null,
                                id: "",
                                label: ""
                            }), v = !0;
                            for (A = 0; x = w.length, A < x; A++) {
                                y[k] = u[l ? y[l] = w[A] : A];
                                d = m(e, y) || "";
                                if (!(i = a[d])) i = a[d] = [], c.push(d);
                                o ? d = v.remove(n(e, y)) != q : (d = p === n(e, y), v = v || d);
                                B = j(e, y);
                                B = B === q ? "" : B;
                                i.push({
                                    id: l ? w[A] : A,
                                    label: B,
                                    selected: d
                                })
                            }!o && !v && a[""].unshift({
                                id: "?",
                                label: "",
                                selected: !0
                            });
                            y = 0;
                            for (w = c.length; y < w; y++) {
                                d = c[y];
                                i = a[d];
                                if (r.length <= y) p = {
                                    element: z.clone().attr("label", d),
                                    label: i.label
                                }, u = [p], r.push(u), f.append(p.element);
                                else if (u = r[y], p = u[0], p.label != d) p.element.attr("label", p.label = d);
                                B = null;
                                A = 0;
                                for (x = i.length; A < x; A++) if (d = i[A], v = u[A + 1]) {
                                    B = v.element;
                                    if (v.label !== d.label) B.text(v.label = d.label);
                                    if (v.id !== d.id) B.val(v.id = d.id);
                                    if (v.element.selected !== d.selected) B.prop("selected", v.selected = d.selected)
                                } else d.id === "" && s ? E = s : (E = C.clone()).val(d.id).attr("selected", d.selected).text(d.label), u.push({
                                    element: E,
                                    label: d.label,
                                    id: d.id,
                                    selected: d.selected
                                }), B ? B.after(E) : p.element.append(E), B = E;
                                for (A++; u.length > A;) u.pop().element.remove()
                            }
                            for (; r.length > y;) r.pop()[0].element.remove()
                        }
                        var i;
                        if (!(i = p.match(d))) throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '" + p + "'.");
                        var j = c(i[2] || i[1]),
                            k = i[4] || i[6],
                            l = i[5],
                            m = c(i[3] || ""),
                            n = c(i[2] ? i[1] : k),
                            t = c(i[7]),
                            r = [
                                [{
                                    element: f,
                                    label: ""
                                }]
                            ];
                        s && (a(s)(e), s.removeClass("ng-scope"), s.remove());
                        f.html("");
                        f.bind("change", function() {
                            e.$apply(function() {
                                var a, c = t(e) || [],
                                    d = {},
                                    h, i, j, m, p, s;
                                if (o) {
                                    i = [];
                                    m = 0;
                                    for (s = r.length; m < s; m++) {
                                        a = r[m];
                                        j = 1;
                                        for (p = a.length; j < p; j++) if ((h = a[j].element)[0].selected) h = h.val(), l && (d[l] = h), d[k] = c[h], i.push(n(e, d))
                                    }
                                } else h = f.val(), h == "?" ? i = q : h == "" ? i = null : (d[k] = c[h], l && (d[l] = h), i = n(e, d));
                                g.$setViewValue(i)
                            })
                        });
                        g.$render = h;
                        e.$watch(h)
                    }
                    if (j[1]) {
                        for (var l = j[0], t = j[1], o = f.multiple, p = f.ngOptions, s = !1, v, C = u(Y.createElement("option")), z = u(Y.createElement("optgroup")), y = C.clone(), j = 0, A = h.children(), r = A.length; j < r; j++) if (A[j].value == "") {
                            v = s = A.eq(j);
                            break
                        }
                        l.init(t, s, y);
                        if (o && (f.required || f.ngRequired)) {
                            var B = function(a) {
                                    t.$setValidity("required", !f.required || a && a.length);
                                    return a
                                };
                            t.$parsers.push(B);
                            t.$formatters.unshift(B);
                            f.$observe("required", function() {
                                B(t.$viewValue)
                            })
                        }
                        p ? m(e, h, t) : o ? k(e, h, t) : i(e, h, t, l)
                    }
                }
            }
        }],
        Vd = ["$interpolate", function(a) {
            var c = {
                addOption: C,
                removeOption: C
            };
            return {
                restrict: "E",
                priority: 100,
                compile: function(d, e) {
                    if (w(e.value)) {
                        var g = a(d.text(), !0);
                        g || e.$set("value", d.text())
                    }
                    return function(a, d, e) {
                        var i = d.parent(),
                            k = i.data("$selectController") || i.parent().data("$selectController");
                        k && k.databound ? d.prop("selected", !1) : k = c;
                        g ? a.$watch(g, function(a, c) {
                            e.$set("value", a);
                            a !== c && k.removeOption(c);
                            k.addOption(a)
                        }) : k.addOption(e.value);
                        d.bind("$destroy", function() {
                            k.removeOption(e.value)
                        })
                    }
                }
            }
        }],
        Wd = I({
            restrict: "E",
            terminal: !0
        });
    (ca = X.jQuery) ? (u = ca, v(ca.fn, {
        scope: va.scope,
        controller: va.controller,
        injector: va.injector,
        inheritedData: va.inheritedData
    }), ab("remove", !0), ab("empty"), ab("html")) : u = L;
    Zb.element = u;
    (function(a) {
        v(a, {
            bootstrap: qb,
            copy: U,
            extend: v,
            equals: ga,
            element: u,
            forEach: n,
            injector: rb,
            noop: C,
            bind: Ua,
            toJson: da,
            fromJson: ob,
            identity: na,
            isUndefined: w,
            isDefined: x,
            isString: A,
            isFunction: H,
            isObject: M,
            isNumber: Ra,
            isElement: gc,
            isArray: B,
            version: id,
            isDate: oa,
            lowercase: y,
            uppercase: ma,
            callbacks: {
                counter: 0
            }
        });
        ta = lc(X);
        try {
            ta("ngLocale")
        } catch (c) {
            ta("ngLocale", []).provider("$locale", Zc)
        }
        ta("ng", ["ngLocale"], ["$provide", function(a) {
            a.provider("$compile", Cb).directive({
                a: jd,
                input: cc,
                textarea: cc,
                form: kd,
                script: Sd,
                select: Ud,
                style: Wd,
                option: Vd,
                ngBind: vd,
                ngBindHtmlUnsafe: xd,
                ngBindTemplate: wd,
                ngClass: yd,
                ngClassEven: Ad,
                ngClassOdd: zd,
                ngCsp: Dd,
                ngCloak: Bd,
                ngController: Cd,
                ngForm: ld,
                ngHide: Ld,
                ngInclude: Fd,
                ngInit: Gd,
                ngNonBindable: Hd,
                ngPluralize: Id,
                ngRepeat: Jd,
                ngShow: Kd,
                ngSubmit: Ed,
                ngStyle: Md,
                ngSwitch: Nd,
                ngSwitchWhen: Od,
                ngSwitchDefault: Pd,
                ngOptions: Td,
                ngView: Rd,
                ngTransclude: Qd,
                ngModel: qd,
                ngList: sd,
                ngChange: rd,
                required: dc,
                ngRequired: dc,
                ngValue: ud
            }).directive(lb).directive(ec);
            a.provider({
                $anchorScroll: uc,
                $browser: wc,
                $cacheFactory: xc,
                $controller: Bc,
                $document: Cc,
                $exceptionHandler: Dc,
                $filter: Qb,
                $interpolate: Ec,
                $http: Vc,
                $httpBackend: Wc,
                $location: Ic,
                $log: Jc,
                $parse: Nc,
                $route: Qc,
                $routeParams: Rc,
                $rootScope: Sc,
                $q: Oc,
                $sniffer: Tc,
                $templateCache: yc,
                $timeout: $c,
                $window: Uc
            })
        }])
    })(Zb);
    u(Y).ready(function() {
        jc(Y, qb)
    })
})(window, document);
angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');

/*
 * UNDERSCORE
 */

(function() {
    var n = this,
        t = n._,
        r = {},
        e = Array.prototype,
        u = Object.prototype,
        i = Function.prototype,
        a = e.push,
        o = e.slice,
        c = e.concat,
        l = u.toString,
        f = u.hasOwnProperty,
        s = e.forEach,
        p = e.map,
        h = e.reduce,
        v = e.reduceRight,
        d = e.filter,
        g = e.every,
        m = e.some,
        y = e.indexOf,
        b = e.lastIndexOf,
        x = Array.isArray,
        _ = Object.keys,
        j = i.bind,
        w = function(n) {
            return n instanceof w ? n : this instanceof w ? (this._wrapped = n, void 0) : new w(n)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = w), exports._ = w) : n._ = w, w.VERSION = "1.4.4";
    var A = w.each = w.forEach = function(n, t, e) {
            if (null != n) if (s && n.forEach === s) n.forEach(t, e);
            else if (n.length === +n.length) {
                for (var u = 0, i = n.length; i > u; u++) if (t.call(e, n[u], u, n) === r) return
            } else for (var a in n) if (w.has(n, a) && t.call(e, n[a], a, n) === r) return
        };
    w.map = w.collect = function(n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) {
            e[e.length] = t.call(r, n, u, i)
        }), e)
    };
    var O = "Reduce of empty array with no initial value";
    w.reduce = w.foldl = w.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduce === h) return e && (t = w.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
        if (A(n, function(n, i, a) {
            u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
        }), !u) throw new TypeError(O);
        return r
    }, w.reduceRight = w.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduceRight === v) return e && (t = w.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i !== +i) {
            var a = w.keys(n);
            i = a.length
        }
        if (A(n, function(o, c, l) {
            c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
        }), !u) throw new TypeError(O);
        return r
    }, w.find = w.detect = function(n, t, r) {
        var e;
        return E(n, function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }), e
    }, w.filter = w.select = function(n, t, r) {
        var e = [];
        return null == n ? e : d && n.filter === d ? n.filter(t, r) : (A(n, function(n, u, i) {
            t.call(r, n, u, i) && (e[e.length] = n)
        }), e)
    }, w.reject = function(n, t, r) {
        return w.filter(n, function(n, e, u) {
            return !t.call(r, n, e, u)
        }, r)
    }, w.every = w.all = function(n, t, e) {
        t || (t = w.identity);
        var u = !0;
        return null == n ? u : g && n.every === g ? n.every(t, e) : (A(n, function(n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r
        }), !! u)
    };
    var E = w.some = w.any = function(n, t, e) {
            t || (t = w.identity);
            var u = !1;
            return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) {
                return u || (u = t.call(e, n, i, a)) ? r : void 0
            }), !! u)
        };
    w.contains = w.include = function(n, t) {
        return null == n ? !1 : y && n.indexOf === y ? n.indexOf(t) != -1 : E(n, function(n) {
            return n === t
        })
    }, w.invoke = function(n, t) {
        var r = o.call(arguments, 2),
            e = w.isFunction(t);
        return w.map(n, function(n) {
            return (e ? t : n[t]).apply(n, r)
        })
    }, w.pluck = function(n, t) {
        return w.map(n, function(n) {
            return n[t]
        })
    }, w.where = function(n, t, r) {
        return w.isEmpty(t) ? r ? null : [] : w[r ? "find" : "filter"](n, function(n) {
            for (var r in t) if (t[r] !== n[r]) return !1;
            return !0
        })
    }, w.findWhere = function(n, t) {
        return w.where(n, t, !0)
    }, w.max = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length) return Math.max.apply(Math, n);
        if (!t && w.isEmpty(n)) return -1 / 0;
        var e = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a >= e.computed && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, w.min = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length) return Math.min.apply(Math, n);
        if (!t && w.isEmpty(n)) return 1 / 0;
        var e = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            e.computed > a && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, w.shuffle = function(n) {
        var t, r = 0,
            e = [];
        return A(n, function(n) {
            t = w.random(r++), e[r - 1] = e[t], e[t] = n
        }), e
    };
    var k = function(n) {
            return w.isFunction(n) ? n : function(t) {
                return t[n]
            }
        };
    w.sortBy = function(n, t, r) {
        var e = k(t);
        return w.pluck(w.map(n, function(n, t, u) {
            return {
                value: n,
                index: t,
                criteria: e.call(r, n, t, u)
            }
        }).sort(function(n, t) {
            var r = n.criteria,
                e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0) return 1;
                if (e > r || e === void 0) return -1
            }
            return n.index < t.index ? -1 : 1
        }), "value")
    };
    var F = function(n, t, r, e) {
            var u = {},
                i = k(t || w.identity);
            return A(n, function(t, a) {
                var o = i.call(r, t, a, n);
                e(u, o, t)
            }), u
        };
    w.groupBy = function(n, t, r) {
        return F(n, t, r, function(n, t, r) {
            (w.has(n, t) ? n[t] : n[t] = []).push(r)
        })
    }, w.countBy = function(n, t, r) {
        return F(n, t, r, function(n, t) {
            w.has(n, t) || (n[t] = 0), n[t]++
        })
    }, w.sortedIndex = function(n, t, r, e) {
        r = null == r ? w.identity : k(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
            var o = i + a >>> 1;
            u > r.call(e, n[o]) ? i = o + 1 : a = o
        }
        return i
    }, w.toArray = function(n) {
        return n ? w.isArray(n) ? o.call(n) : n.length === +n.length ? w.map(n, w.identity) : w.values(n) : []
    }, w.size = function(n) {
        return null == n ? 0 : n.length === +n.length ? n.length : w.keys(n).length
    }, w.first = w.head = w.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
    }, w.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    }, w.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
    }, w.rest = w.tail = w.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    }, w.compact = function(n) {
        return w.filter(n, w.identity)
    };
    var R = function(n, t, r) {
            return A(n, function(n) {
                w.isArray(n) ? t ? a.apply(r, n) : R(n, t, r) : r.push(n)
            }), r
        };
    w.flatten = function(n, t) {
        return R(n, t, [])
    }, w.without = function(n) {
        return w.difference(n, o.call(arguments, 1))
    }, w.uniq = w.unique = function(n, t, r, e) {
        w.isFunction(t) && (e = r, r = t, t = !1);
        var u = r ? w.map(n, r, e) : n,
            i = [],
            a = [];
        return A(u, function(r, e) {
            (t ? e && a[a.length - 1] === r : w.contains(a, r)) || (a.push(r), i.push(n[e]))
        }), i
    }, w.union = function() {
        return w.uniq(c.apply(e, arguments))
    }, w.intersection = function(n) {
        var t = o.call(arguments, 1);
        return w.filter(w.uniq(n), function(n) {
            return w.every(t, function(t) {
                return w.indexOf(t, n) >= 0
            })
        })
    }, w.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return w.filter(n, function(n) {
            return !w.contains(t, n)
        })
    }, w.zip = function() {
        for (var n = o.call(arguments), t = w.max(w.pluck(n, "length")), r = Array(t), e = 0; t > e; e++) r[e] = w.pluck(n, "" + e);
        return r
    }, w.object = function(n, t) {
        if (null == n) return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, w.indexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = 0,
            u = n.length;
        if (r) {
            if ("number" != typeof r) return e = w.sortedIndex(n, t), n[e] === t ? e : -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if (y && n.indexOf === y) return n.indexOf(t, r);
        for (; u > e; e++) if (n[e] === t) return e;
        return -1
    }, w.lastIndexOf = function(n, t, r) {
        if (null == n) return -1;
        var e = null != r;
        if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r : n.length; u--;) if (n[u] === t) return u;
        return -1
    }, w.range = function(n, t, r) {
        1 >= arguments.length && (t = n || 0, n = 0), r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = Array(e); e > u;) i[u++] = n, n += r;
        return i
    }, w.bind = function(n, t) {
        if (n.bind === j && j) return j.apply(n, o.call(arguments, 1));
        var r = o.call(arguments, 2);
        return function() {
            return n.apply(t, r.concat(o.call(arguments)))
        }
    }, w.partial = function(n) {
        var t = o.call(arguments, 1);
        return function() {
            return n.apply(this, t.concat(o.call(arguments)))
        }
    }, w.bindAll = function(n) {
        var t = o.call(arguments, 1);
        return 0 === t.length && (t = w.functions(n)), A(t, function(t) {
            n[t] = w.bind(n[t], n)
        }), n
    }, w.memoize = function(n, t) {
        var r = {};
        return t || (t = w.identity), function() {
            var e = t.apply(this, arguments);
            return w.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
        }
    }, w.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }, w.defer = function(n) {
        return w.delay.apply(w, [n, 1].concat(o.call(arguments, 1)))
    }, w.throttle = function(n, t) {
        var r, e, u, i, a = 0,
            o = function() {
                a = new Date, u = null, i = n.apply(r, e)
            };
        return function() {
            var c = new Date,
                l = t - (c - a);
            return r = this, e = arguments, 0 >= l ? (clearTimeout(u), u = null, a = c, i = n.apply(r, e)) : u || (u = setTimeout(o, l)), i
        }
    }, w.debounce = function(n, t, r) {
        var e, u;
        return function() {
            var i = this,
                a = arguments,
                o = function() {
                    e = null, r || (u = n.apply(i, a))
                },
                c = r && !e;
            return clearTimeout(e), e = setTimeout(o, t), c && (u = n.apply(i, a)), u
        }
    }, w.once = function(n) {
        var t, r = !1;
        return function() {
            return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
        }
    }, w.wrap = function(n, t) {
        return function() {
            var r = [n];
            return a.apply(r, arguments), t.apply(this, r)
        }
    }, w.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)];
            return t[0]
        }
    }, w.after = function(n, t) {
        return 0 >= n ? t() : function() {
            return 1 > --n ? t.apply(this, arguments) : void 0
        }
    }, w.keys = _ ||
    function(n) {
        if (n !== Object(n)) throw new TypeError("Invalid object");
        var t = [];
        for (var r in n) w.has(n, r) && (t[t.length] = r);
        return t
    }, w.values = function(n) {
        var t = [];
        for (var r in n) w.has(n, r) && t.push(n[r]);
        return t
    }, w.pairs = function(n) {
        var t = [];
        for (var r in n) w.has(n, r) && t.push([r, n[r]]);
        return t
    }, w.invert = function(n) {
        var t = {};
        for (var r in n) w.has(n, r) && (t[n[r]] = r);
        return t
    }, w.functions = w.methods = function(n) {
        var t = [];
        for (var r in n) w.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, w.extend = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t) for (var r in t) n[r] = t[r]
        }), n
    }, w.pick = function(n) {
        var t = {},
            r = c.apply(e, o.call(arguments, 1));
        return A(r, function(r) {
            r in n && (t[r] = n[r])
        }), t
    }, w.omit = function(n) {
        var t = {},
            r = c.apply(e, o.call(arguments, 1));
        for (var u in n) w.contains(r, u) || (t[u] = n[u]);
        return t
    }, w.defaults = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t) for (var r in t) null == n[r] && (n[r] = t[r])
        }), n
    }, w.clone = function(n) {
        return w.isObject(n) ? w.isArray(n) ? n.slice() : w.extend({}, n) : n
    }, w.tap = function(n, t) {
        return t(n), n
    };
    var I = function(n, t, r, e) {
            if (n === t) return 0 !== n || 1 / n == 1 / t;
            if (null == n || null == t) return n === t;
            n instanceof w && (n = n._wrapped), t instanceof w && (t = t._wrapped);
            var u = l.call(n);
            if (u != l.call(t)) return !1;
            switch (u) {
            case "[object String]":
                return n == t + "";
            case "[object Number]":
                return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +n == +t;
            case "[object RegExp]":
                return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
            }
            if ("object" != typeof n || "object" != typeof t) return !1;
            for (var i = r.length; i--;) if (r[i] == n) return e[i] == t;
            r.push(n), e.push(t);
            var a = 0,
                o = !0;
            if ("[object Array]" == u) {
                if (a = n.length, o = a == t.length) for (; a-- && (o = I(n[a], t[a], r, e)););
            } else {
                var c = n.constructor,
                    f = t.constructor;
                if (c !== f && !(w.isFunction(c) && c instanceof c && w.isFunction(f) && f instanceof f)) return !1;
                for (var s in n) if (w.has(n, s) && (a++, !(o = w.has(t, s) && I(n[s], t[s], r, e)))) break;
                if (o) {
                    for (s in t) if (w.has(t, s) && !a--) break;
                    o = !a
                }
            }
            return r.pop(), e.pop(), o
        };
    w.isEqual = function(n, t) {
        return I(n, t, [], [])
    }, w.isEmpty = function(n) {
        if (null == n) return !0;
        if (w.isArray(n) || w.isString(n)) return 0 === n.length;
        for (var t in n) if (w.has(n, t)) return !1;
        return !0
    }, w.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }, w.isArray = x ||
    function(n) {
        return "[object Array]" == l.call(n)
    }, w.isObject = function(n) {
        return n === Object(n)
    }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
        w["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]"
        }
    }), w.isArguments(arguments) || (w.isArguments = function(n) {
        return !(!n || !w.has(n, "callee"))
    }), "function" != typeof / . / && (w.isFunction = function(n) {
        return "function" == typeof n
    }), w.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }, w.isNaN = function(n) {
        return w.isNumber(n) && n != +n
    }, w.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
    }, w.isNull = function(n) {
        return null === n
    }, w.isUndefined = function(n) {
        return n === void 0
    }, w.has = function(n, t) {
        return f.call(n, t)
    }, w.noConflict = function() {
        return n._ = t, this
    }, w.identity = function(n) {
        return n
    }, w.times = function(n, t, r) {
        for (var e = Array(n), u = 0; n > u; u++) e[u] = t.call(r, u);
        return e
    }, w.random = function(n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
    };
    var M = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    M.unescape = w.invert(M.escape);
    var S = {
        escape: RegExp("[" + w.keys(M.escape).join("") + "]", "g"),
        unescape: RegExp("(" + w.keys(M.unescape).join("|") + ")", "g")
    };
    w.each(["escape", "unescape"], function(n) {
        w[n] = function(t) {
            return null == t ? "" : ("" + t).replace(S[n], function(t) {
                return M[n][t]
            })
        }
    }), w.result = function(n, t) {
        if (null == n) return null;
        var r = n[t];
        return w.isFunction(r) ? r.call(n) : r
    }, w.mixin = function(n) {
        A(w.functions(n), function(t) {
            var r = w[t] = n[t];
            w.prototype[t] = function() {
                var n = [this._wrapped];
                return a.apply(n, arguments), D.call(this, r.apply(w, n))
            }
        })
    };
    var N = 0;
    w.uniqueId = function(n) {
        var t = ++N + "";
        return n ? n + t : t
    }, w.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var T = /(.)^/,
        q = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        B = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    w.template = function(n, t, r) {
        var e;
        r = w.defaults({}, r, w.templateSettings);
        var u = RegExp([(r.escape || T).source, (r.interpolate || T).source, (r.evaluate || T).source].join("|") + "|$", "g"),
            i = 0,
            a = "__p+='";
        n.replace(u, function(t, r, e, u, o) {
            return a += n.slice(i, o).replace(B, function(n) {
                return "\\" + q[n]
            }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t
        }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            e = Function(r.variable || "obj", "_", a)
        } catch (o) {
            throw o.source = a, o
        }
        if (t) return e(t, w);
        var c = function(n) {
                return e.call(this, n, w)
            };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c
    }, w.chain = function(n) {
        return w(n).chain()
    };
    var D = function(n) {
            return this._chain ? w(n).chain() : n
        };
    w.mixin(w), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], D.call(this, r)
        }
    }), A(["concat", "join", "slice"], function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            return D.call(this, t.apply(this._wrapped, arguments))
        }
    }), w.extend(w.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}).call(this);


initSorter(angular, _);